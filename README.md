# Learn English

An app that installs onto a phone and teaches English to a Gujarati speaker.
Lesson 1: the verb and the present tense.

**Open it:** https://manjulakerai.github.io/learn-english-app/

## Put it on a phone

**iPhone**, in Safari: Share → Add to Home Screen → Add.

**Android**, in Chrome: three dots → **Install app**.

⚠️ On Android, **Install** and **Create shortcut** look alike. Create shortcut
makes a bookmark that opens in the browser. Install makes a real app. The app
spells this out on its own contents screen.

No app store, no account, no limit on how many phones, no cost.

## What it does

Own icon, opens full screen with no browser bar, works with no signal, and
remembers where you got to.

Nine sections:

1. Why the verb comes first
2. TO WALK (ચાલવું)
3. TO LOVE (ચાહવું)
4. The sentences
5. The three rules
6. Exercise I — fill in the verb
7. Exercise II — translate
8. New Words (નવા શબ્દો), 42 of them
9. Review, cumulative

**Four ways in, all from one file.** `content.js` is the only file that holds
content. Adding Lesson 2 touches nothing else.

| Method | Comes from |
|---|---|
| Reading | the blocks |
| Listening | the ▶ button, the phone's own voice. Nothing to record |
| Quizzes | the `quiz`, `fill` and `cfu` arrays |
| Tapping | every `key` block becomes a tap-to-reveal card |

## Built on explicit instruction

Audited against **Archer & Hughes**, *Explicit Instruction*, and
**Hollingsworth & Ybarra**, *Explicit Direct Instruction*. It carries all eight
EDI parts:

stated objectives · prior knowledge recall · checks **during** the teaching,
not only at the end · the **Rule of Two**, a worked example then a matched
problem · **non-examples**, which Archer makes mandatory for rules · relevance ·
closure checks · cumulative review with discrimination items.

Error correction follows Archer's six parts and **ends with the learner
producing the answer**. Get one wrong and you type the right one.

## Updating a phone

Phones cache the app so it works offline, which means they keep serving what
they hold. Two things fix that:

1. The app checks `version.json` every time it opens and shows an Update banner
   when the server is newer.
2. There is an **Update** button at the foot of the contents screen, always.

Update wipes the caches and reloads. **Progress survives** — it lives in
`localStorage`, which the update deliberately leaves alone.

### Shipping a change

Four markers must move together or phones keep serving the old app:

1. Edit `content.js`
2. Bump `CACHE` in `sw.js`
3. Bump `version` in `version.json`
4. Bump `BUILD` in `index.html` — **must match `version.json`**

Then run the publish script from the working copy. It refuses if any of those
disagree.

## Three things derived, not copied

1. **Exercise answers, non-examples, mirror problems and check questions** are
   not in the source. They are worked out from the lesson's own Rule 1 using
   the lesson's own vocabulary. Marked in the app.
2. **One Gujarati character** in Rule 1 read as `e` rather than `s`, because
   the worked example *I love* → *Thou lovest* only works that way.
3. **Typos in the source** kept as they were, with notes: "this lessons",
   "yoou", "sepak", a repeated question 11, and "that those" against પેલો ઘોડો.

The source photographs are kept privately, because a transcription you cannot
check against its source is not evidence of anything.
