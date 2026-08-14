# Start Here — Before You Publish

The website is built and ready. Contact details are now confirmed from the files you
supplied, so there are **no placeholders left to fix**. Read §1 and §2, then publish.

---

## 1. Details now live on the site

| Detail | Value | Source |
|---|---|---|
| Address | No. 98, 1st Floor, Premier 101 Commercial Centre, Jalan Tun Jugah, 93350 Kuching, Sarawak | your `contact details.txt` ✅ |
| WhatsApp | +60 12-898 2198 | your `contact details.txt` ✅ |
| Email | icosmeticsurgery@gmail.com | your `contact details.txt` ✅ |
| Phone | +60 82-464 101 | confirmed from the banner in your shopfront photo ✅ |
| Opening hours | Mon–Fri 9–12, 1.30–5 · Sat 9–12, 1.30–3 · Sun closed | your `openingtimes.png` ✅ |
| Facebook | facebook.com/I.PLASTIC.SPECIALIST | see note below |

**One note on the Facebook link.** You gave me a share link
(`facebook.com/share/1DGHVMhcFg/…`). I checked it — it resolves to the same page as the
vanity URL `facebook.com/I.PLASTIC.SPECIALIST`, so I used the vanity URL instead. Share
links carry tracking parameters and can expire; the vanity URL is stable and better for
search engines. If you want the share link used instead, tell me.

---

## 2. Two things to check before launch

### The logo

I recreated the shopfront logo as a scalable SVG by tracing the photo you supplied. It
now replaces the plain letter "I" in the header, the footer and the browser tab icon.

- `assets/img/logo-mark.svg` — navy + gold, for light backgrounds (used in the header)
- `assets/img/logo-mark-light.svg` — white + gold, matching your shopfront signage (used in the footer)
- `assets/img/favicon.svg` — the mark on a navy badge, for the browser tab

**Please look at it and confirm it's close enough.** I measured it against your photo and
it matches the original shape to about 88%, but I was tracing a photograph of physical
signage on a wall, not a design file. Two things you may want to change:

- **The gold.** I sampled `#D8C030` from your photo, but outdoor light on a purple wall
  shifts colour. I used `#cba43c`, a slightly warmer gold that sits better with the rest
  of the site. If your designer has the real brand colour, tell me and I'll swap it.
- **If you have the original logo file** (`.ai`, `.eps`, `.svg` or `.pdf` from whoever
  made your signage), send it — that would be better than any trace, and I'll drop it in.

### Compliance review

Malaysia's Medicine Advertisements Board (LIIU/MAB) restricts how private clinics may
advertise. I've kept the site clear of the usual problem areas — no before/after photos,
no testimonials, no superlatives, no outcome promises, no prices. The new procedure pages
were written the same way.

**Have whoever handles MAB compliance read the site before it goes live.** Enforcement
falls on the clinic, not on the website. I'm not a regulatory adviser.

---

## 3. What changed in this round

- ❌ **Contact form removed.** Contact now runs through WhatsApp, phone and email. This
  also means no Formspree account, no form service, and less to go wrong.
- ✅ **WhatsApp is now the primary call to action** — a floating button on every page, the
  main button on the contact page, and the secondary button in every call-to-action band.
  The WhatsApp links pre-fill a short opening message so patients don't have to think of
  one.
- ✅ **Logo replaces the letter "I"** in the header, footer and favicon.
- ✅ **Your photos are in use**: the reception photo appears on the homepage and contact
  page; the shopfront photo is on the contact page as a wayfinding aid ("look for this
  building"), where an honest photo beats a polished one.
- ✅ **Six new procedure pages** — see §4.
- ✅ **Privacy policy rewritten** — it now says the site collects nothing at all, which is
  true once the form is gone.

---

## 4. The six new procedure pages

These are your main route to being found on Google. Each is 1,000–1,200 words with its
own FAQ and search-engine structured data.

| Page | Targets searches like |
|---|---|
| `double-eyelid-surgery-kuching.html` | double eyelid kuching, asian blepharoplasty sarawak |
| `rhinoplasty-kuching.html` | nose surgery kuching, rhinoplasty sarawak, alarplasty |
| `liposuction-kuching.html` | liposuction kuching, tummy fat removal sarawak |
| `breast-augmentation-kuching.html` | breast implants kuching, fat transfer breast |
| `gynaecomastia-kuching.html` | male breast reduction kuching, gynaecomastia malaysia |
| `cleft-lip-repair-kuching.html` | cleft lip surgery sarawak, cleft palate kuching |

**Please have Dr Kueh read these before publishing.** I wrote them to be medically
accurate and deliberately conservative — including the parts about risks, limitations and
who a procedure *doesn't* suit. But he is the surgeon and the pages carry his name. In
particular check:

- The "at a glance" timings in the sidebar of each page — recovery times, hospital stay,
  and how long results take to settle. These are typical ranges; adjust to his practice.
- The cleft page's surgical timing (lip at 3–6 months, palate at 9–18 months) — confirm
  this matches his protocol.
- Whether he's happy with the implant-versus-fat-transfer framing on the breast page, and
  with the BIA-ALCL and breast implant illness paragraph, which I included because
  informed consent standards expect it.

---

## 5. Photos that would still help

The site would be stronger with:

- A wide, well-lit photo of the **consultation room**
- A **cleaner shopfront photo** — the current one has a large banner and parked cars
  across it. It works for "find the building" but not as a hero image.
- A **higher-resolution version of the small headshot** — the one you sent is 300px wide,
  which is too small to use anywhere except a thumbnail. The larger portrait is still in
  use on the homepage and about page.

Drop new photos into `assets/img/` and tell me — I'll place them.

---

## 6. Preview it yourself

Double-click `index.html` and it opens in your browser. Everything works locally except
the map, which needs internet. Resize the window narrow to check it on a phone-sized
screen.

---

## Next steps

1. Check the logo and have Dr Kueh review the procedure pages
2. Follow **[GUIDE-hosting.md](GUIDE-hosting.md)** — publish free on GitHub Pages, connect your GoDaddy domain
3. Follow **[GUIDE-seo.md](GUIDE-seo.md)** — get found on Google
