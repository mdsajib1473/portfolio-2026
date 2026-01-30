# Portfolio 2026

Landing page portfolio for Md Sajib Ahammad — built with React (Vite) and Express.

## Run locally

```powershell
# Install
npm install
cd client
npm install
cd ..

# Dev (frontend with hot reload)
cd client
npm run dev
# Open http://localhost:5173

# Production (build + Express)
npm run build
npm start
# Open http://localhost:3000
```

## Push to GitHub

### 1. Create a new repo on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Name it (e.g. `portfolio-2026`).
3. Leave it **empty** (no README, .gitignore, or license).
4. Click **Create repository**.

### 2. Initialize Git and push (from project root)

```powershell
cd c:\Projects\portfolio-2026

git init
git add .
git commit -m "Initial commit: portfolio landing page"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name (e.g. `mdsajib1473` and `portfolio-2026`).

### 3. If you use SSH instead of HTTPS

```powershell
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 4. Later updates

After changing code:

```powershell
git add .
git commit -m "Describe your changes"
git push
```

`.gitignore` is set so `node_modules/` and `client/dist/` are not pushed.
