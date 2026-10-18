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
      r"""הערה: בניסוח המילולי של ב1 לא נאמר שהאותיות שונות זו מזו, ולכן הקריאה המילולית מאפשרת חזרות ונותנת $4^4\cdot3^3=6912$. הפתרון מניח שכל אות משמשת פעם אחת, ולכן התשובה במפתח היא $144$ (וב2: $72$).

**ב1.** כל סדרה מתאימה מורכבת על ידי 2 תמורות: 4 המקומות הראשונים הם תמורה של $A$ ($4!$ אפשרויות) ו-3 המקומות האחרונים הם תמורה של $B$ ($3!$ אפשרויות).

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

המרחקים משני הצמתים הללו מספיקים כי הגרף הוא גרף פטרסן, שהוא סימטרי-צמתים (לכל שני צמתים יש אוטומורפיזם שמעביר את האחד לשני), ולכן לכל הצמתים אותו פרופיל מרחקים.

מסקנה: $\operatorname{diam}(G)=2$ ($=\max\{\operatorname{dist}(x,y):x,y\in V\}$).""",
      points=6, contextId="c2"),
]

# ---------------------------------------------------------------------------------------------
# Phase 4: rubric / pitfalls / guided steps (ai-draft), every step derived from the stored solution.
# Every number and claim below is machine-checked in tools/verify/20B-A/verify.py (section "STEPS").
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


Q1E_LINES = [
    r"$A\subset\mathbb{Z}$ ולכן $|A|\le|\mathbb{Z}|$; $A$ אינסופית ולכן קיימת $B\subseteq A$ עם $|B|=|\mathbb{N}|$.",
    r"לכן $|\mathbb{N}|\le|A|\le|\mathbb{Z}|=|\mathbb{N}|=|\mathbb{Q}|$.",
    r"מכאן $|A|=|\mathbb{Q}|$, כלומר הקבוצות שוות עוצמה.",
]

Q2C_LINES = [
    r"$15\mid n$, ולכן $n=3^\alpha\cdot5^\beta\cdot m$ עם $\gcd(m,3)=\gcd(m,5)=1$ ו-$\alpha,\beta\ge1$.",
    r"$\phi(n)=\phi(3^\alpha)\phi(5^\beta)\phi(m)$.",
    r"$\phi(n)=2\cdot4\cdot3^{\alpha-1}\cdot5^{\beta-1}\cdot\phi(m)$.",
    r"מכאן $8\mid\phi(n)$.",
]

Q5A_LINES = [
    r"נניח שקיים $G$ כזה. יש בו 9 צמתים, והצמתים $v_9,v_8$ בדרגות 8 ו-7.",
    r"$v_9$ מחובר לכל שאר הצמתים, ולכן סדרת הדרגות של $G-v_9$ היא $0,0,1,2,2,2,5,6$.",
    r"ב-$G-v_9$ הצומת $v_8$ בדרגה 6, אך יש שני צמתים מבודדים ולכן לו לכל היותר 5 שכנים.",
    r"זו סתירה, ולכן אין גרף כזה.",
]

Q6B_LINES = [
    r'$f:(0,1)\to(2,7]$, $f(x)=x+2$, היא חח"ע, ולכן $|(0,1)|\le|(2,7]|$.',
    r"$(2,7]\subset\mathbb{R}$, ולכן $|(2,7]|\le|\mathbb{R}|=|(0,1)|$.",
    r"לפי משפט קנטור-שרדר-ברנשטיין, $|(0,1)|=|(2,7]|$.",
]
Q6B_BUG = bug(Q6B_LINES, 0, r'$f:(0,1)\to(2,7]$, $f(x)=x+7$, היא חח"ע, ולכן $|(0,1)|\le|(2,7]|$.')

ENRICH = {
    (1, "א"): dict(
        rubric=rub(("הגדרת תמורה של קבוצה", 2),
                   ("מבנה התמורה: איבר ראשון (1 או 2) ואחריו תמורה של 4 האיברים הנותרים", 2),
                   (r"התוצאה $2\cdot4!=48$", 1)),
        pitfalls=[r"לחשב $2\cdot5!$ במקום $2\cdot4!$, כי האיבר הראשון כבר נבחר.",
                  "לספור רק את התמורות שמתחילות ב-1."],
        steps=[
            num("כמה אפשרויות יש לאיבר הראשון?", 2, "1 או 2."),
            num("בכמה סדרים אפשר לסדר את 4 האיברים הנותרים?", 24, r"$4!=24$."),
            num("כמה תמורות מתחילות ב-1 או ב-2?", 48, r"$2\cdot24=48$."),
        ]),
    (1, "ב"): dict(
        rubric=rub((r"הגדרת פונקציית Euler: ספירת $1\le m\le n$ עם $\gcd(n,m)=1$", 2),
                   (r"פירוק $120=2^3\cdot3\cdot5$", 1),
                   (r"נוסחת המכפלה והתוצאה $\phi(120)=32$", 2)),
        pitfalls=[r"לשכוח שהפירוק של $5!$ כולל $2^3$ ולא רק $2$.",
                  r"לחשב $\phi(n)=n-1$, נכון רק לראשוני."],
        steps=[
            ch("באיזו נוסחה משתמש הפתרון הרשמי?",
               [r"$\phi(n)=n\prod_{p\mid n}\left(1-\frac1p\right)$", r"$\phi(n)=n-1$ לכל $n$", r"$\phi(n)=\frac n2$ לכל $n$",
                r"$\phi(n)$ הוא מספר המחלקים של $n$"], "a",
               r"$\phi(4)=2\ne3$; $\phi(3)=2\ne\frac32$; $\phi(6)=2$ אך ל-6 יש 4 מחלקים."),
            num(r"כמה ראשוניים שונים מחלקים את $120$?", 3, "2, 3 ו-5."),
            num(r"מהו $\phi(5!)$?", 32, r"$120\cdot\frac12\cdot\frac23\cdot\frac45=32$."),
        ]),
    (1, "ג"): dict(
        rubric=rub((r"הגדרת $K_{m,n}$", 2),
                   (r"$\overline{K_{m,n}}=K_m\cup K_n$", 1),
                   (r"מספר הצלעות $\frac{m(m-1)}2+\frac{n(n-1)}2$", 2)),
        pitfalls=[r"לטעון שהמשלים של $K_{m,n}$ הוא גרף דו-צדדי גם הוא.",
                  r"לשכוח שאין צלעות במשלים בין שתי הקבוצות $A,B$."],
        steps=[
            ch(r"מהו המשלים של $K_{m,n}$?",
               [r"$K_m\cup K_n$: איחוד זר של שני גרפים שלמים", r"$K_{m+n}$", r"$K_{m,n}$ עצמו", r"מעגל על $m+n$ צמתים"], "a",
               r"במשלים אין צלעות בין $A$ ל-$B$, ויש כל הצלעות בתוך כל צד."),
            num(r"כמה צלעות יש במשלים של $K_{3,4}$?", 9, r"$\binom32+\binom42=3+6=9=\binom72-12$."),
        ]),
    (1, "ד"): dict(
        rubric=rub(("הגדרת גרף קשיר", 2),
                   (r"$n=2,3$: המשלים של $P_n$ אינו קשיר", 1),
                   (r"$n=4$: $\overline{P_4}=P_4$ קשיר ודו-צדדי", 2)),
        pitfalls=[r"לשכוח את הבדיקה של $n=2,3$ ולהגיע ישר ל-$n=4$.",
                  r"לטעון ש-$n=5$ מתאים: המשלים של $P_5$ מכיל משולש."],
        steps=[
            ch(r"עבור איזה $n$ המשלים של $P_n$ קשיר ודו-צדדי?",
               [r"$n=4$", r"$n=2$", r"$n=3$", r"$n=5$"], "a",
               r"$n=2,3$: המשלים אינו קשיר. $n=5$: המשלים מכיל משולש $v_1,v_3,v_5$ ולכן אינו דו-צדדי."),
            num(r"כמה צלעות יש ב-$\overline{P_4}$?", 3, r"$\binom42-3=3$."),
        ]),
    (1, "ה"): dict(
        rubric=rub(('הגדרת קבוצות שוות עוצמה: קיימת פונקציה חח"ע ועל', 2),
                   (r"$A\subset\mathbb{Z}$ ולכן $|A|\le|\mathbb{Z}|$", 1),
                   (r"$A$ אינסופית ולכן יש בה תת-קבוצה בעוצמת $\mathbb{N}$", 1),
                   (r"סנדוויץ' $|\mathbb{N}|\le|A|\le|\mathbb{Z}|=|\mathbb{N}|=|\mathbb{Q}|$", 1)),
        pitfalls=[r"לטעון שקבוצה שהיא תת-קבוצה ממש של $\mathbb{Z}$ חייבת להיות בעוצמה קטנה יותר.",
                  "לבלבל בין עוצמת $\\mathbb{Q}$ לעוצמת $\\mathbb{R}$."],
        steps=[
            ch("באיזו שיטה הפתרון הרשמי מראה ש-$A$ ו-$\\mathbb{Q}$ שוות עוצמה?",
               [r"מראה $|\mathbb{N}|\le|A|\le|\mathbb{Z}|=|\mathbb{N}|=|\mathbb{Q}|$", r"אלכסון של Cantor",
                "אינדוקציה על איברי $A$", "שובך היונים"],
               "a", r"שוויון העוצמות נובע מכך ש-$A$ נמצאת בין $\mathbb{N}$ ל-$\mathbb{Z}$, ושתיהן שוות עוצמה ל-$\mathbb{Q}$."),
            {"type": "order", "prompt": "סדרו את הנימוק.", "lines": Q1E_LINES,
             "explain": "תחילה שתי העובדות על $A$, אחר כך הסנדוויץ', ואז המסקנה."},
        ]),
    (2, "א"): dict(
        rubric=rub((r"א1: בלוק של 1,2,3 ו-$5!$ תמורות של $\{a,4,5,6,7\}$", 2),
                   (r"א1: $3!$ סידורים בתוך הבלוק, ולכן $720$", 3),
                   (r"א2: בחירת מקומות ל-1 ול-2: $\binom72$", 2),
                   (r"א2: $5!$ סידורים לשאר, ולכן $2520$", 3)),
        pitfalls=[r"לכתוב $2560$ ל-א2; $\binom72\cdot5!=21\cdot120=2520$.",
                  r"בא1: לשכוח את $3!$ הסידורים בתוך הבלוק."],
        steps=[
            num(r"בכמה סדרים אפשר לסדר את $\{a,4,5,6,7\}$, כאשר $a$ הוא הבלוק של 1,2,3?", 120, r"$5!=120$."),
            num("כמה תמורות מכילות את 1,2,3 בסמיכות?", 720, r"$3!\cdot5!=720$."),
            num(r"בכמה דרכים בוחרים 2 מקומות מתוך 7 עבור 1 ו-2 (כאשר 1 במקום המוקדם)?", 21, r"$\binom72=21$."),
            num("כמה תמורות מקיימות שהמספר 1 לפני 2?", 2520, r"$21\cdot120=2520=\frac{7!}2$."),
        ]),
    (2, "ב"): dict(
        rubric=rub((r"ב1: תמורה של $A$ ($4!$) ותמורה של $B$ ($3!$)", 2),
                   (r"ב1: התוצאה $144$", 2),
                   (r"ב2: תמורה של $A$ שמתחילה ב-$a$ או ב-$b$: $2\cdot3!$", 3),
                   (r"ב2: מכפלה עם $3!$ ותוצאה $72$", 1)),
        pitfalls=[r"בב2: לשכוח שהאות הראשונה מוגבלת רק בתמורה של $A$.",
                  "לסדר את כל 7 האותיות יחד ב-$7!$."],
        steps=[
            num(r"בכמה דרכים אפשר לסדר את 4 האותיות של $A$ בארבעת המקומות הראשונים?", 24, r"$4!=24$."),
            num("כמה סדרות מתאימות יש בב1?", 144, r"$4!\cdot3!=144$."),
            num(r"בכמה דרכים אפשר לסדר את $A$ כך שהאות הראשונה היא $a$ או $b$?", 12, r"$2\cdot3!=12$."),
            num("כמה סדרות מתאימות יש בב2?", 72, r"$12\cdot3!=72$."),
        ]),
    (2, "ג"): dict(
        rubric=rub((r'ג1: $\phi(1)=\phi(2)=1$ ולכן $\phi$ אינה חח"ע', 2),
                   (r"ג2: כתיבת $n=3^\alpha5^\beta m$ עם $\alpha,\beta\ge1$", 1),
                   (r"ג2: $\phi(n)=2\cdot4\cdot3^{\alpha-1}5^{\beta-1}\phi(m)$", 2),
                   (r"ג2: מסקנה $8\mid\phi(n)$", 2)),
        pitfalls=[r'להניח ש-$\phi$ חח"ע כי היא מוגדרת על הטבעיים.',
                  r"לשכוח שהפירוק דורש $\alpha,\beta\ge1$ כדי שהנוסחה תתן את הגורמים 2 ו-4."],
        steps=[
            num(r"מהו $\phi(2)$ (וגם $\phi(1)$)?", 1, r'$\phi(1)=\phi(2)=1$, ולכן $\phi$ אינה חח"ע.'),
            num(r"מהו $\phi(15)$?", 8, r"$\phi(3)\phi(5)=2\cdot4=8$."),
            {"type": "order", "prompt": "סדרו את ההוכחה של ג2.", "lines": Q2C_LINES,
             "explain": "פירוק $n$, כפליות $\\phi$, הצבת הערכים, ואז המסקנה."},
        ]),
    (3, "א"): dict(
        rubric=rub((r"גדלי הקבוצות $33,20,14$", 3),
                   (r"גדלי החיתוכים בזוגות $6,4,2$", 2),
                   (r"החיתוך המשולש $\lfloor100/105\rfloor=0$", 1),
                   (r"הצבה בנוסחת ההכלה וההדחה: $100-67+12-0=45$", 4)),
        pitfalls=[r"לשכוח שהחיתוך המשולש הוא $\lfloor100/105\rfloor=0$.",
                  "לענות 55 (מספר המספרים שמתחלקים באחד מהם) במקום המשלים."],
        steps=[
            num("מהו סכום הגדלים $|A_1|+|A_2|+|A_3|$?", 67, "$33+20+14=67$."),
            num("מהו סכום הגדלים של שלושת החיתוכים בזוגות?", 12, r"$6+4+2=12$."),
            num("מהו גודל החיתוך המשולש?", 0, r"$105>100$."),
            num("כמה מספרים ב-$\\Omega$ אינם מתחלקים באף אחד מ-3, 5, 7?", 45, "$100-67+12-0=45$."),
        ]),
    (3, "ב"): dict(
        rubric=rub((r"משוואה אופיינית $x^2+1=0$ ושורשים $\pm i$", 2),
                   (r"הפתרון ההומוגני $C_1\cos\frac{n\pi}2+C_2\sin\frac{n\pi}2$", 2),
                   (r"פתרון פרטי $A2^n$ והצבה: $A=12$", 3),
                   (r"$C_1=2,\ C_2=3$ מהתנאים ההתחלתיים", 3)),
        pitfalls=[r"לחשב את $A$ בלי לחלק ב-$2^{n-2}$ ולקבל $5A=15$ במקום $5A=15\cdot4$.",
                  r"להציב את התנאים ההתחלתיים לפני שמוסיפים את הפתרון הפרטי."],
        steps=[
            num(r"מהו המקדם $A$ בפתרון הפרטי $A\cdot2^n$?", 12, r"$A2^n+A2^{n-2}=15\cdot2^n\Rightarrow5A=60$."),
            num(r"מהו $C_1$ (מ-$a_0=14$)?", 2, r"$C_1+12=14$."),
            num(r"מהו $C_2$ (מ-$a_1=27$)?", 3, r"$C_2+24=27$."),
            num(r"מהו $a_2$ לפי הנוסחה המפורשת (וגם לפי הנסיגה)?", 46, r"$-2+0+48=46=15\cdot4-14$."),
        ]),
    (3, "ג"): dict(
        rubric=rub((r"התנאי: קשיר ובדיוק שני צמתים בדרגה אי-זוגית", 1),
                   (r"הדרגות במשלים: 13 לקצוות ו-12 לשאר", 2),
                   (r"כל הדרגות לפחות $\frac{15}2$ ולכן Hamilton (Dirac) וקשיר", 1),
                   (r"מסקנה: מסלול Euler", 1)),
        pitfalls=[r"לשכוח שדרגות הקצוות של $P_{15}$ הן 1 ולא 2.",
                  "לדרוש שכל הדרגות זוגיות; זה תנאי למעגל Euler."],
        steps=[
            num(r"מהי הדרגה במשלים של קצה של $P_{15}$?", 13, r"$15-1-1=13$."),
            num(r"מהי הדרגה במשלים של צומת פנימי?", 12, r"$15-1-2=12$."),
            ch("איזה תנאי מבטיח מסלול Euler?",
               ["הגרף קשיר ובדיוק שני צמתים בו בדרגה אי-זוגית", "הגרף קשיר ויש בו ארבעה צמתים בדרגה אי-זוגית",
                "הגרף הוא גרף Hamilton בלבד", "מספר הצלעות בגרף זוגי"], "a",
               r"ארבעה צמתים אי-זוגיים אינם מאפשרים מסלול Euler; Hamilton בלבד אינו מספיק (למשל $K_4$)."),
        ]),
    (4, "א"): dict(
        rubric=rub((r"פתרון $\binom n2=55$ ומציאת $n=11$", 4),
                   (r"מספר תתי-הקבוצות בגודל זוגי הוא $2^{n-1}$", 3),
                   (r"התוצאה $1024$", 1)),
        pitfalls=[r"לענות $2^{11}=2048$, מספר כל תתי-הקבוצות.",
                  "להשאיר את השורש השלילי של משוואת הריבוע."],
        steps=[
            num(r"מהו $n$ (נתון $\binom n2=55$)?", 11, r"$n^2-n-110=0\Rightarrow n=11$."),
            ch(r"כמה תתי-קבוצות בגודל זוגי יש לקבוצה בת $n\ge1$ איברים?",
               [r"$2^{n-1}$", r"$2^n$", r"$n\cdot2^{n-1}$", r"$\binom n2$"], "a",
               r"בדיוק חצי מתתי-הקבוצות הן בגודל זוגי."),
            num("כמה תתי-קבוצות בגודל זוגי יש ל-$A$?", 1024, r"$2^{10}=1024$."),
        ]),
    (4, "ב"): dict(
        rubric=rub((r"ב1: פונקציה עולה ממש נקבעת על ידי הקבוצה $\{f(1),\dots,f(4)\}$", 3),
                   (r"ב1: $\binom64=15$", 3),
                   (r'ב2: חח"ע = סדרה ללא חזרות באורך 4', 3),
                   (r"ב2: $P(6,4)=360$", 3)),
        pitfalls=[r'לספור עם חזרות ($6^4$) כשהפונקציה עולה ממש או חח"ע.',
                  'לבלבל בין עולה ממש (קבוצה, בלי סדר) לבין חח"ע (סדרה, עם סדר).'],
        steps=[
            ch("פונקציה עולה ממש מ-$\\{1,2,3,4\\}$ אל $\\{1,\\dots,6\\}$ נקבעת בדיוק על ידי:",
               [r"הקבוצה $\{f(1),f(2),f(3),f(4)\}$ (תת-קבוצה בגודל 4)", r"הסדרה $(f(1),\dots,f(4))$ עם חזרות מותרות",
                r"הערך $f(1)$ בלבד", r"סכום הערכים"],
               "a", "הסדר נקבע מעצמו: מסדרים את הערכים בסדר עולה."),
            num("כמה פונקציות עולות ממש יש?", 15, r"$\binom64=15$."),
            num(r'כמה פונקציות חח"ע יש?', 360, r"$P(6,4)=6\cdot5\cdot4\cdot3=360$."),
        ]),
    (4, "ג"): dict(
        rubric=rub((r"$m=\sum_k k\binom nk$", 1),
                   (r"משפט הבינום $(x+1)^n=\sum\binom nkx^k$", 1),
                   (r"גזירה: $n(x+1)^{n-1}=\sum\binom nkkx^{k-1}$", 2),
                   (r"הצבת $x=1$ ותוצאה $n2^{n-1}$", 1)),
        pitfalls=[r"לשכוח את הגזירה ולהציב $x=1$ בבינום עצמו, ולקבל $2^n$.",
                  "לחשב את גזירת $(x+1)^n$ ללא הגורם $n$."],
        steps=[
            ch(r"איך מקבלים את הסכום $\sum k\binom nk$ מהבינום?",
               [r"גוזרים את $(x+1)^n$ ומציבים $x=1$", r"מציבים $x=1$ בלי לגזור", r"מציבים $x=0$", r"מעלים בריבוע את שני האגפים"],
               "a", "הנגזרת מורידה את $k$ לפני הסימן."),
            num(r"מהו $\sum_{k=0}^{4}k\binom4k$?", 32, r"$4\cdot2^3=32$."),
        ]),
    (5, "א"): dict(
        rubric=rub(("הנחה שקיים גרף כזה: 9 צמתים עם $\\deg(v_9)=8$ ו-$\\deg(v_8)=7$", 1),
                   (r"$v_9$ מחובר לכולם, והסדרה של $G-v_9$ היא $(0,0,1,2,2,2,5,6)$", 2),
                   (r"בגרף הזה שני צמתים מבודדים, ולכן ל-$v_8$ לכל היותר 5 שכנים", 2),
                   ("מסקנה: לא קיים גרף כזה", 1)),
        pitfalls=[r"להסיק לא-גרפיות מסכום דרגות אי-זוגי: כאן הסכום $1+1+2+3+3+3+6+7+8=34$ זוגי.",
                  "לשכוח להפחית 1 מדרגות כל הצמתים אחרי הסרת $v_9$."],
        steps=[
            num(r"כמה צמתים מבודדים (דרגה 0) יש ב-$G-v_9$?", 2, "שני הצמתים שדרגתם ב-$G$ היא 1."),
            num(r"כמה שכנים יכולים להיות לצומת $v_8$ ב-$G-v_9$ לכל היותר?", 5, "8 צמתים, פחות $v_8$ עצמו ופחות שני המבודדים: $8-1-2=5$."),
            {"type": "order", "prompt": "סדרו את הנימוק.", "lines": Q5A_LINES,
             "explain": "ההנחה, הסרת הצומת המחובר לכולם, מניית המבודדים, והסתירה."},
        ]),
    (5, "ב"): dict(
        rubric=rub((r"סימון $x_1,\dots,x_4$ והצגת הבעיה עם חסמים תחתונים", 3),
                   (r"הזזה והסכום החדש $22-3-1-4-2=12$", 3),
                   (r"$D(4,12)=\binom{15}3$", 2),
                   (r"התוצאה $455$", 2)),
        pitfalls=[r"לחשב את הסכום החדש בצורה שגויה ($22-10=12$ ולא 22).",
                  "לספור סדרים שונים של אותן אותיות: אין חשיבות לסדר."],
        steps=[
            num("מהו סכום המשתנים אחרי הזזת כל החסמים התחתונים?", 12, "$22-(3+1+4+2)=12$."),
            num("כמה משתנים יש במשוואה?", 4, "$x_1,x_2,x_3,x_4$."),
            num("כמה מילים אפשריות?", 455, r"$\binom{12+4-1}{4-1}=\binom{15}3=455$."),
        ]),
    (5, "ג"): dict(
        rubric=rub((r"ג1: $\overline G$ הוא 6-רגולרי ו-$6\ge\frac{10}2$, ולכן Hamilton (Dirac)", 3),
                   (r"ג2: Hamilton ולכן קשיר, וכל הדרגות 6 זוגיות: Euler", 3),
                   (r"ג3: $\{a,d,g\}$ בלתי תלויה ב-$G$, ולכן משולש ב-$\overline G$ ואינו דו-צדדי", 3)),
        pitfalls=["להשתמש בדרגות של $G$ (3) במקום של המשלים (6) בקריטריון של Dirac.",
                  "לטעון שהמשלים דו-צדדי כי $G$ עצמו כזה."],
        steps=[
            num(r"מהי הדרגה של כל צומת ב-$\overline G$?", 6, r"$10-1-3=6$."),
            ch(r"איזו שלישיית צמתים יוצרת משולש ב-$\overline G$ (ולכן המשלים אינו דו-צדדי)?",
               [r"$\{a,d,g\}$", r"$\{a,b,c\}$", r"$\{f,h,j\}$", r"$\{a,c,e\}$"], "a",
               r"בין $a,d,g$ אין צלעות של $G$; בשאר השלישיות יש צלע של $G$ (למשל $(a,b)$, $(f,h)$, $(e,a)$)."),
        ]),
    (6, "א"): dict(
        rubric=rub((r"$a=(3+5)^n=8^n$", 3),
                   (r"$b=(7+5)^n=12^n$", 3),
                   (r"$ab=2^{5n}3^n$ ושימוש בנוסחת המכפלה ל-$\phi$: $2^{5n}3^{n-1}$", 6)),
        pitfalls=[r"לשכוח ש-$12^n=2^{2n}3^n$ ולהניח $ab=2^{5n}$ בלבד.",
                  r"לחשב $(1-\frac13)$ כ-$\frac23$ ולהכפיל פעמיים באותו גורם $\frac12$."],
        steps=[
            num(r"מהו $a$ עבור $n=2$?", 64, r"$(3+5)^2=64$."),
            num(r"מהו $b$ עבור $n=2$?", 144, r"$(7+5)^2=144$."),
            ch(r"מהו פירוק $ab$ לגורמים ראשוניים?",
               [r"$2^{5n}\cdot3^n$", r"$2^{4n}\cdot3^n$", r"$2^{5n}\cdot3^{2n}$", r"$2^{3n}\cdot3^n$"], "a",
               r"$8^n\cdot12^n=2^{3n}\cdot2^{2n}3^n$."),
            num(r"מהו $\phi(ab)$ עבור $n=2$?", 3072, r"$2^{10}\cdot3^{1}=3072$."),
        ]),
    (6, "ב"): dict(
        rubric=rub((r'פונקציה חח"ע $f:(0,1)\to(2,7]$, $f(x)=x+2$', 2),
                   (r"מכאן $|(0,1)|\le|(2,7]|$", 1),
                   (r"$(2,7]\subset\mathbb{R}$ ולכן $|(2,7]|\le|\mathbb{R}|=|(0,1)|$", 2),
                   ("מסקנה לפי קנטור-שרדר-ברנשטיין", 2)),
        pitfalls=[r'לתת רק פונקציה חח"ע בכיוון אחד ולהסיק שוויון עוצמות.',
                  r"לבחור פונקציה שתמונתה אינה בתוך $(2,7]$."],
        steps=[
            ch("באיזו שיטה הפתרון הרשמי מראה שוויון עוצמות?",
               [r'מראה חח"ע בכל כיוון ומשתמש במשפט קנטור-שרדר-ברנשטיין', 'מציג פונקציה מפורשת שהיא חח"ע ועל בין הקבוצות',
                "אלכסון של Cantor", "אינדוקציה"],
               "a", r"הפתרון מראה $|(0,1)|\le|(2,7]|\le|(0,1)|$."),
            {"type": "findbug", "prompt": "באיזו שורה של ההוכחה יש טעות?", "lines": Q6B_BUG, "bugIndex": 0,
             "explain": r"הפונקציה $x+7$ מעבירה את $(0,1)$ אל $(7,8)$, שאינו תת-קבוצה של $(2,7]$."},
        ]),
    (6, "ג"): dict(
        rubric=rub((r"הקוטר הוא $\max\operatorname{dist}(x,y)$", 2),
                   (r"מ-$a$: שלושה צמתים במרחק 1 וששה במרחק 2", 2),
                   (r"מ-$f$: אותה תוצאה", 1),
                   (r"מסקנה: $\operatorname{diam}(G)=2$", 1)),
        pitfalls=[r"לבדוק מרחקים מצומת אחד בלבד בלי לנמק שזה מספיק.",
                  "לענות 3: בגרף שלושה שכנים לכל צומת, אך כל צומת אחר נמצא במרחק 2."],
        steps=[
            num(r"כמה צמתים נמצאים במרחק 1 מ-$a$?", 3, "$b,f,e$."),
            num(r"כמה צמתים נמצאים במרחק 2 מ-$a$?", 6, r"$j,g,i,h,c,d$."),
            num(r"מהו קוטר הגרף?", 2, "המרחק הגדול ביותר בין שני צמתים הוא 2."),
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
