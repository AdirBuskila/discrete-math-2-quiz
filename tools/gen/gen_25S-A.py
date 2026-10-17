# -*- coding: utf-8 -*-
"""Generator for tools/raw/25S-A.json -- discrete-math-2, summer 2025, moed A (flagship sitting).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_25S-A.py

Source: sitting 25S-A, 9 pp (cover, then 5 questions each followed by a TYPED solution). Header: course 20068,
3 hours, formula sheet, "solve 4 of 5" (25 points each, 100 counted). The date line is blank in the source.
Each question is split into its printed parts (a, b, c). A part that has numbered sub-parts (1 = define the term,
2 = short question) is ONE item whose text and solution keep both sub-parts.

Transcription notes
- Q2b (p.5): the printed final line is a_n = 3 - 2^n + 2n*2^n, but the printed derivation (c1=3, c2=-2) and the
  initial values give 3 - 2*2^n + 2n*2^n (a_0 = 1 only for the latter). Orchestrator ruling: ship with the official
  working and only the final form corrected; solutionSource "solved", official False, solution prefixed
  "הפתרון הרשמי עם תיקון שגיאה בתשובה הסופית". Verified for n=0..30 in verify.py. (Was held; hold removed.)
- Q2c (p.5): the solution writes d = 2^a 7^b 5^c; the prime in m is 3, not 5 (typo). Final answer 3n(2n+1)^2 is right.
- Q4b (p.7): in the Havel-Hakimi table the last path is written v1->v2->v3->v4->v5, but those vertices have degrees
  1,1,2,2,2, so the labels do not form that path. The conclusion (the sequence is realisable) is right.
- Q1a (p.2): the printed solution labels the domain size n=6 and the codomain size m=4 while the printed formula uses
  n for the codomain; the computed value 4^6-4*3^6+6*2^6-4 = 1560 is right.
- Q5b1 (p.9): the typed text says "E1 subset of E" for a spanning subgraph; transcribed as printed.
- P_n in Q3c is the path on n vertices (the solution defines it); the question text itself does not.

Checks (tools/verify/25S-A/verify.py, sympy + networkx + brute force):
Q1a 1560 (enumeration of all 4^6 maps), Q2a 122 (enumeration 100..300), Q2b rsolve + iteration n=0..30 give 3-2*2^n+2n*2^n (the printed
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
      r"""הפתרון הרשמי עם תיקון שגיאה בתשובה הסופית: בפתרון המקורי מודפסת התשובה הסופית $a_n=3-2^n+2n\cdot2^n$, אך היא אינה מקיימת את $a_0=1$ (היא נותנת $a_0=2$). תוקן רק הביטוי הסופי, ל-$a_n=3-2\cdot2^n+2n\cdot2^n$, בהתאם לערכים $c_1=3,\ c_2=-2$ שמופיעים בפתרון עצמו. שאר הדרך כפי שבפתרון הרשמי.

$a_n=a_n^h+a_n^p$

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

תשובה (מתוקנת): $a_n=3-2\cdot2^n+2n\cdot2^n$""",
      points=8, solutionSource="solved", official=False),
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
      r"""הבהרה: "Euler" כאן פירושו מעגל אוילר.

בפתרון $P_n=(V,E)$ הוא מסלול על $n$ צמתים: $V=\{v_1,\dots,v_n\}$, $E=\{(v_1,v_2),(v_2,v_3),\dots,(v_{n-1},v_n)\}$.

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

$|E|=\frac{11\cdot10}{2}=55$, ולכן המסלול הארוך ביותר הוא מעגל אוילר באורך 55.

הבהרה: הספירה מניחה ש"מסלול" הוא מסלול שאינו חוזר על קשת (trail), כמו בהגדרת הקורס; אם הכוונה למסלול פשוט (בלי חזרה על צמתים) התשובה שונה.""",
      points=6),
    Q(4, "ב", "computation", "graph_basics",
      "(6 נק') האם קיים גרף בעל סדרת דרגות $3,3,4,4,4,6,6$? אם כן בנו גרף בעל סדרת דרגות הנ\"ל.",
      r"""הפתרון הרשמי עם תיקון בדוגמה: הדוגמה לסדרה $1,1,2,2,2$ ("מסלול על 5 צמתים") הוחלפה ב-$K_3\cup K_2$, כי לצמתי מסלול על 5 צמתים דרגות $1,2,2,2,1$.

נבנה בשלבים (מוחקים צומת מדרגה 6 המחובר לכל שאר הצמתים, ואז צומת מדרגה 5 המחובר לכל הצמתים שנותרו).

סדרת הדרגות של $G$ (לפי $v_1,\dots,v_7$): $3,3,4,4,4,6,6$.

אחרי מחיקת $v_7$ (דרגה 6): $v_1,\dots,v_6$ בדרגות $2,2,3,3,3,5$.

אחרי מחיקת $v_6$ (דרגה 5): $v_1,\dots,v_5$ בדרגות $1,1,2,2,2$.

דוגמה: $G-\{v_6,v_7\}=K_3\cup K_2$, כלומר משולש (שלושה צמתים בדרגה 2) וצלע נפרדת (שני צמתים בדרגה 1). סדרת הדרגות היא $2,2,2,1,1$, כלומר $1,1,2,2,2$ (בפתרון המקורי נכתב כאן "מסלול על 5 צמתים", אך למסלול כזה דרגות $1,2,2,2,1$).

תשובה: קיים.""",
      points=6, solutionSource="solved", official=False),
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

# ---------------------------------------------------------------------------------------------
# Phase 4: rubric / pitfalls / guided steps (ai-draft), every step derived from the stored solution.
# Every number below is machine-checked in tools/verify/25S-A/verify.py (section "STEPS").
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


# ----- shared proof lines (order / findbug share the SAME lines; findbug changes exactly one) -----
Q1C_LINES = [
    r"נסמן $C_6=(V,E)$ עם $V=\{v_1,\dots,v_6\}$ ו-$E=\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\}$.",
    r"הצלעות $(v_1,v_3),(v_3,v_5),(v_5,v_1)$ אינן ב-$E$, ולכן הן ב-$\overline{E}$.",
    r"לכן $C_3=\{(v_1,v_3),(v_3,v_5),(v_5,v_1)\}\subseteq\overline{E}$ הוא מעגל באורך 3 ב-$\overline{C_6}$.",
    r"גרף דו-צדדי אינו יכול להכיל מעגל אי-זוגי, ולכן $\overline{C_6}$ אינו דו-צדדי.",
]
Q1C_BUG = list(Q1C_LINES)
Q1C_BUG[2] = r"לכן $C_3=\{(v_1,v_2),(v_3,v_5),(v_5,v_1)\}\subseteq\overline{E}$ הוא מעגל באורך 3 ב-$\overline{C_6}$."

Q3A_LINES = [
    r"נכתוב $n=3^a\cdot7^b\cdot m$, כאשר $\gcd(3,m)=\gcd(7,m)=1$ ו-$a,b\ge0$.",
    r"$21n=3^{a+1}\cdot7^{b+1}\cdot m$.",
    r"$\varphi(21n)=\varphi\left(3^{a+1}\right)\cdot\varphi\left(7^{b+1}\right)\cdot\varphi(m)$.",
    r"$\varphi(21n)=\left(3^{a+1}-3^a\right)\cdot\left(7^{b+1}-7^b\right)\cdot\varphi(m)$.",
    r"$\varphi(21n)=3^a\cdot7^b\cdot2\cdot6\cdot\varphi(m)=12\cdot3^a\cdot7^b\cdot\varphi(m)$.",
    r"לכן $12\mid\varphi(21n)$.",
]
Q3A_BUG = list(Q3A_LINES)
Q3A_BUG[4] = r"$\varphi(21n)=3^a\cdot7^b\cdot2\cdot4\cdot\varphi(m)=8\cdot3^a\cdot7^b\cdot\varphi(m)$."

Q4B_LINES = [
    r"סדרת הדרגות של $G$ היא $3,3,4,4,4,6,6$.",
    r"מוחקים את $v_7$ (דרגה 6, מחובר לכל השאר) ומקבלים $2,2,3,3,3,5$.",
    r"מוחקים את $v_6$ (דרגה 5, מחובר לכל הנותרים) ומקבלים $1,1,2,2,2$.",
    r"ל-$K_3\cup K_2$ (משולש וצלע נפרדת) יש דרגות $2,2,2,1,1$, כלומר $1,1,2,2,2$; מחזירים את $v_6,v_7$ ומקבלים גרף: קיים.",
]

Q4C_LINES = [
    r"נניח בשלילה ש-$G=(A,B,E)$ דו-צדדי, ו-$v_1\in A$.",
    r"בגרף דו-צדדי $\sum_{v\in A}\deg(v)=\sum_{v\in B}\deg(v)$ (שניהם שווים למספר הצלעות).",
    r"לכן $2+3(|A|-1)=3|B|$.",
    r"מכאן $3(|A|-|B|)=1$.",
    r"אין שלם $|A|-|B|$ המקיים זאת (סתירה), ולכן $G$ אינו דו-צדדי.",
]
Q4C_BUG = list(Q4C_LINES)
Q4C_BUG[3] = r"מכאן $3(|A|-|B|)=0$, כלומר $|A|=|B|$."

Q5B_LINES = [
    r"הטענה נכונה, ונוכיח אותה.",
    r"אם ב-$G$ אין מעגלים, אז $G$ עצמו הוא עץ פורש של עצמו.",
    r"אם ב-$G$ יש מעגלים, מוחקים מכל מעגל צלע, כאשר הצלעות שנמחקות שונות זו מזו.",
    r"הגרף שנשאר קשיר וחסר מעגלים, ולכן הוא עץ פורש של $G$.",
]
Q5B_BUG = list(Q5B_LINES)
Q5B_BUG[2] = r"אם ב-$G$ יש מעגלים, מוחקים מכל מעגל צומת, כאשר הצמתים שנמחקים שונים זה מזה."

ENRICH = {
    (1, "א"): dict(
        rubric=rub((r"הגדרת פונקציה על: לכל $y$ בטווח קיים $x$ בתחום עם $f(x)=y$", 4),
                   (r"שימוש בנוסחת ההכלה וההדחה לפונקציות על: $4^6-\binom41 3^6+\binom42 2^6-\binom43 1^6$", 3),
                   (r"חישוב נכון של התוצאה $1560$", 2)),
        pitfalls=[r"להחליף בין גודל התחום לגודל הטווח ולכתוב $6^4$ במקום $4^6$.",
                  "לשכוח את האיבר האחרון בסכום המתחלף, או לטעות בסימן."],
        steps=[
            ch(r"איזו שיטה מתאימה לספירת הפונקציות **על** מ-$\{1,\dots,6\}$ אל $\{1,2,3,4\}$?",
               ["הכלה והדחה על ערכי הטווח שאינם מתקבלים", "מספר התמורות של 6 איברים", r"מכפלת $4\cdot6$", r"$\binom64$"],
               "a", "מורידים מכלל הפונקציות את אלה שמחמיצות ערך אחד או יותר, בסימנים מתחלפים."),
            num(r"כמה פונקציות יש בסך הכול מ-$\{1,\dots,6\}$ אל $\{1,2,3,4\}$ (האיבר הראשון בנוסחה)?", 4096,
                "$4^6=4096$."),
            num(r"מהו האיבר $\binom41 3^6$ בנוסחה?", 2916, r"$4\cdot729=2916$."),
            num("מהו מספר הפונקציות על?", 1560, "$4096-2916+384-4=1560$."),
        ]),
    (1, "ב"): dict(
        rubric=rub((r"הגדרת $g=\theta(f)$ עם $c_1,c_2,N$", 4),
                   (r"שימוש בקריטריון הגבול: הגבול של $\frac{g}{f}$ הוא מספר חיובי סופי", 1),
                   ("חישוב הגבול בעזרת כלל לופיטל", 2),
                   (r"מסקנה: הגבול $\frac13>0$ ולכן $\theta$", 1)),
        pitfalls=["להסתפק בגבול קיים: צריך גבול סופי וחיובי.",
                  r"להתעלם מהנגזרת של $\ln^2 n$, שהיא $2\ln n\cdot\frac1n$."],
        steps=[
            ch("באיזו שיטה כדאי להוכיח את הטענה?",
               [r"קריטריון הגבול של $\frac{g(n)}{f(n)}$", r"אינדוקציה על $n$", "שובך היונים", r"בדיקת $n=1$ בלבד"],
               "a", r"קריטריון הגבול: אם הגבול הוא $L>0$ סופי, אז $g=\theta(f)$."),
            num(r"מהו $\lim_{n\to\infty}\frac{n^2+2\ln n}{3n^2+\ln^2 n}$ (כתבו כעשרוני)?", 0.3333,
                r"הגבול הוא $\frac13$.", tol=0.005),
            ch(r"מה צריך להתקיים לגבול $L$ כדי להסיק $\theta$?",
               [r"$L$ סופי וגדול מ-$0$", r"$L=0$", r"$L=\infty$", r"$L=1$ בדיוק"], "a",
               "הגבול חייב להיות מספר ממשי חיובי."),
        ]),
    (1, "ג"): dict(
        rubric=rub(("הגדרת גרף דו-צדדי: $A,B$ זרות ולא ריקות והצלעות בין הצדדים", 4),
                   (r"זיהוי $C_3$ ב-$\overline{C_6}$ על הצמתים $v_1,v_3,v_5$", 2),
                   ("מסקנה: מעגל אי-זוגי ולכן אינו דו-צדדי", 2)),
        pitfalls=[r"לטעון ש-$\overline{C_6}$ דו-צדדי רק כי $C_6$ עצמו דו-צדדי.",
                  "לא לנמק: צריך להראות מעגל אי-זוגי מפורש."],
        steps=[
            num(r"כמה צלעות יש ב-$\overline{C_6}$?", 9, r"$\binom62-6=15-6=9$."),
            ch(r"איזה מעגל אי-זוגי מופיע ב-$\overline{C_6}$?",
               [r"$v_1,v_3,v_5$", r"$v_1,v_2,v_3$", r"$v_1,v_2,v_3,v_4$", r"$v_2,v_4,v_6,v_1$"], "a",
               r"$(v_1,v_3),(v_3,v_5),(v_5,v_1)\notin E$, ולכן הן במשלים."),
            {"type": "order", "prompt": "סדרו את הנימוק.", "lines": Q1C_LINES,
             "explain": "הגדרת הגרף, זיהוי הצלעות במשלים, המעגל, ואז המסקנה."},
            {"type": "findbug", "prompt": "באיזו שורה יש טעות?", "lines": Q1C_BUG, "bugIndex": 2,
             "explain": r"$(v_1,v_2)\in E$, ולכן אינה במשלים."},
        ]),
    (2, "א"): dict(
        rubric=rub((r"$|U|=201$ וסימון הקבוצות $A_1,A_2,A_3$", 2),
                   (r"חישוב נכון של $|A_1|,|A_2|,|A_3|$", 2),
                   ("חישוב נכון של החיתוכים בזוגות ושל חיתוך שלושתם", 3),
                   ("הצבה בנוסחת ההכלה וההדחה והתוצאה $122$", 2)),
        pitfalls=[r"לספור $\lfloor 300/11\rfloor$ בלי להחסיר את $\lfloor 99/11\rfloor$ (המספרים מתחילים ב-100).",
                  "להשתמש במכפלה במקום בכפולה המשותפת הקטנה ביותר: ל-6 ול-5 היא 30."],
        steps=[
            ch("איך סופרים את המספרים שלא מתחלקים באף אחד משלושת המספרים?",
               [r"$|U|$ פחות האיחוד, בהכלה והדחה", r"מחסירים את $|A_1|+|A_2|+|A_3|$ בלבד",
                r"$|U|\cdot\frac{1}{11\cdot6\cdot5}$", r"$|A_1|\cdot|A_2|\cdot|A_3|$"],
               "a", r"הנוסחה: $|U|-\sum|A_i|+\sum|A_i\cap A_j|-|A_1\cap A_2\cap A_3|$."),
            num("כמה מספרים מ-100 עד 300 מתחלקים ב-11?", 18, r"$\lfloor300/11\rfloor-\lfloor99/11\rfloor=27-9=18$."),
            num("כמה מספרים מ-100 עד 300 מתחלקים גם ב-6 וגם ב-5 (כלומר ב-30)?", 7, "$10-3=7$."),
            num("כמה מספרים מ-100 עד 300 מתחלקים ב-11, ב-6 וב-5 יחד (כלומר ב-330)?", 0, "$330>300$, ולכן אין."),
            num("כמה מספרים ב-$U$ לא מתחלקים באף אחד מ-11, 6, 5?", 122, "$201-18-34-41+7+4+3-0=122$."),
        ]),
    (2, "ב"): dict(
        rubric=rub((r"פתרון הומוגני: שורשי $x^2=3x-2$ הם $2,1$ ו-$a_n^h=c_1+c_2\cdot2^n$", 2),
                   (r"ניחוש פתרון פרטי $A\cdot n\cdot2^n$ והצבה", 2),
                   (r"מציאת $A=2$", 2),
                   (r"מציאת $c_1=3,\ c_2=-2$ מהתנאים ההתחלתיים ורישום הנוסחה הסופית", 2)),
        pitfalls=[r"לנחש פתרון פרטי $A\cdot2^n$ כשהמספר 2 הוא כבר שורש אופייני: צריך להכפיל ב-$n$.",
                  r"לא לבדוק את התשובה הסופית מול $a_0=1$ ו-$a_1=3$."],
        steps=[
            ch(r"מדוע הפתרון הפרטי הוא $A\cdot n\cdot2^n$ ולא $A\cdot2^n$?",
               ["כי 2 הוא שורש של המשוואה האופיינית", r"כי המעריך הוא $n$", r"כי $a_0=1$", "כי 1 הוא שורש"],
               "a", r"אגף ימין $2^n$ כבר פותר את ההומוגנית, ולכן מכפילים ב-$n$."),
            num(r"מהו $A$ בפתרון הפרטי?", 2, r"$0=-2A+4$, ולכן $A=2$."),
            num(r"מהו $c_2$?", -2, r"$c_1+c_2=1$ ו-$c_1+2c_2=-1$ נותנות $c_2=-2$."),
            num(r"לפי הנוסחה הסופית $3-2\cdot2^n+2n\cdot2^n$, מהו $a_5$?", 259, "$3-64+320=259$."),
        ]),
    (2, "ג"): dict(
        rubric=rub((r"שימוש בבינום של ניוטון לסכומים: $14^n$ ו-$9^n$", 3),
                   (r"פירוק $m=2^{3n}\cdot3^{2n}\cdot7^{2n}$", 2),
                   (r"ספירת מחלקים זוגיים ($a>0$)", 3)),
        pitfalls=["לספור את כל המחלקים במקום רק את הזוגיים: החזקה של 2 חייבת להיות חיובית.",
                  r"לטעות בהוצאת $4^n$ ו-$7^n$ מחוץ לסכומים."],
        steps=[
            ch(r"כמה שווה $\sum_{k=0}^{n}\binom nk 4^k 10^{n-k}$?",
               [r"$14^n$", r"$40^n$", r"$6^n$", r"$4^n\cdot10^n$"], "a", r"בינום ניוטון: $(4+10)^n$."),
            num(r"מהו $m$ עבור $n=1$?", 3528, r"$m=2^3\cdot3^2\cdot7^2=8\cdot9\cdot49=3528$."),
            num(r"במחלק זוגי של $m$ עבור $n=2$ (שם $2^6$ מחלק את $m$), כמה ערכים אפשריים יש לחזקת 2?", 6,
                "$a=1,\\dots,6$."),
            num(r"כמה מחלקים זוגיים יש ל-$m$ עבור $n=2$?", 150, r"$3n(2n+1)^2=6\cdot25=150$."),
        ]),
    (3, "א"): dict(
        rubric=rub((r"כתיבת $n=3^a\cdot7^b\cdot m$ עם $m$ זר ל-3 ול-7", 2),
                   (r"פירוק $\varphi(21n)$ לפי כפליות", 2),
                   (r"חישוב $\varphi$ של חזקות הראשוניים", 2),
                   ("הוצאת הגורם 12 והמסקנה", 2)),
        pitfalls=[r"להניח ש-$\gcd(n,21)=1$: ייתכן ש-3 או 7 מחלקים את $n$ (לכן $a,b\ge0$).",
                  r"לטעות בנוסחה $\varphi(p^k)=p^k-p^{k-1}$ ולכתוב $p^k-1$."],
        steps=[
            ch(r"איזו הצגה של $n$ מתאימה להוכחה?",
               [r"$n=3^a7^bm$ עם $m$ זר ל-3 ול-7", r"$n=21k$", r"$n$ ראשוני", r"$n=2^a$"],
               "a", r"כך $21n=3^{a+1}7^{b+1}m$ וניתן לחשב $\varphi$ בנפרד לכל גורם."),
            num(r"מהו $\varphi(21n)$ עבור $n=3$?", 36, r"$a=1,\ b=0,\ m=1$: $12\cdot3=36$."),
            {"type": "order", "prompt": "סדרו את שורות ההוכחה.", "lines": Q3A_LINES,
             "explain": "הצגה, 21n, כפליות, ערכי φ, הוצאת 12, מסקנה."},
            {"type": "findbug", "prompt": "באיזו שורה יש טעות?", "lines": Q3A_BUG, "bugIndex": 4,
             "explain": r"$7^{b+1}-7^b=6\cdot7^b$, ולכן הגורם הוא $2\cdot6=12$ ולא $2\cdot4=8$."},
        ]),
    (3, "ב"): dict(
        rubric=rub((r"סימון $x_1,\dots,x_4$ והצגת הבעיה כמשוואה עם חסמים תחתונים", 2),
                   ("הורדת המינימום מכל משתנה: $25-4-7-2-3=9$", 3),
                   (r"שימוש ב-$D(4,9)=C(12,3)$", 2),
                   ("התוצאה $220$", 2)),
        pitfalls=["לספור סדרים שונים של אותן אותיות: כאן אין חשיבות לסדר.",
                  r"לשכוח את החסמים התחתונים ולכתוב $D(4,25)$."],
        steps=[
            num("כמה אותיות פנויות נשארות אחרי שמניחים את המינימום הנדרש מכל אות?", 9, "$25-4-7-2-3=9$."),
            ch("איזה ביטוי מייצג את מספר הפתרונות אחרי ההזזה?",
               [r"$C(12,3)$", r"$C(9,4)$", r"$C(25,3)$", r"$C(13,4)$"], "a", r"$D(4,9)=C(9+4-1,\,4-1)=C(12,3)$."),
            num("מהו מספר המילים?", 220, "$C(12,3)=220$."),
        ]),
    (3, "ג"): dict(
        rubric=rub((r"ג1: $n=2,3$ המשלים לא קשיר ולכן אינו אוילר", 1),
                   (r"ג1: $n$ זוגי, $\deg(v_2)=n-3$ אי-זוגי", 1),
                   (r"ג1: $n$ אי-זוגי, $\deg(v_1)=n-2$ אי-זוגי; מסקנה: אין $n$ כזה", 2),
                   (r"ג2: $n=2,3,4$ אינו המילטון", 1),
                   ('ג2: $n=5$ גרף ה"בית" הוא המילטון', 1),
                   (r"ג2: $n>5$ לפי משפט Dirac", 2)),
        pitfalls=[r"לשכוח את המקרים הקטנים $n=2,3$ שבהם המשלים אינו קשיר.",
                  r"לטעון ש-$\overline{P_4}$ המילטון: הוא עצמו מסלול $P_4$."],
        steps=[
            num(r"מהי הדרגה של $v_2$ ב-$\overline{P_6}$?", 3, "$n-3=3$, אי-זוגית."),
            num(r"מהי הדרגה של $v_1$ ב-$\overline{P_7}$?", 5, "$n-2=5$, אי-זוגית."),
            ch(r"עבור אילו $n>1$ המשלים $\overline{P_n}$ הוא גרף אוילר?",
               ["אף $n$", r"כל $n$ זוגי", r"כל $n$ אי-זוגי", r"$n\ge5$"], "a",
               "בכל המקרים יש צומת בדרגה אי-זוגית או שהגרף אינו קשיר."),
            ch(r"עבור אילו $n$ המשלים $\overline{P_n}$ הוא המילטון?",
               [r"$n\ge5$", r"$n\ge4$", r"$n$ זוגי בלבד", r"$n\ge3$"], "a",
               'עבור $n=5$ זה "בית", ועבור $n>5$ לפי Dirac.'),
        ]),
    (4, "א"): dict(
        rubric=rub((r"$K_{11}$ קשיר וכל דרגותיו זוגיות, ולכן אוילר", 3),
                   (r"מספר הצלעות $\frac{11\cdot10}{2}=55$", 2),
                   ("המסלול הארוך ביותר הוא מעגל אוילר באורך 55", 1)),
        pitfalls=["לספור את הצמתים (11) במקום את הצלעות.",
                  "לחשוב שמעגל אוילר אינו מסלול: כאן הוא המסלול הארוך ביותר."],
        steps=[
            num(r"מהי הדרגה של כל צומת ב-$K_{11}$?", 10, "כל צומת מחובר ל-10 האחרים, ו-10 זוגי."),
            ch(r"מדוע יש ב-$K_{11}$ מעגל אוילר?",
               ["הוא קשיר וכל הדרגות זוגיות", "יש בו 11 צמתים", "הוא דו-צדדי", "הוא עץ"], "a",
               "תנאי אוילר: קשיר ודרגות זוגיות."),
            num(r"מהו אורך המסלול הארוך ביותר ב-$K_{11}$?", 55, "מעגל אוילר עובר בכל 55 הצלעות."),
        ]),
    (4, "ב"): dict(
        rubric=rub((r"מחיקת $v_7$ בדרגה 6 וקבלת $2,2,3,3,3,5$", 2),
                   (r"מחיקת $v_6$ בדרגה 5 וקבלת $1,1,2,2,2$", 2),
                   (r"זיהוי $K_3\cup K_2$ (דרגות $2,2,2,1,1$) כמימוש של $1,1,2,2,2$ והמסקנה שהגרף קיים", 2)),
        pitfalls=["לשכוח להפחית 1 מכל הדרגות הנותרות אחרי מחיקת צומת שמחובר לכולם.",
                  "להסיק שאין גרף בלי לבצע את הצמצום עד סוף."],
        steps=[
            num(r"מהי הדרגה הגדולה ביותר אחרי מחיקת $v_7$ (דרגה 6) מהגרף?", 5, "$6-1=5$."),
            num(r"מהו סכום הדרגות אחרי מחיקת $v_6$ ו-$v_7$?", 8, "$1+1+2+2+2=8$, כלומר 4 צלעות."),
            {"type": "order", "prompt": "סדרו את שלבי הבנייה.", "lines": Q4B_LINES,
             "explain": "מורידים צומת מדרגה מקסימלית שלב אחר שלב עד שמגיעים לסדרה קטנה שאפשר לממש ישירות."},
        ]),
    (4, "ג"): dict(
        rubric=rub((r"ג1: משוואת הדרגות $2+3(|V|-1)=2|E|$", 3),
                   (r"ג1: $|V|-1=2(|E|-|V|)$ זוגי ולכן $|V|$ אי-זוגי", 3),
                   (r"ג2: הנחה בשלילה שהגרף דו-צדדי ו-$v_1\in A$", 1),
                   (r"ג2: סכום הדרגות ב-$A$ שווה לסכום ב-$B$", 3),
                   (r"ג2: המשוואה $2+3(|A|-1)=3|B|$", 2),
                   (r"ג2: סתירה $3(|A|-|B|)=1$", 1)),
        pitfalls=[r"לשכוח לחשב את $\deg(v_1)=2$ בנפרד משאר הצמתים.",
                  "לא להסביר מדוע סכומי הדרגות בשני הצדדים שווים: כל צלע מחברת $A$ אל $B$."],
        steps=[
            num(r"מהו מספר הצלעות בגרף כזה עם $|V|=5$?", 7, r"$3\cdot5-1=2|E|$, ולכן $|E|=7$."),
            ch(r"מדוע $|V|$ חייב להיות אי-זוגי?",
               [r"כי $3|V|-1=2|E|$ זוגי, ולכן $|V|$ אי-זוגי", r"כי $|V|$ ראשוני", "כי יש צומת בדרגה 2", r"כי $|E|$ אי-זוגי"],
               "a", r"$3|V|-1=2|E|$ זוגי."),
            {"type": "order", "prompt": "סדרו את הוכחת ג2.", "lines": Q4C_LINES,
             "explain": "הנחה, שוויון סכומים, משוואה, חישוב, סתירה."},
            {"type": "findbug", "prompt": "באיזו שורה יש טעות?", "lines": Q4C_BUG, "bugIndex": 3,
             "explain": r"$2+3|A|-3=3|B|$ נותן $3(|A|-|B|)=1$, לא $0$."},
        ]),
    (5, "א"): dict(
        rubric=rub((r"הגדרת תמורת אי-סדר מלא: $j_i\ne i$ לכל $i$", 4),
                   (r"שימוש בנוסחה $D_n=n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}$", 2),
                   (r"התוצאה $D_8=14833$", 2)),
        pitfalls=[r"להשתמש ב-$8!$ כאילו כל תמורה היא אי-סדר מלא.",
                  "לטעות בסימנים המתחלפים בסכום."],
        steps=[
            ch(r"איזו מהתמורות של $\{1,2,3,4\}$ היא אי-סדר מלא?",
               [r"$(2,1,4,3)$", r"$(1,3,2,4)$", r"$(3,2,1,4)$", r"$(1,2,4,3)$"], "a", "אין איבר ששומר על מקומו."),
            num("מהו $8!$?", 40320, "$8!=40320$."),
            num("מהו $D_8$?", 14833, r"$8!\left(1-1+\frac12-\dots+\frac1{8!}\right)=14833$."),
        ]),
    (5, "ב"): dict(
        rubric=rub(("הגדרת גרף פורש: תת-גרף על אותה קבוצת צמתים", 4),
                   (r"מקרה בלי מעגלים: $G$ עץ פורש של עצמו", 2),
                   ("מקרה עם מעגלים: מחיקת צלעות מכל מעגל", 2),
                   ("מסקנה: הגרף קשיר וחסר מעגלים", 1)),
        pitfalls=["למחוק צמתים במקום צלעות: גרף פורש חייב להכיל את כל הצמתים.",
                  "למחוק יותר מדי צלעות ולאבד קשירות."],
        steps=[
            ch("מה מוחקים מכל מעגל כדי לשמור על קשירות?",
               ["צלע", "צומת", "שתי צלעות סמוכות", "את כל המעגל"], "a", "מחיקת צלע ממעגל משאירה את הגרף קשיר."),
            {"type": "order", "prompt": "סדרו את ההוכחה.", "lines": Q5B_LINES,
             "explain": "הכרעה, מקרה בלי מעגלים, מקרה עם מעגלים, מסקנה."},
            {"type": "findbug", "prompt": "באיזו שורה יש טעות?", "lines": Q5B_BUG, "bugIndex": 2,
             "explain": "גרף פורש שומר את כל הצמתים, ולכן מוחקים צלעות."},
        ]),
    (5, "ג"): dict(
        rubric=rub((r"גזירת הבינום $(x+1)^{11}$", 2),
                   (r"כפל ב-$x$ והצבת $x=7$: הסכום $11\cdot7\cdot2^{30}$", 3),
                   (r"חישוב $\phi$: $10\cdot6\cdot2^{29}$", 3)),
        pitfalls=["לשכוח לכפול ב-$x$ אחרי הגזירה, ולקבל חזקה לא נכונה.",
                  r"לחשב $\phi(2^{30})$ בתור $2^{30}-1$ במקום $2^{29}$."],
        steps=[
            ch(r"מה עושים לשוויון $(x+1)^{11}=\sum\binom{11}{k}x^k$ כדי לקבל את $k$ בסכום?",
               [r"גוזרים ואז כופלים ב-$x$", r"מציבים $x=1$", "מעלים בריבוע", r"מחלקים ב-$x$"], "a",
               r"הנגזרת מורידה את $k$, והכפל ב-$x$ מחזיר את החזקה $x^k$."),
            num(r"מהו הסכום $\sum_{k=0}^{11}\binom{11}{k}k\,7^k$?", 82678120448, r"$11\cdot7\cdot2^{30}=82678120448$."),
            num(r"מהו $\phi(2^{30})$?", 536870912, r"$2^{30}-2^{29}=2^{29}$."),
            num(r"מהו $\phi\left(11\cdot7\cdot2^{30}\right)$?", 32212254720, r"$10\cdot6\cdot2^{29}=32212254720$."),
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
