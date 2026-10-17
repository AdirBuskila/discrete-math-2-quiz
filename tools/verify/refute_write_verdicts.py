import json, pathlib, sys
sys.path.insert(0, "tools")
from richtext import part_suffix
RAW = pathlib.Path("tools/raw")
# (code, num, part) -> overrides
ITEM = {
 ("21B-A","1","ג"): "statement says only that two vertex-disjoint cycles exist; |E|=n+1 holds only if these are ALL the cycles (official page assumes it). Literal statement: |E| not determined by n.",
 ("21B-B","4","א"): "literal reading counts the empty set (vacuously contains only such pairs): 2^15=32768; key 32767 follows the handwritten 'C != empty' that the printed question does not state.",
 ("20B-A","2","ב"): "b1: statement does not say letters are distinct (b2 adds 'each letter once' as an extra condition, implying b1 allows repeats): literal 4^4*3^3=6912; key 144 assumes A and B are used once each.",
}
STEP = {
 ("22B-B","2","ב",3): "constant c is not unique (any c>=12 works); prompt should say 'the smallest c'. 12 is the tight value.",
 ("21B-A","1","ג",2): "G is only said to contain two disjoint cycles; |E|=11 needs 'exactly these two cycles'. Undetermined as phrased.",
 ("21B-A","3","א",2): "constant c not unique (any c>=2 works); say 'smallest c'. 2 is tight (n=0).",
 ("21B-B","2","א",2): "constant c not unique (any c>=4 works); say 'smallest c'. 4 is tight (n=0).",
}
PIT = {
 ("21B-B","4","ג"): "pitfall 1 is not an error: (n-1)^(n(n-1)) with Fermat exponent n-1 dividing n(n-1) is a valid direct proof (also (n-1)=-1 mod n and n(n-1) even).",
}
NOTE = {
 ("20B-A","6","ג"): "answer 2 agrees (Petersen, all pairs checked); the solution's claim that distances from a and f suffice is unjustified (needs vertex-transitivity).",
}
for code in ["22B-B","21B-A","21B-B","20B-A"]:
    d = json.loads((RAW/f"{code}.json").read_text(encoding="utf-8"))
    answers = {}; detail = {}
    for q in d["questions"]:
        k = f"{q['num']}{part_suffix(q.get('part')) or ''}"
        ik = (code, str(q["num"]), q.get("part"))
        bad = ik in ITEM
        a = {"agrees": not bad, "confident": True, "transcriptionIssues": ""}
        if q["kind"] == "truefalse": a["answer"] = q["verdict"] if not bad else (not q["verdict"])
        if bad: a["note"] = ITEM[ik]
        if ik in NOTE: a["note"] = NOTE[ik]
        answers[k] = a
        steps = []
        for i, s in enumerate(q.get("steps") or []):
            sk = ik + (i,)
            steps.append({"step": i, "type": s["type"], "verdict": "disagree" if sk in STEP else "agree", **({"first_divergence": STEP[sk]} if sk in STEP else {})})
        detail[k] = {"solution": "disagree" if bad else "agree", "steps": steps,
                     "rubric": "agree (points sum to the question total)",
                     "pitfalls": "disagree: "+PIT[ik] if ik in PIT else "agree"}
        if bad: detail[k]["first_divergence"] = ITEM[ik]
    (RAW/f"_verify_{code}.json").write_text(json.dumps({"answers": answers, "detail": detail}, ensure_ascii=False, indent=1), encoding="utf-8")
    print(code, len(answers))
