# -*- coding: utf-8 -*-
"""Generator for tools/raw/23B-A.json -- discrete-math-2, spring 2023, moed A (12.06.2023).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_23B-A.py

Source: 23B-A, 8 pp (p.1 cover/instructions, pp.2-8 typed questions with handwritten ink solutions, 4 questions x 25 pts).
Solutions are handwritten and were read by vision; the Hebrew prose is re-typeset from the ink, formulas and numbers as written.
Structure: Q1 = three "define the term, then answer" parts (4+4, 5+4, 4+4 = 8+9+8). Q2 a (3+3+3), b (5+4), c (7).
Q3 a (6+6), b (6), c (7). Q4 a (3+3, two claims), b (3), and a third part printed with the label (ב) again
(4+4+4+4, four questions on one figure) -- transcribed as part ג.

Transcription notes
- "n-2 <= size" in Q3a is the right-to-left rendering of "size >= n-2" (the solution sums sizes n-2, n-1, n).
- Q2c (p.5): the ink writes the lower bound of the b-count as x2 >= 2 (and y2 = x2 - 2), while the question says
  "at least 3"; the ink then still gets y1+y2+y3 = 6 and D(3,6) = 28, which is right for 3. Shipped with the
  standing typo ruling (solutionSource "solved", official false, fix named in the solution).
- Q4b (p.7): the question asks for ALL graphs; the ink gives only G = P3 and stops. The complement of P3 (K2 plus an
  isolated vertex) also qualifies (brute force over all graphs with n <= 7: exactly these two). Same ruling.
- Q4c (p.8): the figure was rendered from the PDF with the solver's green colour labels removed (they give away the
  colouring in part 3). Edges read from the figure (20 edges; all degrees 3 except v13 of degree 4):
  v1v2 v2v3 v3v4 v4v5 v5v6 v6v7 v7v8 v8v1 v1v9 v2v9 v8v12 v7v12 v9v13 v12v13 v10v13 v11v13 v3v10 v4v10 v5v11 v6v11.
- Q4a.2: the ink counterexample (red figure) is two K4 joined by a perfect matching, with H = two 4-cycles; described in text.
- Definitions asked for in Q1 come from the ink (the lecture definitions as written by the solver).

Rubric, pitfalls and steps: ai-draft, authored in the STEPS block below; every value re-derived in the verify script.

Checks (tools/verify/23B-A/verify.py, brute force + sympy + networkx):
Q1a 1200, Q1b p | phi(phi(n)) on 3730 cases, Q1c all graphs n<=7 with 1<m<n-1, Q2a divisor counts n=1..7, Q2b closed form
n<40, Q2c 28 (36 with the ink's b>=2), Q3a n=50 and 690000, Q3b 2, Q3c 540 / 1045 by enumeration, Q4a counterexample and
exhaustive check of claim 1 on all 4+-regular graphs n<=7, Q4b all graphs n<=7, Q4c Hamilton cycle, degree 9 of v9 in the
complement of G-v13, the 3-colouring, K5 in the complement.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23B-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    Q(1, "א", "computation", "function_counting",
      "**א1.** (4 נק') המונח: חליפה.\n\n"
      r"**א2.** (4 נק') שאלה: כמה פונקציות חד-חד-ערכיות $f:\{1,2,3,4,5\}\to\{1,2,3,4,5,6,7,8,9,10\}$ מקיימות התנאים $f(\{1,2\})\subseteq\{6,7,8,9,10\}$ וגם $f(\{3,4,5\})\subseteq\{1,2,3,4,5\}$?",
      r"""**א1. הגדרה:** תהי $A$ קבוצה בגודל $n$, ו-$1\le k\le n$. כל סדרה של $k$ איברים שונים מ-$A$ נקראת חליפה בגודל $k$ של $A$ (סדרה של $k$ איברים מתוך הקבוצה $A$).

**א2.** בתרגיל: $f$ חד-חד-ערכית, לכן $f(\{1,2\})=\{f(1),f(2)\}$ היא חליפה של 2 איברים מתוך הקבוצה $\{6,7,8,9,10\}$ ולכן יש $P(5,2)=20$ אופציות.

וגם $f(\{3,4,5\})=\{f(3),f(4),f(5)\}$ היא חליפה של 3 איברים מתוך הקבוצה $\{1,2,3,4,5\}$ ולכן יש $P(5,3)=60$ אופציות.

מסקנה: יש $20\cdot60=1200$ פונקציות $f$ מתאימות.""",
      points=8),
    Q(1, "ב", "proof", "euler_phi",
      r"**ב1.** (5 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      r"**ב2.** (4 נק') שאלה: יהיו $p,n\in\mathbb{N}$, $p$ מספר ראשוני כך ש: $p^3=\gcd(n,p^4)$ וגם לא קיים מספר ראשוני $q$ כך ש: $p<q$ ו: $q\mid n$. הראו ש: $p\mid(\phi\circ\phi)(n)$.",
      r"""**ב1. הגדרה:** הפונקציה $\phi$ של Euler היא $\phi:\mathbb{N}^*\to\mathbb{N}^*$ כך ש: לכל $n\in\mathbb{N}^*$, $\phi(n)=\left|\{k:1\le k\le n\wedge\gcd(n,k)=1\}\right|$.

**ב2.** בתרגיל: $\gcd(n,p^4)=p^3\Leftarrow$ קיים $1\le m\in\mathbb{N}$ כך ש: $n=m\cdot p^3$ וגם $\gcd(m,p)=1$.

בנוסף, מכיוון ש: $p<q\Rightarrow q\nmid m$, נקבל $\gcd(p,\phi(m))=1$.

$$(\phi\circ\phi)(n)=\phi(\phi(n))=\phi(\phi(p^3\cdot m))\overset{\gcd(m,p)=1}{=}\phi(\phi(p^3)\cdot\phi(m))=\phi\left(p^3\left(1-\tfrac1p\right)\cdot\phi(m)\right)=\phi\left(p^2(p-1)\,\phi(m)\right)$$

מכיוון ש: $\gcd\left(p,(p-1)\phi(m)\right)=1$ נשיג ש:

$$=\phi(p^2)\,\phi\left((p-1)\cdot\phi(m)\right)=p^2\left(1-\tfrac1p\right)\phi\left((p-1)\phi(m)\right)=p(p-1)\,\phi\left((p-1)\phi(m)\right)$$

כאשר $1\le(p-1)\phi(m)\in\mathbb{N}$, ולכן $p\mid(\phi\circ\phi)(n)$.""",
      points=9),
    Q(1, "ג", "computation", "graph_connectivity",
      "**ג1.** (4 נק') המונח: הקוטר של גרף לא מכוון.\n\n"
      r"**ג2.** (4 נק') שאלה: יהי $G=(V,E)$ גרף בלתי מכוון בעל $n=|V|>2$ כך ש: $1<m=|E|<n-1$. חשבו את $\operatorname{diam}(H)$, כאשר $H$ הוא המשלים של $G$.",
      r"""**ג1. הגדרה:** אם $G=(V,E)$ גרף קשיר, אז $\operatorname{diam}(G)=\max\{\operatorname{dist}(x,y):x,y\in V\}$, כלומר המרחק המקסימלי בין זוג צמתים ב-$G$.

**ג2.** בתרגיל: ב-$G$ יש צלע, לכן $K_n\ne H$ ולכן $2\le\operatorname{diam}(H)$.

מכיוון ש: $|E|<n-1$, הגרף $G$ אינו קשיר (גרף קשיר על $n$ צמתים בעל לפחות $n-1$ צלעות).

עבור $G$ שאינו קשיר, $H$ קשיר ו: $\operatorname{diam}(H)\le2$.

מסקנה: $\operatorname{diam}(H)=2$.""",
      points=8),

    Q(2, "א", "computation", "divisibility_primes",
      r"(3+3+3 נק') חשבו את $f(n)=\sum_{k=0}^{n}\binom nk\cdot3^{n-k}\bullet\sum_{k=0}^{n}\binom nk\cdot3^{n+k}\cdot7^{n-k}$." "\n\n"
      r"הראו ש: $m=\Theta(n^5)$, כאשר $m=a\bullet b$, $a$ הוא מספר המחלקים הזוגיים של $f(n)$ ו: $b$ הוא מספר המחלקים האי-זוגיים של $f(n)$.",
      r"""בתרגיל:

$$f(n)=\left(\sum_{k=0}^{n}\binom nk1^k\cdot3^{n-k}\right)\left(\sum_{k=0}^{n}\binom nk3^k\cdot7^{n-k}\right)\cdot3^n=4^n\cdot10^n\cdot3^n=2^{3n}\cdot3^n\cdot5^n$$

$d\mid f(n)$ וגם $d$ זוגי $\iff d=2^\alpha\cdot3^\beta\cdot5^\gamma$ כאשר $1\le\alpha\le3n$, $0\le\beta,\gamma\le n$. לכן $a=3n(n+1)^2$.

$d\mid f(n)$ וגם $d$ אי-זוגי $\iff d=3^\alpha\cdot5^\beta$ כאשר $0\le\alpha,\beta\le n$. לכן $b=(n+1)^2$.

מסקנה: $m=3n(n+1)^4$, פולינום מדרגה 5, ולכן $m=\Theta(n^5)$.""",
      points=9),
    Q(2, "ב", "computation", "recurrences",
      r"(5+4 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=10,\ a_1=30$ וגם $a_n=4a_{n-1}-4a_{n-2}$ עבור $n>1$.",
      r"""בתרגיל: המשוואה האופיינית: $(x-2)^2=0\iff x^2=4x-4$, $\Leftarrow x_1=x_2=2$.

לכן $a_n=C_1\cdot2^n+C_2\cdot n\cdot2^n$.

$$\begin{cases}a_0=C_1=10\\a_1=2C_1+2C_2=30\end{cases}\ \Rightarrow\ \begin{cases}C_1=10\\C_2=5\end{cases}\ \Rightarrow\ a_n=10\cdot2^n+5n\cdot2^n,\ n\in\mathbb{N}$$""",
      points=9),
    Q(2, "ג", "computation", "selections_repetition",
      r"(7 נק') תהי $A=\{a,b,c,d\}$. כמה מילים באורך 22 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: אות $a$ מופיעה יותר מ-6 פעמים, אות $b$ מופיעה לפחות 3 פעמים, ואות $c$ מופיעה יותר מ-3 פעמים ואות $d$ מופיעה בדיוק פעמיים.",
      r"""הפתרון הרשמי עם תיקון: בכתב היד הגבול התחתון של $x_2$ ושל ההצבה $y_2$ כתוב 2, אך השאלה דורשת לפחות 3 (ראו הערה).

בתרגיל: נסמן $x_1$ = מספר ה-$a$-ים במילה, $7\le x_1\in\mathbb{Z}$; $x_2$ = מספר ה-$b$-ים במילה, $3\le x_2\in\mathbb{Z}$; $x_3$ = מספר ה-$c$-ים במילה, $4\le x_3\in\mathbb{Z}$.

אז נקבל $x_1+x_2+x_3+2=22\iff x_1+x_2+x_3=20$ וגם $7\le x_1$, $3\le x_2$, $4\le x_3$.

נסמן: $y_1=x_1-7$, $y_2=x_2-3$, $y_3=x_3-4$. אז $y_i\in\mathbb{N}$ ולכן נקבל שהשאלה שקולה לשאלה: כמה פתרונות שלמים אי-שליליים יש ל-$y_1+y_2+y_3=6$.

מספר הפתרונות הוא $D(3,6)=\binom82=\frac{8\cdot7}{2}=28$.

**הערה:** בפתרון המקורי כתוב $2\le x_2$ ו-$y_2=x_2-2$ (שלוש פעמים), אך עם הערך 2 הסכום $y_1+y_2+y_3$ היה 7 ולא 6, והתשובה 28 מתאימה ל: $x_2\ge3$ כפי שבשאלה.""",
      solutionSource="solved", official=False, confidence="med", points=7),

    Q(3, "א", "computation", "combinations_subsets",
      r"(6+6 נק') תהי הקבוצה $A=\{1,2,3,\dots,n\}$, כאשר $n\in\mathbb{N}$. ידוע שלקבוצה $A$ יש 1276 תתי-קבוצות בגודל $\ge n-2$. חשבו את מספר תתי-הקבוצות בגודל 5 של $A$ המכילות **2** מספרים זוגיים וגם **3** מספרים אי-זוגיים.",
      r"""בתרגיל: $\binom n2+\binom n1+1=1276\iff1276=\binom n{n-2}+\binom n{n-1}+\binom nn$.

$\frac{n(n-1)}{2}+n=1275\Rightarrow n=50$.

ב-$A$ יש 25 מספרים זוגיים ו-25 מספרים אי-זוגיים, ולכן יש $\binom{25}{2}\cdot\binom{25}{3}=\frac{25\cdot24}{2}\cdot\frac{25\cdot24\cdot23}{6}=690000$ תתי-קבוצות מתאימות.""",
      points=12),
    Q(3, "ב", "computation", "function_counting",
      r"(6 נק') כמה פונקציות $f:\{1,2,\dots,10\}\to\{1,2\}$ הן **לא** על?",
      r"""בתרגיל: יש $2^{10}$ פונקציות, ומהן $2^{10}-2$ פונקציות על. לכן יש רק 2 פונקציות שאינן על:

1. הפונקציה $f_1$ כך ש: $f_1(x)=1$ לכל $x\in\{1,\dots,10\}$

2. הפונקציה $f_2$ כך ש: $f_2(x)=2$ לכל $x\in\{1,\dots,10\}$

מסקנה: התשובה היא $2$.""",
      points=6),
    Q(3, "ג", "computation", "graph_basics",
      r"(7 נק') יהי $G=(V,E)$ גרף לא מכוון שמוגדר לפי הכללים הבאים: $V=\{0,1,2,\dots,20\}$ וגם $(x,y)\in E\iff x,y\in V\ \wedge\ x\ne y\ \wedge\ x\pmod2=y\pmod2$. המשלים של $G$ מסומן ב-$H$. חשבו את:" "\n\n"
      r"**ג1.** מספר תתי-הגרפים המושרים של $G$ שאיזומורפיים ל-$K_4$;" "\n\n"
      r"**ג2.** מספר תתי-הגרפים המושרים של $H$ שאיזומורפיים ל-$P_3$.",
      r"""$(x,y)\in E$ וגם $x\equiv y\pmod2=0$ $\Leftarrow x,y\in\{0,2,4,\dots,20\}$, כלומר $K_{11}$.

$(x,y)\in E$ וגם $x\equiv y\pmod2=1$ $\Leftarrow x,y\in\{1,3,5,\dots,19\}$, כלומר $K_{10}$.

אז $G=K_{11}\cup K_{10}$ ולכן $H=K_{11,10}$.

**ג1.** תת-גרף מושרה של $G$ שאיזומורפי ל-$K_4$ הוא $K_4$ מתוך $K_{10}$ ($\binom{10}{4}$) או $K_4$ מתוך $K_{11}$ ($\binom{11}{4}$). לכן יש $210+330=\binom{10}4+\binom{11}4=540$ תתי-גרפים מושרים ל-$K_4$.

**ג2.** נסמן $H=K_{11,10}=(A,B,E)$. תת-גרף מושרה $P_3$ של $H$ הוא:

2 צמתים מ-$A$ ו-צומת אחד מ-$B$: $550=10\cdot\binom{11}{2}$ אופציות.

2 צמתים מ-$B$ ו-צומת אחד מ-$A$: $495=11\cdot\binom{10}{2}$ אופציות.

מסקנה: ב-$G$ יש $1045$ תתי-גרפים מושרים ל-$P_3$ (כלומר ב-$H$).""",
      points=7),

    Q(4, "א", "proof", "euler_hamilton",
      r"(3+3 נק') יהיו $4\le r$, $G=(V,E)$ גרף לא מכוון $r$-רגולרי ו: $H=(V,U)$ גרף פורש של $G$ כך ש: $H$ הוא $(r-2)$-רגולרי. הוכיחו או הפריכו:" "\n\n"
      r"**א1.** אם $H$ הוא גרף Euler, אז גם $G$ הוא גרף Euler." "\n\n"
      r"**א2.** אם $G$ הוא גרף Euler, אז גם $H$ הוא גרף Euler.",
      r"""**א1.** טענה נכונה. נתון: $H$ הוא גרף Euler, לכן:

- $H$ קשיר $\Rightarrow$ גם $G$ קשיר ($H$ הוא גרף פורש של $G$)

- $r-2$ הוא מספר זוגי $\Rightarrow r$ מספר זוגי

לכן $G$ הוא גרף Euler.

מסקנה: הטענה נכונה.

**א2.** טענה לא נכונה. דוגמה נגדית: $G$ גרף Euler: שני עותקים של $K_4$ שמחוברים ביניהם בארבע צלעות של זיווג מושלם (כל הדרגות 4, וקשיר), ו-$H$ אינו גרף Euler: $H$ הוא שני מעגלים $C_4$ (אחד בתוך כל $K_4$), כלומר $(4-2)$-רגולרי אך לא קשיר.""",
      points=6),
    Q(4, "ב", "computation", "graph_basics",
      r"(3 נק') מצאו כל גרף לא מכוון $G=(V,E)$ שמקיים התנאי: ב-$G$ קיים צומת $x$ כך שהוא עלה של $G$ וגם של המשלים שלו.",
      r"""הפתרון הרשמי עם תיקון: בכתב היד מופיע רק $G=P_3$; גם המשלים של $P_3$ מתאים (ראו הערה).

בתרגיל: ידוע שלכל $v\in V$ מתקיים: $\deg_G(v)+\deg_{\overline G}(v)=|V|-1$.

לכן אם $\deg_G(v)=1=\deg_{\overline G}(v)$ אז $2=|V|-1$, כלומר $|V|=3$.

מכיוון ש-$G$ בעל עלה ו-$|V|=3$, נקבל $G=P_3$: $v - u - w$, והמשלים $\overline G$: הצלע $v - w$ והצומת הבודד $u$.

**הערה:** בכתב היד נעצר הפתרון כאן, אך השאלה מבקשת את כל הגרפים. כל גרף על שלושה צמתים שבו $x$ עלה בו וגם במשלים שלו מתאים: $P_3$ (עם $x$ קצה של המסלול), וגם המשלים שלו, $K_2$ ועוד צומת בודד (עם $x$ אחד מקצוות הצלע). אלו שני הגרפים היחידים (נבדק בכל הגרפים עד 7 צמתים).""",
      solutionSource="solved", official=False, confidence="med", points=3),
    Q(4, "ג", "computation", "euler_hamilton",
      r"(4+4+4+4 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ג1.** האם $G$ הוא גרף Hamilton?" "\n\n"
      r"**ג2.** האם המשלים של $G-v_{13}$ הוא גרף EULER?" "\n\n"
      r"**ג3.** חשבו את $\chi(G)$." "\n\n"
      r"**ג4.** הראו ש: $5\le\chi(H)$, כאשר $H$ הוא המשלים של $G$.",
      r"""**ג1.** כן. ב-$G$ יש מעגל $C_{13}$: $v_1,v_2,v_3,v_{10},v_4,v_5,v_{11},v_6,v_7,v_8,v_{12},v_{13},v_9,v_1$. לכן $G$ הוא גרף Hamilton.

**ג2.** לא. ב-$G-v_{13}$ מתקיים $\deg(v_9)=2$, ולכן ב-$\overline{G-v_{13}}$ מתקיים $\deg(v_9)=9$, דרגה אי-זוגית. לכן $\overline{G-v_{13}}$ אינו גרף Euler.

**ג3.** ב-$G$ יש $K_3$ על $v_1,v_2,v_9$, ולכן $3\le\chi(G)$. ב-$G$ קיימת צביעה חוקית ב-3 צבעים "1","2","3": צבע 1 ל-$v_1,v_3,v_5,v_7,v_{13}$, צבע 2 ל-$v_2,v_4,v_6,v_8$ וצבע 3 ל-$v_9,v_{10},v_{11},v_{12}$. לכן $\chi(G)\le3$.

מסקנה: $\chi(G)=3$.

**ג4.** הצמתים $\{v_1,v_3,v_5,v_7,v_{13}\}$ מהווים $K_5$ ב-$H$ (אין צלע ביניהם ב-$G$). לכן $5\le\chi(H)$.""",
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
    rub(("הגדרת חליפה", 4), (r"$f(\{1,2\})$ הוא חליפה של $2$ איברים מתוך $5$: $P(5,2)=20$", 2),
        (r"$f(\{3,4,5\})$ הוא חליפה של $3$ איברים מתוך $5$: $P(5,3)=60$", 1), (r"כלל המכפלה: $20\cdot60=1200$", 1)),
    [r"לבחור את הערכים של $f$ על $\{1,2\}$ כתת-קבוצה בלי לסדר אותם, במקום חליפה (הסדר קובע).",
     r"לשכוח שהפונקציה חד-חד-ערכית ולספור $5^2\cdot5^3$."],
    [num(r"כמה אפשרויות יש לזוג $(f(1),f(2))$ מתוך $\{6,\dots,10\}$ כשהפונקציה חד-חד-ערכית?", 20, r"$P(5,2)=5\cdot4=20$."),
     num(r"כמה אפשרויות יש לשלשה $(f(3),f(4),f(5))$ מתוך $\{1,\dots,5\}$?", 60, r"$P(5,3)=5\cdot4\cdot3=60$."),
     num("כמה פונקציות מתאימות יש?", 1200, r"$20\cdot60=1200$.")])

add(1, "ב",
    rub(("הגדרת הפונקציה $\\phi$ של Euler", 5), (r"כתיבת $n=m\cdot p^3$ עם $\gcd(m,p)=1$", 1),
        (r"$\gcd(p,\phi(m))=1$ כי אין ראשוני גדול מ-$p$ המחלק את $n$", 1), (r"חישוב $\phi(\phi(n))=p(p-1)\,\phi\big((p-1)\phi(m)\big)$", 1),
        (r"מסקנה: $p\mid(\phi\circ\phi)(n)$", 1)),
    [r"להפעיל את הכפליות $\phi(ab)=\phi(a)\phi(b)$ בלי לוודא שהגורמים זרים.",
     r"לשכוח שהתנאי על ראשוניים גדולים מ-$p$ נדרש כדי להבטיח $\gcd(p,\phi(m))=1$."],
    [ch("באיזו שיטה משתמש הפתרון הרשמי?",
        [r"אינדוקציה על $n$", r"כתיבת $n=m\cdot p^3$ ושימוש בכפליות של $\phi$ על מספרים זרים", "שובך היונים", "הצבת מספרים והכללה"], 1,
        r"הפתרון מפרק את $n$ ומחשב את $\phi(\phi(n))$ ישירות."),
     num(r"עבור $p=5$ ו-$n=375=3\cdot5^3$ (אין ראשוני גדול מ-$5$ המחלק את $n$): מהו $\phi(\phi(n))$?", 80, r"$\phi(375)=200$ ו-$\phi(200)=80$, ו-$5\mid80$."),
     order("סדרו את שלבי ההוכחה.",
           [r"מ-$\gcd(n,p^4)=p^3$: $n=m\cdot p^3$ כאשר $\gcd(m,p)=1$.",
            r"$\phi(\phi(n))=\phi\big(p^2(p-1)\phi(m)\big)$, כי $\phi(p^3)=p^2(p-1)$ ו-$\phi$ כפלית על זרים.",
            r"כל ראשוני $q\mid m$ קטן מ-$p$, ולכן $\gcd(p,(p-1)\phi(m))=1$ ו-$\phi(\phi(n))=\phi(p^2)\,\phi\big((p-1)\phi(m)\big)=p(p-1)\,\phi\big((p-1)\phi(m)\big)$.",
            r"הביטוי מכיל את הגורם $p$, ולכן $p\mid(\phi\circ\phi)(n)$."],
           "כל שלב משתמש בתוצאת הקודם."),
     bug("אחת השורות שגויה. מצאו אותה.",
         [r"מ-$\gcd(n,p^4)=p^3$: $n=m\cdot p^3$ כאשר $\gcd(m,p)=1$.",
          r"$\phi(\phi(n))=\phi\big(p^2(p-1)\phi(m)\big)$, כי $\phi(p^3)=p^2(p-1)$ ו-$\phi$ כפלית על זרים.",
          r"כל ראשוני $q\mid m$ גדול מ-$p$, ולכן $\gcd(p,(p-1)\phi(m))=1$ ו-$\phi(\phi(n))=p(p-1)\,\phi\big((p-1)\phi(m)\big)$.",
          r"הביטוי מכיל את הגורם $p$, ולכן $p\mid(\phi\circ\phi)(n)$."], 2,
         r"לפי הנתון אין ראשוני גדול מ-$p$ המחלק את $n$; הראשוניים של $m$ קטנים מ-$p$.")])

add(1, "ג",
    rub(("הגדרת הקוטר של גרף", 4), (r"$G$ יש צלע, ולכן $H\ne K_n$ ו-$\operatorname{diam}(H)\ge2$", 1),
        (r"$|E|<n-1$ ולכן $G$ אינו קשיר", 1), (r"$G$ לא קשיר ולכן $H$ קשיר ו-$\operatorname{diam}(H)\le2$", 1), (r"$\operatorname{diam}(H)=2$", 1)),
    [r"לחשוב שמשלים של גרף לא קשיר הוא גם לא קשיר.",
     r"לשכוח לבדוק את הגבול התחתון $\operatorname{diam}(H)\ge2$ (כאשר $H$ אינו שלם)."],
    [ch("למה $G$ אינו קשיר?",
        [r"כי ל-$G$ אין צלעות", r"כי גרף קשיר על $n$ צמתים חייב לכלול לפחות $n-1$ צלעות, ול-$G$ יש פחות", r"כי $G$ הוא עץ", r"כי $H$ הוא גרף שלם"], 1,
        r"נתון $1<m<n-1$: ל-$G$ יש צלעות, אינו עץ (עץ הוא קשיר עם בדיוק $n-1$ צלעות) ו-$H$ אינו שלם."),
     ch(r"למה $\operatorname{diam}(H)\ge2$?",
        [r"כי $H$ אינו קשיר", r"כי ל-$G$ יש צלע, ולכן $H$ אינו הגרף השלם", r"כי $H$ הוא עץ"], 1,
        r"בגרף שלם הקוטר $1$; ב-$H$ חסרה צלע (צלע של $G$). אין צורך ש-$H$ יהיה עץ, ו-$H$ קשיר."),
     num(r"מהו $\operatorname{diam}(H)$?", 2, r"$2\le\operatorname{diam}(H)\le2$.")])

add(2, "א",
    rub(("שימוש בבינום של Newton בשני הסכומים", 3), (r"$f(n)=2^{3n}\cdot3^n\cdot5^n$", 2),
        (r"מספר המחלקים הזוגיים $a=3n(n+1)^2$", 2), (r"מספר המחלקים האי-זוגיים $b=(n+1)^2$", 1), (r"$m=3n(n+1)^4=\Theta(n^5)$", 1)),
    [r"לספור גם את $\alpha=0$ בחזקת $2$ כשמחפשים מחלקים **זוגיים** ($1\le\alpha\le3n$).",
     r"לטעות בדרגת הפולינום: $3n(n+1)^4$ היא מדרגה $5$."],
    [ch(r"מהי הצורה הסגורה של $f(n)$?",
        [r"$2^{2n}\cdot3^n\cdot5^n$", r"$2^{3n}\cdot3^{2n}\cdot5^n$", r"$2^{3n}\cdot3^n\cdot5^n$", r"$2^{3n}\cdot3^n\cdot5^{2n}$"], 2,
        r"$\sum\binom nk3^{n-k}=4^n$ ו-$\sum\binom nk3^k7^{n-k}=10^n$, ולכן $f(n)=4^n\cdot10^n\cdot3^n$."),
     num(r"עבור $n=3$: כמה מחלקים זוגיים יש ל-$f(3)=2^9\cdot3^3\cdot5^3$?", 144, r"$a=3n(n+1)^2=9\cdot16=144$."),
     num(r"עבור $n=3$: כמה מחלקים אי-זוגיים?", 16, r"$b=(n+1)^2=16$."),
     num(r"מהי דרגת הפולינום $m=3n(n+1)^4$?", 5, r"$1+4=5$, ולכן $m=\Theta(n^5)$.")])

add(2, "ב",
    rub(("משוואה אופיינית $x^2-4x+4=0$", 2), (r"שורש כפול $x=2$", 1), (r"צורה כללית $C_1\cdot2^n+C_2\cdot n\cdot2^n$", 2),
        ("קבועים $C_1=10,\\ C_2=5$ מתנאי ההתחלה", 3), (r"הצורה המפורשת $a_n=10\cdot2^n+5n\cdot2^n$", 1)),
    [r"לכתוב את הפתרון הכללי לשורש כפול כ-$C_1\cdot2^n+C_2\cdot2^n$ (חסר הגורם $n$).",
     r"לחשב את $C_2$ מ-$a_1=2C_1+2C_2$ בלי להציב קודם $C_1=a_0$."],
    [ch(r"מהם שורשי המשוואה האופיינית $x^2=4x-4$?",
        [r"$x=2$ ו-$x=-2$", r"$x=0$ ו-$x=4$", r"$x=2$ שורש כפול", r"$x=1$ ו-$x=4$"], 2, r"$(x-2)^2=0$."),
     num(r"מהו $C_1$?", 10, r"$a_0=C_1=10$."),
     num(r"מהו $C_2$?", 5, r"$a_1=2C_1+2C_2=30$, ולכן $C_2=5$."),
     num(r"חשבו את $a_2$ מהצורה המפורשת.", 80, r"$10\cdot4+5\cdot2\cdot4=80$, וגם $4\cdot30-4\cdot10=80$.")])

add(2, "ג",
    rub((r"$d$ מופיעה בדיוק פעמיים, לכן $x_1+x_2+x_3=20$", 2), (r"גבולות תחתונים $x_1\ge7,\ x_2\ge3,\ x_3\ge4$ והצבה $y_i$", 2),
        (r"המשוואה $y_1+y_2+y_3=6$", 1), (r"$D(3,6)=\binom82=28$", 2)),
    [r"«יותר מ-$6$» פירושו $x_1\ge7$ ולא $x_1\ge6$ (וכך גם «יותר מ-$3$» פירושו $\ge4$).",
     r"בכתב היד הגבול התחתון של $b$ נכתב $2$ במקום $3$; יש להקפיד על התנאי שבשאלה."],
    [num(r"כמה פעמים מופיעות $a,b,c$ ביחד, אם $d$ מופיעה בדיוק פעמיים במילה באורך $22$?", 20, r"$22-2=20$."),
     num(r"אחרי הצבת הגבולות התחתונים $7,3,4$: מהו סכום המשתנים החדשים $y_1+y_2+y_3$?", 6, r"$20-(7+3+4)=6$."),
     num("כמה מילים מתאימות יש?", 28, r"$D(3,6)=\binom82=28$.")])

add(3, "א",
    rub(("הצבת הנתון: $\\binom n2+\\binom n1+\\binom n0=1276$", 3), (r"פתרון המשוואה, $n=50$", 3), (r"ב-$A$ יש $25$ זוגיים ו-$25$ אי-זוגיים", 2),
        (r"$\binom{25}2\cdot\binom{25}3=690000$", 4)),
    [r"לספור תתי-קבוצות בגודל בדיוק $n-2$ ולא «לפחות $n-2$» (חסרות הגדלים $n-1$ ו-$n$).",
     r"לטעות בחישוב $\binom{25}{3}=2300$."],
    [num(r"מהו $n$? (נתון: $\binom n2+\binom n1+\binom n0=1276$)", 50, r"$\frac{n(n-1)}2+n=1275$ נותן $n=50$."),
     num(r"כמה בחירות יש לשני המספרים הזוגיים מתוך $25$ הזוגיים?", 300, r"$\binom{25}2=300$."),
     num(r"כמה בחירות יש לשלושת המספרים האי-זוגיים מתוך $25$?", 2300, r"$\binom{25}3=2300$."),
     num("כמה תתי-קבוצות מתאימות יש?", 690000, r"$300\cdot2300=690000$.")])

add(3, "ב",
    rub((r"מספר הפונקציות הכולל $2^{10}$", 2), (r"פונקציה לתחום בגודל $2$ היא לא על אם ורק אם היא קבועה", 2), (r"שתי פונקציות קבועות, התשובה $2$", 2)),
    [r"לחשב $2^{10}$ כתשובה (זה מספר כל הפונקציות, לא שאינן על).",
     r"לספור גם פונקציות שאינן קבועות (כל פונקציה שאינה קבועה היא על)."],
    [num(r"כמה פונקציות $f:\{1,\dots,10\}\to\{1,2\}$ יש בסך הכול?", 1024, r"$2^{10}=1024$."),
     ch("מתי פונקציה כזו אינה על?",
        ["כשהיא חד-חד-ערכית", "כשהיא קבועה", r"כשהיא מקבלת כל ערך בדיוק $5$ פעמים"], 1,
        "היא אינה על כשאחד הערכים $1,2$ חסר בתמונה, כלומר כשהיא קבועה. חד-חד-ערכית כאן בלתי אפשרית ($10>2$)."),
     num("כמה פונקציות אינן על?", 2, r"הקבועה $1$ והקבועה $2$.")])

add(3, "ג",
    rub((r"$G=K_{11}\cup K_{10}$ ולכן $H=K_{11,10}$", 2), (r"$K_4$ מושרה ב-$G$: $\binom{10}4+\binom{11}4=540$", 2),
        (r"$P_3$ מושרה ב-$H$: $550+495=1045$", 3)),
    [r"לספור $K_4$ גם בין שני הרכיבים (אין צלעות ביניהם ב-$G$).",
     r"לספור רק צורת $P_3$ אחת (שני צמתים מ-$A$ ואחד מ-$B$) ולשכוח את הצורה ההפוכה."],
    [ch(r"מהו הגרף $G$?",
        [r"$K_{11,10}$", r"$K_{21}$", r"$K_{11}\cup K_{10}$", r"$K_{10}\cup K_{10}$"], 2,
        r"הזוגיים $0,2,\dots,20$ (אחד-עשר) מחוברים ביניהם והאי-זוגיים $1,\dots,19$ (עשרה) מחוברים ביניהם, ללא צלעות בין הקבוצות."),
     num(r"כמה תתי-גרפים מושרים של $G$ איזומורפיים ל-$K_4$?", 540, r"$\binom{10}4+\binom{11}4=210+330=540$."),
     num(r"ב-$H=K_{11,10}$: כמה תתי-גרפים מושרים $P_3$ עם שני צמתים מהצד בגודל $11$ ואחד מהצד בגודל $10$?", 550, r"$\binom{11}2\cdot10=550$."),
     num(r"וכמה עם שני צמתים מהצד בגודל $10$ ואחד מהצד בגודל $11$?", 495, r"$\binom{10}2\cdot11=495$."),
     num(r"כמה תתי-גרפים מושרים של $H$ איזומורפיים ל-$P_3$?", 1045, "$550+495=1045$.")])

add(4, "א",
    rub((r"א1 נכונה: $H$ קשיר ולכן $G$ קשיר ($H$ גרף פורש)", 1), (r"$r-2$ זוגי ולכן $r$ זוגי", 1), (r"$G$ קשיר ובעל דרגות זוגיות, לכן Euler", 1),
        (r"א2 אינה נכונה", 1), (r"דוגמה נגדית: שני $K_4$ המחוברים בזיווג מושלם", 1), (r"$H$ הוא $2C_4$ ואינו קשיר", 1)),
    [r"לשכוח ש-$H$ גרף פורש, ולכן קשירות של $H$ גוררת קשירות של $G$ (ולא להפך).",
     r"לבחור דוגמה נגדית ש-$H$ בה קשיר."],
    [ch("מה דינה של טענה א1 ($H$ גרף Euler גורר ש-$G$ גרף Euler)?", ["הטענה נכונה", "הטענה אינה נכונה"], 0,
        r"$H$ קשיר ופורש, ולכן $G$ קשיר; $r-2$ זוגי ולכן $r$ זוגי."),
     ch("מה דינה של טענה א2 ($G$ גרף Euler גורר ש-$H$ גרף Euler)?", ["הטענה נכונה", "הטענה אינה נכונה"], 1,
        r"$H$ יכול להיות לא קשיר."),
     num(r"בדוגמה הנגדית (שני $K_4$ ועוד זיווג מושלם בין הצמתים): מהי הדרגה של כל צומת ב-$G$?", 4, r"$3$ שכנים בתוך ה-$K_4$ ועוד שכן אחד בזיווג."),
     num(r"בדוגמה הנגדית $H$ הוא שני מעגלי $C_4$, אחד בכל $K_4$. כמה רכיבי קשירות יש ל-$H$?", 2, r"אין צלעות בין שני ה-$C_4$ ב-$H$.")])

add(4, "ב",
    rub((r"$\deg_G(v)+\deg_{\overline G}(v)=|V|-1$", 1), (r"$1+1=|V|-1$ ולכן $|V|=3$ ו-$G=P_3$", 1),
        (r"גם המשלים של $P_3$ ($K_2$ ועוד צומת בודד) מתאים", 1)),
    [r"לעצור ב-$P_3$ ולשכוח את המשלים שלו (השאלה מבקשת את כל הגרפים).",
     r"לחשוב שהצומת $x$ חייב להיות באותו מצב בשני הגרפים: ב-$P_3$ הוא קצה, ובמשלים הוא קצה של $K_2$."],
    [num(r"אם $\deg_G(x)=\deg_{\overline G}(x)=1$, מהו $|V|$?", 3, r"$1+1=|V|-1$."),
     ch("אילו גרפים מקיימים את התנאי?",
        [r"רק $P_3$", r"רק המשלים של $P_3$", r"$P_3$ והמשלים שלו", r"$K_3$"], 2,
        r"על שלושה צמתים: ב-$P_3$ הקצה הוא עלה, ובמשלים (צלע ועוד צומת בודד) קצה הצלע הוא עלה.")])

add(4, "ג",
    rub((r"ג1: מעגל Hamilton $C_{13}$ ולכן כן", 4), (r"ג2: $\deg(v_9)=2$ ב-$G-v_{13}$, ולכן $9$ במשלים (אי-זוגי), לא Euler", 4),
        (r"ג3: $K_3$ נותן $\chi\ge3$ וצביעה ב-$3$ צבעים נותנת $\chi=3$", 4), (r"ג4: $K_5$ במשלים נותן $5\le\chi(H)$", 4)),
    [r"לשכוח שהמשלים מוגדר על $12$ הצמתים של $G-v_{13}$, ולכן הדרגה היא $11-\deg$.",
     r"לצבוע ב-$3$ צבעים בלי לבדוק שכל צלע חוקית."],
    [ch("האם $G$ הוא גרף Hamilton?", ["כן", "לא"], 0, r"יש מעגל $v_1,v_2,v_3,v_{10},v_4,v_5,v_{11},v_6,v_7,v_8,v_{12},v_{13},v_9,v_1$ שעובר בכל $13$ הצמתים."),
     num(r"מהי הדרגה של $v_9$ במשלים של $G-v_{13}$?", 9, r"ב-$G-v_{13}$ יש $12$ צמתים ו-$\deg(v_9)=2$, ולכן במשלים $11-2=9$."),
     ch(r"האם המשלים של $G-v_{13}$ הוא גרף Euler?", ["כן", "לא"], 1, "יש בו צומת בדרגה אי-זוגית."),
     num(r"מהו $\chi(G)$?", 3, r"$v_1,v_2,v_9$ משולש, וקיימת צביעה חוקית ב-$3$ צבעים."),
     num(r"הקבוצה $\{v_1,v_3,v_5,v_7,v_{13}\}$ בלתי תלויה ב-$G$, ולכן היא $K_5$ ב-$H$. מהו הגבול התחתון המתקבל ל-$\chi(H)$?", 5, r"$K_5$ דורש $5$ צבעים.")])


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
    "examCode": "23B-A",
    "examLabel": "אביב 2023, מועד א'",
    "year": 2023,
    "examDate": "12.06.2023",
    "sourceFile": "23B-A exam (typed, pp.2-8)",
    "solutionFile": "23B-A handwritten solution (same PDF)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 4 סעיף ג)",
               "image": "images/exams/23B-A-Q4c.png", "caption": "הגרף G על 13 צמתים"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
