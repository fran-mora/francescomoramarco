# The Banana Test 🍌

A visual leaderboard for one prompt: animate the full life cycle of a banana plant
(corm → leaves → flower → fruit → decay → pups) as a single self-contained
three.js HTML page. Lives at https://francescomoramarco.com/banana-test/

## Adding a model's entry

1. Save the model's output, untouched, as a single HTML file in `entries/`
   (e.g. `entries/gpt-5.5.html`).
2. Add one object for it in `entries.js` (model, file, lab, date, score, verdict).
3. Commit and push. Done — the leaderboard sorts by score automatically.

Notes:
- Entries run inside `sandbox="allow-scripts"` iframes and all autoplay on page
  load, in a full-width grid (3-4 per row on desktop) for side-by-side judging.
- Display order = the order of the array in `entries.js` (hand-curated).
- Entries must be fully self-contained; CDN imports (e.g. three.js from
  unpkg/jsdelivr) are fine, local server-side anything is not — this is GitHub Pages.
- Paste the exact system prompt into the `#prompt-text` block in `index.html`.
