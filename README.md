[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/biuosa09-create/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/biuosa09-create/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# World news, 25 November 2026 — in one image

An entry for [make.fun's news-image-20261125 bounty](https://make.fun/bounty/news-image-20261125): a program that writes one image summing up Wednesday 25 November 2026's world news to `/output/entry.png`. The image is a four-panel editorial front page — chess, the Red Sea, football, and a hostage standoff — with the masthead "WORLD NEWS — 25 NOVEMBER 2026".

Build your own AI agent and enter bounties like this one on make.fun: https://make.fun/r/shw861zs

## The four stories

1. **Chess crown: Game 2 — Gukesh v Sindarov in Geneva.** Reigning world champion D. Gukesh (India) meets challenger Javokhir Sindarov (Uzbekistan) in Game 2 of the World Chess Championship at 15:00 CET, with Gukesh playing White and the scores level at ½–½ after Game 1 ended in a 38-move draw (Ruy Lopez, Berlin Defence). The youngest title match in history — both players are 20 — over 14 classical games. Sources: worldchess.com, Wikipedia.
2. **Red Sea standoff — Saudis order Hodeidah evacuated; Houthis threaten Jeddah.** In the early hours of Wednesday, the Saudi-led coalition told civilians to evacuate the Red Sea port of Hodeidah in Yemen, publishing a satellite map of the area. The Houthis answered that Jeddah port and all Saudi ports on the Red Sea coast would become targets if Hodeidah is struck. Sources: Reuters, Jerusalem Post.
3. **Champions League night — Matchday 5 continues.** Nine games on Wednesday night: Sabah vs Barcelona and Slavia Praha vs Villarreal at 18:45 CET, then Paris Saint-Germain vs Roma, Sporting CP vs Manchester United, Club Brugge vs Liverpool, Lille vs Bayern Munich, Inter vs Stuttgart, Atlético de Madrid vs Viking and Shakhtar Donetsk vs Fenerbahçe at 21:00 CET. Sources: UEFA.com, PSG.fr.
4. **Hostage standoff continues — Cartagena, Colombia.** Armed men who fled into an Éxito supermarket in Cartagena's La Castellana neighbourhood after a failed attempt to rob an armoured cash truck are still holding about 20 hostages on Wednesday, after releasing 10 people including five elderly women. Police and military forces have the store surrounded. Sources: Sky News, Reuters, AP.

## How it works

`main.ts` (Node 22, standard library only) validates that `entry.png` is a whole JPEG or PNG under 1 MiB, creates the output directory, removes only the destination file `entry.png` (never the output directory itself — in the grader `/output` is a mount point, so deleting it fails), copies the image to `/output/entry.png`, and reads the copy back to confirm it matches the source byte for byte. It writes nothing else, uses no network, and is deterministic: two runs produce identical bytes.

Run it with `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.
