# -*- coding: utf-8 -*-
"""Generator for tools/raw/22B-A.json -- discrete-math-2, spring 2022, moed A (06.06.2022).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_22B-A.py

Source: 22B-A, 9 pp (p.1 cover/instructions, pp.2-9 typed questions with handwritten ink solutions in blue/green/red,
4 questions x 25 pts). Solutions are handwritten and were read by vision; the Hebrew prose is re-typeset from the ink,
formulas and numbers as written.
Structure: Q1 = three "define the term, then answer" parts (4+5, 4+4, 3+5 = 9+8+8). Q2 a (3+3+3), b (4+6), c (6).
Q3 a (6+6), b (7), c (2+2+2, three claims). Q4 a (3+5), b (4+5+4+4, four questions on one figure).
Parts with numbered sub-questions are ONE item.

Transcription notes
- Q1.a: the ink for the definition of "arrangement" reads "as in the lecture"; no text.
- Q3.c.2 (p.7): the question prints "isogi" (a spelling slip) for "odd"; typeset as the word it means.
- Q3.c.2: the ink gives two counterexamples in two colours (any tree with 3 edges, and a 6-vertex graph with 15
  spanning trees); both are kept. The second graph is read from the red sketch: two vertices joined by three paths of
  lengths 3, 3 and 1 (the ink count 6 + 3*3 = 15 matches).
- Q4.a (p.8): the ink bound reads 2 + (n-1)/2 + (n-1)/2 = 2n; it equals n+1 (the contradiction n >= n+1 stands).
  Shipped with the standing typo ruling: solutionSource "solved", official false, fix named in the solution.
- Q4.b (p.9): the figure was rendered from the PDF with the solver's red labels and green overlay removed (the red
  labels are the colouring of part 3). Edges read from the figure (cubic, 18 edges), the same graph as in 23B-B:
  v1v2 v2v3 v3v4 v4v5 v5v6 v6v7 v7v8 v8v9 v9v1 v1v5 v2v7 v3v11 v4v8 v6v12 v9v10 v10v11 v10v12 v11v12.
- Q4.b.4: the five K5 labels in the ink are v9,v2,v6,v11 and an ambiguous one; K5 is on {v2,v4,v6,v9,v11}
  (an independent set of G, checked by script).

Rubric, pitfalls and steps: ai-draft, authored in the STEPS block below; every value re-derived in the verify script.

Checks (tools/verify/22B-A/verify.py, brute force + sympy + networkx):
Q1a 360, Q1b only n=1 among odd n < 200000, Q1c trees n=3..11 odd (297 trees), Q2a divisor counts n=1..7, Q2b closed form
n<40 and a_n <= 15 n 3^n, Q2c 21, Q3a n=16 and 1568, Q3b 93, Q3c.1 all graphs n<=7, Q3c.2 theta graph 15 spanning trees and
bipartite, Q3c.3 all connected graphs n<=5, Q4a all graphs n<=7 (179 graphs), Q4b Hamilton cycle in G+v4v7, complement
8-regular and Euler, 3-colouring, K5 / C4 / P4 / C5.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22B-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    Q(1, "א", "computation", "function_counting",
      "**א1.** (4 נק') המונח: חליפה.\n\n"
      r"**א2.** (5 נק') שאלה: כמה פונקציות חד-חד-ערכיות $f:\{1,2,3,4,5,6\}\to\{1,2,3,4,5,6,7,8\}$ מקיימות התנאי $f(\{1,2,3\})=\{5,6,7\}$?",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** יש $3!$ אפשרויות לבחור את $f$ על $\{1,2,3\}$ (התאמה חד-חד-ערכית על $\{5,6,7\}$), ו-$f(4),f(5),f(6)$ היא חליפה בגודל 3 מתוך $\{1,2,3,4,8\}$ ולכן יש $P(5,3)=60$ אופציות.

מסקנה: יש $3!\cdot60=360$ פונקציות.""",
      points=9),
    Q(1, "ב", "proof", "euler_phi",
      r"**ב1.** (4 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      r"**ב2.** (4 נק') שאלה: מצאו כל $n\in\mathbb{N}-\{0\}$ אי-זוגי עבורו $\phi(n)\mid n$.",
      r"""**ב1. הגדרה:** הפונקציה $\phi$ של Euler היא $\phi:\mathbb{N}-\{0\}\to\mathbb{N}-\{0\}$ כך ש: $\phi(n)=\left|\{m:m\in\mathbb{N}\wedge1\le m\le n\wedge\gcd(m,n)=1\}\right|$ לכל $n\in\mathbb{N}-\{0\}$.

**ב2.** $n=1\Leftarrow\phi(1)=1$, וגם $\phi(1)\mid1$.

$n\ge3$ אי-זוגי $\Leftarrow$ קיים מספר ראשוני אי-זוגי $p$ כך ש: $p\mid n$, ולכן $n=p^\alpha\cdot m$ כאשר $1\le\alpha\in\mathbb{N}$ וגם $\gcd(p^\alpha,m)=1$. אז

$$\phi(n)=\phi(p^\alpha)\,\phi(m)=p^\alpha\left(1-\tfrac1p\right)\phi(m)=p^{\alpha-1}(p-1)\cdot\phi(m)$$

כאשר $p-1$ הוא מספר זוגי (כי $p$ אי-זוגי) $\Leftarrow\phi(n)$ הוא מספר זוגי. לכן, כל $n$ אי-זוגי $\ge3$ מקיים $\phi(n)\nmid n$ ($n$ אי-זוגי ו-$\phi(n)$ זוגי).

(לפי ההרצאה: $\phi(n)$ זוגי לכל $n\in\mathbb{N}$, $3\le n$.)

מסקנה: $n=1$ הוא הפתרון היחיד.""",
      points=8),
    Q(1, "ג", "proof", "trees",
      "**ג1.** (3 נק') המונח: דרגה של צומת בגרף לא מכוון.\n\n"
      r"**ג2.** (5 נק') שאלה: יהי $T=(V,E)$ עץ כך ש: $1<n=|V|$ ו: $|E|\pmod2=0$. הראו ש-$T$ קיים צומת הפרדה (אחד לפחות) שבדרגה זוגית.",
      r"""**ג1. הגדרה:** לפי ההרצאה.

**ג2.** $T$ עץ $\Rightarrow|E|=|V|-1$ וגם $|E|$ זוגי $\Rightarrow|V|$ אי-זוגי!

אז ב-$T$ קיים צומת $v$, אחד לפחות, כך ש: $\deg(v)$ זוגי $\ne0$ (כי בכל גרף יש מספר זוגי של צמתים בעלי דרגה אי-זוגית).

לכן $v\ne$ עלה $\Rightarrow$ קיימים $x,y\in N(v)$.

ב-$T-v$ אין מסלול מ-$x$ ל-$y$, כי ב-$T$ (שהוא עץ) המסלול היחיד בין $x$ ל-$y$ הוא $x,v,y$ ועובר דרך $v$.

מסקנה: $v$ צומת הפרדה, וגם $\deg(v)$ מספר זוגי.""",
      points=8),

    Q(2, "א", "computation", "divisibility_primes",
      r"(3+3+3 נק') חשבו את $f(n)=\sum_{k=0}^{n}\binom nk\cdot2^{n-k}\bullet\sum_{k=0}^{n}\binom nk\cdot3^{n+k}\cdot5^{n-k}$. כמה מחלקים זוגיים יש ל-$f(n)$?",
      r"""לפי הבינום של Newton:

$$f(n)=\left(\sum_{k=0}^{n}\binom nk1^k\cdot2^{n-k}\right)\cdot3^n\cdot\sum_{k=0}^{n}\binom nk3^k\cdot5^{n-k}=(1+2)^n\cdot3^n\cdot(3+5)^n=3^n\cdot3^n\cdot8^n=3^{2n}\cdot2^{3n}$$

$d\mid f(n)$ וגם $d$ זוגי $\iff d=2^\alpha\cdot3^\beta$ כאשר $1\le\alpha\le3n$ וגם $0\le\beta\le2n$.

מסקנה: ל-$f(n)$ יש $3n(2n+1)$ מחלקים זוגיים.""",
      points=9),
    Q(2, "ב", "computation", "recurrences",
      r"(4+6 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=10,\ a_1=30$ וגם $a_n=4a_{n-1}-4a_{n-2}$ עבור $n>1$. הראו ש: $a_n=O(n\bullet3^n)$.",
      r"""המשוואה האופיינית היא: $(r-2)^2=0\iff r^2=4r-4$, $r_1=r_2=2\Rightarrow a_n=C_1\cdot2^n+C_2\cdot n\cdot2^n$.

$$\begin{cases}a_0=10\\a_1=30\end{cases}\iff\begin{cases}C_1=10\\2C_1+2C_2=30\end{cases}\Rightarrow\begin{cases}C_1=10\\C_2=5\end{cases}\Rightarrow a_n=10\cdot2^n+5n\cdot2^n$$

עבור $n\ge1$:

$$a_n=10\cdot2^n+5\cdot n\cdot2^n\le10n\cdot2^n+5\cdot n\cdot2^n=15\cdot n\cdot2^n\le15\cdot n\cdot3^n$$

$\Rightarrow a_n\le15\cdot n\cdot3^n,\ \forall n\in\mathbb{N}-\{0\}\Rightarrow a_n=O(n\cdot3^n)$.""",
      points=10),
    Q(2, "ג", "computation", "selections_repetition",
      r"(6 נק') תהי $A=\{a,b,c\}$. כמה מילים באורך 20 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: אות $a$ מופיעה לפחות 5 פעמים, אות $b$ מופיעה לפחות 4 פעמים ואות $c$ מופיעה לפחות 6 פעמים.",
      r"""בתרגיל: נסמן $x_1$ = מספר ההופעות של $a$, $x_2$ = מספר ההופעות של $b$, $x_3$ = מספר ההופעות של $c$, כאשר $5\le x_1\in\mathbb{Z}$, $4\le x_2\in\mathbb{Z}$, $6\le x_3\in\mathbb{Z}$.

אז מספר המילים, בלי חשיבות לסדר, שווה למספר הפתרונות של

$$\begin{cases}x_1+x_2+x_3=20\\x_1,x_2,x_3\in\mathbb{Z}\\5\le x_1,\ 4\le x_2,\ 6\le x_3\end{cases}$$

נסמן $y_1=x_1-5$, $y_2=x_2-4$, $y_3=x_3-6$, כלומר $x_1=y_1+5$, $x_2=y_2+4$, $x_3=y_3+6$, $y_1,y_2,y_3\in\mathbb{Z}$, $y_1,y_2,y_3\ge0$.

$(y_1+5)+(y_2+4)+(y_3+6)=20\iff y_1+y_2+y_3=5$ עם $y_1,y_2,y_3\in\mathbb{N}$.

מספר הפתרונות שווה ל: $D(3,5)=\binom72=\frac{7\cdot6}{2}=21$.""",
      points=6),

    Q(3, "א", "computation", "combinations_subsets",
      r"(6+6 נק') תהי הקבוצה $A=\{1,2,3,\dots,n\}$, כאשר $n\in\mathbb{N}$. ידוע שלקבוצה $A$ יש 120 תתי-קבוצות בגודל $n-2$. חשבו את מספר תתי-הקבוצות בגודל 5 של $A$ המכילות 2 מספרים זוגיים וגם 3 מספרים אי-זוגיים.",
      r"""בתרגיל: $\frac{n(n-1)}{2}=120\iff\binom n2=120\iff\binom n{n-2}=120$.

$n^2-n-240=0\Rightarrow n_{1,2}=\frac{1\pm\sqrt{1+960}}{2}=\frac{1\pm31}{2}=\begin{cases}16\\-15\end{cases}$ ולכן $n=16$ ($-15$ נפסל).

לכן $A=\{1,2,3,\dots,16\}$.

כל $B\subseteq A$ המקיימת את התנאים היא $B=C\cup D$, כאשר $C\subseteq\{2,4,6,\dots,16\}$ וגם $|C|=2$ ולכן יש $\binom82=28$ תתי-קבוצות $C$, וגם $D\subseteq\{1,3,5,\dots,15\}$ וגם $|D|=3$ ולכן יש $\binom83=56$ תתי-קבוצות $D$.

מסקנה: יש $1568=28\cdot56$ תתי-קבוצות $B$.""",
      points=12),
    Q(3, "ב", "computation", "function_counting",
      r"(7 נק') כמה פונקציות $f:\{1,2,3,4,5\}\to\{1,2,3\}$ הן **לא** על?",
      r"""מספר הפונקציות $f:\{1,\dots,5\}\to\{1,2,3\}$ הוא $243=3^5$.

מספר הפונקציות על שווה ל:

$$3^5-\binom31(3-1)^5+\binom32(3-2)^5=243-3\cdot2^5+3=150$$

אז מספר הפונקציות שאינן על שווה ל: $243-243+3\cdot32-3=93$.

מסקנה: התשובה היא $93$.""",
      points=7),
    Q(3, "ג", "proof", "trees",
      "(2+2+2 נק') הוכיחו או הפריכו:\n\n"
      r"**ג1.** אם $G$ הוא גרף לא מכוון ואיזומורפי למשלים שלו, אז $G$ הוא קשיר." "\n\n"
      r"**ג2.** אם בגרף לא מכוון $G$ יש צלעות וגם יש מספר אי-זוגי של עצים פורשים, אז $G$ אינו דו-צדדי." "\n\n"
      r"**ג3.** אם $T_1=(V,E_1)$, $T_2=(V,E_2)$ הם עצים פורשים **שונים** של $G=(V,E)$, אז $H=(V,E_1\cup E_2)$ הוא גרף פורש של $G$ ובו $H$ קיים מעגל אחד לפחות.",
      r"""**ג1.** טענה נכונה. מאחר ש-$G$ לא קשיר, אז $\overline G$ קשיר, ולכן $G$ ו-$\overline G$ הם לא איזומורפיים, סתירה לנתון.

**ג2.** טענה לא נכונה. דוגמה נגדית: כל עץ בעל 3 צלעות הוא דו-צדדי ויש בו רק עץ פורש אחד (1: מספר אי-זוגי).

עוד דוגמה נגדית: $G$ הוא גרף בעל 6 צמתים ו-7 צלעות, שבו שני צמתים מחוברים בשלושה מסלולים באורכים 3, 3 ו-1 (כל המעגלים בו זוגיים, ולכן הוא דו-צדדי). יש בו $6+3\cdot3=15$ עצים פורשים, מספר אי-זוגי.

**ג3.** טענה נכונה. $T_1\ne T_2\Rightarrow$ קיימת צלע $e_2\in E_2-E_1$.

אז ב-$T_1+e_2=(V,E_1\cup\{e_2\})$ יש מעגל, וגם $E_1\cup\{e_2\}\subseteq E_1\cup E_2$, ולכן גם ב-$H$ יש מעגל. בנוסף $E_1\cup E_2\subseteq E$, ולכן $H$ גרף פורש של $G$.

עוד פתרון: $T_1$ הוא עץ פורש של $H$, אז $H$ קשיר, וגם $|E_1\cup E_2|>|E_1|=|V|-1$. לכן $H$ אינו עץ, ויש ב-$H$ מעגל.""",
      points=6),

    Q(4, "א", "computation", "graph_connectivity",
      r"(3+5 נק') יהי $G=(V,E)$ גרף לא מכוון בעל $3<n=|V|$ צמתים כך ש: $G\ne K_n$ וגם $\deg(v)\ge(n-1)/2$ לכל $v\in V$. הראו ש: $G$ קשיר. מהו $\operatorname{diam}(G)$?",
      r"""הפתרון הרשמי עם תיקון: בכתב היד מופיע $2+\frac{n-1}{2}+\frac{n-1}{2}=2n$, אך הערך הוא $n+1$ (והסתירה נשארת: $n\ge n+1$).

**$G$ קשיר.** נבנה גרף חדש:

$H=(V\cup\{x\},\ E\cup\{(x,v):\forall v\in V\})$, ל-$H$ יש $n+1$ צמתים. לפי משפט Dirac:

$\deg_H(x)=n\ge\frac{n+1}{2}$ (כי $3<n$)

$\forall v\in V\Rightarrow\deg_H(v)=1+\deg_G(v)\ge1+\frac{n-1}{2}=\frac{n+1}{2}$

ולכן $H$ הוא גרף Hamilton. מכאן ש-$G$ מכיל מסלול Hamilton (הסרת $x$ ממעגל Hamilton של $H$), ולכן $G$ קשיר.

**הקוטר.** $G\ne K_n$ ולכן $\operatorname{diam}(G)\ge2$.

נניח בשלילה ש-$\operatorname{diam}(G)\ge3$. אז קיימים $a,b\in V$ כך ש: $\operatorname{dist}(a,b)\ge3$, ולכן $N(a)\cap N(b)=\emptyset$. אם כך:

$$n=|V|\ge|\{a,b\}\cup N(a)\cup N(b)|=|\{a,b\}|+|N(a)|+|N(b)|=2+\deg(a)+\deg(b)\ge2+\frac{n-1}2+\frac{n-1}2=n+1$$

(זוהי הנוסחה שמופיעה בכתב היד כ-$2n$.) סתירה. לכן $\operatorname{diam}(G)\le2$.

מסקנה: $\operatorname{diam}(G)=2$.""",
      solutionSource="solved", official=False, confidence="med", points=8),
    Q(4, "ב", "computation", "euler_hamilton",
      r"(4+5+4+4 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ב1.** האם לגרף $G+(v_4,v_7)$ יש גרף פורש איזומורפי ל-$C_{12}$?" "\n\n"
      r"**ב2.** האם המשלים של $G$ הוא גרף Euler?" "\n\n"
      r"**ב3.** חשבו את $\chi(G)$." "\n\n"
      r"**ב4.** האם במשלים של $G$ קיימים $P_4,\ C_4,\ C_5,\ K_5$ כתתי-גרפים מושרים?",
      r"""**ב1.** כן. ב-$G+(v_4,v_7)$ יש מעגל $C_{12}$: $v_4,v_7,v_8,v_9,v_1,v_2,v_3,v_{11},v_{10},v_{12},v_6,v_5,v_4$.

**ב2.** כן. $\overline G$ הוא 8-רגולרי: $\frac{12}{2}\le8$, לכן $\overline G$ גרף Hamilton (לפי משפט Dirac), ובפרט קשיר. $G$ הוא 3-רגולרי, ולכן כל הדרגות ב-$\overline G$ הן $11-3=8$, זוגיות. לכן $\overline G$ קשיר וכל דרגותיו זוגיות, כלומר $\overline G$ גרף Euler.

**ב3.** ב-$G$ יש מעגל אי-זוגי $C$ ($C_3$ או $C_5$), ולכן $3=\chi(C)\le\chi(G)$. ב-$G$ קיימת צביעה חוקית ב-3 צבעים: צבע 1 ל-$v_2,v_4,v_6,v_9,v_{11}$, צבע 2 ל-$v_1,v_3,v_7,v_{10}$ וצבע 3 ל-$v_5,v_8,v_{12}$. לכן $\chi(G)\le3$.

מסקנה: $\chi(G)=3$.

**ב4.** ב-$\overline G$ קיימים:

$K_5$ על הצמתים $v_2,v_4,v_6,v_9,v_{11}$ (אין ביניהם צלעות ב-$G$).

$C_4$ על $v_1,v_4,v_2,v_8$: ב-$G$ יש $2K_2$ מושרה ($\{v_1,v_2\}$ ו-$\{v_4,v_8\}$).

$P_4$: ב-$G$ יש $P_4$ מושרה על $v_9,v_1,v_2,v_3$, ו-$\overline{P_4}\cong P_4$ ולכן יש $P_4$ גם ב-$\overline G$.

$C_5$: ב-$G$ יש $C_5$ מושרה על $v_4,v_5,v_6,v_7,v_8$, ו-$\overline{C_5}\cong C_5$ ולכן יש $C_5$ גם ב-$\overline G$.

מסקנה: כולם קיימים.""",
      points=17, contextId="c1"),
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
    rub(("הגדרת חליפה לפי ההרצאה", 4), (r"$f$ על $\{1,2,3\}$ היא התאמה חד-חד-ערכית על $\{5,6,7\}$: $3!=6$ אפשרויות", 2),
        (r"$(f(4),f(5),f(6))$ חליפה של $3$ איברים מתוך $\{1,2,3,4,8\}$: $P(5,3)=60$", 2), (r"כלל המכפלה: $6\cdot60=360$", 1)),
    [r"לשכוח שהתמונה של $\{1,2,3\}$ היא בדיוק $\{5,6,7\}$ ולכן הסדר בתוכה משנה ($3!$).",
     r"לבחור את ערכי $f(4),f(5),f(6)$ מתוך $\{1,\dots,8\}$ במקום מתוך חמשת האיברים שנותרו."],
    [num(r"כמה אפשרויות יש ל-$(f(1),f(2),f(3))$ כך שהתמונה היא בדיוק $\{5,6,7\}$?", 6, r"$3!=6$."),
     num(r"כמה איברים נותרו בטווח עבור $f(4),f(5),f(6)$ (הפונקציה חד-חד-ערכית)?", 5, r"$\{1,2,3,4,8\}$."),
     num(r"כמה אפשרויות יש ל-$(f(4),f(5),f(6))$?", 60, r"$P(5,3)=5\cdot4\cdot3=60$."),
     num("כמה פונקציות מתאימות יש?", 360, r"$6\cdot60=360$.")])

add(1, "ב",
    rub(("הגדרת הפונקציה $\\phi$ של Euler", 4), (r"עבור $n=1$: $\phi(1)=1\mid1$", 1), (r"$n\ge3$ אי-זוגי: קיים ראשוני אי-זוגי $p\mid n$ ו-$\phi(n)=p^{\alpha-1}(p-1)\phi(m)$ זוגי", 2),
        (r"$n$ אי-זוגי ו-$\phi(n)$ זוגי, ולכן $\phi(n)\nmid n$; הפתרון היחיד $n=1$", 1)),
    [r"לשכוח את המקרה $n=1$, שבו התנאי מתקיים.",
     r"להסיק ש-$\phi(n)$ אי-זוגי כי $n$ אי-זוגי (הפונקציה $\phi$ זוגית לכל $n\ge3$)."],
    [num(r"מהו $\phi(45)$?", 24, r"$45=3^2\cdot5$ ו-$\phi(45)=6\cdot4=24$, זוגי."),
     num(r"כמה מספרים אי-זוגיים $n\le100000$ מקיימים $\phi(n)\mid n$?", 1, r"רק $n=1$."),
     ch("באיזו שיטה משתמש הפתרון הרשמי?",
        [r"אינדוקציה על $n$", r"בדיקת $n=1$, ולכל $n$ אי-זוגי $\ge3$ הצגת $\phi(n)$ כמספר זוגי ו-$n$ אי-זוגי", "שובך היונים"], 1,
        r"הפתרון מפרק את $n$ ומראה ש-$\phi(n)$ זוגי."),
     bug("בהוכחה שורה אחת שגויה. מצאו אותה.",
         [r"אם $n\ge3$ אי-זוגי, קיים ראשוני אי-זוגי $p\mid n$, ו-$n=p^\alpha\cdot m$ עם $\gcd(p^\alpha,m)=1$.",
          r"$\phi(n)=p^{\alpha-1}(p-1)\cdot\phi(m)$, ו-$p-1$ אי-זוגי.",
          r"לכן $\phi(n)$ זוגי, בעוד ש-$n$ אי-זוגי.",
          r"לכן $\phi(n)\nmid n$, והפתרון היחיד הוא $n=1$."], 1,
         r"$p$ אי-זוגי ולכן $p-1$ זוגי.")])

add(1, "ג",
    rub(("הגדרת דרגה של צומת", 3), (r"בעץ $|E|=|V|-1$, ולכן $|V|$ אי-זוגי", 1), (r"מספר הצמתים בדרגה אי-זוגית זוגי, ולכן קיים $v$ בדרגה זוגית (שונה מ-$0$)", 1),
        (r"$v$ אינו עלה, ולכן יש לו שכנים $x,y$", 1), (r"המסלול היחיד בין $x$ ל-$y$ עובר דרך $v$, ולכן $v$ צומת הפרדה", 2)),
    [r"לשכוח שהעץ קשיר ולכן הדרגה הזוגית של $v$ אינה $0$.",
     r"לחשוב שכל צומת בדרגה זוגית הוא עלה (עלה הוא בדרגה $1$)."],
    [num(r"אם בעץ $|E|=6$, כמה צמתים יש?", 7, r"$|V|=|E|+1=7$."),
     ch("מדוע קיים בעץ צומת בדרגה זוגית?",
        [r"כי בכל גרף מספר הצמתים בדרגה אי-זוגית זוגי, ו-$|V|$ אי-זוגי", r"כי סכום הדרגות הוא $2|E|$ ולכן כל הדרגות זוגיות", r"כי כל עץ שמספר צלעותיו זוגי הוא מסלול"], 0,
        r"האפשרות השנייה שגויה (לעלים דרגה $1$); האפשרות השלישית שגויה (הכוכב $K_{1,4}$ אינו מסלול)."),
     order("סדרו את שלבי ההוכחה.",
           [r"בעץ $|E|=|V|-1$ ו-$|E|$ זוגי, ולכן $|V|$ אי-זוגי.",
            r"מספר הצמתים בדרגה אי-זוגית זוגי ו-$|V|$ אי-זוגי, ולכן קיים צומת $v$ בדרגה זוגית, והיא גדולה מ-$0$.",
            r"$v$ אינו עלה, ולכן יש לו שני שכנים $x,y$.",
            r"המסלול היחיד בין $x$ ל-$y$ ב-$T$ הוא $x,v,y$, ולכן ב-$T-v$ אין מסלול ביניהם ו-$v$ צומת הפרדה."],
           "כל שלב נשען על הקודם."),
     bug("בהוכחה שורה אחת שגויה. מצאו אותה.",
         [r"בעץ $|E|=|V|-1$ ו-$|E|$ זוגי, ולכן $|V|$ אי-זוגי.",
          r"מספר הצמתים בדרגה אי-זוגית זוגי ו-$|V|$ אי-זוגי, ולכן קיים צומת $v$ בדרגה זוגית, והיא גדולה מ-$0$.",
          r"$v$ אינו עלה, ולכן יש לו שני שכנים $x,y$.",
          r"המסלול היחיד בין $x$ ל-$y$ ב-$T$ אינו עובר דרך $v$, ולכן ב-$T-v$ יש מסלול ביניהם."], 3,
         r"בעץ יש מסלול יחיד בין $x$ ל-$y$, והוא $x,v,y$; לכן $T-v$ מנתק אותם.")])

add(2, "א",
    rub(("הסכום הראשון: $\\sum\\binom nk2^{n-k}=3^n$", 2), (r"הסכום השני: $3^n\cdot8^n$", 3), (r"$f(n)=3^{2n}\cdot2^{3n}$", 1),
        (r"מחלק זוגי $2^\alpha3^\beta$ עם $1\le\alpha\le3n$ ו-$0\le\beta\le2n$", 2), (r"מספר המחלקים הזוגיים $3n(2n+1)$", 1)),
    [r"לספור גם $\alpha=0$ כשמחפשים מחלקים **זוגיים**.",
     r"לטעות בסכום השני ולשכוח את הגורם $3^n$ שיוצא החוצה."],
    [ch(r"מהי הצורה הסגורה של $f(n)$?",
        [r"$3^{n}\cdot2^{3n}$", r"$3^{2n}\cdot2^{3n}$", r"$3^{2n}\cdot2^{2n}$", r"$3^{3n}\cdot2^{3n}$"], 1,
        r"$f(n)=3^n\cdot3^n\cdot8^n$."),
     num(r"עבור $n=2$: $f(2)=2^6\cdot3^4$. כמה ערכים אפשריים יש לחזקת $2$ במחלק זוגי?", 6, r"$\alpha\in\{1,\dots,6\}$."),
     num(r"עבור $n=2$: כמה ערכים אפשריים יש לחזקת $3$?", 5, r"$\beta\in\{0,\dots,4\}$."),
     num(r"עבור $n=2$: כמה מחלקים זוגיים יש ל-$f(2)$?", 30, r"$3n(2n+1)=6\cdot5=30$.")])

add(2, "ב",
    rub(("משוואה אופיינית $(r-2)^2=0$, שורש כפול", 1), (r"צורה כללית $C_1\cdot2^n+C_2\cdot n\cdot2^n$", 1), (r"קבועים $C_1=10,\ C_2=5$", 2),
        (r"צורה מפורשת $a_n=10\cdot2^n+5n2^n$", 1), (r"$10\cdot2^n\le10n\cdot2^n$ לכל $n\ge1$", 2), (r"$a_n\le15n\cdot2^n\le15n\cdot3^n$, ולכן $O(n\cdot3^n)$", 3)),
    [r"לשכוח שהחסם $a_n\le15n2^n$ נכון רק מ-$n\ge1$ ($n_0=1$).",
     r"לחשוב שהחסם $O(n\cdot3^n)$ הדוק, בעוד ש-$3^n$ גדול בהרבה מ-$2^n$."],
    [ch(r"מהם שורשי המשוואה האופיינית של $a_n=4a_{n-1}-4a_{n-2}$?",
        [r"$r=2$ ו-$r=-2$", r"$r=2$ שורש כפול", r"$r=4$ ו-$r=0$", r"$r=1$ ו-$r=4$"], 1, r"$(r-2)^2=0$."),
     num(r"מהו $C_1$?", 10, r"$a_0=C_1=10$."),
     num(r"מהו $C_2$?", 5, r"$2C_1+2C_2=30$, ולכן $C_2=5$."),
     num(r"חשבו את $a_3$ מהצורה המפורשת.", 200, r"$10\cdot8+5\cdot3\cdot8=200$, וגם $4\cdot80-4\cdot30=200$."),
     num(r"מתקבל החסם $a_n\le c\cdot n\cdot2^n$ לכל $n\ge1$. מהו $c$ בפתרון?", 15, r"$10\cdot2^n\le10n2^n$, ולכן $a_n\le15n2^n$.")])

add(2, "ג",
    rub((r"הגדרת $x_1\ge5,\ x_2\ge4,\ x_3\ge6$ עם $x_1+x_2+x_3=20$", 1), (r"הצבת $y_1=x_1-5,\ y_2=x_2-4,\ y_3=x_3-6$", 2), (r"המשוואה $y_1+y_2+y_3=5$", 1),
        (r"$D(3,5)=\binom72=21$", 2)),
    [r"לחשב $D(3,20)$ ולהתעלם מהגבולות התחתונים.",
     r"לחסר גבולות תחתונים שגויים בהצבה."],
    [num("מהו סכום הגבולות התחתונים?", 15, "$5+4+6=15$."),
     num(r"מהו הסכום $y_1+y_2+y_3$ לאחר ההצבה?", 5, r"$20-15=5$."),
     num("כמה מילים יש?", 21, r"$D(3,5)=\binom72=21$.")])

add(3, "א",
    rub((r"$\binom n{n-2}=\binom n2=120$", 3), (r"$n^2-n-240=0$, $n=16$ (ו-$-15$ נפסל)", 3), (r"$8$ זוגיים ו-$8$ אי-זוגיים ב-$\{1,\dots,16\}$", 2),
        (r"$\binom82\cdot\binom83=28\cdot56=1568$", 4)),
    [r"לשכוח לפסול את השורש השלילי $n=-15$.",
     r"לספור $\binom{16}5$ (בלי לדרוש את חלוקת הזוגיים והאי-זוגיים)."],
    [num(r"מהו $n$? (נתון $\binom n2=120$)", 16, r"$n^2-n-240=0$, ולכן $n=16$."),
     num(r"כמה בחירות יש לשני המספרים הזוגיים מתוך $8$?", 28, r"$\binom82=28$."),
     num(r"כמה בחירות יש לשלושת האי-זוגיים מתוך $8$?", 56, r"$\binom83=56$."),
     num("כמה תתי-קבוצות מתאימות יש?", 1568, r"$28\cdot56=1568$.")])

add(3, "ב",
    rub((r"מספר הפונקציות הכולל $3^5=243$", 2), (r"הכלה-הוצאה לפונקציות על: $3^5-3\cdot2^5+3\cdot1^5=150$", 3), (r"מספר הפונקציות שאינן על $243-150=93$", 2)),
    [r"לשכוח את האיבר האחרון $+3\cdot1^5$ בהכלה-הוצאה.",
     r"לחשב את מספר הפונקציות על ולהגיש אותו כתשובה (השאלה היא על אלה שאינן על)."],
    [num(r"כמה פונקציות $f:\{1,\dots,5\}\to\{1,2,3\}$ יש בסך הכול?", 243, r"$3^5=243$."),
     num(r"בהכלה-הוצאה: מה הערך של $\binom31\cdot2^5$?", 96, r"$3\cdot32=96$."),
     num("כמה פונקציות על יש?", 150, r"$243-96+3=150$."),
     num("כמה פונקציות אינן על?", 93, r"$243-150=93$.")])

add(3, "ג",
    rub((r"ג1: $G$ לא קשיר גורר $\overline G$ קשיר, ולכן אינם איזומורפיים", 2), (r"ג2: דוגמה נגדית (עץ בעל $3$ צלעות או הגרף עם $15$ עצים פורשים)", 2),
        (r"ג3: צלע $e_2\in E_2-E_1$ סוגרת מעגל על $T_1$", 2)),
    [r"בג2: להתעלם מכך שעץ הוא דו-צדדי ויש בו עץ פורש יחיד (מספר אי-זוגי).",
     r"בג3: לשכוח ש-$H$ פורש כי $E_1\cup E_2\subseteq E$."],
    [ch("מה דינה של טענה ג1 (גרף האיזומורפי למשלים שלו הוא קשיר)?", ["הטענה נכונה", "הטענה אינה נכונה"], 0,
        r"אם $G$ לא קשיר אז $\overline G$ קשיר, ולכן הם לא איזומורפיים."),
     ch("מה דינה של טענה ג2 (יש צלעות, מספר אי-זוגי של עצים פורשים, ולכן אינו דו-צדדי)?", ["הטענה נכונה", "הטענה אינה נכונה"], 1,
        r"כל עץ בעל $3$ צלעות הוא דו-צדדי ויש בו עץ פורש אחד."),
     num(r"כמה עצים פורשים יש לגרף שבו שני צמתים מחוברים בשלושה מסלולים באורכים $3,3,1$?", 15, r"$6+3\cdot3=15$, מספר אי-זוגי."),
     ch("מה דינה של טענה ג3?", ["הטענה נכונה", "הטענה אינה נכונה"], 0,
        r"$H$ פורש ומכיל מעגל."),
     order("סדרו את שלבי ההוכחה של ג3.",
           [r"$T_1\ne T_2$ ושניהם בעלי $|V|-1$ צלעות, ולכן קיימת צלע $e_2\in E_2-E_1$.",
            r"הוספת $e_2$ לעץ הפורש $T_1$ יוצרת מעגל.",
            r"$E_1\cup\{e_2\}\subseteq E_1\cup E_2\subseteq E$, ולכן $H$ גרף פורש של $G$ המכיל את המעגל."],
           "כל שלב נשען על הקודם.")])

add(4, "א",
    rub((r"בניית $H$: הוספת צומת $x$ המחובר לכל $V$", 2), (r"תנאי Dirac: $\deg(x)=n\ge\frac{n+1}2$ ו-$\deg_H(v)\ge\frac{n+1}2$", 2), (r"$H$ Hamilton ולכן $G$ קשיר", 1),
        (r"$\operatorname{diam}(G)\ge2$ כי $G\ne K_n$", 1), (r"אם $\operatorname{dist}(a,b)\ge3$ אז $n\ge2+\deg a+\deg b\ge n+1$, סתירה; $\operatorname{diam}(G)=2$", 2)),
    [r"בחישוב החסם לכתוב $2+\frac{n-1}2+\frac{n-1}2=2n$ במקום $n+1$.",
     r"לשכוח שהקבוצות $N(a),N(b)$ זרות כאשר המרחק לפחות $3$."],
    [ch("באיזו שיטה משתמש הפתרון להוכחת הקשירות?",
        [r"משפט Dirac על הגרף שמתקבל מהוספת צומת המחובר לכל הצמתים", "אינדוקציה על $n$", r"משפט Euler על דרגות זוגיות"], 0,
        r"ל-$H$ יש $n+1$ צמתים וכל הדרגות לפחות $\frac{n+1}2$."),
     num(r"עבור $n=7$: מהו הסף $\frac{n+1}2$ של משפט Dirac בגרף $H$?", 4, r"$H$ בעל $8$ צמתים והסף הוא $4$."),
     num(r"עבור $n=7$ ו-$\deg(v)\ge3$: מהו החסם התחתון ל-$2+\deg(a)+\deg(b)$?", 8, r"$2+3+3=8=n+1$, כלומר $>n$."),
     num(r"מהו $\operatorname{diam}(G)$?", 2, r"$2\le\operatorname{diam}(G)\le2$.")])

add(4, "ב",
    rub((r"ב1: מעגל $C_{12}$ ב-$G+(v_4,v_7)$, כלומר גרף פורש איזומורפי ל-$C_{12}$", 4), (r"ב2: $\overline G$ הוא $8$-רגולרי, קשיר (Dirac), ולכן Euler", 5),
        (r"ב3: $\chi(G)=3$ (מעגל אי-זוגי וצביעה ב-$3$ צבעים)", 4), (r"ב4: $K_5,\ C_4,\ P_4,\ C_5$ מושרים במשלים", 4)),
    [r"לבלבל בין מעגל Euler (כל הדרגות זוגיות וקשיר) למעגל Hamilton.",
     r"לחשוב ש-$\overline G$ 3-רגולרי (הדרגה במשלים היא $11-3=8$)."],
    [ch(r"האם ל-$G+(v_4,v_7)$ יש גרף פורש איזומורפי ל-$C_{12}$?", ["כן", "לא"], 0,
        r"יש מעגל Hamilton $v_4,v_7,v_8,v_9,v_1,v_2,v_3,v_{11},v_{10},v_{12},v_6,v_5,v_4$."),
     num(r"מהי הדרגה של כל צומת ב-$\overline G$?", 8, r"$G$ $3$-רגולרי על $12$ צמתים: $11-3=8$."),
     ch(r"האם $\overline G$ הוא גרף Euler?", ["כן", "לא"], 0, r"הוא קשיר וכל דרגותיו זוגיות."),
     num(r"מהו $\chi(G)$?", 3, r"יש מעגל אי-זוגי ב-$G$, וקיימת צביעה ב-$3$ צבעים."),
     ch(r"אילו מבין $P_4,\ C_4,\ C_5,\ K_5$ קיימים כתתי-גרפים מושרים ב-$\overline G$?",
        [r"רק $K_5$", r"$K_5$ ו-$C_4$ בלבד", r"כולם", r"אף אחד"], 2,
        r"$K_5$ על $v_2,v_4,v_6,v_9,v_{11}$; $C_4$ ממשלים של $2K_2$ מושרה; $P_4$ ו-$C_5$ איזומורפיים למשלימיהם.")])


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
    "examCode": "22B-A",
    "examLabel": "אביב 2022, מועד א'",
    "year": 2022,
    "examDate": "06.06.2022",
    "sourceFile": "22B-A exam (typed, pp.2-9)",
    "solutionFile": "22B-A handwritten solution (same PDF)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 4 סעיף ב)",
               "image": "images/exams/22B-A-Q4b.png", "caption": "הגרף G על 12 צמתים"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
