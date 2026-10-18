# Learn-mode coverage (discrete-math-2)

Built from the full bank: 180 live questions in `tools/raw/*.json` (13 sittings, 20B-A to 25S-A). Ids below are bank ids. Re-passed against the full bank after the 20B-A, 21B-A, 21B-B and 22B-B sittings were added (see the second table).

| Concept | Brief and section | Example question ids |
|---|---|---|
| Prime, divisor, fundamental theorem, divisor count | 01 divisibility_primes: Definitions | 25B-B-Q1a, 24B-A-Q4b |
| Newton binomial folded into a product of prime powers | 01: Recipe | 22B-A-Q2a, 23B-A-Q2a, 24B-C-Q4b, 25B-A-Q2b, 25B-B-Q2b, 25S-A-Q2c |
| Counting divisors with conditions (even, odd, divisible by d) | 01: Recipe steps 4-5, Traps | 22B-A-Q2a, 24B-C-Q4b, 25B-A-Q2b |
| phi definition, prime powers, multiplicativity, product formula | 02 euler_phi: Definitions | 22B-A-Q1b, 23B-A-Q1b, 24B-B-Q1b, 25B-A-Q3b, 25S-A-Q3a |
| Euler's theorem and reducing exponents mod phi | 02: Recipe D | 24B-B-Q2c, 24B-C-Q2c |
| phi is not injective/monotone; phi(n) even | 02: Definitions | 24B-B-Q2c, 25S-A-Q3a |
| Find all n with a phi condition (cases n=1,2,>2) | 02: Recipe C, Traps | 22B-A-Q1b, 23B-B-Q1b, 24B-A-Q2c, 25B-B-Q3b |
| phi of a binomial sum, derivative of the binomial | 02 and 05 (derivative of the binomial) | 24B-B-Q4b, 25S-A-Q5c |
| Prove-or-disprove on phi and divisibility | 02: Recipe B | 24B-C-Q1b |
| Sum and product principles, definitions | 03 sum_product_inclusion: Definitions | 25B-A-Q1a, 25B-B-Q1a |
| Inclusion-exclusion for 2 and 3 sets, complement | 03: Definitions, Recipe | 24B-A-Q2b, 24B-B-Q2a, 25B-A-Q1a, 25S-A-Q2a |
| Multiples in a range, lcm of intersections | 03: Definitions, Traps | 25B-A-Q1a, 25S-A-Q2a |
| Arrangement (selection without repetition), permutation, sequences with repetition | 04 permutations_arrangements: Definitions | 23B-B-Q1a, 24B-A-Q1a, 25B-B-Q5a |
| Adjacency by gluing a block; "1 before 2" | 04: Recipe | 24B-A-Q1a, 24B-C-Q1a, 25B-A-Q1b |
| Derangements, formula, recurrence, fixed prefix | 04: Definitions, Recipe | 24B-A-Q2a, 24B-B-Q1a, 25B-B-Q1b, 25S-A-Q5a |
| Combination, symmetry, Pascal | 05 combinations_subsets: Definitions | 24B-A-Q1b |
| Recover n from a subset count (size 2, n-2, even/odd, at most 2) | 05: Recipe 1 | 22B-A-Q3a, 23B-A-Q3a, 23B-B-Q3a, 24B-A-Q4a, 24B-B-Q4a, 24B-C-Q4a, 25B-A-Q5a, 25B-B-Q3c, 25B-B-Q5b |
| Subsets by type (evens/odds, primes, multiples), "at least" cases | 05: Recipe 2-5 | 24B-C-Q2a, 25B-A-Q5a, 25B-B-Q3c |
| Sum of subset sizes, k*C(n,k) identity | 05: Definitions (binomial derivative) | 25B-B-Q6a, 25S-A-Q5c |
| Stars and bars D(n,k) | 06 selections_repetition: Definitions | 24B-A-Q3a, 24B-B-Q3a, 24B-C-Q3a |
| Lower bounds, shifting, strict inequalities, slack variable for <= | 06: Recipe | 24B-C-Q2b, 25B-A-Q2a, 25B-B-Q2a |
| Words without order, exact counts, split by case | 06: Recipe | 22B-A-Q2c, 23B-A-Q2c, 23B-B-Q2c, 25S-A-Q3b |
| Ordered sequences with repetition and end conditions | 06: Definitions, Traps | 25B-A-Q5c |
| All, injective, increasing, onto functions; complement counting | 07 function_counting: table | 22B-A-Q3b, 23B-A-Q3b, 23B-B-Q3b, 25S-A-Q1a |
| Injective with image conditions | 07: Recipe 3 | 22B-A-Q1a, 23B-A-Q1a |
| Strictly increasing/decreasing with conditions, parameter n | 07: Recipe 4, 6 | 25B-A-Q2c, 25B-B-Q2c |
| Bijections with "or" conditions | 07: Recipe 5 | 25B-A-Q6b |
| Subsets of a Cartesian product, sequences from A union B | 07: Definitions | 24B-B-Q2b |
| Characteristic equation, distinct and double roots | 08 recurrences: Definitions | 22B-A-Q2b, 23B-A-Q2b, 25B-B-Q3a |
| Particular solution for constant and exponential forcing | 08: table | 23B-B-Q2b, 24B-A-Q3b, 24B-B-Q3b, 24B-C-Q3b, 25B-A-Q3a, 25B-B-Q3a |
| Resonance (forcing base equals a root) | 08: Traps, worked example | 25S-A-Q2b |
| Fitting initial conditions, checking | 08: Recipe 4-5 | all recurrence questions |
| Big-O definition, bounding term by term | 09 asymptotics: Definitions, Recipe | 22B-A-Q2b, 23B-B-Q2a, 24B-A-Q3b, 25B-A-Q3a |
| Theta definition, limit criterion | 09: Definitions | 25S-A-Q1b, 23B-A-Q2a |
| Degree, handshake, regular, parity | 10 graph_basics: Definitions | 23B-B-Q1c, 25S-A-Q4c, 25B-B-Q6b |
| Complement, degree n-1-d, isomorphic to its complement | 10: Definitions, Recipe | 24B-A-Q1c, 24B-A-Q3c, 24B-B-Q3c, 24B-C-Q1c, 23B-A-Q4b |
| Bipartite definition and degree-sum argument | 10: Definitions | 25S-A-Q1c, 24B-C-Q1c, 25B-B-Q6b, 25S-A-Q4c |
| Degree sequences, Havel-Hakimi, construction | 10: Recipe | 25B-A-Q4a, 25S-A-Q4b |
| Induced subgraphs in union-of-cliques graphs, chromatic number | 10: Recipe, Definitions | 23B-A-Q3c, 23B-B-Q3c |
| Walk, path, cycle, connectivity, distance, diameter | 11 graph_connectivity: Definitions | 23B-A-Q1c, 25B-A-Q1c |
| Edge-count and min-degree criteria for connectivity | 11: Definitions, Recipe | 22B-A-Q4a, 25B-A-Q5b |
| Complement of a disconnected graph | 11: Definitions | 23B-A-Q1c |
| Bridges and cut vertices | 11: Definitions, Recipe | 25B-B-Q4b |
| Diameter of K(m,n), counterexamples | 11: Recipe, Traps | 25B-A-Q1c, 25B-B-Q5c |
| Tree, forest, edge count, leaves, degree sum | 12 trees: Definitions | 24B-B-Q1c, 24B-B-Q4c, 24B-C-Q4c, 25B-B-Q1c |
| Number of leaves under degree constraints | 12: Recipe | 24B-A-Q4c, 25B-B-Q1c, 25B-A-Q6a |
| Complement of a tree or forest | 12: Recipe | 24B-B-Q1c, 24B-C-Q3c, 24B-A-Q1c, 25B-A-Q4b |
| Spanning trees, existence, cut vertices in trees | 12: Definitions | 22B-A-Q1c, 22B-A-Q3c, 25S-A-Q5b |
| Euler circuit and trail criteria | 13 euler_hamilton: Definitions | 23B-A-Q4a, 25B-B-Q4a, 25S-A-Q4a |
| Hamilton, Dirac, bipartite Hamilton | 13: Definitions | 23B-B-Q4a, 23B-A-Q4c, 22B-A-Q4b |
| Euler/Hamilton of a complement of a regular graph or a path | 13: Recipe | 22B-A-Q4b, 25B-A-Q4c, 25B-B-Q4c, 25S-A-Q3c |
| Induced P4, C4, C5, K4 in the complement; chromatic number | 13: Recipe | 22B-A-Q4b, 23B-A-Q4c, 23B-B-Q4b, 25B-A-Q4c, 25B-B-Q4c |

## Re-pass for the sittings added later (20B-A, 21B-A, 21B-B, 22B-B)
| Concept | Brief and section | Example question ids |
|---|---|---|
| Equal cardinality, injection both ways, Cantor-Schroeder-Bernstein, countable sets (ADDED to brief 07 in this pass) | 07: Definitions | 20B-A-Q1e, 20B-A-Q6b |
| Complex characteristic roots, a_n + a_{n-2} = g(n) (ADDED to brief 08 in this pass) | 08: Definitions | 20B-A-Q3b |
| Newton binomial folded into a product, phi of such a number, O(c^n) of a binomial sum | 01, 02, 09 | 21B-A-Q3a, 21B-B-Q2a, 22B-B-Q2a, 20B-A-Q6a |
| phi proofs (divisibility, Euler's theorem exponent, composition) | 02: Recipe B, D | 20B-A-Q2c, 21B-A-Q1b, 21B-A-Q4c, 21B-A-Q5b, 21B-B-Q4c, 21B-B-Q5b, 22B-B-Q1b, 20B-A-Q1b |
| Subset counts, sum of subset sizes, subsets of A x B by a sum condition | 05, 07 | 20B-A-Q4a, 20B-A-Q4c, 21B-A-Q2a, 21B-B-Q3a, 21B-B-Q4a, 22B-B-Q3a |
| Arrangements with blocks, derangement definition, two-type words | 04 | 20B-A-Q1a, 20B-A-Q2a, 20B-A-Q2b, 21B-A-Q1a, 21B-A-Q4a, 21B-B-Q1a, 22B-B-Q1a |
| Inclusion-exclusion on multiples | 03 | 20B-A-Q3a, 21B-B-Q2c |
| Function counting: onto, injective, bijective, f(1)=3 condition, preimage condition | 07 | 20B-A-Q4b, 21B-A-Q2b, 21B-A-Q4b, 21B-B-Q3b, 21B-B-Q4b, 22B-B-Q3b |
| Solutions with lower bounds (words/multisets) | 06: Recipe | 20B-A-Q5b, 21B-A-Q3c, 22B-B-Q2c, 21B-B-Q3a |
| Recurrences: double root, linear, nonhomogeneous, O(n 5^n) | 08, 09 | 21B-A-Q3b, 21B-B-Q2b, 22B-B-Q2b |
| Degree sequences, C_n bipartite, K(m,n) | 10 | 20B-A-Q1c, 20B-A-Q5a, 21B-A-Q5a, 21B-B-Q3c, 21B-B-Q5a |
| Connectivity, diameter and complement statements, P_n complement | 11 | 20B-A-Q1d, 20B-A-Q6c, 22B-B-Q3c |
| Trees: spanning tree, leaves bound, edge count of a forest | 12 | 21B-A-Q1c, 21B-A-Q2c, 22B-B-Q1c |
| Euler/Hamilton, chromatic number, induced subgraphs in the complement | 13 | 20B-A-Q3c, 20B-A-Q5c, 21B-A-Q5c, 21B-B-Q1c, 21B-B-Q5c, 22B-B-Q4a, 22B-B-Q4b |

Cheat-sheet chapter 14 collects all of the formulas above.

## Gaps
- No question in the full bank uses generating functions, Mobius inversion, Stirling numbers or set partitions, so they are not taught (the func_count need-help level on partitions was removed for the same reason).
- The graph figures of `22B-A-Q4b`, `23B-A-Q4c`, `23B-B-Q4b` are images; the brief teaches the method but cannot reproduce those drawings.
- The exact definition wording of "walk/path/trail" follows the course's formula sheet terms only loosely; students should use their lecture's phrasing in definition parts (Q1 of each sitting). Definition-only subquestions ("the term: X") are answered by the Definitions section of the matching brief, paraphrased.
- All 13 sittings are in the bank; nothing is pending.
