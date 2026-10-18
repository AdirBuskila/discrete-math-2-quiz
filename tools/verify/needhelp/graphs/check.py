# Re-asserts every stored answer of courses/graphs/*.js against the networkx / brute-force values in spec.py.
# Run: PYTHONUTF8=1 py tools/verify/needhelp/graphs/check.py   (from the app root; needs node + networkx)
import json, os, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import spec  # runs every networkx/brute-force assertion on import
from spec import ANS

def fmt(seq):
    return "$" + ",".join(str(x) for x in seq) + "$"


ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
raw = subprocess.run(["node", os.path.join(ROOT, "tools", "course_load.js")], capture_output=True, cwd=ROOT, check=True).stdout
data = json.loads(raw.decode("utf8"))
assert not data["errors"], data["errors"]
levels = [x["level"] for x in data["levels"] if x["courseId"] == "graphs"]
assert [l["id"] for l in sorted(levels, key=lambda l: l["order"])] == ["C%02d" % i for i in range(1, 11)]
bank = {q["id"]: q for q in json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf8"))["questions"]}

seen, nb = set(), 0
for lv in levels:
    assert lv["source"] == "ai-verified"
    for q in lv["questions"]:
        if "bankId" in q:
            b = bank[q["bankId"]]
            assert b["official"] is True and b["confidence"] == "high" and not b.get("hold") and lv.get("boss"), q["bankId"]
            assert q["bankId"] in spec.BOSS
            nb += 1
            continue
        qid = q["id"]
        assert qid not in seen
        seen.add(qid)
        exp = ANS[qid]
        if "step" in q:
            s = q["step"]
            if s["type"] == "numeric":
                assert s["answer"] == exp and s.get("tol", 0) == 0, (qid, s["answer"], exp)
            elif s["type"] == "order":
                want = [fmt(t) for t in exp]
                got = [l.split(": ")[-1] if ": " in l else None for l in s["lines"]]
                assert got[:3] == want, (qid, got, want)
            elif s["type"] == "findbug":
                assert s["bugIndex"] == exp
                assert s["lines"][exp] == spec.C06_BUG and s["lines"][exp] != spec.C06_LINES[exp]
                assert [l for i, l in enumerate(s["lines"]) if i != exp] == [l for i, l in enumerate(spec.C06_LINES) if i != exp]
            else:
                raise AssertionError(s["type"])
        else:
            want = exp if isinstance(exp, str) else fmt(exp)
            vals = {o["id"]: o["value"] for o in q["options"]}
            assert len(set(vals.values())) == len(vals)
            assert vals[q["correctId"]] == want, (qid, vals[q["correctId"]], want)
            assert q.get("explanation")
assert seen == set(ANS), set(ANS) ^ seen
assert nb == 6 and set(spec.BOSS) == {q["bankId"] for l in levels for q in l["questions"] if "bankId" in q}
print("OK:", len(seen), "own questions + ", nb, "bank questions; every stored answer re-asserted")
