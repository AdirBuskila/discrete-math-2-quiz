# Re-asserts every stored answer. spec.build() recomputes each value by brute force (iterating the recurrence)
# and asserts it; here we load the stored courses/recurrence/C0N.js through node and require it to equal build().
import json, os, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import spec

ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
LOAD = r"""
const fs=require('fs');const out=[];
global.COURSE_LEVEL=(id,o)=>out.push(o);
for(const f of fs.readdirSync(process.argv[1]).filter(f=>/^C\d+\.js$/.test(f)).sort()){
  (0,eval)(fs.readFileSync(process.argv[1]+'/'+f,'utf8'));}
process.stdout.write(JSON.stringify(out));
"""

def main():
    built = spec.build()
    raw = subprocess.run(["node", "-e", LOAD, os.path.join(ROOT, "courses", "recurrence")], capture_output=True, check=True).stdout
    stored = json.loads(raw.decode("utf8"))
    assert len(stored) == len(built), (len(stored), len(built))
    n = 0
    for s, b in zip(stored, built):
        assert s == b, "stored level %s differs from the verified spec" % b["id"]
        n += len(b["questions"])
    # bank ids used by the course must be the official ones recorded in the bank
    q = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf8"))
    qs = q if isinstance(q, list) else q.get("questions", q)
    byid = {x["id"]: x for x in qs}
    for lv in built:
        for x in lv["questions"]:
            if "bankId" in x:
                it = byid[x["bankId"]]
                assert it["topic"] == "recurrences" and it["official"] is True, x["bankId"]
    ids = [x.get("id") or x["bankId"] for lv in built for x in lv["questions"]]
    assert len(set(ids)) == len(ids)
    print("OK: %d levels, %d questions match the brute-force-verified spec" % (len(stored), n))

if __name__ == "__main__":
    main()
