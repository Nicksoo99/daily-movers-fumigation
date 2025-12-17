Hosting your Daily Movers Fumigation site

Overview
- I updated the gallery image paths to `images/packing.jpg`, `images/moving.jpg`, `images/fumigation.jpg`, `images/dstv.jpg` so the site is portable.
- Before deploying, copy the four gallery images from the parent `Agesa` folder into `Daily-Movers/images/` and rename them accordingly (see below).

1) Prepare images (required)

Copy and rename these files from the parent `Agesa` folder into `Daily-Movers/images/`:

- `WhatsApp Image 2025-11-25 at 21.17.07.jpeg` → `Daily-Movers/images/packing.jpg`
- `WhatsApp Image 2025-11-25 at 21.17.20.jpeg` → `Daily-Movers/images/fumigation.jpg`
- `WhatsApp Image 2025-11-25 at 21.17.19.jpeg` → `Daily-Movers/images/dstv.jpg`
- (optional) `WhatsApp Image 2025-11-25 at 21.17.14.jpeg` → `Daily-Movers/images/moving.jpg`

2) Quick local preview

Open `Daily-Movers/index.html` in your browser or use VS Code Live Server.

3) Deploy options (pick one)

A) GitHub Pages (simple, free)

- Create a GitHub repository and push the `Daily-Movers` folder as the repository root.

Commands (run in the `Daily-Movers` folder):

```bash
git init
git add .
git commit -m "Initial site"
# create a repo on GitHub and add remote, e.g.:
# git remote add origin https://github.com/<your-username>/daily-movers.git
git push -u origin main
```

- In your GitHub repo settings → Pages, set the source to `main` branch and `/ (root)` folder. Wait a few minutes and your site will be live at `https://<your-username>.github.io/<repo>/`.

B) Netlify (drag & drop or continuous deploy)

- Drag the `Daily-Movers` folder (or a zip of it) into Netlify Drop: https://app.netlify.com/drop
- Or connect your GitHub repo for continuous deploy.

C) Vercel (recommended for static sites)

- Quick (local) deploy using Vercel CLI:

	```bash
	# install Vercel CLI (one-time)
	npm i -g vercel

	# login (follow prompts)
	vercel login

	# from inside the Daily-Movers folder, run:
	vercel --prod
	```

	The CLI will ask for a project name and scope; accept defaults or provide one. `--prod` publishes to production.

- Git-based deploy (recommended for continuous deploy):

	1. Push the `Daily-Movers` folder to a GitHub repository.
	2. In the Vercel dashboard, click "New Project" → import the GitHub repo → Deploy.

Notes:
- I added a `vercel.json` configuration file to this folder to ensure static routing.
- Ensure you copy the gallery images into `Daily-Movers/images/` before deploying.

D) Simple FTP / cPanel upload

- Zip the `Daily-Movers` folder (right-click → Send to → Compressed (zipped) folder on Windows).
- Upload via your hosting control panel or FTP into `public_html` or the site root.

4) Next steps I can do for you

- I can copy the gallery images into `Daily-Movers/images/` here for portability (requires permission to move files from parent folder). Reply "copy images" and I'll move them.
- I can create a Git repo in this folder and show exact commands for pushing to GitHub.
- I can make small changes (meta tags, favicon, analytics) before you publish.

If you want to proceed with any of the deployment options, tell me which one and I'll guide you step-by-step or prepare files accordingly.
