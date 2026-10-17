window.OPEN_BANK = {
 "meta": {
  "course": {
   "slug": "discrete-math-2",
   "title": "בדידה 2",
   "description": "תרגול מבחנים - בדידה 2",
   "accent": "#e879f9",
   "accent2": "#7c3aed",
   "storePrefix": "discrete-math-2",
   "needHelp": [
    {
     "id": "perm_ie",
     "titleHe": "תמורות, אי-סדר מלא והכלה והדחה",
     "icon": "🔀",
     "topic": "permutations_arrangements",
     "entryLabelHe": "צריך עזרה בתמורות ובהכלה והדחה?"
    },
    {
     "id": "func_count",
     "titleHe": "ספירת פונקציות וחלוקות",
     "icon": "🧮",
     "topic": "function_counting",
     "entryLabelHe": "צריך עזרה בספירת פונקציות?"
    },
    {
     "id": "recurrence",
     "titleHe": "נוסחאות נסיגה",
     "icon": "🔁",
     "topic": "recurrences",
     "entryLabelHe": "צריך עזרה בנוסחאות נסיגה?"
    },
    {
     "id": "graphs",
     "titleHe": "גרפים: עצים, משלים, אוילר והמילטון",
     "icon": "🕸️",
     "topic": "graph_basics",
     "entryLabelHe": "צריך עזרה בגרפים?"
    }
   ]
  },
  "topics": [
   {
    "key": "divisibility_primes",
    "label": "מחלקים וראשוניים"
   },
   {
    "key": "euler_phi",
    "label": "פונקציית אוילר"
   },
   {
    "key": "sum_product_inclusion",
    "label": "הכלה והדחה"
   },
   {
    "key": "permutations_arrangements",
    "label": "תמורות וחליפות"
   },
   {
    "key": "combinations_subsets",
    "label": "צירופים ובינום"
   },
   {
    "key": "selections_repetition",
    "label": "בחירה עם חזרות"
   },
   {
    "key": "function_counting",
    "label": "ספירת פונקציות"
   },
   {
    "key": "recurrences",
    "label": "נוסחאות נסיגה"
   },
   {
    "key": "asymptotics",
    "label": "סדרי גודל"
   },
   {
    "key": "graph_basics",
    "label": "גרפים: יסודות"
   },
   {
    "key": "graph_connectivity",
    "label": "קשירות ומרחק"
   },
   {
    "key": "trees",
    "label": "עצים"
   },
   {
    "key": "euler_hamilton",
    "label": "גרפי אוילר והמילטון"
   }
  ],
  "kinds": [
   "computation",
   "proof",
   "truefalse"
  ],
  "built": "2026-10-17T13:51:37Z",
  "exams": [
   {
    "examCode": "24B-A",
    "examLabel": "אביב 2024, מועד א'",
    "year": 2024,
    "source": "exam",
    "examDate": "11.07.2024"
   },
   {
    "examCode": "25S-A",
    "examLabel": "קיץ 2025, מועד א'",
    "year": 2025,
    "source": "exam",
    "examDate": "קיץ 2025"
   }
  ],
  "counts": {
   "total": 27,
   "contexts": 0,
   "math": 436,
   "steps": 55
  }
 },
 "contexts": {},
 "questions": [
  {
   "num": 1,
   "part": "א",
   "kind": "computation",
   "topic": "permutations_arrangements",
   "question": "**א1.** המונח: תמורה של קבוצה.\n\n**א2.** שאלה: בכמה תמורות של $\\{1,2,3,4,5,6\\}$ לא מופיע הרצף \"123\"?",
   "solution": "**א1. הגדרה:** לפי ההרצאה.\n\n**א2.** לקבוצה $A=\\{1,2,3,4,5,6\\}$ יש $6!$ תמורות. כל תמורה שבה מופיע הרצף $x=123$ היא תמורה של הקבוצה $\\{x,4,5,6\\}$, ויש $4!$ תמורות מסוג זה.\n\nמסקנה: מספר התמורות של $\\{1,2,3,4,5,6\\}$ ללא הרצף \"123\" שווה ל: $6!-4!=696$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q1a",
   "partKey": "a",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "תמורות וחליפות",
   "questionHtml": "<strong>א1.</strong> המונח: תמורה של קבוצה.<br><br><strong>א2.</strong> שאלה: בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6\\}</annotation></semantics></math></span> לא מופיע הרצף \"123\"?",
   "solutionHtml": "<strong>א1. הגדרה:</strong> לפי ההרצאה.<br><br><strong>א2.</strong> לקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3,4,5,6\\}</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">6!</annotation></semantics></math></span> תמורות. כל תמורה שבה מופיע הרצף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>123</mn></mrow><annotation encoding=\"application/x-tex\">x=123</annotation></semantics></math></span> היא תמורה של הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>x</mi><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{x,4,5,6\\}</annotation></semantics></math></span>, ויש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">4!</annotation></semantics></math></span> תמורות מסוג זה.<br><br>מסקנה: מספר התמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6\\}</annotation></semantics></math></span> ללא הרצף \"123\" שווה ל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>696</mn></mrow><annotation encoding=\"application/x-tex\">6!-4!=696</annotation></semantics></math></span>.",
   "pointsTotal": 0
  },
  {
   "num": 1,
   "part": "ב",
   "kind": "computation",
   "topic": "combinations_subsets",
   "question": "**ב1.** המונח: צירוף בלי חזרות של קבוצה.\n\n**ב2.** שאלה: בכמה צירופים בלי חזרות בגודל 5 של $\\{1,2,3,4,5,6,7,8,9\\}$ מופיעות הספרות 1,2 אך לא מופיעות הספרות 7,5?",
   "solution": "**ב1. הגדרה:** לפי ההרצאה.\n\n**ב2.** כל צירוף שמקיים את התנאים הוא בצורה $\\{1,2,a,b,c\\}$ כאשר $\\{a,b,c\\}\\subseteq\\{3,4,6,8,9\\}$.\n\nלכן יש $C(5,3)=C(5,2)=10$ צירופים המקיימים את התנאים.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "id": "24B-A-Q1b",
   "partKey": "b",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "צירופים ובינום",
   "questionHtml": "<strong>ב1.</strong> המונח: צירוף בלי חזרות של קבוצה.<br><br><strong>ב2.</strong> שאלה: בכמה צירופים בלי חזרות בגודל 5 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6,7,8,9\\}</annotation></semantics></math></span> מופיעות הספרות 1,2 אך לא מופיעות הספרות 7,5?",
   "solutionHtml": "<strong>ב1. הגדרה:</strong> לפי ההרצאה.<br><br><strong>ב2.</strong> כל צירוף שמקיים את התנאים הוא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,a,b,c\\}</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo stretchy=\"false\">}</mo><mo>⊆</mo><mo stretchy=\"false\">{</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c\\}\\subseteq\\{3,4,6,8,9\\}</annotation></semantics></math></span>.<br><br>לכן יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">C(5,3)=C(5,2)=10</annotation></semantics></math></span> צירופים המקיימים את התנאים.",
   "pointsTotal": 0
  },
  {
   "num": 1,
   "part": "ג",
   "kind": "truefalse",
   "topic": "graph_basics",
   "question": "**ג1.** המונח: גרף משלים.\n\n**ג2.** שאלה: הוכיחו או הפריכו: לא קיים עץ $T=(V,E)$ בעל $|V|\\ge5$, כך שהמשלים שלו גם עץ.",
   "solution": "**ג1. הגדרה:** לפי ההרצאה.\n\n**ג2.** כל עץ בעל לפחות צלע אחת הוא גרף דו-צדדי, כלומר $T=(A,B,E)$. מכיוון ש-$|V|=|A|+|B|\\ge5$, ניתן להשיג ש-$\\max\\{|A|,|B|\\}\\ge3$, ולכן במשלים של $T$ קיים מעגל אי-זוגי $C_3$.\n\nמסקנה: המשלים של $T$ אינו דו-צדדי ואז אינו עץ.\n\n**פתרון נוסף:** ניתן להראות שהמשלים של עץ הוא גם עץ רק עבור $|V|\\in\\{1,4\\}$. לכן לא קיים עץ $T=(V,E)$ בעל $|V|\\ge5$, כך שהמשלים שלו גם עץ.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "verdict": true,
   "id": "24B-A-Q1c",
   "partKey": "c",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "גרפים: יסודות",
   "questionHtml": "<strong>ג1.</strong> המונח: גרף משלים.<br><br><strong>ג2.</strong> שאלה: הוכיחו או הפריכו: לא קיים עץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T=(V,E)</annotation></semantics></math></span> בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">|V|\\ge5</annotation></semantics></math></span>, כך שהמשלים שלו גם עץ.",
   "solutionHtml": "<strong>ג1. הגדרה:</strong> לפי ההרצאה.<br><br><strong>ג2.</strong> כל עץ בעל לפחות צלע אחת הוא גרף דו-צדדי, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T=(A,B,E)</annotation></semantics></math></span>. מכיוון ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">|V|=|A|+|B|\\ge5</annotation></semantics></math></span>, ניתן להשיג ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>max</mi><mo>⁡</mo><mo stretchy=\"false\">{</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo separator=\"true\">,</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">}</mo><mo>≥</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\max\\{|A|,|B|\\}\\ge3</annotation></semantics></math></span>, ולכן במשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> קיים מעגל אי-זוגי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_3</annotation></semantics></math></span>.<br><br>מסקנה: המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> אינו דו-צדדי ואז אינו עץ.<br><br><strong>פתרון נוסף:</strong> ניתן להראות שהמשלים של עץ הוא גם עץ רק עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>∈</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">|V|\\in\\{1,4\\}</annotation></semantics></math></span>. לכן לא קיים עץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T=(V,E)</annotation></semantics></math></span> בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">|V|\\ge5</annotation></semantics></math></span>, כך שהמשלים שלו גם עץ.",
   "pointsTotal": 0
  },
  {
   "num": 2,
   "part": "א",
   "kind": "computation",
   "topic": "permutations_arrangements",
   "question": "(7 נק') מהו מספר התמורות אי-סדר מלא של הקבוצה $\\{1,2,3,4,5,6,7,8\\}$ שבהן ב-4 המקומות הראשונים נמצאים $1,2,3,4$?",
   "solution": "כל תמורה שמקיימת את התנאים היא בצורה $a,b,c,d,x,y,z,w$ כאשר $a,b,c,d$ היא תמורה אי-סדר מלא של $\\{1,2,3,4\\}$ וגם $x,y,z,w$ היא תמורה אי-סדר מלא של $\\{5,6,7,8\\}$ שבה: $x\\ne5$ וגם $y\\ne6$ וגם $z\\ne7$ וגם $w\\ne8$, כלומר שוב תמורה אי-סדר מלא בגודל 4.\n\nמספר התמורות אי-סדר מלא של $\\{1,2,3,4\\}$ שווה ל:\n$$D_4=4!\\left(\\frac1{0!}-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\frac1{4!}\\right)=9$$\n\nמסקנה: מספר התמורות שמקיימות את התנאים שווה ל: $81$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 7,
   "id": "24B-A-Q2a",
   "partKey": "a",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "תמורות וחליפות",
   "questionHtml": "(7 נק') מהו מספר התמורות אי-סדר מלא של הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6,7,8\\}</annotation></semantics></math></span> שבהן ב-4 המקומות הראשונים נמצאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3,4</annotation></semantics></math></span>?",
   "solutionHtml": "כל תמורה שמקיימת את התנאים היא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>y</mi><mo separator=\"true\">,</mo><mi>z</mi><mo separator=\"true\">,</mo><mi>w</mi></mrow><annotation encoding=\"application/x-tex\">a,b,c,d,x,y,z,w</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">a,b,c,d</annotation></semantics></math></span> היא תמורה אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo separator=\"true\">,</mo><mi>y</mi><mo separator=\"true\">,</mo><mi>z</mi><mo separator=\"true\">,</mo><mi>w</mi></mrow><annotation encoding=\"application/x-tex\">x,y,z,w</annotation></semantics></math></span> היא תמורה אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{5,6,7,8\\}</annotation></semantics></math></span> שבה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo mathvariant=\"normal\">≠</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">x\\ne5</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo mathvariant=\"normal\">≠</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">y\\ne6</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>z</mi><mo mathvariant=\"normal\">≠</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">z\\ne7</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>w</mi><mo mathvariant=\"normal\">≠</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">w\\ne8</annotation></semantics></math></span>, כלומר שוב תמורה אי-סדר מלא בגודל 4.<br><br>מספר התמורות אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> שווה ל:<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mrow><mo fence=\"true\">(</mo><mfrac><mn>1</mn><mrow><mn>0</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=4!\\left(\\frac1{0!}-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\frac1{4!}\\right)=9</annotation></semantics></math></span><br><br>מסקנה: מספר התמורות שמקיימות את התנאים שווה ל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">81</annotation></semantics></math></span>.",
   "pointsTotal": 7
  },
  {
   "num": 2,
   "part": "ב",
   "kind": "computation",
   "topic": "sum_product_inclusion",
   "question": "(10 נק') תהי הקבוצה $A=\\{1,2,3,4,5,6\\}$. חשבו את מספר תתי-הקבוצות $B$ בגודל 4 של הקבוצה $A$ המקיימות לפחות אחד מהתנאים הבאים: $1,2\\in B$ או $5,6\\in B$?",
   "solution": "כל תת-קבוצה $B$ בגודל 4 של $A$ שמכילה $1,2$ היא בצורה $B=\\{1,2\\}\\cup C$, כאשר $C\\subseteq\\{3,4,5,6\\}$ וגם $|C|=2$. לכן יש $C(4,2)=6$ תתי-קבוצות $B$ מתאימות.\n\nכל תת-קבוצה $B$ בגודל 4 של $A$ שמכילה $5,6$ היא בצורה $B=\\{5,6\\}\\cup C$, כאשר $C\\subseteq\\{1,2,3,4\\}$ וגם $|C|=2$. לכן יש $C(4,2)=6$ תתי-קבוצות $B$ מתאימות.\n\nיש רק תת-קבוצה $B$ אחת בגודל 4 של $A$ שמכילה את $1,2$ וגם את $5,6$.\n\nמסקנה: לפי עקרון ההכלה וההדחה, התשובה היא: $6+6-1=11$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 10,
   "id": "24B-A-Q2b",
   "partKey": "b",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "הכלה והדחה",
   "questionHtml": "(10 נק') תהי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3,4,5,6\\}</annotation></semantics></math></span>. חשבו את מספר תתי-הקבוצות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> בגודל 4 של הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> המקיימות לפחות אחד מהתנאים הבאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo>∈</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">1,2\\in B</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo>∈</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">5,6\\in B</annotation></semantics></math></span>?",
   "solutionHtml": "כל תת-קבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> בגודל 4 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שמכילה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> היא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo>∪</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B=\\{1,2\\}\\cup C</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>⊆</mo><mo stretchy=\"false\">{</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">C\\subseteq\\{3,4,5,6\\}</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>C</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">|C|=2</annotation></semantics></math></span>. לכן יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">C(4,2)=6</annotation></semantics></math></span> תתי-קבוצות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> מתאימות.<br><br>כל תת-קבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> בגודל 4 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שמכילה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5,6</annotation></semantics></math></span> היא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo><mo>∪</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B=\\{5,6\\}\\cup C</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>⊆</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">C\\subseteq\\{1,2,3,4\\}</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>C</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">|C|=2</annotation></semantics></math></span>. לכן יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">C(4,2)=6</annotation></semantics></math></span> תתי-קבוצות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> מתאימות.<br><br>יש רק תת-קבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> אחת בגודל 4 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שמכילה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> וגם את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5,6</annotation></semantics></math></span>.<br><br>מסקנה: לפי עקרון ההכלה וההדחה, התשובה היא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>+</mo><mn>6</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">6+6-1=11</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 2,
   "part": "ג",
   "kind": "proof",
   "topic": "euler_phi",
   "question": "**ג1.** (4 נק') מצאו כל $n\\in\\mathbb{N}$ המקיים את התנאי $n\\mid\\phi(n)$.\n\n**ג2.** (4 נק') אם $p,q\\in\\mathbb{N}$ וגם $2<p<q$, הראו ש: $\\phi(n)\\mid n$, כאשר $n=2^p3^q$.",
   "solution": "**ג1.** מכיוון ש-$\\phi(1)=1$ נסיק ש-$1\\mid\\phi(1)$. לכל $1<n\\in\\mathbb{N}$ מתקיים $\\gcd(n,n)\\ne1$ ולכן\n$$\\phi(n)=|\\{k:1\\le k\\le n\\wedge\\gcd(n,k)=1\\}|=|\\{k:1\\le k\\le n-1\\wedge\\gcd(n,k)=1\\}|\\le n-1$$\nואז $n\\mid\\phi(n)$ בלתי אפשרי.\n\nמסקנה: רק $n=1$ הוא פתרון.\n\n**ג2.** לפי הצורה של $n=2^p3^q$ נקבל:\n\n$$\\phi(n)=2^p3^q\\left(1-\\frac12\\right)\\left(1-\\frac13\\right)=2^p3^q\\cdot\\frac12\\cdot\\frac23=2^p3^{q-1}$$\n\nמסקנה: $\\phi(n)\\mid n$, כאשר $n=2^p3^q$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "id": "24B-A-Q2c",
   "partKey": "c",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "פונקציית אוילר",
   "questionHtml": "<strong>ג1.</strong> (4 נק') מצאו כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">n\\in\\mathbb{N}</annotation></semantics></math></span> המקיים את התנאי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>∣</mo><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">n\\mid\\phi(n)</annotation></semantics></math></span>.<br><br><strong>ג2.</strong> (4 נק') אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo separator=\"true\">,</mo><mi>q</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">p,q\\in\\mathbb{N}</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>&lt;</mo><mi>p</mi><mo>&lt;</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">2&lt;p&lt;q</annotation></semantics></math></span>, הראו ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>∣</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\phi(n)\\mid n</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>p</mi></msup><msup><mn>3</mn><mi>q</mi></msup></mrow><annotation encoding=\"application/x-tex\">n=2^p3^q</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>ג1.</strong> מכיוון ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\phi(1)=1</annotation></semantics></math></span> נסיק ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>∣</mo><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">1\\mid\\phi(1)</annotation></semantics></math></span>. לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>&lt;</mo><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">1&lt;n\\in\\mathbb{N}</annotation></semantics></math></span> מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo mathvariant=\"normal\">≠</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\gcd(n,n)\\ne1</annotation></semantics></math></span> ולכן<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">{</mo><mi>k</mi><mo>:</mo><mn>1</mn><mo>≤</mo><mi>k</mi><mo>≤</mo><mi>n</mi><mo>∧</mo><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\">}</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">{</mo><mi>k</mi><mo>:</mo><mn>1</mn><mo>≤</mo><mi>k</mi><mo>≤</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>∧</mo><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\">}</mo><mi mathvariant=\"normal\">∣</mi><mo>≤</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\phi(n)=|\\{k:1\\le k\\le n\\wedge\\gcd(n,k)=1\\}|=|\\{k:1\\le k\\le n-1\\wedge\\gcd(n,k)=1\\}|\\le n-1</annotation></semantics></math></span><br>ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>∣</mo><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">n\\mid\\phi(n)</annotation></semantics></math></span> בלתי אפשרי.<br><br>מסקנה: רק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span> הוא פתרון.<br><br><strong>ג2.</strong> לפי הצורה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>p</mi></msup><msup><mn>3</mn><mi>q</mi></msup></mrow><annotation encoding=\"application/x-tex\">n=2^p3^q</annotation></semantics></math></span> נקבל:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mn>2</mn><mi>p</mi></msup><msup><mn>3</mn><mi>q</mi></msup><mrow><mo fence=\"true\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mrow><mo fence=\"true\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><msup><mn>2</mn><mi>p</mi></msup><msup><mn>3</mn><mi>q</mi></msup><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>=</mo><msup><mn>2</mn><mi>p</mi></msup><msup><mn>3</mn><mrow><mi>q</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\phi(n)=2^p3^q\\left(1-\\frac12\\right)\\left(1-\\frac13\\right)=2^p3^q\\cdot\\frac12\\cdot\\frac23=2^p3^{q-1}</annotation></semantics></math></span><br><br>מסקנה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>∣</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\phi(n)\\mid n</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>p</mi></msup><msup><mn>3</mn><mi>q</mi></msup></mrow><annotation encoding=\"application/x-tex\">n=2^p3^q</annotation></semantics></math></span>.",
   "pointsTotal": 8
  },
  {
   "num": 3,
   "part": "א",
   "kind": "computation",
   "topic": "selections_repetition",
   "question": "(5 נק') בכמה אופנים ניתן לבחור 15 עצמים מתוך 4 סוגים שונים של עצמים כך שמכל סוג יהיו לפחות 2 עצמים.",
   "solution": "מתוך 15 עצמים, $8=4\\times2$ כבר נבחרו. אז נשארו לבחור $k=7$ עצמים מתוך $n=4$ סוגים שונים של עצמים. אז מספר האופנים לבחור הוא\n\n$$D(4,7)=C(4-1+7,4-1)=C(10,3)=120$$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 5,
   "id": "24B-A-Q3a",
   "partKey": "a",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "בחירה עם חזרות",
   "questionHtml": "(5 נק') בכמה אופנים ניתן לבחור 15 עצמים מתוך 4 סוגים שונים של עצמים כך שמכל סוג יהיו לפחות 2 עצמים.",
   "solutionHtml": "מתוך 15 עצמים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>=</mo><mn>4</mn><mo>×</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">8=4\\times2</annotation></semantics></math></span> כבר נבחרו. אז נשארו לבחור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">k=7</annotation></semantics></math></span> עצמים מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=4</annotation></semantics></math></span> סוגים שונים של עצמים. אז מספר האופנים לבחור הוא<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo>−</mo><mn>1</mn><mo>+</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>4</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>10</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">D(4,7)=C(4-1+7,4-1)=C(10,3)=120</annotation></semantics></math></span>",
   "pointsTotal": 5
  },
  {
   "num": 3,
   "part": "ב",
   "kind": "computation",
   "topic": "recurrences",
   "question": "(14 נק') מצאו את הצורה המפורשת של $a_n$ והראו ש: $a_n=O(5^n)$, כאשר $a_n=6a_{n-1}-9a_{n-2}+4\\cdot5^n,\\ n\\ge2$ וגם $a_0=26,\\ a_1=128$.",
   "solution": "המשוואה האופיינית היא: $x^2-6x+9=0$ והשורשים שלה הן $x_1=x_2=3$.\n\nלכן הפתרון הכללי של $a_n=6a_{n-1}-9a_{n-2}$ הוא $a_n^{(h)}=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n$.\n\nפתרון פרטי של הרקורסיה $(*)\\ a_n=6a_{n-1}-9a_{n-2}+4\\cdot5^n$ הוא בצורה $a_n^{(p)}=A\\cdot5^n$.\n\nנציב $a_n^{(p)}$ ב-$(*)$ ונקבל $A\\cdot5^n=6\\cdot A\\cdot5^{n-1}-9\\cdot A\\cdot5^{n-2}+4\\cdot5^n\\iff A=25$.\n\nאז $a_n=a_n^{(h)}+a_n^{(p)}=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n+25\\cdot5^n$.\n\nידוע ש: $a_0=26,\\ a_1=131$ (כך מודפס בפתרון המקורי; הערך הנתון בשאלה הוא $a_1=128$, וכך גם במשוואה הבאה) $\\iff C_1+25=26$ וגם $3C_1+3C_2+125=128$\n\nונשיג ש: $C_1=1,\\ C_2=0$ ולכן הצורה המפורשת של $a_n$ היא $a_n=3^n+25\\cdot5^n$.\n\nמכיוון ש: $3^n\\le5^n$ לכל $n\\in\\mathbb{N}$, נקבל $a_n\\le26\\cdot5^n$ לכל $n\\in\\mathbb{N}$.\n\nמסקנה: $a_n=O(5^n)$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 14,
   "id": "24B-A-Q3b",
   "partKey": "b",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה",
   "questionHtml": "(14 נק') מצאו את הצורה המפורשת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">a_n</annotation></semantics></math></span> והראו ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>5</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(5^n)</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>9</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>4</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo separator=\"true\">,</mo><mtext> </mtext><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_n=6a_{n-1}-9a_{n-2}+4\\cdot5^n,\\ n\\ge2</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>26</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">a_0=26,\\ a_1=128</annotation></semantics></math></span>.",
   "solutionHtml": "המשוואה האופיינית היא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-6x+9=0</annotation></semantics></math></span> והשורשים שלה הן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">x_1=x_2=3</annotation></semantics></math></span>.<br><br>לכן הפתרון הכללי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>9</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=6a_{n-1}-9a_{n-2}</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(h)}=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n</annotation></semantics></math></span>.<br><br>פתרון פרטי של הרקורסיה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mo>∗</mo><mo stretchy=\"false\">)</mo><mtext> </mtext><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>9</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>4</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">(*)\\ a_n=6a_{n-1}-9a_{n-2}+4\\cdot5^n</annotation></semantics></math></span> הוא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot5^n</annotation></semantics></math></span>.<br><br>נציב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mo>∗</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(*)</annotation></semantics></math></span> ונקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo>=</mo><mn>6</mn><mo>⋅</mo><mi>A</mi><mo>⋅</mo><msup><mn>5</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>9</mn><mo>⋅</mo><mi>A</mi><mo>⋅</mo><msup><mn>5</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><mn>4</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><mi>A</mi><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">A\\cdot5^n=6\\cdot A\\cdot5^{n-1}-9\\cdot A\\cdot5^{n-2}+4\\cdot5^n\\iff A=25</annotation></semantics></math></span>.<br><br>אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>25</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=a_n^{(h)}+a_n^{(p)}=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n+25\\cdot5^n</annotation></semantics></math></span>.<br><br>ידוע ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>26</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>131</mn></mrow><annotation encoding=\"application/x-tex\">a_0=26,\\ a_1=131</annotation></semantics></math></span> (כך מודפס בפתרון המקורי; הערך הנתון בשאלה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">a_1=128</annotation></semantics></math></span>, וכך גם במשוואה הבאה) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>25</mn><mo>=</mo><mn>26</mn></mrow><annotation encoding=\"application/x-tex\">\\iff C_1+25=26</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>125</mn><mo>=</mo><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">3C_1+3C_2+125=128</annotation></semantics></math></span><br><br>ונשיג ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">C_1=1,\\ C_2=0</annotation></semantics></math></span> ולכן הצורה המפורשת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">a_n</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>25</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3^n+25\\cdot5^n</annotation></semantics></math></span>.<br><br>מכיוון ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mi>n</mi></msup><mo>≤</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3^n\\le5^n</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">n\\in\\mathbb{N}</annotation></semantics></math></span>, נקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mn>26</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le26\\cdot5^n</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">n\\in\\mathbb{N}</annotation></semantics></math></span>.<br><br>מסקנה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>5</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(5^n)</annotation></semantics></math></span>.",
   "pointsTotal": 14
  },
  {
   "num": 3,
   "part": "ג",
   "kind": "truefalse",
   "topic": "graph_basics",
   "question": "(6 נק') יהי $r>2$ מספר ראשוני. הוכיחו או הפריכו: לא קיים גרף לא מכוון $G=(V,E)$ כך ש: $G$ הוא $r$-רגולרי וגם המשלים שלו הוא $r$-רגולרי.",
   "solution": "נניח בשלילה שקיים גרף $G$ שמקיים את התנאים. מכיוון ש: $r$ אי-זוגי, נקבל ש: $|V|$ חייב להיות מספר זוגי.\n\nאז לכל $v\\in V$ מתקיים: $r=|V|-r-1$, כלומר $2r=|V|-1$ $\\leftrightarrow$ סתירה (כי לא קיים מספר זוגי ששווה למספר אי-זוגי).",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "verdict": true,
   "points": 6,
   "id": "24B-A-Q3c",
   "partKey": "c",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "גרפים: יסודות",
   "questionHtml": "(6 נק') יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>&gt;</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">r&gt;2</annotation></semantics></math></span> מספר ראשוני. הוכיחו או הפריכו: לא קיים גרף לא מכוון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> כך ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>-רגולרי וגם המשלים שלו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>-רגולרי.",
   "solutionHtml": "נניח בשלילה שקיים גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> שמקיים את התנאים. מכיוון ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> אי-זוגי, נקבל ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> חייב להיות מספר זוגי.<br><br>אז לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow><annotation encoding=\"application/x-tex\">v\\in V</annotation></semantics></math></span> מתקיים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi>r</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">r=|V|-r-1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>r</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2r=|V|-1</annotation></semantics></math></span> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>↔</mo></mrow><annotation encoding=\"application/x-tex\">\\leftrightarrow</annotation></semantics></math></span> סתירה (כי לא קיים מספר זוגי ששווה למספר אי-זוגי).",
   "pointsTotal": 6
  },
  {
   "num": 4,
   "part": "א",
   "kind": "computation",
   "topic": "combinations_subsets",
   "question": "(10 נק') תהי $A=\\{1,2,3,\\dots,n\\}$, כאשר $n>2$. אם לקבוצה $A$ יש 300 תתי-קבוצות בגודל 2, חשבו כמה תתי-קבוצות $B$ של הקבוצה $A$ מכילות 3 מספרים ראשונים מ-$A$ וגם 4 מספרים לא ראשונים מ-$A$.",
   "solution": "נתון ש: $C(n,2)=300\\iff n(n-1)/2=300$ ואז $n=25$ (כי $n=-24$ לא מתאים).\n\nהמספרים הראשונים מ-$A$ הם איברי הקבוצה $C=\\{2,3,5,7,11,13,17,19,23\\}$.\n\nאז כל תת-קבוצה $B$ המקיימת את התנאים היא בצורה $B=B_1\\cup B_2$, כאשר:\n\n$|B_1|=3\\ \\&\\ B_1\\subseteq C$ (ויש $C(9,3)=84$ אופציות)\n\n$|B_2|=4\\ \\&\\ B_2\\subseteq A-C$ (ויש $C(16,4)=1820$ אופציות)\n\nמסקנה: מספר תתי-הקבוצות $B$ המקיימת את התנאים הוא $84\\cdot1820=152880$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 10,
   "id": "24B-A-Q4a",
   "partKey": "a",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "צירופים ובינום",
   "questionHtml": "(10 נק') תהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3,\\dots,n\\}</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;2</annotation></semantics></math></span>. אם לקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> יש 300 תתי-קבוצות בגודל 2, חשבו כמה תתי-קבוצות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> של הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מכילות 3 מספרים ראשונים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> וגם 4 מספרים לא ראשונים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>.",
   "solutionHtml": "נתון ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>300</mn><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo>=</mo><mn>300</mn></mrow><annotation encoding=\"application/x-tex\">C(n,2)=300\\iff n(n-1)/2=300</annotation></semantics></math></span> ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">n=25</annotation></semantics></math></span> (כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mo>−</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">n=-24</annotation></semantics></math></span> לא מתאים).<br><br>המספרים הראשונים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הם איברי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>17</mn><mo separator=\"true\">,</mo><mn>19</mn><mo separator=\"true\">,</mo><mn>23</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">C=\\{2,3,5,7,11,13,17,19,23\\}</annotation></semantics></math></span>.<br><br>אז כל תת-קבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> המקיימת את התנאים היא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><msub><mi>B</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>B</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">B=B_1\\cup B_2</annotation></semantics></math></span>, כאשר:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>B</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant=\"normal\">&amp;</mi><mtext> </mtext><msub><mi>B</mi><mn>1</mn></msub><mo>⊆</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">|B_1|=3\\ \\&amp;\\ B_1\\subseteq C</annotation></semantics></math></span> (ויש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>84</mn></mrow><annotation encoding=\"application/x-tex\">C(9,3)=84</annotation></semantics></math></span> אופציות)<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>B</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant=\"normal\">&amp;</mi><mtext> </mtext><msub><mi>B</mi><mn>2</mn></msub><mo>⊆</mo><mi>A</mi><mo>−</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">|B_2|=4\\ \\&amp;\\ B_2\\subseteq A-C</annotation></semantics></math></span> (ויש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1820</mn></mrow><annotation encoding=\"application/x-tex\">C(16,4)=1820</annotation></semantics></math></span> אופציות)<br><br>מסקנה: מספר תתי-הקבוצות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> המקיימת את התנאים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>84</mn><mo>⋅</mo><mn>1820</mn><mo>=</mo><mn>152880</mn></mrow><annotation encoding=\"application/x-tex\">84\\cdot1820=152880</annotation></semantics></math></span>.",
   "pointsTotal": 10
  },
  {
   "num": 4,
   "part": "ב",
   "kind": "computation",
   "topic": "divisibility_primes",
   "question": "(10 נק') חשבו את מספר המחלקים $d$ של $m$ שמקיימים את התנאי $49\\mid d$, כאשר\n$$m=\\sum_{k=0}^{n}\\binom nk2^{n+k}5^{n-k}\\cdot\\sum_{k=0}^{n}\\binom nk4^{n+k}3^{n-k}$$",
   "solution": "לפי הבינום של Newton נקבל\n\n$$m=2^n\\cdot4^n\\cdot\\sum_{k=0}^{n}\\binom nk2^k5^{n-k}\\cdot\\sum_{k=0}^{n}\\binom nk4^k3^{n-k}=2^{3n}\\cdot7^{2n}$$\n\nכל מחלק $d$ של $m$ שמקיים את התנאי $49\\mid d$ הוא בצורה $d=2^a\\cdot7^2\\cdot7^b$, כאשר $a\\in\\{0,1,\\dots,3n\\}$ וגם $b\\in\\{0,1,\\dots,2n-2\\}$.\n\nמסקנה: למספר $m$ יש $(3n+1)(2n-1)$ מחלקים שמתחלקים ב-49.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 10,
   "id": "24B-A-Q4b",
   "partKey": "b",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מחלקים וראשוניים",
   "questionHtml": "(10 נק') חשבו את מספר המחלקים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> שמקיימים את התנאי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>49</mn><mo>∣</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">49\\mid d</annotation></semantics></math></span>, כאשר<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>m</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mi>k</mi></mrow></msup><msup><mn>5</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>+</mo><mi>k</mi></mrow></msup><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">m=\\sum_{k=0}^{n}\\binom nk2^{n+k}5^{n-k}\\cdot\\sum_{k=0}^{n}\\binom nk4^{n+k}3^{n-k}</annotation></semantics></math></span>",
   "solutionHtml": "לפי הבינום של Newton נקבל<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>m</mi><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>2</mn><mi>k</mi></msup><msup><mn>5</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>4</mn><mi>k</mi></msup><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mn>3</mn><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">m=2^n\\cdot4^n\\cdot\\sum_{k=0}^{n}\\binom nk2^k5^{n-k}\\cdot\\sum_{k=0}^{n}\\binom nk4^k3^{n-k}=2^{3n}\\cdot7^{2n}</annotation></semantics></math></span><br><br>כל מחלק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> שמקיים את התנאי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>49</mn><mo>∣</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">49\\mid d</annotation></semantics></math></span> הוא בצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><msup><mn>2</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mn>2</mn></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup></mrow><annotation encoding=\"application/x-tex\">d=2^a\\cdot7^2\\cdot7^b</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>∈</mo><mo stretchy=\"false\">{</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>3</mn><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">a\\in\\{0,1,\\dots,3n\\}</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi><mo>∈</mo><mo stretchy=\"false\">{</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">b\\in\\{0,1,\\dots,2n-2\\}</annotation></semantics></math></span>.<br><br>מסקנה: למספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(3n+1)(2n-1)</annotation></semantics></math></span> מחלקים שמתחלקים ב-49.",
   "pointsTotal": 10
  },
  {
   "num": 4,
   "part": "ג",
   "kind": "proof",
   "topic": "trees",
   "question": "(5 נק') יהי $T=(V,E)$ עץ שמקיים את התנאי: $\\deg(v)\\in\\{1,3\\}$ לכל $v\\in V$. אם ב-$T$ יש $p>3$ עלים, הראו כי ב-$T$ יש $p-2$ צמתים בדרגה 3.",
   "solution": "נסמן את מספר הצמתים בעלי דרגה 3 ב: $x$. מכיוון ש: $T$ הוא עץ, נשיג ש: $|E|=p+x-1$.\n\nאז לפי משפט הדרגות נקבל $p+3x=2(p+x-1)$ ולכן $x=p-2$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 5,
   "id": "24B-A-Q4c",
   "partKey": "c",
   "examCode": "24B-A",
   "examLabel": "אביב 2024, מועד א'",
   "year": 2024,
   "source": "exam",
   "topicLabel": "עצים",
   "questionHtml": "(5 נק') יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">T=(V,E)</annotation></semantics></math></span> עץ שמקיים את התנאי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>∈</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\deg(v)\\in\\{1,3\\}</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow><annotation encoding=\"application/x-tex\">v\\in V</annotation></semantics></math></span>. אם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>&gt;</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">p&gt;3</annotation></semantics></math></span> עלים, הראו כי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">p-2</annotation></semantics></math></span> צמתים בדרגה 3.",
   "solutionHtml": "נסמן את מספר הצמתים בעלי דרגה 3 ב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>. מכיוון ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> הוא עץ, נשיג ש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|E|=p+x-1</annotation></semantics></math></span>.<br><br>אז לפי משפט הדרגות נקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>p</mi><mo>+</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p+3x=2(p+x-1)</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mi>p</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=p-2</annotation></semantics></math></span>.",
   "pointsTotal": 5
  },
  {
   "num": 1,
   "part": "א",
   "kind": "computation",
   "topic": "function_counting",
   "question": "**א1.** (4 נק') המונח: פונקציה \"על\".\n\n**א2.** (5 נק') שאלה: חשבו $|\\Omega|$, כאשר $\\Omega$ היא קבוצה של כל הפונקציות על $f:\\{1,2,3,4,5,6\\}\\to\\{1,2,3,4\\}$.",
   "solution": "**א1. הגדרה:** $f:A\\to B$ היא פונקציה על אם $\\forall y\\in B,\\ \\exists x\\in A:\\ y=f(x)$.\n\n**א2.** $\\Omega$ היא קבוצת כל הפונקציות על $f:\\{1,2,3,4,5,6\\}\\to\\{1,2,3,4\\}$.\n\nנוסחה (מספר הפונקציות על):\n$$n^m-\\binom{n}{1}(n-1)^m+\\binom{n}{2}(n-2)^m-\\dots+(-1)^{n-1}\\binom{n}{n-1}1^m$$\n\nבפתרון המקורי מסומן $|\\{1,2,3,4,5,6\\}|=n=6$ ו-$|\\{1,2,3,4\\}|=m=4$, והחישוב שמופיע הוא:\n\n$$|\\Omega|=4^6-\\binom41 3^6+\\binom42 2^6-\\binom43 1^6=4^6-4\\cdot3^6+6\\cdot2^6-4\\cdot1=1560$$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 9,
   "rubric": [
    {
     "text": "הגדרת פונקציה על: לכל $y$ בטווח קיים $x$ בתחום עם $f(x)=y$",
     "points": 4,
     "html": "הגדרת פונקציה על: לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> בטווח קיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> בתחום עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">f(x)=y</annotation></semantics></math></span>"
    },
    {
     "text": "שימוש בנוסחת ההכלה וההדחה לפונקציות על: $4^6-\\binom41 3^6+\\binom42 2^6-\\binom43 1^6$",
     "points": 3,
     "html": "שימוש בנוסחת ההכלה וההדחה לפונקציות על: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>6</mn></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>1</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>3</mn><mn>6</mn></msup><mo>+</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>2</mn><mn>6</mn></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>1</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">4^6-\\binom41 3^6+\\binom42 2^6-\\binom43 1^6</annotation></semantics></math></span>"
    },
    {
     "text": "חישוב נכון של התוצאה $1560$",
     "points": 2,
     "html": "חישוב נכון של התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1560</mn></mrow><annotation encoding=\"application/x-tex\">1560</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להחליף בין גודל התחום לגודל הטווח ולכתוב $6^4$ במקום $4^6$.",
    "לשכוח את האיבר האחרון בסכום המתחלף, או לטעות בסימן."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "איזו שיטה מתאימה לספירת הפונקציות **על** מ-$\\{1,\\dots,6\\}$ אל $\\{1,2,3,4\\}$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "הכלה והדחה על ערכי הטווח שאינם מתקבלים",
       "html": "הכלה והדחה על ערכי הטווח שאינם מתקבלים"
      },
      {
       "id": "b",
       "type": "text",
       "value": "מספר התמורות של 6 איברים",
       "html": "מספר התמורות של 6 איברים"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מכפלת $4\\cdot6$",
       "html": "מכפלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot6</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$\\binom64$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom64</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "מורידים מכלל הפונקציות את אלה שמחמיצות ערך אחד או יותר, בסימנים מתחלפים.",
     "promptHtml": "איזו שיטה מתאימה לספירת הפונקציות <strong>על</strong> מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> אל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span>?",
     "explainHtml": "מורידים מכלל הפונקציות את אלה שמחמיצות ערך אחד או יותר, בסימנים מתחלפים."
    },
    {
     "type": "numeric",
     "prompt": "כמה פונקציות יש בסך הכול מ-$\\{1,\\dots,6\\}$ אל $\\{1,2,3,4\\}$ (האיבר הראשון בנוסחה)?",
     "answer": 4096,
     "tol": 0,
     "explain": "$4^6=4096$.",
     "promptHtml": "כמה פונקציות יש בסך הכול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> אל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> (האיבר הראשון בנוסחה)?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>6</mn></msup><mo>=</mo><mn>4096</mn></mrow><annotation encoding=\"application/x-tex\">4^6=4096</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו האיבר $\\binom41 3^6$ בנוסחה?",
     "answer": 2916,
     "tol": 0,
     "explain": "$4\\cdot729=2916$.",
     "promptHtml": "מהו האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>1</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>3</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">\\binom41 3^6</annotation></semantics></math></span> בנוסחה?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>729</mn><mo>=</mo><mn>2916</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot729=2916</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו מספר הפונקציות על?",
     "answer": 1560,
     "tol": 0,
     "explain": "$4096-2916+384-4=1560$.",
     "promptHtml": "מהו מספר הפונקציות על?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4096</mn><mo>−</mo><mn>2916</mn><mo>+</mo><mn>384</mn><mo>−</mo><mn>4</mn><mo>=</mo><mn>1560</mn></mrow><annotation encoding=\"application/x-tex\">4096-2916+384-4=1560</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q1a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ספירת פונקציות",
   "questionHtml": "<strong>א1.</strong> (4 נק') המונח: פונקציה \"על\".<br><br><strong>א2.</strong> (5 נק') שאלה: חשבו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi mathvariant=\"normal\">Ω</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|\\Omega|</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi></mrow><annotation encoding=\"application/x-tex\">\\Omega</annotation></semantics></math></span> היא קבוצה של כל הפונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4,5,6\\}\\to\\{1,2,3,4\\}</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>א1. הגדרה:</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">f:A\\to B</annotation></semantics></math></span> היא פונקציה על אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∀</mi><mi>y</mi><mo>∈</mo><mi>B</mi><mo separator=\"true\">,</mo><mtext> </mtext><mi mathvariant=\"normal\">∃</mi><mi>x</mi><mo>∈</mo><mi>A</mi><mo>:</mo><mtext> </mtext><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\forall y\\in B,\\ \\exists x\\in A:\\ y=f(x)</annotation></semantics></math></span>.<br><br><strong>א2.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi></mrow><annotation encoding=\"application/x-tex\">\\Omega</annotation></semantics></math></span> היא קבוצת כל הפונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4,5,6\\}\\to\\{1,2,3,4\\}</annotation></semantics></math></span>.<br><br>נוסחה (מספר הפונקציות על):<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>1</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mo>+</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mo>−</mo><mo>⋯</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>1</mn><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^m-\\binom{n}{1}(n-1)^m+\\binom{n}{2}(n-2)^m-\\dots+(-1)^{n-1}\\binom{n}{n-1}1^m</annotation></semantics></math></span><br><br>בפתרון המקורי מסומן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">|\\{1,2,3,4,5,6\\}|=n=6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>m</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">|\\{1,2,3,4\\}|=m=4</annotation></semantics></math></span>, והחישוב שמופיע הוא:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi mathvariant=\"normal\">Ω</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><msup><mn>4</mn><mn>6</mn></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>1</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>3</mn><mn>6</mn></msup><mo>+</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>2</mn><mn>6</mn></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>1</mn><mn>6</mn></msup><mo>=</mo><msup><mn>4</mn><mn>6</mn></msup><mo>−</mo><mn>4</mn><mo>⋅</mo><msup><mn>3</mn><mn>6</mn></msup><mo>+</mo><mn>6</mn><mo>⋅</mo><msup><mn>2</mn><mn>6</mn></msup><mo>−</mo><mn>4</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>1560</mn></mrow><annotation encoding=\"application/x-tex\">|\\Omega|=4^6-\\binom41 3^6+\\binom42 2^6-\\binom43 1^6=4^6-4\\cdot3^6+6\\cdot2^6-4\\cdot1=1560</annotation></semantics></math></span>",
   "pointsTotal": 9,
   "pitfallsHtml": [
    "להחליף בין גודל התחום לגודל הטווח ולכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>6</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">6^4</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">4^6</annotation></semantics></math></span>.",
    "לשכוח את האיבר האחרון בסכום המתחלף, או לטעות בסימן."
   ]
  },
  {
   "num": 1,
   "part": "ב",
   "kind": "computation",
   "topic": "asymptotics",
   "question": "**ב1.** (4 נק') המונח: $g=\\theta(f)$ (קצב גידול הפונקציות) כאשר $g,f:\\mathbb{N}\\to(0,\\infty)$.\n\n**ב2.** (4 נק') שאלה: הוכיחו ש-\n$$n^2+2\\ln n=\\theta\\left(3n^2+\\ln^2 n\\right)$$",
   "solution": "**ב1. הגדרה:**\n$$g=\\theta(f)\\iff \\exists c_1>0,\\ c_2>0,\\ N(c_1,c_2)\\in\\mathbb{N}:\\ \\forall n>N(c_1,c_2)\\to c_1\\cdot f(n)\\le g(n)\\le c_2\\cdot f(n)$$\n\n**ב2.** נשתמש בקריטריון הגבול: $g=\\theta(f)\\iff \\lim_{n\\to\\infty}\\frac{g(n)}{f(n)}=L\\in\\mathbb{R},\\ L>0$.\n\n$$\\lim_{n\\to\\infty}\\frac{n^2+2\\ln n}{3n^2+\\ln^2 n}=\\lim_{n\\to\\infty}\\frac{2n+2\\cdot\\frac1n}{6n+2\\ln n\\cdot\\frac1n}=\\lim_{n\\to\\infty}\\frac{2n^2+2}{6n^2+2\\ln n}=\\lim_{n\\to\\infty}\\frac{4n}{12n+2\\cdot\\frac1n}=\\frac13>0$$\n\nלכן $n^2+2\\ln n=\\theta\\left(3n^2+\\ln^2 n\\right)$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "הגדרת $g=\\theta(f)$ עם $c_1,c_2,N$",
     "points": 4,
     "html": "הגדרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g=\\theta(f)</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>c</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">c_1,c_2,N</annotation></semantics></math></span>"
    },
    {
     "text": "שימוש בקריטריון הגבול: הגבול של $\\frac{g}{f}$ הוא מספר חיובי סופי",
     "points": 1,
     "html": "שימוש בקריטריון הגבול: הגבול של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mi>g</mi><mi>f</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{g}{f}</annotation></semantics></math></span> הוא מספר חיובי סופי"
    },
    {
     "text": "חישוב הגבול בעזרת כלל לופיטל",
     "points": 2,
     "html": "חישוב הגבול בעזרת כלל לופיטל"
    },
    {
     "text": "מסקנה: הגבול $\\frac13>0$ ולכן $\\theta$",
     "points": 1,
     "html": "מסקנה: הגבול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\frac13&gt;0</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi></mrow><annotation encoding=\"application/x-tex\">\\theta</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להסתפק בגבול קיים: צריך גבול סופי וחיובי.",
    "להתעלם מהנגזרת של $\\ln^2 n$, שהיא $2\\ln n\\cdot\\frac1n$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "באיזו שיטה כדאי להוכיח את הטענה?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "קריטריון הגבול של $\\frac{g(n)}{f(n)}$",
       "html": "קריטריון הגבול של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{g(n)}{f(n)}</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "אינדוקציה על $n$",
       "html": "אינדוקציה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "שובך היונים",
       "html": "שובך היונים"
      },
      {
       "id": "d",
       "type": "text",
       "value": "בדיקת $n=1$ בלבד",
       "html": "בדיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span> בלבד"
      }
     ],
     "correctId": "a",
     "explain": "קריטריון הגבול: אם הגבול הוא $L>0$ סופי, אז $g=\\theta(f)$.",
     "promptHtml": "באיזו שיטה כדאי להוכיח את הטענה?",
     "explainHtml": "קריטריון הגבול: אם הגבול הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">L&gt;0</annotation></semantics></math></span> סופי, אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g=\\theta(f)</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $\\lim_{n\\to\\infty}\\frac{n^2+2\\ln n}{3n^2+\\ln^2 n}$ (כתבו כעשרוני)?",
     "answer": 0.3333,
     "tol": 0.005,
     "explain": "הגבול הוא $\\frac13$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></msub><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi></mrow><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>ln</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mi>n</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\lim_{n\\to\\infty}\\frac{n^2+2\\ln n}{3n^2+\\ln^2 n}</annotation></semantics></math></span> (כתבו כעשרוני)?",
     "explainHtml": "הגבול הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "מה צריך להתקיים לגבול $L$ כדי להסיק $\\theta$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$L$ סופי וגדול מ-$0$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> סופי וגדול מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$L=0$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">L=0</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$L=\\infty$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">L=\\infty</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$L=1$ בדיוק",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">L=1</annotation></semantics></math></span> בדיוק"
      }
     ],
     "correctId": "a",
     "explain": "הגבול חייב להיות מספר ממשי חיובי.",
     "promptHtml": "מה צריך להתקיים לגבול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> כדי להסיק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>θ</mi></mrow><annotation encoding=\"application/x-tex\">\\theta</annotation></semantics></math></span>?",
     "explainHtml": "הגבול חייב להיות מספר ממשי חיובי."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q1b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "סדרי גודל",
   "questionHtml": "<strong>ב1.</strong> (4 נק') המונח: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g=\\theta(f)</annotation></semantics></math></span> (קצב גידול הפונקציות) כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo separator=\"true\">,</mo><mi>f</mi><mo>:</mo><mi mathvariant=\"double-struck\">N</mi><mo>→</mo><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mi mathvariant=\"normal\">∞</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g,f:\\mathbb{N}\\to(0,\\infty)</annotation></semantics></math></span>.<br><br><strong>ב2.</strong> (4 נק') שאלה: הוכיחו ש-<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi><mo>=</mo><mi>θ</mi><mrow><mo fence=\"true\">(</mo><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>ln</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mi>n</mi><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">n^2+2\\ln n=\\theta\\left(3n^2+\\ln^2 n\\right)</annotation></semantics></math></span>",
   "solutionHtml": "<strong>ב1. הגדרה:</strong><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>g</mi><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">)</mo><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><mi mathvariant=\"normal\">∃</mi><msub><mi>c</mi><mn>1</mn></msub><mo>&gt;</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>c</mi><mn>2</mn></msub><mo>&gt;</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>N</mi><mo stretchy=\"false\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi><mo>:</mo><mtext> </mtext><mi mathvariant=\"normal\">∀</mi><mi>n</mi><mo>&gt;</mo><mi>N</mi><mo stretchy=\"false\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo>→</mo><msub><mi>c</mi><mn>1</mn></msub><mo>⋅</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>≤</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>≤</mo><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g=\\theta(f)\\iff \\exists c_1&gt;0,\\ c_2&gt;0,\\ N(c_1,c_2)\\in\\mathbb{N}:\\ \\forall n&gt;N(c_1,c_2)\\to c_1\\cdot f(n)\\le g(n)\\le c_2\\cdot f(n)</annotation></semantics></math></span><br><br><strong>ב2.</strong> נשתמש בקריטריון הגבול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo>=</mo><mi>θ</mi><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">)</mo><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></msub><mfrac><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow></mfrac><mo>=</mo><mi>L</mi><mo>∈</mo><mi mathvariant=\"double-struck\">R</mi><mo separator=\"true\">,</mo><mtext> </mtext><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">g=\\theta(f)\\iff \\lim_{n\\to\\infty}\\frac{g(n)}{f(n)}=L\\in\\mathbb{R},\\ L&gt;0</annotation></semantics></math></span>.<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></munder><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi></mrow><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>ln</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mi>n</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></munder><mfrac><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow><mrow><mn>6</mn><mi>n</mi><mo>+</mo><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></mfrac><mo>=</mo><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></munder><mfrac><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow><mrow><mn>6</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi></mrow></mfrac><mo>=</mo><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></munder><mfrac><mrow><mn>4</mn><mi>n</mi></mrow><mrow><mn>12</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\lim_{n\\to\\infty}\\frac{n^2+2\\ln n}{3n^2+\\ln^2 n}=\\lim_{n\\to\\infty}\\frac{2n+2\\cdot\\frac1n}{6n+2\\ln n\\cdot\\frac1n}=\\lim_{n\\to\\infty}\\frac{2n^2+2}{6n^2+2\\ln n}=\\lim_{n\\to\\infty}\\frac{4n}{12n+2\\cdot\\frac1n}=\\frac13&gt;0</annotation></semantics></math></span><br><br>לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi><mo>=</mo><mi>θ</mi><mrow><mo fence=\"true\">(</mo><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>ln</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mi>n</mi><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">n^2+2\\ln n=\\theta\\left(3n^2+\\ln^2 n\\right)</annotation></semantics></math></span>.",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "להסתפק בגבול קיים: צריך גבול סופי וחיובי.",
    "להתעלם מהנגזרת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mrow><mi>ln</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\ln^2 n</annotation></semantics></math></span>, שהיא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>ln</mi><mo>⁡</mo><mi>n</mi><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">2\\ln n\\cdot\\frac1n</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 1,
   "part": "ג",
   "kind": "truefalse",
   "topic": "graph_basics",
   "question": "**ג1.** (4 נק') המונח: גרף דו-צדדי.\n\n**ג2.** (4 נק') שאלה: האם משלים של הגרף $C_6$ הוא דו-צדדי? נמקו.",
   "solution": "**ג1. הגדרה:** $G=(A,B,E)$ הוא גרף דו-צדדי אם\n$$A,B\\ne\\emptyset,\\qquad A\\cap B=\\emptyset,\\qquad (x,y)\\in E\\Rightarrow x\\in A\\ \\text{and}\\ y\\in B$$\n\n**ג2.** נסמן $C_6=(V,E)$, $V=\\{v_1,v_2,v_3,v_4,v_5,v_6\\}$, $E=\\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\\}$.\n\nבמשלים $\\overline{C_6}=(V,\\overline{E})$ מתקיים $C_3=\\{(v_1,v_3),(v_3,v_5),(v_5,v_1)\\}\\subseteq\\overline{E}$.\n\nלכן $\\overline{C_6}$ אינו גרף דו-צדדי: משלים של הגרף $C_6$ כולל מעגל אי-זוגי, ולכן לא יכול להיות גרף דו-צדדי.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "verdict": false,
   "points": 8,
   "rubric": [
    {
     "text": "הגדרת גרף דו-צדדי: $A,B$ זרות ולא ריקות והצלעות בין הצדדים",
     "points": 4,
     "html": "הגדרת גרף דו-צדדי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A,B</annotation></semantics></math></span> זרות ולא ריקות והצלעות בין הצדדים"
    },
    {
     "text": "זיהוי $C_3$ ב-$\\overline{C_6}$ על הצמתים $v_1,v_3,v_5$",
     "points": 2,
     "html": "זיהוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_3</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span> על הצמתים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,v_3,v_5</annotation></semantics></math></span>"
    },
    {
     "text": "מסקנה: מעגל אי-זוגי ולכן אינו דו-צדדי",
     "points": 2,
     "html": "מסקנה: מעגל אי-זוגי ולכן אינו דו-צדדי"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לטעון ש-$\\overline{C_6}$ דו-צדדי רק כי $C_6$ עצמו דו-צדדי.",
    "לא לנמק: צריך להראות מעגל אי-זוגי מפורש."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה צלעות יש ב-$\\overline{C_6}$?",
     "answer": 9,
     "tol": 0,
     "explain": "$\\binom62-6=15-6=9$.",
     "promptHtml": "כמה צלעות יש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>−</mo><mn>6</mn><mo>=</mo><mn>15</mn><mo>−</mo><mn>6</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">\\binom62-6=15-6=9</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "איזה מעגל אי-זוגי מופיע ב-$\\overline{C_6}$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$v_1,v_3,v_5$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,v_3,v_5</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$v_1,v_2,v_3$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,v_2,v_3</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$v_1,v_2,v_3,v_4$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,v_2,v_3,v_4</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$v_2,v_4,v_6,v_1$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_2,v_4,v_6,v_1</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "$(v_1,v_3),(v_3,v_5),(v_5,v_1)\\notin E$, ולכן הן במשלים.",
     "promptHtml": "איזה מעגל אי-זוגי מופיע ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo mathvariant=\"normal\">∉</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">(v_1,v_3),(v_3,v_5),(v_5,v_1)\\notin E</annotation></semantics></math></span>, ולכן הן במשלים."
    },
    {
     "type": "order",
     "prompt": "סדרו את הנימוק.",
     "lines": [
      "נסמן $C_6=(V,E)$ עם $V=\\{v_1,\\dots,v_6\\}$ ו-$E=\\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\\}$.",
      "הצלעות $(v_1,v_3),(v_3,v_5),(v_5,v_1)$ אינן ב-$E$, ולכן הן ב-$\\overline{E}$.",
      "לכן $C_3=\\{(v_1,v_3),(v_3,v_5),(v_5,v_1)\\}\\subseteq\\overline{E}$ הוא מעגל באורך 3 ב-$\\overline{C_6}$.",
      "גרף דו-צדדי אינו יכול להכיל מעגל אי-זוגי, ולכן $\\overline{C_6}$ אינו דו-צדדי."
     ],
     "explain": "הגדרת הגרף, זיהוי הצלעות במשלים, המעגל, ואז המסקנה.",
     "promptHtml": "סדרו את הנימוק.",
     "explainHtml": "הגדרת הגרף, זיהוי הצלעות במשלים, המעגל, ואז המסקנה.",
     "linesHtml": [
      "נסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>6</mn></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C_6=(V,E)</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">V=\\{v_1,\\dots,v_6\\}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>4</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>6</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">E=\\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\\}</annotation></semantics></math></span>.",
      "הצלעות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(v_1,v_3),(v_3,v_5),(v_5,v_1)</annotation></semantics></math></span> אינן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>, ולכן הן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>E</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{E}</annotation></semantics></math></span>.",
      "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo><mo>⊆</mo><mrow class=\"ovl\"><mi>E</mi></mrow></mrow><annotation encoding=\"application/x-tex\">C_3=\\{(v_1,v_3),(v_3,v_5),(v_5,v_1)\\}\\subseteq\\overline{E}</annotation></semantics></math></span> הוא מעגל באורך 3 ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span>.",
      "גרף דו-צדדי אינו יכול להכיל מעגל אי-זוגי, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span> אינו דו-צדדי."
     ]
    },
    {
     "type": "findbug",
     "prompt": "באיזו שורה יש טעות?",
     "lines": [
      "נסמן $C_6=(V,E)$ עם $V=\\{v_1,\\dots,v_6\\}$ ו-$E=\\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\\}$.",
      "הצלעות $(v_1,v_3),(v_3,v_5),(v_5,v_1)$ אינן ב-$E$, ולכן הן ב-$\\overline{E}$.",
      "לכן $C_3=\\{(v_1,v_2),(v_3,v_5),(v_5,v_1)\\}\\subseteq\\overline{E}$ הוא מעגל באורך 3 ב-$\\overline{C_6}$.",
      "גרף דו-צדדי אינו יכול להכיל מעגל אי-זוגי, ולכן $\\overline{C_6}$ אינו דו-צדדי."
     ],
     "bugIndex": 2,
     "explain": "$(v_1,v_2)\\in E$, ולכן אינה במשלים.",
     "promptHtml": "באיזו שורה יש טעות?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo>∈</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">(v_1,v_2)\\in E</annotation></semantics></math></span>, ולכן אינה במשלים.",
     "linesHtml": [
      "נסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>6</mn></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C_6=(V,E)</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">V=\\{v_1,\\dots,v_6\\}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>4</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>6</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">E=\\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\\}</annotation></semantics></math></span>.",
      "הצלעות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(v_1,v_3),(v_3,v_5),(v_5,v_1)</annotation></semantics></math></span> אינן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>, ולכן הן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>E</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{E}</annotation></semantics></math></span>.",
      "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo><mo>⊆</mo><mrow class=\"ovl\"><mi>E</mi></mrow></mrow><annotation encoding=\"application/x-tex\">C_3=\\{(v_1,v_2),(v_3,v_5),(v_5,v_1)\\}\\subseteq\\overline{E}</annotation></semantics></math></span> הוא מעגל באורך 3 ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span>.",
      "גרף דו-צדדי אינו יכול להכיל מעגל אי-זוגי, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span> אינו דו-צדדי."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q1c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "גרפים: יסודות",
   "questionHtml": "<strong>ג1.</strong> (4 נק') המונח: גרף דו-צדדי.<br><br><strong>ג2.</strong> (4 נק') שאלה: האם משלים של הגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_6</annotation></semantics></math></span> הוא דו-צדדי? נמקו.",
   "solutionHtml": "<strong>ג1. הגדרה:</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(A,B,E)</annotation></semantics></math></span> הוא גרף דו-צדדי אם<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo mathvariant=\"normal\">≠</mo><mi mathvariant=\"normal\">∅</mi><mo separator=\"true\">,</mo><mspace width=\"2em\"/><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi mathvariant=\"normal\">∅</mi><mo separator=\"true\">,</mo><mspace width=\"2em\"/><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mo>∈</mo><mi>E</mi><mo>⇒</mo><mi>x</mi><mo>∈</mo><mi>A</mi><mtext> and </mtext><mi>y</mi><mo>∈</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A,B\\ne\\emptyset,\\qquad A\\cap B=\\emptyset,\\qquad (x,y)\\in E\\Rightarrow x\\in A\\ \\text{and}\\ y\\in B</annotation></semantics></math></span><br><br><strong>ג2.</strong> נסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>6</mn></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C_6=(V,E)</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">V=\\{v_1,v_2,v_3,v_4,v_5,v_6\\}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>4</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>6</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">E=\\{(v_1,v_2),(v_2,v_3),(v_3,v_4),(v_4,v_5),(v_5,v_6),(v_6,v_1)\\}</annotation></semantics></math></span>.<br><br>במשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mrow class=\"ovl\"><mi>E</mi></mrow><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}=(V,\\overline{E})</annotation></semantics></math></span> מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo><mo>⊆</mo><mrow class=\"ovl\"><mi>E</mi></mrow></mrow><annotation encoding=\"application/x-tex\">C_3=\\{(v_1,v_3),(v_3,v_5),(v_5,v_1)\\}\\subseteq\\overline{E}</annotation></semantics></math></span>.<br><br>לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span> אינו גרף דו-צדדי: משלים של הגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_6</annotation></semantics></math></span> כולל מעגל אי-זוגי, ולכן לא יכול להיות גרף דו-צדדי.",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לטעון ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{C_6}</annotation></semantics></math></span> דו-צדדי רק כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_6</annotation></semantics></math></span> עצמו דו-צדדי.",
    "לא לנמק: צריך להראות מעגל אי-זוגי מפורש."
   ]
  },
  {
   "num": 2,
   "part": "א",
   "kind": "computation",
   "topic": "sum_product_inclusion",
   "question": "(9 נק') תהי הקבוצה $U=\\{100,101,102,\\dots,300\\}$. כמה מבין המספרים מ-$U$ לא מתחלקים ב-11 וגם לא מתחלקים ב-6 וגם לא מתחלקים ב-5?",
   "solution": "$U$ היא קבוצת המספרים מ-100 עד 300, לכן $|U|=201$.\n\nנסמן ב-$A_1$ את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-11, לכן $|A_1|=\\left\\lfloor\\frac{300}{11}\\right\\rfloor-\\left\\lfloor\\frac{99}{11}\\right\\rfloor=27-9=18$.\n\nנסמן ב-$A_2$ את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-6, לכן $|A_2|=\\left\\lfloor\\frac{300}{6}\\right\\rfloor-\\left\\lfloor\\frac{99}{6}\\right\\rfloor=50-16=34$.\n\nנסמן ב-$A_3$ את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-5, לכן $|A_3|=\\left\\lfloor\\frac{300}{5}\\right\\rfloor-\\left\\lfloor\\frac{99}{5}\\right\\rfloor=60-19=41$.\n\nנחשב חיתוכים של זוגות:\n\n$|A_2\\cap A_3|=\\left\\lfloor\\frac{300}{30}\\right\\rfloor-\\left\\lfloor\\frac{99}{30}\\right\\rfloor=10-3=7$\n\n$|A_1\\cap A_3|=\\left\\lfloor\\frac{300}{55}\\right\\rfloor-\\left\\lfloor\\frac{99}{55}\\right\\rfloor=5-1=4$\n\n$|A_1\\cap A_2|=\\left\\lfloor\\frac{300}{66}\\right\\rfloor-\\left\\lfloor\\frac{99}{66}\\right\\rfloor=4-1=3$\n\nוחיתוך של כל השלושה: $|A_1\\cap A_2\\cap A_3|=\\left\\lfloor\\frac{300}{330}\\right\\rfloor-\\left\\lfloor\\frac{99}{330}\\right\\rfloor=0$.\n\nלמעשה אנו מחפשים את $|\\overline{A_1}\\cap\\overline{A_2}\\cap\\overline{A_3}|$, לכן:\n\n$$|\\overline{A_1}\\cap\\overline{A_2}\\cap\\overline{A_3}|=|U|-|A_1|-|A_2|-|A_3|+|A_1\\cap A_2|+|A_1\\cap A_3|+|A_2\\cap A_3|-|A_1\\cap A_2\\cap A_3|$$\n$$=201-18-34-41+7+4+3-0=122$$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 9,
   "rubric": [
    {
     "text": "$|U|=201$ וסימון הקבוצות $A_1,A_2,A_3$",
     "points": 2,
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>201</mn></mrow><annotation encoding=\"application/x-tex\">|U|=201</annotation></semantics></math></span> וסימון הקבוצות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>A</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>A</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>A</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">A_1,A_2,A_3</annotation></semantics></math></span>"
    },
    {
     "text": "חישוב נכון של $|A_1|,|A_2|,|A_3|$",
     "points": 2,
     "html": "חישוב נכון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo separator=\"true\">,</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo separator=\"true\">,</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A_1|,|A_2|,|A_3|</annotation></semantics></math></span>"
    },
    {
     "text": "חישוב נכון של החיתוכים בזוגות ושל חיתוך שלושתם",
     "points": 3,
     "html": "חישוב נכון של החיתוכים בזוגות ושל חיתוך שלושתם"
    },
    {
     "text": "הצבה בנוסחת ההכלה וההדחה והתוצאה $122$",
     "points": 2,
     "html": "הצבה בנוסחת ההכלה וההדחה והתוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>122</mn></mrow><annotation encoding=\"application/x-tex\">122</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור $\\lfloor 300/11\\rfloor$ בלי להחסיר את $\\lfloor 99/11\\rfloor$ (המספרים מתחילים ב-100).",
    "להשתמש במכפלה במקום בכפולה המשותפת הקטנה ביותר: ל-6 ול-5 היא 30."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "איך סופרים את המספרים שלא מתחלקים באף אחד משלושת המספרים?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$|U|$ פחות האיחוד, בהכלה והדחה",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|U|</annotation></semantics></math></span> פחות האיחוד, בהכלה והדחה"
      },
      {
       "id": "b",
       "type": "text",
       "value": "מחסירים את $|A_1|+|A_2|+|A_3|$ בלבד",
       "html": "מחסירים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A_1|+|A_2|+|A_3|</annotation></semantics></math></span> בלבד"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$|U|\\cdot\\frac{1}{11\\cdot6\\cdot5}$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>⋅</mo><mfrac><mn>1</mn><mrow><mn>11</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mn>5</mn></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">|U|\\cdot\\frac{1}{11\\cdot6\\cdot5}</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$|A_1|\\cdot|A_2|\\cdot|A_3|$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>⋅</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>⋅</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A_1|\\cdot|A_2|\\cdot|A_3|</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "הנוסחה: $|U|-\\sum|A_i|+\\sum|A_i\\cap A_j|-|A_1\\cap A_2\\cap A_3|$.",
     "promptHtml": "איך סופרים את המספרים שלא מתחלקים באף אחד משלושת המספרים?",
     "explainHtml": "הנוסחה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mo>∑</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mi>i</mi></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mo>∑</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mi>i</mi></msub><mo>∩</mo><msub><mi>A</mi><mi>j</mi></msub><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>2</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|U|-\\sum|A_i|+\\sum|A_i\\cap A_j|-|A_1\\cap A_2\\cap A_3|</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "כמה מספרים מ-100 עד 300 מתחלקים ב-11?",
     "answer": 18,
     "tol": 0,
     "explain": "$\\lfloor300/11\\rfloor-\\lfloor99/11\\rfloor=27-9=18$.",
     "promptHtml": "כמה מספרים מ-100 עד 300 מתחלקים ב-11?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>300</mn><mi mathvariant=\"normal\">/</mi><mn>11</mn><mo stretchy=\"false\">⌋</mo><mo>−</mo><mo stretchy=\"false\">⌊</mo><mn>99</mn><mi mathvariant=\"normal\">/</mi><mn>11</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>27</mn><mo>−</mo><mn>9</mn><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor300/11\\rfloor-\\lfloor99/11\\rfloor=27-9=18</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "כמה מספרים מ-100 עד 300 מתחלקים גם ב-6 וגם ב-5 (כלומר ב-30)?",
     "answer": 7,
     "tol": 0,
     "explain": "$10-3=7$.",
     "promptHtml": "כמה מספרים מ-100 עד 300 מתחלקים גם ב-6 וגם ב-5 (כלומר ב-30)?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">10-3=7</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "כמה מספרים מ-100 עד 300 מתחלקים ב-11, ב-6 וב-5 יחד (כלומר ב-330)?",
     "answer": 0,
     "tol": 0,
     "explain": "$330>300$, ולכן אין.",
     "promptHtml": "כמה מספרים מ-100 עד 300 מתחלקים ב-11, ב-6 וב-5 יחד (כלומר ב-330)?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>330</mn><mo>&gt;</mo><mn>300</mn></mrow><annotation encoding=\"application/x-tex\">330&gt;300</annotation></semantics></math></span>, ולכן אין."
    },
    {
     "type": "numeric",
     "prompt": "כמה מספרים ב-$U$ לא מתחלקים באף אחד מ-11, 6, 5?",
     "answer": 122,
     "tol": 0,
     "explain": "$201-18-34-41+7+4+3-0=122$.",
     "promptHtml": "כמה מספרים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>U</mi></mrow><annotation encoding=\"application/x-tex\">U</annotation></semantics></math></span> לא מתחלקים באף אחד מ-11, 6, 5?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>201</mn><mo>−</mo><mn>18</mn><mo>−</mo><mn>34</mn><mo>−</mo><mn>41</mn><mo>+</mo><mn>7</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>122</mn></mrow><annotation encoding=\"application/x-tex\">201-18-34-41+7+4+3-0=122</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q2a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "הכלה והדחה",
   "questionHtml": "(9 נק') תהי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>101</mn><mo separator=\"true\">,</mo><mn>102</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>300</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">U=\\{100,101,102,\\dots,300\\}</annotation></semantics></math></span>. כמה מבין המספרים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>U</mi></mrow><annotation encoding=\"application/x-tex\">U</annotation></semantics></math></span> לא מתחלקים ב-11 וגם לא מתחלקים ב-6 וגם לא מתחלקים ב-5?",
   "solutionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>U</mi></mrow><annotation encoding=\"application/x-tex\">U</annotation></semantics></math></span> היא קבוצת המספרים מ-100 עד 300, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>201</mn></mrow><annotation encoding=\"application/x-tex\">|U|=201</annotation></semantics></math></span>.<br><br>נסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>A</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">A_1</annotation></semantics></math></span> את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-11, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>11</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>27</mn><mo>−</mo><mn>9</mn><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">|A_1|=\\left\\lfloor\\frac{300}{11}\\right\\rfloor-\\left\\lfloor\\frac{99}{11}\\right\\rfloor=27-9=18</annotation></semantics></math></span>.<br><br>נסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>A</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">A_2</annotation></semantics></math></span> את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-6, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>6</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>6</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>50</mn><mo>−</mo><mn>16</mn><mo>=</mo><mn>34</mn></mrow><annotation encoding=\"application/x-tex\">|A_2|=\\left\\lfloor\\frac{300}{6}\\right\\rfloor-\\left\\lfloor\\frac{99}{6}\\right\\rfloor=50-16=34</annotation></semantics></math></span>.<br><br>נסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>A</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">A_3</annotation></semantics></math></span> את קבוצת כל המספרים מ-100 עד 300 המתחלקים ב-5, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>5</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>5</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>60</mn><mo>−</mo><mn>19</mn><mo>=</mo><mn>41</mn></mrow><annotation encoding=\"application/x-tex\">|A_3|=\\left\\lfloor\\frac{300}{5}\\right\\rfloor-\\left\\lfloor\\frac{99}{5}\\right\\rfloor=60-19=41</annotation></semantics></math></span>.<br><br>נחשב חיתוכים של זוגות:<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>30</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>30</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>10</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">|A_2\\cap A_3|=\\left\\lfloor\\frac{300}{30}\\right\\rfloor-\\left\\lfloor\\frac{99}{30}\\right\\rfloor=10-3=7</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>55</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>55</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>5</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">|A_1\\cap A_3|=\\left\\lfloor\\frac{300}{55}\\right\\rfloor-\\left\\lfloor\\frac{99}{55}\\right\\rfloor=5-1=4</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>66</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>66</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>4</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">|A_1\\cap A_2|=\\left\\lfloor\\frac{300}{66}\\right\\rfloor-\\left\\lfloor\\frac{99}{66}\\right\\rfloor=4-1=3</annotation></semantics></math></span><br><br>וחיתוך של כל השלושה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>2</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>300</mn><mn>330</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">⌊</mo><mfrac><mn>99</mn><mn>330</mn></mfrac><mo fence=\"true\">⌋</mo></mrow><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">|A_1\\cap A_2\\cap A_3|=\\left\\lfloor\\frac{300}{330}\\right\\rfloor-\\left\\lfloor\\frac{99}{330}\\right\\rfloor=0</annotation></semantics></math></span>.<br><br>למעשה אנו מחפשים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mrow class=\"ovl\"><msub><mi>A</mi><mn>1</mn></msub></mrow><mo>∩</mo><mrow class=\"ovl\"><msub><mi>A</mi><mn>2</mn></msub></mrow><mo>∩</mo><mrow class=\"ovl\"><msub><mi>A</mi><mn>3</mn></msub></mrow><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|\\overline{A_1}\\cap\\overline{A_2}\\cap\\overline{A_3}|</annotation></semantics></math></span>, לכן:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mrow class=\"ovl\"><msub><mi>A</mi><mn>1</mn></msub></mrow><mo>∩</mo><mrow class=\"ovl\"><msub><mi>A</mi><mn>2</mn></msub></mrow><mo>∩</mo><mrow class=\"ovl\"><msub><mi>A</mi><mn>3</mn></msub></mrow><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>2</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>3</mn></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|\\overline{A_1}\\cap\\overline{A_2}\\cap\\overline{A_3}|=|U|-|A_1|-|A_2|-|A_3|+|A_1\\cap A_2|+|A_1\\cap A_3|+|A_2\\cap A_3|-|A_1\\cap A_2\\cap A_3|</annotation></semantics></math></span><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo>=</mo><mn>201</mn><mo>−</mo><mn>18</mn><mo>−</mo><mn>34</mn><mo>−</mo><mn>41</mn><mo>+</mo><mn>7</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>122</mn></mrow><annotation encoding=\"application/x-tex\">=201-18-34-41+7+4+3-0=122</annotation></semantics></math></span>",
   "pointsTotal": 9,
   "pitfallsHtml": [
    "לספור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>300</mn><mi mathvariant=\"normal\">/</mi><mn>11</mn><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor 300/11\\rfloor</annotation></semantics></math></span> בלי להחסיר את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>99</mn><mi mathvariant=\"normal\">/</mi><mn>11</mn><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor 99/11\\rfloor</annotation></semantics></math></span> (המספרים מתחילים ב-100).",
    "להשתמש במכפלה במקום בכפולה המשותפת הקטנה ביותר: ל-6 ול-5 היא 30."
   ]
  },
  {
   "num": 2,
   "part": "ב",
   "kind": "computation",
   "topic": "recurrences",
   "question": "(8 נק') נתונה נוסחת הנסיגה: $a_n=3a_{n-1}-2a_{n-2}+2^n,\\ a_0=1,\\ a_1=3$. מצאו נוסחה מפורשת של $a_n$.",
   "solution": "הפתרון הרשמי עם תיקון שגיאה בתשובה הסופית: בפתרון המקורי מודפסת התשובה הסופית $a_n=3-2^n+2n\\cdot2^n$, אך היא אינה מקיימת את $a_0=1$ (היא נותנת $a_0=2$). תוקן רק הביטוי הסופי, ל-$a_n=3-2\\cdot2^n+2n\\cdot2^n$, בהתאם לערכים $c_1=3,\\ c_2=-2$ שמופיעים בפתרון עצמו. שאר הדרך כפי שבפתרון הרשמי.\n\n$a_n=a_n^h+a_n^p$\n\n$x^2=3x-2,\\quad x_1=2,\\ x_2=1\\Rightarrow a_n^h=c_1+c_2\\cdot2^n$\n\n$a_n^p=A\\cdot n\\cdot2^n$\n\n$A\\cdot n\\cdot2^n=3A\\cdot(n-1)\\cdot2^{n-1}-2A\\cdot(n-2)\\cdot2^{n-2}+2^n$\n\n$A\\cdot n\\cdot4=3A\\cdot(n-1)\\cdot2-2A\\cdot(n-2)+4$\n\n$4An=6An-6A-2An+4A+4$\n\n$0=-2A+4,\\quad A=2,\\quad a_n^p=2n\\cdot2^n$\n\n$a_n=c_1+c_2\\cdot2^n+2n\\cdot2^n$\n\n$a_0=c_1+c_2=1$\n\n$a_1=c_1+c_2\\cdot2+4=3$\n\n$c_1+c_2=1,\\quad c_1+2c_2=-1$\n\n$c_2=-2,\\quad c_1=3$\n\nתשובה (מתוקנת): $a_n=3-2\\cdot2^n+2n\\cdot2^n$",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "פתרון הומוגני: שורשי $x^2=3x-2$ הם $2,1$ ו-$a_n^h=c_1+c_2\\cdot2^n$",
     "points": 2,
     "html": "פתרון הומוגני: שורשי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x^2=3x-2</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mi>h</mi></msubsup><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^h=c_1+c_2\\cdot2^n</annotation></semantics></math></span>"
    },
    {
     "text": "ניחוש פתרון פרטי $A\\cdot n\\cdot2^n$ והצבה",
     "points": 2,
     "html": "ניחוש פתרון פרטי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot n\\cdot2^n</annotation></semantics></math></span> והצבה"
    },
    {
     "text": "מציאת $A=2$",
     "points": 2,
     "html": "מציאת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">A=2</annotation></semantics></math></span>"
    },
    {
     "text": "מציאת $c_1=3,\\ c_2=-2$ מהתנאים ההתחלתיים ורישום הנוסחה הסופית",
     "points": 2,
     "html": "מציאת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">c_1=3,\\ c_2=-2</annotation></semantics></math></span> מהתנאים ההתחלתיים ורישום הנוסחה הסופית"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לנחש פתרון פרטי $A\\cdot2^n$ כשהמספר 2 הוא כבר שורש אופייני: צריך להכפיל ב-$n$.",
    "לא לבדוק את התשובה הסופית מול $a_0=1$ ו-$a_1=3$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מדוע הפתרון הפרטי הוא $A\\cdot n\\cdot2^n$ ולא $A\\cdot2^n$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "כי 2 הוא שורש של המשוואה האופיינית",
       "html": "כי 2 הוא שורש של המשוואה האופיינית"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כי המעריך הוא $n$",
       "html": "כי המעריך הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "כי $a_0=1$",
       "html": "כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "כי 1 הוא שורש",
       "html": "כי 1 הוא שורש"
      }
     ],
     "correctId": "a",
     "explain": "אגף ימין $2^n$ כבר פותר את ההומוגנית, ולכן מכפילים ב-$n$.",
     "promptHtml": "מדוע הפתרון הפרטי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot n\\cdot2^n</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot2^n</annotation></semantics></math></span>?",
     "explainHtml": "אגף ימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span> כבר פותר את ההומוגנית, ולכן מכפילים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $A$ בפתרון הפרטי?",
     "answer": 2,
     "tol": 0,
     "explain": "$0=-2A+4$, ולכן $A=2$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בפתרון הפרטי?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mo>−</mo><mn>2</mn><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=-2A+4</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">A=2</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $c_2$?",
     "answer": -2,
     "tol": 0,
     "explain": "$c_1+c_2=1$ ו-$c_1+2c_2=-1$ נותנות $c_2=-2$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">c_2</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">c_1+c_2=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">c_1+2c_2=-1</annotation></semantics></math></span> נותנות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">c_2=-2</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "לפי הנוסחה הסופית $3-2\\cdot2^n+2n\\cdot2^n$, מהו $a_5$?",
     "answer": 259,
     "tol": 0,
     "explain": "$3-64+320=259$.",
     "promptHtml": "לפי הנוסחה הסופית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3-2\\cdot2^n+2n\\cdot2^n</annotation></semantics></math></span>, מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_5</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>−</mo><mn>64</mn><mo>+</mo><mn>320</mn><mo>=</mo><mn>259</mn></mrow><annotation encoding=\"application/x-tex\">3-64+320=259</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q2b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "נוסחאות נסיגה",
   "questionHtml": "(8 נק') נתונה נוסחת הנסיגה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><msup><mn>2</mn><mi>n</mi></msup><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}+2^n,\\ a_0=1,\\ a_1=3</annotation></semantics></math></span>. מצאו נוסחה מפורשת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">a_n</annotation></semantics></math></span>.",
   "solutionHtml": "הפתרון הרשמי עם תיקון שגיאה בתשובה הסופית: בפתרון המקורי מודפסת התשובה הסופית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3-2^n+2n\\cdot2^n</annotation></semantics></math></span>, אך היא אינה מקיימת את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span> (היא נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_0=2</annotation></semantics></math></span>). תוקן רק הביטוי הסופי, ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3-2\\cdot2^n+2n\\cdot2^n</annotation></semantics></math></span>, בהתאם לערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">c_1=3,\\ c_2=-2</annotation></semantics></math></span> שמופיעים בפתרון עצמו. שאר הדרך כפי שבפתרון הרשמי.<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>a</mi><mi>n</mi><mi>h</mi></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>n</mi><mi>p</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n=a_n^h+a_n^p</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mo separator=\"true\">,</mo><mspace width=\"1em\"/><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>⇒</mo><msubsup><mi>a</mi><mi>n</mi><mi>h</mi></msubsup><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">x^2=3x-2,\\quad x_1=2,\\ x_2=1\\Rightarrow a_n^h=c_1+c_2\\cdot2^n</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mi>p</mi></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^p=A\\cdot n\\cdot2^n</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>=</mo><mn>3</mn><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>2</mn><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot n\\cdot2^n=3A\\cdot(n-1)\\cdot2^{n-1}-2A\\cdot(n-2)\\cdot2^{n-2}+2^n</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>n</mi><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>3</mn><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><mn>2</mn><mo>−</mo><mn>2</mn><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">A\\cdot n\\cdot4=3A\\cdot(n-1)\\cdot2-2A\\cdot(n-2)+4</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mi>n</mi><mo>=</mo><mn>6</mn><mi>A</mi><mi>n</mi><mo>−</mo><mn>6</mn><mi>A</mi><mo>−</mo><mn>2</mn><mi>A</mi><mi>n</mi><mo>+</mo><mn>4</mn><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4An=6An-6A-2An+4A+4</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mo>−</mo><mn>2</mn><mi>A</mi><mo>+</mo><mn>4</mn><mo separator=\"true\">,</mo><mspace width=\"1em\"/><mi>A</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mspace width=\"1em\"/><msubsup><mi>a</mi><mi>n</mi><mi>p</mi></msubsup><mo>=</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">0=-2A+4,\\quad A=2,\\quad a_n^p=2n\\cdot2^n</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=c_1+c_2\\cdot2^n+2n\\cdot2^n</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=c_1+c_2=1</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><mn>2</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_1=c_1+c_2\\cdot2+4=3</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mspace width=\"1em\"/><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">c_1+c_2=1,\\quad c_1+2c_2=-1</annotation></semantics></math></span><br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo separator=\"true\">,</mo><mspace width=\"1em\"/><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">c_2=-2,\\quad c_1=3</annotation></semantics></math></span><br><br>תשובה (מתוקנת): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3-2\\cdot2^n+2n\\cdot2^n</annotation></semantics></math></span>",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לנחש פתרון פרטי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot2^n</annotation></semantics></math></span> כשהמספר 2 הוא כבר שורש אופייני: צריך להכפיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
    "לא לבדוק את התשובה הסופית מול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_1=3</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 2,
   "part": "ג",
   "kind": "computation",
   "topic": "divisibility_primes",
   "question": "(8 נק') חשבו את מספר המחלקים הזוגיים של $m$, כאשר\n$$m=\\sum_{k=0}^{n}\\left(\\binom nk\\cdot4^{n+k}\\cdot10^{n-k}\\right)\\cdot\\sum_{k=0}^{n}\\left(\\binom nk\\cdot2^{n-k}\\cdot7^{n+k}\\right)$$",
   "solution": "נוציא את הגורמים שאינם תלויים ב-$k$ ונשתמש בבינום של ניוטון:\n\n$$m=\\left(4^n\\cdot\\sum_{k=0}^{n}\\binom nk\\cdot4^k\\cdot10^{n-k}\\right)\\cdot\\left(7^n\\cdot\\sum_{k=0}^{n}\\binom nk\\cdot2^{n-k}\\cdot7^k\\right)=28^n\\cdot14^n\\cdot9^n=4^n\\cdot7^n\\cdot2^n\\cdot7^n\\cdot3^{2n}=2^{3n}\\cdot7^{2n}\\cdot3^{2n}$$\n\nמחלק זוגי הוא מהצורה $d=2^a\\cdot7^b\\cdot5^c,\\ a>0,\\ b,c\\ge0$ (כך מודפס בפתרון המקורי; הראשוני השלישי ב-$m$ הוא 3, והספירה שלהלן היא עבורו).\n\nתשובה: $3n\\cdot(2n+1)^2$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "שימוש בבינום של ניוטון לסכומים: $14^n$ ו-$9^n$",
     "points": 3,
     "html": "שימוש בבינום של ניוטון לסכומים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>14</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">14^n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>9</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">9^n</annotation></semantics></math></span>"
    },
    {
     "text": "פירוק $m=2^{3n}\\cdot3^{2n}\\cdot7^{2n}$",
     "points": 2,
     "html": "פירוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><msup><mn>2</mn><mrow><mn>3</mn><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">m=2^{3n}\\cdot3^{2n}\\cdot7^{2n}</annotation></semantics></math></span>"
    },
    {
     "text": "ספירת מחלקים זוגיים ($a>0$)",
     "points": 3,
     "html": "ספירת מחלקים זוגיים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a&gt;0</annotation></semantics></math></span>)"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור את כל המחלקים במקום רק את הזוגיים: החזקה של 2 חייבת להיות חיובית.",
    "לטעות בהוצאת $4^n$ ו-$7^n$ מחוץ לסכומים."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "כמה שווה $\\sum_{k=0}^{n}\\binom nk 4^k 10^{n-k}$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$14^n$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>14</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">14^n</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$40^n$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>40</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">40^n</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$6^n$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>6</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">6^n</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$4^n\\cdot10^n$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>10</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">4^n\\cdot10^n</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "בינום ניוטון: $(4+10)^n$.",
     "promptHtml": "כמה שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></msubsup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mn>4</mn><mi>k</mi></msup><msup><mn>10</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\sum_{k=0}^{n}\\binom nk 4^k 10^{n-k}</annotation></semantics></math></span>?",
     "explainHtml": "בינום ניוטון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>4</mn><mo>+</mo><mn>10</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">(4+10)^n</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $m$ עבור $n=1$?",
     "answer": 3528,
     "tol": 0,
     "explain": "$m=2^3\\cdot3^2\\cdot7^2=8\\cdot9\\cdot49=3528$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>⋅</mo><msup><mn>3</mn><mn>2</mn></msup><mo>⋅</mo><msup><mn>7</mn><mn>2</mn></msup><mo>=</mo><mn>8</mn><mo>⋅</mo><mn>9</mn><mo>⋅</mo><mn>49</mn><mo>=</mo><mn>3528</mn></mrow><annotation encoding=\"application/x-tex\">m=2^3\\cdot3^2\\cdot7^2=8\\cdot9\\cdot49=3528</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "במחלק זוגי של $m$ עבור $n=2$ (שם $2^6$ מחלק את $m$), כמה ערכים אפשריים יש לחזקת 2?",
     "answer": 6,
     "tol": 0,
     "explain": "$a=1,\\dots,6$.",
     "promptHtml": "במחלק זוגי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=2</annotation></semantics></math></span> (שם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^6</annotation></semantics></math></span> מחלק את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span>), כמה ערכים אפשריים יש לחזקת 2?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a=1,\\dots,6</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "כמה מחלקים זוגיים יש ל-$m$ עבור $n=2$?",
     "answer": 150,
     "tol": 0,
     "explain": "$3n(2n+1)^2=6\\cdot25=150$.",
     "promptHtml": "כמה מחלקים זוגיים יש ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=2</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>=</mo><mn>6</mn><mo>⋅</mo><mn>25</mn><mo>=</mo><mn>150</mn></mrow><annotation encoding=\"application/x-tex\">3n(2n+1)^2=6\\cdot25=150</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q2c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מחלקים וראשוניים",
   "questionHtml": "(8 נק') חשבו את מספר המחלקים הזוגיים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span>, כאשר<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>m</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><msup><mn>4</mn><mrow><mi>n</mi><mo>+</mo><mi>k</mi></mrow></msup><mo>⋅</mo><msup><mn>10</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mi>n</mi><mo>+</mo><mi>k</mi></mrow></msup><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">m=\\sum_{k=0}^{n}\\left(\\binom nk\\cdot4^{n+k}\\cdot10^{n-k}\\right)\\cdot\\sum_{k=0}^{n}\\left(\\binom nk\\cdot2^{n-k}\\cdot7^{n+k}\\right)</annotation></semantics></math></span>",
   "solutionHtml": "נוציא את הגורמים שאינם תלויים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> ונשתמש בבינום של ניוטון:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>m</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><msup><mn>4</mn><mi>n</mi></msup><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><msup><mn>4</mn><mi>k</mi></msup><mo>⋅</mo><msup><mn>10</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mi>n</mi></msup><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mi>k</mi></msup><mo fence=\"true\">)</mo></mrow><mo>=</mo><msup><mn>28</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>14</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup><mo>=</mo><msup><mn>4</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>n</mi></msup><mo>⋅</mo><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mn>3</mn><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">m=\\left(4^n\\cdot\\sum_{k=0}^{n}\\binom nk\\cdot4^k\\cdot10^{n-k}\\right)\\cdot\\left(7^n\\cdot\\sum_{k=0}^{n}\\binom nk\\cdot2^{n-k}\\cdot7^k\\right)=28^n\\cdot14^n\\cdot9^n=4^n\\cdot7^n\\cdot2^n\\cdot7^n\\cdot3^{2n}=2^{3n}\\cdot7^{2n}\\cdot3^{2n}</annotation></semantics></math></span><br><br>מחלק זוגי הוא מהצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><msup><mn>2</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><msup><mn>5</mn><mi>c</mi></msup><mo separator=\"true\">,</mo><mtext> </mtext><mi>a</mi><mo>&gt;</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">d=2^a\\cdot7^b\\cdot5^c,\\ a&gt;0,\\ b,c\\ge0</annotation></semantics></math></span> (כך מודפס בפתרון המקורי; הראשוני השלישי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> הוא 3, והספירה שלהלן היא עבורו).<br><br>תשובה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">3n\\cdot(2n+1)^2</annotation></semantics></math></span>",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לספור את כל המחלקים במקום רק את הזוגיים: החזקה של 2 חייבת להיות חיובית.",
    "לטעות בהוצאת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">4^n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>7</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">7^n</annotation></semantics></math></span> מחוץ לסכומים."
   ]
  },
  {
   "num": 3,
   "part": "א",
   "kind": "proof",
   "topic": "euler_phi",
   "question": "(8 נק') הוכיחו $12\\mid\\varphi(21n)$, כאשר $\\varphi(n)$ פונקציית אוילר ו-$n>2$.",
   "solution": "נכתוב $n=3^a\\cdot7^b\\cdot m$, כאשר $\\gcd(3,m)=\\gcd(7,m)=1$ ו-$a,b\\ge0$.\n\n$21n=21\\cdot3^a\\cdot7^b\\cdot m=3^{a+1}\\cdot7^{b+1}\\cdot m$\n\n$$\\varphi(21n)=\\varphi\\left(3^{a+1}\\cdot7^{b+1}\\cdot m\\right)=\\varphi\\left(3^{a+1}\\right)\\cdot\\varphi\\left(7^{b+1}\\right)\\cdot\\varphi(m)$$\n$$=\\left(3^{a+1}-3^a\\right)\\cdot\\left(7^{b+1}-7^b\\right)\\cdot\\varphi(m)=3^a\\cdot7^b\\cdot2\\cdot6\\cdot\\varphi(m)=12\\cdot3^a\\cdot7^b\\cdot\\varphi(m)$$\n\nלכן $12\\mid\\varphi(21n)$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "כתיבת $n=3^a\\cdot7^b\\cdot m$ עם $m$ זר ל-3 ול-7",
     "points": 2,
     "html": "כתיבת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n=3^a\\cdot7^b\\cdot m</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> זר ל-3 ול-7"
    },
    {
     "text": "פירוק $\\varphi(21n)$ לפי כפליות",
     "points": 2,
     "html": "פירוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)</annotation></semantics></math></span> לפי כפליות"
    },
    {
     "text": "חישוב $\\varphi$ של חזקות הראשוניים",
     "points": 2,
     "html": "חישוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi></mrow><annotation encoding=\"application/x-tex\">\\varphi</annotation></semantics></math></span> של חזקות הראשוניים"
    },
    {
     "text": "הוצאת הגורם 12 והמסקנה",
     "points": 2,
     "html": "הוצאת הגורם 12 והמסקנה"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להניח ש-$\\gcd(n,21)=1$: ייתכן ש-3 או 7 מחלקים את $n$ (לכן $a,b\\ge0$).",
    "לטעות בנוסחה $\\varphi(p^k)=p^k-p^{k-1}$ ולכתוב $p^k-1$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "איזו הצגה של $n$ מתאימה להוכחה?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$n=3^a7^bm$ עם $m$ זר ל-3 ול-7",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><msup><mn>7</mn><mi>b</mi></msup><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n=3^a7^bm</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> זר ל-3 ול-7"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$n=21k$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>21</mn><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">n=21k</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$n$ ראשוני",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ראשוני"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$n=2^a$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mi>a</mi></msup></mrow><annotation encoding=\"application/x-tex\">n=2^a</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "כך $21n=3^{a+1}7^{b+1}m$ וניתן לחשב $\\varphi$ בנפרד לכל גורם.",
     "promptHtml": "איזו הצגה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מתאימה להוכחה?",
     "explainHtml": "כך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mi>n</mi><mo>=</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">21n=3^{a+1}7^{b+1}m</annotation></semantics></math></span> וניתן לחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi></mrow><annotation encoding=\"application/x-tex\">\\varphi</annotation></semantics></math></span> בנפרד לכל גורם."
    },
    {
     "type": "numeric",
     "prompt": "מהו $\\varphi(21n)$ עבור $n=3$?",
     "answer": 36,
     "tol": 0,
     "explain": "$a=1,\\ b=0,\\ m=1$: $12\\cdot3=36$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=3</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>b</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>m</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a=1,\\ b=0,\\ m=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">12\\cdot3=36</annotation></semantics></math></span>."
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות ההוכחה.",
     "lines": [
      "נכתוב $n=3^a\\cdot7^b\\cdot m$, כאשר $\\gcd(3,m)=\\gcd(7,m)=1$ ו-$a,b\\ge0$.",
      "$21n=3^{a+1}\\cdot7^{b+1}\\cdot m$.",
      "$\\varphi(21n)=\\varphi\\left(3^{a+1}\\right)\\cdot\\varphi\\left(7^{b+1}\\right)\\cdot\\varphi(m)$.",
      "$\\varphi(21n)=\\left(3^{a+1}-3^a\\right)\\cdot\\left(7^{b+1}-7^b\\right)\\cdot\\varphi(m)$.",
      "$\\varphi(21n)=3^a\\cdot7^b\\cdot2\\cdot6\\cdot\\varphi(m)=12\\cdot3^a\\cdot7^b\\cdot\\varphi(m)$.",
      "לכן $12\\mid\\varphi(21n)$."
     ],
     "explain": "הצגה, 21n, כפליות, ערכי φ, הוצאת 12, מסקנה.",
     "promptHtml": "סדרו את שורות ההוכחה.",
     "explainHtml": "הצגה, 21n, כפליות, ערכי φ, הוצאת 12, מסקנה.",
     "linesHtml": [
      "נכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n=3^a\\cdot7^b\\cdot m</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\gcd(3,m)=\\gcd(7,m)=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a,b\\ge0</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mi>n</mi><mo>=</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">21n=3^{a+1}\\cdot7^{b+1}\\cdot m</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=\\varphi\\left(3^{a+1}\\right)\\cdot\\varphi\\left(7^{b+1}\\right)\\cdot\\varphi(m)</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>3</mn><mi>a</mi></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>7</mn><mi>b</mi></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=\\left(3^{a+1}-3^a\\right)\\cdot\\left(7^{b+1}-7^b\\right)\\cdot\\varphi(m)</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>12</mn><mo>⋅</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=3^a\\cdot7^b\\cdot2\\cdot6\\cdot\\varphi(m)=12\\cdot3^a\\cdot7^b\\cdot\\varphi(m)</annotation></semantics></math></span>.",
      "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>∣</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">12\\mid\\varphi(21n)</annotation></semantics></math></span>."
     ]
    },
    {
     "type": "findbug",
     "prompt": "באיזו שורה יש טעות?",
     "lines": [
      "נכתוב $n=3^a\\cdot7^b\\cdot m$, כאשר $\\gcd(3,m)=\\gcd(7,m)=1$ ו-$a,b\\ge0$.",
      "$21n=3^{a+1}\\cdot7^{b+1}\\cdot m$.",
      "$\\varphi(21n)=\\varphi\\left(3^{a+1}\\right)\\cdot\\varphi\\left(7^{b+1}\\right)\\cdot\\varphi(m)$.",
      "$\\varphi(21n)=\\left(3^{a+1}-3^a\\right)\\cdot\\left(7^{b+1}-7^b\\right)\\cdot\\varphi(m)$.",
      "$\\varphi(21n)=3^a\\cdot7^b\\cdot2\\cdot4\\cdot\\varphi(m)=8\\cdot3^a\\cdot7^b\\cdot\\varphi(m)$.",
      "לכן $12\\mid\\varphi(21n)$."
     ],
     "bugIndex": 4,
     "explain": "$7^{b+1}-7^b=6\\cdot7^b$, ולכן הגורם הוא $2\\cdot6=12$ ולא $2\\cdot4=8$.",
     "promptHtml": "באיזו שורה יש טעות?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>7</mn><mi>b</mi></msup><mo>=</mo><mn>6</mn><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup></mrow><annotation encoding=\"application/x-tex\">7^{b+1}-7^b=6\\cdot7^b</annotation></semantics></math></span>, ולכן הגורם הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>6</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot6=12</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot4=8</annotation></semantics></math></span>.",
     "linesHtml": [
      "נכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n=3^a\\cdot7^b\\cdot m</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\gcd(3,m)=\\gcd(7,m)=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a,b\\ge0</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mi>n</mi><mo>=</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">21n=3^{a+1}\\cdot7^{b+1}\\cdot m</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=\\varphi\\left(3^{a+1}\\right)\\cdot\\varphi\\left(7^{b+1}\\right)\\cdot\\varphi(m)</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>3</mn><mi>a</mi></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>7</mn><mi>b</mi></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=\\left(3^{a+1}-3^a\\right)\\cdot\\left(7^{b+1}-7^b\\right)\\cdot\\varphi(m)</annotation></semantics></math></span>.",
      "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>8</mn><mo>⋅</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=3^a\\cdot7^b\\cdot2\\cdot4\\cdot\\varphi(m)=8\\cdot3^a\\cdot7^b\\cdot\\varphi(m)</annotation></semantics></math></span>.",
      "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>∣</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">12\\mid\\varphi(21n)</annotation></semantics></math></span>."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q3a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "פונקציית אוילר",
   "questionHtml": "(8 נק') הוכיחו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>∣</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">12\\mid\\varphi(21n)</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(n)</annotation></semantics></math></span> פונקציית אוילר ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;2</annotation></semantics></math></span>.",
   "solutionHtml": "נכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n=3^a\\cdot7^b\\cdot m</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\gcd(3,m)=\\gcd(7,m)=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a,b\\ge0</annotation></semantics></math></span>.<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mi>n</mi><mo>=</mo><mn>21</mn><mo>⋅</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>m</mi><mo>=</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">21n=21\\cdot3^a\\cdot7^b\\cdot m=3^{a+1}\\cdot7^{b+1}\\cdot m</annotation></semantics></math></span><br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mi>m</mi><mo fence=\"true\">)</mo></mrow><mo>=</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\varphi(21n)=\\varphi\\left(3^{a+1}\\cdot7^{b+1}\\cdot m\\right)=\\varphi\\left(3^{a+1}\\right)\\cdot\\varphi\\left(7^{b+1}\\right)\\cdot\\varphi(m)</annotation></semantics></math></span><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo>=</mo><mrow><mo fence=\"true\">(</mo><msup><mn>3</mn><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>3</mn><mi>a</mi></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mrow><mo fence=\"true\">(</mo><msup><mn>7</mn><mrow><mi>b</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><msup><mn>7</mn><mi>b</mi></msup><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>12</mn><mo>⋅</mo><msup><mn>3</mn><mi>a</mi></msup><mo>⋅</mo><msup><mn>7</mn><mi>b</mi></msup><mo>⋅</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">=\\left(3^{a+1}-3^a\\right)\\cdot\\left(7^{b+1}-7^b\\right)\\cdot\\varphi(m)=3^a\\cdot7^b\\cdot2\\cdot6\\cdot\\varphi(m)=12\\cdot3^a\\cdot7^b\\cdot\\varphi(m)</annotation></semantics></math></span><br><br>לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>∣</mo><mi>φ</mi><mo stretchy=\"false\">(</mo><mn>21</mn><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">12\\mid\\varphi(21n)</annotation></semantics></math></span>.",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "להניח ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>gcd</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mn>21</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\gcd(n,21)=1</annotation></semantics></math></span>: ייתכן ש-3 או 7 מחלקים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> (לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a,b\\ge0</annotation></semantics></math></span>).",
    "לטעות בנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>φ</mi><mo stretchy=\"false\">(</mo><msup><mi>p</mi><mi>k</mi></msup><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mi>p</mi><mi>k</mi></msup><mo>−</mo><msup><mi>p</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\varphi(p^k)=p^k-p^{k-1}</annotation></semantics></math></span> ולכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>p</mi><mi>k</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">p^k-1</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 3,
   "part": "ב",
   "kind": "computation",
   "topic": "selections_repetition",
   "question": "(9 נק') תהי הקבוצה $A=\\{a,b,c,d\\}$. כמה מילים בנות 25 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: אות $a$ מופיעה לפחות 4 פעמים, אות $b$ מופיעה לפחות 7 פעמים, אות $c$ מופיעה לפחות פעמיים, אות $d$ מופיעה לפחות 3 פעמים?",
   "solution": "נסמן: $x_1$ מספר ההופעות של האות $a$, $x_2$ של $b$, $x_3$ של $c$, $x_4$ של $d$.\n\n$$\\Omega=\\{(x_1,x_2,x_3,x_4):\\ x_1+x_2+x_3+x_4=25,\\ 4\\le x_1,\\ 7\\le x_2,\\ 2\\le x_3,\\ 3\\le x_4\\}$$\n\n$$|\\Omega|=D(4,\\,25-4-7-2-3)=D(4,9)=C(12,3)=220$$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 9,
   "rubric": [
    {
     "text": "סימון $x_1,\\dots,x_4$ והצגת הבעיה כמשוואה עם חסמים תחתונים",
     "points": 2,
     "html": "סימון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>x</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_1,\\dots,x_4</annotation></semantics></math></span> והצגת הבעיה כמשוואה עם חסמים תחתונים"
    },
    {
     "text": "הורדת המינימום מכל משתנה: $25-4-7-2-3=9$",
     "points": 3,
     "html": "הורדת המינימום מכל משתנה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mo>−</mo><mn>4</mn><mo>−</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">25-4-7-2-3=9</annotation></semantics></math></span>"
    },
    {
     "text": "שימוש ב-$D(4,9)=C(12,3)$",
     "points": 2,
     "html": "שימוש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D(4,9)=C(12,3)</annotation></semantics></math></span>"
    },
    {
     "text": "התוצאה $220$",
     "points": 2,
     "html": "התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>220</mn></mrow><annotation encoding=\"application/x-tex\">220</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור סדרים שונים של אותן אותיות: כאן אין חשיבות לסדר.",
    "לשכוח את החסמים התחתונים ולכתוב $D(4,25)$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה אותיות פנויות נשארות אחרי שמניחים את המינימום הנדרש מכל אות?",
     "answer": 9,
     "tol": 0,
     "explain": "$25-4-7-2-3=9$.",
     "promptHtml": "כמה אותיות פנויות נשארות אחרי שמניחים את המינימום הנדרש מכל אות?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mo>−</mo><mn>4</mn><mo>−</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">25-4-7-2-3=9</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "איזה ביטוי מייצג את מספר הפתרונות אחרי ההזזה?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$C(12,3)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C(12,3)</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$C(9,4)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C(9,4)</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$C(25,3)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>25</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C(25,3)</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$C(13,4)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C(13,4)</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "$D(4,9)=C(9+4-1,\\,4-1)=C(12,3)$.",
     "promptHtml": "איזה ביטוי מייצג את מספר הפתרונות אחרי ההזזה?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>4</mn><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>4</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D(4,9)=C(9+4-1,\\,4-1)=C(12,3)</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו מספר המילים?",
     "answer": 220,
     "tol": 0,
     "explain": "$C(12,3)=220$.",
     "promptHtml": "מהו מספר המילים?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>220</mn></mrow><annotation encoding=\"application/x-tex\">C(12,3)=220</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q3b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "בחירה עם חזרות",
   "questionHtml": "(9 נק') תהי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{a,b,c,d\\}</annotation></semantics></math></span>. כמה מילים בנות 25 אותיות, בלי חשיבות לסדר, ניתן ליצור מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> כך שבכל מילה: אות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> מופיעה לפחות 4 פעמים, אות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> מופיעה לפחות 7 פעמים, אות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> מופיעה לפחות פעמיים, אות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> מופיעה לפחות 3 פעמים?",
   "solutionHtml": "נסמן: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_1</annotation></semantics></math></span> מספר ההופעות של האות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_2</annotation></semantics></math></span> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_3</annotation></semantics></math></span> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_4</annotation></semantics></math></span> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>.<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>x</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>x</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"false\">)</mo><mo>:</mo><mtext> </mtext><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>25</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>4</mn><mo>≤</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mtext> </mtext><mn>7</mn><mo>≤</mo><msub><mi>x</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><mtext> </mtext><mn>2</mn><mo>≤</mo><msub><mi>x</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><mtext> </mtext><mn>3</mn><mo>≤</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\Omega=\\{(x_1,x_2,x_3,x_4):\\ x_1+x_2+x_3+x_4=25,\\ 4\\le x_1,\\ 7\\le x_2,\\ 2\\le x_3,\\ 3\\le x_4\\}</annotation></semantics></math></span><br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi mathvariant=\"normal\">Ω</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>25</mn><mo>−</mo><mn>4</mn><mo>−</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>−</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>220</mn></mrow><annotation encoding=\"application/x-tex\">|\\Omega|=D(4,\\,25-4-7-2-3)=D(4,9)=C(12,3)=220</annotation></semantics></math></span>",
   "pointsTotal": 9,
   "pitfallsHtml": [
    "לספור סדרים שונים של אותן אותיות: כאן אין חשיבות לסדר.",
    "לשכוח את החסמים התחתונים ולכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>25</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D(4,25)</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 3,
   "part": "ג",
   "kind": "computation",
   "topic": "euler_hamilton",
   "question": "(8 נק')\n\n**ג1.** (4 נק') האם קיים גרף $P_n,\\ n>1$ כך שמשלים שלו יהיה גרף Euler? נמקו.\n\n**ג2.** (4 נק') לאילו ערכי $n$ המשלים של הגרף $P_n,\\ n>1$ יהיה גרף המילטון? נמקו.",
   "solution": "הבהרה: \"Euler\" כאן פירושו מעגל אוילר.\n\nבפתרון $P_n=(V,E)$ הוא מסלול על $n$ צמתים: $V=\\{v_1,\\dots,v_n\\}$, $E=\\{(v_1,v_2),(v_2,v_3),\\dots,(v_{n-1},v_n)\\}$.\n\n**ג1.**\n- עבור $n=2,3$: $\\overline{P_n}$ אינו קשיר, ולכן אינו Euler.\n- עבור $n$ זוגי, $n>3$: $\\deg_{\\overline{P_n}}(v_2)=n-3$ אי-זוגי, ולכן אינו Euler.\n- עבור $n$ אי-זוגי, $n>3$: $\\deg_{\\overline{P_n}}(v_1)=n-2$ אי-זוגי, ולכן אינו Euler.\n\nתשובה: $\\overline{P_n}$ אינו Euler לכל $n=2,3,\\dots$ (לא קיים $n$ כזה).\n\n**ג2.**\n- עבור $n=2,3$: $\\overline{P_n}$ אינו קשיר, ולכן אינו המילטון.\n- עבור $n=4$: $\\overline{P_4}=P_4$, ולכן אינו המילטון.\n- עבור $n=5$: $\\overline{P_5}$ הוא גרף \"בית\", ולכן הוא המילטון.\n- עבור $n>5$: $\\deg_{\\overline{P_n}}(v_1)=\\deg_{\\overline{P_n}}(v_n)=n-2\\ge\\frac n2$ ו-$\\deg_{\\overline{P_n}}(v_j)=n-3\\ge\\frac n2$ עבור $j=2,3,\\dots,n-1$, ולכן $\\overline{P_n}$ המילטון (משפט Dirac).\n\nתשובה: $\\overline{P_n}$ המילטון עבור $n=5,6,\\dots$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "ג1: $n=2,3$ המשלים לא קשיר ולכן אינו אוילר",
     "points": 1,
     "html": "ג1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=2,3</annotation></semantics></math></span> המשלים לא קשיר ולכן אינו אוילר"
    },
    {
     "text": "ג1: $n$ זוגי, $\\deg(v_2)=n-3$ אי-זוגי",
     "points": 1,
     "html": "ג1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> זוגי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\deg(v_2)=n-3</annotation></semantics></math></span> אי-זוגי"
    },
    {
     "text": "ג1: $n$ אי-זוגי, $\\deg(v_1)=n-2$ אי-זוגי; מסקנה: אין $n$ כזה",
     "points": 2,
     "html": "ג1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אי-זוגי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\deg(v_1)=n-2</annotation></semantics></math></span> אי-זוגי; מסקנה: אין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כזה"
    },
    {
     "text": "ג2: $n=2,3,4$ אינו המילטון",
     "points": 1,
     "html": "ג2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=2,3,4</annotation></semantics></math></span> אינו המילטון"
    },
    {
     "text": "ג2: $n=5$ גרף ה\"בית\" הוא המילטון",
     "points": 1,
     "html": "ג2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n=5</annotation></semantics></math></span> גרף ה\"בית\" הוא המילטון"
    },
    {
     "text": "ג2: $n>5$ לפי משפט Dirac",
     "points": 2,
     "html": "ג2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;5</annotation></semantics></math></span> לפי משפט Dirac"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח את המקרים הקטנים $n=2,3$ שבהם המשלים אינו קשיר.",
    "לטעון ש-$\\overline{P_4}$ המילטון: הוא עצמו מסלול $P_4$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהי הדרגה של $v_2$ ב-$\\overline{P_6}$?",
     "answer": 3,
     "tol": 0,
     "explain": "$n-3=3$, אי-זוגית.",
     "promptHtml": "מהי הדרגה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_2</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mn>6</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_6}</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n-3=3</annotation></semantics></math></span>, אי-זוגית."
    },
    {
     "type": "numeric",
     "prompt": "מהי הדרגה של $v_1$ ב-$\\overline{P_7}$?",
     "answer": 5,
     "tol": 0,
     "explain": "$n-2=5$, אי-זוגית.",
     "promptHtml": "מהי הדרגה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mn>7</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_7}</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n-2=5</annotation></semantics></math></span>, אי-זוגית."
    },
    {
     "type": "choice",
     "prompt": "עבור אילו $n>1$ המשלים $\\overline{P_n}$ הוא גרף אוילר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "אף $n$",
       "html": "אף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כל $n$ זוגי",
       "html": "כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> זוגי"
      },
      {
       "id": "c",
       "type": "text",
       "value": "כל $n$ אי-זוגי",
       "html": "כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אי-זוגי"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$n\\ge5$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "בכל המקרים יש צומת בדרגה אי-זוגית או שהגרף אינו קשיר.",
     "promptHtml": "עבור אילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;1</annotation></semantics></math></span> המשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> הוא גרף אוילר?",
     "explainHtml": "בכל המקרים יש צומת בדרגה אי-זוגית או שהגרף אינו קשיר."
    },
    {
     "type": "choice",
     "prompt": "עבור אילו $n$ המשלים $\\overline{P_n}$ הוא המילטון?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$n\\ge5$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$n\\ge4$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge4</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$n$ זוגי בלבד",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> זוגי בלבד"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$n\\ge3$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge3</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "עבור $n=5$ זה \"בית\", ועבור $n>5$ לפי Dirac.",
     "promptHtml": "עבור אילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> המשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> הוא המילטון?",
     "explainHtml": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n=5</annotation></semantics></math></span> זה \"בית\", ועבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;5</annotation></semantics></math></span> לפי Dirac."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q3c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "גרפי אוילר והמילטון",
   "questionHtml": "(8 נק')<br><br><strong>ג1.</strong> (4 נק') האם קיים גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub><mo separator=\"true\">,</mo><mtext> </mtext><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">P_n,\\ n&gt;1</annotation></semantics></math></span> כך שמשלים שלו יהיה גרף Euler? נמקו.<br><br><strong>ג2.</strong> (4 נק') לאילו ערכי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> המשלים של הגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub><mo separator=\"true\">,</mo><mtext> </mtext><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">P_n,\\ n&gt;1</annotation></semantics></math></span> יהיה גרף המילטון? נמקו.",
   "solutionHtml": "הבהרה: \"Euler\" כאן פירושו מעגל אוילר.<br><br>בפתרון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P_n=(V,E)</annotation></semantics></math></span> הוא מסלול על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">V=\\{v_1,\\dots,v_n\\}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">E=\\{(v_1,v_2),(v_2,v_3),\\dots,(v_{n-1},v_n)\\}</annotation></semantics></math></span>.<br><br><strong>ג1.</strong><br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=2,3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> אינו קשיר, ולכן אינו Euler.<br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> זוגי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></msub><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\deg_{\\overline{P_n}}(v_2)=n-3</annotation></semantics></math></span> אי-זוגי, ולכן אינו Euler.<br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אי-זוגי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></msub><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\deg_{\\overline{P_n}}(v_1)=n-2</annotation></semantics></math></span> אי-זוגי, ולכן אינו Euler.<br><br>תשובה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> אינו Euler לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">n=2,3,\\dots</annotation></semantics></math></span> (לא קיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כזה).<br><br><strong>ג2.</strong><br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=2,3</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> אינו קשיר, ולכן אינו המילטון.<br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=4</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mn>4</mn></msub></mrow><mo>=</mo><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">\\overline{P_4}=P_4</annotation></semantics></math></span>, ולכן אינו המילטון.<br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n=5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mn>5</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_5}</annotation></semantics></math></span> הוא גרף \"בית\", ולכן הוא המילטון.<br>- עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n&gt;5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></msub><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></msub><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo>≥</mo><mfrac><mi>n</mi><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\deg_{\\overline{P_n}}(v_1)=\\deg_{\\overline{P_n}}(v_n)=n-2\\ge\\frac n2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></msub><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mi>j</mi></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo>≥</mo><mfrac><mi>n</mi><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\deg_{\\overline{P_n}}(v_j)=n-3\\ge\\frac n2</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">j=2,3,\\dots,n-1</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> המילטון (משפט Dirac).<br><br>תשובה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_n}</annotation></semantics></math></span> המילטון עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">n=5,6,\\dots</annotation></semantics></math></span>",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לשכוח את המקרים הקטנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=2,3</annotation></semantics></math></span> שבהם המשלים אינו קשיר.",
    "לטעון ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>P</mi><mn>4</mn></msub></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{P_4}</annotation></semantics></math></span> המילטון: הוא עצמו מסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 4,
   "part": "א",
   "kind": "computation",
   "topic": "euler_hamilton",
   "question": "(6 נק') מה ערכו של המסלול הארוך ביותר בגרף $K_{11}$.",
   "solution": "$K_{11}$ הוא גרף קשיר שכל דרגותיו זוגיות, ולכן $K_{11}$ הוא גרף Euler.\n\n$|E|=\\frac{11\\cdot10}{2}=55$, ולכן המסלול הארוך ביותר הוא מעגל אוילר באורך 55.\n\nהבהרה: הספירה מניחה ש\"מסלול\" הוא מסלול שאינו חוזר על קשת (trail), כמו בהגדרת הקורס; אם הכוונה למסלול פשוט (בלי חזרה על צמתים) התשובה שונה.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 6,
   "rubric": [
    {
     "text": "$K_{11}$ קשיר וכל דרגותיו זוגיות, ולכן אוילר",
     "points": 3,
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span> קשיר וכל דרגותיו זוגיות, ולכן אוילר"
    },
    {
     "text": "מספר הצלעות $\\frac{11\\cdot10}{2}=55$",
     "points": 2,
     "html": "מספר הצלעות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mn>11</mn><mo>⋅</mo><mn>10</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>55</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{11\\cdot10}{2}=55</annotation></semantics></math></span>"
    },
    {
     "text": "המסלול הארוך ביותר הוא מעגל אוילר באורך 55",
     "points": 1,
     "html": "המסלול הארוך ביותר הוא מעגל אוילר באורך 55"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור את הצמתים (11) במקום את הצלעות.",
    "לחשוב שמעגל אוילר אינו מסלול: כאן הוא המסלול הארוך ביותר."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהי הדרגה של כל צומת ב-$K_{11}$?",
     "answer": 10,
     "tol": 0,
     "explain": "כל צומת מחובר ל-10 האחרים, ו-10 זוגי.",
     "promptHtml": "מהי הדרגה של כל צומת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span>?",
     "explainHtml": "כל צומת מחובר ל-10 האחרים, ו-10 זוגי."
    },
    {
     "type": "choice",
     "prompt": "מדוע יש ב-$K_{11}$ מעגל אוילר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "הוא קשיר וכל הדרגות זוגיות",
       "html": "הוא קשיר וכל הדרגות זוגיות"
      },
      {
       "id": "b",
       "type": "text",
       "value": "יש בו 11 צמתים",
       "html": "יש בו 11 צמתים"
      },
      {
       "id": "c",
       "type": "text",
       "value": "הוא דו-צדדי",
       "html": "הוא דו-צדדי"
      },
      {
       "id": "d",
       "type": "text",
       "value": "הוא עץ",
       "html": "הוא עץ"
      }
     ],
     "correctId": "a",
     "explain": "תנאי אוילר: קשיר ודרגות זוגיות.",
     "promptHtml": "מדוע יש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span> מעגל אוילר?",
     "explainHtml": "תנאי אוילר: קשיר ודרגות זוגיות."
    },
    {
     "type": "numeric",
     "prompt": "מהו אורך המסלול הארוך ביותר ב-$K_{11}$?",
     "answer": 55,
     "tol": 0,
     "explain": "מעגל אוילר עובר בכל 55 הצלעות.",
     "promptHtml": "מהו אורך המסלול הארוך ביותר ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span>?",
     "explainHtml": "מעגל אוילר עובר בכל 55 הצלעות."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q4a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "גרפי אוילר והמילטון",
   "questionHtml": "(6 נק') מה ערכו של המסלול הארוך ביותר בגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span>.",
   "solutionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span> הוא גרף קשיר שכל דרגותיו זוגיות, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>11</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_{11}</annotation></semantics></math></span> הוא גרף Euler.<br><br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mfrac><mrow><mn>11</mn><mo>⋅</mo><mn>10</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>55</mn></mrow><annotation encoding=\"application/x-tex\">|E|=\\frac{11\\cdot10}{2}=55</annotation></semantics></math></span>, ולכן המסלול הארוך ביותר הוא מעגל אוילר באורך 55.<br><br>הבהרה: הספירה מניחה ש\"מסלול\" הוא מסלול שאינו חוזר על קשת (trail), כמו בהגדרת הקורס; אם הכוונה למסלול פשוט (בלי חזרה על צמתים) התשובה שונה.",
   "pointsTotal": 6,
   "pitfallsHtml": [
    "לספור את הצמתים (11) במקום את הצלעות.",
    "לחשוב שמעגל אוילר אינו מסלול: כאן הוא המסלול הארוך ביותר."
   ]
  },
  {
   "num": 4,
   "part": "ב",
   "kind": "computation",
   "topic": "graph_basics",
   "question": "(6 נק') האם קיים גרף בעל סדרת דרגות $3,3,4,4,4,6,6$? אם כן בנו גרף בעל סדרת דרגות הנ\"ל.",
   "solution": "הפתרון הרשמי עם תיקון בדוגמה: הדוגמה לסדרה $1,1,2,2,2$ (\"מסלול על 5 צמתים\") הוחלפה ב-$K_3\\cup K_2$, כי לצמתי מסלול על 5 צמתים דרגות $1,2,2,2,1$.\n\nנבנה בשלבים (מוחקים צומת מדרגה 6 המחובר לכל שאר הצמתים, ואז צומת מדרגה 5 המחובר לכל הצמתים שנותרו).\n\nסדרת הדרגות של $G$ (לפי $v_1,\\dots,v_7$): $3,3,4,4,4,6,6$.\n\nאחרי מחיקת $v_7$ (דרגה 6): $v_1,\\dots,v_6$ בדרגות $2,2,3,3,3,5$.\n\nאחרי מחיקת $v_6$ (דרגה 5): $v_1,\\dots,v_5$ בדרגות $1,1,2,2,2$.\n\nדוגמה: $G-\\{v_6,v_7\\}=K_3\\cup K_2$, כלומר משולש (שלושה צמתים בדרגה 2) וצלע נפרדת (שני צמתים בדרגה 1). סדרת הדרגות היא $2,2,2,1,1$, כלומר $1,1,2,2,2$ (בפתרון המקורי נכתב כאן \"מסלול על 5 צמתים\", אך למסלול כזה דרגות $1,2,2,2,1$).\n\nתשובה: קיים.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "points": 6,
   "rubric": [
    {
     "text": "מחיקת $v_7$ בדרגה 6 וקבלת $2,2,3,3,3,5$",
     "points": 2,
     "html": "מחיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_7</annotation></semantics></math></span> בדרגה 6 וקבלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">2,2,3,3,3,5</annotation></semantics></math></span>"
    },
    {
     "text": "מחיקת $v_6$ בדרגה 5 וקבלת $1,1,2,2,2$",
     "points": 2,
     "html": "מחיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_6</annotation></semantics></math></span> בדרגה 5 וקבלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span>"
    },
    {
     "text": "זיהוי $K_3\\cup K_2$ (דרגות $2,2,2,1,1$) כמימוש של $1,1,2,2,2$ והמסקנה שהגרף קיים",
     "points": 2,
     "html": "זיהוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>3</mn></msub><mo>∪</mo><msub><mi>K</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_3\\cup K_2</annotation></semantics></math></span> (דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,2,2,1,1</annotation></semantics></math></span>) כמימוש של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span> והמסקנה שהגרף קיים"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח להפחית 1 מכל הדרגות הנותרות אחרי מחיקת צומת שמחובר לכולם.",
    "להסיק שאין גרף בלי לבצע את הצמצום עד סוף."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהי הדרגה הגדולה ביותר אחרי מחיקת $v_7$ (דרגה 6) מהגרף?",
     "answer": 5,
     "tol": 0,
     "explain": "$6-1=5$.",
     "promptHtml": "מהי הדרגה הגדולה ביותר אחרי מחיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_7</annotation></semantics></math></span> (דרגה 6) מהגרף?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">6-1=5</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו סכום הדרגות אחרי מחיקת $v_6$ ו-$v_7$?",
     "answer": 8,
     "tol": 0,
     "explain": "$1+1+2+2+2=8$, כלומר 4 צלעות.",
     "promptHtml": "מהו סכום הדרגות אחרי מחיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_7</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1+1+2+2+2=8</annotation></semantics></math></span>, כלומר 4 צלעות."
    },
    {
     "type": "order",
     "prompt": "סדרו את שלבי הבנייה.",
     "lines": [
      "סדרת הדרגות של $G$ היא $3,3,4,4,4,6,6$.",
      "מוחקים את $v_7$ (דרגה 6, מחובר לכל השאר) ומקבלים $2,2,3,3,3,5$.",
      "מוחקים את $v_6$ (דרגה 5, מחובר לכל הנותרים) ומקבלים $1,1,2,2,2$.",
      "ל-$K_3\\cup K_2$ (משולש וצלע נפרדת) יש דרגות $2,2,2,1,1$, כלומר $1,1,2,2,2$; מחזירים את $v_6,v_7$ ומקבלים גרף: קיים."
     ],
     "explain": "מורידים צומת מדרגה מקסימלית שלב אחר שלב עד שמגיעים לסדרה קטנה שאפשר לממש ישירות.",
     "promptHtml": "סדרו את שלבי הבנייה.",
     "explainHtml": "מורידים צומת מדרגה מקסימלית שלב אחר שלב עד שמגיעים לסדרה קטנה שאפשר לממש ישירות.",
     "linesHtml": [
      "סדרת הדרגות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3,3,4,4,4,6,6</annotation></semantics></math></span>.",
      "מוחקים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_7</annotation></semantics></math></span> (דרגה 6, מחובר לכל השאר) ומקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">2,2,3,3,3,5</annotation></semantics></math></span>.",
      "מוחקים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_6</annotation></semantics></math></span> (דרגה 5, מחובר לכל הנותרים) ומקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span>.",
      "ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>3</mn></msub><mo>∪</mo><msub><mi>K</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_3\\cup K_2</annotation></semantics></math></span> (משולש וצלע נפרדת) יש דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,2,2,1,1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span>; מחזירים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>6</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_6,v_7</annotation></semantics></math></span> ומקבלים גרף: קיים."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q4b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "גרפים: יסודות",
   "questionHtml": "(6 נק') האם קיים גרף בעל סדרת דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3,3,4,4,4,6,6</annotation></semantics></math></span>? אם כן בנו גרף בעל סדרת דרגות הנ\"ל.",
   "solutionHtml": "הפתרון הרשמי עם תיקון בדוגמה: הדוגמה לסדרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span> (\"מסלול על 5 צמתים\") הוחלפה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>3</mn></msub><mo>∪</mo><msub><mi>K</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_3\\cup K_2</annotation></semantics></math></span>, כי לצמתי מסלול על 5 צמתים דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1,2,2,2,1</annotation></semantics></math></span>.<br><br>נבנה בשלבים (מוחקים צומת מדרגה 6 המחובר לכל שאר הצמתים, ואז צומת מדרגה 5 המחובר לכל הצמתים שנותרו).<br><br>סדרת הדרגות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> (לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,\\dots,v_7</annotation></semantics></math></span>): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3,3,4,4,4,6,6</annotation></semantics></math></span>.<br><br>אחרי מחיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_7</annotation></semantics></math></span> (דרגה 6): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,\\dots,v_6</annotation></semantics></math></span> בדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">2,2,3,3,3,5</annotation></semantics></math></span>.<br><br>אחרי מחיקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_6</annotation></semantics></math></span> (דרגה 5): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,\\dots,v_5</annotation></semantics></math></span> בדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span>.<br><br>דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>−</mo><mo stretchy=\"false\">{</mo><msub><mi>v</mi><mn>6</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>7</mn></msub><mo stretchy=\"false\">}</mo><mo>=</mo><msub><mi>K</mi><mn>3</mn></msub><mo>∪</mo><msub><mi>K</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">G-\\{v_6,v_7\\}=K_3\\cup K_2</annotation></semantics></math></span>, כלומר משולש (שלושה צמתים בדרגה 2) וצלע נפרדת (שני צמתים בדרגה 1). סדרת הדרגות היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,2,2,1,1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,1,2,2,2</annotation></semantics></math></span> (בפתרון המקורי נכתב כאן \"מסלול על 5 צמתים\", אך למסלול כזה דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1,2,2,2,1</annotation></semantics></math></span>).<br><br>תשובה: קיים.",
   "pointsTotal": 6,
   "pitfallsHtml": [
    "לשכוח להפחית 1 מכל הדרגות הנותרות אחרי מחיקת צומת שמחובר לכולם.",
    "להסיק שאין גרף בלי לבצע את הצמצום עד סוף."
   ]
  },
  {
   "num": 4,
   "part": "ג",
   "kind": "proof",
   "topic": "graph_basics",
   "question": "(13 נק') נתון גרף $G=(V,E)$ לא מכוון, קשיר, בעל צלעות שבו יש צומת אחד בלבד בדרגה 2 ושאר הצמתים בדרגה 3. הוכח:\n\n**ג1.** (6 נק') בגרף $G$ יש מספר אי-זוגי של צמתים.\n\n**ג2.** (7 נק') גרף $G$ אינו דו-צדדי.",
   "solution": "**ג1.** $\\deg(v_1)=2,\\ \\deg(v_j)=3,\\ j=2,3,\\dots,|V|$.\n\nמנוסחת הדרגות: $2+3(|V|-1)=2|E|$, כלומר $3|V|-1=2|E|$, ולכן $|V|-1=2(|E|-|V|)$ זוגי, ומכאן $|V|$ אי-זוגי.\n\n**ג2.** נניח שהגרף $G=(V,E)$ דו-צדדי, $G=(V,E)=(A,B,E)$, ו-$v_1\\in A$. בגרף דו-צדדי סכום הדרגות ב-$A$ שווה לסכום הדרגות ב-$B$ (שווה למספר הצלעות):\n\n$$\\sum_{v_j\\in A}\\deg(v_j)=\\sum_{v_j\\in B}\\deg(v_j)$$\n$$2+3(|A|-1)=3|B|\\ \\Rightarrow\\ 3(|A|-|B|)=1\\iff \\text{False}$$\n\nקיבלנו סתירה, ולכן הגרף אינו דו-צדדי.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 13,
   "rubric": [
    {
     "text": "ג1: משוואת הדרגות $2+3(|V|-1)=2|E|$",
     "points": 3,
     "html": "ג1: משוואת הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2+3(|V|-1)=2|E|</annotation></semantics></math></span>"
    },
    {
     "text": "ג1: $|V|-1=2(|E|-|V|)$ זוגי ולכן $|V|$ אי-זוגי",
     "points": 3,
     "html": "ג1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">|V|-1=2(|E|-|V|)</annotation></semantics></math></span> זוגי ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> אי-זוגי"
    },
    {
     "text": "ג2: הנחה בשלילה שהגרף דו-צדדי ו-$v_1\\in A$",
     "points": 1,
     "html": "ג2: הנחה בשלילה שהגרף דו-צדדי ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">v_1\\in A</annotation></semantics></math></span>"
    },
    {
     "text": "ג2: סכום הדרגות ב-$A$ שווה לסכום ב-$B$",
     "points": 3,
     "html": "ג2: סכום הדרגות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שווה לסכום ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>"
    },
    {
     "text": "ג2: המשוואה $2+3(|A|-1)=3|B|$",
     "points": 2,
     "html": "ג2: המשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2+3(|A|-1)=3|B|</annotation></semantics></math></span>"
    },
    {
     "text": "ג2: סתירה $3(|A|-|B|)=1$",
     "points": 1,
     "html": "ג2: סתירה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3(|A|-|B|)=1</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח לחשב את $\\deg(v_1)=2$ בנפרד משאר הצמתים.",
    "לא להסביר מדוע סכומי הדרגות בשני הצדדים שווים: כל צלע מחברת $A$ אל $B$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהו מספר הצלעות בגרף כזה עם $|V|=5$?",
     "answer": 7,
     "tol": 0,
     "explain": "$3\\cdot5-1=2|E|$, ולכן $|E|=7$.",
     "promptHtml": "מהו מספר הצלעות בגרף כזה עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">|V|=5</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>5</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">3\\cdot5-1=2|E|</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">|E|=7</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "מדוע $|V|$ חייב להיות אי-זוגי?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "כי $3|V|-1=2|E|$ זוגי, ולכן $|V|$ אי-זוגי",
       "html": "כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">3|V|-1=2|E|</annotation></semantics></math></span> זוגי, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> אי-זוגי"
      },
      {
       "id": "b",
       "type": "text",
       "value": "כי $|V|$ ראשוני",
       "html": "כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> ראשוני"
      },
      {
       "id": "c",
       "type": "text",
       "value": "כי יש צומת בדרגה 2",
       "html": "כי יש צומת בדרגה 2"
      },
      {
       "id": "d",
       "type": "text",
       "value": "כי $|E|$ אי-זוגי",
       "html": "כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|E|</annotation></semantics></math></span> אי-זוגי"
      }
     ],
     "correctId": "a",
     "explain": "$3|V|-1=2|E|$ זוגי.",
     "promptHtml": "מדוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> חייב להיות אי-זוגי?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">3|V|-1=2|E|</annotation></semantics></math></span> זוגי."
    },
    {
     "type": "order",
     "prompt": "סדרו את הוכחת ג2.",
     "lines": [
      "נניח בשלילה ש-$G=(A,B,E)$ דו-צדדי, ו-$v_1\\in A$.",
      "בגרף דו-צדדי $\\sum_{v\\in A}\\deg(v)=\\sum_{v\\in B}\\deg(v)$ (שניהם שווים למספר הצלעות).",
      "לכן $2+3(|A|-1)=3|B|$.",
      "מכאן $3(|A|-|B|)=1$.",
      "אין שלם $|A|-|B|$ המקיים זאת (סתירה), ולכן $G$ אינו דו-צדדי."
     ],
     "explain": "הנחה, שוויון סכומים, משוואה, חישוב, סתירה.",
     "promptHtml": "סדרו את הוכחת ג2.",
     "explainHtml": "הנחה, שוויון סכומים, משוואה, חישוב, סתירה.",
     "linesHtml": [
      "נניח בשלילה ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(A,B,E)</annotation></semantics></math></span> דו-צדדי, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">v_1\\in A</annotation></semantics></math></span>.",
      "בגרף דו-צדדי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mo>∑</mo><mrow><mi>v</mi><mo>∈</mo><mi>A</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msub><mo>∑</mo><mrow><mi>v</mi><mo>∈</mo><mi>B</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sum_{v\\in A}\\deg(v)=\\sum_{v\\in B}\\deg(v)</annotation></semantics></math></span> (שניהם שווים למספר הצלעות).",
      "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2+3(|A|-1)=3|B|</annotation></semantics></math></span>.",
      "מכאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3(|A|-|B|)=1</annotation></semantics></math></span>.",
      "אין שלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|-|B|</annotation></semantics></math></span> המקיים זאת (סתירה), ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> אינו דו-צדדי."
     ]
    },
    {
     "type": "findbug",
     "prompt": "באיזו שורה יש טעות?",
     "lines": [
      "נניח בשלילה ש-$G=(A,B,E)$ דו-צדדי, ו-$v_1\\in A$.",
      "בגרף דו-צדדי $\\sum_{v\\in A}\\deg(v)=\\sum_{v\\in B}\\deg(v)$ (שניהם שווים למספר הצלעות).",
      "לכן $2+3(|A|-1)=3|B|$.",
      "מכאן $3(|A|-|B|)=0$, כלומר $|A|=|B|$.",
      "אין שלם $|A|-|B|$ המקיים זאת (סתירה), ולכן $G$ אינו דו-צדדי."
     ],
     "bugIndex": 3,
     "explain": "$2+3|A|-3=3|B|$ נותן $3(|A|-|B|)=1$, לא $0$.",
     "promptHtml": "באיזו שורה יש טעות?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2+3|A|-3=3|B|</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3(|A|-|B|)=1</annotation></semantics></math></span>, לא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>.",
     "linesHtml": [
      "נניח בשלילה ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(A,B,E)</annotation></semantics></math></span> דו-צדדי, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">v_1\\in A</annotation></semantics></math></span>.",
      "בגרף דו-צדדי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mo>∑</mo><mrow><mi>v</mi><mo>∈</mo><mi>A</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msub><mo>∑</mo><mrow><mi>v</mi><mo>∈</mo><mi>B</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sum_{v\\in A}\\deg(v)=\\sum_{v\\in B}\\deg(v)</annotation></semantics></math></span> (שניהם שווים למספר הצלעות).",
      "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2+3(|A|-1)=3|B|</annotation></semantics></math></span>.",
      "מכאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">3(|A|-|B|)=0</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|=|B|</annotation></semantics></math></span>.",
      "אין שלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|-|B|</annotation></semantics></math></span> המקיים זאת (סתירה), ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> אינו דו-צדדי."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q4c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "גרפים: יסודות",
   "questionHtml": "(13 נק') נתון גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> לא מכוון, קשיר, בעל צלעות שבו יש צומת אחד בלבד בדרגה 2 ושאר הצמתים בדרגה 3. הוכח:<br><br><strong>ג1.</strong> (6 נק') בגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> יש מספר אי-זוגי של צמתים.<br><br><strong>ג2.</strong> (7 נק') גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> אינו דו-צדדי.",
   "solutionHtml": "<strong>ג1.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mi>j</mi></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>j</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">\\deg(v_1)=2,\\ \\deg(v_j)=3,\\ j=2,3,\\dots,|V|</annotation></semantics></math></span>.<br><br>מנוסחת הדרגות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2+3(|V|-1)=2|E|</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">3|V|-1=2|E|</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">|V|-1=2(|E|-|V|)</annotation></semantics></math></span> זוגי, ומכאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> אי-זוגי.<br><br><strong>ג2.</strong> נניח שהגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> דו-צדדי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)=(A,B,E)</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">v_1\\in A</annotation></semantics></math></span>. בגרף דו-צדדי סכום הדרגות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שווה לסכום הדרגות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> (שווה למספר הצלעות):<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munder><mo>∑</mo><mrow><msub><mi>v</mi><mi>j</mi></msub><mo>∈</mo><mi>A</mi></mrow></munder><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mi>j</mi></msub><mo stretchy=\"false\">)</mo><mo>=</mo><munder><mo>∑</mo><mrow><msub><mi>v</mi><mi>j</mi></msub><mo>∈</mo><mi>B</mi></mrow></munder><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mi>j</mi></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sum_{v_j\\in A}\\deg(v_j)=\\sum_{v_j\\in B}\\deg(v_j)</annotation></semantics></math></span><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mtext> </mtext><mo>⇒</mo><mtext> </mtext><mn>3</mn><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><mtext>False</mtext></mrow><annotation encoding=\"application/x-tex\">2+3(|A|-1)=3|B|\\ \\Rightarrow\\ 3(|A|-|B|)=1\\iff \\text{False}</annotation></semantics></math></span><br><br>קיבלנו סתירה, ולכן הגרף אינו דו-צדדי.",
   "pointsTotal": 13,
   "pitfallsHtml": [
    "לשכוח לחשב את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\deg(v_1)=2</annotation></semantics></math></span> בנפרד משאר הצמתים.",
    "לא להסביר מדוע סכומי הדרגות בשני הצדדים שווים: כל צלע מחברת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> אל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 5,
   "part": "א",
   "kind": "computation",
   "topic": "permutations_arrangements",
   "question": "**א1.** (4 נק') המונח: תמורה אי-סדר מלא.\n\n**א2.** (4 נק') שאלה: תהי הקבוצה $A=\\{1,2,3,4,5,6,7,8\\}$. מצאו את מספר התמורות אי-סדר מלא של הקבוצה $A$.",
   "solution": "**א1. הגדרה:** תהי הקבוצה $A=\\{1,2,3,\\dots,n\\}$. תמורה $(j_1,j_2,\\dots,j_n)$ המקיימת את התנאי $\\forall i\\in\\mathbb{N}:\\ 1\\le i\\le n\\to j_i\\ne i$ נקראת תמורה אי-סדר מלא.\n\n**א2.** מספר תמורות אי-סדר מלא עבור הקבוצה $A=\\{1,2,3,\\dots,8\\}$:\n\n$$D_8=8!\\left(\\frac1{0!}-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\dots+\\frac1{8!}\\right)=14833$$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "הגדרת תמורת אי-סדר מלא: $j_i\\ne i$ לכל $i$",
     "points": 4,
     "html": "הגדרת תמורת אי-סדר מלא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>j</mi><mi>i</mi></msub><mo mathvariant=\"normal\">≠</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">j_i\\ne i</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>"
    },
    {
     "text": "שימוש בנוסחה $D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}$",
     "points": 2,
     "html": "שימוש בנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo stretchy=\"false\">!</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></msubsup><mfrac><mrow><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mo stretchy=\"false\">!</mo></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">D_n=n!\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}</annotation></semantics></math></span>"
    },
    {
     "text": "התוצאה $D_8=14833$",
     "points": 2,
     "html": "התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>8</mn></msub><mo>=</mo><mn>14833</mn></mrow><annotation encoding=\"application/x-tex\">D_8=14833</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשתמש ב-$8!$ כאילו כל תמורה היא אי-סדר מלא.",
    "לטעות בסימנים המתחלפים בסכום."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "איזו מהתמורות של $\\{1,2,3,4\\}$ היא אי-סדר מלא?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "$(2,1,4,3)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,4,3)</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "$(1,3,2,4)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,3,2,4)</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "$(3,2,1,4)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(3,2,1,4)</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "$(1,2,4,3)$",
       "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,2,4,3)</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "אין איבר ששומר על מקומו.",
     "promptHtml": "איזו מהתמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> היא אי-סדר מלא?",
     "explainHtml": "אין איבר ששומר על מקומו."
    },
    {
     "type": "numeric",
     "prompt": "מהו $8!$?",
     "answer": 40320,
     "tol": 0,
     "explain": "$8!=40320$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">8!</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>40320</mn></mrow><annotation encoding=\"application/x-tex\">8!=40320</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $D_8$?",
     "answer": 14833,
     "tol": 0,
     "explain": "$8!\\left(1-1+\\frac12-\\dots+\\frac1{8!}\\right)=14833$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>8</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_8</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo stretchy=\"false\">!</mo><mrow><mo fence=\"true\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mo>⋯</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mn>8</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>14833</mn></mrow><annotation encoding=\"application/x-tex\">8!\\left(1-1+\\frac12-\\dots+\\frac1{8!}\\right)=14833</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q5a",
   "partKey": "a",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "תמורות וחליפות",
   "questionHtml": "<strong>א1.</strong> (4 נק') המונח: תמורה אי-סדר מלא.<br><br><strong>א2.</strong> (4 נק') שאלה: תהי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3,4,5,6,7,8\\}</annotation></semantics></math></span>. מצאו את מספר התמורות אי-סדר מלא של הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>א1. הגדרה:</strong> תהי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3,\\dots,n\\}</annotation></semantics></math></span>. תמורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>j</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>j</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>j</mi><mi>n</mi></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(j_1,j_2,\\dots,j_n)</annotation></semantics></math></span> המקיימת את התנאי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∀</mi><mi>i</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi><mo>:</mo><mtext> </mtext><mn>1</mn><mo>≤</mo><mi>i</mi><mo>≤</mo><mi>n</mi><mo>→</mo><msub><mi>j</mi><mi>i</mi></msub><mo mathvariant=\"normal\">≠</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">\\forall i\\in\\mathbb{N}:\\ 1\\le i\\le n\\to j_i\\ne i</annotation></semantics></math></span> נקראת תמורה אי-סדר מלא.<br><br><strong>א2.</strong> מספר תמורות אי-סדר מלא עבור הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3,\\dots,8\\}</annotation></semantics></math></span>:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msub><mi>D</mi><mn>8</mn></msub><mo>=</mo><mn>8</mn><mo stretchy=\"false\">!</mo><mrow><mo fence=\"true\">(</mo><mfrac><mn>1</mn><mrow><mn>0</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mo>⋯</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mn>8</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>14833</mn></mrow><annotation encoding=\"application/x-tex\">D_8=8!\\left(\\frac1{0!}-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\dots+\\frac1{8!}\\right)=14833</annotation></semantics></math></span>",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "להשתמש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">8!</annotation></semantics></math></span> כאילו כל תמורה היא אי-סדר מלא.",
    "לטעות בסימנים המתחלפים בסכום."
   ]
  },
  {
   "num": 5,
   "part": "ב",
   "kind": "truefalse",
   "topic": "trees",
   "question": "**ב1.** (4 נק') המונח: גרף פורש.\n\n**ב2.** (5 נק') שאלה: הוכח או הפרך את הטענה הבאה: יהי $G=(V,E)$ גרף לא מכוון וקשיר, $n=|V|>2$. הטענה: בגרף $G$ קיים עץ פורש.",
   "solution": "**ב1. הגדרה:** יהי $G=(V,E)$ גרף לא מכוון וקשיר. תת גרף $H=(V,E_1)$, כאשר $E_1\\subset E$ קוראים גרף פורש של $G$.\n\n**ב2.** הטענה נכונה. נוכיח אותה.\n\nאם בגרף $G=(V,E)$ אין מעגלים, אז הוא יהיה עץ פורש של עצמו.\n\nאם בגרף $G$ יש מעגלים, אז אפשר מכל מעגל להוריד צלעות שונות זו מזו ולקבל עדיין גרף קשיר וללא מעגלים, והוא יהיה עץ פורש של הגרף $G$.",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "verdict": true,
   "points": 9,
   "rubric": [
    {
     "text": "הגדרת גרף פורש: תת-גרף על אותה קבוצת צמתים",
     "points": 4,
     "html": "הגדרת גרף פורש: תת-גרף על אותה קבוצת צמתים"
    },
    {
     "text": "מקרה בלי מעגלים: $G$ עץ פורש של עצמו",
     "points": 2,
     "html": "מקרה בלי מעגלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> עץ פורש של עצמו"
    },
    {
     "text": "מקרה עם מעגלים: מחיקת צלעות מכל מעגל",
     "points": 2,
     "html": "מקרה עם מעגלים: מחיקת צלעות מכל מעגל"
    },
    {
     "text": "מסקנה: הגרף קשיר וחסר מעגלים",
     "points": 1,
     "html": "מסקנה: הגרף קשיר וחסר מעגלים"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "למחוק צמתים במקום צלעות: גרף פורש חייב להכיל את כל הצמתים.",
    "למחוק יותר מדי צלעות ולאבד קשירות."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מוחקים מכל מעגל כדי לשמור על קשירות?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "צלע",
       "html": "צלע"
      },
      {
       "id": "b",
       "type": "text",
       "value": "צומת",
       "html": "צומת"
      },
      {
       "id": "c",
       "type": "text",
       "value": "שתי צלעות סמוכות",
       "html": "שתי צלעות סמוכות"
      },
      {
       "id": "d",
       "type": "text",
       "value": "את כל המעגל",
       "html": "את כל המעגל"
      }
     ],
     "correctId": "a",
     "explain": "מחיקת צלע ממעגל משאירה את הגרף קשיר.",
     "promptHtml": "מה מוחקים מכל מעגל כדי לשמור על קשירות?",
     "explainHtml": "מחיקת צלע ממעגל משאירה את הגרף קשיר."
    },
    {
     "type": "order",
     "prompt": "סדרו את ההוכחה.",
     "lines": [
      "הטענה נכונה, ונוכיח אותה.",
      "אם ב-$G$ אין מעגלים, אז $G$ עצמו הוא עץ פורש של עצמו.",
      "אם ב-$G$ יש מעגלים, מוחקים מכל מעגל צלע, כאשר הצלעות שנמחקות שונות זו מזו.",
      "הגרף שנשאר קשיר וחסר מעגלים, ולכן הוא עץ פורש של $G$."
     ],
     "explain": "הכרעה, מקרה בלי מעגלים, מקרה עם מעגלים, מסקנה.",
     "promptHtml": "סדרו את ההוכחה.",
     "explainHtml": "הכרעה, מקרה בלי מעגלים, מקרה עם מעגלים, מסקנה.",
     "linesHtml": [
      "הטענה נכונה, ונוכיח אותה.",
      "אם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> אין מעגלים, אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> עצמו הוא עץ פורש של עצמו.",
      "אם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> יש מעגלים, מוחקים מכל מעגל צלע, כאשר הצלעות שנמחקות שונות זו מזו.",
      "הגרף שנשאר קשיר וחסר מעגלים, ולכן הוא עץ פורש של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>."
     ]
    },
    {
     "type": "findbug",
     "prompt": "באיזו שורה יש טעות?",
     "lines": [
      "הטענה נכונה, ונוכיח אותה.",
      "אם ב-$G$ אין מעגלים, אז $G$ עצמו הוא עץ פורש של עצמו.",
      "אם ב-$G$ יש מעגלים, מוחקים מכל מעגל צומת, כאשר הצמתים שנמחקים שונים זה מזה.",
      "הגרף שנשאר קשיר וחסר מעגלים, ולכן הוא עץ פורש של $G$."
     ],
     "bugIndex": 2,
     "explain": "גרף פורש שומר את כל הצמתים, ולכן מוחקים צלעות.",
     "promptHtml": "באיזו שורה יש טעות?",
     "explainHtml": "גרף פורש שומר את כל הצמתים, ולכן מוחקים צלעות.",
     "linesHtml": [
      "הטענה נכונה, ונוכיח אותה.",
      "אם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> אין מעגלים, אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> עצמו הוא עץ פורש של עצמו.",
      "אם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> יש מעגלים, מוחקים מכל מעגל צומת, כאשר הצמתים שנמחקים שונים זה מזה.",
      "הגרף שנשאר קשיר וחסר מעגלים, ולכן הוא עץ פורש של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q5b",
   "partKey": "b",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "עצים",
   "questionHtml": "<strong>ב1.</strong> (4 נק') המונח: גרף פורש.<br><br><strong>ב2.</strong> (5 נק') שאלה: הוכח או הפרך את הטענה הבאה: יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> גרף לא מכוון וקשיר, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>&gt;</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=|V|&gt;2</annotation></semantics></math></span>. הטענה: בגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> קיים עץ פורש.",
   "solutionHtml": "<strong>ב1. הגדרה:</strong> יהי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> גרף לא מכוון וקשיר. תת גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">H=(V,E_1)</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>⊂</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E_1\\subset E</annotation></semantics></math></span> קוראים גרף פורש של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>.<br><br><strong>ב2.</strong> הטענה נכונה. נוכיח אותה.<br><br>אם בגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> אין מעגלים, אז הוא יהיה עץ פורש של עצמו.<br><br>אם בגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> יש מעגלים, אז אפשר מכל מעגל להוריד צלעות שונות זו מזו ולקבל עדיין גרף קשיר וללא מעגלים, והוא יהיה עץ פורש של הגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>.",
   "pointsTotal": 9,
   "pitfallsHtml": [
    "למחוק צמתים במקום צלעות: גרף פורש חייב להכיל את כל הצמתים.",
    "למחוק יותר מדי צלעות ולאבד קשירות."
   ]
  },
  {
   "num": 5,
   "part": "ג",
   "kind": "computation",
   "topic": "euler_phi",
   "question": "(8 נק') חשבו $\\phi\\left(\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\cdot7^k\\right)$, כאשר $\\phi$ היא פונקציית אוילר.",
   "solution": "$$(x+1)^{11}=\\sum_{k=0}^{11}\\binom{11}{k}x^k$$\n\nנגזור את שני האגפים: $11(x+1)^{10}=\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\,x^{k-1}$.\n\nנכפול ב-$x$: $11x(x+1)^{10}=\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\,x^k$, ונציב $x=7$:\n\n$$11\\cdot7\\cdot(7+1)^{10}=\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\cdot7^k$$\n\n$$\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\cdot7^k=11\\cdot7\\cdot2^{30}$$\n\n$$\\phi\\left(11\\cdot7\\cdot2^{30}\\right)=10\\cdot6\\cdot\\left(2^{30}-2^{29}\\right)=3.221225472\\cdot10^{10}$$",
   "solutionSource": "lecturer-solution",
   "official": true,
   "confidence": "high",
   "points": 8,
   "rubric": [
    {
     "text": "גזירת הבינום $(x+1)^{11}$",
     "points": 2,
     "html": "גזירת הבינום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>11</mn></msup></mrow><annotation encoding=\"application/x-tex\">(x+1)^{11}</annotation></semantics></math></span>"
    },
    {
     "text": "כפל ב-$x$ והצבת $x=7$: הסכום $11\\cdot7\\cdot2^{30}$",
     "points": 3,
     "html": "כפל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> והצבת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">x=7</annotation></semantics></math></span>: הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mn>30</mn></msup></mrow><annotation encoding=\"application/x-tex\">11\\cdot7\\cdot2^{30}</annotation></semantics></math></span>"
    },
    {
     "text": "חישוב $\\phi$: $10\\cdot6\\cdot2^{29}$",
     "points": 3,
     "html": "חישוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi></mrow><annotation encoding=\"application/x-tex\">\\phi</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><msup><mn>2</mn><mn>29</mn></msup></mrow><annotation encoding=\"application/x-tex\">10\\cdot6\\cdot2^{29}</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח לכפול ב-$x$ אחרי הגזירה, ולקבל חזקה לא נכונה.",
    "לחשב $\\phi(2^{30})$ בתור $2^{30}-1$ במקום $2^{29}$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה עושים לשוויון $(x+1)^{11}=\\sum\\binom{11}{k}x^k$ כדי לקבל את $k$ בסכום?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "גוזרים ואז כופלים ב-$x$",
       "html": "גוזרים ואז כופלים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "מציבים $x=1$",
       "html": "מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x=1</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מעלים בריבוע",
       "html": "מעלים בריבוע"
      },
      {
       "id": "d",
       "type": "text",
       "value": "מחלקים ב-$x$",
       "html": "מחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>"
      }
     ],
     "correctId": "a",
     "explain": "הנגזרת מורידה את $k$, והכפל ב-$x$ מחזיר את החזקה $x^k$.",
     "promptHtml": "מה עושים לשוויון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>11</mn></msup><mo>=</mo><mo>∑</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mi>x</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">(x+1)^{11}=\\sum\\binom{11}{k}x^k</annotation></semantics></math></span> כדי לקבל את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> בסכום?",
     "explainHtml": "הנגזרת מורידה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span>, והכפל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> מחזיר את החזקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">x^k</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו הסכום $\\sum_{k=0}^{11}\\binom{11}{k}k\\,7^k$?",
     "answer": 82678120448,
     "tol": 0,
     "explain": "$11\\cdot7\\cdot2^{30}=82678120448$.",
     "promptHtml": "מהו הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></msubsup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mi>k</mi><mtext> </mtext><msup><mn>7</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">\\sum_{k=0}^{11}\\binom{11}{k}k\\,7^k</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mn>30</mn></msup><mo>=</mo><mn>82678120448</mn></mrow><annotation encoding=\"application/x-tex\">11\\cdot7\\cdot2^{30}=82678120448</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $\\phi(2^{30})$?",
     "answer": 536870912,
     "tol": 0,
     "explain": "$2^{30}-2^{29}=2^{29}$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mn>30</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\phi(2^{30})</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>30</mn></msup><mo>−</mo><msup><mn>2</mn><mn>29</mn></msup><mo>=</mo><msup><mn>2</mn><mn>29</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{30}-2^{29}=2^{29}</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מהו $\\phi\\left(11\\cdot7\\cdot2^{30}\\right)$?",
     "answer": 32212254720,
     "tol": 0,
     "explain": "$10\\cdot6\\cdot2^{29}=32212254720$.",
     "promptHtml": "מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mrow><mo fence=\"true\">(</mo><mn>11</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mn>30</mn></msup><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\phi\\left(11\\cdot7\\cdot2^{30}\\right)</annotation></semantics></math></span>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><msup><mn>2</mn><mn>29</mn></msup><mo>=</mo><mn>32212254720</mn></mrow><annotation encoding=\"application/x-tex\">10\\cdot6\\cdot2^{29}=32212254720</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25S-A-Q5c",
   "partKey": "c",
   "examCode": "25S-A",
   "examLabel": "קיץ 2025, מועד א'",
   "year": 2025,
   "source": "exam",
   "topicLabel": "פונקציית אוילר",
   "questionHtml": "(8 נק') חשבו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mrow><mo fence=\"true\">(</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></msubsup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>k</mi><mo>⋅</mo><msup><mn>7</mn><mi>k</mi></msup><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\phi\\left(\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\cdot7^k\\right)</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi></mrow><annotation encoding=\"application/x-tex\">\\phi</annotation></semantics></math></span> היא פונקציית אוילר.",
   "solutionHtml": "<span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>11</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><msup><mi>x</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">(x+1)^{11}=\\sum_{k=0}^{11}\\binom{11}{k}x^k</annotation></semantics></math></span><br><br>נגזור את שני האגפים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>10</mn></msup><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></msubsup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>k</mi><mtext> </mtext><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">11(x+1)^{10}=\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\,x^{k-1}</annotation></semantics></math></span>.<br><br>נכפול ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mi>x</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>10</mn></msup><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></msubsup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>k</mi><mtext> </mtext><msup><mi>x</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">11x(x+1)^{10}=\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\,x^k</annotation></semantics></math></span>, ונציב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">x=7</annotation></semantics></math></span>:<br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>11</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>7</mn><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>10</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>k</mi><mo>⋅</mo><msup><mn>7</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">11\\cdot7\\cdot(7+1)^{10}=\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\cdot7^k</annotation></semantics></math></span><br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mn>11</mn></munderover><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><mi>k</mi><mo>⋅</mo><msup><mn>7</mn><mi>k</mi></msup><mo>=</mo><mn>11</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mn>30</mn></msup></mrow><annotation encoding=\"application/x-tex\">\\sum_{k=0}^{11}\\binom{11}{k}\\cdot k\\cdot7^k=11\\cdot7\\cdot2^{30}</annotation></semantics></math></span><br><br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>ϕ</mi><mrow><mo fence=\"true\">(</mo><mn>11</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mn>30</mn></msup><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>10</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mrow><mo fence=\"true\">(</mo><msup><mn>2</mn><mn>30</mn></msup><mo>−</mo><msup><mn>2</mn><mn>29</mn></msup><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>3.221225472</mn><mo>⋅</mo><msup><mn>10</mn><mn>10</mn></msup></mrow><annotation encoding=\"application/x-tex\">\\phi\\left(11\\cdot7\\cdot2^{30}\\right)=10\\cdot6\\cdot\\left(2^{30}-2^{29}\\right)=3.221225472\\cdot10^{10}</annotation></semantics></math></span>",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לשכוח לכפול ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> אחרי הגזירה, ולקבל חזקה לא נכונה.",
    "לחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ϕ</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mn>30</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\phi(2^{30})</annotation></semantics></math></span> בתור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>30</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{30}-1</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>29</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{29}</annotation></semantics></math></span>."
   ]
  }
 ]
};
