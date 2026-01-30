# Vercel Deploy Audit – Git Push Not Deploying

## Why Git Push Might Not Trigger a Deploy

### 1. **Uncommitted changes (most common)**
Vercel deploys from **committed** code on your Git branch. If you only run `git push` without committing first, you push the **last commit**—which may not include your latest changes.

**Fix:**
```bash
git add -A
git status   # confirm what will be committed
git commit -m "Your descriptive message"
git push origin main
```

**Current status:** This repo had many modified and untracked files. Commit and push those changes so Vercel builds the latest code.

---

### 2. **Vercel not connected to this repo**
Vercel must be linked to the GitHub repo and listen for pushes.

**Check:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) → your project.
2. **Settings** → **Git**.
3. Confirm **Connected Git Repository** is `DrJanDuffy/maravillahomesforsale.com` (or your actual repo).
4. If not connected: **Connect Git Repository** and choose the repo; grant access if asked.

---

### 3. **Production branch mismatch**
Vercel only auto-deploys when you push to the branch set as **Production Branch**.

**Check:**
1. **Settings** → **Git** → **Production Branch**.
2. Default is `main`. If you push to `master` or another branch, production won’t update unless that branch is set as Production Branch.
3. This repo uses `main`. Push to `main`:  
   `git push origin main`

---

### 4. **Build failing on Vercel**
If the build fails, the deploy won’t go live. Check the latest deployment in the Vercel dashboard for errors.

**Fixes applied in this audit:**
- **next.config.mjs:** Removed `outputFileTracingRoot`. It was reported as an invalid option and could cause build issues; removal avoids that.

**You should also:**
- Ensure `npm run build` (or your build script) succeeds locally after `npm install`.
- In Vercel: **Settings** → **Environment Variables** – add any env vars your app needs at build time (e.g. `NEXT_PUBLIC_SITE_URL`).

---

### 5. **Node.js version**
This project uses `"node": "24.x"` in `package.json` under `engines`. Vercel supports Node 24. No change needed unless you see a Node version error in the build logs.

---

## Checklist Before Pushing

- [ ] All changes committed: `git status` shows "nothing to commit, working tree clean" (or only intended changes).
- [ ] Pushing to the correct branch: `git push origin main` (or your Production Branch).
- [ ] Vercel project is connected to the right GitHub repo.
- [ ] Production Branch in Vercel matches the branch you push to.
- [ ] Local build passes: `npm install && npm run build`.
- [ ] Invalid Next config removed: `outputFileTracingRoot` removed from `next.config.mjs`.

---

## Quick Fix Commands

```bash
# From project root
cd "c:\Users\geneb\OneDrive\Pictures\Maraville Photos\maravillahomesforsale.com"

# 1. Stage and commit everything
git add -A
git commit -m "Audit: fix Vercel deploy; add pages, breadcrumbs, FAQ, RealScout on all pages"

# 2. Push to trigger Vercel
git push origin main
```

Then in Vercel: **Deployments** → open the latest deployment and confirm the build succeeds. If it fails, open the build logs and fix the reported error.
