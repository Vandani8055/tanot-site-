# Tanot Solutions — React + Tailwind

```bash
npm install
npm run dev        # open http://localhost:5173
npm run build      # production files in /dist (upload to Netlify / Vercel)
```

## Structure
```
index.html            SEO tags + structured data
tailwind.config.js    brand colours + fonts
src/
  main.jsx            starts React
  App.jsx             smooth scroll (Lenis) + list of sections
  index.css           Tailwind + 2 shared classes (.wrap, .section)
  data.js             ALL website text lives here
  components/         one file per section (Hero.jsx, Services.jsx ...)
public/images/        put real photos here
```

## TODO before launch
- `data.js`: booking link, Clutch link, LinkedIn link, Vimeo embed URL
- Add real photos (founder, team, awards) and set their paths in `data.js`
- Client approves placeholder text (other services, FAQ answers 2-6)
- Connect `LeadForm.jsx` to a real endpoint

## Testing performance (important)
Do NOT run Lighthouse on `npm run dev` — dev mode is not optimised and always scores low.
```bash
npm run build
npm run preview        # open the URL it prints, run Lighthouse in an Incognito window
```

## Adding real images and video
1. Put files in `public/images/...` (clients/, team/, awards/, blog/ folders already exist).
2. In `src/data.js` set the path: `image: "/images/team/vikas.webp"` (clients use `logo`).
3. Convert photos to WebP at squoosh.app first (founder ~900px wide, team ~600px, blog ~800px, logos SVG/PNG).
4. Video: set `videoId` (the number in the Vimeo link) and `poster` (thumbnail image) in `reviews.featured`.
