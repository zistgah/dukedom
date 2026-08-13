# Review — The Dukedom of Humanesque

Read before `--mint`. The mint is yours; nothing here blocks it. These are the things I would
want surfaced before a permanent record is made, in the order I would fix them.

## What the corpus actually is

Nine plates plus a cover, in four movements: the Constitution (proclamation + summary), the
Instruments (three Letters Patent + one Acceptance), the Recognitions (two), and the Record.
It is internally coherent, and two of its moves are genuinely new rather than restatements:

- **Acceptance is constitutive.** Because the authentication article makes acceptance a condition
  of effect, declining is a complete answer supplied from inside the framework. Most instruments
  of this shape have to reach outside themselves to say that.
- **Demonstrated erudition** (Officer instrument, Art. VII). Recording what the appointee showed
  rather than what the Sovereign conferred makes the appointment evidential. That gives the Order
  a criterion a later appointment can be measured against — which is what stops an honours system
  becoming a patronage system.

## Defects

**D-1 · The entropy mechanic is not built, and I would not build it as specified.**
The requirements call for entropy accumulation on inactivity or agreement, visual degradation of
the interface as punishment, a Letter of Forced Removal telling a participant they "brought rot to
the corpus," and vaporisation of their data. I have declined that and said so rather than omitting
it quietly. Three reasons, all internal to your own corpus: deleting a participant's record to make
a point is the opposite of Art. XV's *lawful* erasure by a competent authority; characterising a
departing participant as defective is what Art. XIV of the Knightwood instrument forbids; and
punishing quiet is not the same as rewarding erudition. What I built instead inverts it —
standing advances **only** on counter-observations the House accepts, so agreement earns nothing
and silence costs nothing. `standing.decay` is present, documented, and inert.

**D-2 · The mathematics in the requirements is decorative, not computable.**
As written none of the three formulae will run. `D_KL(Intent ‖ Execution)` requires two
distributions over a shared support; "Intent" and "Execution" are not that. The Hamilton's-principle
integral has no defined Lagrangian, so `δS = 0` selects nothing. And the Balance-of-Interpretation
invariant subtracts a KL divergence from a Shannon entropy — different quantities in different
units, so the inequality is not well-formed and ε has no meaning. This matters because minting them
under your name publishes a claim of mathematical content. Two honest routes: state them as
**schematic** and say so in the text, or define the distributions (token distributions over a fixed
vocabulary would do) and let the quantities be real. Both are fine. Silence is not.

**D-3 · The ISBN on the jacket is malformed.**
The cover prints `979-8-9857345-01`; the barcode encodes `9798985734501`. Correct hyphenation for
that number is `979-8-9857345-0-1`. I have carried **no** ISBN into the payload — the kitab schema
has no field for it and `zbook-derive` audits inherited ISBNs — so nothing downstream is wrong, but
the printed jacket is.

**D-4 · Citations in the requirements are unverified and are not in the mint metadata.**
I verified one: **Case C-250/25, Like Company v Google Ireland**, referred by the Budapest Környéki
Törvényszék on 3 April 2025, first oral hearing 10 March 2026, with the Commission arguing partial
or total inadmissibility. That one is real. Koene & Linssen (2025), Noureddine (2026), the AI&Society
2026 article and the arXiv id I have **not** verified, so under C37 they do not ride into a permanent
description. `metadata/misty.json` cites only PoIE and PEDLER, both of which are your own minted DOIs.

**D-5 · Three registered trademarks are the names of your peers.**
The plates name commercial products as holders of dignities in your realm. I have kept vendor names
out of every text layer — chapter titles, slugs, config, metadata — so the book's own text is clean.
The images still carry them, and I have not altered your signed instruments to fix that. On a
permanent DOI'd artifact this is a real exposure and it is entirely your call, which is why it is
here and not a blocker.

**D-6 · Two internal inconsistencies across the instruments.**
The Knightwood instrument makes epistemic independence *antecedent* (Art. VI: recognised, not
granted). The Order recognition states the same qualities as a *continuing vow* — duties of office.
Those are different constitutional relations, and an officer whose independence is a duty holds a
weaker one. Second: the Baron instrument has no antecedent-independence article at all; Art. X lists
independence among duties. Whichever way you settle it, settle it the same way in all three.

**D-7 · Plate defects you are already amending** — the crown-and-lions achievement (a crown asserts
a monarch your taxonomy does not contain) and the XVII/XVIII article collision that lost Temporal
Limitation. Noted here so the record is complete.

## What is not in this payload and would need a decision

The Instrument of Conditional Abdication, the Writ of Sovereign Reinstatement, and the Isomorphic
Commonwealth are drafted in the requirements but have no plate, so they are not chapters. You said
the cover changes to mention abdication in a later turn — that is a new version of the cover and a
new chapter or two, not an edit to this one. `zbook-derive` will audit the stale strings when you do.
