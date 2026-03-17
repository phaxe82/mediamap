# Media Map — Website

The official website for [Media Map](https://mediamapx.ai) — AI consulting for media creators.

Built with [Astro](https://astro.build) v5 and Tailwind CSS.

---

## Running the site locally

Before you start, make sure you have [Node.js](https://nodejs.org) installed (version 18 or higher).

**1. Install dependencies**

Open Terminal, navigate to this folder, and run:

```bash
npm install
```

**2. Start the development server**

```bash
npm run dev
```

Open your browser and go to `http://localhost:4321` — you should see the site.

**3. Build for production**

```bash
npm run build
```

This creates a `dist/` folder with the ready-to-deploy site files.

---

## Deploying to GitHub Pages

GitHub Pages is a free hosting service from GitHub. Here's how to set it up from scratch.

### Step 1 — Create a GitHub account

If you don't have one, go to [github.com](https://github.com) and sign up. It's free.

### Step 2 — Create a new repository

1. Click the **+** button in the top right of GitHub and choose **New repository**
2. Name it something like `mediamap` (this will be part of your URL)
3. Set it to **Public**
4. Do **not** tick "Add a README" (we already have one)
5. Click **Create repository**

### Step 3 — Set up Git on your computer

Open Terminal and check if Git is installed:

```bash
git --version
```

If you see a version number, you're good. If not, download it from [git-scm.com](https://git-scm.com).

Then tell Git who you are (just do this once):

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Step 4 — Connect your local folder to GitHub

In Terminal, navigate to this project folder:

```bash
cd ~/Documents/ccode
```

Then run these commands one at a time:

```bash
# Initialise Git in this folder
git init

# Add all your files
git add .

# Make your first commit (a snapshot of your files)
git commit -m "Initial commit"

# Rename the default branch to 'main'
git branch -M main

# Connect to your GitHub repository
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual details
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push your files to GitHub
git push -u origin main
```

You'll be asked to log in to GitHub the first time you push.

### Step 5 — Update astro.config.mjs

Open `astro.config.mjs` and update the `site` field with your GitHub Pages URL:

```js
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',  // e.g. '/mediamap'
  ...
});
```

> **Note:** If you're using a custom domain (like mediamapx.ai), set `base: '/'` and leave `site` as your custom domain URL.

Then commit and push this change:

```bash
git add astro.config.mjs
git commit -m "Update site URL for GitHub Pages"
git push
```

### Step 6 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (along the top tabs)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 7 — Wait for the deploy

Every time you push to the `main` branch, GitHub will automatically build and deploy your site. You can watch the progress under the **Actions** tab in your repository.

Once it's done, your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

---

## Using a custom domain (e.g. mediamapx.ai)

If you want `mediamapx.ai` to point to your GitHub Pages site:

1. Create a file called `CNAME` in the `public/` folder containing just your domain:
   ```
   mediamapx.ai
   ```

2. Update `astro.config.mjs`:
   ```js
   site: 'https://mediamapx.ai',
   base: '/',
   ```

3. Log in to your domain registrar (wherever you bought `mediamapx.ai`) and add these DNS records:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a **CNAME record**: `www` → `YOUR-USERNAME.github.io`

4. In your GitHub repo **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS**.

DNS changes can take up to 24 hours to propagate, but usually happen within an hour.

---

## Making changes to the site

All the content lives in `src/components/`. Each section is its own file:

| File | Section |
|------|---------|
| `Nav.astro` | Navigation bar |
| `Hero.astro` | Top hero section |
| `WhatWeDo.astro` | Services cards |
| `WhoWeHelp.astro` | Who we help tags |
| `HowItWorks.astro` | 3-step process |
| `About.astro` | About Tom / Media Map |
| `Waitlist.astro` | Email signup |
| `Footer.astro` | Footer |

After making changes, commit and push:

```bash
git add .
git commit -m "Update hero copy"
git push
```

GitHub Actions will automatically redeploy.

---

## Tech stack

- [Astro v5](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [GitHub Actions](https://github.com/features/actions) — automated deployment
- [GitHub Pages](https://pages.github.com) — free hosting
