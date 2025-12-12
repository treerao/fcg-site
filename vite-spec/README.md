## Vite Demo App

Vite/React build of the site for quick local runs and experimentation.

### Prerequisites
- Node.js 18+ (LTS recommended)
- Yarn or npm

### Setup
1) Install deps (from this folder):
```
yarn install
# or: npm install
```
2) Env (optional): create `.env` with `GEMINI_API_KEY=your_key` if the app needs it.

### Run
```
yarn dev
# or: npm run dev
```
Open the shown local URL (default http://localhost:5173).

### Build & Preview
```
yarn build
yarn preview
```

### Notes
- Source lives in `src/` with `main.tsx` as the entry.
- Tailwind is built locally (no CDN); styles live in `src/index.css`.
