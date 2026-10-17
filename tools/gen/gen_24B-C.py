# -*- coding: utf-8 -*-
"""Generator for tools/raw/24B-C.json -- discrete-math-2, spring 2024, moed C (15.09.2024).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_24B-C.py

Source: 24B-C, 5 pp (typed exam with typed official solution after each part; 4 questions x 25 pts).
Header: course 20068, 3 hours, no aids, simple calculator allowed. Q1 = three "define the term, then answer" parts.
Q2-Q4 sub-questions (letters) are one item each; Q1.b/Q1.c (1)+(2) stay single items (kind proof).

Transcription notes (printed slips)
- Q2.b(1) (p.3): the question says x_k > 4 with sum 19, which has no solutions (x_k >= 5 forces sum >= 25).
  The printed solution substitutes y_k = x_k - 3 and answers 70, i.e. it solves x_k >= 3. Shipped with the
  standing typo ruling: solutionSource "solved", official false, both versions shown.
- Q3.b (p.4): the question asks to show a_n = O(3^n), but a_n = -2^n + 2*3^n + 25*5^n grows like 5^n; the
  printed solution concludes O(5^n). Same ruling.
- Q3.b (p.4): the printed line "C1 + C1 + 25 = 26" should read C1 + C2 + 25 = 26 (values C1 = -1, C2 = 2 are right).
- Q4.b (p.5): the printed range of c is {0,...,n-1}; it must be {0,...,n} for the printed answer (n+1)n^2.
- Definitions asked for in Q1 are answered "according to the lecture" (no text).

Checks (tools/verify/24B-C/verify.py, brute force + sympy + networkx):
Q1a 48, Q1b (4,5) counterexample and phi(m)|phi(n) for m|n, n<400, Q1c P4 self-complementary and
r|A|=r|B|, Q2a 63700, Q2b 0 as printed / 70 with x_k>=3 / 126, Q2c phi(300)=80 and 1+1+13=15, Q3a 286,
Q3b closed form for n<40 and O(5^n) (not O(3^n)), Q3c forests n<=7, Q4a 200, Q4b (n+1)n^2 for n=6..8,
Q4c all trees n=6.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24B-C.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** (8 נק') המונח: תמורה של קבוצה.\n\n"
      r"**א2.** שאלה: כמה תמורות של $\{1,2,3,4,5,6\}$ מקיימות את התנאים הבאים: המספרים $1,2$ הם בסמיכות וגם המספרים $5,6$ הם בסמיכות אך המספרים $3,4$ הם לא בסמיכות.",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** נסמן ב-$A$ קבוצת התמורות שבהן המספרים $1,2$ הם בסמיכות וגם המספרים $5,6$ הם בסמיכות. אז כל תמורה מסוג זה היא תמורה של הקבוצה $\{x,y,u,v\}$, כאשר $x=12$ או $x=21$, $y=56$ או $y=65$, $v=3$, $u=4$.

לכן $|A|=2!\cdot2!\cdot4!=96$.

נסמן ב-$B$ קבוצת התמורות שבהן $1,2$ הם בסמיכות, המספרים $5,6$ הם בסמיכות וגם $3,4$ הם בסמיכות. לכן $|B|=2!\cdot2!\cdot2!\cdot3!=48$.

אז $B\subseteq A$ והתשובה היא: $|A-B|=|A|-|B|=48$.""",
      points=8),
    Q(1, "ב", "proof", "euler_phi",
      r"**ב1.** (8 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      "**ב2.** שאלה: הוכיחו או הפריכו:\n\n"
      r"(1) אם $\phi(m)\mid\phi(n)$, אז גם $m\mid n$." "\n\n"
      r"(2) אם $m\mid n$ אז גם $\phi(m)\mid\phi(n)$.",
      r"""**ב1. הגדרה:** לפי ההרצאה.

**ב2.** (1) טענה לא נכונה: $\phi(4)=2\mid4=\phi(5)$, אך $5$ לא מתחלק ב-$4$.

(2) טענה נכונה.

מקרה 1. אם $m=1$, אז $\phi(m)\mid\phi(n)$ לכל $n\in\mathbb{N}^*$.

מקרה 2. אם $2\le m$ אז גם $2\le n$, משום ש: $m\mid n$ ו: $m,n\in\mathbb{N}^*$.

לפי המשפט היסודי של האריתמטיקה קיימים מספרים ראשוניים $p_1,p_2,\dots,p_k$ וגם $\alpha_1,\alpha_2,\dots,\alpha_k\in\mathbb{N}^*$ כך ש: $m=p_1^{\alpha_1}\cdot p_2^{\alpha_2}\cdots p_k^{\alpha_k}$.

מכיוון ש: $m\mid n$, ניתן לרשום $n=p_1^{\beta_1}\cdot p_2^{\beta_2}\cdots p_k^{\beta_k}\cdot t$, כאשר $\gcd(t,p_j)=1$ וגם $\alpha_j\le\beta_j$ לכל $j\in\{1,2,\dots,k\}$. אז נקבל:

$$\frac{\phi(n)}{\phi(m)}=\frac{p_1^{\beta_1}\cdots p_k^{\beta_k}\cdot\left(1-\frac1{p_1}\right)\cdots\left(1-\frac1{p_k}\right)\cdot\phi(t)}{p_1^{\alpha_1}\cdots p_k^{\alpha_k}\cdot\left(1-\frac1{p_1}\right)\cdots\left(1-\frac1{p_k}\right)}=p_1^{\beta_1-\alpha_1}\cdots p_k^{\beta_k-\alpha_k}\cdot\phi(t)=w\in\mathbb{N}^*.$$

לכן $\phi(n)=\phi(m)\cdot w$ ואז $\phi(m)\mid\phi(n)$.""",
      points=8),
    Q(1, "ג", "proof", "graph_basics",
      "**ג1.** (9 נק') המונח: גרף דו-צדדי.\n\n"
      "**ג2.** שאלה: הוכיחו או הפריכו:\n\n"
      r"(1) לא קיים גרף לא מכוון $G=(V,E)$ כך ש: $G$ קשיר ודו-צדדי וגם המשלים שלו הוא קשיר ודו-צדדי." "\n\n"
      r"(2) יהי $2\le r\in\mathbb{N}$. אם $G=(A,B,E)$ הוא גרף לא מכוון, דו-צדדי וגם $r$-רגולרי, אז $|B|=|A|$.",
      r"""**ג1. הגדרה:** לפי ההרצאה.

**ג2.** (1) טענה לא נכונה. קיים $G=P_4$ שמקיים את כל התנאים.

(2) טענה נכונה. מכיוון שאין צלעות שמחברות צמתים ששייכים ל-$A$ או צמתים ששייכים ל-$B$, נשיג ש: $r|A|=|E|=r|B|$. לכן $|B|=|A|$.""",
      points=9),

    Q(2, "א", "computation", "combinations_subsets",
      r"(8 נק') מהו מספר תתי-הקבוצות $B$ של הקבוצה $A=\{1,2,3,\dots,101\}$ שמקיימות את התנאים הבאים: ב-$B$ יש בדיוק 2 מספרים זוגיים ולפחות 50 מספרים אי-זוגיים.",
      r"""כל תת-קבוצה $B$ מתאימה היא בצורה $B=B_1\cup B_2$ כאשר

$B_1\subseteq\{2,4,6,\dots,100\}$ וגם $|B_1|=2$ (ויש $C(50,2)=1225$ אופציות)

$B_2\subseteq\{1,3,5,\dots,101\}$ וגם $|B_2|\in\{50,51\}$ (ויש $C(51,50)+C(51,51)=52$ אופציות)

מסקנה: התשובה היא $1225\cdot52=63700$.""",
      points=8),
    Q(2, "ב", "computation", "selections_repetition",
      "(4+4 נק') מצאו את מספר הפתרונות השלמים של\n\n"
      r"(1) $x_1+x_2+x_3+x_4+x_5=19$, כאשר $x_k>4$ לכל $k\in\{1,2,3,4,5\}$" "\n\n"
      r"(2) $x_1+x_2+x_3+x_4+x_5<25$, כאשר $x_k\ge4$ לכל $k\in\{1,2,3,4,5\}$",
      r"""הפתרון הרשמי עם תיקון: בסעיף (1) הפתרון המודפס מציב $y_k=x_k-3$ ומגיע ל-70, אך זה מתאים לתנאי $x_k\ge3$ ולא לתנאי $x_k>4$ שבשאלה (ראו הערה).

**(1)** נסמן ב-$y_k=x_k-3$ לכל $k=1,\dots,5$. אז השאלה היא: כמה פתרונות שלמים אי-שליליים יש ל-$y_1+y_2+y_3+y_4+y_5=4$, והתשובה היא: $D(5,4)=C(8,4)=70$.

**הערה:** כך מודפס בפתרון המקורי. ההצבה $y_k=x_k-3$ נותנת $y_k\ge0$ רק כאשר $x_k\ge3$. בתנאי המודפס $x_k>4$, כלומר $x_k\ge5$, הסכום של חמשת המשתנים הוא לפחות $25>19$, ולכן אין אף פתרון: התשובה לשאלה כפי שהודפסה היא $0$, והערך $70$ הוא התשובה לתנאי $x_k\ge3$.

**(2)** נסמן ב-$y_k=x_k-4$ לכל $k=1,\dots,5$. אז השאלה היא: כמה פתרונות שלמים אי-שליליים יש ל-$y_1+y_2+y_3+y_4+y_5+y_6=4$ ($y_6$ משלים את אי-השוויון), והתשובה היא: $D(6,4)=C(9,5)=126$.""",
      solutionSource="solved", official=False, confidence="med", points=8),
    Q(2, "ג", "computation", "euler_phi",
      r"**(א)** (3 נק') חשבו את $\phi(300)$." "\n\n"
      r"**(ב)** (6 נק') חשבו את $121^{40}\pmod{300}+49^{40}\pmod{300}+13^{81}\pmod{300}$.",
      r"""משום ש: $300=3\cdot2^2\cdot5^2$ נקבל

$\phi(300)=3\cdot2^2\cdot5^2\cdot\left(1-\frac12\right)\left(1-\frac13\right)\left(1-\frac15\right)=80$.

לפי משפט Euler נשיג ש:

$121^{40}\pmod{300}=11^{80}\pmod{300}=11^{\phi(300)}\pmod{300}=1$

$49^{40}\pmod{300}=7^{80}\pmod{300}=7^{\phi(300)}\pmod{300}=1$

$13^{81}\pmod{300}=13\cdot13^{80}\pmod{300}=13\cdot13^{\phi(300)}\pmod{300}=13\pmod{300}=13$

מכיוון ש: $\gcd(11,300)=1=\gcd(7,300)=\gcd(13,300)$.

מסקנה: התשובה היא $15$ (וגם $\phi(300)=80$).""",
      points=9),

    Q(3, "א", "computation", "selections_repetition",
      "(5 נק') נתונים 4 תאים המסומנים ע\"י מספרים \"4\",\"3\",\"2\",\"1\". בכמה אופנים ניתן לפזר 20 עצמים זהים ל-4 תאים האלו כך שבתא מספר $j$ יהיו לפחות $j$ עצמים?",
      r"""מכניסים בכל התאים $1+2+3+4=10$ עצמים ואז נשאר לפזר $k=10$ עצמים זהים ל: $n=4$ תאים שונים.

לכן התשובה היא: $D(4,10)=C(13,3)=286$.""",
      points=5),
    Q(3, "ב", "computation", "recurrences",
      r"(15 נק') מצאו את הצורה המפורשת של $a_n$ והראו ש: $a_n=O(3^n)$, כאשר $a_0=26,\ a_1=129$ וגם $a_n=5\cdot a_{n-1}-6\cdot a_{n-2}+6\cdot5^n,\ n\ge2$.",
      r"""הפתרון הרשמי עם תיקון: השאלה מבקשת $a_n=O(3^n)$, אך הפתרון המודפס מוכיח $a_n=O(5^n)$, וזו הטענה הנכונה (ראו הערה).

המשוואה האופיינית היא: $x^2-5x+6=0$ והשורשים שלה הם $x_1=3,\ x_2=2$.

לכן הפתרון הכללי של $a_n=5a_{n-1}-6a_{n-2}$ הוא $a_n^{(h)}=C_1\cdot2^n+C_2\cdot3^n$.

פתרון פרטי של הרקורסיה $(*)\ a_n=5a_{n-1}-6a_{n-2}+6\cdot5^n$ הוא בצורה $a_n^{(p)}=A\cdot5^n$.

נציב $a_n^{(p)}$ ב-$(*)$ ונקבל $A\cdot5^n=5\cdot A\cdot5^{n-1}-6\cdot A\cdot5^{n-2}+6\cdot5^n\iff A=25$.

אז $a_n=a_n^{(h)}+a_n^{(p)}=C_1\cdot2^n+C_2\cdot3^n+25\cdot5^n$.

ידוע ש: $a_0=26,\ a_1=129\iff C_1+C_2+25=26$ וגם $2C_1+3C_2+125=129$ (בפתרון המקורי מודפס $C_1+C_1+25=26$; זו טעות דפוס).

ונשיג ש: $C_2=2,\ C_1=-1$ ולכן הצורה המפורשת של $a_n$ היא $a_n=-2^n+2\cdot3^n+25\cdot5^n$.

מכיוון ש: $3^n\le5^n$ לכל $n\in\mathbb{N}$, נקבל $a_n\le2\cdot3^n+25\cdot5^n\le27\cdot5^n$ לכל $n\in\mathbb{N}$.

מסקנה: $a_n=O(5^n)$.

**הערה:** הטענה $a_n=O(3^n)$ כפי שהודפסה בשאלה אינה נכונה, כי $a_n\sim25\cdot5^n$ גדל מהר יותר מ-$3^n$. כך גם בפתרון המקורי, שמסיק $O(5^n)$.""",
      solutionSource="solved", official=False, confidence="med", points=15),
    Q(3, "ג", "proof", "trees",
      "(5 נק') הוכיחו או הפריכו:\n\n"
      r"(1) לא קיים יער $F=(V,E)$ בעל 3 רכיבי קשירות כך שהמשלים של $F$ הוא גרף דו-צדדי." "\n\n"
      r"(2) קיים יער יחיד $F=(V,E)$ שונה מעץ כך ש: $3\le|V|$ וגם המשלים של $F$ הוא עץ.",
      r"""(1) טענה נכונה. נניח, בשלילה, שקיים $F$ יער בעל 3 רכיבי קשירות. נקח צומת אחד מכל רכיב קשירות. אז, במשלים של $F$ קיים $C_3$ ולכן הוא לא דו-צדדי.

(2) טענה נכונה. אם ל-$F$ יש 3 רכיבי קשירות, אז במשלים של $F$ קיים $C_3$ ולכן הוא לא עץ. לכן ל-$F$ יש בדיוק 2 רכיבי קשירות: $T_1$ ו-$T_2$. אם ב-$T_1$ וגם ב-$T_2$ יש לפחות צלע אחת, אז במשלים של $F$ יש $C_4$ ולכן הוא לא עץ.

אז ניתן להניח ש: $T_1=K_1\ne T_2$. אם $T_2\ne K_2$, אז במשלים של $F$ קיים $C_3$ ולכן הוא לא עץ.

מסקנה: $F=K_1\cup K_2$ והמשלים שלו הוא $P_3$.""",
      points=5),

    Q(4, "א", "computation", "combinations_subsets",
      r"(9 נק') תהי $A=\{1,2,3,\dots,n\}$, כאשר $n>2$. אם לקבוצה $A$ יש 1024 תתי-קבוצות בגודל אי-זוגי, חשבו את מספר תתי-הקבוצות $B$ של $A$ שמכילות בדיוק 2 מספרים זוגיים מ-$A$ וגם 3 מספרים אי-זוגיים מ-$A$.",
      r"""נתון ש: $2^{n-1}=1024$ שמתקיים עבור $n=11$; כלומר $A=\{1,2,\dots,10,11\}$.

ב-$A$ יש 5 מספרים זוגיים: $2,4,6,8,10$ וגם 6 אי-זוגיים: $1,3,5,7,9,11$.

כל תת-קבוצה מתאימה היא בצורה $B=B_1\cup B_2$, כאשר

$B_1\subseteq\{2,4,6,8,10\}$ וגם $|B_1|=2$ (ויש $C(5,2)=10$ אופציות)

$B_2\subseteq\{1,3,5,7,9,11\}$ וגם $|B_2|=3$ (ויש $C(6,3)=20$ אופציות)

מסקנה: התשובה היא: $200$.""",
      points=9),
    Q(4, "ב", "computation", "divisibility_primes",
      "(10 נק') יהי $n\\in\\mathbb{N}$, $5<n$. חשבו את מספר המחלקים האי-זוגיים של $m$ שמתחלקים ב-15, כאשר\n"
      r"$$m=\sum_{k=0}^{n}\binom nk7^{n+k}5^{n-k}*\sum_{k=0}^{n}\binom nk2^{n+k}8^{n-k}$$",
      r"""לפי הבינום של Newton נקבל

$$m=7^n\cdot2^n\cdot\sum_{k=0}^{n}\binom nk7^k5^{n-k}\cdot\sum_{k=0}^{n}\binom nk2^k8^{n-k}=2^{4n}\cdot3^n\cdot5^n\cdot7^n$$

כל מחלק אי-זוגי של $m$ שמתחלק ב-15 הוא בצורה $d=3\cdot5\cdot3^a\cdot5^b\cdot7^c$, כאשר $a,b\in\{0,1,\dots,n-1\}$ וגם $c\in\{0,1,\dots,n\}$ (בפתרון המקורי מודפס $c\in\{0,1,\dots,n-1\}$; כדי לקבל את התשובה המודפסת צריך $n+1$ ערכים ל-$c$).

מסקנה: למספר $m$ יש $(n+1)\cdot n^2$ מחלקים אי-זוגיים שמתחלקים ב-15.""",
      points=10),
    Q(4, "ג", "proof", "trees",
      r"(6 נק') יהי $T=(V,E)$ עץ עבורו מתקיים $\sum\{\deg(v):v\in V\}=10$. הראו כי המשלים של $T$ אינו גרף דו-צדדי.",
      r"""אם $T$ הוא עץ, אז $|E|=|V|-1=n-1$ ולכן (לפי משפט הדרגות) נקבל $\sum\{\deg(v):v\in V\}=2|E|=2n-2=10$.

לכן $n=6$ וניתן לרשום $T=(A,B,E)$, כי $T$ הוא עץ בעל צלעות (ולכן גרף דו-צדדי). מכיוון ש: $|A|+|B|=6$ נשיג ש: $\max\{|A|,|B|\}\ge3$ ואז במשלים של $T$ יש $C_3$ כתת-גרף מושרה.

מסקנה: המשלים של $T$ אינו דו-צדדי.""",
      points=6),
]

exam = {
    "examCode": "24B-C",
    "examLabel": "אביב 2024, מועד ג'",
    "year": 2024,
    "examDate": "15.09.2024",
    "sourceFile": "24B-C exam (typed, pp.1-5)",
    "solutionFile": "24B-C official solution (same PDF)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
