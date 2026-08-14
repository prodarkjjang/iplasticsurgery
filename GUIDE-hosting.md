# Hosting Guide — Free on GitHub Pages + Your GoDaddy Domain

**Cost: RM 0/year.** GitHub Pages is free, includes a free SSL certificate (the padlock),
and is fast. You already pay for the domain, and that is the only cost.

**Time: about 45 minutes**, most of which is waiting for DNS to update.

---

# Part 1 — Put the site on GitHub

## Step 1. Create a GitHub account

1. Go to **[github.com/signup](https://github.com/signup)**
2. Sign up with your email. It's free.
3. Verify your email address — GitHub Pages will not work until you do.

Pick a username you don't mind being semi-public, e.g. `iplasticsurgery`.

## Step 2. Create the repository

1. Click the **`+`** in the top-right corner → **New repository**
2. Fill in:
   - **Repository name:** `iplasticsurgeryclinic`
   - **Public** ← must be Public (private repos need a paid plan for Pages)
   - **Do NOT** tick "Add a README file"
3. Click **Create repository**

## Step 3. Upload the website files

On the empty repository page, click **uploading an existing file**.

Now open your `iplasticsurgery` folder on your Desktop. You need to upload:

**Upload these files:**
```
index.html      about.html      services.html
contact.html    faq.html        privacy.html
404.html        robots.txt      sitemap.xml
CNAME           .nojekyll

double-eyelid-surgery-kuching.html
rhinoplasty-kuching.html
liposuction-kuching.html
breast-augmentation-kuching.html
gynaecomastia-kuching.html
cleft-lip-repair-kuching.html
```

**And the `assets` folder** — drag the whole `assets` folder into the browser window.
GitHub keeps the folder structure automatically.

**Do NOT upload** (they're notes and source material, not part of the website):
```
START-HERE.md   GUIDE-hosting.md   GUIDE-seo.md
reference document/                             ← your originals; copies are in assets/img
clinic.jpg  doctor.jpg  service_provided.jpg  facebooklink.txt
.claude/                                        ← preview config, not needed
```

> **Windows tip:** files starting with a dot (`.nojekyll`) may be hidden. In File
> Explorer, go to **View → Show → Hidden items** to see it.

At the bottom, type a message like `Add website` and click **Commit changes**.

## Step 4. Turn on GitHub Pages

1. In your repository, click **Settings** (top menu)
2. In the left sidebar, click **Pages**
3. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, folder `/ (root)`
4. Click **Save**

Wait 1–2 minutes, then refresh. You'll see a green banner with your live address:

```
https://YOUR-USERNAME.github.io/iplasticsurgeryclinic/
```

**Open it and check the site works.** If images are missing, the `assets` folder didn't
upload properly — re-upload it.

> ⚠️ Because the `CNAME` file is included, GitHub may immediately try to use
> `iplasticsurgeryclinic.com` and show an error until Part 2 is done. That's expected.

---

# Part 2 — Connect your GoDaddy domain

You will point the domain at GitHub's servers. This means editing **DNS records** —
think of DNS as the phone book that turns `iplasticsurgeryclinic.com` into a server
address.

## Step 5. Open GoDaddy DNS settings

1. Sign in at **[godaddy.com](https://godaddy.com)**
2. Click your name (top right) → **My Products**
3. Find `iplasticsurgeryclinic.com` → click **DNS** (or **Manage DNS**)

You'll see a table of records.

## Step 6. Delete conflicting records

GoDaddy adds parking records by default. **Delete** any existing record where:

- **Type** is `A` and **Name** is `@`
- **Type** is `CNAME` and **Name** is `www`
- **Type** is `A` or `CNAME` pointing to GoDaddy parking / "Website Builder"

Leave alone: `MX` records (email), `TXT` records, and `NS` records.

## Step 7. Add GitHub's records

Click **Add New Record** and add these **five** records, one at a time.

### Four A records (these point the bare domain at GitHub)

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 1 Hour |
| A | `@` | `185.199.109.153` | 1 Hour |
| A | `@` | `185.199.110.153` | 1 Hour |
| A | `@` | `185.199.111.153` | 1 Hour |

### One CNAME record (this points `www` at GitHub)

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `YOUR-USERNAME.github.io` | 1 Hour |

Replace `YOUR-USERNAME` with your actual GitHub username. **Include the trailing dot if
GoDaddy adds one** — that's normal.

Click **Save**.

> These four IP addresses are GitHub's official Pages addresses and are the same for
> everyone. If GitHub ever changes them, the current list is at
> [docs.github.com → configuring an apex domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Step 8. Tell GitHub about the domain

1. Back in GitHub: **Settings → Pages**
2. Under **Custom domain**, type: `iplasticsurgeryclinic.com`
3. Click **Save**

GitHub now checks the DNS. You'll see "DNS check in progress".

## Step 9. Wait, then turn on HTTPS

DNS changes take **10 minutes to a few hours** to spread worldwide (occasionally up to
24 hours). Have a coffee.

Come back to **Settings → Pages**. When you see a green tick next to your domain:

1. Tick the **Enforce HTTPS** checkbox
2. If it's greyed out, wait longer — GitHub is still issuing your free SSL certificate

Once ticked, `https://iplasticsurgeryclinic.com` works with a padlock, and visitors to
`www.iplasticsurgeryclinic.com` are redirected to it automatically.

---

# Part 3 — Making changes later

## The easy way (for small text edits)

1. Go to your repository on GitHub
2. Click the file you want to change, e.g. `contact.html`
3. Click the **pencil icon** (✏️) at the top right
4. Make your edit
5. Scroll down, click **Commit changes**

Your live site updates within about a minute.

## The better way (for bigger changes)

Edit the files on your computer in **[VS Code](https://code.visualstudio.com/)** (free),
check them by double-clicking `index.html`, then in GitHub click
**Add file → Upload files** and drag the changed files in. Uploading a file with the same
name replaces it.

---

# Troubleshooting

| Problem | Cause and fix |
|---|---|
| "404 — There isn't a GitHub Pages site here" | Pages isn't enabled, or `index.html` isn't in the root of the repo. Check Settings → Pages. |
| Site loads but has no styling | The `assets` folder didn't upload. Re-upload it and confirm you can browse to `assets/css/style.css` in the repo. |
| Domain shows GoDaddy parking page | Old DNS records still exist, or DNS hasn't propagated. Recheck Step 6, then wait. |
| "Domain does not resolve to the GitHub Pages server" | The four A records are wrong or missing. Recheck Step 7. |
| "Enforce HTTPS" is greyed out | Certificate still being issued. Wait — usually under an hour, sometimes up to 24. |
| Changes don't appear | Hard-refresh with `Ctrl+F5`. GitHub Pages can also cache for ~10 minutes. |
| WhatsApp button opens an empty chat | Normal on desktop if WhatsApp Web isn't logged in. Test it on a phone. |

**Check DNS propagation:** paste your domain into
[dnschecker.org](https://dnschecker.org) and select `A`. When most locations show the
`185.199.x.x` addresses, you're done.

---

# What you're relying on

- **GitHub Pages** is free with no bandwidth charge for a site this size, and includes
  free SSL. Its terms are intended for project and organisation sites; a clinic brochure
  site is well within normal use.
- **There is no server-side code**, so there is nothing to patch, no database, and
  nothing that can be hacked in the usual sense. This is the most low-maintenance
  hosting you can have.
- **Your domain remains yours** at GoDaddy. If you ever want to move hosting, you just
  change the DNS records again.
