# Re-reads the stored level files (via node) and re-asserts every own question against brute force.
import json, os, subprocess, sys, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from spec import *
from itertools import permutations, combinations
from math import comb, perm, factorial
D_ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", "courses", "func_count")
js = ("global.out=[];global.COURSE_LEVEL=(c,l)=>out.push(l);const fs=require('fs');const d=%s;"
      "for(const f of fs.readdirSync(d).sort())eval(fs.readFileSync(d+'/'+f,'utf8'));"
      "process.stdout.write(JSON.stringify(out))") % json.dumps(os.path.abspath(D_).replace("\\", "/"))
levels = json.loads(subprocess.run(["node", "-e", js], capture_output=True, check=True).stdout.decode("utf8"))

# qid -> expected brute-force value (the answer for numeric steps, the value of the correct option for mcq)
E = {
 "C01-Q1": count(4,3,lambda f:True), "C01-Q2": count(4,7,inj), "C01-Q3": count(5,4,inj), "C01-Q4": count(5,5,inj),
 "C01-Q5": count(4,6,lambda f:not inj(f)),
 "C02-Q1": count(3,6,inc), "C02-Q2": count(4,8,dec), "C02-Q3": count(4,6,lambda f:inj(f) and not inc(f)),
 "C02-Q4": count(5,4,inc), "C02-Q5": count(4,9,lambda f:inc(f) and f[0]==1),
 "C03-Q1": count(3,4,winc), "C03-Q2": count(4,3,winc), "C03-Q3": count(3,3,lambda f:not winc(f)),
 "C03-Q4": count(4,5,lambda f:winc(f) and not inc(f)), "C03-Q5": count(2,6,wdec),
 "C04-Q1": count(4,2,onto(2)), "C04-Q2": count(4,3,onto(3)), "C04-Q3": count(5,3,onto(3)), "C04-Q4": count(3,4,onto(4)),
 "C04-Q5": count(5,5,onto(5)),
 "C05-Q1": count(4,7,lambda f:inj(f) and set(f[:2])=={6,7}),
 "C05-Q2": count(5,8,lambda f:inj(f) and set(f[:3])=={6,7,8}),
 "C05-Q3": count(4,5,lambda f:set(f[:2])<={4,5}),
 "C05-Q4": count(5,4,lambda f:{i+1 for i in range(5) if f[i] in (1,2)}=={1,2,3}),
 "C05-Q5": count(4,6,lambda f:inj(f) and set(f[:2])<={1,2,3} and set(f[2:])<={4,5,6}),
 "C06-Q1": count(6,6,lambda f:inj(f) and (f[0]==1 or f[5]==6)), "C06-Q2": count(4,9,lambda f:inc(f) and f[0]==7 and f[3]==8),
 "C06-Q3": count(4,7,lambda f:inj(f) and f[0]==1), "C06-Q4": count(4,9,lambda f:inc(f) and f[1]==5),
 "C07-Q1": sum(1 for _ in combinations(range(12),5)),
 "C07-Q2": sum(1 for s in combinations([(x,y) for x in range(3) for y in range(4)],5) if all(p[1]!=3 for p in s)),
 "C07-Q3": sum(1 for s in combinations([(x,y) for x in range(3) for y in range(4)],3) if len({p[0] for p in s})==3),
 "C07-Q4": sum(1 for s in permutations("abcdef",4) if s[0] in "ab"),
 "C07-Q5": sum(1 for s in permutations("abcdef",4) if "".join(s[:2]) in ("ab","cd")),
}
# mcq option value (TeX) -> number, evaluated independently of gen.py
OPT = {
 r"$7^4$":7**4, r"$P(7,4)$":perm(7,4), r"$\binom74$":comb(7,4), r"$4^7$":4**7,
 r"$\binom84$":comb(8,4), r"$P(8,4)$":perm(8,4), r"$8^4$":8**4, r"$\binom{11}4$":comb(11,4),
 r"$\binom64$":comb(6,4), r"$\binom34$":comb(3,4), r"$\binom74$":comb(7,4), r"$3^4$":3**4,
 r"$3^5-3\cdot2^5+3\cdot1^5$":3**5-3*2**5+3, r"$3^5-3\cdot2^5$":3**5-3*2**5, r"$3^5-2^5$":3**5-2**5, r"$3^5$":3**5,
 r"$243$":243, r"$25$":25, r"$150$":150, r"$147$":147,
 r"$3!\cdot P(5,2)$":6*perm(5,2), r"$P(5,2)$":perm(5,2), r"$3!\cdot5^2$":150, r"$P(8,5)$":perm(8,5),
}
seen = set()
for L in levels:
    assert L["source"] == "ai-verified"
    for q in L["questions"]:
        if "bankId" in q:
            continue
        qid = q["id"]; seen.add(qid)
        if "step" in q:
            assert q["step"]["type"] == "numeric" and q["step"]["tol"] == 0
            assert q["step"]["answer"] == E[qid], (qid, q["step"]["answer"], E[qid])
        else:
            opts = {o["id"]: OPT[o["value"]] for o in q["options"]}
            assert opts[q["correctId"]] == E[qid], (qid, opts, E[qid])
            assert sorted(opts.values()).count(E[qid]) == 1, qid
for k in E:
    assert k in seen, ("question missing from files", k)
assert seen == set(E), seen ^ set(E)
# closed-form spot checks used in the lessons
assert count(4,2,onto(2))==14 and count(5,3,onto(3))==150 and 243-150==93
assert count(3,3,onto(3))==6 and count(2,3,winc)==6 and count(5,5,lambda f:inj(f) and (f[0]==1 or f[4]==5))==42
assert count(3,5,inc)==10 and count(3,5,inj)==60 and count(5,7,lambda f:inj(f) and set(f[:2])=={6,7})==120
assert count(6,3,onto(3))==540
assert all(count(m,n,onto(n))==sum((-1)**k*comb(n,k)*(n-k)**m for k in range(n+1)) for m in range(1,6) for n in range(1,5))
assert all(count(m,n,winc)==comb(n+m-1,m) and count(m,n,inc)==comb(n,m) for m in range(1,5) for n in range(1,5))
print("OK:", len(seen), "own questions verified;", sum(1 for L in levels for q in L["questions"] if "bankId" in q), "bank pulls")
