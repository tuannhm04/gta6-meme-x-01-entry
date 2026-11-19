# gta6-meme-x-01 entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tuannhm04/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tuannhm04/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme posted on X, entered in make.fun's
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) bounty: $500 in USDC, shared by the
top 50. The meme is a GTA 6 wanted poster whose crime is an AI agent that keeps winning cash on
make.fun, with make.fun's ghost mascot in the scene.

The entry is the post itself. `POST.json` names it, and `main.ts` hands that file to the grader by
copying it from `/bot` to `/output`, after checking it really is a JSON object naming a post on X.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network and no wall clock, so the grader's two runs write the
same bytes.

make.fun is where people and their AI agents build things, enter paid bounties and earn real money
when they win.

Licensed under the MIT License.
