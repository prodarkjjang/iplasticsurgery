# SEO Guide — Getting Found on Google in Kuching

SEO ("search engine optimisation") means making it likely that when someone in Kuching
searches *"plastic surgeon Kuching"* or *"double eyelid surgery Sarawak"*, your clinic
appears near the top.

For a local clinic, roughly **70% of the benefit comes from one thing that is not your
website at all**: your Google Business Profile. Do Part 1 first.

---

# Part 1 — Google Business Profile (do this first)

This is the panel that appears on the right of Google search and on Google Maps. For a
clinic it matters more than everything else combined, and it's free.

## Step 1. Claim your listing

1. Go to **[business.google.com](https://business.google.com)**
2. Search for "I Plastic Surgery" — a listing may already exist (created automatically
   or by a patient). **Claim it** rather than making a duplicate.
3. If nothing exists, create a new profile.

## Step 2. Fill it in completely

Profiles that are 100% complete rank noticeably better than half-filled ones.

- **Name:** `I Plastic Surgery & Reconstructive Surgery Clinic`
  *(Use the real clinic name only. Do not stuff keywords like "Best Plastic Surgeon
  Kuching" — Google suspends listings for this.)*
- **Primary category:** `Plastic surgeon`
- **Additional categories:** `Surgeon`, `Medical clinic`, `Cosmetic surgeon`
- **Address:** exactly as on your website, character for character
- **Phone:** exactly as on your website
- **Website:** `https://iplasticsurgeryclinic.com`
- **Hours:** including public holidays
- **Services:** add every procedure from your services page as a separate entry
- **Attributes:** wheelchair access, parking, languages spoken
- **Photos:** clinic exterior, reception, consultation room, Dr Kueh. Add a few every
  month — Google rewards active profiles.

## Step 3. Verify

Google will verify by postcard, phone or video. **Your listing does not appear until
verification is complete.** Postcards to Malaysia can take 2–3 weeks.

## Step 4. Reviews

Reviews are one of the strongest local ranking signals.

- Ask satisfied patients to leave an honest Google review. Google gives you a short
  share link in your profile dashboard — put it on a card at reception.
- **Reply to every review**, positive and negative. Replies are a ranking signal.
- **Never buy reviews or offer discounts for them** — Google detects this and it can get
  the listing removed. It may also raise issues under Malaysian medical advertising
  rules.

## Step 5. Consistency (NAP)

Your **N**ame, **A**ddress and **P**hone must be *identical* everywhere online. Google
treats inconsistent details as a sign of an unreliable business.

Update these to match your website exactly:

- Facebook page ("I Plastic Specialist Center")
- Any directory that already lists you — WhatClinic, Kinderasia, Lookp, PlastyTalk,
  Gohospital, and hospital pages at KPJ, Normah and Borneo Medical Centre
- Waze / Apple Maps

---

# Part 2 — Register your website with Google

Google will find your site eventually, but this makes it days instead of weeks.

## Step 6. Google Search Console

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Click **Add property** → choose **URL prefix**
3. Enter `https://iplasticsurgeryclinic.com`
4. Verify with the **HTML tag** method:
   - Google gives you a line like
     `<meta name="google-site-verification" content="abc123..." />`
   - Paste it into `index.html`, immediately **after** the line `<meta charset="utf-8">`
   - Re-upload `index.html` to GitHub, wait a minute, then click **Verify**

## Step 7. Submit your sitemap

Still in Search Console:

1. Left sidebar → **Sitemaps**
2. Type `sitemap.xml` in the box
3. Click **Submit**

Your sitemap (already built for you) lists all six pages so Google finds them all.

## Step 8. Request indexing

1. Paste `https://iplasticsurgeryclinic.com` into the search bar at the top
2. Click **Request Indexing**
3. Repeat for each page. Do the procedure pages first — they're the ones that bring in
   searches:

```
https://iplasticsurgeryclinic.com/double-eyelid-surgery-kuching.html
https://iplasticsurgeryclinic.com/rhinoplasty-kuching.html
https://iplasticsurgeryclinic.com/liposuction-kuching.html
https://iplasticsurgeryclinic.com/breast-augmentation-kuching.html
https://iplasticsurgeryclinic.com/gynaecomastia-kuching.html
https://iplasticsurgeryclinic.com/cleft-lip-repair-kuching.html
https://iplasticsurgeryclinic.com/about.html
https://iplasticsurgeryclinic.com/services.html
https://iplasticsurgeryclinic.com/faq.html
https://iplasticsurgeryclinic.com/contact.html
```

There's a daily quota on indexing requests, so spread these over two or three days if it
stops accepting them.

## Step 9. Check back after 2 weeks

Search Console shows you the actual search terms people used to find you. Under
**Performance**, look at **Queries** — this tells you which procedures people in Kuching
are actually searching for, which tells you what to write about next.

Also check **Pages** for any indexing errors.

---

# Part 3 — What's already built into your site

You don't need to do anything here. This is so you know what you have.

| Feature | What it does |
|---|---|
| **Unique title & description per page** | Controls the blue headline and grey text in Google results |
| **`MedicalClinic` + `Physician` structured data** | Tells Google your address, hours, phone, and that Dr Kueh is a physician — powers the map/knowledge panel |
| **`FAQPage` structured data** | Lets your FAQ answers appear directly in search results as expandable questions — on the FAQ page and on all six procedure pages |
| **`MedicalProcedure` structured data** | Tells Google exactly which procedure each page is about, and that Dr Kueh performs it |
| **`BreadcrumbList` structured data** | Shows `iplasticsurgeryclinic.com › Services` instead of a raw URL |
| **`sitemap.xml`** | Lists every page for search engines |
| **`robots.txt`** | Tells crawlers they're welcome and where the sitemap is |
| **Canonical URLs** | Prevents Google treating `/index.html` and `/` as duplicate pages |
| **Open Graph tags** | Makes a proper image + headline card when the link is shared on Facebook or WhatsApp |
| **Mobile responsive** | Google ranks on the mobile version of your site first |
| **Fast, no database** | Page speed is a ranking factor; a static site is about as fast as it gets |
| **Semantic HTML, alt text, one `<h1>` per page** | Accessibility and clear structure, both of which help ranking |

**Verify the structured data works** once you're live:
paste your URL into **[search.google.com/test/rich-results](https://search.google.com/test/rich-results)**.
It should detect `MedicalClinic`, `Physician`, `FAQPage` and `BreadcrumbList`.

**Check your speed:** **[pagespeed.web.dev](https://pagespeed.web.dev)**. You should
score well; if not, the usual culprit is an oversized photo.

---

# Part 4 — Growing rankings over time

Google ranks pages, not websites. **More useful pages = more ways to be found.** Your
strongest opportunity is a page per procedure.

## Step 10. Procedure pages — six are already built

Google ranks pages, not websites, and a dedicated page for each procedure matches the
exact phrase someone types. **Six are already live on your site:**

| Page | Targets the search |
|---|---|
| `double-eyelid-surgery-kuching.html` | "double eyelid kuching", "双眼皮 古晋" |
| `rhinoplasty-kuching.html` | "nose surgery kuching", "rhinoplasty sarawak" |
| `liposuction-kuching.html` | "liposuction kuching cost" |
| `breast-augmentation-kuching.html` | "breast augmentation sarawak" |
| `gynaecomastia-kuching.html` | "male breast reduction malaysia" |
| `cleft-lip-repair-kuching.html` | "cleft lip surgery sarawak" |

Each carries `MedicalProcedure`, `FAQPage` and `BreadcrumbList` structured data, and each
follows the same structure:

1. What the procedure is, in plain language
2. The techniques available, and their trade-offs
3. Who it suits — and who it doesn't
4. A realistic recovery timeline
5. Risks and limitations, stated honestly
6. A procedure-specific FAQ
7. A clear call to action

They're written for a nervous patient, not for Google. Pages that genuinely answer a
worried person's questions are what Google now rewards — and they convert far better into
actual bookings than marketing copy does.

### Worth adding next

When you're ready, the strongest additions would be:

| Page | Why |
|---|---|
| `abdominoplasty-kuching.html` | High-intent search, and pairs naturally with liposuction |
| `breast-reduction-kuching.html` | Often has a medical indication, so insurance may apply |
| `eyebag-removal-kuching.html` | High local search volume, low competition |
| `scar-revision-kuching.html` | Reconstructive, and brings in referrals |
| `burn-reconstruction-kuching.html` | Very little competition in Sarawak |

> Ask me and I'll build any of these in the same style, with matching structured data.

## Step 11. Keywords worth targeting

Local, specific searches are much easier to win than broad ones — and the people typing
them are far closer to booking.

**Realistic to rank for:**
`plastic surgeon kuching` · `plastic surgery sarawak` · `cosmetic surgery kuching` ·
`double eyelid surgery kuching` · `liposuction kuching` · `rhinoplasty kuching` ·
`Dr Kueh Nai Siong` · `整形医生 古晋` · `pakar bedah plastik kuching`

**Not worth chasing:** `plastic surgery` alone, `best plastic surgeon in the world`. You
will not outrank global sites, and the traffic wouldn't be your patients anyway.

Put your main phrase naturally in the page title, the `<h1>`, and the first paragraph.
**Do not repeat keywords unnaturally** — modern Google penalises it, and it reads badly
to patients.

## Step 12. Get other sites to link to you

Links from reputable sites are still one of the strongest ranking factors.

**Realistic and free:**

- Ask KPJ Kuching, Normah and Borneo Medical Centre to link to your website from
  Dr Kueh's profile on their site. You're a visiting consultant — this is a normal ask,
  and these are high-authority medical domains.
- Add the website to the **Malaysian Society of Plastic & Reconstructive Surgeons**
  (MSPRS) directory listing
- Update your Facebook page's website field
- Correct your entry on directories that already list you (see Step 5)
- Sarawak health tourism and local business directories

**Never buy links.** It's the fastest way to a Google penalty.

## Step 13. Keep the Facebook page working for you

Social media posts don't rank in Google directly, but they drive traffic and they help
people confirm you're real and active.

- Link to your website in every post where it makes sense
- Post the website link in the Facebook page's "About" section
- Share new procedure pages when you publish them

---

# Part 5 — A realistic timeline

| When | What to expect |
|---|---|
| Week 1 | Site live; submitted to Search Console; Business Profile submitted for verification |
| Weeks 2–4 | Pages start appearing in Google. Searching `site:iplasticsurgeryclinic.com` shows what's indexed. |
| Month 2–3 | You start ranking for your own clinic name and Dr Kueh's name |
| Month 3–6 | Competing for `plastic surgeon kuching` — this is where Business Profile reviews matter most |
| Month 6–12 | Procedure pages bring in the searches that actually convert |

**SEO is slow and cumulative.** Anyone promising page one in a fortnight is selling you
something. The clinics that win locally are the ones that steadily add genuinely useful
pages and maintain an active, well-reviewed Business Profile.

---

# Part 6 — Analytics (optional)

To see how many people visit and what they read:

- **[Google Analytics](https://analytics.google.com)** — the standard, free, very
  detailed. Requires a cookie/privacy notice.
- **[Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)** — free,
  privacy-friendly, no cookies, so no consent banner needed. Simpler, and usually
  plenty for a clinic site.

Either gives you a snippet to paste before `</head>` in each HTML file. Tell me which
you choose and I'll install it and update the privacy policy to match.

---

# One compliance reminder

Malaysia's Medicine Advertisements Board (LIIU/MAB) regulates how private medical
clinics may advertise, and that includes your website. The usual restrictions cover
before/after photographs, patient testimonials, superlative claims ("best", "leading",
"number one"), and anything that could be read as guaranteeing a result.

I've written the site to stay clear of all of these. **Before you launch, have whoever
handles compliance for the clinic review it** — enforcement falls on the clinic, and the
rules change. Be especially careful if you later add procedure pages or run Facebook or
Google ads, where the requirements are stricter still.
