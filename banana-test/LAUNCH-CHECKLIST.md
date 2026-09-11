# Banana Test — launch day checklist

All copy is in `social-posts-v2.md`. All GIFs are in `videos/gifs/`.
**Post from a desktop browser (x.com), not the phone app** — the phone app caps GIF
size lower and attaching 5 files is fiddly on mobile.

---

## 0. Pre-flight (do at ~2:00pm UK, 30 min before)

- [ ] Open `social-posts-v2.md` (the copy) and this file side by side.
- [ ] Open `videos/gifs/` — confirm all 5 GIFs are there.
- [ ] Click the live link once to check it loads: https://francescomoramarco.com/banana-test/
- [ ] Have `social-posts-v2.md` X section open — you'll copy each tweet from it.

---

## 1. X — post at ~2:30pm UK (main event)

Build the WHOLE thread in one go using the composer's "+" (Add post) button, attach the
right GIF to each tweet, review, then hit **Post all**. That publishes the chain at once.

- [ ] Tweet 1: paste hook text → attach **`split-human-vs-haiku.gif`** (the split-screen)
- [ ] Tweet 2: paste "the prompt" text → no media
- [ ] Tweet 3: "Contestant #1 🍌" → attach **`claude-opus-4.8.gif`**
- [ ] Tweet 4: "Contestant #2 🍌" → attach **`codex-gpt-5.5.gif`**
- [ ] Tweet 5: "Contestant #3 🍌" → attach **`human-in-the-loop.gif`**
- [ ] Tweet 6: "Contestant #4 🍌" → attach **`claude-haiku-4.5.gif`**
- [ ] Tweet 7: "Contestant #5 🍌" → attach **`claude-sonnet-5.gif`**
- [ ] Tweet 8: paste the twist + **the link** (the utm link from the file)
- [ ] Tweet 9 (optional): the lineage/pelican tweet
- [ ] Wait for each GIF to finish uploading before posting.
- [ ] **Post all.** Then pin the thread to your profile.

If a GIF won't upload (too big), grab the matching **`.mp4`** from `videos/` — same clip, better quality.

---

## 2. Hacker News — a few minutes after X (~2:40pm UK)

- [ ] Go to news.ycombinator.com → **submit**.
- [ ] Title: `Show HN: The Banana Test – coding agents grow a 3D banana plant's whole life cycle`
- [ ] URL field: the **HN** utm link from `social-posts-v2.md`.
- [ ] Text box: paste the HN body from the file (optional but good — it frames the post).
- [ ] Submit, then **immediately post the first comment below** (as OP).
- [ ] Keep the tab open — reply to every comment for the first 2 hours. Early replies are what rank it.

**HN first comment (paste right after submitting):**

> Author here. Same prompt to five coding agents — four one-shot (Claude Opus / Sonnet / Haiku
> in Claude Code, GPT-5.5 in Codex) and one where I directed an agent over a few days as a
> ceiling. Each writes one self-contained three.js file, nothing hand-edited after, and every
> entry runs live on the page so you can scrub the life cycle yourself.
> Two things I found harder than the usual "draw an SVG" tests: it has to be correct *over time*
> (a biological sequence, not a frozen pose), and it's 3D with real botanical structure that's
> easy to get obviously wrong. Happy to answer anything about the setup or what each model got right.

---

## 3. Reddit (r/LocalLLaMA) — a few minutes after HN (~2:50pm UK)

- [ ] New post in r/LocalLLaMA → **Text post** (not a bare link — text posts do better and won't get auto-throttled).
- [ ] Title + body: copy both from `social-posts-v2.md` (the link sits at the end of the body).
- [ ] Add a flair if the subreddit requires one.
- [ ] Post, then **immediately drop the first comment below** (as OP).
- [ ] Reply fast — Reddit rewards you arguing "which model won" with people.

**Reddit first comment (paste right after posting):**

> Four of these were one-shot with tool use — Claude Opus, Sonnet, Haiku via Claude Code, and
> GPT-5.5 via Codex — plus one human-in-the-loop over a few days as a ceiling. Same prompt, no
> hand-editing, all live on the page. Curious which one you'd rank first before you see the reveal.

---

## 4. After posting (first 2 hours = the whole game)

- [ ] Keep X, HN, and Reddit tabs open. Reply to everything — questions, guesses, jokes.
- [ ] When someone guesses "#1 is Opus" etc., don't confirm/deny — send them to the site for the reveal.
- [ ] Optional: DM/email Simon Willison (draft in `social-posts-v2.md`).
- [ ] Check Google Analytics later — the utm links tell you which channel sent the most traffic.

---

## Order recap

X thread (2:30) → Hacker News (2:40) → Reddit (2:50) → then sit in the replies for 2 hours.
