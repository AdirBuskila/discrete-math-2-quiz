# Writes courses/graphs/C01..C10.js from spec.ANS (every answer is computed there with networkx / brute force).
import os, sys, json
sys.path.insert(0, os.path.dirname(__file__))
import spec
from spec import ANS

OUT = os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", "courses", "graphs")
LET = "abcdefgh"


def raw(s):
    s = s.strip("\n")
    assert "`" not in s and "${" not in s, s
    return "String.raw`" + s + "`"


def fmt(seq):
    return "$" + ",".join(str(x) for x in seq) + "$"


def mcq(qid, question, opts, expl, recap):
    ans = ANS[qid]
    if isinstance(ans, list): ans = fmt(ans)
    assert opts.count(ans) == 1, (qid, ans, opts)
    assert len(set(opts)) == len(opts)
    cid = LET[opts.index(ans)]
    o = ",\n         ".join('{ id: "%s", value: %s }' % (LET[i], raw(t)) for i, t in enumerate(opts))
    return ('    { id: "%s", question: %s,\n      options: [%s],\n      correctId: "%s",\n      explanation: %s,\n      recap: %s }'
            % (qid, raw(question), o, cid, raw(expl), raw(recap)))


def num(qid, prompt, expl, recap):
    a = ANS[qid]
    assert isinstance(a, int)
    return ('    { id: "%s",\n      step: { type: "numeric", prompt: %s, answer: %d, tol: 0,\n              explain: %s },\n      recap: %s }'
            % (qid, raw(prompt), a, raw(expl), raw(recap)))


def order(qid, prompt, lines, expl, recap):
    ls = ",\n                ".join(raw(l) for l in lines)
    return ('    { id: "%s",\n      step: { type: "order", prompt: %s,\n              lines: [%s],\n              explain: %s },\n      recap: %s }'
            % (qid, raw(prompt), ls, raw(expl), raw(recap)))


def findbug(qid, prompt, lines, bug, expl, recap):
    ls = ",\n                ".join(raw(l) for l in lines)
    return ('    { id: "%s",\n      step: { type: "findbug", prompt: %s,\n              lines: [%s],\n              bugIndex: %d,\n              explain: %s },\n      recap: %s }'
            % (qid, raw(prompt), ls, bug, raw(expl), raw(recap)))


def bank(bid, recap):
    return '    { bankId: "%s", recap: %s }' % (bid, raw(recap))


def level(num_, icon, title, goal, lesson, qs, boss=False, source="ai-verified"):
    cid = "C%02d" % num_
    head = '/* graphs, level %d: %s */\n' % (num_, title.split(":")[0])
    body = ('COURSE_LEVEL("graphs", {\n  id: "%s", order: %d, icon: "%s", title: %s,\n  goal: %s,\n%s  source: "%s",\n  lesson: { html: %s },\n  questions: [\n%s,\n  ],\n});\n'
            % (cid, num_, icon, raw(title), raw(goal), "  boss: true,\n" if boss else "", source, raw(lesson), ",\n".join(qs)))
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, cid + ".js"), "w", encoding="utf8", newline="\n") as f:
        f.write(head + body)


SRC = os.environ.get("COURSE_SOURCE", "ai-draft")

# =============================== C01 ===============================
level(1, "🔢", "דרגות ומשפט הדרגות", "לחשב מספר צלעות מתוך דרגות, ולזהות מתי סדרת דרגות לא יכולה להתקיים בגלל זוגיות.", r"""
<p><b>גרף לא מכוון</b> $G=(V,E)$ מורכב מקבוצת <b>צמתים</b> $V$ ומקבוצת <b>צלעות</b> $E$, שכל אחת מהן זוג צמתים. בקורס הגרפים <b>פשוטים</b>: בלי לולאות ובלי צלעות כפולות. <b>דרגה</b> של צומת $v$, שנכתבת $\deg(v)$, היא מספר הצלעות שנוגעות בו (מספר השכנים שלו). בגרף פשוט על $n$ צמתים תמיד $0\le\deg(v)\le n-1$.</p>
<div class="lesson-rule">🔑 <b>משפט הדרגות:</b> $\sum_{v\in V}\deg(v)=2|E|$. כל צלע נספרת פעמיים, פעם בכל אחד מקצותיה.</div>
<ul>
<li><b>מסקנה:</b> מספר הצמתים בעלי דרגה אי-זוגית הוא תמיד זוגי (כי הסכום זוגי).</li>
<li><b>גרף שלם</b> $K_n$: כל זוג צמתים מחובר, ולכן $|E|=\binom n2=\frac{n(n-1)}2$.</li>
<li><b>גרף $r$-רגולרי:</b> כל הדרגות שוות $r$. אז $r\cdot|V|=2|E|$.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> בגרף על 6 צמתים כל הדרגות 3. סכום הדרגות $6\cdot3=18$, ולכן $|E|=9$.</div>
<div class="lesson-trap">⚠️ סכום דרגות אי-זוגי אי-אפשרי. למשל 5 צמתים בדרגה 3 נותנים סכום 15, ולכן אין גרף כזה.</div>
""", [
    num("C01-Q1", r"בגרף יש 8 צמתים וכל צומת בו בדרגה 3. כמה צלעות יש בגרף?",
        r"סכום הדרגות הוא $8\cdot3=24$, ולפי משפט הדרגות $|E|=24/2=12$.", r"$|E|=\frac12\sum\deg(v)$."),
    mcq("C01-Q2", r"האם קיים גרף פשוט על 7 צמתים שכל צומת בו בדרגה 3?",
        ["כן, כי 3 קטן מ-7", "לא, כי סכום הדרגות 21 הוא אי-זוגי", "לא, כי 3 גדול מדי ל-7 צמתים", "כן, לכל מספר צמתים קיים גרף 3-רגולרי"],
        r"סכום הדרגות הוא $7\cdot3=21$, והוא חייב להיות $2|E|$, מספר זוגי. לכן אין גרף כזה. הדרגה 3 לא גדולה מדי (המקסימום הוא $6$). הטענה שלכל מספר צמתים קיים גרף 3-רגולרי שגויה: על 8 צמתים קיים, על 7 לא.",
        r"סכום הדרגות חייב להיות זוגי."),
    num("C01-Q3", r"כמה צלעות יש בגרף השלם $K_9$ ?",
        r"כל זוג צמתים מחובר: $\binom92=\frac{9\cdot8}2=36$.", r"$|E(K_n)|=\binom n2$."),
    num("C01-Q4", r"בגרף 10 צמתים: ארבעה מהם בדרגה 3 ושישה בדרגה 2. כמה צלעות יש בו?",
        r"סכום הדרגות $4\cdot3+6\cdot2=24$, ולכן $|E|=12$.", r"מחברים את כל הדרגות ומחלקים ב-2."),
    mcq("C01-Q5", r"איזו מהסדרות הבאות <b>לא</b> יכולה להיות סדרת הדרגות של גרף?",
        ["$2,2,2,2$", "$3,3,2,2$", ANS["C01-Q5"], "$4,2,2,2,2$"],
        r"בסדרה $3,3,3,1,1$ סכום הדרגות הוא $11$, אי-זוגי (חמישה צמתים בדרגה אי-זוגית), ולכן אין גרף כזה. את שלוש האחרות אפשר לממש: $C_4$, גרף $K_4$ בלי צלע אחת, ושני משולשים החולקים צומת.",
        r"סכום אי-זוגי: אין גרף."),
    num("C01-Q6", r"בגרף רגולרי יש 10 צמתים ו-20 צלעות. מהי הדרגה של כל צומת?",
        r"$r\cdot10=2\cdot20=40$, ולכן $r=4$.", r"$r|V|=2|E|$."),
])

# =============================== C02 ===============================
level(2, "🔄", "הגרף המשלים", "לחשב דרגות ומספר צלעות במשלים, ולזהות משלימים של גרפים מוכרים.", r"""
<p>ה<b>משלים</b> $\overline G$ של גרף $G=(V,E)$ הוא גרף על אותם צמתים, שבו שני צמתים שונים מחוברים <b>בדיוק כאשר הם לא מחוברים</b> ב-$G$. כלומר מוחקים את כל הצלעות הקיימות ומוסיפים את כל החסרות.</p>
<div class="lesson-rule">🔑 בגרף על $n$ צמתים: $\deg_G(v)+\deg_{\overline G}(v)=n-1$ ו-$|E(G)|+|E(\overline G)|=\binom n2$.</div>
<ul>
<li>המשלים של $K_n$ הוא גרף בלי צלעות (n צמתים מבודדים), ולהפך.</li>
<li>המשלים של $K_{m,n}$ הוא איחוד זר של $K_m$ ו-$K_n$.</li>
<li>המשלים של $C_5$ הוא $C_5$ (כשרושמים את הצמתים בסדר $v_1,v_3,v_5,v_2,v_4$).</li>
<li>אם $G$ <b>לא קשיר</b>, אז $\overline G$ קשיר: שני צמתים מרכיבים שונים לא מחוברים ב-$G$, ולכן מחוברים ב-$\overline G$. ההפך לא נכון: ל-$P_4$ ולמשלים שלו שניהם קשירים.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> אם $G$ איזומורפי ל-$\overline G$, אז יש להם אותו מספר צלעות, ולכן $2|E|=\binom n2$. בגרף כזה על 5 צמתים יש $|E|=5$ צלעות.</div>
<div class="lesson-trap">⚠️ משלים הופך <b>דרגה</b> $d$ ל-$n-1-d$ ולא ל-$n-d$. הצומת עצמו לא נספר כשכן.</div>
""", [
    num("C02-Q1", r"בגרף $G$ יש 7 צמתים ו-8 צלעות. כמה צלעות יש במשלים $\overline G$ ?",
        r"$\binom72=21$, ולכן במשלים $21-8=13$ צלעות.", r"$|E(\overline G)|=\binom n2-|E|$."),
    num("C02-Q2", r"בגרף על 9 צמתים יש צומת $v$ בדרגה 2. מהי הדרגה של $v$ במשלים?",
        r"$\deg_{\overline G}(v)=n-1-\deg_G(v)=9-1-2=6$.", r"דרגה במשלים: $n-1-d$."),
    num("C02-Q3", r"כמה צלעות יש במשלים של $K_{3,4}$ ?",
        r"ל-$K_{3,4}$ יש $12$ צלעות, ו-$\binom72=21$, ולכן במשלים $9$ צלעות. זה מתאים לכך שהמשלים הוא $K_3\cup K_4$ עם $3+6=9$ צלעות.", r"משלים של $K_{m,n}$: $K_m\cup K_n$."),
    mcq("C02-Q4", r"איזה גרף הוא המשלים של $C_5$ ?",
        ["מסלול על 5 צמתים", ANS["C02-Q4"], "כוכב עם 4 עלים", "גרף בלי צלעות"],
        r"ל-$C_5$ יש 5 צלעות והמשלים הוא 2-רגולרי עם $10-5=5$ צלעות, ובאמת מעגל באורך 5. מסלול על 5 צמתים יש לו רק 4 צלעות, לכוכב 4 צלעות ודרגות שונות, וגרף בלי צלעות הוא המשלים של $K_5$.", r"$\overline{C_5}\cong C_5$."),
    mcq("C02-Q5", r"הגרף $G$ אינו קשיר. מה נכון תמיד לגבי $\overline G$ ?",
        ["אינו קשיר", ANS["C02-Q5"], "הוא עץ", "הוא דו-צדדי"],
        r"שני צמתים משני רכיבים שונים לא מחוברים ב-$G$ ולכן מחוברים ב-$\overline G$, וכל צומת מחובר דרכם לכל השאר. המשלים לא חייב להיות עץ או דו-צדדי: משלים של שלושה צמתים מבודדים הוא משולש.", r"$G$ לא קשיר גורר $\overline G$ קשיר."),
    num("C02-Q6", r"גרף $G$ על 13 צמתים איזומורפי למשלים שלו. כמה צלעות יש בו?",
        r"אותו מספר צלעות ב-$G$ וב-$\overline G$, וסכומם $\binom{13}2=78$. לכן $|E|=39$.", r"$G\cong\overline G$ גורר $|E|=\frac12\binom n2$."),
])

for _p in ("part2.py", "part3.py"):
    _f = os.path.join(os.path.dirname(__file__), _p)
    if os.path.exists(_f):
        exec(compile(open(_f, encoding="utf8").read(), _p, "exec"))
