# Monuments of India 🇮🇳

A mobile-friendly website about famous monuments in **every state and union territory of India**, made for a 9th-grade school project.
Visitors at the stall scan a **QR code** next to each display, and the monument's page opens on their phone, with a photo, the main facts and some interesting facts.

**Live site:** https://sanjay493.github.io/TimiProject/

## What's inside

| File / folder | What it is |
|---|---|
| `index.html` | Home page: tappable map of India, plus all monuments with search and filters |
| `monument.html` | One page that shows any monument, e.g. `monument.html?id=taj-mahal`. Opening it adds a passport stamp |
| `play.html` | **Explore & Play**: links to the games |
| `guess.html` | Guess the Monument: photo quiz, 10 questions |
| `match.html` | Match the Tradition: pair dances, arts and festivals with their states |
| `spin.html` | Spin & Answer: spin the wheel, answer a quiz question |
| `passport.html` | Heritage Passport: the stamps a visitor has collected, and a prize message |
| `qr-sheet.html` | Printable QR codes: small cut-outs, or one large sign per page |
| `js/data.js` | **All the monument content.** Edit this to change facts or add monuments |
| `js/traditions.js` | Dances, art forms and festivals used by the games and the map |
| `js/india-map.js` | State outlines for the map (from [@svg-maps/india](https://github.com/VictorCazanave/svg-maps), CC BY 4.0) |
| `js/common.js` | Shared code: navigation bar, passport stamps, helpers |
| `js/config.js` | The site's web address (used for the QR codes) and `PRIZE_STAMPS`, the number of stamps that wins a prize |
| `js/image-credits.js` | Photo credits (made automatically, don't edit by hand) |
| `css/style.css` | Colours and layout (also has a dark mode) |
| `images/` | Monument photos (`images/thumbs/` has small copies for the home page) |
| `qr/` | QR code images, one per monument plus `home.png` |
| `tools/fetch_images.py` | Downloads free photos from Wikimedia Commons |
| `tools/make_qr.py` | Makes the QR code images |

It's plain HTML, CSS and JavaScript, so there's nothing to build or install for the website itself.

## Put it online with GitHub Pages (free)

1. Make sure this repository is **public** (Settings → General → Danger Zone → Change visibility). GitHub Pages on a free account needs a public repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch **`main`** and the folder **`/ (root)`**, then click **Save**.
5. Wait 1–2 minutes, then open https://sanjay493.github.io/TimiProject/

Every time you push changes to `main`, the website updates by itself within a minute or two. The QR codes stay the same, so you don't need to print them again.

## Print the QR codes

1. Open `https://sanjay493.github.io/TimiProject/qr-sheet.html` (or open `qr-sheet.html` on your computer).
2. Choose **Small** (many per page, cut them out) or **Large** (one big sign per page).
3. Click **Print**.

Test one code with your phone before printing them all!

## Games and prizes

- **Heritage Passport:** every monument page a visitor opens (for example by scanning its QR code) adds a stamp, which is saved on their phone. When they reach `PRIZE_STAMPS` stamps (5 by default, set in `js/config.js`), the passport shows a "You've won a prize" message to show at the stall.
- **Guess the Monument:** a score of 8 or more out of 10 also shows a prize message.
- The QR sheet has a **"Scan to play"** code that opens the games page.

## About the map

The state outlines come from a map made before 2019. In it, Jammu & Kashmir and Ladakh are one shape, labelled "J&K + Ladakh". Tapping it shows the monuments of both. India's outer borders are drawn as officially shown by India.

## Edit or add a monument

1. Open `js/data.js` and copy one of the `{ ... }` blocks.
2. Change the `id` (lowercase letters and dashes only, e.g. `mysore-palace`), the name, the facts, and `wiki` (the exact title of the monument's English Wikipedia page).
3. Get its photo and QR code (needs Python 3):

   ```bash
   pip install "qrcode[pil]"
   python tools/fetch_images.py
   python tools/make_qr.py
   ```

   If the photo it picks isn't good, find a better one on [Wikimedia Commons](https://commons.wikimedia.org) and add it to the monument, e.g. `image: "Mysore Palace Morning.jpg",`, then run `fetch_images.py` again.

## Try it on your computer

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Photos and facts

- All photos come from **Wikimedia Commons** under free licences (Creative Commons / public domain). The photographer and licence are shown under each photo, as the licences require.
- The facts are written simply for students. Please **double-check them with your textbook or teacher** before the exhibition. Some details, like dates of ancient temples, are given differently in different sources.
