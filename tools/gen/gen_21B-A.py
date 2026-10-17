# -*- coding: utf-8 -*-
"""Generator for tools/raw/21B-A.json -- discrete-math-2, spring 2021, moed A (20.06.2021).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_21B-A.py

Source: 21B-A, 8 pp (p.1 cover, pp.2-8 typed questions with handwritten ink solutions in blue/green/red, 5 questions x 25 pts;
Q1 is the mandatory question). Header: course 20068, 3 hours, no aids. The solutions were read by vision; the Hebrew prose is
re-typeset from the ink, formulas and numbers as written.
Structure: Q1 = three "define the term, then answer" parts (4+2+2, 4+5, 4+4). Q2 a (5+5), b (7), c (8). Q3 a (4+4), b (5+5), c (7).
Q4 a (8), b (4+4), c (4+5). Q5 a (5), b (4), c (4+4+4+4, four questions on one figure).
Parts with numbered sub-questions are ONE item. Q1a: the definition of a permutation is two short alternative lines in the ink.

Transcription notes
- Q1.b (p.2-3): the ink defines phi(n) = |{d : 1<=d<=n and d | n}|, which is the divisor-count function (phi(6)=2 but 6 has 4
  divisors). Final-answer error in the definition: shipped with the standing ruling (solutionSource "solved", official false,
  the "official solution with a correction" label). The proof of the question (n|m => phi(n)|phi(m)) is unaffected.
  The red fragments next to it ("m = na", two cases) are an unfinished second proof; kept as written in a short paragraph.
- Q1.c (p.3): the question prints "G has 2 cycles with no common vertices" and asks for |E| in terms of n. The ink takes C1, C2
  to be the only cycles (removing one edge from each leaves a spanning tree). Without that assumption |E| is not determined,
  so the solution carries a remark.
- Q2.b (p.5): the question asks for the number of functions that are NOT onto (the word "not" is bold), but the ink stops at the
  number of ONTO functions, 150. The correct answer is 3^5 - 150 = 93. Shipped with the standing ruling (solved, official false).
  Checked by brute force (tools/verify/21B-A/verify.py).
- Q5.a (p.7): the ink writes V = {v1,...,v6} but then lists the degrees of v1..v7; it means seven vertices. Written as V = {v1,...,v7}
  (quiet fix, logged in docs/ASK_ADIR.md).
- Q5.c (p.8): the figure is the printed raster picture (the Petersen graph on a..j) taken from the PDF image, without the red
  colour labels of part 3. The ink colouring (a1 b2 c1 d2 e3 f3 g3 h2 i1 j1) is a proper 3-colouring.

Checks (tools/verify/21B-A/verify.py, brute force + sympy + networkx):
Q1a 696, Q1b n|m => phi(n)|phi(m) (m<700) and the printed definition is the divisor count, Q1c all graphs with <=7 vertices,
Q2a n=20 and 120, Q2b onto 150 and not onto 93, Q2c all trees n<=9 (only n=1,4), Q3a closed form, Q3b closed form n<40,
Q3c 171, Q4a 1440, Q4b 3005, Q4c n=11 and 11 | 10^10-1, Q5a the sequence is graphical, Q5b p,q<60, Q5c Petersen: complement
6-regular and Euler, chi=3, C5 in G, K4 {a,c,i,j} in the complement.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "21B-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** (4 נק') המונח: תמורה.\n\n"
      "**א2.** (2+2 נק') שאלה: בכמה תמורות של הקבוצה $\\{a,b,c,d,e,f\\}$ **לא** מופיע רצף: \"abc\"?",
      r"""**א1. הגדרה:** תהי $A$ קבוצה סופית. תמורה של $A$ היא חליפה של כל איברי הקבוצה $A$.

או: תמורה של $A$ היא סדרה ללא חזרות של כל האיברים של $A$.

**א2.** לקבוצה $A=\{a,b,c,d,e,f\}$ יש $6!$ תמורות. כל תמורה של $A$ שבה מופיע הרצף "abc" היא תמורה של הקבוצה $\{x,d,e,f\}$ כאשר $x=$"abc", ולכן יש $4!$ תמורות מסוג זה.

מסקנה: מספר התמורות של $A$ שבהן לא מופיע הרצף "abc" שווה ל: $6!-4!=696$.""",
      points=8),
    Q(1, "ב", "proof", "euler_phi",
      r"**ב1.** (4 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      r"**ב2.** (5 נק') שאלה: יהיו $m,n\in\mathbb{N}$ כך ש: $1<n<m$. הראו שאם $n\mid m$, אז $\phi(n)\mid\phi(m)$.",
      r"""הפתרון הרשמי עם תיקון: בכתב היד מוגדרת הפונקציה כ-$\phi(n)=|\{d:1\le d\le n\wedge d\mid n\}|$, אך זוהי ספירת המחלקים של $n$ ולא פונקציית Euler (למשל $\phi(6)=2$, ול-6 יש 4 מחלקים). ההגדרה הנכונה מופיעה בסעיף ב1 למטה. ההוכחה בסעיף ב2 אינה מושפעת מהתיקון.

**ב1. הגדרה:** פונקציית Euler היא $\phi:\mathbb{N}-\{0\}\to\mathbb{N}$ המוגדרת לכל $n\in\mathbb{N}-\{0\}$ על ידי

$$\phi(n)=|\{d:1\le d\le n\wedge\gcd(d,n)=1\}|$$

**ב2.** נניח $n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}$ (כי $1<n\in\mathbb{N}$), כאשר כל $p_i$ ראשוני ו-$\alpha_i\in\mathbb{N}-\{0\}$.

כל $m\in\mathbb{N}$ שמקיים $n\mid m$ הוא בצורה $m=p_1^{\beta_1}p_2^{\beta_2}\cdots p_k^{\beta_k}\cdot q$, כאשר: $\gcd(p_i,q)=1$ לכל $i=1,\dots,k$, וגם $\alpha_i\le\beta_i$.

אז:

$$\frac{\phi(m)}{\phi(n)}=\frac{p_1^{\beta_1}\cdots p_k^{\beta_k}\left(1-\frac1{p_1}\right)\cdots\left(1-\frac1{p_k}\right)\phi(q)}{p_1^{\alpha_1}\cdots p_k^{\alpha_k}\left(1-\frac1{p_1}\right)\cdots\left(1-\frac1{p_k}\right)}=p_1^{\beta_1-\alpha_1}\cdots p_k^{\beta_k-\alpha_k}\cdot\phi(q)=t\in\mathbb{N}-\{0\}$$

מסקנה: $\phi(n)\mid\phi(m)$.

**פתרון נוסף (קטעים כפי שנכתבו):** (1) $m=na\Leftarrow\phi(m)=\phi(a)\phi(n)$. (2) $m=na\Leftarrow\phi(m)=n\cdot a\cdot\left(1-\frac1{p_1}\right)\cdots\left(1-\frac1{p_k}\right)$.

הערה: הפתרון הנוסף כתוב בקיצור בכתב היד; הנוסחה בסעיף (1) נכונה רק כאשר $\gcd(n,a)=1$.""",
      solutionSource="solved", official=False, confidence="high", points=9),
    Q(1, "ג", "computation", "trees",
      r"**ג1.** (4 נק') המונחים: עץ הוא גרף לא מכוון קשיר וללא מעגלים. עץ פורש של גרף לא מכוון $G=(V,E)$ הוא עץ $T=(V,U)$ שמקיים התנאי $U\subseteq E$." "\n\n"
      r"**ג2.** (4 נק') שאלה: יהי $G=(V,E)$ גרף לא מכוון, קשיר, בעל $n$ צמתים. ידוע ש-$G$ קיימים 2 מעגלים כך שאין להם צמתים משותפים. חשבו את $|E|$ כביטוי של $n$.",
      r"""נתון: $G$ קשיר ובו שני מעגלים $C_1,C_2$ ללא צמתים משותפים.

אם נרצה לבנות עץ פורש נסיר מכל מעגל צלע אחת ($e_1\in C_1$, $e_2\in C_2$). נקבל עץ פורש $T=(V,E-\{e_1,e_2\})$, ולכן:

$$|E-\{e_1,e_2\}|=|V|-1\Rightarrow|E|=|V|-1+2=|V|+1$$

מסקנה: $|E|=n+1$.

הערה: הפתרון הרשמי מניח ש-$C_1$ ו-$C_2$ הם כל המעגלים של $G$ (אחרת הסרת שתי צלעות אינה מותירה עץ, ו-$|E|$ אינו נקבע על ידי $n$ בלבד).""",
      points=8),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "combinations_subsets",
      r"(5+5 נק') תהי הקבוצה $A=\{1,2,3,\dots,n\}$, כאשר $7<n\in\mathbb{N}$. ידוע שלקבוצה $A$ יש 190 תתי-קבוצות בגודל 2. חשבו כמה תתי-קבוצות בגודל 3 של $A$ מכילות רק מספרים זוגיים.",
      r"""נתון: $\binom n2=190\iff\frac{n(n-1)}2=190\iff n^2-n-380=0\Rightarrow n_{1,2}=\begin{cases}-19\\20\end{cases}\Rightarrow n=20\Rightarrow A=\{1,2,\dots,20\}$.

ב-$A$ יש 10 מספרים זוגיים, ולכן יש $\binom{10}3=\frac{10\cdot9\cdot8}{1\cdot2\cdot3}=120$ תתי-קבוצות בגודל 3 של $A$ שמכילות רק מספרים זוגיים.""",
      points=10),
    Q(2, "ב", "computation", "function_counting",
      r"(7 נק') כמה פונקציות $f:\{1,2,3,4,5\}\to\{1,2,3\}$ הן **לא** על?" "\n\n"
      r"נשתמש במשפט הבא: מספר הפונקציות על $f:\{1,2,\dots,m\}\to\{1,2,\dots,n\}$ הוא $n^m-\binom n1(n-1)^m+\binom n2(n-2)^m-\dots+(-1)^{n-1}\binom n{n-1}1^m$." "\n\n"
      r"עבור $m=5,\ n=3$:",
      r"""הפתרון הרשמי עם תיקון: בכתב היד מחושב מספר הפונקציות **על** ($=150$) והחישוב נעצר שם, אך השאלה מבקשת את מספר הפונקציות שהן **לא** על. התשובה הנכונה היא $3^5-150=93$.

לפי המשפט, מספר הפונקציות על $f:\{1,2,3,4,5\}\to\{1,2,3\}$ הוא

$$3^5-\binom31\cdot2^5+\binom32\cdot1^5=243-3\cdot32+3=150$$

כל הפונקציות מ-$\{1,2,3,4,5\}$ ל-$\{1,2,3\}$ הן $3^5=243$, ולכן מספר הפונקציות שאינן על הוא

$$243-150=93$$""",
      solutionSource="solved", official=False, confidence="high", points=7),
    Q(2, "ג", "proof", "trees",
      r"(8 נק') מצאו $T=(V,E)$ עץ כך שגם המשלים שלו הוא עץ. מצאו את כל האפשרויות למספר הצמתים של $T$.",
      r"""מכיוון ש-$T=(V,E)$ עץ וגם $\overline T=(V,\overline E)$ עץ, נקבל $|E|=|\overline E|=|V|-1$.

בנוסף: $|E|+|\overline E|=\frac{|V|(|V|-1)}2$, ולכן

$$4(|V|-1)=|V|(|V|-1)\Rightarrow(|V|-1)(|V|-4)=0$$

מסקנה: $|V|=4$ או $|V|=1$.""",
      points=8),

    # ---------------- Q3 ----------------
    Q(3, "א", "computation", "asymptotics",
      r"(4+4 נק') חשבו את $f(n)=5^n+\sum_{k=0}^{n}\left(\binom nk\cdot3^{2k}\right)$ והראו ש: $f(n)=O(10^n)$.",
      r"""$$f(n)=5^n+\sum_{k=0}^{n}\binom nk9^k\cdot1^{n-k}=5^n+10^n\le2\cdot10^n$$

לכל $n\in\mathbb{N}$.

מסקנה: $f(n)=O(10^n)$.""",
      points=8),
    Q(3, "ב", "computation", "recurrences",
      r"(5+5 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=10,\ a_1=30$ וגם $a_n=4a_{n-1}-4a_{n-2}$ עבור $1<n$.",
      r"""המשוואה האופיינית היא: $x^2-4x+4=0\Rightarrow x_1=x_2=2$.

אז: $a_n=C_1\cdot2^n+C_2\cdot n\cdot2^n$.

$$\begin{cases}a_0=C_1=10\\a_1=C_1\cdot2+C_2\cdot2=30\end{cases}\Rightarrow C_1=10;\ C_2=5$$

הצורה המפורשת היא: $a_n=10\cdot2^n+5n\cdot2^n$ לכל $n\in\mathbb{N}$.""",
      points=10),
    Q(3, "ג", "computation", "selections_repetition",
      r"(7 נק') תהי הקבוצה $A=\{a,b,c\}$. כמה מלים באורך 27 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: אות $a$ מופיעה לפחות 5 פעמים, אות $b$ מופיעה לפחות פעם אחת ואות $c$ מופיעה לפחות 4 פעמים.",
      r"""נסמן ב-$x_1$ את מספר ה-"a" במילה, ב-$x_2$ את מספר ה-"b" במילה וב-$x_3$ את מספר ה-"c" במילה.

אז מתקיים:

$$\begin{cases}x_1+x_2+x_3=27\\x_i\in\mathbb{Z},\ x_1\ge5,\ x_2\ge1,\ x_3\ge4\end{cases}$$

נסמן: $y_3=x_3-4,\ y_2=x_2-1,\ y_1=x_1-5$, ונקבל: $y_1+y_2+y_3=17$ כאשר $y_i\in\mathbb{N}$.

אז מספר המילים הוא

$$D(3,17)=\binom{19}2=\frac{19\cdot18}2=171$$""",
      points=7),

    # ---------------- Q4 ----------------
    Q(4, "א", "computation", "permutations_arrangements",
      r"(8 נק') תהיינה נתונות הקבוצות $A=\{a,b,c,d\}$, $B=\{u,v,w\}$. כמה סדרות שונות בנות 7 אותיות שונות מהקבוצה $A\cup B$ אפשר ליצור כך שכל סידרה מתחילה באות מ-$A$ ומסתיימת באות מ-$B$?",
      r"""כל סידרה מתאימה היא בצורה: [אות מ-$A$] [חמש אותיות באמצע] [אות מ-$B$].

האות הראשונה היא מ-$A$: 4 אפשרויות. האות האחרונה היא מ-$B$: 3 אפשרויות. החמש שבאמצע הן תמורה של $A\cup B-\{*,\circ\}$, כלומר $5!$ אפשרויות.

מסקנה: התשובה היא $1440=4\cdot5!\cdot3$.""",
      points=8),
    Q(4, "ב", "computation", "function_counting",
      r"(4+4 נק') תהי $\Omega=\{f\ /\ f:\{1,2,3,4,5\}\to\{1,2,3,4,5\}\}$. חשבו את $|\Omega|$. חשבו כמה פונקציות $f\in\Omega$ הן **לא** הפיכות.",
      r"""כל $f\in\Omega$ נקבעת על ידי הבחירה של $f(i)\in\{1,2,3,4,5\}$ לכל $i\in\{1,2,3,4,5\}$, ולכן $|\Omega|=5^5=3125$.

הפונקציות ההפיכות הן הפונקציות החח"ע ועל של הקבוצה $\{1,2,3,4,5\}$ על עצמה, כלומר $5!$ פונקציות.

לכן יש $5^5-5!=3125-120=3005$ פונקציות לא הפיכות.""",
      points=8),
    Q(4, "ג", "computation", "euler_phi",
      r"(4+5 נק') תהי $D$ קבוצה בעלת 1024 תתי-קבוצות בגודל זוגי. חשבו את $n=|D|$ והראו ש: $11\mid\left(\phi(n)^{\phi(n)}-1\right)$." "\n\n"
      r"שימו לב: הסימן $\phi$ מסמל את הפונקציה: \"פי של אוילר\".",
      r"""נסמן $n=|D|$. מספר תתי-הקבוצות של $D$ בגודל זוגי הוא $2^{n-1}=1024=2^{10}$, ולכן $n=11$.

$11\nmid\phi(11)=10$, ולכן לפי משפט FERMAT:

$$11\mid\left(10^{11-1}-1\right)=\phi(11)^{\phi(11)}-1$$""",
      points=9),

    # ---------------- Q5 ----------------
    Q(5, "א", "truefalse", "graph_basics",
      r"(5 נק') האם קיים גרף לא מכוון שסדרת הדרגות שלו היא $(1,1,1,1,2,2,6)$?",
      r"""כן. נראה שקיים גרף $G=(V,E)$ כזה: $V=\{v_1,v_2,\dots,v_7\}$ וגם

$\deg(v_1)=\deg(v_2)=\deg(v_3)=\deg(v_4)=1$, $\deg(v_5)=\deg(v_6)=2$, $\deg(v_7)=6$.

לכן $v_7$ מחובר לכל הצמתים האחרים. אם נסיר את $v_7$ מ-$G$ נקבל את הסדרה $0,0,0,0,1,1$, כלומר $G-v_7$: הצמתים $v_1,v_2,v_3,v_4$ בודדים והצמתים $v_5,v_6$ מחוברים בצלע.

מסקנה: הגרף $G$ הבא קיים: $v_7$ מחובר לכל אחד מ-$v_1,\dots,v_6$, ובנוסף קיימת הצלע $(v_5,v_6)$.""",
      verdict=True, points=5),
    Q(5, "ב", "proof", "euler_phi",
      r"(4 נק') יהיו $p,q$ מספרים ראשוניים כך ש: $2<p<q$. הראו ש: $4\mid\phi(p^q\cdot q^p)$.",
      r"""$$\phi(p^qq^p)=p^q\cdot q^p\cdot\left(1-\frac1p\right)\left(1-\frac1q\right)=p^q\cdot q^p\cdot\frac{p-1}p\cdot\frac{q-1}q=(p-1)(q-1)p^{q-1}\cdot q^{p-1}$$

מכיוון ש-$p,q$ ראשוניים גדולים מ-2, הם אי-זוגיים, ולכן $2\mid(p-1)$ וגם $2\mid(q-1)$, כלומר $4\mid(p-1)(q-1)$.

מסקנה: $4\mid\phi(p^q\cdot q^p)$.""",
      points=4),
    Q(5, "ג", "computation", "euler_hamilton",
      r"(4+4+4+4 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ג1.** האם המשלים של $G$ הוא גרף Hamilton?" "\n\n"
      r"**ג2.** האם המשלים של $G$ הוא גרף Euler?" "\n\n"
      r"**ג3.** מהו $\chi(G)$?" "\n\n"
      r"**ג4.** האם במשלים של $G$ קיים $K_4$ כתת-גרף מושרה?",
      r"""**ג1.** $G$ הוא 3-רגולרי $\Rightarrow\overline G$ הוא כזה: $10-3-1=6$ לכל $v\in V$, כלומר $\deg_{\overline G}(v)=6\ge\frac{10}2$.

לפי משפט DIRAC: $\overline G$ הוא גרף Hamilton. כן.

**ג2.** $\overline G$ הוא גרף Hamilton, ולכן קשיר. בנוסף, לכל $v\in V$: $\deg_{\overline G}(v)=6$, כלומר כל הדרגות זוגיות.

לכן $\overline G$ הוא גרף Euler. כן.

**ג3.** ב-$G$ יש תת-גרף $C_5$ (המעגל החיצוני $a,b,c,d,e$), ולכן $3=\chi(C_5)\le\chi(G)$. ב-$G$ יש צביעה חוקית ב-3 צבעים (צבע 1: $a,c,i,j$; צבע 2: $b,d,h$; צבע 3: $e,f,g$), ולכן $\chi(G)\le3$.

מסקנה: $\chi(G)=3$.

**ג4.** כן. ב-$G$ קיימת קבוצה בלתי תלויה $H=\{a,c,i,j\}$ (אין צלעות בין אף שני צמתים בה), ולכן ב-$\overline G$ הצמתים $a,c,i,j$ יוצרים $K_4$ מושרה.""",
      points=16, contextId="c1"),
]

exam = {
    "examCode": "21B-A",
    "examLabel": "אביב 2021, מועד א'",
    "year": 2021,
    "examDate": "20.06.2021",
    "sourceFile": "21B-A exam (typed, pp.1-8)",
    "solutionFile": "21B-A handwritten solution (same PDF)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 5 סעיף ג)",
               "image": "images/exams/21B-A-Q5c.png", "caption": "הגרף G על 10 צמתים a,...,j"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
