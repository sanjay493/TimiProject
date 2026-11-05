"""
Makes monument-qr-cards-a4.pdf: every monument's photo with its QR code,
three monuments on each A4 page, ready to print.

Run after make_qr.py, from the project folder:   python tools/make_pdf.py
Needs:                                           pip install reportlab pillow
"""
import json
import re
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader, simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "monument-qr-cards-a4.pdf"

ACCENT, GOLD, TEAL = HexColor("#8e1b2b"), HexColor("#d4a23c"), HexColor("#13837a")
PARCHMENT, GREY = HexColor("#fdf4e1"), HexColor("#555555")

PER_PAGE = 3
MARGIN, GAP, PAD = 10 * mm, 5 * mm, 4.5 * mm
CREDIT_H = 4.5 * mm
PHOTO_W, QR_SIZE = 116 * mm, 52 * mm
MAX_CROP = 0.15  # crop a photo to fill its frame only if this loses under 15%


def fonts():
    """Use Georgia if this computer has it (it gets embedded), otherwise Times."""
    win = Path("C:/Windows/Fonts")
    if (win / "georgia.ttf").exists() and (win / "georgiab.ttf").exists():
        pdfmetrics.registerFont(TTFont("Card", str(win / "georgia.ttf")))
        pdfmetrics.registerFont(TTFont("Card-Bold", str(win / "georgiab.ttf")))
        return "Card", "Card-Bold"
    return "Times-Roman", "Times-Bold"


def monuments():
    text = (ROOT / "js" / "data.js").read_text(encoding="utf-8")
    return [{"id": a, "name": b, "state": c} for a, b, c in re.findall(
        r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*state:\s*"([^"]+)"', text)]


def photo_credits():
    text = (ROOT / "js" / "image-credits.js").read_text(encoding="utf-8")
    return json.loads(re.search(r"=\s*(\{.*\});", text, re.S).group(1))


def draw_photo(c, path, x, y, w, h):
    """Fill the frame if only a little is cropped; otherwise show the whole photo."""
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    cover = max(w / iw, h / ih)
    lost = 1 - (w * h) / (iw * ih * cover * cover)
    scale = cover if lost <= MAX_CROP else min(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    c.saveState()
    frame = c.beginPath()
    frame.roundRect(x, y, w, h, 2 * mm)
    c.clipPath(frame, stroke=0, fill=0)
    c.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh)
    c.restoreState()


def fit_line(text, font, size, width):
    if pdfmetrics.stringWidth(text, font, size) <= width:
        return text
    while text and pdfmetrics.stringWidth(text + "...", font, size) > width:
        text = text[:-1]
    return text.rstrip() + "..."


def centred(c, lines, cx, y, font, size, colour, leading):
    c.setFont(font, size)
    c.setFillColor(colour)
    for line in lines:
        c.drawCentredString(cx, y, line)
        y -= leading
    return y


def draw_card(c, m, credit, x, y, w, h, regular, bold):
    c.setFillColor(PARCHMENT)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.4)
    c.roundRect(x, y, w, h, 3 * mm, stroke=1, fill=1)

    photo_h = h - 2 * PAD - CREDIT_H
    photo_y = y + PAD + CREDIT_H
    draw_photo(c, ROOT / "images" / f"{m['id']}.jpg", x + PAD, photo_y, PHOTO_W, photo_h)

    artist = credit["artist"]
    long_note = re.match(r"This image was created by (?:User:)?(.+?)\.", artist, re.I)
    if long_note:  # a few Commons credits are whole sentences; keep only the name
        artist = long_note.group(1)
    words = f"Photo: {artist} ({credit['license']}), Wikimedia Commons"
    c.setFont(regular, 5.5)
    c.setFillColor(GREY)
    c.drawString(x + PAD, y + PAD + 0.6 * mm, fit_line(words, regular, 5.5, PHOTO_W))

    # Right column: name, state, QR code, caption
    col_x = x + PAD + PHOTO_W + PAD
    col_w = x + w - PAD - col_x
    cx = col_x + col_w / 2
    top = y + h - PAD - 4.2 * mm
    names = simpleSplit(m["name"], bold, 14, col_w)
    states = simpleSplit(m["state"], regular, 9.5, col_w)
    after = centred(c, names, cx, top, bold, 14, ACCENT, 5.6 * mm)
    centred(c, states, cx, after + 1 * mm, regular, 9.5, GREY, 3.9 * mm)

    qr_y = y + PAD + 5.5 * mm
    c.setFillColor(white)
    c.rect(cx - QR_SIZE / 2, qr_y, QR_SIZE, QR_SIZE, stroke=0, fill=1)
    c.drawImage(str(ROOT / "qr" / f"{m['id']}.png"), cx - QR_SIZE / 2, qr_y, QR_SIZE, QR_SIZE)
    centred(c, ["SCAN TO LEARN MORE"], cx, y + PAD + 1.2 * mm, bold, 8.5, TEAL, 0)


def main():
    regular, bold = fonts()
    items, credits = monuments(), photo_credits()
    page_w, page_h = A4
    card_w = page_w - 2 * MARGIN
    card_h = (page_h - 2 * MARGIN - (PER_PAGE - 1) * GAP) / PER_PAGE

    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("India, A Living Museum: monument QR cards")
    for i, m in enumerate(items):
        slot = i % PER_PAGE
        if i and slot == 0:
            c.showPage()
        y = page_h - MARGIN - card_h - slot * (card_h + GAP)
        draw_card(c, m, credits[m["id"]], MARGIN, y, card_w, card_h, regular, bold)
    c.save()
    print(f"Made {OUT.name}: {len(items)} monuments, {(len(items) + PER_PAGE - 1) // PER_PAGE} pages")


if __name__ == "__main__":
    main()
