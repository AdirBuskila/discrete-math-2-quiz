# -*- coding: utf-8 -*-
"""Generator for tools/raw/23B-B.json -- discrete-math-2, spring 2023, moed B (16.07.2023).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_23B-B.py

Source: 23B-B, 7 pp (p.1 cover/instructions, pp.2-7 typed questions with handwritten ink solutions in blue/green/black,
4 questions x 25 pts). Solutions are handwritten and were read by vision; the Hebrew prose is re-typeset from the ink,
the formulas and numbers are as written.
Structure: Q1 = three "define the term, then answer" parts (4+4, 5+4, 4+4 = 8+9+8). Q2 a (3+3+3), b (4+5), c (7).
Q3 a (6+6), b (6), c (7). Q4 a (4+5: two claims), b (4+4+4+4: four questions on one figure).
Parts with numbered sub-questions are ONE item (Q1b/c, Q3c, Q4a, Q4b).

Transcription notes
- Q1a: the definition line of the ink is partly hard to read; transcribed as "every arrangement of n elements of A".
- Q3a: the question prints "2 >=" after "size" (a right-to-left rendering of "size <= 2"); the solution uses
  n + C(n,2) = 210, so it is size at most 2. Typeset as $\\le 2$.
- Q4b: the figure was rendered from the PDF with the solver's red colour labels removed (they give away part 3).
  Edges read from the figure (cubic graph, 18 edges): v1v2 v2v3 v3v4 v4v5 v5v6 v6v7 v7v8 v8v9 v9v1 v1v5 v2v7 v3v11
  v4v8 v6v12 v9v10 v10v11 v10v12 v11v12.
- Q4b.2 "G-(v1,v5)" is read as G minus the edge v1v5 (the ink degrees 12-3 / 12-4 in the complement confirm it).
- Q4b.4: the K5 vertices v2,v4,v6,v9,v11 and the C5 on v1..v5 are as drawn in the ink; the 2K2 on {v1,v2},{v10,v11}.

Rubric, pitfalls and steps: ai-draft, authored in the STEPS block below; every value re-derived in the verify script.

Checks (tools/verify/23B-B/verify.py, brute force + sympy + networkx):
Q1a 3005, Q1b only p=2 below 20000, Q1c atlas n=4 (+ parity argument), Q2a f(n)=45^n n<12, Q2b closed form n<40,
Q2c 169 by enumeration, Q3a n=20 and 1820, Q3b 96, Q3c 75 edges / chi 5 and 3 / 125 induced K3,
Q4a atlas n<=7 (odd bipartite non-Hamiltonian, regular Euler with even |V| has even |E|),
Q4b Hamilton path, complement of G-v1v5 has odd vertices {v1,v5} and is connected, chi(G)=3 with the ink colouring,
K5 / induced C5 / induced C4 in the complement.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23B-B.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** (4 נק') המונח: תמורה.\n\n"
      r"**א2.** (4 נק') שאלה: כמה סדרות באורך 5 של איברי הקבוצה $A=\{1,2,3,4,5\}$ הן **לא** תמורות.",
      r"""**א1. הגדרה:** תהי $A$ קבוצה, $|A|=n\ge1$. כל חליפה בגודל $n$ של $A$ נקראת תמורה של $A$, כלומר כל סידור של $n$ איברים שונים של $A$.

**א2.** בתרגיל: ל-$A$ יש $5!=120$ תמורות. מכל הסדרות באורך 5 מעל $A$ יש $5^5$.

לכן התשובה היא: $5^5-5!=3005$.""",
      points=8),
    Q(1, "ב", "proof", "euler_phi",
      r"**ב1.** (5 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      r"**ב2.** (4 נק') שאלה: הראו שקיים מספר ראשוני יחיד $p$ שמקיים התנאי: $\phi(p)\mid p$.",
      r"""**ב1. הגדרה:** הפונקציה $\phi$ של Euler היא $\phi:\mathbb{N}^*\to\mathbb{N}^*$ כך ש: לכל $n\in\mathbb{N}^*$, $\phi(n)=\left|\{k:1\le k\le n\wedge\gcd(n,k)=1\}\right|$.

**ב2.** עבור $p=2$ התנאי מתקיים: $\phi(2)=1$ ולכן $\phi(2)\mid2$.

אם $p$ ראשוני ו-$p>2$, אז $\phi(p)=p-1\ge2$ ולכן $\phi(p)\nmid p$.

מסקנה: $\phi(p)\mid p$ וגם $p$ ראשוני, רק עבור $p=2$.""",
      points=9),
    Q(1, "ג", "proof", "graph_basics",
      "**ג1.** (4 נק') המונח: דרגה של צומת בגרף לא מכוון.\n\n"
      r"**ג2.** (4 נק') שאלה: נתון $G=(V,E)$ לא מכוון, כך ש: $|V|\pmod4=0$ ו: $|E|\pmod2=1$. הראו כי $G$ לא רגולרי.",
      r"""**ג1. הגדרה:** יהי $G=(V,E)$ גרף לא מכוון ו: $v\in V$. הדרגה של $v$ היא $|N(v)|$, מספר הצמתים השכנים של $v$ ב-$G$.

**ג2.** בשלילה: נניח ש: $|V|=4k$ (עבור $k\in\mathbb{N}$ כלשהו), $|E|=2q+1$ ($q\in\mathbb{N}$), ונניח בשלילה ש-$G$ הוא $r$-רגולרי. נקבל

$$4k\cdot r=\sum_{v\in V}\deg(v)=2|E|=2(2q+1)\ \Longrightarrow\ 2kr=2q+1$$

אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה.

מסקנה: $G$ לא רגולרי.""",
      points=8),

    Q(2, "א", "computation", "asymptotics",
      r"(3+3+3 נק') חשבו את $f(n)=\sum_{k=0}^{n}\binom nk\cdot2^{n-k}\bullet\sum_{k=0}^{n}\binom nk\cdot3^{n+k}\cdot2^{n-k}$. הראו ש: $f(n)=O(50^n)$.",
      r"""לפי הבינום של Newton נקבל

$$f(n)=\left(\sum_{k=0}^{n}\binom nk\cdot1^k\cdot2^{n-k}\right)\cdot3^n\cdot\sum_{k=0}^{n}\binom nk\cdot3^k\cdot2^{n-k}=3^n\cdot3^n\cdot5^n=45^n\le1\cdot50^n$$

לכל $n\in\mathbb{N}$, $n\ge n_0=0$. לכן $f(n)=O(50^n)$.""",
      points=9),
    Q(2, "ב", "computation", "recurrences",
      r"(4+5 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=3,\ a_1=14$ וגם $a_n=8a_{n-1}-16a_{n-2}+18$ עבור $n>1$.",
      r"""המשוואה האופיינית: $x^2-8x+16=0\ \Leftarrow\ x_1=x_2=4$, ולכן $a_n^{(h)}=C_1\cdot4^n+C_2\cdot n\cdot4^n$.

פתרון פרטי: $a_n^{(p)}=A\ \Rightarrow\ A=8A-16A+18\ \Rightarrow\ A=2$.

אז $a_n=C_1\cdot4^n+C_2\cdot n\cdot4^n+2$.

$$\begin{cases}a_0=C_1+2=3\\a_1=4C_1+4C_2+2=14\end{cases}\ \Rightarrow\ \begin{cases}C_1=1\\C_2=2\end{cases}$$

ולכן $a_n=4^n+2n\cdot4^n+2,\ n\in\mathbb{N}$.""",
      points=9),
    Q(2, "ג", "computation", "selections_repetition",
      r"(7 נק') תהי הקבוצה $A=\{a,b,c,d\}$. כמה מילים באורך 30 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: האות $a$ מופיעה יותר מ-5 פעמים, האות $b$ מופיעה לפחות 4 פעמים, האות $c$ מופיעה יותר מ-4 פעמים ואות $d$ מופיעה בדיוק 3 או 4 פעמים.",
      r"""נסמן $x_1$ = מספר ה-$a$, $x_2$ = מספר ה-$b$, $x_3$ = מספר ה-$c$.

**מקרה 1:** $d$ מופיעה בדיוק 3 פעמים. אז $x_1+x_2+x_3+3=30$, כלומר $x_1+x_2+x_3=27$ כאשר $x_1\ge6,\ x_2\ge4,\ x_3\ge5$.

נסמן $y_1=x_1-6,\ y_2=x_2-4,\ y_3=x_3-5$. אז $y_1+y_2+y_3=12$, $y_i\in\mathbb{N}$ ויש $D(3,12)=\binom{14}{2}=\frac{14\cdot13}{2}=91$ מילים.

**מקרה 2:** $d$ מופיעה בדיוק 4 פעמים. אז $x_1+x_2+x_3+4=30$, כלומר $x_1+x_2+x_3=26$ כאשר $x_1\ge6,\ x_2\ge4,\ x_3\ge5$, ויש $D(3,11)=\binom{13}{2}=\frac{13\cdot12}{2}=78$ מילים.

מסקנה: יש $169=91+78$ מילים מתאימות.""",
      points=7),

    Q(3, "א", "computation", "combinations_subsets",
      r"(6+6 נק') תהי הקבוצה $A=\{1,2,3,\dots,n\}$, כאשר $n\in\mathbb{N}$. ידוע שלקבוצה $A$ יש 210 תתי-קבוצות לא ריקות בגודל $\le2$. חשבו את מספר תתי-הקבוצות בגודל 5 של $A$ המכילות 3 מספרים שמתחלקים ב-3 וגם 2 מספרים שאינם מתחלקים ב-3.",
      r"""מכיוון ש: $n+\frac{n(n-1)}{2}=210$ נקבל $n^2+n-420=0$ ולכן $n_{1,2}=\frac{-1\pm41}{2}\in\{20,-21\}$, כלומר $n=20$ ו-$A=\{1,2,\dots,20\}$.

ב-$A$ יש $\lfloor\frac{20}{3}\rfloor=6$ מספרים שמתחלקים ב-3.

כל תת-קבוצה $B=\{b_1,b_2,b_3,b_4,b_5\}$ מתאימה היא כך ש: 3 מספרים מ-$B$ מתחלקים ב-3 (מתוך 6) ו-2 מספרים מ-$B$ לא מתחלקים ב-3 (מתוך 14).

לכן יש $1820=91\cdot20=\frac{14\cdot13}{1\cdot2}\cdot\frac{6\cdot5\cdot4}{2\cdot3}=\binom{14}{2}\cdot\binom63$ תתי-קבוצות מתאימות.""",
      points=12),
    Q(3, "ב", "computation", "function_counting",
      r"(6 נק') כמה פונקציות $f:\{1,2,3\}\to\{1,2,3,4,5,6\}$ הן **לא** חד-חד-ערכיות?",
      r"""בתרגיל: לכל $i=1,2,3$, $f(i)\in\{1,\dots,6\}$ ולכן יש $6^3$ פונקציות.

$f$ חח"ע $\iff f(1),f(2),f(3)$ היא חליפה בגודל 3 של $\{1,2,\dots,6\}$, ויש $P(6,3)=120$ פונקציות חח"ע.

לכן התשובה היא: $6^3-P(6,3)=216-120=96$ פונקציות שאינן חח"ע.""",
      points=6),
    Q(3, "ג", "computation", "graph_basics",
      r"(7 נק') יהי $G=(V,E)$ גרף לא מכוון שמוגדר לפי הכללים הבאים: $V=\{1,2,\dots,15\}$ וגם $(x,y)\in E\iff x,y\in V\ \wedge\ x\ne y\ \wedge\ x\pmod3=y\pmod3$. המשלים של $G$ מסומן ב-$H$. חשבו את:" "\n\n"
      r"**ג1.** מספר הצלעות של $H$, $\chi(G)$ וגם $\chi(H)$;" "\n\n"
      r"**ג2.** מספר תתי-הגרפים המושרים של $H$ שאיזומורפיים ל-$K_3$.",
      r"""נסמן $A=\{1,4,7,10,13\}$ ($x\pmod3=1$), $B=\{2,5,8,11,14\}$ ($x\pmod3=2$), $C=\{3,6,9,12,15\}$ ($x\pmod3=0$).

$(u,v)\in E\iff u,v\in A$ או $u,v\in B$ או $u,v\in C$.

**ג1.** $G=K_5\cup K_5\cup K_5$ ולכן $\chi(G)=5$ (כי ב-$G$ יש $K_5$ ולכן $\chi(G)\ge5$, ואפשר לצבוע ב-5 צבעים, ולכן $\chi(G)\le5$).

ב-$H$: $(x,y)\in\overline E$ אם ורק אם $x,y$ שייכים לשתי קבוצות שונות מבין $A$, $B$, $C$. אפשר לצבוע את $H$ ב-3 צבעים ("1" ל-$A$, "2" ל-$B$ ו-"3" ל-$C$), ולכן $\chi(H)\le3$. בנוסף, אם $a\in A,\ b\in B,\ c\in C$ אז ב-$H$ יש $K_3$ ולכן $3\le\chi(H)$.

מסקנה: $\chi(H)=3$.

כל צומת מ-$A$ מחובר ב-$H$ לכל צומת מ-$B$ ומ-$C$, וכן $B$ ל-$C$: $|E(H)|=3\cdot5\cdot5=75$.

**ג2.** כל $K_3$ ב-$H$ מורכב משלושה צמתים, אחד מכל אחת מהקבוצות $A$, $B$, $C$ (שני צמתים מאותה קבוצה אינם שכנים ב-$H$). לכן יש $|A|\cdot|B|\cdot|C|=5^3=125$ תתי-גרפים מושרים שאיזומורפיים ל-$K_3$.""",
      points=7),

    Q(4, "א", "proof", "euler_hamilton",
      "(4+5 נק') הוכיחו או הפריכו:\n\n"
      r"**א1.** לא קיים גרף Hamilton $G=(A,B,E)$ (דו-צדדי) כך ש: $|A|+|B|$ הוא מספר אי-זוגי." "\n\n"
      r"**א2.** לא קיים גרף Euler $G=(V,E)$ שמקיים את התנאים הבאים: $G$ הוא רגולרי, $|V|$ מספר זוגי וגם $|E|$ מספר אי-זוגי.",
      r"""**א1.** טענה נכונה. נניח בשלילה ש-$G$ הוא גרף Hamilton, כלומר קיים מעגל Hamilton $C:\ x_1,x_2,x_3,\dots,x_k$ ב-$G$. אז $|V(C)|=|A|+|B|=k$.

נניח ש: $x_1\in A$. אז $x_2\in B$, $x_3\in A$, $x_4\in B,\dots$ (ב-$G$ דו-צדדי הצמתים לאורך המעגל מתחלפים בין $A$ ל-$B$), וכדי לסגור את המעגל $x_k\in B$. לכן $k$ הוא זוגי ($k=2|A|$), בסתירה לכך ש-$|A|+|B|$ אי-זוגי.

מסקנה: הטענה נכונה.

**א2.** טענה נכונה. אם $G$ הוא גרף Euler רגולרי, אז דרגת כל הצמתים זוגית: $r=2q$. נניח ש: $2k=|V|$ ו: $|E|=2p+1$. אז

$$2k\cdot2q=2(2p+1)\ \Rightarrow\ 2kq=2p+1$$

אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה.

מסקנה: הטענה נכונה.""",
      points=9),
    Q(4, "ב", "computation", "euler_hamilton",
      r"(4+4+4+4 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ב1.** האם ב-$G$ קיים עץ פורש בעל 2 עלים?" "\n\n"
      r"**ב2.** האם במשלים של $G-(v_1,v_5)$ קיים מסלול Euler או מעגל Euler?" "\n\n"
      r"**ב3.** חשבו את $\chi(G)$." "\n\n"
      r"**ב4.** האם במשלים של $G$ קיימים $C_4,\ C_5,\ K_5$ כתתי-גרפים מושרים?",
      r"""**ב1.** כן. ב-$G$ יש מסלול Hamilton $P_{12}:\ v_1,v_2,v_3,v_4,v_5,v_6,v_7,v_8,v_9,v_{10},v_{11},v_{12}$, והוא עץ פורש בעל 2 עלים.

**ב2.** נסמן $G_1=G-(v_1,v_5)$. הדרגות ב-$\overline{G_1}$ הן $12-3$ או $12-4$ (כלומר 9 עבור $v_1,v_5$ ו-8 עבור שאר הצמתים), ולפי משפט Dirac $\overline{G_1}$ הוא גרף Hamilton (ובפרט קשיר). ב-$\overline{G_1}$ יש רק 2 צמתים בדרגה אי-זוגית: $v_1$ ו-$v_5$. לכן ב-$\overline{G_1}$ קיים מסלול Euler (ואין מעגל Euler).

**ב3.** ב-$G$ יש $K_3$ ולכן $3=\chi(K_3)\le\chi(G)$. ב-$G$ יש צביעה חוקית ב-3 צבעים "1","2","3": צבע 1 ל-$v_1,v_3,v_6,v_8,v_{10}$, צבע 2 ל-$v_2,v_4,v_9,v_{11}$ וצבע 3 ל-$v_5,v_7,v_{12}$. לכן $\chi(G)\le3$.

מסקנה: $\chi(G)=3$.

**ב4.** ב-$\overline G$ יש $K_5$: על הצמתים $v_2,v_4,v_6,v_9,v_{11}$.

ב-$G$ יש $C_5$ מושרה: $v_1,v_2,v_3,v_4,v_5$ ($C_5\cong\overline{C_5}$ כי $C_5$ הוא איזומורפי למשלים שלו), ולכן גם ב-$\overline G$ יש $C_5$ כתת-גרף מושרה.

ב-$G$ יש $2K_2$ מושרה: $\{v_1,v_2\}$ ו-$\{v_{10},v_{11}\}$, ולכן ב-$\overline G$ יש $C_4$ כתת-גרף מושרה.

מסקנה: כן, כולם קיימים.""",
      points=16, contextId="c1"),
]


# ---------------------------------------------------------------------------------------------
# Rubric / pitfalls / guided steps (step-author phase), ai-draft. Every expected value is re-derived in
# tools/verify/<CODE>/verify.py, which also reads this generator's output and asserts the step keys.
IDS = "abcdefgh"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def num(prompt, ans, explain, tol=0):
    return {"type": "numeric", "prompt": prompt, "answer": ans, "tol": tol, "explain": explain}


def ch(prompt, vals, correct, explain):
    return {"type": "choice", "prompt": prompt, "options": opts(*vals), "correctId": IDS[correct], "explain": explain}


def order(prompt, lines, explain):
    return {"type": "order", "prompt": prompt, "lines": lines, "explain": explain}


def bug(prompt, lines, i, explain):
    return {"type": "findbug", "prompt": prompt, "lines": lines, "bugIndex": i, "explain": explain}


STEPS = {}


def add(num_, part, rubric, pitfalls, steps):
    STEPS[(num_, part)] = {"rubric": rubric, "pitfalls": pitfalls, "steps": steps}


add(1, "א",
    rub(("הגדרת תמורה", 4), (r"מספר הסדרות באורך $5$ מעל $A$: $5^5=3125$", 2), (r"מספר התמורות $5!=120$", 1), (r"ההפרש $3125-120=3005$", 1)),
    [r"לחשב רק $5^5$ או רק $5!$ ולשכוח לחסר.",
     r"לחשב $5^5-5\cdot4\cdot3\cdot2$ ולשכוח את הגורם האחרון של $5!$."],
    [num(r"כמה סדרות באורך $5$ של איברי $A=\{1,2,3,4,5\}$ יש בסך הכול (חזרות מותרות)?", 3125, r"$5^5=3125$."),
     num("כמה מהן הן תמורות?", 120, r"$5!=120$."),
     num("כמה אינן תמורות?", 3005, r"$3125-120=3005$.")])

add(1, "ב",
    rub(("הגדרת הפונקציה $\\phi$ של Euler", 5), (r"עבור $p=2$: $\phi(2)=1\mid2$", 1), (r"עבור $p>2$: $\phi(p)=p-1\ge2$", 1),
        (r"המחלקים של $p$ הם $1,p$ בלבד, ו-$2\le p-1<p$, לכן $\phi(p)\nmid p$", 1), (r"מסקנה: $p=2$ יחיד", 1)),
    [r"לשכוח לבדוק את $p=2$ בנפרד (התנאי מתקיים שם).",
     r"לכתוב $\phi(p)=p$ במקום $p-1$ עבור ראשוני."],
    [num(r"מהו $\phi(11)$?", 10, r"$\phi(p)=p-1$ לראשוני $p$."),
     num("כמה מחלקים חיוביים יש לראשוני?", 2, r"$1$ ו-$p$ בלבד."),
     ch("באיזו שיטה משתמש הפתרון הרשמי?",
        [r"אינדוקציה על $p$", "בדיקת $p=2$ ופסילת כל ראשוני $p>2$ (חלוקה למקרים)", "שובך היונים"], 1,
        r"הפתרון בודק ישירות את $p=2$, ואז מראה ש-$p>2$ אינו מתאים."),
     bug("בהוכחה שורה אחת שגויה. מצאו אותה.",
         [r"עבור $p=2$: $\phi(2)=1$ ו-$1$ מחלק את $2$, ולכן $p=2$ מקיים את התנאי.",
          r"אם $p>2$ ראשוני, אז $\phi(p)=p+1\ge2$.",
          r"לראשוני $p$ יש רק המחלקים $1$ ו-$p$, ו-$2\le p-1<p$, ולכן $\phi(p)\nmid p$.",
          r"מסקנה: $p=2$ הוא הראשוני היחיד שמקיים $\phi(p)\mid p$."], 1,
         r"לראשוני $p$ מתקיים $\phi(p)=p-1$ ולא $p+1$.")])

add(1, "ג",
    rub(("הגדרת דרגה של צומת", 4), (r"הנחה בשלילה ש-$G$ הוא $r$-רגולרי עם $|V|=4k$ ו-$|E|=2q+1$", 1),
        (r"משפט הדרגות: $4k\cdot r=2(2q+1)$", 1), (r"חלוקה ב-$2$: $2kr=2q+1$", 1), (r"אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה", 1)),
    [r"לשכוח ש-$\sum\deg=2|E|$ (לא $|E|$).",
     r"לטעון שהסתירה נובעת מכך ש-$|E|$ אי-זוגי בלבד, בלי הקשר ל-$|V|\bmod4$."],
    [ch("באיזו שיטה משתמש הפתרון הרשמי?",
        [r"אינדוקציה על $|V|$", r"הנחה בשלילה ש-$G$ רגולרי וחישוב סכום הדרגות בשתי דרכים", "שובך היונים"], 1,
        r"מניחים $r$-רגולרי ומקבלים סתירת זוגיות."),
     num(r"אם $|V|=12$ והגרף $3$-רגולרי, מהו $\sum\deg\bmod4$?", 0, r"$12\cdot3=36$ מתחלק ב-$4$."),
     num(r"אם $|E|=7$, מהו $2|E|\bmod4$?", 2, r"$14\bmod4=2$."),
     order("סדרו את שלבי ההוכחה.",
           [r"נניח בשלילה ש-$G$ הוא $r$-רגולרי, $|V|=4k$ ו-$|E|=2q+1$.",
            r"לפי משפט הדרגות: $4k\cdot r=\sum\deg(v)=2|E|=2(2q+1)$.",
            r"נחלק ב-$2$: $2kr=2q+1$.",
            r"אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה, ולכן $G$ אינו רגולרי."],
           "כל שורה נובעת מהקודמת."),
     bug("בחישוב שורה אחת שגויה. מצאו אותה.",
         [r"נניח בשלילה ש-$G$ הוא $r$-רגולרי, $|V|=4k$ ו-$|E|=2q+1$.",
          r"לפי משפט הדרגות: $4k\cdot r=\sum\deg(v)=2|E|=2(2q+1)$.",
          r"נחלק ב-$2$: $kr=2q+1$.",
          r"אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה, ולכן $G$ אינו רגולרי."], 2,
         r"חלוקה של $4kr=2(2q+1)$ ב-$2$ נותנת $2kr=2q+1$.")])

add(2, "א",
    rub((r"הסכום הראשון: $\sum\binom nk2^{n-k}=3^n$", 2), (r"הסכום השני: $3^n\cdot\sum\binom nk3^k2^{n-k}=3^n\cdot5^n$", 3), (r"$f(n)=45^n$", 1),
        (r"$45^n\le1\cdot50^n$ לכל $n\ge0$, ולכן $f(n)=O(50^n)$", 3)),
    [r"לשכוח את הגורם $3^n$ שיוצא מהסכום השני.",
     r"להסיק $O(50^n)$ בלי להציג קבוע $c$ ו-$n_0$."],
    [ch(r"מהי הצורה הסגורה של $f(n)$?", [r"$25^n$", r"$45^n$", r"$90^n$", r"$30^n$"], 1,
        r"$f(n)=3^n\cdot3^n\cdot5^n=45^n$."),
     num(r"חשבו את $f(2)$ ישירות מהסכומים.", 2025, r"$45^2=2025$."),
     num(r"מהו המספר השלם החיובי הקטן ביותר $c$ שעבורו $45^n\le c\cdot50^n$ לכל $n\ge0$?", 1, r"$(45/50)^n\le1$.")])

add(2, "ב",
    rub((r"משוואה אופיינית $x^2-8x+16=0$ ושורש כפול $x=4$", 2), (r"פתרון הומוגני $C_1\cdot4^n+C_2\cdot n\cdot4^n$", 2), (r"פתרון פרטי $A=2$", 2),
        (r"קבועים $C_1=1,\ C_2=2$", 2), (r"$a_n=4^n+2n4^n+2$", 1)),
    [r"להציב תנאי התחלה לפני הוספת הפתרון הפרטי ולקבל קבועים שגויים.",
     r"לשכוח את הגורם $n$ בפתרון ההומוגני כשהשורש כפול."],
    [ch(r"מהם שורשי המשוואה האופיינית של $a_n=8a_{n-1}-16a_{n-2}$?",
        [r"$x=2$ שורש כפול", r"$x=4$ ו-$x=-4$", r"$x=4$ שורש כפול", r"$x=8$ ו-$x=16$"], 2, r"$(x-4)^2=0$."),
     num(r"מצאו קבוע $A$ כך ש-$a_n=A$ פתרון פרטי של $a_n=8a_{n-1}-16a_{n-2}+18$.", 2, r"$A=8A-16A+18$, כלומר $9A=18$."),
     num(r"מהו $C_1$?", 1, r"$a_0=C_1+2=3$."),
     num(r"מהו $C_2$?", 2, r"$a_1=4C_1+4C_2+2=14$, ולכן $C_2=2$."),
     num(r"חשבו את $a_2$ מהצורה המפורשת.", 82, r"$16+2\cdot2\cdot16+2=82$, וגם $8\cdot14-16\cdot3+18=82$.")])

add(2, "ג",
    rub((r"פיצול לשני מקרים לפי מספר ה-$d$ ($3$ או $4$)", 1), (r"מקרה $d=3$: $x_1+x_2+x_3=27$ והצבה, סכום $y$ הוא $12$", 2), (r"$D(3,12)=\binom{14}2=91$", 1),
        (r"מקרה $d=4$: סכום $y$ הוא $11$ ו-$D(3,11)=78$", 2), (r"סכום המקרים $169$", 1)),
    [r"«יותר מ-$5$» פירושו $x_1\ge6$ ו-«יותר מ-$4$» פירושו $x_3\ge5$.",
     r"לחבר את שני המקרים בלי להתאים את סכום המשוואה לכל מקרה."],
    [num(r"אם $d$ מופיעה בדיוק $3$ פעמים, כמה אותיות $a,b,c$ ביחד?", 27, r"$30-3=27$."),
     num(r"אחרי הצבת הגבולות התחתונים $6,4,5$: מהו סכום המשתנים החדשים (מקרה $d=3$)?", 12, r"$27-15=12$."),
     num("כמה מילים יש במקרה $d=3$?", 91, r"$D(3,12)=\binom{14}2=91$."),
     num("כמה מילים יש במקרה $d=4$?", 78, r"סכום ה-$y$ הוא $11$: $\binom{13}2=78$."),
     num("כמה מילים יש בסך הכול?", 169, "$91+78=169$.")])

add(3, "א",
    rub((r"התנאי $n+\binom n2=210$", 3), (r"פתרון: $n=20$", 3), (r"ב-$\{1,\dots,20\}$ יש $6$ כפולות של $3$ ו-$14$ שאינן", 2), (r"$\binom63\cdot\binom{14}2=1820$", 4)),
    [r"לשכוח שהתנאי כולל גם תתי-קבוצות בגודל $1$ (ולא רק $2$).",
     r"לספור $7$ כפולות של $3$ (הכפולה $21$ אינה ב-$A$)."],
    [num(r"מהו $n$? (נתון $n+\binom n2=210$)", 20, r"$n^2+n-420=0$, ולכן $n=20$."),
     num(r"כמה בחירות לשלושה מספרים שמתחלקים ב-$3$ מתוך $\{1,\dots,20\}$?", 20, r"יש $6$ כפולות של $3$, ו-$\binom63=20$."),
     num(r"כמה בחירות לשני מספרים שאינם מתחלקים ב-$3$?", 91, r"יש $14$ כאלה, ו-$\binom{14}2=91$."),
     num("כמה תתי-קבוצות מתאימות יש?", 1820, r"$20\cdot91=1820$.")])

add(3, "ב",
    rub((r"מספר הפונקציות הכולל $6^3=216$", 2), (r"פונקציות חד-חד-ערכיות: $P(6,3)=120$", 2), (r"מספר הפונקציות שאינן חד-חד-ערכיות $216-120=96$", 2)),
    [r"לחשב $\binom63=20$ במקום $P(6,3)$ (הסדר קובע בפונקציה).",
     r"לחשב $6\cdot5\cdot4$ ולהסיק שזו התשובה (זו כמות הפונקציות החד-חד-ערכיות)."],
    [num(r"כמה פונקציות $f:\{1,2,3\}\to\{1,\dots,6\}$ יש בסך הכול?", 216, r"$6^3=216$."),
     num("כמה מהן חד-חד-ערכיות?", 120, r"$P(6,3)=6\cdot5\cdot4=120$."),
     num("כמה אינן חד-חד-ערכיות?", 96, "$216-120=96$.")])

add(3, "ג",
    rub((r"$G=K_5\cup K_5\cup K_5$ ו-$\chi(G)=5$", 2), (r"$\chi(H)=3$ (משולש וצביעה לפי שארית)", 2), (r"$|E(H)|=3\cdot5\cdot5=75$", 1),
        (r"$K_3$ מושרה ב-$H$: צומת מכל קבוצה, $5^3=125$", 2)),
    [r"לספור את צלעות $H$ כ-$\binom{15}2=105$ ולשכוח לחסר את צלעות $G$.",
     r"לספור $K_3$ ב-$H$ עם שני צמתים מאותה קבוצה (אין ביניהם צלע ב-$H$)."],
    [ch(r"מהו הגרף $G$?", [r"$K_{15}$", r"$K_{5,5,5}$", r"$K_5\cup K_5\cup K_5$", r"$K_3\cup K_3\cup K_3$"], 2,
        r"שלוש קבוצות שארית (בנות חמישה צמתים כל אחת), וכל קבוצה היא קליקה."),
     num(r"מהו $\chi(G)$?", 5, r"ב-$G$ יש $K_5$, ולכן $\chi(G)\ge5$, וצביעה עם $5$ צבעים קיימת."),
     num(r"כמה צלעות יש ב-$H$?", 75, r"$\binom{15}2-3\binom52=105-30=75$, וגם $3\cdot5\cdot5=75$."),
     num(r"מהו $\chi(H)$?", 3, r"ב-$H$ יש $K_3$ ושלוש קבוצות בלתי תלויות."),
     num(r"כמה תתי-גרפים מושרים של $H$ איזומורפיים ל-$K_3$?", 125, r"צומת אחד מכל קבוצה: $5^3=125$.")])

add(4, "א",
    rub((r"א1: קיום מעגל Hamilton גורר שהצמתים מתחלפים בין $A$ ל-$B$", 2), (r"$k=2|A|$ זוגי, בסתירה ל-$|A|+|B|$ אי-זוגי", 2),
        (r"א2: גרף Euler רגולרי, ולכן $r=2q$", 2), (r"משפט הדרגות: $2k\cdot2q=2(2p+1)$", 1), (r"אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה", 2)),
    [r"לשכוח שבגרף דו-צדדי אין מעגלים אי-זוגיים, ולכן אורך מעגל Hamilton זוגי.",
     r"לא להשתמש בכך שדרגות גרף Euler זוגיות."],
    [ch("מה דינה של טענה א1?", ["הטענה נכונה", "הטענה אינה נכונה"], 0,
        r"מעגל Hamilton בגרף דו-צדדי הוא באורך זוגי, ולכן $|A|+|B|$ זוגי."),
     ch("מה דינה של טענה א2?", ["הטענה נכונה", "הטענה אינה נכונה"], 0,
        r"זוגיות הדרגה והזוגיות של $|V|$ גוררות ש-$|E|$ זוגי."),
     num(r"מהו אורך מעגל Hamilton בגרף דו-צדדי עם $|A|=|B|=4$?", 8, r"המעגל עובר בכל $8$ הצמתים."),
     order("סדרו את שלבי ההוכחה של א2.",
           [r"$G$ רגולרי וגם Euler, לכן כל דרגה היא זוגית $r=2q$; נניח $|V|=2k$ ו-$|E|=2p+1$.",
            r"לפי משפט הדרגות: $2k\cdot2q=2(2p+1)$.",
            r"נחלק ב-$2$: $2kq=2p+1$.",
            r"אגף שמאל זוגי ואגף ימין אי-זוגי: סתירה."],
           "כל שלב נשען על הקודם."),
     bug("בהוכחה של א1 שורה אחת שגויה. מצאו אותה.",
         [r"נניח בשלילה שקיים מעגל Hamilton $x_1,\dots,x_k$ ב-$G$, ולכן $k=|A|+|B|$.",
          r"$G$ דו-צדדי ולכן הצמתים לאורך המעגל מתחלפים בין $A$ ל-$B$; אם $x_1\in A$ אז $x_k\in B$.",
          r"לכן $k$ אי-זוגי.",
          r"זו סתירה לכך ש-$|A|+|B|$ אי-זוגי."], 2,
         r"החלפה בין שני צדדים וסגירה של המעגל נותנת $k=2|A|$, זוגי.")])

add(4, "ב",
    rub((r"ב1: מסלול Hamilton הוא עץ פורש בעל $2$ עלים", 4), (r"ב2: ב-$\overline{G_1}$ שני צמתים בדרגה אי-זוגית וקשיר: מסלול Euler ולא מעגל", 4),
        (r"ב3: $K_3$ ו-$3$-צביעה, $\chi(G)=3$", 4), (r"ב4: $K_5$, $C_5$ ו-$C_4$ מושרים במשלים", 4)),
    [r"לבלבל בין מסלול Euler (שני צמתים בדרגה אי-זוגית) לבין מעגל Euler (אין כאלה).",
     r"לחשב את הדרגות במשלים של $G$ במקום במשלים של $G-(v_1,v_5)$."],
    [ch(r"האם ב-$G$ קיים עץ פורש בעל $2$ עלים?", ["כן", "לא"], 0, r"מסלול Hamilton $v_1,\dots,v_{12}$ הוא עץ פורש בעל שני עלים."),
     num(r"מהי הדרגה של $v_1$ במשלים של $G-(v_1,v_5)$?", 9, r"ב-$G$ הדרגה $3$, אחרי הסרת הצלע $2$, ובמשלים (על $12$ צמתים) $11-2=9$."),
     ch(r"מה קיים במשלים של $G-(v_1,v_5)$?",
        [r"רק מסלול Euler", r"רק מעגל Euler", r"גם מסלול Euler וגם מעגל Euler", r"אף אחד מהם"], 0,
        r"הוא קשיר ובדיוק שני צמתים ($v_1,v_5$) בדרגה אי-זוגית."),
     num(r"מהו $\chi(G)$?", 3, r"ב-$G$ יש משולש, וקיימת צביעה חוקית ב-$3$ צבעים."),
     ch(r"אילו מבין $C_4,\ C_5,\ K_5$ קיימים כתתי-גרפים מושרים במשלים של $G$?",
        [r"רק $K_5$", r"$K_5$ ו-$C_5$ בלבד", r"כולם", r"אף אחד"], 2,
        r"$K_5$ על $v_2,v_4,v_6,v_9,v_{11}$, $C_5$ מושרה (ה-$C_5$ איזומורפי למשלים שלו), ו-$C_4$ ממשלים של $2K_2$ מושרה.")])


def apply_steps(qs):
    seen = set()
    for q in qs:
        s = STEPS.get((q["num"], q.get("part")))
        if not s:
            continue
        seen.add((q["num"], q.get("part")))
        assert sum(r["points"] for r in s["rubric"]) == q["points"], (q["num"], q.get("part"), "rubric sum")
        assert 2 <= len(s["steps"]) <= 5
        q["rubric"], q["rubricSource"] = s["rubric"], "ai-draft"
        q["pitfalls"] = s["pitfalls"]
        q["steps"], q["stepsSource"] = s["steps"], "ai-draft"
    assert seen == set(STEPS), set(STEPS) - seen


apply_steps(questions)


exam = {
    "examCode": "23B-B",
    "examLabel": "אביב 2023, מועד ב'",
    "year": 2023,
    "examDate": "16.07.2023",
    "sourceFile": "23B-B exam (typed, pp.2-7)",
    "solutionFile": "23B-B handwritten solution (same PDF)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 4 סעיף ב)",
               "image": "images/exams/23B-B-Q4b.png", "caption": "הגרף G על 12 צמתים"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
