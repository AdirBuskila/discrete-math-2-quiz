# -*- coding: utf-8 -*-
"""Generator for tools/raw/20B-A.json -- discrete-math-2, spring 2020, moed A (02.07.2020).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_20B-A.py

Source: the two solved files "solution part 1" (9 pp: Q1-Q3) and "solution part 2" (7 pp: Q4-Q6), typed questions with
handwritten ink solutions in blue/green/red. 6 questions x 25 pts. Header: course 20066, moed A, semester B, 3 hours, no aids.
The solutions were read by vision; the Hebrew prose is re-typeset from the ink, formulas and numbers as written.
IMPORTANT: the third file of this sitting ("without solution", 4 pp) is a DIFFERENT VERSION of the paper (Q1a asks about
4-subsets of {1..9}, Q1c about complements of K_{m,n} being bipartite, Q2 uses {1..9} ...). Only the version that the two
solved files answer is transcribed; the other version has no solution and is not in the bank.
Structure: Q1 = five "define the term, then answer a short question" parts (5 pts each, no per-part points printed).
Q2 a (5+5), b (4+4), c (2+5). Q3 a (10), b (10), c (5). Q4 a (8), b (6+6), c (5). Q5 a (6), b (10), c (3+3+3).
Q6 a (3+3+6), b (7), c (6). Parts with numbered sub-questions are ONE item.

Transcription notes
- Q1.e (p.4): cardinality has no topic in course.config.json; filed under function_counting (bijections). The orchestrator may
  want a "cardinality" topic (also Q6.b).
- Q1.b (p.2): the ink definition reads phi(n) = |{m : 1<=m<=n and gcd(n,m)}| (the "=1" is missing). Obvious omission, written with
  "=1" (quiet fix, logged in docs/ASK_ADIR.md).
- Q1.d (p.3): the ink checks n=2,3 (complement not connected) and n=4 (P4 is its own complement) and stops; the argument for
  n>=5 is not written. The solution adds the one-line reason (a triangle v1 v3 v5 in the complement) as a remark.
- Q2.a (p.5): the ink answer to (a2) is 2560 in both derivations (C(7,2)*5! and 7!/2). Both equal 2520: final-answer error,
  shipped with the standing ruling (solved, official false, correction label). Checked by brute force.
- Q2.c (p.6): in the proof of (c2) the first expression for phi(n) carries an extra factor m: "3^a 5^b m (1-1/3)(1-1/5) phi(m)".
  The next line (2*4*3^(a-1)*5^(b-1)*phi(m)) is right. Intermediate slip: written as phi(3^a)phi(5^b)phi(m) (quiet fix, logged).
- Q6.a (p.6): the ink has (1-2/3) in the first line, the next line uses 1/2 * 2/3 and the result 2^(5n) 3^(n-1) is right.
  Intermediate slip: written as (1-1/3) (quiet fix, logged).
- Q5.c / Q6.c (pp.5 and 7 of part 2): both questions use the same printed picture (the Petersen graph on a..j), cropped from
  the PDF image (no ink on it).

Checks (tools/verify/20B-A/verify.py, brute force + sympy + networkx):
Q1a 48, Q1b 32, Q1c all m,n<8, Q1d only n=4 (n<14), Q2a1 720 and a2 2520, Q2b 144 and 72, Q2c phi(1)=phi(2) and 8|phi(n) for 15|n,
Q3a 45, Q3b closed form n<40, Q3c Euler trail in the complement of P15, Q4a n=11 and 1024, Q4b 15 and 360, Q4c n 2^(n-1),
Q5a not graphical, Q5b 455, Q5c complement 6-regular, Euler, triangle {a,d,g}, Q6a phi(ab), Q6c diameter 2.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "20B-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** המונח: תמורה של קבוצה.\n\n"
      r"**א2.** שאלה: כמה תמורות של הקבוצה $\{1,2,3,4,5\}$ מתחילות ב: 1 או ב: 2?",
      r"""**א1. הגדרה:** תהי $A$ קבוצה בת $n\ge1$ איברים. כל סדרה בלי חזרות של כל האיברים של $A$ נקראת תמורה של $A$.

או: כל חליפה של כל האיברים של $A$ נקראת תמורה של $A$.

**א2.** כל תמורה מתאימה היא בצורה: [אות ראשונה: 1 או 2] ואחריה תמורה של 4 האיברים הנותרים. לאיבר הראשון יש 2 אפשרויות ולארבעת המקומות האחרים $4!$ אפשרויות.

מסקנה: $2\cdot4!=48$ תמורות."""),
    Q(1, "ב", "computation", "euler_phi",
      "**ב1.** המונח: פונקציית EULER.\n\n"
      r"**ב2.** שאלה: חשבו את $\phi(5!)$.",
      r"""**ב1. הגדרה:** פונקציית EULER היא $\phi:\mathbb{N}^+\to\mathbb{N}^+$ המוגדרת לפי הכלל: לכל $n$

$$\phi(n)=|\{m:1\le m\le n\wedge\gcd(n,m)=1\}|$$

**ב2.**

$$\phi(5!)=\phi(120)=\phi(2^3\cdot3\cdot5)=120\cdot\left(1-\frac12\right)\left(1-\frac13\right)\left(1-\frac15\right)=120\cdot\frac12\cdot\frac23\cdot\frac45=32$$"""),
    Q(1, "ג", "computation", "graph_basics",
      "**ג1.** המונח: גרף דו-צדדי שלם.\n\n"
      r"**ג2.** שאלה: חשבו את מספר הצלעות של המשלים של $K_{m,n}$.",
      r"""**ג1. הגדרה:** $G=K_{m,n}=(A,B,E)$ כאשר

$$\begin{cases}A=\{a_1,\dots,a_m\},\ B=\{b_1,\dots,b_n\}\\E=\{(a_i,b_j):i=1,\dots,m;\ j=1,2,\dots,n\}\end{cases}$$

**ג2.** פתרון 1: $\overline{K_{m,n}}=K_m\cup K_n$, ולכן

$$|\overline E|=\frac{m(m-1)}2+\frac{n(n-1)}2$$

פתרון 2: $|\overline E|=\frac{|V|(|V|-1)}2-|E|=\frac{(m+n)(m+n-1)}2-m\cdot n$."""),
    Q(1, "ד", "computation", "graph_connectivity",
      "**ד1.** המונח: גרף לא מכוון קשיר.\n\n"
      r"**ד2.** שאלה: מצאו $2\le n$ עבורו המשלים של $P_n$ הוא קשיר וגם גרף דו-צדדי.",
      r"""**ד1. הגדרה:** גרף $G=(V,E)$ לא מכוון נקרא קשיר אם לכל $x,y\in V$ קיים ב-$G$ מסלול המחבר אותם.

**ד2.** $\overline{P_2}\ne$ קשיר, $\overline{P_3}\ne$ קשיר.

$\overline{P_4}=P_4$ (המשלים של $P_4$ הוא $P_4$ עצמו), והוא קשיר ודו-צדדי.

מסקנה: אפשרי עבור $n=4$.

הערה: בכתב היד לא כתוב הנימוק ל-$n\ge5$: בכל $\overline{P_n}$ עם $n\ge5$ יש משולש $v_1,v_3,v_5$ (אין ביניהם צלעות ב-$P_n$), ולכן הוא אינו דו-צדדי."""),
    Q(1, "ה", "truefalse", "function_counting",
      "**ה1.** המונח: קבוצות שוות עוצמה.\n\n"
      r"**ה2.** שאלה: האם הקבוצות $\mathbb{Q}$ ו-$A=\{x:x\in\mathbb{Z},\ x<-5\}$ שוות עוצמה?",
      r"""**ה1. הגדרה:** הקבוצות $A,B$ נקראות קבוצות שוות עוצמה אם קיימת פונקציה $f:A\to B$ על וגם חד-חד-ערכית.

**ה2.** כן. $A\subset\mathbb{Z}\Leftarrow|A|\le|\mathbb{Z}|$.

$A$ אינסופית $\Rightarrow$ קיימת $B\subseteq A$ כך ש: $|B|=|\mathbb{N}|$.

$\Leftarrow|\mathbb{N}|\le|A|\le|\mathbb{Z}|=|\mathbb{N}|=|\mathbb{Q}|\Leftarrow|A|=|\mathbb{Q}|$.""",
      verdict=True),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "permutations_arrangements",
      r"(5+5 נק') מהו מספר התמורות של הקבוצה $\{1,2,3,4,5,6,7\}$ שבהן:" "\n\n"
      r"**א1.** המספרים 1, 2, 3 נמצאים בסמיכות?" "\n\n"
      r"**א2.** המספר 1 נמצא לפני 2?",
      r"""הפתרון הרשמי עם תיקון: בסעיף א2 נכתב בכתב היד $2560$ (בשתי הדרכים), אך $\binom72\cdot5!=\frac{7!}2=2520$.

**א1.** כל תמורה מתאימה היא בצורה: [בלוק של $1,2,3$] ו-$4,5,6,7$, כלומר תמורה של הקבוצה $\{a,4,5,6,7\}$ ($5!$ אפשרויות) כאשר $a=$ סידור של $1,2,3$ ($3!$ אפשרויות).

מסקנה: $720=3!\cdot5!$ תמורות מתאימות.

**א2.** כל תמורה מתאימה היא בצורה הבאה: שני מקומות עבור "1" ו-"2" ($\binom72$ אפשרויות, כאשר 1 במקום המוקדם יותר), ובשאר המקומות יש תמורה של $\{3,\dots,7\}$ ($5!$ אפשרויות).

מסקנה: יש $\binom72\cdot5!=2520$ תמורות.

ובאופן אחר: כל תמורה מתאימה מוגדרת לפי תמורה כלשהי כאשר מחליפים את המקומות של "1" ו-"2" אם צריך, ולכן התשובה היא $\frac{7!}2=2520$.""",
      solutionSource="solved", official=False, points=10),
    Q(2, "ב", "computation", "permutations_arrangements",
      r"(4+4 נק') תהיינה הקבוצות $A=\{a,b,c,d\}$ וגם $B=\{x,y,z\}$." "\n\n"
      r"**ב1.** כמה סדרות שונות בנות 7 אותיות אפשר ליצור כך שכל סידרה מתחילה ב-4 אותיות מ-$A$ ושאר האותיות מ-$B$?" "\n\n"
      r"**ב2.** כמה סדרות מ-(ב1) מקיימות התנאים הבאים: כל אות מופיע פעם אחת בסדרה וכל סידרה מתחילה ב-$a$ או ב-$b$?",
      r"""**ב1.** כל סדרה מתאימה מורכבת על ידי 2 תמורות: 4 המקומות הראשונים הם תמורה של $A$ ($4!$ אפשרויות) ו-3 המקומות האחרונים הם תמורה של $B$ ($3!$ אפשרויות).

מסקנה: $144=3!\cdot4!$ סדרות.

**ב2.** כל סדרה מתאימה מורכבת על ידי 2 תמורות: 4 המקומות הראשונים הם תמורה של $A$ שמתחילה ב-$a$ או ב-$b$ (2 אפשרויות לאות הראשונה ו-$3!$ אפשרויות לשלוש הבאות), ו-3 המקומות האחרונים הם תמורה של $B$ ($3!$ אפשרויות).

מסקנה: $72=2\cdot3!\cdot3!$ סדרות.""",
      points=8),
    Q(2, "ג", "proof", "euler_phi",
      r"**ג1.** (2 נק') האם פונקציית Euler $\phi$ היא חד-חד-ערכית?" "\n\n"
      r"**ג2.** (5 נק') אם $n\in\mathbb{N}$ וגם $15\mid n$, הראו ש: $8\mid\phi(n)$.",
      r"""**ג1.** לא. $1\ne2$ אבל $\phi(1)=1=\phi(2)$, ולכן $\phi$ אינה חד-חד-ערכית.

**ג2.** $15\mid n\Rightarrow n=3^\alpha\cdot5^\beta\cdot m$, כאשר $\gcd(m,3)=1=\gcd(m,5)$, $\alpha\ge1$, $\beta\ge1$ ו-$\alpha,\beta\in\mathbb{N}$.

$$\phi(n)=\phi(3^\alpha)\phi(5^\beta)\phi(m)=3^\alpha\cdot5^\beta\cdot\left(1-\frac13\right)\left(1-\frac15\right)\phi(m)=2\cdot4\cdot3^{\alpha-1}\cdot5^{\beta-1}\cdot\phi(m)$$

מסקנה: $8\mid\phi(n)$.""",
      points=7),

    # ---------------- Q3 ----------------
    Q(3, "א", "computation", "sum_product_inclusion",
      r"(10 נק') כמה מספרים מהקבוצה $\Omega=\{1,2,3,\dots,100\}$ אינם מתחלקים ב-3 או ב-5 או ב-7?",
      r"""נסמן: $A_1=\{n\in\Omega:3\mid n\}\Rightarrow|A_1|=\left\lfloor\frac{100}3\right\rfloor=33$

$A_2=\{n\in\Omega:5\mid n\}\Rightarrow|A_2|=\left\lfloor\frac{100}5\right\rfloor=20$

$A_3=\{n\in\Omega:7\mid n\}\Rightarrow|A_3|=\left\lfloor\frac{100}7\right\rfloor=14$

מספר הפתרונות המבוקש הוא

$|\Omega-A_1\cup A_2\cup A_3|=|\Omega|-|A_1\cup A_2\cup A_3|=100-S_1+S_2-S_3$ כאשר:

$S_1=|A_1|+|A_2|+|A_3|=67$

$S_2=|A_1\cap A_2|+|A_1\cap A_3|+|A_2\cap A_3|=\left\lfloor\frac{100}{15}\right\rfloor+\left\lfloor\frac{100}{21}\right\rfloor+\left\lfloor\frac{100}{35}\right\rfloor=6+4+2=12$

$S_3=|A_1\cap A_2\cap A_3|=\left\lfloor\frac{100}{3\cdot5\cdot7}\right\rfloor=\left\lfloor\frac{100}{105}\right\rfloor=0$

מסקנה: $|\Omega-A_1\cup A_2\cup A_3|=100-67+12-0=45$""",
      points=10),
    Q(3, "ב", "computation", "recurrences",
      r"(10 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=14,\ a_1=27$ וגם $a_n+a_{n-2}=15\cdot2^n,\ n\ge2$.",
      r"""* המשוואה האופיינית: $x^2+1=0\Rightarrow x_{1,2}=\pm i\Rightarrow x_{1,2}=\cos\frac\pi2\pm i\sin\frac\pi2$.

* הפתרון הכללי של $a_n+a_{n-2}=0$ הוא: $a_n^{(h)}=C_1\cos\frac{n\pi}2+C_2\sin\frac{n\pi}2$.

* פתרון פרטי של $(**)\ a_n+a_{n-2}=15\cdot2^n$ הוא בצורה: $a_n^{(p)}=A\cdot2^n$. נציב ב-$(**)$:

$$A\cdot2^n+A\cdot2^{n-2}=15\cdot2^n\ \Big|\ :2^{n-2}\Rightarrow4A+A=15\cdot4\Rightarrow A=12\Rightarrow a_n^{(p)}=12\cdot2^n$$

* הפתרון הרקורסיבי הוא: $a_n=C_1\cos\frac{n\pi}2+C_2\sin\frac{n\pi}2+12\cdot2^n$.

$a_0=C_1+12=14\Rightarrow C_1=2$

$a_1=C_2+24=27\Rightarrow C_2=3$

לכן: $a_n=2\cos\frac{n\pi}2+3\sin\frac{n\pi}2+12\cdot2^n$ לכל $n\in\mathbb{N}$.""",
      points=10),
    Q(3, "ג", "proof", "euler_hamilton",
      r"(5 נק') הראו שהמשלים של $P_{15}$ הוא גרף בעל מסלול Euler.",
      r"""צריך להראות ש: $\overline{P_{15}}=$ גרף קשיר ובעל בדיוק 2 צמתים בדרגה אי-זוגית.

$P_{15}$: $v_1,v_2,v_3,\dots,v_{15}$.

$\deg_{P_{15}}(v_1)=1=\deg_{P_{15}}(v_{15})\Rightarrow\deg_{\overline{P_{15}}}(v_1)=\deg_{\overline{P_{15}}}(v_{15})=13$

$\forall i=2,\dots,14\Rightarrow\deg_{P_{15}}(v_i)=2\Rightarrow\deg_{\overline{P_{15}}}(v_i)=12$

לכל $v$: $\deg_{\overline{P_{15}}}(v)\ge\frac{15}2\Rightarrow$ (DIRAC) $\overline{P_{15}}=$ גרף Hamilton, ולכן $\overline{P_{15}}=$ קשיר $\wedge$ יש בדיוק 2 צמתים בדרגה אי-זוגית.

מסקנה: ב-$\overline{P_{15}}$ יש מסלול EULER.""",
      points=5),

    # ---------------- Q4 ----------------
    Q(4, "א", "computation", "combinations_subsets",
      r"(8 נק') תהי $A=\{1,2,3,\dots,n\}$, כאשר $2<n$. אם לקבוצה $A$ יש 55 תתי-קבוצות בגודל 2, חשבו כמה תתי-קבוצות בגודל **זוגי** יש לקבוצה $A$.",
      r"""נתון: $\frac{n(n-1)}2=55\iff\binom n2=55$

$n^2-n-110=0\Rightarrow n_{1,2}=\frac{1\pm\sqrt{441}}2=\frac{1\pm21}2\Rightarrow n=11$

אז $|A|=11$ ולכן יש ל-$A$ $2^{10}=2^{11-1}=1024$ תתי-קבוצות בגודל זוגי.""",
      points=8),
    Q(4, "ב", "computation", "function_counting",
      r"(6+6 נק') תהי $\Omega$ קבוצת הפונקציות $f:\{1,2,3,4\}\to\{1,2,3,4,5,6\}$." "\n\n"
      r"**ב1.** כמה פונקציות מ-$\Omega$ הן עולות ממש?" "\n\n"
      r"**ב2.** כמה פונקציות מ-$\Omega$ הן חד-חד-ערכיות?",
      r"""**ב1.** $f$ עולה ממש $\iff$ $f$ נקבעת על ידי הקבוצה $\{f(1),f(2),f(3),f(4)\}$, שהיא תת-קבוצה בגודל 4 של $\{1,2,\dots,6\}$. לכן יש $\binom64=15$ פונקציות עולות ממש.

**ב2.** $f$ חח"ע $\iff$ $f(1),f(2),f(3),f(4)$ היא סדרה ללא חזרות באורך 4 מתוך $\{1,2,\dots,6\}$. לכן יש $P(6,4)=360$ פונקציות חח"ע.""",
      points=12),
    Q(4, "ג", "computation", "combinations_subsets",
      r"(5 נק') תהי $A=\{1,2,3,\dots,n\}$, כאשר $2<n$. חשבו את המספר $m=\sum_{B\in P(A)}|B|$.",
      r"""$$m=\sum_{k=0}^{n}k\cdot\binom nk$$

לכל $A$ יש: $\binom n1$ תתי-קבוצות בגודל 1, ..., $\binom nk$ תתי-קבוצות בגודל $k$, ..., $\binom nn$ תתי-קבוצות בגודל $n$.

לפי הבינום: $(x+1)^n=\sum_{k=0}^{n}\binom nkx^k$. נגזור:

$$n(x+1)^{n-1}=\sum_{k=0}^{n}\binom nk\cdot k\cdot x^{k-1}$$

נציב $x=1$: $n\cdot2^{n-1}=\sum_{k=0}^{n}\binom nk\cdot k$.

מסקנה: $m=n\cdot2^{n-1}$.""",
      points=5),

    # ---------------- Q5 ----------------
    Q(5, "א", "truefalse", "graph_basics",
      r"(6 נק') האם קיים גרף לא מכוון שסדרת הדרגות שלו היא $(1,1,2,3,3,3,6,7,8)$?",
      r"""נניח, בשלילה, שקיים גרף $G=(V,E)$ כזה. אז $V=\{v_i:1\le i\le9\}$, ויש $v_8,v_9$ כך ש: $\deg(v_8)=7,\ \deg(v_9)=8$.

$v_9$ מחובר לכל שאר הצמתים, ולכן סדרת הדרגות של $G-v_9$ היא: $(0,0,1,2,2,2,5,6)$.

ב-$G-v_9$ הצומת $v_8$ הוא בדרגה 6, אבל בגרף הזה יש שני צמתים מבודדים (בדרגה 0), ולכן לצומת $v_8$ יש לכל היותר 5 שכנים. בלתי אפשרי.

מסקנה: לא קיים $G$ שסדרת הדרגות שלו היא $(1,1,\dots,8)$.""",
      verdict=False, points=6),
    Q(5, "ב", "computation", "selections_repetition",
      r"(10 נק') תהי הקבוצה $A=\{a,b,c,d\}$. כמה מלים בנות 22 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: אות $a$ מופיעה לפחות 3 פעמים, אות $b$ מופיעה לפחות פעם אחת, אות $c$ מופיעה לפחות 4 פעמים ואות $d$ מופיעה לפחות פעמיים.",
      r"""נסמן: $x_1$ מופיעה פעמים $a$, $x_2$ מופיעה פעמים $b$, $x_3$ מופיעה פעמים $c$, $x_4$ מופיעה פעמים $d$:

$3\le x_1,\ 1\le x_2,\ 4\le x_3,\ 2\le x_4$ ו-$x_1+x_2+x_3+x_4=22$.

לכן מספר המילים שווה למספר הפתרונות של:

$$\begin{cases}x_1+x_2+x_3+x_4=22\\x_1\ge3,\ x_2\ge1,\ x_3\ge4,\ x_4\ge2\end{cases}$$

והוא שווה ל:

$$D(4,22-3-1-4-2)=D(4,12)=\binom{4-1+12}{4-1}=\binom{15}3=\frac{15\cdot14\cdot13}{1\cdot2\cdot3}=455$$""",
      points=10),
    Q(5, "ג", "computation", "euler_hamilton",
      r"(3+3+3 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ג1.** האם המשלים של $G$ הוא גרף Hamilton?" "\n\n"
      r"**ג2.** האם המשלים של $G$ הוא גרף Euler?" "\n\n"
      r"**ג3.** האם המשלים של $G$ הוא דו-צדדי?",
      r"""$n=|V|=10$.

**ג1.** $G$ הוא 3-רגולרי $\Rightarrow$ לכל $v\in V$ מתקיים $\frac{10}2\le\deg_{\overline G}(v)=6$. לפי משפט DIRAC, $\overline G$ הוא גרף Hamilton. כן.

**ג2.** $\overline G$ הוא גרף Hamilton, ולכן $\overline G$ קשיר, וגם לכל $v\in V$: $\deg_{\overline G}(v)=6$, כלומר כל הדרגות זוגיות. לכן $\overline G$ הוא גרף Euler. כן.

**ג3.** לא. ב-$\overline G$ קיים $C_3$ על הצמתים $a,d,g$ (אין ביניהם צלעות ב-$G$), ולכן $\overline G$ אינו דו-צדדי.""",
      points=9, contextId="c1"),

    # ---------------- Q6 ----------------
    Q(6, "א", "computation", "euler_phi",
      r"(3+3+6 נק') יהי $4<n\in\mathbb{N}$. חשבו את $\phi(a\cdot b)$, כאשר $a=\sum_{k=0}^{n}\binom nk\cdot3^k\cdot5^{n-k}$ וגם $b=\sum_{k=0}^{n}\binom nk\cdot7^k\cdot5^{n-k}$.",
      r"""לפי הבינום של Newton:

$a=(3+5)^n=8^n$, $b=(7+5)^n=12^n$

$$\phi(ab)=\phi(8^n\cdot12^n)=\phi(2^{3n}\cdot2^{2n}\cdot3^n)=\phi(2^{5n}\cdot3^n)=2^{5n}\cdot3^n\cdot\left(1-\frac12\right)\left(1-\frac13\right)=2^{5n}\cdot3^n\cdot\frac12\cdot\frac23=2^{5n}\cdot3^{n-1}$$""",
      points=12),
    Q(6, "ב", "proof", "function_counting",
      r"(7 נק') הראו שהקבוצות $(2,7]$ ו-$(0,1)$ שוות עוצמה.",
      r"""הפונקציה $f:(0,1)\to(2,7]$, $f(x)=x+2$, היא חח"ע, ולכן $|(0,1)|\le|(2,7]|$.

בנוסף, $(2,7]\subset\mathbb{R}$, ולכן $|(2,7]|\le|\mathbb{R}|=|(0,1)|$.

לפי משפט קנטור-שרדר-ברנשטיין, מסקנה: $|(0,1)|=|(2,7]|$.""",
      points=7),
    Q(6, "ג", "computation", "graph_connectivity",
      r"(6 נק') מצא את הקוטר של הגרף שבציור הבא:",
      r"""מספיק לחשב את המרחקים מ-$a$ ומ-$f$ ולבחור את הגדול ביותר:

$\operatorname{dist}(a,b)=\operatorname{dist}(a,f)=\operatorname{dist}(a,e)=1$, $\operatorname{dist}(a,v)=2$ לכל $v\in\{j,g,i,h,c,d\}$

$\operatorname{dist}(f,a)=\operatorname{dist}(f,i)=\operatorname{dist}(f,h)=1$, $\operatorname{dist}(f,v)=2$ לכל $v\in\{j,b,c,d,e,g\}$

מסקנה: $\operatorname{diam}(G)=2$ ($=\max\{\operatorname{dist}(x,y):x,y\in V\}$).""",
      points=6, contextId="c2"),
]

exam = {
    "examCode": "20B-A",
    "examLabel": "אביב 2020, מועד א'",
    "year": 2020,
    "examDate": "02.07.2020",
    "sourceFile": "20B-A exam (typed, solved version, parts 1 and 2)",
    "solutionFile": "20B-A handwritten solution (parts 1 and 2, same PDFs)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 5 סעיף ג)",
               "image": "images/exams/20B-A-Q5c.png", "caption": "הגרף G על 10 צמתים a,...,j"},
        "c2": {"kind": "image", "title": "הגרף (שאלה 6 סעיף ג)",
               "image": "images/exams/20B-A-Q6c.png", "caption": "הגרף על 10 צמתים a,...,j"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
