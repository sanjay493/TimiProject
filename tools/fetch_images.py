"""
Downloads one freely licensed photo per monument from Wikimedia Commons.

For each monument in js/data.js it:
  1. uses the "image" file if given, otherwise asks Wikipedia for the
     main (free) image of the "wiki" page,
  2. checks the image's licence on Wikimedia Commons,
  3. saves a 960px-wide copy to images/<id>.jpg (or .png),
  4. records the photographer and licence in js/image-credits.js.

Run from the project folder:   python tools/fetch_images.py
Use --force to re-download images that already exist.
"""
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "js" / "data.js"
IMG_DIR = ROOT / "images"
CREDITS = ROOT / "js" / "image-credits.js"
WIDTH = 960  # a standard Wikimedia thumbnail size
HEADERS = {"User-Agent": "IndiaMonumentsSchoolProject/1.0 (educational static site)"}
FREE = ("cc", "public domain", "pd", "gfdl", "attribution", "fal", "free art")


def fetch(url, timeout=60):
    """GET a URL, waiting and retrying if Wikimedia says 'too many requests'."""
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == 4:
                raise
            wait = int(e.headers.get("Retry-After") or 0) or 5 * (attempt + 1)
            print(f"     busy, waiting {wait}s...")
            time.sleep(wait)


def shrink(path):
    """Save as a compressed JPEG (smaller = faster on phones). Needs Pillow."""
    from PIL import Image
    img = Image.open(path).convert("RGB")
    img.thumbnail((WIDTH, WIDTH))
    jpg = path.with_suffix(".jpg")
    img.save(jpg, "JPEG", quality=78, optimize=True, progressive=True)
    # small copy for the cards on the home page
    (IMG_DIR / "thumbs").mkdir(exist_ok=True)
    img.thumbnail((480, 480))
    img.save(IMG_DIR / "thumbs" / jpg.name, "JPEG", quality=72, optimize=True, progressive=True)
    if path != jpg:
        path.unlink()
    return jpg


def get_json(url, params):
    url = url + "?" + urllib.parse.urlencode({**params, "format": "json", "formatversion": 2})
    return json.loads(fetch(url, timeout=30))


def strip_html(s):
    return re.sub(r"\s+", " ", unescape(re.sub(r"<[^>]+>", "", s or ""))).strip()


def load_monuments():
    """Return (id, wiki title, optional Commons file name) for each monument."""
    text = DATA.read_text(encoding="utf-8")
    out = []
    for block in re.split(r'(?=\n\s*id:\s*")', text)[1:]:
        field = lambda k: (re.search(k + r':\s*"([^"]*)"', block) or [None, None])[1]
        out.append((field("id"), field("wiki"), field("image")))
    return out


def page_image(title):
    d = get_json("https://en.wikipedia.org/w/api.php", {
        "action": "query", "prop": "pageimages", "piprop": "name",
        "titles": title, "redirects": 1})
    pages = d["query"]["pages"]
    return pages[0].get("pageimage") if pages else None


def commons_info(filename):
    d = get_json("https://commons.wikimedia.org/w/api.php", {
        "action": "query", "prop": "imageinfo", "titles": "File:" + filename,
        "iiprop": "url|extmetadata", "iiurlwidth": WIDTH})
    page = d["query"]["pages"][0]
    if page.get("missing") or "imageinfo" not in page:
        return None
    return page["imageinfo"][0]


def main():
    force = "--force" in sys.argv
    IMG_DIR.mkdir(exist_ok=True)
    old = {}
    if CREDITS.exists():
        m = re.search(r"=\s*(\{.*\});", CREDITS.read_text(encoding="utf-8"), re.S)
        if m:
            old = json.loads(m.group(1))

    credits, problems = {}, []
    for mid, title, chosen in load_monuments():
        chosen_changed = chosen and mid in old and chosen.replace(" ", "_") not in old[mid]["page"]
        if not force and not chosen_changed and mid in old and (ROOT / old[mid]["file"]).exists():
            credits[mid] = old[mid]
            continue
        try:
            fname = chosen or page_image(title)
            info = commons_info(fname) if fname else None
            if not info:
                problems.append(f"{mid}: no free Commons image found for '{title}'")
                continue
            meta = info.get("extmetadata", {})
            lic = strip_html(meta.get("LicenseShortName", {}).get("value", ""))
            if not any(k in lic.lower() for k in FREE):
                problems.append(f"{mid}: licence '{lic}' not free, skipped")
                continue
            src = info.get("thumburl") or info["url"]
            ext = ".png" if src.lower().endswith(".png") else ".jpg"
            out = IMG_DIR / (mid + ext)
            out.write_bytes(fetch(src))
            out, ext = shrink(out), ".jpg"
            credits[mid] = {
                "file": f"images/{mid}{ext}",
                "page": info["descriptionurl"],
                "artist": strip_html(meta.get("Artist", {}).get("value", "")) or "Unknown",
                "license": lic,
                "licenseUrl": meta.get("LicenseUrl", {}).get("value", ""),
            }
            print(f"ok   {mid}  ({lic})")
            time.sleep(2)  # be polite to Wikimedia servers
        except Exception as e:  # keep going; report at the end
            problems.append(f"{mid}: {e}")

    CREDITS.write_text(
        "// Generated by tools/fetch_images.py — photo credits from Wikimedia Commons.\n"
        "const IMAGE_CREDITS = " + json.dumps(credits, indent=2, ensure_ascii=False) + ";\n",
        encoding="utf-8")
    print(f"\n{len(credits)} images ready.")
    if problems:
        print("Problems:\n  " + "\n  ".join(problems))
        sys.exit(1)


if __name__ == "__main__":
    main()
