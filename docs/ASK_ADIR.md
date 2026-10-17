# ASK_ADIR - discrete-math-2

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open

<!-- Entry format:
### <exam code> Q<number> - <short title>
- Path: <absolute file path>
- Page: <page number>
- Question: <what is unclear or missing>
- Needed: <what Adir must provide or decide>
- Status: hold
-->

### 25S-A Q2b - printed final answer fails the initial condition
- Path: tools/gen/gen_25S-A.py (source: 25S-A solution)
- Page: 5
- Question: the printed derivation gives c1=3, c2=-2, but the final line reads a_n = 3 - 2^n + 2n*2^n, which gives a_0 = 2 instead of 1. The value consistent with the derivation and a_0=1, a_1=3 is 3 - 2*2^n + 2n*2^n (confirmed by sympy rsolve and direct iteration).
- Needed: decide whether to ship Q2b with the corrected final line (marked as a correction of the printed key) or leave it out.
- Status: resolved: typo-corrected, official:false (orchestrator ruling: shipped with the official working and the final form corrected to 3 - 2*2^n + 2n*2^n; solutionSource "solved"; verified n=0..30 in tools/verify/25S-A/verify.py)

### 25S-A Q2c / Q4b - typos in the official solution (no hold, FYI)
- Page: 5 (Q2c writes 5^c where the prime is 3; final answer 3n(2n+1)^2 is right), page 7 (Q4b path labels v1..v5 do not match the degrees 1,1,2,2,2; conclusion right).
- Needed: nothing blocking; transcribed as printed with a bracketed remark in the solution text.
- Status: noted

## Resolved
