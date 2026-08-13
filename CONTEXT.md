# CONTEXT — zistgah/dukedom

**What this repo is.** A kitab-derived book carrying the Humanesque constitutional corpus as nine
plates plus a cover, with an enrolment layer built on GitHub issue forms.

**Provenance.** Derived from PoIE v1.0 (10.5281/zenodo.21397274) and referencing PEDLER
(10.5281/zenodo.17497559). No ISBN is carried in the schema; the printed jacket carries one and it
is malformed (see `REVIEW.md` D-3).

**Structure.** Four parts — The Constitution (2) · The Instruments (4) · The Recognitions (2) ·
The Record (1). One plate per chapter, poster filename and chapter JSON matched by slug.

**Enrolment.** `config/enrolment.config.json` is the single source for realm, repo, templates,
labels, peerage and standing. `enrol.html` + `js/enrol.js` build prefilled forge URLs from it and
store nothing. No backend, no browser storage, no telemetry.

**Deliberately not built.** The entropy / forced-removal / data-purge mechanic specified in the
requirements. `standing.decay.enabled` is false and setting it true does nothing. Reason recorded
in `REVIEW.md` D-1.

**Open at seed time.** REVIEW.md D-2 (schematic vs computable mathematics), D-4 (unverified
citations, excluded from mint metadata), D-5 (vendor trademarks on the plates), D-6 (antecedent
independence stated inconsistently across the three instruments).

**Not yet chapters.** Instrument of Conditional Abdication, Writ of Sovereign Reinstatement, the
Isomorphic Commonwealth — drafted but with no plate.
