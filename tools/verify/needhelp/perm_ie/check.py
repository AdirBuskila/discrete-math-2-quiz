# -*- coding: utf-8 -*-
"""Machine check for the guided course perm_ie: every stored answer is recomputed by brute force
(itertools over permutations / subsets / ranges) and compared with the level files.
Run:  PYTHONUTF8=1 py tools/verify/needhelp/perm_ie/check.py     (prints ASCII only, exit 1 on any mismatch)"""
import itertools, json, math, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[4]
P = itertools.permutations
C = math.comb


def perms(n):
    return P(range(1, n + 1))


def pos(p, x):
    return p.index(x)


def adj(p, a, b):
    return abs(pos(p, a) - pos(p, b)) == 1


def has_seq(p, s):
    k = len(s)
    return any(tuple(p[i:i + k]) == tuple(s) for i in range(len(p) - k + 1))


def D(n):
    return sum(1 for p in perms(n) if all(p[i] != i + 1 for i in range(n)))


def fixed(p):
    return sum(1 for i, x in enumerate(p) if x == i + 1)


def arrangements(n, k, pred):
    return sum(1 for p in P(range(1, n + 1), k) if pred(p))


# ---- expected value of every own question (computed, never copied) ----
E = {}
E["C01-Q1"] = sum(1 for _ in P("abcde", 3))
E["C01-Q2"] = sum(1 for _ in perms(6))
E["C01-Q3"] = sum(1 for _ in itertools.product((1, 2, 3), repeat=4))
E["C01-Q4"] = sum(1 for _ in P(range(8), 3))
E["C01-Q5"] = sum(1 for _ in P(range(7), 3))

E["C02-Q1"] = sum(1 for p in perms(7) if p[0] == 7)
E["C02-Q2"] = sum(1 for p in perms(7) if p[0] % 2 == 1 and p[-1] % 2 == 0)
E["C02-Q3"] = sum(1 for p in P("abcdxyz") if set(p[:4]) == set("abcd"))
E["C02-Q4"] = arrangements(6, 4, lambda p: 1 in p)
E["C02-Q5"] = arrangements(5, 3, lambda p: 1 in p)

E["C03-Q1"] = sum(1 for p in perms(6) if adj(p, 1, 2))
E["C03-Q2"] = sum(1 for p in perms(7) if max(pos(p, x) for x in (1, 2, 3)) - min(pos(p, x) for x in (1, 2, 3)) == 2)
E["C03-Q3"] = sum(1 for p in perms(6) if adj(p, 1, 2) and adj(p, 5, 6))
E["C03-Q4"] = sum(1 for p in perms(6) if pos(p, 1) < pos(p, 2))
E["C03-Q5"] = sum(1 for p in perms(6) if max(pos(p, x) for x in (1, 2, 3)) - min(pos(p, x) for x in (1, 2, 3)) == 2
                  and pos(p, 1) < pos(p, 2) and pos(p, 1) < pos(p, 3))
E["C03-Q6"] = sum(1 for p in perms(8) if adj(p, 1, 2))

E["C04-Q1"] = sum(1 for p in P("abcdef") if not has_seq(p, "ab"))
E["C04-Q2"] = sum(1 for p in perms(6) if not has_seq(p, (1, 2, 3)))
E["C04-Q3"] = sum(1 for s in itertools.product(range(1, 6), repeat=5) if len(set(s)) < 5)
E["C04-Q4"] = sum(1 for s in itertools.product("abc", repeat=4) if "a" in s)
E["C04-Q5"] = sum(1 for p in perms(5) if not adj(p, 1, 2))
E["C04-Q6"] = sum(1 for p in perms(6) if max(pos(p, x) for x in (1, 2, 3)) - min(pos(p, x) for x in (1, 2, 3)) == 2
                  and not has_seq(p, (1, 2, 3)))

E["C05-Q1"] = len(set(range(30)) | set(range(20, 45)))  # |A|=30,|B|=25, |A&B|=10
E["C05-Q2"] = sum(1 for n in range(1, 101) if n % 2 == 0 or n % 3 == 0)
E["C05-Q3"] = sum(1 for p in perms(6) if adj(p, 1, 2) or adj(p, 3, 4))
E["C05-Q4"] = sum(1 for s in itertools.combinations(range(1, 8), 4) if {1, 2} <= set(s) or {6, 7} <= set(s))
E["C05-Q5"] = sum(1 for p in perms(6) if not adj(p, 1, 2) and not adj(p, 3, 4))
E["C05-Q6"] = sum(1 for n in range(1, 101) if n % 2 == 0 or n % 3 == 0 or n % 5 == 0)

E["C06-Q1"] = D(4)
E["C06-Q2"] = D(5)
E["C06-Q3"] = sum(1 for p in perms(4) if fixed(p) > 0)
E["C06-Q4"] = D(6)
E["C06-Q5"] = "$(2,1,4,3)$"
E["C06-Q6"] = D(7)

E["C07-Q1"] = sum(1 for p in perms(6) if fixed(p) == 2)
E["C07-Q2"] = sum(1 for p in perms(5) if fixed(p) == 1)
E["C07-Q3"] = sum(1 for p in perms(5) if fixed(p) >= 1)
E["C07-Q4"] = sum(1 for p in perms(6) if fixed(p) == 0 and set(p[:4]) == {1, 2, 3, 4})
E["C07-Q5"] = sum(1 for p in perms(7) if fixed(p) == 0 and set(p[:2]) == {1, 2})
E["C07-Q6"] = sum(1 for p in perms(7) if fixed(p) == 0 and set(p[:3]) == {1, 2, 3})

# ---- real exam answers pulled by bankId (recomputed independently) ----
BANK = {
    "24B-B-Q2a": sum(1 for p in perms(5) if adj(p, 1, 2) or adj(p, 4, 5)),
    "24B-A-Q2b": sum(1 for s in itertools.combinations(range(1, 7), 4) if {1, 2} <= set(s) or {5, 6} <= set(s)),
    "24B-C-Q1a": sum(1 for p in perms(6) if adj(p, 1, 2) and adj(p, 5, 6) and not adj(p, 3, 4)),
    "25B-A-Q1b": sum(1 for p in perms(7) if max(pos(p, x) for x in (1, 2, 3)) - min(pos(p, x) for x in (1, 2, 3)) == 2
                     and pos(p, 1) < pos(p, 2) and pos(p, 1) < pos(p, 3)),
    "24B-A-Q2a": sum(1 for p in perms(8) if fixed(p) == 0 and set(p[:4]) == {1, 2, 3, 4}),
    "25B-B-Q1b": sum(1 for p in perms(7) if fixed(p) == 0 and set(p[:4]) == {1, 2, 3, 4}),
    "25B-B-Q5a": arrangements(8, 5, lambda p: 1 in p),
}
BANK_STORED = {"24B-B-Q2a": 72, "24B-A-Q2b": 11, "24B-C-Q1a": 48, "25B-A-Q1b": 240,
               "24B-A-Q2a": 81, "25B-B-Q1b": 18, "25B-B-Q5a": 4200}

# ---- numbers quoted in lessons / explanations ----
LESSON = [
    ("C01 P(6,3)", sum(1 for _ in P(range(6), 3)), 120), ("C01 6^3", 6 ** 3, 216),
    ("C02 start 1|2 of 5", sum(1 for p in perms(5) if p[0] in (1, 2)), 48),
    ("C02 odd-first even-last n=5", sum(1 for p in perms(5) if p[0] % 2 == 1 and p[-1] % 2 == 0), 36),
    ("C02 3-of-6 containing 2", arrangements(6, 3, lambda p: 2 in p), 60),
    ("C03 adj n=5", sum(1 for p in perms(5) if adj(p, 1, 2)), 48),
    ("C03 two blocks", sum(1 for p in perms(6) if adj(p, 1, 2) and adj(p, 5, 6)), 96),
    ("C04 no 'ab' n=5", sum(1 for p in P("abcde") if not has_seq(p, "ab")), 96),
    ("C04 adj12 not adj34 n=5", sum(1 for p in perms(5) if adj(p, 1, 2) and not adj(p, 3, 4)), 24),
    ("C04 adj12&adj34 n=5", sum(1 for p in perms(5) if adj(p, 1, 2) and adj(p, 3, 4)), 24),
    ("C05 adj12|adj45 n=5", sum(1 for p in perms(5) if adj(p, 1, 2) or adj(p, 4, 5)), 72),
    ("C05 adj12&adj45 n=5", sum(1 for p in perms(5) if adj(p, 1, 2) and adj(p, 4, 5)), 24),
    ("C05 4-subsets of 6 containing 1,2", sum(1 for s in itertools.combinations(range(1, 7), 4) if {1, 2} <= set(s)), 6),
    ("C05 mult of 4", sum(1 for n in range(1, 101) if n % 4 == 0), 25),
    ("C05 mult of 6", sum(1 for n in range(1, 101) if n % 6 == 0), 16),
    ("C05 mult of 12", sum(1 for n in range(1, 101) if n % 12 == 0), 8),
    ("C05 4 or 6", sum(1 for n in range(1, 101) if n % 4 == 0 or n % 6 == 0), 33),
    ("C05 5 pair sums", 16 + 10 + 6, 32),
    ("C06 D1..D8", [D(n) for n in range(1, 9)], [0, 1, 2, 9, 44, 265, 1854, 14833]),
    ("C06 formula D4", round(24 * sum((-1) ** k / math.factorial(k) for k in range(5))), 9),
    ("C06 (2,3,1),(3,1,2) are the derangements of 3",
     sorted(p for p in perms(3) if fixed(p) == 0), [(2, 3, 1), (3, 1, 2)]),
    ("C06 recurrences", all(D(n) == (n - 1) * (D(n - 1) + D(n - 2)) and D(n) == n * D(n - 1) + (-1) ** n for n in range(3, 9)), True),
    ("C07 exactly 3 fixed n=6", sum(1 for p in perms(6) if fixed(p) == 3), 40),
    ("C07 n=5 prefix 1,2", sorted(p for p in perms(5) if fixed(p) == 0 and set(p[:2]) == {1, 2}), [(2, 1, 4, 5, 3), (2, 1, 5, 3, 4)]),
    ("C07 D_k D_(n-k) formula", all(
        sum(1 for p in perms(n) if fixed(p) == 0 and set(p[:k]) == set(range(1, k + 1))) == D(k) * D(n - k)
        for n in range(3, 8) for k in range(1, n)), True),
    ("C07 binom*D formula", all(sum(1 for p in perms(n) if fixed(p) == j) == C(n, j) * D(n - j)
                                for n in range(2, 8) for j in range(0, n + 1)), True),
]

bad = []


def ck(name, got, want):
    if got != want:
        bad.append(f"{name}: computed {got!r}, stored {want!r}")


for name, got, want in LESSON:
    ck("lesson " + name, got, want)
for k, v in BANK.items():
    ck("bank " + k, v, BANK_STORED[k])

out = subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], capture_output=True, check=True, encoding="utf8").stdout
data = json.loads(out)
assert not data["errors"], data["errors"]
n_checked = 0
qids = set()
for ent in data["levels"]:
    if ent["courseId"] != "perm_ie":
        continue
    L = ent["level"]
    for q in L["questions"]:
        if "bankId" in q:
            if q["bankId"] not in BANK:
                bad.append(f"{L['id']}: bankId {q['bankId']} has no independent check")
            continue
        qid = q["id"]
        qids.add(qid)
        if qid not in E:
            bad.append(f"{qid}: no expected value")
            continue
        want = E[qid]
        if "step" in q:
            s = q["step"]
            if s["type"] != "numeric":
                bad.append(f"{qid}: unexpected step type")
            else:
                ck(qid, s["answer"], want)
        else:
            vals = {o["id"]: o["value"] for o in q["options"]}
            got = vals[q["correctId"]]
            if isinstance(want, int):
                ck(qid, got, str(want))
                if str(want) in [v for i, v in vals.items() if i != q["correctId"]]:
                    bad.append(f"{qid}: a distractor equals the right answer")
                if len(set(vals.values())) != len(vals):
                    bad.append(f"{qid}: duplicate options")
            else:
                ck(qid, got, want)
        n_checked += 1
if qids != set(E):
    bad.append(f"expected-but-missing questions: {sorted(set(E) - qids)}")

# C06-Q5: exactly one option is a derangement; C07-Q2/Q6 distractors named in explanations are what they claim
opts = ["(2,1,3,4)", "(3,2,1,4)", "(2,1,4,3)", "(2,4,3,1)"]
dr = [o for o in opts if all(int(c) != i + 1 for i, c in enumerate(o.strip("()").split(",")))]
ck("C06-Q5 unique derangement", dr, ["(2,1,4,3)"])
ck("C07-Q6 distractors", [D(7), D(3) + D(4), math.factorial(3) * math.factorial(4)], [1854, 11, 144])
ck("C07-Q2 distractors", [D(5), math.factorial(5), math.factorial(4)], [44, 120, 24])

print(f"own questions checked: {n_checked}; bank answers checked: {len(BANK)}; lesson facts: {len(LESSON)}")
if bad:
    print("FAIL")
    for b in bad:
        print("  " + b.encode("ascii", "replace").decode())
    sys.exit(1)
print("OK: all stored answers match brute force")
