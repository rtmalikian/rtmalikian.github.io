/* Blog data for rtmalikian.github.io — auto-updated weekly by the weekly-portfolio-blog-update cron (Sundays, after the PR wrap-up). Newest Field Note first. Edit shape: {date, tag, mins, title, body, quote} / X: {date, title, body, link} */
window.BLOG_NOTES=[
 {date:'OCT 22, 2026',tag:'RESEARCH · NEW SECTION',mins:'2 MIN',title:'The research now has a front door',
  body:'The landing page leads with Research from today: all four papers from the open-source series with their Zenodo DOIs and honest journal status — one submitted, one in progress, one rerouting after a scope rejection, one on the Applied Clinical Informatics route — plus the 7-OH boomerang commentary and the ambient AI scribes meta-analysis. That review is the one I am most careful with: 1,049 records screened down to 157 full texts, and the page says plainly that no pooled result exists yet. It will when the extraction is real, and not before.',
  quote:'If it is on the page, there is a DOI, a repo, or a number behind it.'},
 {date:'OCT 21, 2026',tag:'REFLECTION · OPEN SOURCE',mins:'4 MIN',title:'213 pull requests later: what maintainers actually taught me',
  body:'The honest ledger: 213 PRs opened, 54 merged into external projects, 4 more landed by maintainer cherry-pick — and plenty closed or superseded. The closed ones taught the most. A fix can be correct and still belong in a different layer (one of mine belonged in safetensors, not sentence-transformers — the reviewer was right). A PR can be right and still duplicate work opened two days earlier. I now check timelines before I write a line of code.',
  quote:'Merged is a maintainer\u2019s decision, not a score. The record I\u2019m proud of is that every number here is public and checkable.'},
 {date:'OCT 21, 2026',tag:'RESEARCH · PUBLICATIONS',mins:'3 MIN',title:'Turning open-source work into a research series — without inflating it',
  body:'This week I rendered four papers from the contribution record — clinical NLP, medical imaging, vector databases, FHIR — with the dataset (213 rows) exported alongside. Ground rule I set for myself: maintainer review is real peer scrutiny, but it is not journal publication, and the papers say so plainly. Bold claims are fine. Borrowed prestige is not.',
  quote:'Every claim tied to its numbers, or it doesn\u2019t ship.'},
 {date:'OCT 19, 2026',tag:'LAUNCH · CLINICAL AI',mins:'4 MIN',title:'Discharge Decoded: the metric was comprehension, not generation',
  body:'Most “AI for discharge” demos optimise for producing a summary. The failure in the real workflow is that ~78% of ED discharges show comprehension deficits. So the product gates on it: verified extraction, a Flesch-Kincaid ≤ grade-6 rewrite loop, and automated teach-back with completion tracking. Eval harness in CI: extraction precision/recall 1.0 on the test set, red-flag recall 1.0. If a future change breaks those numbers, the build fails — as it should.',
  quote:'Not “a chatbot on a form.” A measured improvement over the workflow it replaces.'},
 {date:'OCT 20, 2026',tag:'TESLA AI SERIES',mins:'3 MIN',title:'Why every app I ship contains its own AI endpoints',
  body:'Series 2 of the Tesla apps is an architecture argument disguised as car software: each app embeds /v1/chat/completions, /v1/models and /v1/embeddings with a pluggable backend and an offline rules fallback. Day 2 was per-location charge limits — a feature Rivian ships and Tesla doesn\u2019t. Day 3 wired the car into the home itself. The pattern transfers directly to clinics: own the inference surface, keep a deterministic fallback, never let the product die when an API does.',
  quote:'The AI is part of the platform. Everything else is a dependency.'}
];

window.X_POSTS=[
 {date:'RECENT · 𝕏',title:'Shipping in public, daily',body:'Launch threads for each Tesla AI app and each weekly clinical product — what it does, why the gap exists, and the repo link. No vapour, just shipped code.',link:'https://x.com/rtmalikian'},
 {date:'RECENT · 𝕏',title:'PR reports from the contribution pipeline',body:'Short posts as PRs land in Ollama, Chroma, Milvus, txtai, OpenMed and the wider medical-AI / vector-DB ecosystem — including the ones that get closed, with the reason why.',link:'https://x.com/rtmalikian'},
 {date:'SUNDAYS · LIVE',title:'Weekly PR Wrap-Up — live on stream',body:'Every Sunday I present the week\u2019s merged PRs live on YouTube + Twitch: what changed, why it matters in the real world, and the health-tech angle. Announcements and replays are posted on X first.',link:'https://x.com/rtmalikian'},
 {date:'FOLLOW ALONG · 𝕏',title:'Research series & paper drops',body:'As each weekly paper hits Zenodo / medRxiv / Hugging Face, the thread version lands on X — headline finding, the chart that matters, and the dataset link.',link:'https://x.com/rtmalikian'}
];
