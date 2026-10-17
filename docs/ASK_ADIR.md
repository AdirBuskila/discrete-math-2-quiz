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

### 25B-A Q3c - official key disagrees with the re-derivation
- Path: tools/gen/gen_25B-A.py
- Page: 5 (25B-A p.5 Q3c)
- Question: n=30 (435 subsets of size n-2), exactly 3 multiples of 4 (7 of them) and 6 primes (10 of them). The ink solution computes C(7,3)*C(10,4) = 35*840 = 29400, but 10*9*8*7/(1*2*3*4) = 210, and 6 primes give C(10,6) = 210, so the count is 35*210 = 7350 (tools/verify/25B-A/verify.py).
- Needed: rule whether to ship Q3c with the corrected 7350 (marked as a correction of the printed key) or leave it out.
- Status: hold

### 24B-A, 24B-B, 25B-A, 25B-B - small typos in the solutions (no hold, FYI)
- Pages: 24B-A p.4 Q3b (a_1 printed 131, given 128), 24B-B p.3 Q3.1 (k printed 9, should be 7), p.4 Q3.2 (a_1 printed 60, given 56), p.5 Q4.2 (7^2n should be 7^n), p.2 Q1c (complement of the star printed equal to the star), 25B-A p.4 Q3a (a_1 = 18, a_0 = 8 printed instead of 36, 16).
- Needed: nothing blocking; every final answer is right and transcribed as printed with a bracketed remark.
- Status: noted

## Resolved
