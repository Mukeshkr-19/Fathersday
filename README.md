# Happy Father's Day, Daddy

A heartfelt, premium static tribute website — a digital letter, memory gallery, and emotional gift.

## Preview Locally

Open `index.html` in your browser, or run a simple local server:

```bash
# Python 3
python3 -m http.server 8080

# Then visit http://localhost:8080
```

## Edit Content

All editable text and image paths are marked with `EDIT` comments in:

- `index.html` — titles, letter, captions, signature
- `css/styles.css` — colors, fonts (CSS variables at the top)
- `images/` — add or replace photos (`memory-1.jpg` through `memory-6.jpeg`)

## Deploy to GitHub Pages

1. Push this repo to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Add Father's Day tribute website"
   git branch -M main
   git remote add origin git@github.com:Mukeshkr-19/Fathersday.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch: `main`, folder: `/ (root)`.
5. Click **Save**. Your site will be live at:

   `https://mukeshkr-19.github.io/Fathersday/`

## Project Structure

```
Fathersday/
├── index.html          # Main page
├── css/styles.css      # All styles
├── js/main.js          # Animations & particles
├── images/             # Photo gallery images
└── README.md
```

Made with love · Father's Day 2026
