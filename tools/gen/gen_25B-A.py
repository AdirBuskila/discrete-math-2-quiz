# -*- coding: utf-8 -*-
"""Generator for tools/raw/25B-A.json -- discrete-math-2, spring 2025, moed A (06.07.2025).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_25B-A.py

Source: 25B-A, 9 pp (cover with the exam structure, then Q1-Q6 typed, each with a HANDWRITTEN solution in ink read by
vision). Header: course 20068, 3 hours, formula sheet; 6 questions of 25 points, the best 4 count.
Each question is split into its printed parts. Parts with numbered sub-questions (Q2c, Q4c, Q5b, Q6a and the
"define, then answer" parts of Q1) are ONE item with all sub-parts; Q1 definitions are handwritten as a pointer
to the lecture only, so the solution says "according to the lecture".

Transcription notes
- Q3c (p.5): HELD. The ink solution computes C(7,3)*C(10,4) = (7*6*5/(1*2*3)) * (10*9*8*7/(1*2*3*4)) = 35*840 = 29400.
  The set is "3 multiples of 4 and 6 primes" in {1..30}: 7 multiples of 4, 10 primes, so C(7,3)*C(10,6) = 35*210 = 7350
  (verify.py); the printed 840 is 10*9*8*7/6, the "/4" was dropped. Official key and re-derivation disagree.
- Q3a (p.4): the line "a_1 = 18 and a_0 = 8" next to the two equations C1+12 = 16 and 3C1+3C2+24 = 36 is a slip
  (the given values are a_0 = 16, a_1 = 36 and the equations use those); the closed form 4*3^n+12*2^n is right.
- Q6a(4) (p.6): the solution says "not Euler because n-2, n-3, n-4 cannot all be even"; written as printed.
- Q4c (p.6): the handwriting names the complement of G "G-bar" (the question calls it H); written as H.
  The reading of the last line of Q4c(3) (G bipartite, so no odd cycle, so no C5 in G, and C5-bar = C5) is partly
  uncertain; the answer (no induced C5 in H) is confirmed by brute force.
- Q4a (p.6): the figure beside the solution (two adjacent degree-3 vertices with two leaves each, plus a vertex joined
  to everything) is described in words; no crop.

Checks (tools/verify/25B-A/verify.py, brute force + sympy + networkx):
Q1a 37, Q1b 240, Q1c K_{m,n} diameter 2 and C5 counterexample, Q2a 680, Q2b 2n(n^2-1) for n=10..12 by divisor
enumeration, Q2c C(n-5,7) and 9!/0 (small analogues too), Q3a closed form for n<40, Q3b 21 | phi(n) for all 49|n < 20000,
Q3c re-derived 7350 (held), Q4a trees on 5 vertices, Q4b degree sequence graphical, Q4c the figure (all claims),
Q5a n=50 and 1512, Q5b counterexamples + all connected odd-degree graphs n<=6, Q5c 243, Q6a all trees n=11,13,
Q6b small-N enumeration and 8!*17 = 685440.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25B-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "student-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "sum_product_inclusion",
      "**א1.** (8 נק') המונח: עקרון הסכום.\n\n"
      "**א2.** שאלה: תהי הקבוצה $A=\\{1,2,3,\\dots,100\\}$. חשבו כמה מספרים מ-$A$ מתחלקים ב-3 או ב-49 או ב-37.",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** נסמן ב: $A_1=\{n:n\in A\wedge3\mid n\}$, ולכן $|A_1|=\left\lfloor\frac{100}{3}\right\rfloor=33$.

$A_2=\{n:n\in A\wedge49\mid n\}$, ולכן $|A_2|=\left\lfloor\frac{100}{49}\right\rfloor=2$.

$A_3=\{n:n\in A\wedge37\mid n\}$, ולכן $|A_3|=\left\lfloor\frac{100}{37}\right\rfloor=2$.

אכן: $\mathrm{lcm}(3,49),\ \mathrm{lcm}(3,37),\ \mathrm{lcm}(49,37)\notin A$.

לכן $A_1\cap A_2=A_1\cap A_3=A_2\cap A_3=\emptyset\Rightarrow|A_1\cup A_2\cup A_3|=|A_1|+|A_2|+|A_3|=37$.""",
      points=8),
    Q(1, "ב", "computation", "permutations_arrangements",
      "**ב1.** (8 נק') המונח: תמורה.\n\n"
      "**ב2.** שאלה: תהי הקבוצה $A=\\{1,2,3,\\dots,7\\}$. חשבו את מספר התמורות שבהן $1,2,3$ מופיעים בסמיכות ובנוסף $1$ נמצא לפני $2$ וגם לפני $3$.",
      r"""**ב1. הגדרה:** לפי ההרצאה.

**ב2.** תמורה מתאימה היא תמורה של $\{x,4,5,6,7\}$ עבור $x=$"123", או תמורה של $\{y,4,5,6,7\}$ עבור $y=$"132".

לכן מספר התמורות המתאימות שווה ל: $2\cdot5!=240$.""",
      points=8),
    Q(1, "ג", "proof", "graph_connectivity",
      "**ג1.** (9 נק') המונח: קוטר של גרף לא מכוון.\n\n"
      "**ג2.** שאלה: יהי $G=(V,E)$ גרף לא מכוון בעל 3 צמתים לפחות. הוכיחו או הפריכו:\n\n"
      "**(1ג)** אם $G=(A,B,E)=K_{m,n}$, אז $\\mathrm{diam}(G)=2$.\n\n"
      "**(2ג)** אם $\\mathrm{diam}(G)=2$, אז $G=K_{m,n}$.",
      r"""**ג1. הגדרה:** לפי ההרצאה.

**(1ג)** הטענה נכונה. $3\le|A|+|B|\Rightarrow|A|\ge2$ (או $|B|\ge2$).

אם $a_1,a_2\in A$ אז $\mathrm{dist}(a_1,a_2)=2$ (עבור כל $b\in B$ כלשהו). אם $b_1,b_2\in B$ אז $\mathrm{dist}(b_1,b_2)=2$.

אם $a\in A$ ו-$b\in B$ אז $\mathrm{dist}(a,b)=1$. לכן $\mathrm{diam}(K_{m,n})=2$.

**(2ג)** הטענה לא נכונה. דוגמה נגדית: $G=C_5$.""",
      points=9),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "selections_repetition",
      r"(8 נק') מה מספר הפתרונות של $x_1+x_2+x_3\le20$, כאשר $1<x_1,\ -2<x_2,\ 4<x_3$ וכן $x_1,x_2,x_3\in\mathbb{Z}$.",
      r"""$2\le x_1\iff1<x_1;\quad-1\le x_2\iff-2<x_2;\quad5\le x_3\iff4<x_3$

נסמן ב: $0\le y_1\in\mathbb{Z}\Leftarrow y_1=x_1-2$ ו-$0\le y_2\in\mathbb{Z}\Leftarrow y_2=x_2+1$ ו-$0\le y_3\in\mathbb{Z}\Leftarrow y_3=x_3-5$ ו-$0\le y_4\in\mathbb{Z}\Leftarrow y_4=20-(x_1+x_2+x_3)$.

אז נקבל: $x_1+x_2+x_3+y_4=20\iff(y_1+2)+(y_2-1)+(y_3+5)+y_4=20\iff$

$(*)$ $y_1,y_2,y_3,y_4\in\mathbb{N}$, כאשר $y_1+y_2+y_3+y_4=14$.

לכן מספר הפתרונות שווה ל: $680=\frac{17\cdot16\cdot15}{1\cdot2\cdot3}=\binom{17}{3}=\binom{14+3}{4-1}=D(4,14)$.

מכיוון שכל פתרון של בעיה המקורית מתאים לפתרון יחיד של $(*)$ וגם ההפך נכון.""",
      points=8),
    Q(2, "ב", "computation", "divisibility_primes",
      "(11 נק') חשבו את מספר המחלקים של $f(n)$ שמתחלקים ב-12, כאשר $n>9$ וגם\n"
      r"$$\sum_{k=0}^{n}\binom nk\cdot2^{n-k}\cdot\sum_{k=0}^{n}\binom nk\cdot6^k\cdot\sum_{k=0}^{n}\binom nk\cdot5^k=f(n)$$",
      r"""לפי נוסחת הבינום של Newton נקבל:

$$f(n)=(2+1)^n\cdot(6+1)^n\cdot(5+1)^n=3^n\cdot7^n\cdot6^n=2^n\cdot3^{2n}\cdot7^n$$

כאשר $d=2^\alpha\cdot3^\beta\cdot7^\gamma\iff\left(2^2\cdot3\mid d\wedge d\mid f(n)\right)\iff12\mid d\wedge d\mid f(n)$:

$2\le\alpha\le n$, כלומר $n-1$ אופציות; $1\le\beta\le2n$, כלומר $2n$ אופציות; $0\le\gamma\le n$, כלומר $n+1$ אופציות.

מסקנה: ל-$f(n)$ יש $2n(n^2-1)=2n(n-1)(n+1)$ מחלקים שמתחלקים ב-12.""",
      points=11),
    Q(2, "ג", "computation", "function_counting",
      r"נתונה הקבוצה $\Omega=\{f\,/\,f:\{1,2,\dots,10\}\to\{1,2,\dots,n\}\}$, כאשר $n\in\mathbb{N}$ ו-$n>9$. (6 נק')" "\n\n"
      r"**(ג1)** כמה פונקציות מ-$\Omega$ הן **עולות ממש** ומקיימות את התנאי: $f(\{1,2,3\})=\{3,4,5\}$ ?" "\n\n"
      r"**(ג2)** כמה פונקציות מ-$\Omega$ הן **על, חד-חד-ערכיות** וגם מקיימות את התנאי $f(1)=1$ ?",
      r"""**(ג1)** מתקיים: $f(1)=3<f(2)=4<f(3)=5<6\le f(4)<f(5)<\dots<f(10)\le n$ $\iff$ $f$ מתאימה $\iff\{f(4),f(5),\dots,f(10)\}$ היא תת-קבוצה בגודל 7 של $\{6,7,\dots,n\}$.

לכן מספר הפונקציות המתאימות שווה ל: $\binom{n-5}{7}=\frac{(n-5)!}{7!\,(n-12)!}$ (ושווה 0 עבור $n<12$).

**(ג2)** נבדוק לפי מקרים של $n$:

מקרה 1, $n<10$: $f\ne$ חד-חד-ערכית (אין פונקציות מתאימות).

מקרה 2, $n>10$: $f\ne$ על, כי יש בתמונה 10 איברים לכל היותר (אין פונקציות מתאימות).

מקרה 3, $n=10$ ו-$f(1)=1$: $f(2),f(3),\dots,f(10)$ היא תמורה של $\{2,3,4,\dots,9,10\}$ (במקור כתוב $\{2,3,4,\dots,9\}$), ולכן יש $9!$ פונקציות מתאימות.""",
      points=6),

    # ---------------- Q3 ----------------
    Q(3, "א", "computation", "recurrences",
      r"(14 נק') מצאו את הצורה המפורשת של $(a_n)$, כאשר $a_n=6a_{n-1}-9a_{n-2}+3\cdot2^n$ לכל $2\le n\in\mathbb{N}$ וגם $a_1=36,\ a_0=16$. הראו ש: $a_n=O(3^n)$.",
      r"""המשוואה האופיינית היא: $x^2=6x-9\iff(x-3)^2=0\Leftarrow x_1=x_2=3$.

הפתרון הכללי של $a_n=6a_{n-1}-9a_{n-2}$ הוא: $a_n^h=C_1\cdot3^n+C_2\cdot n\cdot3^n$.

פתרון פרטי של $a_n=6a_{n-1}-9a_{n-2}+3\cdot2^n$ בצורה $a_n^p=A\cdot2^n$:

$A\cdot2^n=6\cdot A\cdot2^{n-1}-9\cdot A\cdot2^{n-2}+3\cdot2^n\quad(:2^{n-2})$

$4A=12A-9A+12\Rightarrow A=12\Rightarrow a_n^p=12\cdot2^n$

אז $a_n=C_1\cdot3^n+C_2\cdot n\cdot3^n+12\cdot2^n$ וגם $a_1=18\wedge a_0=8$ (כך כתוב בפתרון; הערכים הנתונים הם $a_0=16,\ a_1=36$, וכך גם במשוואות הבאות)

$\begin{cases}C_1+12=16\Rightarrow C_1=4\\3C_1+3C_2+24=36\Rightarrow C_2=0\end{cases}\Rightarrow a_n=4\cdot3^n+12\cdot2^n\le4\cdot3^n+12\cdot3^n=16\cdot3^n,\ \forall n\in\mathbb{N}\Rightarrow a_n=O(3^n)$""",
      points=14),
    Q(3, "ב", "proof", "euler_phi",
      r"(5 נק') יהי $1<n\in\mathbb{N}$. אם $7^2\mid n$, הראו ש: $\phi(n)$ מתחלק ב-21.",
      r"""אם $7^2\mid n$ אז $n=7^\alpha\cdot m$, כאשר $2\le\alpha\in\mathbb{N}$ ו-$1\le m\in\mathbb{N}$, וגם $\gcd(7,m)=1$. לכן נקבל ש:

$$\phi(n)=\phi(7^\alpha)\cdot\phi(m)=7^\alpha\left(1-\frac17\right)\phi(m)=7^{\alpha-1}\cdot6\cdot\phi(m)$$

מכיוון ש: $\alpha\ge2\Leftarrow\alpha-1\ge1$ נקבל $(21=)\,7\cdot3\mid\phi(n)$.""",
      points=5),
    Q(3, "ג", "computation", "combinations_subsets",
      r"(6 נק') לקבוצה $A=\{1,2,\dots,n\}$ יש 435 תתי-קבוצות בגודל $n-2$. חשבו כמה תתי-קבוצות של $A$ מכילות בדיוק 3 מספרים שמתחלקים ב-4 וגם 6 מספרים ראשוניים.",
      "",
      hold="key-arithmetic: the ink solution prints C(7,3)*C(10,4) = 35*840 = 29400, but 10*9*8*7/(1*2*3*4) = 210, and the set asks for 6 primes, so the count is C(7,3)*C(10,6) = 7350; official key and script disagree",
      confidence="low"),

    # ---------------- Q4 ----------------
    Q(4, "א", "truefalse", "graph_basics",
      r"(4 נק') הוכיחו או הפריכו: לא קיים גרף בלתי מכוון בעל סדרת הדרגות: $6,4,4,2,2,2,2$.",
      r"""ניקח גרף $G$ בלתי מכוון בעל סדרת הדרגות $2,2,2,2,4,4,6$.

נוריד את הצומת $v$ מדרגה 6: $G-v$ (הצומת $v$ מחובר לכל שאר הצמתים). אז סדרת הדרגות של $H=G-v$: $1,1,1,1,3,3$, וקיים גרף $H$ כזה: שני צמתים סמוכים בדרגה 3, ולכל אחד מהם שני עלים.

הוספת צומת $v$ המחובר לכל 6 הצמתים של $H$ נותנת את $G$.

מסקנה: קיים גרף $G$ כזה, ולכן הטענה אינה נכונה.""",
      verdict=False, points=4),
    Q(4, "ב", "proof", "graph_basics",
      r"(5 נק') אם $T=(V,E)$ הוא עץ בעל 4 צלעות, הראו שהמשלים שלו אינו דו-צדדי.",
      r"""מכיוון ש: $T$ עץ, נקבל ש: $|V|=|E|+1=5$.

כמו כן $T=(A,B,E)$ הוא דו-צדדי (כי עץ הוא דו-צדדי) וגם $|V|=|A|+|B|=5$, ולכן $\max\{|A|,|B|\}\ge3$.

נניח ש: $\max\{|A|,|B|\}=|A|$, אז $|A|\ge3$, ולכן ב-$\overline{T}$ יש $C_3$ (על שלושה צמתים מ-$A$), מעגל אי-זוגי.

מסקנה: $\overline{T}$ אינו דו-צדדי.""",
      points=5),
    Q(4, "ג", "computation", "euler_hamilton",
      "יהיו $G=(V,E)$ הגרף שבציור ו-$H$ המשלים שלו. (16 נק')\n\n"
      "[הציור: גרף על 8 צמתים $v_1,\\dots,v_8$ עם 12 הצלעות\n"
      "$v_1v_2,\\ v_1v_6,\\ v_1v_8,\\ v_2v_3,\\ v_2v_7,\\ v_3v_4,\\ v_3v_8,\\ v_4v_5,\\ v_4v_7,\\ v_5v_6,\\ v_5v_8,\\ v_6v_7$]\n\n"
      "**ג1.** (2+4 נק') הראו ש: $H$ הוא גרף EULER. האם $G$ הוא גרף Hamilton?\n\n"
      "**ג2.** (5 נק') הראו ש-$H$ קיים $P_4$ כתת-גרף מושרה. האם ב-$H$ קיים $C_4$ כתת-גרף מושרה?\n\n"
      "**ג3.** (5 נק') הראו ש-$H$ קיים $K_4$ כתת-גרף מושרה. האם ב-$H$ קיים $C_5$ כתת-גרף מושרה?",
      r"""**ג1.** $|V|=8$ ו-$G$ הוא 3-רגולרי, לכן $H$ הוא $(8-3-1)$-רגולרי, כלומר $\deg_H(v)=4\ge\frac82$ לכל $v\in V$.

לפי משפט Dirac ($H$ גרף Hamilton) $H$ קשיר, ו-$\deg_H(v)=4$ זוגי לכל $v\in V$. לכן $H$ הוא גרף Euler.

ב-$G$ יש מעגל Hamilton: $v_1,v_2,v_3,v_8,v_5,v_4,v_7,v_6,v_1$.

**ג2.** $P_4\cong\overline{P_4}$.

ב-$G$ קיים $P_4$: $v_1,v_2,v_3,v_4$ (מושרה) $\Rightarrow$ ב-$H$ קיים $P_4$ מושרה: $v_2,v_4,v_1,v_3$.

ב-$G$ קיים (על הצמתים $v_1,v_2,v_5,v_4$) תת-גרף מושרה בעל שתי צלעות בלבד, $(v_1,v_2)$ ו-$(v_5,v_4)$ $\Rightarrow$ ב-$H$ קיים $C_4$ מושרה ($v_1,v_4,v_2,v_5$).

**ג3.** $K_4$ ב-$H$: הצמתים $v_1,v_3,v_5,v_7$ ב-$G$ הם קבוצה בלתי תלויה (אין צלעות ביניהם) $\Rightarrow$ ב-$H$ קיים $K_4$ מושרה.

ב-$H$ לא קיים $C_5$ מושרה: $G$ הוא דו-צדדי ולכן אין בו מעגל אי-זוגי $\Rightarrow$ ב-$G$ לא קיים $C_5$ $\Rightarrow$ ב-$H$ לא קיים $C_5$ (כי $\overline{C_5}\cong C_5$).""",
      points=16),

    # ---------------- Q5 ----------------
    Q(5, "א", "computation", "combinations_subsets",
      r"(7 נק') לקבוצה $A=\{1,2,\dots,n\}$ יש 1276 תתי-קבוצות בגודל 2 לכל היותר. חשבו את מספר תתי-הקבוצות של $A$ המכילות בדיוק 5 מספרים שמתחלקים ב-5 וגם 2 מספרים שמתחלקים ב-11.",
      r"""נתון ש: $1+n+\binom n2=1276\iff n^2+n-2550=0$

$$n_{1,2}=\frac{-1\pm101}{2}=\begin{cases}-51\\50\end{cases}$$

($-51$ לא מתאים), ולכן $A=\{1,2,\dots,50\}$.

ב-$A$ יש $10=\left\lfloor\frac{50}{5}\right\rfloor$ מספרים שמתחלקים ב-5, וגם $4=\left\lfloor\frac{50}{11}\right\rfloor$ מספרים שמתחלקים ב-11.

בלי חפיפה: יש $\binom{10}{5}$ אופציות עבור 5 מספרים שמתחלקים ב-5, ו-$\binom42$ אופציות עבור 2 מספרים שמתחלקים ב-11.

מסקנה: $\binom{10}{5}\cdot\binom42=252\cdot6=1512$ תתי-קבוצות.""",
      points=7),
    Q(5, "ב", "proof", "graph_connectivity",
      r"(13 נק') יהי $G=(V,E)$ גרף לא מכוון בעל $E\ne\emptyset$. הוכיחו או הפריכו:" "\n\n"
      r"**(ב1)** (4 נק') אם $|E|>|V|$, אזי $G$ הוא קשיר." "\n\n"
      r"**(ב2)** (4 נק') אם $|E|<|V|$, אזי $G$ הוא לא קשיר." "\n\n"
      r"**(ב3)** (5 נק') אם $\deg(v)=\text{odd}$ לכל $v\in V$ וגם $T=(V,U)$ הוא עץ פורש כלשהו של $G$, אזי $|U|$ הוא מספר אי-זוגי.",
      r"""**(ב1)** הטענה לא נכונה. דוגמה נגדית: $G=K_4$ יחד עם צומת מבודד $v_5$ (ל-$G$ יש 6 צלעות ו-5 צמתים, והוא אינו קשיר).

**(ב2)** הטענה לא נכונה. דוגמה נגדית: $P_4$ (3 צלעות, 4 צמתים, והוא קשיר).

**(ב3)** הטענה נכונה. $|V|=n$ הוא מספר זוגי (בעזרת משפט הדרגות, כי כל הדרגות אי-זוגיות), ו-$|U|=|V|-1=n-1$ הוא אי-זוגי.""",
      points=13),
    Q(5, "ג", "computation", "selections_repetition",
      r"(5 נק') נתונה $A=\{a,b,c,d\}$. חשבו כמה סדרות עם חזרות בנות 7 אותיות מ-$A$ ניתן ליצור, כך שכל סדרה מתחילה ב-$a$ ומסתיימת ב-$d$ וגם $d$ מופיעה פעם אחד בלבד.",
      r"""כל סדרה היא בצורה $a\ \_\ \_\ \_\ \_\ \_\ d$ (חמש האותיות האמצעיות נבחרות מ-$\{a,b,c\}$).

מסקנה: $243=3^5$ סדרות.""",
      points=5),

    # ---------------- Q6 ----------------
    Q(6, "א", "computation", "trees",
      r"יהי $T=(V,E)$ עץ בעל $10<n=|V|$. ידוע ש-$T$ קיים צומת יחיד בדרגה 2 וכל צומת אחר הוא בדרגה 1 או 3. (12 נק')" "\n\n"
      r"**(1א)** הראו ש: $n$ הוא מספר אי-זוגי." "\n\n"
      r"**(2א)** חשבו את מספר העלים של $T$ כפונקציה של $n$." "\n\n"
      r"**(3א)** האם המשלים של $T$ הוא גרף Hamilton?" "\n\n"
      r"**(4א)** האם המשלים של $T$ הוא גרף Euler?",
      r"""**(1א)** ב-$T$ יש בדיוק $n-1$ צמתים בדרגה אי-זוגית. לכן $n-1$ הוא מספר זוגי (כי מספר הצמתים מדרגה אי-זוגית זוגי), כלומר $n$ אי-זוגי.

**(2א)** נסמן ב: $p$ את מספר העלים. לפי משפט הדרגות נקבל:

$$1\cdot p+2\cdot1+3\cdot(n-p-1)=2(n-1)\iff p+2+3n-3p-3=2n-2\Rightarrow p=\frac{n+1}{2}$$

**(3א)** לכל $v\in V$ מתקיים $\deg_{\overline{T}}(v)\in\{n-2,n-3,n-4\}$, ו-$n-4\ge\frac n2\iff n\ge8$ (נכון, כי $n>10$). לכן $\overline{T}$ הוא גרף Hamilton (לפי משפט Dirac).

**(4א)** לא נכון, כי לא יכול להיות שהמספרים $n-2,\ n-3,\ n-4$ יהיו זוגיים. לכן $\overline{T}$ אינו גרף Euler.""",
      points=12),
    Q(6, "ב", "computation", "function_counting",
      r"(13 נק') תהי קבוצת הפונקציות $\Omega=\{f\,/\,f:\{1,2,\dots,10\}\to\{1,2,\dots,10\}\}$. כמה $f\in\Omega$ הן על \ חד-חד-ערכיות \ הפיכות ומקיימות $f(1)=1$ או $f(10)=10$ ?",
      r"""$f\in\Omega$ היא על \ חד-חד-ערכית \ הפיכה $\leftrightarrow$ "$f(1),f(2),\dots,f(10)$" היא תמורה של $\{1,2,\dots,10\}$.

נסמן ב: $A_1$ קבוצת הפונקציות על המקיימות $f(1)=1$, $|A_1|=9!$.

נסמן ב: $A_2$ קבוצת הפונקציות על המקיימות $f(10)=10$, $|A_2|=9!$.

לכן יש לחשב את $|A_1\cup A_2|$, כלומר יש לחשב את $|A_1\cup A_2|=|A_1|+|A_2|-|A_1\cap A_2|$.

מכיוון ש: $f\in A_1\cap A_2\leftrightarrow$ "$f(1),f(2),\dots,f(10)$" = תמורה של $\{1,2,\dots,10\}$ שמקיימת את התנאים: $f(1)=1$ וגם $f(10)=10$, ניתן לאמר ש: $f\in A_1\cap A_2\leftrightarrow$ "$f(2),\dots,f(9)$" = תמורה של $\{2,3,\dots,9\}$.

מסקנה: $|A_1\cup A_2|=|A_1|+|A_2|-|A_1\cap A_2|=9!+9!-8!=8!\,(9+9-1)=8!\cdot17$.""",
      points=13),
]

for q in questions:
    if q.get("hold"):
        for k in ("solution", "solutionSource", "official"):
            q.pop(k, None)

exam = {
    "examCode": "25B-A",
    "examLabel": "אביב 2025, מועד א'",
    "year": 2025,
    "examDate": "06.07.2025",
    "sourceFile": "25B-A exam (typed, pp.1-9)",
    "solutionFile": "student-solution-1 (handwritten, same PDF)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
