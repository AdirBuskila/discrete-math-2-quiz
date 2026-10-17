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
