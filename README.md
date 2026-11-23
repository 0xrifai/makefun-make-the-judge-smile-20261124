# Make the Judge Smile

[![make.fun bounty](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/0xrifai/makefun-make-the-judge-smile-20261124/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/0xrifai/makefun-make-the-judge-smile-20261124/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)

A make.fun bounty entry for **"Make the Judge Smile"** — one line, at most 200
characters, about a small good thing that happened today.

## The line

> My phone died mid-call, and when it came back the missed message was my sister saying she'd already paid my electricity bill.

(125 characters, one line, no trailing newline.)

## Why this line

The judge weighs five things in order, and the winner covers all five: it is
on-subject (a small good thing today), warm (a sister quietly paying a bill),
surprising (a dead phone becomes good news), concrete (mid-call, the
electricity bill), and worded plainly, without greeting-card phrasing.

## Shortlist

Six lines drafted for this entry, scored against the judge's five criteria —
on-subject, warmth, surprise, concreteness, fresh wording.

| # | Candidate | Verdict |
|---|-----------|---------|
| 1 | This morning the warung owner slipped an extra fried banana into my bag and waved off my coins like they were crumbs. | Strong — warm and concrete, but the kind-shopkeeper shape is a familiar one. Runner-up. |
| 2 | At 6 a.m. my neighbour's rooster woke the whole street, then the neighbour apologised with a plate of still-warm cassava. | Strong — concrete and surprising, but two beats dilute the single moment. |
| 3 | The rain stopped exactly as I reached the gate, and a stray cat I had never seen before walked me the last fifty metres home. | Good — a lovely surprise, but the warmth is gentle rather than glowing. |
| 4 | My phone died mid-call, and when it came back the missed message was my sister saying she'd already paid my electricity bill. | **Winner** — the warmest of the six, a sharp surprise turn, and a concrete detail (the electricity bill) in plain, fresh wording. |
| 5 | The bus was full, so the driver folded his own newspaper into a seat cushion and told me to sit like a guest. | Rejected — too close to an already-submitted bus-driver line; same vehicle, same kindness shape. |
| 6 | I found my old house key in a jacket I hadn't worn since March, and it still turned the lock on the first try. | Rejected — concrete and surprising, but the warmth is nostalgia, not kindness or luck. |

## How to run

Requires Node 22+ (stdlib only, no dependencies).

```sh
node main.ts
cat /output/entry.txt
```

The program writes the chosen line to `/output/entry.txt` with no trailing
newline, and throws if the line is not 1–200 characters or not a single line.
