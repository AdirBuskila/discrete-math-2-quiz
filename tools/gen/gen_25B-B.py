# -*- coding: utf-8 -*-
"""Generator for tools/raw/25B-B.json -- discrete-math-2, spring 2025, moed B (04.08.2025).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_25B-B.py

Source: 25B-B, 9 pp (cover with the exam structure, then Q1-Q6 typed, each with a HANDWRITTEN solution in ink read by
vision). Header: course 20068, 3 hours, formula sheet. The cover says "4 questions, all mandatory, 25 points each" but the
paper prints and solves six (Q1-Q6); all six are in the bank.
The page header says "moed A, semester B, 5785" but the date (04.08.2025) and the file name mark moed B: the
sitting is coded 25B-B and labelled moed B.
Parts with numbered sub-questions (Q1 "define, then answer", Q2c, Q4c, Q5c) are ONE item with all sub-parts;
Q1 definitions are handwritten as a pointer to the lecture, so the solution says "according to the lecture".

Transcription notes
- Q4b (p.6): the last line of the ink solution (the step from "every degree of the complement is even" to "no bridges")
  is partly illegible; written as "complement has only even degrees, so no bridges, answer 0". Answer verified.
- Q4c (p.7): the 11-vertex figure is a gray printed drawing plus four black arcs (v8v9, v2v10, v7v3, v6v4); read as a
  4-regular graph with 22 edges (outer ring v1..v8 and the chords listed in the question text); the solution's
  claims (Dirac for H, induced P5 on {v7,v5,v8,v6,v9}, C4 on {v1,v2,v4,v5}, K4 on {v1,v3,v5,v11}, C6 on
  {v1,v2,v3,v4,v5,v9}) all check out on this edge list (tools/verify/25B-B/verify.py).
- Q4c(3) (p.7): the question's own picture (a triangle at each end joined by three parallel edges) is the prism =
  complement of C6; the solution shows an induced C6 in G, so the prism is induced in H. The picture is described in
  words in the question text (no crop).
- Q5c(2) (p.8): the question says "path" (Euler and Hamilton paths); K_{2,3} has both, as printed.

Checks (tools/verify/25B-B/verify.py, brute force + sympy + networkx):
Q1a 135, Q1b 18, Q1c 23, Q2a 1140, Q2b n^2(n+1) for n=11..13, Q2c 0 and P(n,10), Q3a closed form n<40, Q3b n=3,
Q3c n=13 and 150, Q4a all connected bipartite Eulerian graphs n<=7, Q4b no bridges, Q4c the figure, Q5a 4200,
Q5b n=8 and 99, Q5c P4 / K_{2,3} / all trees n<=9, Q6a, Q6b.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25B-B.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "student-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "divisibility_primes",
      "**א1.** (8 נק') המונח: עקרון הכפל.\n\n"
      "**א2.** שאלה: יהי $n=10!$. חשבו כמה מחלקים של $n$ אינם מתחלקים ב-7.",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** $n=10!=1\cdot2\cdot3\cdot2^2\cdot5\cdot(2\cdot3)\cdot7\cdot2^3\cdot3^2\cdot(2\cdot5)=2^8\cdot3^4\cdot5^2\cdot7$

כאשר $d=2^\alpha\cdot3^\beta\cdot5^\gamma\iff7\nmid d\wedge d\mid n$, עבור $\alpha\in A=\{0,1,2,\dots,8\}$, $\beta\in B=\{0,1,2,3,4\}$ ו-$\gamma\in C=\{0,1,2\}$.

לפי עקרון הכפל נקבל: $135=9\cdot5\cdot3=|A|\cdot|B|\cdot|C|$ מחלקים של $n$ שאינם מתחלקים ב-7.""",
      points=8),
    Q(1, "ב", "computation", "permutations_arrangements",
      "**ב1.** (8 נק') המונח: תמורה אי-סדר מלא.\n\n"
      "**ב2.** שאלה: תהי הקבוצה $A=\\{1,2,3,4,5,6,7\\}$. חשבו את מספר התמורות אי-סדר מלא של $A$ שבהן $1,2,3,4$ מופיעים ב-4 המקומות הראשונים.",
      r"""**ב1. הגדרה:** לפי ההרצאה.

**ב2.** כל תמורה מתאימה היא בצורה $a_1,a_2,a_3,a_4,a_5,a_6,a_7$, כאשר $a_1,a_2,a_3,a_4$ היא תמורה אי-סדר מלא של $1,2,3,4$ וגם $a_5,a_6,a_7$ היא תמורה אי-סדר מלא של $5,6,7$.

לפי הנוסחה $\alpha(n)=n!\cdot\left[1-\frac1{1!}+\frac1{2!}-\frac1{3!}+\dots+(-1)^n\cdot\frac1{n!}\right]$:

מספר התמורות אי-סדר מלא של $1,2,3,4$: $\alpha(4)=12-4+1=9$.

וגם מספר התמורות אי-סדר מלא של $5,6,7$: $\alpha(3)=3-1=2$.

מסקנה: מספר התמורות המתאימות הוא $9\cdot2=18$.""",
      points=8),
    Q(1, "ג", "computation", "trees",
      "**ג1.** (9 נק') המונח: עלה של גרף לא מכוון.\n\n"
      "**ג2.** שאלה: יהי $T=(V,E)$ עץ בעל 30 צמתים. אם $\\deg(v)\\in\\{1,5\\}$ לכל $v\\in V$, מצאו את מספר העלים שיש ל-$T$.",
      r"""**ג1. הגדרה:** לפי ההרצאה.

**ג2.** ידוע ש: $\sum_{v\in V}\deg(v)=2|E|$ לכל גרף, וגם $\sum_{v\in V}\deg(v)=2(n-1)$ לכל עץ בעל $n$ צמתים.

נסמן ב: $p$ = מספר העלים. אז נקבל: $p+5(30-p)=2(30-1)\iff p+150-5p=60-2$

$\Rightarrow92=4p\Rightarrow p=23$.""",
      points=9),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "selections_repetition",
      r"(8 נק') מה מספר הפתרונות של $x_1+x_2+x_3\le23$, כאשר $-2<x_1,\ -1<x_2,\ 6<x_3$ וכן $x_1,x_2,x_3\in\mathbb{Z}$.",
      r"""$-1\le x_1\iff-2<x_1;\quad0\le x_2\iff-1<x_2;\quad7\le x_3\iff6<x_3$

נסמן ב: $0\le y_1\in\mathbb{Z}\Leftarrow y_1=x_1+1$, $0\le y_2\in\mathbb{Z}\Leftarrow y_2=x_2\ge0$, $0\le y_3\in\mathbb{Z}\Leftarrow y_3=x_3-7$ ו-$0\le y_4\in\mathbb{Z}\Leftarrow y_4=23-(x_1+x_2+x_3)$.

אז נקבל: $x_1+x_2+x_3+y_4=23\iff(y_1-1)+(y_2-0)+(y_3+7)+y_4=23\iff$

$(*)$ $y_1,y_2,y_3,y_4\in\mathbb{N}$, כאשר $y_1+y_2+y_3+y_4=17$.

לכן מספר הפתרונות שווה ל: $1140=\frac{20\cdot19\cdot18}{1\cdot2\cdot3}=\binom{20}{3}=\binom{17+3}{4-1}=D(4,17)$.

מכיוון שכל פתרון של בעיה המקורית מתאים לפתרון יחיד של $(*)$ וגם ההפך נכון.""",
      points=8),
    Q(2, "ב", "computation", "divisibility_primes",
      "(9 נק') חשבו את מספר המחלקים של $f(n)$ שמתחלקים ב-15, כאשר $n>10$ וגם\n"
      r"$$\sum_{k=0}^{n}\binom nk\cdot2^{n-k}\cdot\sum_{k=0}^{n}\binom nk\cdot8^k\cdot3^{n-k}\cdot\sum_{k=0}^{n}\binom nk\cdot4^k=f(n)$$",
      r"""לפי הבינום של Newton נקבל:

$$f(n)=(2+1)^n\cdot(8+3)^n\cdot(4+1)^n=3^n\cdot5^n\cdot11^n$$

$d=3^\alpha\cdot5^\beta\cdot11^\gamma\iff(3\cdot5)\mid d\wedge d\mid f(n)\iff15\mid d\wedge d\mid f(n)$

כאשר: $1\le\alpha\le n$, כלומר $n$ אופציות; $1\le\beta\le n$, כלומר $n$ אופציות; וגם $0\le\gamma\le n$, כלומר $n+1$ אופציות.

מסקנה: מספר המחלקים של $f(n)$ שמתחלקים ב-15 שווה ל: $n^2(n+1)$.""",
      points=9),
    Q(2, "ג", "computation", "function_counting",
      r"נתונה הקבוצה $\Omega=\{f\,/\,f:\{1,2,\dots,10\}\to\{1,2,\dots,n\}\}$, כאשר $n\in\mathbb{N}$ ו-$n>9$. (8 נק')" "\n\n"
      r"**(ג1)** כמה פונקציות מ-$\Omega$ הן **יורדות ממש** ומקיימות התנאי: $f(\{1,2,3\})=\{3,4,5\}$ ?" "\n\n"
      r"**(ג2)** כמה פונקציות מ-$\Omega$ הן **חד-חד-ערכיות** ?",
      r"""**(ג1)** מתקיים: $f(1)=5>f(2)=4>f(3)=3>f(4)>\dots>f(10)\ge1$ (בלתי אפשרי).

מסקנה: אין אף פונקציה שמקיימת את התנאים.

**(ג2)** $f$ חד-חד-ערכית $\iff$ $f(1),f(2),\dots,f(10)$ הן 10 איברים מתוך $n$ איברים.

מסקנה: אם $n<10$ אין פונקציות חד-חד-ערכיות (מאחר ש: $n\ge10$); אם $n\ge10$ אז מספר הפונקציות הוא $P(n,10)=\frac{n!}{(n-10)!}$.""",
      points=8),

    # ---------------- Q3 ----------------
    Q(3, "א", "computation", "recurrences",
      r"(14 נק') מצאו את הצורה המפורשת של $(a_n)$, כאשר $a_n=5a_{n-1}-6a_{n-2}+6\cdot5^n$ לכל $2\le n\in\mathbb{N}$ וגם $a_1=130,\ a_0=25$. הראו ש: $a_n=O(5^n)$.",
      r"""המשוואה האופיינית היא: $x^2-5x+6=0\Leftarrow x_1=2;\ x_2=3$.

הפתרון הכללי של $a_n=5a_{n-1}-6a_{n-2}$ הוא: $a_n^{(h)}=C_1\cdot2^n+C_2\cdot3^n$.

פתרון פרטי של $a_n=5a_{n-1}-6a_{n-2}+6\cdot5^n$ הוא בצורה $a_n^{(p)}=A\cdot5^n$:

$$A\cdot5^n=5\cdot A\cdot5^{n-1}-6\cdot A\cdot5^{n-2}+6\cdot5^n\quad(:5^{n-2})\Rightarrow25A=25A-6A+6\cdot25\Rightarrow A=25\Rightarrow a_n^{(p)}=25\cdot5^n$$

$a_n=a_n^{(h)}+a_n^{(p)}=C_1\cdot2^n+C_2\cdot3^n+25\cdot5^n$

$a_0=C_1+C_2+25=25$ וגם $a_1=2C_1+3C_2+125=130$ $\Rightarrow\begin{cases}C_1+C_2=0\\2C_1+3C_2=5\end{cases}\Rightarrow\begin{cases}C_1=-5\\C_2=5\end{cases}$

אז: $a_n=-5\cdot2^n+5\cdot3^n+25\cdot5^n$

$\Rightarrow a_n\le5\cdot3^n+25\cdot5^n\le30\cdot5^n,\ \forall n\in\mathbb{N}\Rightarrow a_n=O(5^n)$""",
      points=14),
    Q(3, "ב", "computation", "euler_phi",
      r"(5 נק') מצאו כל מספר $n\in\mathbb{N}$ שמקיים את התנאים הבאים: $n$ הוא מספר ראשוני וגם $\phi(n)$ הוא מספר ראשוני.",
      r"""אם $n=2$, אז $\phi(n)=1\ne$ מספר ראשוני.

אם $n=3$, אז $\phi(n)=2=$ מספר ראשוני.

נניח ש: $n$ מספר ראשוני ו-$n>3$, אז נקבל:

$\phi(n)=n\left(1-\frac1n\right)=n-1=$ מספר זוגי $\ \&\ \phi(n)>2$.

לכן $2\mid\phi(n)\ \&\ 2\ne\phi(n)\Leftarrow\phi(n)\ne$ מספר ראשוני.

מסקנה: $n=3$ הוא הפתרון היחיד, כלומר $n=3$ היחיד שמקיים את התנאים.""",
      points=5),
    Q(3, "ג", "computation", "combinations_subsets",
      r"(6 נק') לקבוצה $A=\{1,2,\dots,n\}$ יש 4095 תתי-קבוצות לא ריקות, אך בגודל זוגי. חשבו כמה תתי-קבוצות בגודל 7 של $A$ מכילות בדיוק 4 מספרים זוגיים וגם 3 מספרים ראשוניים אי-זוגיים.",
      r"""נתון ש: $2^{n-1}-1=4095\iff2^{n-1}=4096\iff2^{n-1}=2^{12}\Leftarrow n=13$.

אז $A=\{1,2,3,4,\dots,13\}$ ולכן ב-$A$ יש 5 מספרים ראשוניים אי-זוגיים: $B=\{3,5,7,11,13\}$

וגם 6 מספרים זוגיים: $C=\{2,4,6,8,10,12\}$.

לכן כל תת-קבוצה מתאימה $D$ היא בצורה: $D=\{b_1,b_2,b_3,c_1,c_2,c_3,c_4\}$.

$$150=\frac{5\cdot4}{2}\cdot\frac{6\cdot5}{2}=\binom52\cdot\binom62=\binom53\cdot\binom64$$

תתי-קבוצות מתאימות.""",
      points=6),

    # ---------------- Q4 ----------------
    Q(4, "א", "truefalse", "euler_hamilton",
      r"(4 נק') יהי $G=(A,B,E)$ גרף בלתי מכוון ודו-צדדי. הוכיחו או הפריכו: אם $G$ הוא גרף Euler, אזי $|E|$ הוא מספר זוגי.",
      r"""אם $G$ הוא גרף Euler $\Leftarrow\deg(v)=$ מספר זוגי לכל $v\in A\cup B$.

$|E|=\sum_{a\in A}\deg(a)\ \left(=\sum_{b\in B}\deg(b)\right)=$ מספר זוגי

(מכיוון שכל צלע מחברת צומת ב-$A$ עם צומת ב-$B$).

מסקנה: הטענה נכונה.""",
      verdict=True, points=4),
    Q(4, "ב", "computation", "graph_connectivity",
      r"(5 נק') יהי $G=(V,E)$ גרף לא מכוון שבו דרגה של כל צומת היא מספר ראשוני שונה מ-2. חשבו את מספר הגשרים שיש במשלים של $G$.",
      r"""מאחר ש: $\deg_G(v)=$ מספר א"ז ראשוני $\Leftarrow|V|=n=$ מספר זוגי

$\Leftarrow\deg_{\overline G}(v)=|V|-\deg_G(v)-1=$ מספר זוגי לכל $v\in V$

$\Leftarrow$ כל דרגה זוגית, כלומר כל הדרגות ב-$\overline G$ זוגיות ($\overline G$ הוא גרף Euler), ולכן אין ב-$\overline G$ גשרים.

מסקנה: מספר הגשרים במשלים של $G$ הוא 0.""",
      points=5),
    Q(4, "ג", "computation", "euler_hamilton",
      "יהיו $G=(V,E)$ הגרף שבציור ו-$H$ המשלים שלו. (16 נק')\n\n"
      "[הציור: גרף על 11 צמתים $v_1,\\dots,v_{11}$, 4-רגולרי עם 22 צלעות:\n"
      "הטבעת $v_1v_2,\\ v_2v_3,\\ v_3v_4,\\ v_4v_5,\\ v_5v_6,\\ v_6v_7,\\ v_7v_8,\\ v_8v_1$ והצלעות\n"
      "$v_1v_9,\\ v_1v_{10},\\ v_5v_9,\\ v_5v_{10},\\ v_2v_{11},\\ v_2v_{10},\\ v_3v_{10},\\ v_3v_7,\\ v_4v_{11},\\ v_4v_6,\\ v_6v_{11},\\ v_7v_9,\\ v_8v_{11},\\ v_8v_9$]\n\n"
      "**ג1.** (5 נק') הראו ש: $H$ הוא גרף EULER.\n\n"
      "**ג2.** (5 נק') הראו ש-$H$ קיים $P_5$ כתת-גרף מושרה. האם ב-$H$ קיים $C_4$ כתת-גרף מושרה?\n\n"
      "**ג3.** (6 נק') הראו ש-$H$ קיים $K_4$ כתת-גרף מושרה. האם ב-$H$ קיים הגרף שבציור כתת-גרף מושרה? "
      "[הציור: שני משולשים המחוברים בשלוש צלעות מקבילות (מנסרה משולשת)]",
      r"""**ג1.** $\deg_G(v)=4$ לכל $v\in V$ $\Rightarrow\deg_H(v)=6\ge\frac{11}2=\frac{|V|}2$ (לפי משפט Dirac, $H$ הוא גרף Hamilton), ולכן $H$ קשיר. כמו כן $\deg_H(v)=6$ זוגי לכל $v$.

מסקנה: $H=\overline G$ הוא גרף Euler.

**ג2.** ב-$G$ קיים תת-גרף מושרה ("בית": ריבוע עם גג) על הצמתים $v_7,v_8,v_9,v_6,v_5$ $\Rightarrow$ ב-$H$ קיים $P_5$ כתת-גרף מושרה: $v_7,v_5,v_8,v_6,v_9$.

ב-$G$ קיים $2K_2$ מושרה: $(v_1,v_2)$ ו-$(v_4,v_5)$ $\Rightarrow$ ב-$H$ קיים $C_4$ כתת-גרף מושרה ($v_1,v_5,v_2,v_4$).

**ג3.** ב-$G$ קיים $4K_1$: $v_1,v_3,v_5,v_{11}$ $\Rightarrow$ ב-$H$ קיים $K_4$ כתת-גרף מושרה.

הגרף שבציור הוא $\overline{C_6}$. ב-$G$ קיים $C_6$ כתת-גרף מושרה: $v_1,v_2,v_3,v_4,v_5,v_9$ $\Rightarrow$ ב-$H$ קיים $\overline{C_6}$ כתת-גרף מושרה.""",
      points=16),

    # ---------------- Q5 ----------------
    Q(5, "א", "computation", "permutations_arrangements",
      r"(6 נק') תהי הקבוצה $A=\{1,2,\dots,8\}$. חשבו את מספר החליפות בגודל 5 כך שבכל חליפה מופיע 1.",
      r"""כל חליפה מתאימה היא בצורה: $\_\ \_\ \_\ \_\ \_$, כאשר ל-1 יש 5 אופציות ובשאר המקומות יש חליפה בגודל 4 של $A-\{1\}$.

לכן מספר החליפות המתאימות הוא: $4200=7\cdot6\cdot5\cdot4\cdot5=\frac{7!}{3!}\cdot5=P(7,4)\cdot5$.""",
      points=6),
    Q(5, "ב", "computation", "combinations_subsets",
      r"(7 נק') יהי $5<n\in\mathbb{N}$. לקבוצה $A=\{1,2,3,\dots,n\}$ יש 128 תתי-קבוצות לא בגודל אי-זוגי. חשבו את מספר תתי-הקבוצות בגודל זוגי וגם $\ge4$ של $A$.",
      r"""ידוע ש: $2^{n-1}=128\iff2^{n-1}=2^7\Leftarrow n=8$.

לכן ב-$A$ יש:

$$\binom80+\binom82+\binom84=1+28+70=99$$

תתי-קבוצות מתאימות.""",
      points=7),
    Q(5, "ג", "proof", "graph_connectivity",
      "(12 נק') הוכיחו או הפריכו:\n\n"
      "**ג1.** לא קיים גרף דו-צדדי וקשיר, כך שגם המשלים שלו הוא דו-צדדי וקשיר.\n\n"
      r"**ג2.** לא קיים $K_{m,n}$ כך ש: $m\ge n>1$ וב-$K_{m,n}$ קיים מסלול EULER וגם מסלול HAMILTON." "\n\n"
      r"**ג3.** יהי $T=(A,B,E)$ עץ בעל $n=|A|+|B|$ צמתים. הראו שאם $|B|\le|A|$, אז קיים $a\in A$ כך ש: $a$ הוא עלה.",
      r"""**ג1.** לא נכון. דוגמה נגדית: $G=P_4$ (גרף דו-צדדי וקשיר, והמשלים שלו $\overline{P_4}\cong P_4$ הוא גם דו-צדדי וקשיר).

**ג2.** לא נכון, כלומר דוגמה נגדית: $G=K_{2,3}$. ב-$K_{2,3}$ קיים מסלול Euler, כי יש 2 צמתים בדרגה אי-זוגית (והגרף קשיר).

המסלול Hamilton: $b_1,a_1,b_2,a_2,b_3$.

**ג3.** נניח, בשלילה, שאין עלים בצד $A$, כלומר $2\le\deg(x)$ לכל $x\in A$. אז נקבל

$$2|A|\le\sum_{v\in A}\deg(v)=|E|=|A|+|B|-1\Leftarrow|A|\le|B|-1$$

כלומר $|A|<|B|$ בסתירה לנתון. מסקנה: קיים $a\in A$ כך ש: $a$ הוא עלה.""",
      points=12),

    # ---------------- Q6 ----------------
    Q(6, "א", "computation", "combinations_subsets",
      "(12 נק') נתונה הקבוצה $A=\\{1,2,3,\\dots,n\\}$, כאשר $n>20$. חשבו את\n"
      r"$$\sum_{|B|=3}^{5}|B|=f(n)$$"
      "\nכאשר כל $B$ היא תת-קבוצה של $A$.",
      r"""התשובה היא:

$$3\binom n3+4\binom n4+5\binom n5$$

ב-$A$ יש $\binom n3$ תתי-קבוצות בגודל 3, יש $\binom n4$ תתי-קבוצות בגודל 4, ויש $\binom n5$ תתי-קבוצות בגודל 5.""",
      points=12),
    Q(6, "ב", "proof", "graph_basics",
      r"(13 נק') יהי $G=(V,E)$ גרף לא מכוון, קשיר, כך שב-$G$ יש צומת אחד בדרגה 4 ושאר הצמתים בדרגה 5. הראו ש: $3\le\chi(G)$.",
      r"""$E\ne\phi\Leftarrow\chi(G)\ge2$.

נניח, בשלילה, ש: $\chi(G)=2$, כלומר $G=(A,B,E)$ הוא גרף דו-צדדי.

נסמן ב: $a$ את הצומת שדרגתו 4 ונניח, בלי הגבלת הכלליות, ש: $a\in A$.

אז: $\sum_{x\in A}\deg(x)=\sum_{y\in B}\deg(y)$:

$4+5(|A|-1)=5|B|\iff5|A|-5|B|=1\iff5(|A|-|B|)=1\Leftarrow$ בסתירה, כי $|A|-|B|$ שלם.

לכן $G$ אינו 2-צביע, כלומר $\chi(G)\ge3$.""",
      points=13),
]

exam = {
    "examCode": "25B-B",
    "examLabel": "אביב 2025, מועד ב'",
    "year": 2025,
    "examDate": "04.08.2025",
    "sourceFile": "25B-B exam (typed, pp.1-9)",
    "solutionFile": "student-solution-1 (handwritten, same PDF)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
