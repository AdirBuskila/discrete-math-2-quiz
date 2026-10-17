# -*- coding: utf-8 -*-
"""Generator for tools/raw/21B-B.json -- discrete-math-2, spring 2021, moed B (20.07.2021).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_21B-B.py

Source: 21B-B, 10 pp (p.1 cover, pp.2-10 typed questions with handwritten ink solutions in blue/green/red, 5 questions x 25 pts;
Q1 is the mandatory question; Q5b is solved in typed text). Header: course 20068, 3 hours, no aids. The solutions were read by
vision; the Hebrew prose is re-typeset from the ink, formulas and numbers as written.
Structure: Q1 = three "define the term, then answer" parts (4+3, 4+6, 4+4). Q2 a (9), b (8), c (8). Q3 a (10), b (7), c (8).
Q4 a (8), b (4+4), c (9). Q5 a (5), b (4), c (4+4+4+4, four questions on one figure).
Parts with numbered sub-questions are ONE item. Q1a's definition is "according to the lecture".

Transcription notes
- Q3.a (p.5): the printed relation is the Symbol-font glyph "<=" placed right after the word "size" in a right-to-left line, so
  the picture reads "6 <= size", i.e. size at least 6. The ink answer C(8,6)+C(8,7)+C(8,8) = 37 agrees with "size >= 6"
  (written as such); "size <= 6" would give 247. Both numbers are checked in tools/verify/21B-B/verify.py.
- Q3.b (p.5): "increasing" means f(1)<=...<=f(5) (the ink counts them as D(5,5)=C(9,4)=126); stated in the solution.
- Q4.a (p.7): the ink answer is 2^15-1, i.e. it does not count the empty subset; kept as printed, with a remark.
- Q5.c (p.9-10): the figure is the printed raster graph from the PDF image plus the printed vertex labels v1..v12 (the red
  colouring of part 3 removed). Edges read from the figure (cubic, 18 edges): v1v2 v1v4 v2v3 v1v10 v2v9 v9v10 v10v11 v9v12
  v11v12 v11v5 v12v7 v4v8 v8v3 v4v5 v8v6 v3v7 v5v6 v6v7.
- Q5.c.1 (p.9): the ink Hamilton cycle reads v1,v2,v9,v11,v12,v7,v3,v8,v6,v5,v4,v1: it skips v10 and v9v11 is not an edge.
  Intermediate slip: corrected quietly to v1,v2,v9,v10,v11,v12,v7,v3,v8,v6,v5,v4,v1 (checked by script) and logged in
  docs/ASK_ADIR.md; the answer "yes" is unaffected.
- Q5.c.3 (p.10): the red colouring v1:2 v2:1 v3:3 v4:1 v5:3 v6:1 v7:2 v8:2 v9:2 v10:1 v11:2 v12:1 is a proper 3-colouring.

Checks (tools/verify/21B-B/verify.py, brute force + sympy + networkx):
Q1a 44 and 76, Q1b 12, Q1c odd n>=5 (n<40), Q2a closed form, Q2b closed form n<40, Q2c 146, Q3a n=15 and 37, Q3b 126 and 2999,
Q3c n=5 only, Q4a 15 pairs, Q4b 20, Q4c primes<300, Q5a not graphical, Q5b primes<200, Q5c the figure: corrected Hamilton cycle,
complement 8-regular and Euler, chi=3, C5 in G, K5 in the complement.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "21B-B.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** (4 נק') המונח: תמורת אי-סדר מלא.\n\n"
      r"**א2.** (3 נק') שאלה: כמה תמורות על הקבוצה $A=\{1,2,3,4,5\}$ הן תמורות שאינן אי-סדר מלא." "\n\n"
      r"נשתמש במשפט הבא: מספר התמורות אי סדר מלא של הקבוצה $\{1,2,\dots,n\}$ הוא $D_n=n!\left(\frac1{0!}-\frac1{1!}+\frac1{2!}-\dots+(-1)^n\frac1{n!}\right)$.",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.**

$$D_5=5!\left(\frac1{0!}-\frac1{1!}+\frac1{2!}-\frac1{3!}+\frac1{4!}-\frac1{5!}\right)=\frac{5!}{2!}-\frac{5!}{3!}+\frac{5!}{4!}-\frac{5!}{5!}=60-20+5-1=44$$

תשובה: $5!-44=76$.""",
      points=7),
    Q(1, "ב", "computation", "divisibility_primes",
      r"**ב1.** (4 נק') המונח: מחלק של מספר שלם." "\n\n"
      r"**ב2.** (6 נק') שאלה: כמה מחלקים משותפים יש למספרים $n=750$ וגם $m=300$?",
      r"""**ב1. הגדרה:** יהיו $k\in\mathbb{Z}$ ו-$1\le m\in\mathbb{N}$ כך ש: $m\mid k$. אזי $m$ נקרא מחלק של $k$.

**ב2.** המחלקים המשותפים של $n$ ושל $m$ הם המחלקים של $\gcd(m,n)$.

$m=2^2\cdot3\cdot5^2$, $n=2\cdot3\cdot5^3\Rightarrow\gcd(m,n)=2\cdot3\cdot5^2=k$.

כל מחלק $d=2^\alpha\cdot3^\beta\cdot5^\gamma$ של $k$ מקיים: $\alpha\in\{0,1\}$, $\beta\in\{0,1\}$, $\gamma\in\{0,1,2\}$.

לכן מספר המחלקים המשותפים של $n$ ושל $m$ הוא $12=2\cdot2\cdot3$.""",
      points=10),
    Q(1, "ג", "computation", "euler_hamilton",
      r"**ג1.** (4 נק') המונח: מעגל EULER." "\n\n"
      r"**ג2.** (4 נק') שאלה: יהי $G=C_n$. עבור איזה ערכים של $n$ המשלים של $G$ הוא גרף EULER?",
      r"""**ג1. הגדרה:** יהי $G=(V,E)$ גרף לא מכוון ו-$C=$ מעגל של $G$. נקרא ל-$C$ מעגל EULER אם הוא עובר על כל הצמתים של $G$ ועל כל הצלעות של $G$ כך שכל צלע מופיעה פעם אחת ב-$C$.

**ג2.** $\overline{C_n}=\overline G$ הוא גרף Euler $\iff\overline G$ קשיר וכל דרגותיו זוגיות.

לכן: $n\in\{3,4\}$: $\overline{C_3}$ ו-$\overline{C_4}$ אינם קשירים, ולכן אינם גרפי Euler.

$n=5\Leftarrow\overline{C_5}\cong C_5$, ו-$C_5$ הוא גרף Euler.

עבור $n\ge6$: לכל צומת $v$ של $C_n$ מתקיים $\deg_{C_n}(v)=2$, ולכן $\deg_{\overline{C_n}}(v)=n-3$. כיוון ש-$n-3\ge\frac n2\iff n\ge6$, לפי משפט Dirac $\overline{C_n}$ הוא גרף Hamilton לכל $n\ge6$, ולכן קשיר. כל הדרגות זוגיות $\iff n$ אי-זוגי.

מסקנה: $\overline{C_n}$ הוא גרף Euler $\iff n\in\{5,7,9,\dots\}$.""",
      points=8),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "asymptotics",
      r"(9 נק') חשבו את $f(n)=\sum_{k=0}^{n}\left(\binom nk\cdot\left(7^k+3\cdot5^k\right)\right)$ והראו ש: $f(n)=O(9^n)$.",
      r"""$$f(n)=\sum_{k=0}^{n}\binom nk7^k\cdot1^{n-k}+3\sum_{k=0}^{n}\binom nk5^k\cdot1^{n-k}=8^n+3\cdot6^n\le9^n+3\cdot9^n=4\cdot9^n,\ \forall n\in\mathbb{N}$$

מסקנה: $f(n)=O(9^n)$.""",
      points=9),
    Q(2, "ב", "computation", "recurrences",
      r"(8 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=5,\ a_1=12$ וגם $a_n=2a_{n-1}-a_{n-2}$ לכל $2\le n\in\mathbb{N}$.",
      r"""המשוואה האופיינית היא: $x^2=2x-1\Rightarrow x_1=x_2=1$.

$a_n=C_1+C_2n$; $a_0=C_1=5$; $a_1=C_1+C_2=12\Rightarrow C_2=7$.

לכן: $a_n=5+7n$ לכל $n\in\mathbb{N}$.""",
      points=8),
    Q(2, "ג", "computation", "sum_product_inclusion",
      r"(8 נק') תהי הקבוצה $A=\{1,2,3,\dots,200\}$. כמה מספרים מ-$A$ מתחלקים לפחות באחד מן המספרים 2 או 3 או 5?",
      r"""נחשב את $|A_1\cup A_2\cup A_3|$, כאשר:

$A_1=\{n\in A:2\mid n\}\Rightarrow|A_1|=\left\lfloor\frac{200}2\right\rfloor=100$

$A_2=\{n\in A:3\mid n\}\Rightarrow|A_2|=\left\lfloor\frac{200}3\right\rfloor=66$

$A_3=\{n\in A:5\mid n\}\Rightarrow|A_3|=\left\lfloor\frac{200}5\right\rfloor=40$

$\gcd(2,3)=1=\gcd(2,5)=\gcd(3,5)\Rightarrow$

$|A_1\cap A_2|=\left\lfloor\frac{200}6\right\rfloor=33$; $|A_1\cap A_3|=\left\lfloor\frac{200}{10}\right\rfloor=20$; $|A_2\cap A_3|=\left\lfloor\frac{200}{15}\right\rfloor=13$

$|A_1\cap A_2\cap A_3|=\left\lfloor\frac{200}{30}\right\rfloor=6$

$$|A_1\cup A_2\cup A_3|=(100+66+40)-(33+20+13)+6=212-66=146$$""",
      points=8),

    # ---------------- Q3 ----------------
    Q(3, "א", "computation", "combinations_subsets",
      r"(10 נק') תהי הקבוצה $A=\{1,2,3,\dots,n\}$, כאשר $0<n\in\mathbb{N}$. ידוע שלקבוצה $A$ יש 105 תתי-קבוצות בגודל 2. חשבו כמה תתי-קבוצות **בגודל** $\ge6$ של $A$ מכילות רק מספרים אי-זוגיים.",
      r"""נמצא את $n$: $\binom n2=105\iff\frac{n(n-1)}2=105\iff n^2-n-210=0\Rightarrow n_{1,2}=\frac{1\pm\sqrt{1+840}}2=\frac{1\pm29}2=\begin{cases}-14\notin\mathbb{N}\\15\end{cases}$

כל המספרים האי-זוגיים ב-$A$ הם: $1,3,5,7,9,11,13,15$ (שמונה מספרים).

לכן החישוב הוא:

$$\binom86+\binom87+\binom88=\binom82+\binom81+\binom80=28+8+1=37$$""",
      points=10),
    Q(3, "ב", "computation", "function_counting",
      r"(7 נק') כמה פונקציות $f:\{1,2,3,4,5\}\to\{1,2,3,4,5\}$ הן **לא** עולות?",
      r"""נסמן ב-$A$ את קבוצת כל הפונקציות $f:\{1,\dots,5\}\to\{1,\dots,5\}$.

לכל $i\in\{1,\dots,5\}$ מתקיים $f(i)\in\{1,\dots,5\}$, כלומר 5 אפשרויות, ולכן $|A|=5^5=3125$.

פונקציה $f\in A$ עולה ($f(1)\le f(2)\le\dots\le f(5)$) $\iff$ "$f(1),f(2),f(3),f(4),f(5)$" נקבעת על ידי בחירה של 5 ערכים מתוך 5 עם חזרות. לכן:

$$D(5,5)=\binom{5-1+5}{5-1}=\binom94=\frac{9\cdot8\cdot7\cdot6}{1\cdot2\cdot3\cdot4}=126$$

פונקציות עולות.

מסקנה: $3125-126=2999$ פונקציות שאינן עולות.""",
      points=7),
    Q(3, "ג", "computation", "graph_basics",
      r"(8 נק') מצאו כל $3\le n\in\mathbb{N}$ עבור $C_n$ הוא איזומורפי למשלים שלו.",
      r"""נניח $C_n=(V,E)\cong\overline{C_n}=(V,\overline E)$. אז מתקיים:

$$\begin{cases}|E|=|\overline E|=n\\|E|+|\overline E|=\frac{n(n-1)}2\end{cases}\Rightarrow2n=\frac{n(n-1)}2\Rightarrow n^2-5n=0\Rightarrow n(n-5)=0$$

לכן $n=0$ (אינו מתאים) או $n=5$.

ואכן $\overline{C_5}\cong C_5$: אם $C_5$ הוא המעגל $v_1v_2v_3v_4v_5$, המשלים הוא המעגל $v_1,v_3,v_5,v_2,v_4,v_1$.

מסקנה: $C_n\cong\overline{C_n}\iff n=5$.""",
      points=8),

    # ---------------- Q4 ----------------
    Q(4, "א", "computation", "combinations_subsets",
      r"(8 נק') תהיינה הקבוצות $A=\{1,2,3,4,5,6\}$ וגם $B=\{1,2,3,4,5\}$. חשבו כמה תתי-קבוצות של $A\times B$ מכילות רק זוגות $(a,b)$ כך ש: $a+b=$ מספר אי-זוגי.",
      r"""נסמן ב-$\Omega$ את קבוצת הזוגות ב-$A\times B$ שמקיימים: $a+b=$ מספר אי-זוגי. אז:

$(a,b)\in\Omega\iff(a,b)\in\{1,3,5\}\times\{2,4\}$ או $(a,b)\in\{2,4,6\}\times\{1,3,5\}$

לכן $\Omega=\{1,3,5\}\times\{2,4\}\cup\{2,4,6\}\times\{1,3,5\}$ ו-$|\Omega|=6+9=15$.

מסקנה: $2^{15}-1=2^{|\Omega|}-1=|P(\Omega)|-1$ תתי-קבוצות של $A\times B$ מכילות רק זוגות מ-$\Omega$ (לא כולל הקבוצה הריקה).

הערה: הפתרון הרשמי אינו סופר את הקבוצה הריקה.""",
      points=8),
    Q(4, "ב", "computation", "function_counting",
      r"(4+4 נק') תהי $\Omega=\{f\ /\ f:\{1,2,3,4\}\to\{1,2,3,4,5,6,7,8,9\}\}$. חשבו כמה פונקציות $f\in\Omega$ הן עולות ממש ומקיימות התנאי $f(1)=3$.",
      r"""$f$ עולה ממש $\iff4\le f(2)<f(3)<f(4)\le9$.

$\{f(2),f(3),f(4)\}$ היא תת-קבוצה בגודל 3 של $\{4,5,6,7,8,9\}$, ולכן מספר הפונקציות הוא

$$\binom63=\frac{6\cdot5\cdot4}{1\cdot2\cdot3}=20$$""",
      points=8),
    Q(4, "ג", "proof", "euler_phi",
      r"(9 נק') אם $n$ הוא ראשוני, הראו ש: $n\mid\left(\phi(n)^{\phi(n\cdot n)}-1\right)$.",
      r"""$\phi(n^2)=n^2\left(1-\frac1n\right)=n(n-1)$, ולכן

$$\phi(n)^{\phi(n^2)}-1=(n-1)^{n(n-1)}-1=\left((n-1)^n\right)^{n-1}-1$$

מכיוון ש-$n$ ראשוני, $n\nmid(n-1)^n$, ולכן לפי משפט FERMAT:

$n\mid\left(\left((n-1)^n\right)^{n-1}-1\right)$.""",
      points=9),

    # ---------------- Q5 ----------------
    Q(5, "א", "truefalse", "graph_basics",
      r"(5 נק') האם קיים גרף לא מכוון שסדרת הדרגות שלו היא $(1,1,1,1,3,4,5,6,8)$?",
      r"""אם קיים $G=(V,E)$ כזה, אז $|V|=9$, ולכן קיים $v_9\in V$ בדרגה $\deg(v_9)=8$. נוכל לראות ש-$v_9$ מחובר לכל שאר הצמתים.

אז סדרת הדרגות של $G-v_9$ היא: $0,0,0,0,2,3,4,5\Leftarrow$ יש צומת בדרגה 5 ב-$G-v_9$, אך בגרף זה רק שלושה צמתים אחרים אינם מבודדים (ארבעה צמתים בדרגה 0), בלתי אפשרי.

מסקנה: לא קיים $G$ כזה.""",
      verdict=False, points=5),
    Q(5, "ב", "proof", "euler_phi",
      r"(4 נק') אם $p$ הוא מספר ראשוני, הוכיחו: $\phi(p^2)\mid(\phi\circ\phi)(p^4)$, כאשר $\phi$ היא הפונקציה של EULER ו-ה-\"$\circ$\" הוא הרכבת פונקציות.",
      r"""$\phi(p^2)=p^2(1-1/p)=p(p-1)$

$(\phi\circ\phi)(p^4)=\phi(\phi(p^4))=\phi(p^4(1-1/p))=\phi(p^3(p-1))$

ומכיוון ש-$p$ ראשוני וגם $p-1<p$ נשיג ש-$\gcd(p^3,p-1)=1$ ונקבל:

$(\phi\circ\phi)(p^4)=\phi(p^3)\phi(p-1)=p^3(1-1/p)\phi(p-1)=p^2(p-1)\phi(p-1)$

מסקנה: $\phi(p^2)\mid(\phi\circ\phi)(p^4)$.""",
      points=4),
    Q(5, "ג", "computation", "euler_hamilton",
      r"(4+4+4+4 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ג1.** האם $G$ הוא גרף Hamilton?" "\n\n"
      r"**ג2.** האם המשלים של $G$ הוא גרף Euler?" "\n\n"
      r"**ג3.** מהו $\chi(G)$?" "\n\n"
      r"**ג4.** האם במשלים של $G$ קיים $K_5$ כתת-גרף מושרה?",
      r"""**ג1.** $G$ הוא גרף Hamilton $\Rightarrow$ קיים מעגל $C=$ מעגל Hamilton, כלומר:

$C:\ v_1,v_2,v_9,v_{10},v_{11},v_{12},v_7,v_3,v_8,v_6,v_5,v_4,(v_1)$

**ג2.** $G$ הוא 3-רגולרי $\Rightarrow\overline G$ הוא 8-רגולרי $\Rightarrow$ לכל $v_i\in V$: $\deg_{\overline G}(v_i)=8\ge\frac{12}2\Rightarrow\overline G$ הוא גרף Hamilton, ולכן $\overline G$ קשיר. כל הדרגות ב-$\overline G$ זוגיות.

מסקנה: $\overline G$ הוא גרף Euler.

**ג3.** ב-$G$ יש מעגל $C_5$: $v_1,v_4,v_5,v_{11},v_{10}$ $\Rightarrow\chi(G)\ge3$. ב-$G$ יש 3-צביעה (צבע 1: $v_2,v_4,v_6,v_{10},v_{12}$; צבע 2: $v_1,v_7,v_8,v_9,v_{11}$; צבע 3: $v_3,v_5$) $\Rightarrow\chi(G)\le3$.

מסקנה: $\chi(G)=3$.

**ג4.** כן. אין ב-$G$ צלעות בתוך הקבוצה $A=\{v_1,v_9,v_{11},v_7,v_8\}$ (קבוצה בלתי תלויה), ולכן ב-$\overline G$ הקבוצה $A$ יוצרת $K_5$.""",
      points=16, contextId="c1"),
]

# ---------------------------------------------------------------------------------------------
# Phase 4: rubric / pitfalls / guided steps (ai-draft), every step derived from the stored solution.
# Every number and claim below is machine-checked in tools/verify/21B-B/verify.py (section "STEPS").
# ---------------------------------------------------------------------------------------------
IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def num(prompt, answer, explain, tol=0):
    return {"type": "numeric", "prompt": prompt, "answer": answer, "tol": tol, "explain": explain}


def ch(prompt, options, correctId, explain):
    """options: the correct option is listed first in the source (id a); the UI shuffles."""
    return {"type": "choice", "prompt": prompt, "options": opts(*options), "correctId": correctId, "explain": explain}


def bug(line_list, i, new):
    b = list(line_list)
    b[i] = new
    return b


Q4C_LINES = [
    r"$\phi(n^2)=n^2\left(1-\frac1n\right)=n(n-1)$.",
    r"לכן $\phi(n)^{\phi(n^2)}-1=(n-1)^{n(n-1)}-1=\left((n-1)^n\right)^{n-1}-1$.",
    r"$n$ ראשוני, ולכן $n\nmid(n-1)^n$.",
    r"לפי משפט Fermat, $n\mid\left((n-1)^n\right)^{n-1}-1$.",
]

Q5A_LINES = [
    r"נניח שקיים $G$ כזה. יש בו 9 צמתים, ולכן יש צומת $v_9$ בדרגה 8.",
    r"$v_9$ מחובר לכל שאר הצמתים, ולכן סדרת הדרגות של $G-v_9$ היא $0,0,0,0,2,3,4,5$.",
    r"בגרף $G-v_9$ ארבעה צמתים מבודדים, ולכן לצומת בדרגה 5 יש לכל היותר 3 שכנים.",
    r"זו סתירה, ולכן אין גרף כזה.",
]

ENRICH = {
    (1, "א"): dict(
        rubric=rub(("הגדרת תמורת אי-סדר מלא (לפי ההרצאה)", 4),
                   (r"חישוב $D_5=60-20+5-1=44$ לפי הנוסחה", 2),
                   (r"התמורות שאינן אי-סדר מלא: $5!-44=76$", 1)),
        pitfalls=[r"לענות $D_5=44$, מספר תמורות אי-הסדר, כשהשאלה מבקשת את התמורות שאינן כאלה.",
                  r"לשכוח את הסימנים המתחלפים בנוסחה."],
        steps=[
            num(r"מהו האיבר השלישי בנוסחה, $\frac{5!}{2!}$?", 60, r"$120/2=60$."),
            num(r"מהו $D_5$?", 44, r"$60-20+5-1=44$."),
            num("כמה תמורות של $\\{1,\\dots,5\\}$ אינן תמורות אי-סדר מלא?", 76, "$120-44=76$."),
        ]),
    (1, "ב"): dict(
        rubric=rub(("הגדרת מחלק של מספר שלם", 4),
                   (r"המחלקים המשותפים הם המחלקים של $\gcd(m,n)$", 2),
                   (r"$m=2^2\cdot3\cdot5^2,\ n=2\cdot3\cdot5^3$ ולכן $\gcd=2\cdot3\cdot5^2=150$", 2),
                   (r"מספר המחלקים: $2\cdot2\cdot3=12$", 2)),
        pitfalls=[r"לספור את המחלקים של $\operatorname{lcm}$ או של המכפלה במקום של ה-$\gcd$.",
                  "לשכוח שמעריך כל ראשוני במחלק נע מ-0 עד המעריך ב-$\\gcd$."],
        steps=[
            ch("המחלקים המשותפים של שני מספרים הם בדיוק המחלקים של איזה מספר?",
               [r"$\gcd$ שלהם", r"$\operatorname{lcm}$ שלהם", r"המכפלה שלהם", r"ההפרש שלהם"], "a",
               r"$d\mid m$ וגם $d\mid n$ אם ורק אם $d\mid\gcd(m,n)$. למשל $4\mid\operatorname{lcm}(750,300)=1500$ אבל $4\nmid750$."),
            num(r"מהו $\gcd(750,300)$?", 150, r"$2\cdot3\cdot5^2=150$."),
            num("כמה מחלקים משותפים יש?", 12, r"$(1+1)(1+1)(2+1)=12$."),
        ]),
    (1, "ג"): dict(
        rubric=rub(("הגדרת מעגל Euler", 4),
                   (r"$\overline G$ הוא Euler אם ורק אם הוא קשיר וכל דרגותיו זוגיות", 1),
                   (r"$n=3,4$: המשלים אינו קשיר; $n=5$: $\overline{C_5}\cong C_5$", 1),
                   (r"$n\ge6$: דרגות $n-3\ge\frac n2$, Dirac וקשירות, וזוגיות אם ורק אם $n$ אי-זוגי", 2)),
        pitfalls=[r"לכלול את $n=3$ שבו המשלים הוא שלושה צמתים בודדים.",
                  r"לכלול את $n=6$: דרגות המשלים הן 3, אי-זוגיות."],
        steps=[
            num(r"מהי הדרגה של כל צומת ב-$\overline{C_9}$?", 6, r"$9-3=6$."),
            num(r"מהו ה-$n\ge3$ הקטן ביותר שעבורו $\overline{C_n}$ הוא גרף Euler?", 5, r"$\overline{C_5}\cong C_5$."),
            ch(r"עבור אילו $n\ge3$ הוא $\overline{C_n}$ גרף Euler?",
               [r"$n$ אי-זוגי וגם $n\ge5$", r"כל $n\ge5$", r"$n$ אי-זוגי וגם $n\ge3$", r"$n$ זוגי"], "a",
               r"$n=6$ נכשל (דרגות 3), $n=3$ נכשל (המשלים אינו קשיר), ו-$n$ זוגי נכשל כי $n-3$ אי-זוגי."),
        ]),
    (2, "א"): dict(
        rubric=rub((r"שימוש בבינום לסכום הראשון: $\sum\binom nk7^k=8^n$", 3),
                   (r"הסכום השני: $3\sum\binom nk5^k=3\cdot6^n$", 2),
                   (r"חסם $8^n+3\cdot6^n\le9^n+3\cdot9^n=4\cdot9^n$", 2),
                   (r"מסקנה: $f(n)=O(9^n)$", 2)),
        pitfalls=[r"לשכוח את הגורם 3 מחוץ לסכום השני.",
                  "להסתפק בטענה ש-$8^n$ קטן מ-$9^n$ בלי לטפל גם באיבר השני."],
        steps=[
            num(r"מהו $f(2)$ מהחישוב הישיר של הסכום?", 172, r"$(1+14+49)+3(1+10+25)=64+108=172$."),
            num(r"מהו $f(3)$ לפי הצורה הסגורה $8^n+3\cdot6^n$?", 1160, r"$512+3\cdot216=1160$."),
            num(r"איזה קבוע $c$ מופיע בחסם $f(n)\le c\cdot9^n$ בפתרון?", 4, r"$8^n\le9^n$ ו-$3\cdot6^n\le3\cdot9^n$, ולכן $c=4$."),
        ]),
    (2, "ב"): dict(
        rubric=rub((r"משוואה אופיינית $x^2=2x-1$ ושורש כפול $x=1$", 2),
                   (r"צורה כללית $a_n=C_1+C_2n$", 2),
                   (r"$C_1=5$ ו-$C_2=7$", 3),
                   (r"הצורה המפורשת $a_n=5+7n$", 1)),
        pitfalls=[r"לכתוב $C_1+C_2$ בלי הגורם $n$ לשורש כפול.",
                  r"להציב $a_1=C_1\cdot1+C_2\cdot1$ ולשכוח את הגורם $n=1$."],
        steps=[
            num(r"מהו השורש (הכפול) של $x^2=2x-1$?", 1, r"$(x-1)^2=0$."),
            num(r"מהו $C_2$ אחרי הצבת $a_0=5,\ a_1=12$?", 7, r"$C_1=5$ ו-$C_1+C_2=12$."),
            num(r"מהו $a_5$?", 40, r"$5+7\cdot5=40$."),
        ]),
    (2, "ג"): dict(
        rubric=rub((r"גדלי הקבוצות $|A_1|=100,\ |A_2|=66,\ |A_3|=40$", 3),
                   (r"הגדלים של החיתוכים בזוגות: $33,20,13$", 2),
                   (r"החיתוך המשולש: $6$", 1),
                   (r"הצבה בנוסחת ההכלה וההדחה והתוצאה $146$", 2)),
        pitfalls=[r"לחשב את חיתוך זוג כמכפלת הגדלים ולא כ-$\lfloor200/\operatorname{lcm}\rfloor$.",
                  "לשכוח את החיתוך המשולש בסימן חיובי."],
        steps=[
            num("מהו סכום הגדלים הבודדים $|A_1|+|A_2|+|A_3|$?", 206, "$100+66+40=206$."),
            num("מהו סכום הגדלים של שלושת החיתוכים בזוגות?", 66, "$33+20+13=66$."),
            num("כמה מספרים ב-$A$ מתחלקים בלפחות אחד מ-2, 3, 5?", 146, "$206-66+6=146$."),
        ]),
    (3, "א"): dict(
        rubric=rub((r"פתרון $\binom n2=105$ ומציאת $n=15$", 3),
                   ("8 מספרים אי-זוגיים ב-$A$", 2),
                   (r"סכום $\binom86+\binom87+\binom88$", 3),
                   (r"התוצאה $37$", 2)),
        pitfalls=[r'לקרוא את התנאי כ"גודל לכל היותר 6" ולקבל 247.',
                  "להשאיר את השורש השלילי של משוואת הריבוע."],
        steps=[
            num(r"מהו $n$ (נתון $\binom n2=105$)?", 15, r"$n^2-n-210=0\Rightarrow n=15$."),
            num(r"כמה מספרים אי-זוגיים יש ב-$\{1,\dots,15\}$?", 8, r"$1,3,\dots,15$: שמונה."),
            num(r"כמה תתי-קבוצות של האי-זוגיים הן בגודל לפחות 6?", 37, r"$28+8+1=37$."),
        ]),
    (3, "ב"): dict(
        rubric=rub((r"סך הפונקציות $5^5=3125$", 1),
                   (r"פונקציה עולה נקבעת על ידי בחירה של 5 ערכים עם חזרות: $D(5,5)$", 3),
                   (r"$D(5,5)=\binom94=126$", 2),
                   (r"מסקנה: $3125-126=2999$", 1)),
        pitfalls=[r"לספור פונקציות עולות ממש ($\binom55=1$) במקום עולות חלש.",
                  "לענות 126, מספר הפונקציות העולות, כשהשאלה מבקשת את אלה שאינן עולות."],
        steps=[
            num(r"כמה פונקציות יש בסך הכול מ-$\{1,\dots,5\}$ לעצמה?", 3125, r"$5^5=3125$."),
            num("כמה מהן עולות (כלומר $f(1)\\le\\dots\\le f(5)$)?", 126, r"$D(5,5)=\binom94=126$."),
            num("כמה פונקציות אינן עולות?", 2999, "$3125-126=2999$."),
        ]),
    (3, "ג"): dict(
        rubric=rub((r"אם $C_n\cong\overline{C_n}$ אז $|E|=|\overline E|=n$", 2),
                   (r"$|E|+|\overline E|=\frac{n(n-1)}2$", 2),
                   (r"המשוואה $n(n-5)=0$", 2),
                   (r"$\overline{C_5}\cong C_5$, ולכן $n=5$ בלבד", 2)),
        pitfalls=[r"להשאיר את הפתרון $n=0$ שאינו מתאים.",
                  "להסתפק בהגעה ל-$n=5$ בלי להראות שאכן $C_5$ איזומורפי למשלים שלו."],
        steps=[
            ch("איזו משוואה בין מספר הצלעות מוליכה לפתרון?",
               [r"$2n=\frac{n(n-1)}2$", r"$n=2\cdot\frac{n(n-1)}2$", r"$n^2=\frac{n(n-1)}2$", r"$n+1=\frac{n(n-1)}2$"], "a",
               r"שני הגרפים בעלי $n$ צלעות, וסכומן $\binom n2$."),
            num(r"מהו הפתרון החיובי של $n(n-5)=0$?", 5, "$n=5$."),
            num(r"כמה צלעות יש ב-$\overline{C_5}$?", 5, r"$\binom52-5=5$."),
        ]),
    (4, "א"): dict(
        rubric=rub((r"תיאור $\Omega$: $\{1,3,5\}\times\{2,4\}\cup\{2,4,6\}\times\{1,3,5\}$", 3),
                   (r"$|\Omega|=6+9=15$", 3),
                   (r"מספר תתי-הקבוצות הלא ריקות: $2^{15}-1$", 2)),
        pitfalls=[r"לכלול את הקבוצה הריקה ולכתוב $2^{15}$; הפתרון הרשמי חיסר אותה.",
                  "לשכוח שסכום אי-זוגי דורש זוגיות שונה של $a$ ושל $b$."],
        steps=[
            num(r"כמה זוגות $(a,b)$ עם $a$ אי-זוגי ו-$b$ זוגי?", 6, r"$3\cdot2=6$."),
            num(r"כמה זוגות $(a,b)$ עם $a$ זוגי ו-$b$ אי-זוגי?", 9, r"$3\cdot3=9$."),
            num(r"מהו $|\Omega|$?", 15, "$6+9=15$."),
            num("כמה תתי-קבוצות לא ריקות של $\\Omega$ יש?", 32767, "$2^{15}-1=32767$."),
        ]),
    (4, "ב"): dict(
        rubric=rub((r"עולה ממש עם $f(1)=3$ שקול ל-$4\le f(2)<f(3)<f(4)\le9$", 3),
                   (r"$\{f(2),f(3),f(4)\}$ היא תת-קבוצה בגודל 3 של $\{4,\dots,9\}$", 2),
                   (r"$\binom63=20$", 3)),
        pitfalls=[r"לבחור מתוך $\{1,\dots,9\}$ במקום מתוך $\{4,\dots,9\}$.",
                  r"להשתמש בספירה עם חזרות ($D$) כשהפונקציה עולה ממש."],
        steps=[
            num(r"כמה ערכים אפשריים יש ל-$f(2),f(3),f(4)$ (כל אחד גדול מ-3 וקטן או שווה ל-9)?", 6, r"$\{4,5,6,7,8,9\}$."),
            num("כמה פונקציות מתאימות יש?", 20, r"$\binom63=20$."),
        ]),
    (4, "ג"): dict(
        rubric=rub((r"$\phi(n^2)=n(n-1)$ ולכן $\phi(n)^{\phi(n^2)}=(n-1)^{n(n-1)}$", 3),
                   (r"כתיבה בצורה $\left((n-1)^n\right)^{n-1}-1$", 3),
                   (r"$n\nmid(n-1)^n$ ומשפט Fermat", 3)),
        pitfalls=[r"להפעיל את Fermat על הבסיס $n-1$ עם חזקה $n(n-1)$ ולהתעלם מכך שהחזקה צריכה להיות $n-1$.",
                  "לשכוח לבדוק ש-$n$ אינו מחלק את הבסיס."],
        steps=[
            num(r"מהו $\phi(25)$ (כלומר $\phi(n^2)$ עבור $n=5$)?", 20, r"$5\cdot4=20$."),
            ch("איך הפתרון מגיע לצורה שמתאימה למשפט Fermat?",
               [r"כותב את החזקה $n(n-1)$ כ-$n\cdot(n-1)$ ומקבל $\left((n-1)^n\right)^{n-1}$",
                r"מציב $n=2$", r"מחלק את החזקה ב-$n$", r"מעלה את הביטוי בריבוע"], "a",
               r"הבסיס החדש $(n-1)^n$ מועלה בחזקה $n-1=\phi(n)$."),
            {"type": "order", "prompt": "סדרו את ההוכחה.", "lines": Q4C_LINES,
             "explain": r"חישוב $\phi(n^2)$, שכתוב הביטוי, בדיקת התנאי של Fermat ואז המסקנה."},
        ]),
    (5, "א"): dict(
        rubric=rub(("הנחה שקיים גרף כזה: יש בו 9 צמתים וצומת בדרגה 8", 1),
                   ("צומת בדרגה 8 מחובר לכל האחרים, ולכן הסדרה של $G-v_9$ היא $0,0,0,0,2,3,4,5$", 1),
                   ("צומת בדרגה 5 אינו יכול להיות מחובר ליותר מ-3 צמתים לא מבודדים", 2),
                   ("מסקנה: לא קיים גרף כזה", 1)),
        pitfalls=["להסיק שהסדרה אינה גרפית רק כי סכום הדרגות אי-זוגי: כאן הסכום הוא 30, זוגי.",
                  "לשכוח להפחית 1 מדרגות כל הצמתים אחרי הסרת הצומת בדרגה 8."],
        steps=[
            num("כמה צמתים בדרגה 0 יש ב-$G-v_9$?", 4, "אחרי הפחתת 1 מארבעת הצמתים בדרגה 1."),
            {"type": "order", "prompt": "סדרו את הנימוק.", "lines": Q5A_LINES,
             "explain": "ההנחה, הסרת הצומת בדרגה 8, מניית הצמתים המבודדים, והסתירה."},
        ]),
    (5, "ב"): dict(
        rubric=rub((r"$\phi(p^2)=p(p-1)$ ו-$\phi(p^4)=p^3(p-1)$", 1),
                   (r"$\gcd(p^3,p-1)=1$", 1),
                   (r"$(\phi\circ\phi)(p^4)=p^2(p-1)\phi(p-1)$", 1),
                   (r"מסקנה: $\phi(p^2)=p(p-1)$ מחלק את הביטוי", 1)),
        pitfalls=[r"להפריד את $\phi(p^3(p-1))$ למכפלה בלי לבדוק ש-$\gcd(p^3,p-1)=1$.",
                  r"לחשב $(\phi\circ\phi)(p^4)$ כ-$\phi(p^4)^2$."],
        steps=[
            num(r"מהו $(\phi\circ\phi)(81)$ (כלומר $p=3$)?", 18, r"$\phi(81)=54$, $\phi(54)=18$."),
            num(r"מהו המנה $\frac{(\phi\circ\phi)(p^4)}{\phi(p^2)}$ עבור $p=3$?", 3, r"$\frac{18}{6}=3=p\cdot\phi(p-1)$."),
        ]),
    (5, "ג"): dict(
        rubric=rub(("ג1: מעגל Hamilton: $v_1,v_2,v_9,v_{10},v_{11},v_{12},v_7,v_3,v_8,v_6,v_5,v_4$", 4),
                   (r"ג2: $\overline G$ הוא 8-רגולרי, Hamilton (Dirac) ולכן קשיר, וכל הדרגות זוגיות", 4),
                   (r"ג3: $C_5\subseteq G$ ולכן $\chi\ge3$, וצביעה ב-3 צבעים", 4),
                   (r"ג4: הקבוצה הבלתי תלויה $\{v_1,v_9,v_{11},v_7,v_8\}$ יוצרת $K_5$ במשלים", 4)),
        pitfalls=["לדלג על צומת ברשימת מעגל Hamilton: חייבים לעבור בכל 12 הצמתים.",
                  r"לבחור 5 צמתים שיש ביניהם צלע ב-$G$ ולטעון שהם $K_5$ במשלים."],
        steps=[
            ch("איזה מהמעגלים הבאים הוא מעגל Hamilton ב-$G$?",
               [r"$v_1,v_2,v_9,v_{10},v_{11},v_{12},v_7,v_3,v_8,v_6,v_5,v_4$",
                r"$v_1,v_2,v_9,v_{11},v_{10},v_{12},v_7,v_3,v_8,v_6,v_5,v_4$",
                r"$v_1,v_2,v_3,v_7,v_{12},v_9,v_{10},v_{11},v_5,v_4,v_8,v_6$",
                r"$v_1,v_{10},v_9,v_2,v_3,v_8,v_4,v_5,v_{11},v_{12},v_7,v_6$"],
               "a", r"בשאר הרשימות יש זוג עוקב (או הזוג האחרון עם $v_1$) שאינו צלע של $G$."),
            num(r"מהי הדרגה של כל צומת ב-$\overline G$?", 8, r"$G$ הוא 3-רגולרי על 12 צמתים: $12-1-3=8$."),
            num(r"מהו $\chi(G)$?", 3, r"$G$ מכיל $C_5$, ולכן $\chi\ge3$, ויש צביעה ב-3 צבעים."),
            ch(r"איזו קבוצה של 5 צמתים יוצרת $K_5$ מושרה ב-$\overline G$?",
               [r"$\{v_1,v_9,v_{11},v_7,v_8\}$", r"$\{v_1,v_2,v_3,v_4,v_5\}$", r"$\{v_1,v_9,v_{11},v_7,v_3\}$",
                r"$\{v_1,v_3,v_5,v_{10},v_{12}\}$"], "a",
               r"בקבוצה הראשונה אין צלעות של $G$; בכל אחת מהאחרות יש צלע של $G$ (למשל $(v_1,v_2)$, $(v_3,v_7)$, $(v_1,v_{10})$)."),
        ]),
}

for q in questions:
    e = ENRICH.get((q["num"], q.get("part")))
    if e is None or q.get("hold"):
        continue
    q["rubric"] = e["rubric"]
    q["rubricSource"] = "ai-draft"
    q["pitfalls"] = e["pitfalls"]
    q["steps"] = e["steps"]
    q["stepsSource"] = "ai-draft"


exam = {
    "examCode": "21B-B",
    "examLabel": "אביב 2021, מועד ב'",
    "year": 2021,
    "examDate": "20.07.2021",
    "sourceFile": "21B-B exam (typed, pp.1-10)",
    "solutionFile": "21B-B handwritten solution (same PDF)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 5 סעיף ג)",
               "image": "images/exams/21B-B-Q5c.png", "caption": "הגרף G על 12 צמתים"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
