# -*- coding: utf-8 -*-
"""Generator for tools/raw/24B-A.json -- discrete-math-2, spring 2024, moed A (11.07.2024).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_24B-A.py

Source: 24B-A, 5 pp (cover, then Q1-Q4 each followed by its typed official solution, 25 pts each, all 4 count).
Header: course 20068, 3 hours, formula sheet. Q1 = three "define the term, then answer a short question" parts
(no per-part points printed). One item per printed part; Q2c's two sub-parts (c1, c2) stay in one item.

Transcription notes
- Q3b (p.4): the solution line reads "a_0 = 26, a_1 = 131"; the given value (and the equation next to it,
  3C1+3C2+125 = 128) is a_1 = 128, so "131" is a typo. Transcribed as printed; the closed form is right.
- Q3c (p.4): the printed line "r = |V|-r-1 or ..." is partly garbled in the source; transcribed as the
  complement degree |V|-r-1 = r, i.e. 2r = |V|-1.
- Q2c(a) asks for n with n | phi(n) (printed "n|phi(n)"); the official answer is n = 1 only.
- Q1c: the printed condition is |V| >= 5.
- The definitions asked for in Q1 are answered "according to the lecture" in the official solution (no text).

Checks (tools/verify/24B-A/verify.py, brute force + sympy + networkx):
Q1a 696 (all 720 perms), Q1b 10, Q1c no tree on 5..9 vertices has a tree complement, Q2a 81, Q2b 11,
Q2c n|phi(n) only n=1 (n<3000), Q3a 120, Q3b closed form 3^n+25*5^n for n<40, Q4a n=25 and 152880,
Q4b divisor count (3n+1)(2n-1), Q4c p-2 on all trees n<=12.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24B-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** המונח: תמורה של קבוצה.\n\n"
      "**א2.** שאלה: בכמה תמורות של $\\{1,2,3,4,5,6\\}$ לא מופיע הרצף \"123\"?",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** לקבוצה $A=\{1,2,3,4,5,6\}$ יש $6!$ תמורות. כל תמורה שבה מופיע הרצף $x=123$ היא תמורה של הקבוצה $\{x,4,5,6\}$, ויש $4!$ תמורות מסוג זה.

מסקנה: מספר התמורות של $\{1,2,3,4,5,6\}$ ללא הרצף "123" שווה ל: $6!-4!=696$."""),
    Q(1, "ב", "computation", "combinations_subsets",
      "**ב1.** המונח: צירוף בלי חזרות של קבוצה.\n\n"
      "**ב2.** שאלה: בכמה צירופים בלי חזרות בגודל 5 של $\\{1,2,3,4,5,6,7,8,9\\}$ מופיעות הספרות 1,2 אך לא מופיעות הספרות 7,5?",
      r"""**ב1. הגדרה:** לפי ההרצאה.

**ב2.** כל צירוף שמקיים את התנאים הוא בצורה $\{1,2,a,b,c\}$ כאשר $\{a,b,c\}\subseteq\{3,4,6,8,9\}$.

לכן יש $C(5,3)=C(5,2)=10$ צירופים המקיימים את התנאים."""),
    Q(1, "ג", "truefalse", "graph_basics",
      "**ג1.** המונח: גרף משלים.\n\n"
      "**ג2.** שאלה: הוכיחו או הפריכו: לא קיים עץ $T=(V,E)$ בעל $|V|\\ge5$, כך שהמשלים שלו גם עץ.",
      r"""**ג1. הגדרה:** לפי ההרצאה.

**ג2.** כל עץ בעל לפחות צלע אחת הוא גרף דו-צדדי, כלומר $T=(A,B,E)$. מכיוון ש-$|V|=|A|+|B|\ge5$, ניתן להשיג ש-$\max\{|A|,|B|\}\ge3$, ולכן במשלים של $T$ קיים מעגל אי-זוגי $C_3$.

מסקנה: המשלים של $T$ אינו דו-צדדי ואז אינו עץ.

**פתרון נוסף:** ניתן להראות שהמשלים של עץ הוא גם עץ רק עבור $|V|\in\{1,4\}$. לכן לא קיים עץ $T=(V,E)$ בעל $|V|\ge5$, כך שהמשלים שלו גם עץ.""",
      verdict=True),

    Q(2, "א", "computation", "permutations_arrangements",
      r"(7 נק') מהו מספר התמורות אי-סדר מלא של הקבוצה $\{1,2,3,4,5,6,7,8\}$ שבהן ב-4 המקומות הראשונים נמצאים $1,2,3,4$?",
      r"""כל תמורה שמקיימת את התנאים היא בצורה $a,b,c,d,x,y,z,w$ כאשר $a,b,c,d$ היא תמורה אי-סדר מלא של $\{1,2,3,4\}$ וגם $x,y,z,w$ היא תמורה אי-סדר מלא של $\{5,6,7,8\}$ שבה: $x\ne5$ וגם $y\ne6$ וגם $z\ne7$ וגם $w\ne8$, כלומר שוב תמורה אי-סדר מלא בגודל 4.

מספר התמורות אי-סדר מלא של $\{1,2,3,4\}$ שווה ל:
$$D_4=4!\left(\frac1{0!}-\frac1{1!}+\frac1{2!}-\frac1{3!}+\frac1{4!}\right)=9$$

מסקנה: מספר התמורות שמקיימות את התנאים שווה ל: $81$.""",
      points=7),
    Q(2, "ב", "computation", "sum_product_inclusion",
      r"(10 נק') תהי הקבוצה $A=\{1,2,3,4,5,6\}$. חשבו את מספר תתי-הקבוצות $B$ בגודל 4 של הקבוצה $A$ המקיימות לפחות אחד מהתנאים הבאים: $1,2\in B$ או $5,6\in B$?",
      r"""כל תת-קבוצה $B$ בגודל 4 של $A$ שמכילה $1,2$ היא בצורה $B=\{1,2\}\cup C$, כאשר $C\subseteq\{3,4,5,6\}$ וגם $|C|=2$. לכן יש $C(4,2)=6$ תתי-קבוצות $B$ מתאימות.

כל תת-קבוצה $B$ בגודל 4 של $A$ שמכילה $5,6$ היא בצורה $B=\{5,6\}\cup C$, כאשר $C\subseteq\{1,2,3,4\}$ וגם $|C|=2$. לכן יש $C(4,2)=6$ תתי-קבוצות $B$ מתאימות.

יש רק תת-קבוצה $B$ אחת בגודל 4 של $A$ שמכילה את $1,2$ וגם את $5,6$.

מסקנה: לפי עקרון ההכלה וההדחה, התשובה היא: $6+6-1=11$.""",
      points=10),
    Q(2, "ג", "proof", "euler_phi",
      r"**ג1.** (4 נק') מצאו כל $n\in\mathbb{N}$ המקיים את התנאי $n\mid\phi(n)$." "\n\n"
      r"**ג2.** (4 נק') אם $p,q\in\mathbb{N}$ וגם $2<p<q$, הראו ש: $\phi(n)\mid n$, כאשר $n=2^p3^q$.",
      r"""**ג1.** מכיוון ש-$\phi(1)=1$ נסיק ש-$1\mid\phi(1)$. לכל $1<n\in\mathbb{N}$ מתקיים $\gcd(n,n)\ne1$ ולכן
$$\phi(n)=|\{k:1\le k\le n\wedge\gcd(n,k)=1\}|=|\{k:1\le k\le n-1\wedge\gcd(n,k)=1\}|\le n-1$$
ואז $n\mid\phi(n)$ בלתי אפשרי.

מסקנה: רק $n=1$ הוא פתרון.

**ג2.** לפי הצורה של $n=2^p3^q$ נקבל:

$$\phi(n)=2^p3^q\left(1-\frac12\right)\left(1-\frac13\right)=2^p3^q\cdot\frac12\cdot\frac23=2^p3^{q-1}$$

מסקנה: $\phi(n)\mid n$, כאשר $n=2^p3^q$.""",
      points=8),

    Q(3, "א", "computation", "selections_repetition",
      r"(5 נק') בכמה אופנים ניתן לבחור 15 עצמים מתוך 4 סוגים שונים של עצמים כך שמכל סוג יהיו לפחות 2 עצמים.",
      r"""מתוך 15 עצמים, $8=4\times2$ כבר נבחרו. אז נשארו לבחור $k=7$ עצמים מתוך $n=4$ סוגים שונים של עצמים. אז מספר האופנים לבחור הוא

$$D(4,7)=C(4-1+7,4-1)=C(10,3)=120$$""",
      points=5),
    Q(3, "ב", "computation", "recurrences",
      r"(14 נק') מצאו את הצורה המפורשת של $a_n$ והראו ש: $a_n=O(5^n)$, כאשר $a_n=6a_{n-1}-9a_{n-2}+4\cdot5^n,\ n\ge2$ וגם $a_0=26,\ a_1=128$.",
      r"""המשוואה האופיינית היא: $x^2-6x+9=0$ והשורשים שלה הן $x_1=x_2=3$.

לכן הפתרון הכללי של $a_n=6a_{n-1}-9a_{n-2}$ הוא $a_n^{(h)}=C_1\cdot3^n+C_2\cdot n\cdot3^n$.

פתרון פרטי של הרקורסיה $(*)\ a_n=6a_{n-1}-9a_{n-2}+4\cdot5^n$ הוא בצורה $a_n^{(p)}=A\cdot5^n$.

נציב $a_n^{(p)}$ ב-$(*)$ ונקבל $A\cdot5^n=6\cdot A\cdot5^{n-1}-9\cdot A\cdot5^{n-2}+4\cdot5^n\iff A=25$.

אז $a_n=a_n^{(h)}+a_n^{(p)}=C_1\cdot3^n+C_2\cdot n\cdot3^n+25\cdot5^n$.

ידוע ש: $a_0=26,\ a_1=131$ (כך מודפס בפתרון המקורי; הערך הנתון בשאלה הוא $a_1=128$, וכך גם במשוואה הבאה) $\iff C_1+25=26$ וגם $3C_1+3C_2+125=128$

ונשיג ש: $C_1=1,\ C_2=0$ ולכן הצורה המפורשת של $a_n$ היא $a_n=3^n+25\cdot5^n$.

מכיוון ש: $3^n\le5^n$ לכל $n\in\mathbb{N}$, נקבל $a_n\le26\cdot5^n$ לכל $n\in\mathbb{N}$.

מסקנה: $a_n=O(5^n)$.""",
      points=14),
    Q(3, "ג", "truefalse", "graph_basics",
      r"(6 נק') יהי $r>2$ מספר ראשוני. הוכיחו או הפריכו: לא קיים גרף לא מכוון $G=(V,E)$ כך ש: $G$ הוא $r$-רגולרי וגם המשלים שלו הוא $r$-רגולרי.",
      r"""נניח בשלילה שקיים גרף $G$ שמקיים את התנאים. מכיוון ש: $r$ אי-זוגי, נקבל ש: $|V|$ חייב להיות מספר זוגי.

אז לכל $v\in V$ מתקיים: $r=|V|-r-1$, כלומר $2r=|V|-1$ $\leftrightarrow$ סתירה (כי לא קיים מספר זוגי ששווה למספר אי-זוגי).""",
      verdict=True, points=6),

    Q(4, "א", "computation", "combinations_subsets",
      r"(10 נק') תהי $A=\{1,2,3,\dots,n\}$, כאשר $n>2$. אם לקבוצה $A$ יש 300 תתי-קבוצות בגודל 2, חשבו כמה תתי-קבוצות $B$ של הקבוצה $A$ מכילות 3 מספרים ראשונים מ-$A$ וגם 4 מספרים לא ראשונים מ-$A$.",
      r"""נתון ש: $C(n,2)=300\iff n(n-1)/2=300$ ואז $n=25$ (כי $n=-24$ לא מתאים).

המספרים הראשונים מ-$A$ הם איברי הקבוצה $C=\{2,3,5,7,11,13,17,19,23\}$.

אז כל תת-קבוצה $B$ המקיימת את התנאים היא בצורה $B=B_1\cup B_2$, כאשר:

$|B_1|=3\ \&\ B_1\subseteq C$ (ויש $C(9,3)=84$ אופציות)

$|B_2|=4\ \&\ B_2\subseteq A-C$ (ויש $C(16,4)=1820$ אופציות)

מסקנה: מספר תתי-הקבוצות $B$ המקיימת את התנאים הוא $84\cdot1820=152880$.""",
      points=10),
    Q(4, "ב", "computation", "divisibility_primes",
      "(10 נק') חשבו את מספר המחלקים $d$ של $m$ שמקיימים את התנאי $49\\mid d$, כאשר\n"
      r"$$m=\sum_{k=0}^{n}\binom nk2^{n+k}5^{n-k}\cdot\sum_{k=0}^{n}\binom nk4^{n+k}3^{n-k}$$",
      r"""לפי הבינום של Newton נקבל

$$m=2^n\cdot4^n\cdot\sum_{k=0}^{n}\binom nk2^k5^{n-k}\cdot\sum_{k=0}^{n}\binom nk4^k3^{n-k}=2^{3n}\cdot7^{2n}$$

כל מחלק $d$ של $m$ שמקיים את התנאי $49\mid d$ הוא בצורה $d=2^a\cdot7^2\cdot7^b$, כאשר $a\in\{0,1,\dots,3n\}$ וגם $b\in\{0,1,\dots,2n-2\}$.

מסקנה: למספר $m$ יש $(3n+1)(2n-1)$ מחלקים שמתחלקים ב-49.""",
      points=10),
    Q(4, "ג", "proof", "trees",
      r"(5 נק') יהי $T=(V,E)$ עץ שמקיים את התנאי: $\deg(v)\in\{1,3\}$ לכל $v\in V$. אם ב-$T$ יש $p>3$ עלים, הראו כי ב-$T$ יש $p-2$ צמתים בדרגה 3.",
      r"""נסמן את מספר הצמתים בעלי דרגה 3 ב: $x$. מכיוון ש: $T$ הוא עץ, נשיג ש: $|E|=p+x-1$.

אז לפי משפט הדרגות נקבל $p+3x=2(p+x-1)$ ולכן $x=p-2$.""",
      points=5),
]

exam = {
    "examCode": "24B-A",
    "examLabel": "אביב 2024, מועד א'",
    "year": 2024,
    "examDate": "11.07.2024",
    "sourceFile": "24B-A exam (typed, pp.1-5)",
    "solutionFile": "24B-A official solution (same PDF)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
