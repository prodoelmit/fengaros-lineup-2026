# Fengaros 2026 — audition & plan

**→ [prodoelmit.github.io/fengaros-lineup-2026](https://prodoelmit.github.io/fengaros-lineup-2026/)**

A single-page tool for working through the [Fengaros Festival 2026](https://www.fengaros.com/)
lineup: listen to every act, rate them, and get a stage-by-stage itinerary out the other end.

**Petrides Farm Park, Marki, Cyprus · 30 July – 1 August 2026 · 6 stages · 70 slots**

> **Unofficial fan-made planner.** Not affiliated with or endorsed by Fengaros Festival.
> The schedule here reflects the lineup as published on **18 July 2026** and may since have
> changed — always check the [official lineup](https://www.fengaros.com/lineup) before making plans.
>
> Vibe-coded by [prodoelmit](https://linkedin.com/in/prodoelmit).

## What it does

- **Audition the lineup.** Each act has an inline Spotify or YouTube player where a verified
  one exists, plus YouTube / Spotify / Bandcamp search links for everyone else. Roughly half
  the bill is DJs and first-release bands with no streaming presence, so the gaps are expected.
- **Score each act 0–5** (5 = must see, 0 = no). Scores live in `localStorage`
  and are never sent anywhere — see [Analytics](#analytics) for the one thing that is.
- **Share a plan.** "Share my choices" packs every score into the URL fragment —
  one character per set, so the link is self-contained and needs no backend.
  Opening someone's link offers to load their scores over yours.
- **Get an itinerary.** Picks become a time-ordered plan per day, with walking legs inserted
  between stage changes and overlaps flagged. Where two picks collide the higher rating breaks
  the tie and the plan says which way to go.
- **Export to calendar** as `.ics`.

The "plan includes score ≥" selector sets how generous the plan is — score freely while
listening, then raise the threshold if the result is overstuffed.

On phones, Spotify and YouTube links hand off to the native apps via their custom URL
schemes rather than opening the mobile web players.

## Analytics

Pageviews are counted with [GoatCounter](https://www.goatcounter.com/) — no cookies, no
cross-site tracking, no advertising network, and no consent banner required under EU rules.
Three interactions are counted as anonymous events: creating a share link, exporting `.ics`,
and opening someone else's shared link.

The counted path is pinned to `location.pathname`, so the URL fragment — which is where a
share link carries someone's ratings — is never transmitted. Ratings themselves stay in
`localStorage` and are never sent.

Counting is skipped on `localhost`, so local development never pollutes the stats. To point
this at a different instance, change the `data-goatcounter` attribute at the top of
`index.html`. To opt out entirely, delete the
`gc.zgo.at/count.js` tag but keep the one above it — that first tag defines `track()`, which
the share and export handlers call; without the loader it simply becomes a no-op.

## Running it

Open `index.html` in a browser. No build, no dependencies, no server.

It is deliberately a plain local page rather than a hosted app: the Spotify and YouTube
embeds need to load third-party iframes, which a stricter host CSP would block.

## Data provenance

`schedule.js` holds the whole dataset. Every one of the 70 slots was transcribed from the
official schedule posters:

| Day | Poster |
|---|---|
| Thu 30 Jul | `F26+Programme.png` |
| Fri 31 Jul | `F26+Programme2.png` |
| Sat 1 Aug | `F26+Programme3.png` |

(under `https://irp.cdn-website.com/7976d6ff/dms3rep/multi/`)

Stages, in poster column order: **Field Stage, Village Stage, Playground, Sandy, Pigadi, Theatre.**
Note that *Sandy* and *Pigadi* are two separate stages, not one "Sandy Pigadi" — and that the
festival **moved for 2026**; editions through 2025 were in Kato Drys village.

### Known assumptions

Two numbers in `schedule.js` are estimates, not published facts:

- `SET_MINUTES = 50` — the posters print **start times only**. Stages run a confirmed
  100-minute cycle, so 50 is a conservative guess; the real figure is plausibly 60–75.
- `WALK_MINUTES = 3` — no official site map exists for the new venue.

Artist links are only included where they could be verified against a real observed URL.
Where a well-known act shares a name with a small Cypriot one, the entry is either left empty
or marked `confidence: 'low'`, which surfaces a warning on the card. Acts with genuinely no
online presence carry `no_links: true` and show no links at all.

Schedule and artist information belong to Fengaros Festival / Louvana Records.
