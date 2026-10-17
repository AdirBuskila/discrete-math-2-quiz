# -*- coding: utf-8 -*-
"""Generator for tools/raw/25S-A.json -- discrete-math-2, summer 2025, moed A (flagship sitting).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_25S-A.py

Source: sitting 25S-A, 9 pp (cover, then 5 questions each followed by a TYPED solution). Header: course 20068,
3 hours, formula sheet, "solve 4 of 5" (25 points each, 100 counted). The date line is blank in the source.
Each question is split into its printed parts (a, b, c). A part that has numbered sub-parts (1 = define the term,
2 = short question) is ONE item whose text and solution keep both sub-parts.

Transcription notes
- Q2b (p.5): the printed final line is a_n = 3 - 2^n + 2n*2^n, but the printed derivation (c1=3, c2=-2) and the
  initial values give 3 - 2*2^n + 2n*2^n (a_0 = 1 only for the latter). Mismatch -> HELD, see ASK_ADIR.
- Q2c (p.5): the solution writes d = 2^a 7^b 5^c; the prime in m is 3, not 5 (typo). Final answer 3n(2n+1)^2 is right.
- Q4b (p.7): in the Havel-Hakimi table the last path is written v1->v2->v3->v4->v5, but those vertices have degrees
  1,1,2,2,2, so the labels do not form that path. The conclusion (the sequence is realisable) is right.
- Q1a (p.2): the printed solution labels the domain size n=6 and the codomain size m=4 while the printed formula uses
  n for the codomain; the computed value 4^6-4*3^6+6*2^6-4 = 1560 is right.
- Q5b1 (p.9): the typed text says "E1 subset of E" for a spanning subgraph; transcribed as printed.
- P_n in Q3c is the path on n vertices (the solution defines it); the question text itself does not.

Checks (tools/verify/25S-A/verify.py, sympy + networkx + brute force):
Q1a 1560 (enumeration of all 4^6 maps), Q2a 122 (enumeration 100..300), Q2b rsolve gives 3-2*2^n+2n*2^n (the printed
final line does not satisfy a_0 = 1), Q2c factorisation of m for n=1..5 gives 2^3n 3^2n 7^2n and 3n(2n+1)^2 even
divisors, Q3a 12 | phi(21n) for n=1..1999, Q3b 220, Q3c complement of P_n never Eulerian and Hamiltonian exactly for
n>=5 (n=2..12 brute force), Q4a K11 Eulerian with 55 edges, Q4b sequence graphical, Q4c degrees (2,3,..,3) graphical
only for odd |V|, Q5a D8 = 14833 (enumeration), Q5c phi = 60*2^29 = 32212254720.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25S-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "function_counting",
      "**א1.** (4 נק') המונח: פונקציה \"על\".\n\n"
      "**א2.** (5 נק') שאלה: חשבו $|\\Omega|$, כאשר $\\Omega$ היא קבוצה של כל הפונקציות על "
      r"$f:\{1,2,3,4,5,6\}\to\{1,2,3,4\}$.",
      r"""**א1. הגדרה:** $f:A\to B$ היא פונקציה על אם $\forall y\in B,\ \exists x\in A:\ y=f(x)$.

**א2.** $\Omega$ היא קבוצת כל הפונקציות על $f:\{1,2,3,4,5,6\}\to\{1,2,3,4\}$.

נוסחה (מספר הפונקציות על):
$$n^m-\binom{n}{1}(n-1)^m+\binom{n}{2}(n-2)^m-\dots+(-1)^{n-1}\binom{n}{n-1}1^m$$

בפתרון המקורי מסומן $|\{1,2,3,4,5,6\}|=n=6$ ו-$|\{1,2,3,4\}|=m=4$, והחישוב שמופיע הוא:

$$|\Omega|=4^6-\binom41 3^6+\binom42 2^6-\binom43 1^6=4^6-4\cdot3^6+6\cdot2^6-4\cdot1=1560$$""",
      points=9),
    Q(1, "ב", "computation", "asymptotics",
      "**ב1.** (4 נק') המונח: $g=\\theta(f)$ (קצב גידול הפונקציות) כאשר $g,f:\\mathbb{N}\\to(0,\\infty)$.\n\n"
      "**ב2.** (4 נק') שאלה: הוכיחו ש-\n"
      r"$$n^2+2\ln n=\theta\left(3n^2+\ln^2 n\right)$$",
      r"""**ב1. הגדרה:**
$$g=\theta(f)\iff \exists c_1>0,\ c_2>0,\ N(c_1,c_2)\in\mathbb{N}:\ \forall n>N(c_1,c_2)\to c_1\cdot f(n)\le g(n)\le c_2\cdot f(n)$$

**ב2.** נשתמש בקריטריון הגבול: $g=\theta(f)\iff \lim_{n\to\infty}\frac{g(n)}{f(n)}=L\in\mathbb{R},\ L>0$.

$$\lim_{n\to\infty}\frac{n^2+2\ln n}{3n^2+\ln^2 n}=\lim_{n\to\infty}\frac{2n+2\cdot\frac1n}{6n+2\ln n\cdot\frac1n}=\lim_{n\to\infty}\frac{2n^2+2}{6n^2+2\ln n}=\lim_{n\to\infty}\frac{4n}{12n+2\cdot\frac1n}=\frac13>0$$

לכן $n^2+2\ln n=\theta\left(3n^2+\ln^2 n\right)$.""",
      points=8),
    Q(1, "ג", "truefalse", "graph_basics",
      "**ג1.** (4 נק') המונח: גרף דו-צדדי.\n\n"
      "**ג2.** (4 נק') שאלה: האם משלים של הגרף $C_6$ הוא דו-צדדי? נמקו.",
      r"""**ג1. הגדרה:** $G=(A,B,E)$ הוא גרף דו-צדדי אם
$$A,B\ne\emptyset,\qquad A\cap B=\emptyset,\qquad (x,y)\in E\Rightarrow x\in A\ \text{and}\ y\in B$$

**ג2.** נסמן $C_6=(V,E)$, $V=\{v_1,v_2,v_3,v_4,v_5,v_6\}$, $E=\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\}$.

במשלים $\overline{C_6}=(V,\overline{E})$ מתקיים $C_3=\{(v_1,v_3),(v_3,v_5),(v_5,v_1)\}\subseteq\overline{E}$.

לכן $\overline{C_6}$ אינו גרף דו-צדדי: משלים של הגרף $C_6$ כולל מעגל אי-זוגי, ולכן לא יכול להיות גרף דו-צדדי.""",
      verdict=False, points=8),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "sum_product_inclusion",
      r"(9 נק') תהי הקבוצה $U=\{100,101,102,\dots,300\}$. כמה מבין המספרים מ-$U$ לא מתחלקים ב-11 וגם "
      "לא מתחלקים ב-6 וגם לא מתחלקים ב-5?",
      r"""$U$ היא קבוצת המספרים מ-100 עד 300, לכן $|U|=201$.

נסמן ב-$A_1$ את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-11, לכן $|A_1|=\left\lfloor\frac{300}{11}\right\rfloor-\left\lfloor\frac{99}{11}\right\rfloor=27-9=18$.

נסמן ב-$A_2$ את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-6, לכן $|A_2|=\left\lfloor\frac{300}{6}\right\rfloor-\left\lfloor\frac{99}{6}\right\rfloor=50-16=34$.

נסמן ב-$A_3$ את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-5, לכן $|A_3|=\left\lfloor\frac{300}{5}\right\rfloor-\left\lfloor\frac{99}{5}\right\rfloor=60-19=41$.

נחשב חיתוכים של זוגות:

$|A_2\cap A_3|=\left\lfloor\frac{300}{30}\right\rfloor-\left\lfloor\frac{99}{30}\right\rfloor=10-3=7$

$|A_1\cap A_3|=\left\lfloor\frac{300}{55}\right\rfloor-\left\lfloor\frac{99}{55}\right\rfloor=5-1=4$

$|A_1\cap A_2|=\left\lfloor\frac{300}{66}\right\rfloor-\left\lfloor\frac{99}{66}\right\rfloor=4-1=3$

וחיתוך של כל השלושה: $|A_1\cap A_2\cap A_3|=\left\lfloor\frac{300}{330}\right\rfloor-\left\lfloor\frac{99}{330}\right\rfloor=0$.

למעשה אנו מחפשים את $|\overline{A_1}\cap\overline{A_2}\cap\overline{A_3}|$, לכן:

$$|\overline{A_1}\cap\overline{A_2}\cap\overline{A_3}|=|U|-|A_1|-|A_2|-|A_3|+|A_1\cap A_2|+|A_1\cap A_3|+|A_2\cap A_3|-|A_1\cap A_2\cap A_3|$$
$$=201-18-34-41+7+4+3-0=122$$""",
      points=9),
    Q(2, "ב", "computation", "recurrences",
      r"(8 נק') נתונה נוסחת הנסיגה: $a_n=3a_{n-1}-2a_{n-2}+2^n,\ a_0=1,\ a_1=3$. מצאו נוסחה מפורשת של $a_n$.",
      r"""$a_n=a_n^h+a_n^p$

$x^2=3x-2,\quad x_1=2,\ x_2=1\Rightarrow a_n^h=c_1+c_2\cdot2^n$

$a_n^p=A\cdot n\cdot2^n$

$A\cdot n\cdot2^n=3A\cdot(n-1)\cdot2^{n-1}-2A\cdot(n-2)\cdot2^{n-2}+2^n$

$A\cdot n\cdot4=3A\cdot(n-1)\cdot2-2A\cdot(n-2)+4$

$4An=6An-6A-2An+4A+4$

$0=-2A+4,\quad A=2,\quad a_n^p=2n\cdot2^n$

$a_n=c_1+c_2\cdot2^n+2n\cdot2^n$

$a_0=c_1+c_2=1$

$a_1=c_1+c_2\cdot2+4=3$

$c_1+c_2=1,\quad c_1+2c_2=-1$

$c_2=-2,\quad c_1=3$

תשובה (כפי שמודפסת בפתרון המקורי): $a_n=3-2^n+2n\cdot2^n$""",
      points=8,
      hold="The printed final answer does not satisfy a_0 = 1: with c1=3, c2=-2 the formula is 3-2*2^n+2n*2^n, "
           "but the printed last line is 3-2^n+2n*2^n (p.5, Q2b). Official key not changed."),
    Q(2, "ג", "computation", "divisibility_primes",
      "(8 נק') חשבו את מספר המחלקים הזוגיים של $m$, כאשר\n"
      r"$$m=\sum_{k=0}^{n}\left(\binom nk\cdot4^{n+k}\cdot10^{n-k}\right)\cdot\sum_{k=0}^{n}\left(\binom nk\cdot2^{n-k}\cdot7^{n+k}\right)$$",
      r"""נוציא את הגורמים שאינם תלויים ב-$k$ ונשתמש בבינום של ניוטון:

$$m=\left(4^n\cdot\sum_{k=0}^{n}\binom nk\cdot4^k\cdot10^{n-k}\right)\cdot\left(7^n\cdot\sum_{k=0}^{n}\binom nk\cdot2^{n-k}\cdot7^k\right)=28^n\cdot14^n\cdot9^n=4^n\cdot7^n\cdot2^n\cdot7^n\cdot3^{2n}=2^{3n}\cdot7^{2n}\cdot3^{2n}$$

מחלק זוגי הוא מהצורה $d=2^a\cdot7^b\cdot5^c,\ a>0,\ b,c\ge0$ (כך מודפס בפתרון המקורי; הראשוני השלישי ב-$m$ הוא 3, והספירה שלהלן היא עבורו).

תשובה: $3n\cdot(2n+1)^2$""",
      points=8),

    # ---------------- Q3 ----------------
    Q(3, "א", "proof", "euler_phi",
      r"(8 נק') הוכיחו $12\mid\varphi(21n)$, כאשר $\varphi(n)$ פונקציית אוילר ו-$n>2$.",
      r"""נכתוב $n=3^a\cdot7^b\cdot m$, כאשר $\gcd(3,m)=\gcd(7,m)=1$ ו-$a,b\ge0$.

$21n=21\cdot3^a\cdot7^b\cdot m=3^{a+1}\cdot7^{b+1}\cdot m$

$$\varphi(21n)=\varphi\left(3^{a+1}\cdot7^{b+1}\cdot m\right)=\varphi\left(3^{a+1}\right)\cdot\varphi\left(7^{b+1}\right)\cdot\varphi(m)$$
$$=\left(3^{a+1}-3^a\right)\cdot\left(7^{b+1}-7^b\right)\cdot\varphi(m)=3^a\cdot7^b\cdot2\cdot6\cdot\varphi(m)=12\cdot3^a\cdot7^b\cdot\varphi(m)$$

לכן $12\mid\varphi(21n)$.""",
      points=8),
    Q(3, "ב", "computation", "selections_repetition",
      r"(9 נק') תהי הקבוצה $A=\{a,b,c,d\}$. כמה מילים בנות 25 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: "
      "אות $a$ מופיעה לפחות 4 פעמים, אות $b$ מופיעה לפחות 7 פעמים, אות $c$ מופיעה לפחות פעמיים, "
      "אות $d$ מופיעה לפחות 3 פעמים?",
      r"""נסמן: $x_1$ מספר ההופעות של האות $a$, $x_2$ של $b$, $x_3$ של $c$, $x_4$ של $d$.

$$\Omega=\{(x_1,x_2,x_3,x_4):\ x_1+x_2+x_3+x_4=25,\ 4\le x_1,\ 7\le x_2,\ 2\le x_3,\ 3\le x_4\}$$

$$|\Omega|=D(4,\,25-4-7-2-3)=D(4,9)=C(12,3)=220$$""",
      points=9),
    Q(3, "ג", "computation", "euler_hamilton",
      "(8 נק')\n\n"
      r"**ג1.** (4 נק') האם קיים גרף $P_n,\ n>1$ כך שמשלים שלו יהיה גרף Euler? נמקו."
      "\n\n"
      r"**ג2.** (4 נק') לאילו ערכי $n$ המשלים של הגרף $P_n,\ n>1$ יהיה גרף המילטון? נמקו.",
      r"""בפתרון $P_n=(V,E)$ הוא מסלול על $n$ צמתים: $V=\{v_1,\dots,v_n\}$, $E=\{(v_1,v_2),(v_2,v_3),\dots,(v_{n-1},v_n)\}$.

**ג1.**
- עבור $n=2,3$: $\overline{P_n}$ אינו קשיר, ולכן אינו Euler.
- עבור $n$ זוגי, $n>3$: $\deg_{\overline{P_n}}(v_2)=n-3$ אי-זוגי, ולכן אינו Euler.
- עבור $n$ אי-זוגי, $n>3$: $\deg_{\overline{P_n}}(v_1)=n-2$ אי-זוגי, ולכן אינו Euler.

תשובה: $\overline{P_n}$ אינו Euler לכל $n=2,3,\dots$ (לא קיים $n$ כזה).

**ג2.**
- עבור $n=2,3$: $\overline{P_n}$ אינו קשיר, ולכן אינו המילטון.
- עבור $n=4$: $\overline{P_4}=P_4$, ולכן אינו המילטון.
- עבור $n=5$: $\overline{P_5}$ הוא גרף "בית", ולכן הוא המילטון.
- עבור $n>5$: $\deg_{\overline{P_n}}(v_1)=\deg_{\overline{P_n}}(v_n)=n-2\ge\frac n2$ ו-$\deg_{\overline{P_n}}(v_j)=n-3\ge\frac n2$ עבור $j=2,3,\dots,n-1$, ולכן $\overline{P_n}$ המילטון (משפט Dirac).

תשובה: $\overline{P_n}$ המילטון עבור $n=5,6,\dots$""",
      points=8),

    # ---------------- Q4 ----------------
    Q(4, "א", "computation", "euler_hamilton",
      "(6 נק') מה ערכו של המסלול הארוך ביותר בגרף $K_{11}$.",
      r"""$K_{11}$ הוא גרף קשיר שכל דרגותיו זוגיות, ולכן $K_{11}$ הוא גרף Euler.

$|E|=\frac{11\cdot10}{2}=55$, ולכן המסלול הארוך ביותר הוא מעגל אוילר באורך 55.""",
      points=6),
    Q(4, "ב", "computation", "graph_basics",
      "(6 נק') האם קיים גרף בעל סדרת דרגות $3,3,4,4,4,6,6$? אם כן בנו גרף בעל סדרת דרגות הנ\"ל.",
      r"""נבנה בשלבים (מוחקים צומת מדרגה 6 המחובר לכל שאר הצמתים, ואז צומת מדרגה 5 המחובר לכל הצמתים שנותרו).

סדרת הדרגות של $G$ (לפי $v_1,\dots,v_7$): $3,3,4,4,4,6,6$.

אחרי מחיקת $v_7$ (דרגה 6): $v_1,\dots,v_6$ בדרגות $2,2,3,3,3,5$.

אחרי מחיקת $v_6$ (דרגה 5): $v_1,\dots,v_5$ בדרגות $1,1,2,2,2$.

$G-\{v_6,v_7\}=v_1\to v_2\to v_3\to v_4\to v_5$ (כך מודפס בפתרון המקורי; סדרת הדרגות $1,1,2,2,2$ היא של מסלול על 5 צמתים, ותוויות הצמתים בטבלה אינן מתאימות בדיוק לרשימה זו).

תשובה: קיים.""",
      points=6),
    Q(4, "ג", "proof", "graph_basics",
      "(13 נק') נתון גרף $G=(V,E)$ לא מכוון, קשיר, בעל צלעות שבו יש צומת אחד בלבד בדרגה 2 ושאר הצמתים בדרגה 3. הוכח:\n\n"
      "**ג1.** (6 נק') בגרף $G$ יש מספר אי-זוגי של צמתים.\n\n"
      "**ג2.** (7 נק') גרף $G$ אינו דו-צדדי.",
      r"""**ג1.** $\deg(v_1)=2,\ \deg(v_j)=3,\ j=2,3,\dots,|V|$.

מנוסחת הדרגות: $2+3(|V|-1)=2|E|$, כלומר $3|V|-1=2|E|$, ולכן $|V|-1=2(|E|-|V|)$ זוגי, ומכאן $|V|$ אי-זוגי.

**ג2.** נניח שהגרף $G=(V,E)$ דו-צדדי, $G=(V,E)=(A,B,E)$, ו-$v_1\in A$. בגרף דו-צדדי סכום הדרגות ב-$A$ שווה לסכום הדרגות ב-$B$ (שווה למספר הצלעות):

$$\sum_{v_j\in A}\deg(v_j)=\sum_{v_j\in B}\deg(v_j)$$
$$2+3(|A|-1)=3|B|\ \Rightarrow\ 3(|A|-|B|)=1\iff \text{False}$$

קיבלנו סתירה, ולכן הגרף אינו דו-צדדי.""",
      points=13),

    # ---------------- Q5 ----------------
    Q(5, "א", "computation", "permutations_arrangements",
      "**א1.** (4 נק') המונח: תמורה אי-סדר מלא.\n\n"
      r"**א2.** (4 נק') שאלה: תהי הקבוצה $A=\{1,2,3,4,5,6,7,8\}$. מצאו את מספר התמורות אי-סדר מלא של הקבוצה $A$.",
      r"""**א1. הגדרה:** תהי הקבוצה $A=\{1,2,3,\dots,n\}$. תמורה $(j_1,j_2,\dots,j_n)$ המקיימת את התנאי $\forall i\in\mathbb{N}:\ 1\le i\le n\to j_i\ne i$ נקראת תמורה אי-סדר מלא.

**א2.** מספר תמורות אי-סדר מלא עבור הקבוצה $A=\{1,2,3,\dots,8\}$:

$$D_8=8!\left(\frac1{0!}-\frac1{1!}+\frac1{2!}-\frac1{3!}+\dots+\frac1{8!}\right)=14833$$""",
      points=8),
    Q(5, "ב", "truefalse", "trees",
      "**ב1.** (4 נק') המונח: גרף פורש.\n\n"
      "**ב2.** (5 נק') שאלה: הוכח או הפרך את הטענה הבאה: יהי $G=(V,E)$ גרף לא מכוון וקשיר, $n=|V|>2$. "
      "הטענה: בגרף $G$ קיים עץ פורש.",
      r"""**ב1. הגדרה:** יהי $G=(V,E)$ גרף לא מכוון וקשיר. תת גרף $H=(V,E_1)$, כאשר $E_1\subset E$ קוראים גרף פורש של $G$.

**ב2.** הטענה נכונה. נוכיח אותה.

אם בגרף $G=(V,E)$ אין מעגלים, אז הוא יהיה עץ פורש של עצמו.

אם בגרף $G$ יש מעגלים, אז אפשר מכל מעגל להוריד צלעות שונות זו מזו ולקבל עדיין גרף קשיר וללא מעגלים, והוא יהיה עץ פורש של הגרף $G$.""",
      verdict=True, points=9),
    Q(5, "ג", "computation", "euler_phi",
      r"(8 נק') חשבו $\phi\left(\sum_{k=0}^{11}\binom{11}{k}\cdot k\cdot7^k\right)$, כאשר $\phi$ היא פונקציית אוילר.",
      r"""$$(x+1)^{11}=\sum_{k=0}^{11}\binom{11}{k}x^k$$

נגזור את שני האגפים: $11(x+1)^{10}=\sum_{k=0}^{11}\binom{11}{k}\cdot k\,x^{k-1}$.

נכפול ב-$x$: $11x(x+1)^{10}=\sum_{k=0}^{11}\binom{11}{k}\cdot k\,x^k$, ונציב $x=7$:

$$11\cdot7\cdot(7+1)^{10}=\sum_{k=0}^{11}\binom{11}{k}\cdot k\cdot7^k$$

$$\sum_{k=0}^{11}\binom{11}{k}\cdot k\cdot7^k=11\cdot7\cdot2^{30}$$

$$\phi\left(11\cdot7\cdot2^{30}\right)=10\cdot6\cdot\left(2^{30}-2^{29}\right)=3.221225472\cdot10^{10}$$""",
      points=8),
]

exam = {
    "examCode": "25S-A",
    "examLabel": "קיץ 2025, מועד א'",
    "year": 2025,
    "examDate": "קיץ 2025",
    "sourceFile": "25S-A exam (typed, pp.1-9)",
    "solutionFile": "25S-A typed solution (same PDF)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
