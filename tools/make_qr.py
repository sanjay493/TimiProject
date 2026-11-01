"""
Makes one QR code image per monument, plus one for the home page.

The web address comes from SITE_URL in js/config.js.
Images are saved to qr/<id>.png and qr/home.png.
Print them with qr-sheet.html (open it in a browser, then Print).

Run from the project folder:   python tools/make_qr.py
Needs:                         pip install "qrcode[pil]"
"""
import re
from pathlib import Path

import qrcode

ROOT = Path(__file__).resolve().parent.parent
QR_DIR = ROOT / "qr"


def site_url():
    text = (ROOT / "js" / "config.js").read_text(encoding="utf-8")
    url = re.search(r'SITE_URL\s*=\s*"([^"]+)"', text).group(1)
    return url if url.endswith("/") else url + "/"


def monument_ids():
    text = (ROOT / "js" / "data.js").read_text(encoding="utf-8")
    return re.findall(r'^\s*id:\s*"([^"]+)"', text, re.M)


def make(url, out):
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=12, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    qr.make_image(fill_color="black", back_color="white").save(out)


def main():
    base = site_url()
    QR_DIR.mkdir(exist_ok=True)
    make(base, QR_DIR / "home.png")
    ids = monument_ids()
    for mid in ids:
        make(f"{base}monument.html?id={mid}", QR_DIR / f"{mid}.png")
    print(f"Made {len(ids) + 1} QR codes for {base}")


if __name__ == "__main__":
    main()
