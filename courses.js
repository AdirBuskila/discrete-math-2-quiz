window.COURSES = {
 "perm_ie": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔢",
    "title": "עקרון הכפל, עצרת וחליפות",
    "goal": "לחשב בכמה דרכים מסדרים איברים בשורה: תמורות, חליפות וסדרות עם חזרות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כל שאלה בנושא הזה היא ספירה של <b>סידורים בשורה</b>: מי במקום הראשון, מי בשני, וכן הלאה. הכלי הבסיסי הוא עקרון הכפל.</p>\n<div class=\"lesson-rule\">🔑 <b>עקרון הכפל:</b> אם בוחרים בשלבים, ובשלב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>n</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">n_i</annotation></semantics></math></span> אפשרויות (בלי קשר לבחירות הקודמות), אז מספר התוצאות הכולל הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>n</mi><mn>2</mn></msub><mo>⋯</mo><msub><mi>n</mi><mi>k</mi></msub></mrow><annotation encoding=\"application/x-tex\">n_1\\cdot n_2\\cdots n_k</annotation></semantics></math></span>.</div>\n<h3>תמורה וחליפה</h3>\n<ul>\n<li><b>תמורה</b> של קבוצה בת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים: סידור של כל האיברים בשורה, בלי חזרות. יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋯</mo><mn>2</mn><mo>⋅</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n!=n(n-1)\\cdots 2\\cdot 1</annotation></semantics></math></span> תמורות (עצרת), כי למקום הראשון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אפשרויות, לשני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>, וכן הלאה.</li>\n<li><b>חליפה</b> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>: סדרה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> איברים <b>שונים</b>, והסדר חשוב. מספרן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋯</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">P(n,k)=n(n-1)\\cdots(n-k+1)=\\frac{n!}{(n-k)!}</annotation></semantics></math></span>.</li>\n<li><b>סדרה עם חזרות</b> באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים: בכל מקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אפשרויות, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^k</annotation></semantics></math></span>.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> כמה חליפות בגודל 3 יש מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6\\}</annotation></semantics></math></span>? למקום הראשון 6 אפשרויות, לשני 5, לשלישי 4: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>120</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">6\\cdot5\\cdot4=120=P(6,3)</annotation></semantics></math></span>. ואילו סדרות באורך 3 עם חזרות מותרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>6</mn><mn>3</mn></msup><mo>=</mo><mn>216</mn></mrow><annotation encoding=\"application/x-tex\">6^3=216</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ השאלה לא תמיד אומרת \"חליפה\" או \"חזרות\". קראו מה כתוב: \"אותיות שונות\" או \"סידור של כולם\" פירושו בלי חזרות. אם לא נאמר שהאיברים שונים וחזרות אפשריות, זה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^k</annotation></semantics></math></span>.</div>\n<table><thead><tr><th>מה סופרים</th><th>נוסחה</th></tr></thead>\n<tbody><tr><td>תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span></td></tr>\n<tr><td>חליפות בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">P(n,k)=\\frac{n!}{(n-k)!}</annotation></semantics></math></span></td></tr>\n<tr><td>סדרות באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> עם חזרות</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^k</annotation></semantics></math></span></td></tr></tbody></table>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "כמה סיסמאות בנות 3 אותיות **שונות** אפשר ליצור מהאותיות $a,b,c,d,e$ ?",
      "options": [
       {
        "id": "a",
        "value": "125",
        "type": "text",
        "html": "125"
       },
       {
        "id": "b",
        "value": "60",
        "type": "text",
        "html": "60"
       },
       {
        "id": "c",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "d",
        "value": "15",
        "type": "text",
        "html": "15"
       }
      ],
      "correctId": "b",
      "explanation": "בוחרים בשלבים: $5\\cdot4\\cdot3=60=P(5,3)$. התשובה 125 היא $5^3$, כלומר סדרות שבהן חזרות מותרות. התשובה 10 היא מספר הדרכים לבחור 3 אותיות בלי סדר, והתשובה 15 היא $5\\cdot3$ שאין לה הצדקה.",
      "recap": "אותיות שונות והסדר חשוב: $P(n,k)$.",
      "questionHtml": "כמה סיסמאות בנות 3 אותיות <strong>שונות</strong> אפשר ליצור מהאותיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">a,b,c,d,e</annotation></semantics></math></span> ?",
      "explanationHtml": "בוחרים בשלבים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>60</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">5\\cdot4\\cdot3=60=P(5,3)</annotation></semantics></math></span>. התשובה 125 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>5</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">5^3</annotation></semantics></math></span>, כלומר סדרות שבהן חזרות מותרות. התשובה 10 היא מספר הדרכים לבחור 3 אותיות בלי סדר, והתשובה 15 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot3</annotation></semantics></math></span> שאין לה הצדקה.",
      "recapHtml": "אותיות שונות והסדר חשוב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,k)</annotation></semantics></math></span>."
     },
     {
      "id": "C01-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות יש לקבוצה $\\{1,2,3,4,5,6\\}$ ?",
       "answer": 720,
       "tol": 0,
       "explain": "$6!=6\\cdot5\\cdot4\\cdot3\\cdot2\\cdot1=720$.",
       "promptHtml": "כמה תמורות יש לקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6\\}</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>6</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>720</mn></mrow><annotation encoding=\"application/x-tex\">6!=6\\cdot5\\cdot4\\cdot3\\cdot2\\cdot1=720</annotation></semantics></math></span>."
      },
      "recap": "תמורות של $n$ איברים: $n!$.",
      "recapHtml": "תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>."
     },
     {
      "id": "C01-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה סדרות באורך 4 אפשר ליצור מהספרות $1,2,3$ כאשר מותר לחזור על ספרה?",
       "answer": 81,
       "tol": 0,
       "explain": "בכל אחד מ-4 המקומות 3 אפשרויות: $3^4=81$.",
       "promptHtml": "כמה סדרות באורך 4 אפשר ליצור מהספרות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> כאשר מותר לחזור על ספרה?",
       "explainHtml": "בכל אחד מ-4 המקומות 3 אפשרויות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>4</mn></msup><mo>=</mo><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">3^4=81</annotation></semantics></math></span>."
      },
      "recap": "סדרה עם חזרות: $n^k$.",
      "recapHtml": "סדרה עם חזרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^k</annotation></semantics></math></span>."
     },
     {
      "id": "C01-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה חליפות בגודל 3 יש מתוך קבוצה בת 8 איברים?",
       "answer": 336,
       "tol": 0,
       "explain": "$P(8,3)=8\\cdot7\\cdot6=336$.",
       "promptHtml": "כמה חליפות בגודל 3 יש מתוך קבוצה בת 8 איברים?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>8</mn><mo>⋅</mo><mn>7</mn><mo>⋅</mo><mn>6</mn><mo>=</mo><mn>336</mn></mrow><annotation encoding=\"application/x-tex\">P(8,3)=8\\cdot7\\cdot6=336</annotation></semantics></math></span>."
      },
      "recap": "$P(n,k)$: $k$ גורמים יורדים החל מ-$n$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,k)</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> גורמים יורדים החל מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>."
     },
     {
      "id": "C01-Q5",
      "question": "ב-7 רצים מחלקים מדליית זהב, כסף וארד (כל מדליה לרץ אחר). בכמה דרכים אפשר לחלק את המדליות?",
      "options": [
       {
        "id": "a",
        "value": "343",
        "type": "text",
        "html": "343"
       },
       {
        "id": "b",
        "value": "35",
        "type": "text",
        "html": "35"
       },
       {
        "id": "c",
        "value": "5040",
        "type": "text",
        "html": "5040"
       },
       {
        "id": "d",
        "value": "210",
        "type": "text",
        "html": "210"
       }
      ],
      "correctId": "d",
      "explanation": "הסדר חשוב (זהב שונה מכסף) ואין חזרות: $7\\cdot6\\cdot5=210=P(7,3)$. התשובה 343 היא $7^3$ (אותו רץ יכול לקבל כמה מדליות). התשובה 35 היא בחירה בלי סדר. התשובה 5040 היא $7!$, תמורה של כל 7 הרצים.",
      "recap": "דירוג של $k$ מתוך $n$: $P(n,k)$.",
      "questionHtml": "ב-7 רצים מחלקים מדליית זהב, כסף וארד (כל מדליה לרץ אחר). בכמה דרכים אפשר לחלק את המדליות?",
      "explanationHtml": "הסדר חשוב (זהב שונה מכסף) ואין חזרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>210</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">7\\cdot6\\cdot5=210=P(7,3)</annotation></semantics></math></span>. התשובה 343 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>7</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">7^3</annotation></semantics></math></span> (אותו רץ יכול לקבל כמה מדליות). התשובה 35 היא בחירה בלי סדר. התשובה 5040 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">7!</annotation></semantics></math></span>, תמורה של כל 7 הרצים.",
      "recapHtml": "דירוג של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,k)</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "📍",
    "title": "תנאי מיקום: ראשון, אחרון ואיבר חובה",
    "goal": "לספור סידורים שבהם מקום מסוים מוגבל, או שאיבר מסוים חייב להופיע.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כשיש תנאי על מקום מסוים, ממלאים <b>קודם את המקומות המוגבלים</b>, ואחר כך את השאר בעקרון הכפל.</p>\n<div class=\"lesson-rule\">🔑 <b>מתכון:</b> (1) מציירים שורה של מקומות. (2) ממלאים קודם את המקום המוגבל ביותר, וסופרים כמה אפשרויות יש לו. (3) את המקומות הנותרים ממלאים בתמורה (או חליפה) של האיברים שנשארו.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5\\}</annotation></semantics></math></span> מתחילות ב-1 או ב-2? למקום הראשון 2 אפשרויות, ושאר 4 המקומות הם תמורה של 4 האיברים הנותרים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot4!=48</annotation></semantics></math></span>.</div>\n<p>כשיש <b>שני</b> מקומות מוגבלים (ראשון ואחרון), ממלאים את שניהם קודם. למשל תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> שמתחילות באי-זוגי ומסתיימות בזוגי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> אפשרויות לראשון, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> לאחרון ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">3!</annotation></semantics></math></span> לאמצע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot2\\cdot3!=36</annotation></semantics></math></span>.</p>\n<h3>חלקים נפרדים</h3>\n<p>אם הסדרה מחולקת לחלקים וכל חלק מורכב מקבוצה קבועה, הסידורים של כל חלק הם בלתי תלויים ומכפילים: ארבעת המקומות הראשונים מסודרים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c,d\\}</annotation></semantics></math></span> ושלושת האחרונים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>y</mi><mo separator=\"true\">,</mo><mi>z</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{x,y,z\\}</annotation></semantics></math></span> נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mn>3</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">4!\\cdot3!</annotation></semantics></math></span>.</p>\n<h3>איבר חובה בחליפה</h3>\n<p>כמה חליפות בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים מכילות איבר מסוים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span>? בוחרים <b>מקום</b> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> אפשרויות), ואת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">k-1</annotation></semantics></math></span> המקומות הנותרים ממלאים בחליפה מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים האחרים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>⋅</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">k\\cdot P(n-1,k-1)</annotation></semantics></math></span>.</p>\n<div class=\"lesson-trap\">⚠️ מי שמחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n-1,k-1)</annotation></semantics></math></span> בלי לכפול ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> שוכח שהאיבר יכול לשבת בכל אחד מהמקומות.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> חליפות בגודל 3 מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> שמכילות 2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot P(5,2)=3\\cdot20=60</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,2,\\dots,7\\}$ מתחילות ב-7 ?",
       "answer": 720,
       "tol": 0,
       "explain": "המקום הראשון קבוע, ו-6 המקומות האחרים הם תמורה של $\\{1,\\dots,6\\}$: $6!=720$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,\\dots,7\\}</annotation></semantics></math></span> מתחילות ב-7 ?",
       "explainHtml": "המקום הראשון קבוע, ו-6 המקומות האחרים הם תמורה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>720</mn></mrow><annotation encoding=\"application/x-tex\">6!=720</annotation></semantics></math></span>."
      },
      "recap": "מקום קבוע: מסדרים את השאר.",
      "recapHtml": "מקום קבוע: מסדרים את השאר."
     },
     {
      "id": "C02-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,2,\\dots,7\\}$ מתחילות במספר אי-זוגי ומסתיימות במספר זוגי?",
       "answer": 1440,
       "tol": 0,
       "explain": "אי-זוגיים: $1,3,5,7$ (4 אפשרויות) לראשון. זוגיים: $2,4,6$ (3 אפשרויות) לאחרון. החמישה שבאמצע: $5!$. סך הכל $4\\cdot3\\cdot120=1440$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,\\dots,7\\}</annotation></semantics></math></span> מתחילות במספר אי-זוגי ומסתיימות במספר זוגי?",
       "explainHtml": "אי-זוגיים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">1,3,5,7</annotation></semantics></math></span> (4 אפשרויות) לראשון. זוגיים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">2,4,6</annotation></semantics></math></span> (3 אפשרויות) לאחרון. החמישה שבאמצע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">5!</annotation></semantics></math></span>. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>⋅</mo><mn>120</mn><mo>=</mo><mn>1440</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot3\\cdot120=1440</annotation></semantics></math></span>."
      },
      "recap": "ממלאים קודם את שני הקצוות, אחר כך את האמצע.",
      "recapHtml": "ממלאים קודם את שני הקצוות, אחר כך את האמצע."
     },
     {
      "id": "C02-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה סדרות באורך 7 אפשר ליצור כך שבארבעת המקומות הראשונים מופיעות האותיות $a,b,c,d$ (כל אחת פעם אחת, בסדר כלשהו), ובשלושת האחרונים $x,y,z$ (כל אחת פעם אחת, בסדר כלשהו)?",
       "answer": 144,
       "tol": 0,
       "explain": "$4!\\cdot3!=24\\cdot6=144$. שני החלקים בלתי תלויים, ולכן מכפילים.",
       "promptHtml": "כמה סדרות באורך 7 אפשר ליצור כך שבארבעת המקומות הראשונים מופיעות האותיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">a,b,c,d</annotation></semantics></math></span> (כל אחת פעם אחת, בסדר כלשהו), ובשלושת האחרונים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo separator=\"true\">,</mo><mi>y</mi><mo separator=\"true\">,</mo><mi>z</mi></mrow><annotation encoding=\"application/x-tex\">x,y,z</annotation></semantics></math></span> (כל אחת פעם אחת, בסדר כלשהו)?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mn>3</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn><mo>⋅</mo><mn>6</mn><mo>=</mo><mn>144</mn></mrow><annotation encoding=\"application/x-tex\">4!\\cdot3!=24\\cdot6=144</annotation></semantics></math></span>. שני החלקים בלתי תלויים, ולכן מכפילים."
      },
      "recap": "חלקים בלתי תלויים: מכפילים את מספרי הסידורים.",
      "recapHtml": "חלקים בלתי תלויים: מכפילים את מספרי הסידורים."
     },
     {
      "id": "C02-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה חליפות בגודל 4 מתוך $\\{1,2,3,4,5,6\\}$ מכילות את המספר 1 ?",
       "answer": 240,
       "tol": 0,
       "explain": "4 מקומות אפשריים ל-1, ואת 3 המקומות הנותרים ממלאים בחליפה מתוך $\\{2,\\dots,6\\}$: $P(5,3)=60$. סך הכל $4\\cdot60=240$.",
       "promptHtml": "כמה חליפות בגודל 4 מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6\\}</annotation></semantics></math></span> מכילות את המספר 1 ?",
       "explainHtml": "4 מקומות אפשריים ל-1, ואת 3 המקומות הנותרים ממלאים בחליפה מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{2,\\dots,6\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">P(5,3)=60</annotation></semantics></math></span>. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>60</mn><mo>=</mo><mn>240</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot60=240</annotation></semantics></math></span>."
      },
      "recap": "איבר חובה בחליפה: $k\\cdot P(n-1,k-1)$.",
      "recapHtml": "איבר חובה בחליפה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>⋅</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">k\\cdot P(n-1,k-1)</annotation></semantics></math></span>."
     },
     {
      "id": "C02-Q5",
      "question": "כמה חליפות בגודל 3 מתוך $\\{1,2,3,4,5\\}$ מכילות את המספר 1 ?",
      "options": [
       {
        "id": "a",
        "value": "60",
        "type": "text",
        "html": "60"
       },
       {
        "id": "b",
        "value": "12",
        "type": "text",
        "html": "12"
       },
       {
        "id": "c",
        "value": "36",
        "type": "text",
        "html": "36"
       },
       {
        "id": "d",
        "value": "24",
        "type": "text",
        "html": "24"
       }
      ],
      "correctId": "c",
      "explanation": "3 מקומות ל-1, ואת שני האחרים ממלאים ב-$P(4,2)=12$: $3\\cdot12=36$. התשובה 60 היא $P(5,3)$, כל החליפות, בלי התנאי. התשובה 12 שוכחת לבחור מקום ל-1. התשובה 24 היא $P(4,3)$, חליפות שאינן מכילות את 1 בכלל.",
      "recap": "בוחרים מקום לאיבר החובה ואז ממלאים את היתר.",
      "questionHtml": "כמה חליפות בגודל 3 מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5\\}</annotation></semantics></math></span> מכילות את המספר 1 ?",
      "explanationHtml": "3 מקומות ל-1, ואת שני האחרים ממלאים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">P(4,2)=12</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>12</mn><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot12=36</annotation></semantics></math></span>. התשובה 60 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(5,3)</annotation></semantics></math></span>, כל החליפות, בלי התנאי. התשובה 12 שוכחת לבחור מקום ל-1. התשובה 24 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(4,3)</annotation></semantics></math></span>, חליפות שאינן מכילות את 1 בכלל.",
      "recapHtml": "בוחרים מקום לאיבר החובה ואז ממלאים את היתר."
     },
     {
      "bankId": "25B-B-Q5a",
      "recap": "$5\\cdot P(7,4)=4200$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>4200</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot P(7,4)=4200</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🧱",
    "title": "סמיכות: הדבקה לבלוק",
    "goal": "לספור תמורות שבהן איברים מסוימים צמודים, ותמורות שבהן איבר אחד לפני אחר.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>איברים נמצאים <b>בסמיכות</b> אם הם צמודים זה לזה בתמורה (אין איבר ביניהם). כדי לספור, \"מדביקים\" אותם ל<b>בלוק</b> אחד.</p>\n<div class=\"lesson-rule\">🔑 <b>מתכון הבלוק:</b> (1) מדביקים כל קבוצה שחייבת להיות צמודה לאובייקט אחד. (2) סופרים תמורות של האובייקטים (הבלוקים והבודדים). (3) מכפילים בסידורים הפנימיים של כל בלוק.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5\\}</annotation></semantics></math></span> שבהן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> צמודים. הבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2\\}</annotation></semantics></math></span> ועוד שלושת האיברים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">3,4,5</annotation></semantics></math></span> הם 4 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">4!</annotation></semantics></math></span> סידורים. בתוך הבלוק אפשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">21</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> סידורים. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot4!=48</annotation></semantics></math></span>.</div>\n<p>שני בלוקים: מכפילים בסידורים הפנימיים של <b>כל</b> בלוק. תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> שבהן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> צמודים וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5,6</annotation></semantics></math></span> צמודים: האובייקטים הם שני הבלוקים ועוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>, כלומר 4 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>96</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot2\\cdot4!=96</annotation></semantics></math></span>.</p>\n<div class=\"lesson-trap\">⚠️ בלוק של שלושה איברים הוא בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3!=6</annotation></semantics></math></span> סידורים פנימיים, לא 3 ולא 2.</div>\n<h3>\"x לפני y\"</h3>\n<p>בתמורות של קבוצה, מחצית מהתמורות מציבות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> לפני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> ומחצית אחרי (מחליפים בין מקומותיהם ומקבלים התאמה חד-חד-ערכית). לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> לפני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n!}{2}</annotation></semantics></math></span> תמורות.</p>\n<p>כשהתנאי בא <b>עם סמיכות</b>, מקבעים את הסדר בתוך הבלוק. למשל \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> צמודים, ו-1 לפני 2 ולפני 3\": בבלוק 1 הוא הראשון, ואחריו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">2,3</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3,2</annotation></semantics></math></span>. יש 2 סידורים פנימיים אפשריים (לא 6), ואז מכפילים ב-2 ובתמורות של האובייקטים.</p>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,2,3,4,5,6\\}$ מכילות את $1,2$ בסמיכות?",
       "answer": 240,
       "tol": 0,
       "explain": "הבלוק $\\{1,2\\}$ ועוד 4 איברים הם 5 אובייקטים: $5!=120$. סידורים פנימיים: 2. סך הכל $240$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5,6\\}</annotation></semantics></math></span> מכילות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> בסמיכות?",
       "explainHtml": "הבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2\\}</annotation></semantics></math></span> ועוד 4 איברים הם 5 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. סידורים פנימיים: 2. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>240</mn></mrow><annotation encoding=\"application/x-tex\">240</annotation></semantics></math></span>."
      },
      "recap": "בלוק של שניים: $2\\cdot(n-1)!$.",
      "recapHtml": "בלוק של שניים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">2\\cdot(n-1)!</annotation></semantics></math></span>."
     },
     {
      "id": "C03-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,2,\\dots,7\\}$ מכילות את $1,2,3$ בסמיכות (בסדר כלשהו)?",
       "answer": 720,
       "tol": 0,
       "explain": "בלוק אחד ועוד 4 איברים הם 5 אובייקטים: $5!=120$. סידורים פנימיים של הבלוק: $3!=6$. סך הכל $720$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,\\dots,7\\}</annotation></semantics></math></span> מכילות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> בסמיכות (בסדר כלשהו)?",
       "explainHtml": "בלוק אחד ועוד 4 איברים הם 5 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. סידורים פנימיים של הבלוק: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3!=6</annotation></semantics></math></span>. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>720</mn></mrow><annotation encoding=\"application/x-tex\">720</annotation></semantics></math></span>."
      },
      "recap": "בלוק של $m$ איברים: $m!\\cdot(n-m+1)!$.",
      "recapHtml": "בלוק של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> איברים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo stretchy=\"false\">!</mo><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">m!\\cdot(n-m+1)!</annotation></semantics></math></span>."
     },
     {
      "id": "C03-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,\\dots,6\\}$ מכילות את $1,2$ בסמיכות וגם את $5,6$ בסמיכות?",
       "answer": 96,
       "tol": 0,
       "explain": "4 אובייקטים (שני בלוקים, $3$ ו-$4$): $4!=24$, ולכל בלוק 2 סידורים פנימיים: $24\\cdot2\\cdot2=96$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> מכילות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> בסמיכות וגם את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5,6</annotation></semantics></math></span> בסמיכות?",
       "explainHtml": "4 אובייקטים (שני בלוקים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span>, ולכל בלוק 2 סידורים פנימיים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>24</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>96</mn></mrow><annotation encoding=\"application/x-tex\">24\\cdot2\\cdot2=96</annotation></semantics></math></span>."
      },
      "recap": "שני בלוקים: מכפילים בסידורים הפנימיים של כל אחד.",
      "recapHtml": "שני בלוקים: מכפילים בסידורים הפנימיים של כל אחד."
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "numeric",
       "prompt": "בכמה תמורות של $\\{1,\\dots,6\\}$ המספר 1 נמצא (במקום כלשהו) לפני המספר 2 ?",
       "answer": 360,
       "tol": 0,
       "explain": "סימטריה: בדיוק מחצית מ-$6!$ התמורות מציבות 1 לפני 2. $\\frac{720}{2}=360$.",
       "promptHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> המספר 1 נמצא (במקום כלשהו) לפני המספר 2 ?",
       "explainHtml": "סימטריה: בדיוק מחצית מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">6!</annotation></semantics></math></span> התמורות מציבות 1 לפני 2. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>720</mn><mn>2</mn></mfrac><mo>=</mo><mn>360</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{720}{2}=360</annotation></semantics></math></span>."
      },
      "recap": "$x$ לפני $y$ בלי עוד תנאי: חצי מהתמורות.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> לפני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> בלי עוד תנאי: חצי מהתמורות."
     },
     {
      "id": "C03-Q5",
      "step": {
       "type": "numeric",
       "prompt": "בכמה תמורות של $\\{1,\\dots,6\\}$ המספרים $1,2,3$ בסמיכות, והמספר 1 נמצא לפני 2 וגם לפני 3 ?",
       "answer": 48,
       "tol": 0,
       "explain": "הבלוק מתחיל ב-1: $123$ או $132$, כלומר 2 סידורים פנימיים. הבלוק ועוד $4,5,6$ הם 4 אובייקטים: $4!=24$. סך הכל $2\\cdot24=48$.",
       "promptHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> המספרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> בסמיכות, והמספר 1 נמצא לפני 2 וגם לפני 3 ?",
       "explainHtml": "הבלוק מתחיל ב-1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>123</mn></mrow><annotation encoding=\"application/x-tex\">123</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>132</mn></mrow><annotation encoding=\"application/x-tex\">132</annotation></semantics></math></span>, כלומר 2 סידורים פנימיים. הבלוק ועוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">4,5,6</annotation></semantics></math></span> הם 4 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span>. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>24</mn><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot24=48</annotation></semantics></math></span>."
      },
      "recap": "סדר קבוע בתוך הבלוק מצמצם את הסידורים הפנימיים.",
      "recapHtml": "סדר קבוע בתוך הבלוק מצמצם את הסידורים הפנימיים."
     },
     {
      "id": "C03-Q6",
      "question": "8 אנשים עומדים בשורה. בכמה דרכים אפשר לסדר אותם כך שדן ואלי עומדים זה ליד זה?",
      "options": [
       {
        "id": "a",
        "value": "5040",
        "type": "text",
        "html": "5040"
       },
       {
        "id": "b",
        "value": "40320",
        "type": "text",
        "html": "40320"
       },
       {
        "id": "c",
        "value": "20160",
        "type": "text",
        "html": "20160"
       },
       {
        "id": "d",
        "value": "10080",
        "type": "text",
        "html": "10080"
       }
      ],
      "correctId": "d",
      "explanation": "בלוק (דן ואלי) ועוד 6 אנשים הם 7 אובייקטים: $7!=5040$, ולבלוק 2 סידורים פנימיים: $2\\cdot5040=10080$. התשובה 5040 שוכחת את הסדר הפנימי. התשובה 40320 היא $8!$ בלי התנאי. התשובה 20160 היא $\\frac{8!}{2}$, מספר הסידורים שבהם דן לפני אלי (בלי דרישת סמיכות).",
      "recap": "סמיכות: מדביקים, סופרים, ומכפילים ב-$2$ על כל זוג.",
      "questionHtml": "8 אנשים עומדים בשורה. בכמה דרכים אפשר לסדר אותם כך שדן ואלי עומדים זה ליד זה?",
      "explanationHtml": "בלוק (דן ואלי) ועוד 6 אנשים הם 7 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>5040</mn></mrow><annotation encoding=\"application/x-tex\">7!=5040</annotation></semantics></math></span>, ולבלוק 2 סידורים פנימיים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>5040</mn><mo>=</mo><mn>10080</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot5040=10080</annotation></semantics></math></span>. התשובה 5040 שוכחת את הסדר הפנימי. התשובה 40320 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">8!</annotation></semantics></math></span> בלי התנאי. התשובה 20160 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mn>8</mn><mo stretchy=\"false\">!</mo></mrow><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{8!}{2}</annotation></semantics></math></span>, מספר הסידורים שבהם דן לפני אלי (בלי דרישת סמיכות).",
      "recapHtml": "סמיכות: מדביקים, סופרים, ומכפילים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> על כל זוג."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔄",
    "title": "משלים: \"לא מופיע\" ו\"לא תמורה\"",
    "goal": "לספור את מה שלא רוצים ולהחסיר מהכל, כולל מקרה של תנאי אחד בלי תנאי שני.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>לפעמים קל לספור את הסידורים ה<b>אסורים</b> ולהחסיר אותם מכלל הסידורים.</p>\n<div class=\"lesson-rule\">🔑 <b>עקרון המשלים:</b> מספר האיברים שאינם בקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> (בתוך מרחב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>U</mi></mrow><annotation encoding=\"application/x-tex\">U</annotation></semantics></math></span>) הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|U|-|A|</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>e</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c,d,e\\}</annotation></semantics></math></span> <b>לא</b> מופיע הרצף \"ab\" (a מיד לפני b)? בסך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. התמורות שבהן \"ab\" מופיע: מדביקים לבלוק אחד קבוע (סדר פנימי אחד בלבד), ו-4 אובייקטים נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>120</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>96</mn></mrow><annotation encoding=\"application/x-tex\">120-24=96</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ \"הרצף ab\" פירושו a מיד לפני b, בסדר הזה בלבד, ולכן לבלוק אין סידור פנימי נוסף. לעומת זאת \"a ו-b בסמיכות\" כולל גם את הסדר \"ba\", והבלוק הוא בעל 2 סידורים.</div>\n<h3>סדרות שאינן תמורות</h3>\n<p>סדרות באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים, עם חזרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^n</annotation></semantics></math></span>. מהן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span> הן תמורות. לכן מספר הסדרות שאינן תמורות הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>n</mi></msup><mo>−</mo><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n^n-n!</annotation></semantics></math></span>.</p>\n<h3>\"לפחות אחד\"</h3>\n<p>סדרות באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> סימנים שיש בהן לפחות הופעה אחת של סימן מסוים: משלים של \"הסימן אינו מופיע בכלל\", כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>m</mi><mi>k</mi></msup><mo>−</mo><mo stretchy=\"false\">(</mo><mi>m</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">m^k-(m-1)^k</annotation></semantics></math></span>.</p>\n<h3>תנאי אחד אך לא השני</h3>\n<p>אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⊆</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">B\\subseteq A</annotation></semantics></math></span> (כל מה שמקיים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> מקיים גם את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>), אז מספר האיברים שמקיימים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> אך לא את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|-|B|</annotation></semantics></math></span>.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> בתמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5\\}</annotation></semantics></math></span>, ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הקבוצה \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> צמודים\" (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">48</annotation></semantics></math></span> תמורות) וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> צמודים וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span> צמודים\" (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot2\\cdot3!=24</annotation></semantics></math></span>). הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> מוכלת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>, ולכן \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> צמודים אך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span> לא\" הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>48</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">48-24=24</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "step": {
       "type": "numeric",
       "prompt": "בכמה תמורות של $\\{a,b,c,d,e,f\\}$ **לא** מופיע הרצף \"ab\" ($a$ מיד לפני $b$)?",
       "answer": 600,
       "tol": 0,
       "explain": "כל התמורות: $6!=720$. אלה שבהן \"ab\" מופיע: בלוק אחד (בסדר פנימי קבוע) ועוד 4 איברים, 5 אובייקטים: $5!=120$. התשובה $720-120=600$.",
       "promptHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>e</mi><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c,d,e,f\\}</annotation></semantics></math></span> <strong>לא</strong> מופיע הרצף \"ab\" (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> מיד לפני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span>)?",
       "explainHtml": "כל התמורות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>720</mn></mrow><annotation encoding=\"application/x-tex\">6!=720</annotation></semantics></math></span>. אלה שבהן \"ab\" מופיע: בלוק אחד (בסדר פנימי קבוע) ועוד 4 איברים, 5 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>720</mn><mo>−</mo><mn>120</mn><mo>=</mo><mn>600</mn></mrow><annotation encoding=\"application/x-tex\">720-120=600</annotation></semantics></math></span>."
      },
      "recap": "הרצף האסור הוא בלוק בסדר קבוע: מחסירים $(n-1)!$.",
      "recapHtml": "הרצף האסור הוא בלוק בסדר קבוע: מחסירים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">(n-1)!</annotation></semantics></math></span>."
     },
     {
      "id": "C04-Q2",
      "step": {
       "type": "numeric",
       "prompt": "בכמה תמורות של $\\{1,\\dots,6\\}$ **לא** מופיע הרצף \"123\" ?",
       "answer": 696,
       "tol": 0,
       "explain": "$6!=720$. עם \"123\": בלוק ועוד $4,5,6$, כלומר $4!=24$. התשובה $720-24=696$.",
       "promptHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> <strong>לא</strong> מופיע הרצף \"123\" ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>720</mn></mrow><annotation encoding=\"application/x-tex\">6!=720</annotation></semantics></math></span>. עם \"123\": בלוק ועוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">4,5,6</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>720</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>696</mn></mrow><annotation encoding=\"application/x-tex\">720-24=696</annotation></semantics></math></span>."
      },
      "recap": "רצף של $m$ איברים בסדר קבוע: מחסירים $(n-m+1)!$.",
      "recapHtml": "רצף של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> איברים בסדר קבוע: מחסירים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">(n-m+1)!</annotation></semantics></math></span>."
     },
     {
      "id": "C04-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה סדרות באורך 5 מאיברי הקבוצה $\\{1,2,3,4,5\\}$ (חזרות מותרות) **אינן** תמורות?",
       "answer": 3005,
       "tol": 0,
       "explain": "כל הסדרות: $5^5=3125$. מתוכן תמורות: $5!=120$. התשובה $3125-120=3005$.",
       "promptHtml": "כמה סדרות באורך 5 מאיברי הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5\\}</annotation></semantics></math></span> (חזרות מותרות) <strong>אינן</strong> תמורות?",
       "explainHtml": "כל הסדרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>5</mn><mn>5</mn></msup><mo>=</mo><mn>3125</mn></mrow><annotation encoding=\"application/x-tex\">5^5=3125</annotation></semantics></math></span>. מתוכן תמורות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3125</mn><mo>−</mo><mn>120</mn><mo>=</mo><mn>3005</mn></mrow><annotation encoding=\"application/x-tex\">3125-120=3005</annotation></semantics></math></span>."
      },
      "recap": "לא תמורה: $n^n-n!$.",
      "recapHtml": "לא תמורה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>n</mi></msup><mo>−</mo><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n^n-n!</annotation></semantics></math></span>."
     },
     {
      "id": "C04-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה סדרות באורך 4 מהאותיות $a,b,c$ (חזרות מותרות) מכילות את האות $a$ לפחות פעם אחת?",
       "answer": 65,
       "tol": 0,
       "explain": "כל הסדרות: $3^4=81$. סדרות בלי $a$ בכלל: $2^4=16$. התשובה $81-16=65$.",
       "promptHtml": "כמה סדרות באורך 4 מהאותיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">a,b,c</annotation></semantics></math></span> (חזרות מותרות) מכילות את האות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> לפחות פעם אחת?",
       "explainHtml": "כל הסדרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>4</mn></msup><mo>=</mo><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">3^4=81</annotation></semantics></math></span>. סדרות בלי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> בכלל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">2^4=16</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>81</mn><mo>−</mo><mn>16</mn><mo>=</mo><mn>65</mn></mrow><annotation encoding=\"application/x-tex\">81-16=65</annotation></semantics></math></span>."
      },
      "recap": "לפחות אחד: הכל פחות \"אף אחד\".",
      "recapHtml": "לפחות אחד: הכל פחות \"אף אחד\"."
     },
     {
      "id": "C04-Q5",
      "question": "בכמה תמורות של $\\{1,2,3,4,5\\}$ המספרים 1 ו-2 **אינם** בסמיכות?",
      "options": [
       {
        "id": "a",
        "value": "48",
        "type": "text",
        "html": "48"
       },
       {
        "id": "b",
        "value": "72",
        "type": "text",
        "html": "72"
       },
       {
        "id": "c",
        "value": "96",
        "type": "text",
        "html": "96"
       },
       {
        "id": "d",
        "value": "24",
        "type": "text",
        "html": "24"
       }
      ],
      "correctId": "b",
      "explanation": "כל התמורות: $120$. בסמיכות: $2\\cdot4!=48$. אינם בסמיכות: $120-48=72$. התשובה 48 היא מספר התמורות שבהן הם דווקא בסמיכות. התשובה 96 סופרת את הסדר הפנימי פעמיים ($2\\cdot2\\cdot4!$). התשובה 24 היא $4!$ בלבד.",
      "recap": "\"לא בסמיכות\": כל התמורות פחות תמורות עם סמיכות.",
      "questionHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4,5\\}</annotation></semantics></math></span> המספרים 1 ו-2 <strong>אינם</strong> בסמיכות?",
      "explanationHtml": "כל התמורות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">120</annotation></semantics></math></span>. בסמיכות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot4!=48</annotation></semantics></math></span>. אינם בסמיכות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>120</mn><mo>−</mo><mn>48</mn><mo>=</mo><mn>72</mn></mrow><annotation encoding=\"application/x-tex\">120-48=72</annotation></semantics></math></span>. התשובה 48 היא מספר התמורות שבהן הם דווקא בסמיכות. התשובה 96 סופרת את הסדר הפנימי פעמיים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">2\\cdot2\\cdot4!</annotation></semantics></math></span>). התשובה 24 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">4!</annotation></semantics></math></span> בלבד.",
      "recapHtml": "\"לא בסמיכות\": כל התמורות פחות תמורות עם סמיכות."
     },
     {
      "id": "C04-Q6",
      "step": {
       "type": "numeric",
       "prompt": "בכמה תמורות של $\\{1,\\dots,6\\}$ המספרים $1,2,3$ נמצאים בסמיכות (בסדר כלשהו) אך **לא** בסדר \"123\" ?",
       "answer": 120,
       "tol": 0,
       "explain": "בסמיכות בסדר כלשהו: $3!\\cdot4!=144$. מתוכן בסדר \"123\" בדיוק: $4!=24$ (תנאי \"123\" מוכל בתנאי הסמיכות). התשובה $144-24=120$.",
       "promptHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> המספרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> נמצאים בסמיכות (בסדר כלשהו) אך <strong>לא</strong> בסדר \"123\" ?",
       "explainHtml": "בסמיכות בסדר כלשהו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>144</mn></mrow><annotation encoding=\"application/x-tex\">3!\\cdot4!=144</annotation></semantics></math></span>. מתוכן בסדר \"123\" בדיוק: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span> (תנאי \"123\" מוכל בתנאי הסמיכות). התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>144</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">144-24=120</annotation></semantics></math></span>."
      },
      "recap": "$B\\subseteq A$: \"A אך לא B\" הוא $|A|-|B|$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⊆</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">B\\subseteq A</annotation></semantics></math></span>: \"A אך לא B\" הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|-|B|</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "⚖️",
    "title": "הכלה והדחה",
    "goal": "לספור איחוד של תנאים: \"לפחות אחד מהם\" או \"אף אחד מהם\", בשתיים ובשלוש קבוצות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>המילים <b>\"או\"</b>, <b>\"לפחות אחד\"</b> ו<b>\"אף אחד\"</b> הן הסימן לעקרון ההכלה וההדחה. אם סוכמים סתם את גדלי הקבוצות סופרים פעמיים את מה שנמצא בשתיהן.</p>\n<div class=\"lesson-rule\">🔑 <b>שתי קבוצות:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∪</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A\\cup B|=|A|+|B|-|A\\cap B|</annotation></semantics></math></span>.</div>\n<div class=\"lesson-rule\">🔑 <b>שלוש קבוצות:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∪</mo><mi>B</mi><mo>∪</mo><mi>C</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>C</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>C</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mo>∩</mo><mi>C</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mo>∩</mo><mi>C</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|</annotation></semantics></math></span>. חיתוכים בגודל אי-זוגי מוספים וחיתוכים בגודל זוגי מחסירים.</div>\n<p><b>\"אף אחד מהתנאים\"</b> הוא המשלים של האיחוד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>U</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∪</mo><mo>⋯</mo><mo>∪</mo><msub><mi>A</mi><mi>k</mi></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|U|-|A_1\\cup\\dots\\cup A_k|</annotation></semantics></math></span>.</p>\n<h3>מתכון</h3>\n<ol>\n<li>מגדירים קבוצה לכל תנאי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>A</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">A_i</annotation></semantics></math></span> = \"התנאי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> מתקיים\".</li>\n<li>מחשבים כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mi>i</mi></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A_i|</annotation></semantics></math></span> ואחר כך כל חיתוך (חיתוך = כל התנאים יחד).</li>\n<li>מציבים בנוסחה.</li>\n</ol>\n<div class=\"lesson-ex\"><b>תמורות עם סמיכות.</b> בתמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> נגדיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> = \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> צמודים\" ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> = \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">4,5</annotation></semantics></math></span> צמודים\". אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">|A|=|B|=2\\cdot4!=48</annotation></semantics></math></span>. החיתוך הוא שני בלוקים ועוד האיבר 3: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">3!\\cdot2\\cdot2=24</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∪</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>48</mn><mo>+</mo><mn>48</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>72</mn></mrow><annotation encoding=\"application/x-tex\">|A\\cup B|=48+48-24=72</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ את החיתוך מחשבים מחדש בכל פעם: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">|A\\cap B|=3!\\cdot2\\cdot2</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">4!</annotation></semantics></math></span>.</div>\n<h3>תתי-קבוצות</h3>\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nk</annotation></semantics></math></span> הוא מספר תתי-הקבוצות בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> של קבוצה בת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים (בלי סדר). כדי לספור תתי-קבוצות בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> שמכילות איברים קבועים, כוללים אותם ובוחרים את השאר: למשל תתי-קבוצות בגודל 4 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> המכילות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span>: בוחרים עוד 2 איברים מ-4 הנותרים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">\\binom42=6</annotation></semantics></math></span>.</p>\n<h3>כפולות</h3>\n<p>מספר הכפולות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mi>N</mi><mi mathvariant=\"normal\">/</mi><mi>d</mi><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor N/d\\rfloor</annotation></semantics></math></span>. מספר שמתחלק ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וגם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> מתחלק ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mi mathvariant=\"normal\">l</mi><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">m</mi></mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\mathrm{lcm}(a,b)</annotation></semantics></math></span>. למשל בין 1 ל-100: מתחלקים ב-4: 25, ב-6: 16, בשניהם (ב-12): 8. לכן ב-4 או ב-6: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mo>+</mo><mn>16</mn><mo>−</mo><mn>8</mn><mo>=</mo><mn>33</mn></mrow><annotation encoding=\"application/x-tex\">25+16-8=33</annotation></semantics></math></span>.</p>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "אם $|A|=30$, $|B|=25$ ו-$|A\\cap B|=10$, מהו $|A\\cup B|$ ?",
       "answer": 45,
       "tol": 0,
       "explain": "$30+25-10=45$.",
       "promptHtml": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>30</mn></mrow><annotation encoding=\"application/x-tex\">|A|=30</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">|B|=25</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">|A\\cap B|=10</annotation></semantics></math></span>, מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∪</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A\\cup B|</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>30</mn><mo>+</mo><mn>25</mn><mo>−</mo><mn>10</mn><mo>=</mo><mn>45</mn></mrow><annotation encoding=\"application/x-tex\">30+25-10=45</annotation></semantics></math></span>."
      },
      "recap": "$|A\\cup B|=|A|+|B|-|A\\cap B|$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∪</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A\\cup B|=|A|+|B|-|A\\cap B|</annotation></semantics></math></span>."
     },
     {
      "id": "C05-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה מספרים בין 1 ל-100 מתחלקים ב-2 או ב-3 (או בשניהם)?",
       "answer": 67,
       "tol": 0,
       "explain": "מתחלקים ב-2: 50, ב-3: 33, בשניהם (ב-6): 16. $50+33-16=67$.",
       "promptHtml": "כמה מספרים בין 1 ל-100 מתחלקים ב-2 או ב-3 (או בשניהם)?",
       "explainHtml": "מתחלקים ב-2: 50, ב-3: 33, בשניהם (ב-6): 16. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mo>+</mo><mn>33</mn><mo>−</mo><mn>16</mn><mo>=</mo><mn>67</mn></mrow><annotation encoding=\"application/x-tex\">50+33-16=67</annotation></semantics></math></span>."
      },
      "recap": "חיתוך כפולות: הכפולות של ה-lcm.",
      "recapHtml": "חיתוך כפולות: הכפולות של ה-lcm."
     },
     {
      "id": "C05-Q3",
      "step": {
       "type": "numeric",
       "prompt": "בכמה תמורות של $\\{1,\\dots,6\\}$ המספרים $1,2$ בסמיכות **או** המספרים $3,4$ בסמיכות?",
       "answer": 384,
       "tol": 0,
       "explain": "כל אחד מהתנאים לבד: $2\\cdot5!=240$. שניהם יחד: שני בלוקים ועוד שני איברים, $2\\cdot2\\cdot4!=96$. $240+240-96=384$.",
       "promptHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> המספרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> בסמיכות <strong>או</strong> המספרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span> בסמיכות?",
       "explainHtml": "כל אחד מהתנאים לבד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>240</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot5!=240</annotation></semantics></math></span>. שניהם יחד: שני בלוקים ועוד שני איברים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>96</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot2\\cdot4!=96</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>240</mn><mo>+</mo><mn>240</mn><mo>−</mo><mn>96</mn><mo>=</mo><mn>384</mn></mrow><annotation encoding=\"application/x-tex\">240+240-96=384</annotation></semantics></math></span>."
      },
      "recap": "איחוד: סכום הבודדים פחות החיתוך.",
      "recapHtml": "איחוד: סכום הבודדים פחות החיתוך."
     },
     {
      "id": "C05-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה תתי-קבוצות בגודל 4 של $\\{1,\\dots,7\\}$ מכילות את $1,2$ **או** מכילות את $6,7$ ?",
       "answer": 19,
       "tol": 0,
       "explain": "מכילות $1,2$: בוחרים עוד 2 מ-5 הנותרים, $\\binom52=10$. כך גם עבור $6,7$: 10. שניהם: תת-הקבוצה $\\{1,2,6,7\\}$ בלבד, 1. $10+10-1=19$.",
       "promptHtml": "כמה תתי-קבוצות בגודל 4 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,7\\}</annotation></semantics></math></span> מכילות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> <strong>או</strong> מכילות את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">6,7</annotation></semantics></math></span> ?",
       "explainHtml": "מכילות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span>: בוחרים עוד 2 מ-5 הנותרים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>5</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">\\binom52=10</annotation></semantics></math></span>. כך גם עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">6,7</annotation></semantics></math></span>: 10. שניהם: תת-הקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,6,7\\}</annotation></semantics></math></span> בלבד, 1. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>+</mo><mn>10</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>19</mn></mrow><annotation encoding=\"application/x-tex\">10+10-1=19</annotation></semantics></math></span>."
      },
      "recap": "תת-קבוצה שמכילה קבוצה קבועה: בוחרים רק את השאר.",
      "recapHtml": "תת-קבוצה שמכילה קבוצה קבועה: בוחרים רק את השאר."
     },
     {
      "id": "C05-Q5",
      "question": "בכמה תמורות של $\\{1,\\dots,6\\}$ **לא** נמצאים $1,2$ בסמיכות **וגם לא** נמצאים $3,4$ בסמיכות?",
      "options": [
       {
        "id": "a",
        "value": "384",
        "type": "text",
        "html": "384"
       },
       {
        "id": "b",
        "value": "336",
        "type": "text",
        "html": "336"
       },
       {
        "id": "c",
        "value": "480",
        "type": "text",
        "html": "480"
       },
       {
        "id": "d",
        "value": "240",
        "type": "text",
        "html": "240"
       }
      ],
      "correctId": "b",
      "explanation": "\"אף אחד מהתנאים\" הוא המשלים של האיחוד. האיחוד הוא $240+240-96=384$, ולכן התשובה $720-384=336$. התשובה 384 היא האיחוד עצמו. התשובה 480 חיברה את הקבוצות בלי להחסיר את החיתוך. התשובה 240 היא קבוצה אחת בלבד.",
      "recap": "\"אף אחד\": הכל פחות האיחוד.",
      "questionHtml": "בכמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> <strong>לא</strong> נמצאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> בסמיכות <strong>וגם לא</strong> נמצאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span> בסמיכות?",
      "explanationHtml": "\"אף אחד מהתנאים\" הוא המשלים של האיחוד. האיחוד הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>240</mn><mo>+</mo><mn>240</mn><mo>−</mo><mn>96</mn><mo>=</mo><mn>384</mn></mrow><annotation encoding=\"application/x-tex\">240+240-96=384</annotation></semantics></math></span>, ולכן התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>720</mn><mo>−</mo><mn>384</mn><mo>=</mo><mn>336</mn></mrow><annotation encoding=\"application/x-tex\">720-384=336</annotation></semantics></math></span>. התשובה 384 היא האיחוד עצמו. התשובה 480 חיברה את הקבוצות בלי להחסיר את החיתוך. התשובה 240 היא קבוצה אחת בלבד.",
      "recapHtml": "\"אף אחד\": הכל פחות האיחוד."
     },
     {
      "id": "C05-Q6",
      "step": {
       "type": "numeric",
       "prompt": "כמה מספרים בין 1 ל-100 מתחלקים ב-2, ב-3 או ב-5 (לפחות באחד מהם)?",
       "answer": 74,
       "tol": 0,
       "explain": "יחידים: $50+33+20=103$. זוגות: $\\lfloor100/6\\rfloor=16$, $\\lfloor100/10\\rfloor=10$, $\\lfloor100/15\\rfloor=6$, סכום 32. שלשה: $\\lfloor100/30\\rfloor=3$. $103-32+3=74$.",
       "promptHtml": "כמה מספרים בין 1 ל-100 מתחלקים ב-2, ב-3 או ב-5 (לפחות באחד מהם)?",
       "explainHtml": "יחידים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mo>+</mo><mn>33</mn><mo>+</mo><mn>20</mn><mo>=</mo><mn>103</mn></mrow><annotation encoding=\"application/x-tex\">50+33+20=103</annotation></semantics></math></span>. זוגות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor100/6\\rfloor=16</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>10</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor100/10\\rfloor=10</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>15</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor100/15\\rfloor=6</annotation></semantics></math></span>, סכום 32. שלשה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>30</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor100/30\\rfloor=3</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>103</mn><mo>−</mo><mn>32</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>74</mn></mrow><annotation encoding=\"application/x-tex\">103-32+3=74</annotation></semantics></math></span>."
      },
      "recap": "שלוש קבוצות: $+$ יחידים $-$ זוגות $+$ שלשה.",
      "recapHtml": "שלוש קבוצות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo></mrow><annotation encoding=\"application/x-tex\">+</annotation></semantics></math></span> יחידים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo></mrow><annotation encoding=\"application/x-tex\">-</annotation></semantics></math></span> זוגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo></mrow><annotation encoding=\"application/x-tex\">+</annotation></semantics></math></span> שלשה."
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🎲",
    "title": "תמורות אי-סדר מלא",
    "goal": "להבין מהי תמורת אי-סדר מלא ולחשב את מספרן בנוסחה ובנסיגה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>תמורה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n\\}</annotation></semantics></math></span> נכתבת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>j</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>j</mi><mi>n</mi></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(j_1,\\dots,j_n)</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>j</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">j_i</annotation></semantics></math></span> הוא האיבר שנמצא במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>. <b>נקודת שבת</b> היא מקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> שבו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>j</mi><mi>i</mi></msub><mo>=</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">j_i=i</annotation></semantics></math></span> (האיבר יושב במקומו הטבעי).</p>\n<div class=\"lesson-rule\">🔑 <b>תמורת אי-סדר מלא</b> היא תמורה בלי אף נקודת שבת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>j</mi><mi>i</mi></msub><mo mathvariant=\"normal\">≠</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">j_i\\ne i</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>. מספרן מסומן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">D_n</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=3</annotation></semantics></math></span> התמורות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,3,1)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(3,1,2)</annotation></semantics></math></span> הן אי-סדר מלא. כל אחת מארבע התמורות האחרות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span> מכילה נקודת שבת. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">D_3=2</annotation></semantics></math></span>. התמורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,3)</annotation></semantics></math></span> אינה אי-סדר מלא כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>j</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">j_3=3</annotation></semantics></math></span>.</div>\n<h3>הנוסחה</h3>\n<p><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo stretchy=\"false\">!</mo><mrow><mo fence=\"true\">(</mo><mfrac><mn>1</mn><mrow><mn>0</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mo>⋯</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup><mfrac><mn>1</mn><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">D_n=n!\\left(\\frac1{0!}-\\frac1{1!}+\\frac1{2!}-\\dots+(-1)^n\\frac1{n!}\\right)</annotation></semantics></math></span>\n(מקורה בהכלה והדחה על התנאים \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> נקודת שבת\".) למשל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>24</mn><mrow><mo fence=\"true\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>24</mn><mo>⋅</mo><mfrac><mn>9</mn><mn>24</mn></mfrac><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=24\\left(1-1+\\frac12-\\frac16+\\frac1{24}\\right)=24\\cdot\\frac{9}{24}=9</annotation></semantics></math></span>.</p>\n<h3>נסיגה וטבלה</h3>\n<p>החישוב המהיר הוא בנסיגה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D_n=(n-1)(D_{n-1}+D_{n-2})</annotation></semantics></math></span>, וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">D_n=nD_{n-1}+(-1)^n</annotation></semantics></math></span>, עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">D_1=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">D_2=1</annotation></semantics></math></span>.</p>\n<table><thead><tr><th><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead>\n<tbody><tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">D_n</annotation></semantics></math></span></td><td>0</td><td>1</td><td>2</td><td>9</td><td>44</td><td>265</td><td>1854</td><td>14833</td></tr></tbody></table>\n<div class=\"lesson-trap\">⚠️ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">D_n</annotation></semantics></math></span> אינו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><mi>e</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n!}{e}</annotation></semantics></math></span> בדיוק, אלא העיגול שלו. בבחינה מחשבים את הערך המדויק בנסיגה, לא בקירוב.</div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "step": {
       "type": "numeric",
       "prompt": "חשבו בנוסחה את $D_4$ : $4!\\left(1-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\frac1{4!}\\right)$.",
       "answer": 9,
       "tol": 0,
       "explain": "$24-24+12-4+1=9$.",
       "promptHtml": "חשבו בנוסחה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_4</annotation></semantics></math></span> : <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mrow><mo fence=\"true\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">4!\\left(1-\\frac1{1!}+\\frac1{2!}-\\frac1{3!}+\\frac1{4!}\\right)</annotation></semantics></math></span>.",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>24</mn><mo>−</mo><mn>24</mn><mo>+</mo><mn>12</mn><mo>−</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">24-24+12-4+1=9</annotation></semantics></math></span>."
      },
      "recap": "$D_4=9$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q2",
      "step": {
       "type": "numeric",
       "prompt": "נתון $D_3=2$ ו-$D_4=9$. חשבו בנסיגה $D_n=(n-1)(D_{n-1}+D_{n-2})$ את $D_5$.",
       "answer": 44,
       "tol": 0,
       "explain": "$D_5=4\\cdot(9+2)=44$.",
       "promptHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">D_3=2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span>. חשבו בנסיגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D_n=(n-1)(D_{n-1}+D_{n-2})</annotation></semantics></math></span> את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_5</annotation></semantics></math></span>.",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>5</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>9</mn><mo>+</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">D_5=4\\cdot(9+2)=44</annotation></semantics></math></span>."
      },
      "recap": "$D_n=(n-1)(D_{n-1}+D_{n-2})$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D_n=(n-1)(D_{n-1}+D_{n-2})</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,2,3,4\\}$ **אינן** אי-סדר מלא?",
       "answer": 15,
       "tol": 0,
       "explain": "כל התמורות: $4!=24$. אי-סדר מלא: $D_4=9$. התשובה $24-9=15$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> <strong>אינן</strong> אי-סדר מלא?",
       "explainHtml": "כל התמורות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span>. אי-סדר מלא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>24</mn><mo>−</mo><mn>9</mn><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">24-9=15</annotation></semantics></math></span>."
      },
      "recap": "יש לפחות נקודת שבת אחת: $n!-D_n$.",
      "recapHtml": "יש לפחות נקודת שבת אחת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo><mo>−</mo><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">n!-D_n</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q4",
      "step": {
       "type": "numeric",
       "prompt": "נתון $D_4=9$ ו-$D_5=44$. חשבו את $D_6$ .",
       "answer": 265,
       "tol": 0,
       "explain": "$D_6=5\\cdot(44+9)=265$. בדיקה בנסיגה השנייה: $6\\cdot44+1=265$.",
       "promptHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>5</mn></msub><mo>=</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">D_5=44</annotation></semantics></math></span>. חשבו את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_6</annotation></semantics></math></span> .",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>6</mn></msub><mo>=</mo><mn>5</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>44</mn><mo>+</mo><mn>9</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>265</mn></mrow><annotation encoding=\"application/x-tex\">D_6=5\\cdot(44+9)=265</annotation></semantics></math></span>. בדיקה בנסיגה השנייה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><mn>44</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>265</mn></mrow><annotation encoding=\"application/x-tex\">6\\cdot44+1=265</annotation></semantics></math></span>."
      },
      "recap": "$D_6=265$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>6</mn></msub><mo>=</mo><mn>265</mn></mrow><annotation encoding=\"application/x-tex\">D_6=265</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q5",
      "question": "איזו מהתמורות הבאות של $\\{1,2,3,4\\}$ (כתובות כ-$(j_1,j_2,j_3,j_4)$) היא תמורת אי-סדר מלא?",
      "options": [
       {
        "id": "a",
        "value": "$(2,1,3,4)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,3,4)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$(3,2,1,4)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(3,2,1,4)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$(2,1,4,3)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,4,3)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$(2,4,3,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,4,3,1)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "ב-$(2,1,4,3)$ אף איבר אינו במקומו. ב-$(2,1,3,4)$ יש נקודות שבת במקום 3 ובמקום 4. ב-$(3,2,1,4)$ יש נקודות שבת במקום 2 ובמקום 4. ב-$(2,4,3,1)$ יש נקודת שבת במקום 3.",
      "recap": "בודקים כל מקום $i$: האם $j_i=i$.",
      "questionHtml": "איזו מהתמורות הבאות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> (כתובות כ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><msub><mi>j</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>j</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>j</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>j</mi><mn>4</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(j_1,j_2,j_3,j_4)</annotation></semantics></math></span>) היא תמורת אי-סדר מלא?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,4,3)</annotation></semantics></math></span> אף איבר אינו במקומו. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,3,4)</annotation></semantics></math></span> יש נקודות שבת במקום 3 ובמקום 4. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(3,2,1,4)</annotation></semantics></math></span> יש נקודות שבת במקום 2 ובמקום 4. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,4,3,1)</annotation></semantics></math></span> יש נקודת שבת במקום 3.",
      "recapHtml": "בודקים כל מקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>: האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>j</mi><mi>i</mi></msub><mo>=</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">j_i=i</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q6",
      "step": {
       "type": "numeric",
       "prompt": "נתון $D_6=265$. חשבו בנסיגה $D_n=nD_{n-1}+(-1)^n$ את $D_7$ .",
       "answer": 1854,
       "tol": 0,
       "explain": "$D_7=7\\cdot265+(-1)^7=1855-1=1854$.",
       "promptHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>6</mn></msub><mo>=</mo><mn>265</mn></mrow><annotation encoding=\"application/x-tex\">D_6=265</annotation></semantics></math></span>. חשבו בנסיגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">D_n=nD_{n-1}+(-1)^n</annotation></semantics></math></span> את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_7</annotation></semantics></math></span> .",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>7</mn></msub><mo>=</mo><mn>7</mn><mo>⋅</mo><mn>265</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>7</mn></msup><mo>=</mo><mn>1855</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>1854</mn></mrow><annotation encoding=\"application/x-tex\">D_7=7\\cdot265+(-1)^7=1855-1=1854</annotation></semantics></math></span>."
      },
      "recap": "$D_n=nD_{n-1}+(-1)^n$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">D_n=nD_{n-1}+(-1)^n</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "📌",
    "title": "נקודות שבת וקידומת קבועה",
    "goal": "לספור תמורות עם מספר נתון של נקודות שבת, ותמורות אי-סדר מלא שבהן קבוצה קבועה יושבת בתחילת התמורה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<h3>בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi></mrow><annotation encoding=\"application/x-tex\">j</annotation></semantics></math></span> נקודות שבת</h3>\n<div class=\"lesson-rule\">🔑 מספר התמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים עם <b>בדיוק</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi></mrow><annotation encoding=\"application/x-tex\">j</annotation></semantics></math></span> נקודות שבת הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>j</mi></mfrac><mo fence=\"true\">)</mo></mrow><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mi>j</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">\\binom nj D_{n-j}</annotation></semantics></math></span> : בוחרים אילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi></mrow><annotation encoding=\"application/x-tex\">j</annotation></semantics></math></span> איברים נשארים במקומם, ואת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mi>j</mi></mrow><annotation encoding=\"application/x-tex\">n-j</annotation></semantics></math></span> האחרים מסדרים בלי אף נקודת שבת.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> עם בדיוק שלוש נקודות שבת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><msub><mi>D</mi><mn>3</mn></msub><mo>=</mo><mn>20</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">\\binom63D_3=20\\cdot2=40</annotation></semantics></math></span>.</div>\n<p><b>לפחות</b> נקודת שבת אחת: משלים של אי-סדר מלא, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo><mo>−</mo><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">n!-D_n</annotation></semantics></math></span>.</p>\n<h3>קידומת קבועה</h3>\n<p>נניח שמבקשים תמורת אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n\\}</annotation></semantics></math></span> שבה האיברים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">1,\\dots,k</annotation></semantics></math></span> נמצאים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> המקומות הראשונים. אז במקומות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">1,\\dots,k</annotation></semantics></math></span> יושבת תמורה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,k\\}</annotation></semantics></math></span>, ובמקומות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>+</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">k+1,\\dots,n</annotation></semantics></math></span> תמורה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{k+1,\\dots,n\\}</annotation></semantics></math></span>. שני החלקים בלתי תלויים, וכל אחד חייב להיות בלי נקודת שבת.</p>\n<div class=\"lesson-rule\">🔑 התשובה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>⋅</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">D_k\\cdot D_{n-k}</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> שבו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> הם בשני המקומות הראשונים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>D</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">D_2\\cdot D_3=1\\cdot2=2</annotation></semantics></math></span>. התמורות הן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,4,5,3)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(2,1,5,3,4)</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ התשובה אינה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">D_n</annotation></semantics></math></span> (כל אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים) ואינה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>k</mi></msub></mrow><annotation encoding=\"application/x-tex\">D_k</annotation></semantics></math></span> לבדו: גם הצד השני חייב להיות אי-סדר מלא, בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">n-k</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,\\dots,6\\}$ יש בדיוק שתי נקודות שבת?",
       "answer": 135,
       "tol": 0,
       "explain": "בוחרים את נקודות השבת: $\\binom62=15$. ארבעת האחרים באי-סדר מלא: $D_4=9$. $15\\cdot9=135$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> יש בדיוק שתי נקודות שבת?",
       "explainHtml": "בוחרים את נקודות השבת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">\\binom62=15</annotation></semantics></math></span>. ארבעת האחרים באי-סדר מלא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mo>⋅</mo><mn>9</mn><mo>=</mo><mn>135</mn></mrow><annotation encoding=\"application/x-tex\">15\\cdot9=135</annotation></semantics></math></span>."
      },
      "recap": "$\\binom nj D_{n-j}$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>j</mi></mfrac><mo fence=\"true\">)</mo></mrow><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mi>j</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">\\binom nj D_{n-j}</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q2",
      "question": "כמה תמורות של $\\{1,\\dots,5\\}$ יש בדיוק נקודת שבת אחת?",
      "options": [
       {
        "id": "a",
        "value": "44",
        "type": "text",
        "html": "44"
       },
       {
        "id": "b",
        "value": "120",
        "type": "text",
        "html": "120"
       },
       {
        "id": "c",
        "value": "45",
        "type": "text",
        "html": "45"
       },
       {
        "id": "d",
        "value": "24",
        "type": "text",
        "html": "24"
       }
      ],
      "correctId": "c",
      "explanation": "בוחרים את נקודת השבת ($5$ אפשרויות), והארבעה האחרים באי-סדר מלא: $5\\cdot D_4=45$. התשובה 44 היא $D_5$, תמורות בלי אף נקודת שבת. התשובה 120 היא כל התמורות. התשובה 24 היא $4!$, שמתעלמת מהדרישה שלארבעת האחרים אין נקודת שבת.",
      "recap": "נקודת שבת אחת: $nD_{n-1}$.",
      "questionHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> יש בדיוק נקודת שבת אחת?",
      "explanationHtml": "בוחרים את נקודת השבת (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> אפשרויות), והארבעה האחרים באי-סדר מלא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>45</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot D_4=45</annotation></semantics></math></span>. התשובה 44 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_5</annotation></semantics></math></span>, תמורות בלי אף נקודת שבת. התשובה 120 היא כל התמורות. התשובה 24 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">4!</annotation></semantics></math></span>, שמתעלמת מהדרישה שלארבעת האחרים אין נקודת שבת.",
      "recapHtml": "נקודת שבת אחת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">nD_{n-1}</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות של $\\{1,\\dots,5\\}$ מכילות **לפחות** נקודת שבת אחת?",
       "answer": 76,
       "tol": 0,
       "explain": "$5!-D_5=120-44=76$.",
       "promptHtml": "כמה תמורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> מכילות <strong>לפחות</strong> נקודת שבת אחת?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>−</mo><msub><mi>D</mi><mn>5</mn></msub><mo>=</mo><mn>120</mn><mo>−</mo><mn>44</mn><mo>=</mo><mn>76</mn></mrow><annotation encoding=\"application/x-tex\">5!-D_5=120-44=76</annotation></semantics></math></span>."
      },
      "recap": "לפחות אחת: $n!-D_n$.",
      "recapHtml": "לפחות אחת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo><mo>−</mo><msub><mi>D</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">n!-D_n</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות אי-סדר מלא של $\\{1,\\dots,6\\}$ יש כך ש-$1,2,3,4$ נמצאים ב-4 המקומות הראשונים?",
       "answer": 9,
       "tol": 0,
       "explain": "ארבעת הראשונים: אי-סדר מלא של $\\{1,2,3,4\\}$, $D_4=9$. שני האחרונים חייבים להיות $5,6$ באי-סדר מלא, $D_2=1$ (זה $6,5$). סך הכל $9\\cdot1=9$.",
       "promptHtml": "כמה תמורות אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,6\\}</annotation></semantics></math></span> יש כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3,4</annotation></semantics></math></span> נמצאים ב-4 המקומות הראשונים?",
       "explainHtml": "ארבעת הראשונים: אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span>. שני האחרונים חייבים להיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">5,6</annotation></semantics></math></span> באי-סדר מלא, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">D_2=1</annotation></semantics></math></span> (זה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">6,5</annotation></semantics></math></span>). סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9\\cdot1=9</annotation></semantics></math></span>."
      },
      "recap": "$D_k\\cdot D_{n-k}$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>⋅</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">D_k\\cdot D_{n-k}</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה תמורות אי-סדר מלא של $\\{1,\\dots,7\\}$ יש כך ש-$1,2$ נמצאים בשני המקומות הראשונים?",
       "answer": 44,
       "tol": 0,
       "explain": "$D_2\\cdot D_5=1\\cdot44=44$.",
       "promptHtml": "כמה תמורות אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,7\\}</annotation></semantics></math></span> יש כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> נמצאים בשני המקומות הראשונים?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>D</mi><mn>5</mn></msub><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>44</mn><mo>=</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">D_2\\cdot D_5=1\\cdot44=44</annotation></semantics></math></span>."
      },
      "recap": "שני חלקים, כל אחד אי-סדר מלא בגודל שלו.",
      "recapHtml": "שני חלקים, כל אחד אי-סדר מלא בגודל שלו."
     },
     {
      "id": "C07-Q6",
      "question": "כמה תמורות אי-סדר מלא של $\\{1,\\dots,7\\}$ יש כך ש-$1,2,3$ נמצאים בשלושת המקומות הראשונים?",
      "options": [
       {
        "id": "a",
        "value": "18",
        "type": "text",
        "html": "18"
       },
       {
        "id": "b",
        "value": "1854",
        "type": "text",
        "html": "1854"
       },
       {
        "id": "c",
        "value": "11",
        "type": "text",
        "html": "11"
       },
       {
        "id": "d",
        "value": "144",
        "type": "text",
        "html": "144"
       }
      ],
      "correctId": "a",
      "explanation": "$D_3\\cdot D_4=2\\cdot9=18$. התשובה 1854 היא $D_7$, כל תמורות אי-הסדר המלא. התשובה 11 היא סכום $D_3+D_4$ במקום מכפלה. התשובה 144 היא $3!\\cdot4!$, תמורות רגילות של שני החלקים.",
      "recap": "מכפילים, לא מחברים: $D_3\\cdot D_4$.",
      "questionHtml": "כמה תמורות אי-סדר מלא של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,7\\}</annotation></semantics></math></span> יש כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> נמצאים בשלושת המקומות הראשונים?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>3</mn></msub><mo>⋅</mo><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>9</mn><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">D_3\\cdot D_4=2\\cdot9=18</annotation></semantics></math></span>. התשובה 1854 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_7</annotation></semantics></math></span>, כל תמורות אי-הסדר המלא. התשובה 11 היא סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>3</mn></msub><mo>+</mo><msub><mi>D</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_3+D_4</annotation></semantics></math></span> במקום מכפלה. התשובה 144 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">3!\\cdot4!</annotation></semantics></math></span>, תמורות רגילות של שני החלקים.",
      "recapHtml": "מכפילים, לא מחברים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>3</mn></msub><mo>⋅</mo><msub><mi>D</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">D_3\\cdot D_4</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות מבחן שמשלבות סמיכות, הכלה והדחה ואי-סדר מלא.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>שאלות אמיתיות ממבחנים קודמים. לפני כל שאלה זהו את הכלי:</p>\n<ul>\n<li><b>\"או\" / \"לפחות אחד\"</b> בין תנאים: הכלה והדחה, וחישוב נפרד של כל חיתוך (שלב 5).</li>\n<li><b>\"בסמיכות\"</b>: בלוק וסידור פנימי. אם יש סדר קבוע (\"1 לפני 2\"), מצמצמים את הסידורים הפנימיים (שלב 3).</li>\n<li><b>\"אך לא\"</b>: מחסירים תנאי מוכל מתנאי מכיל (שלב 4).</li>\n<li><b>\"תמורת אי-סדר מלא עם קבוצה קבועה בהתחלה\"</b>: מכפילים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>⋅</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">D_k\\cdot D_{n-k}</annotation></semantics></math></span> (שלב 7).</li>\n<li><b>תתי-קבוצות</b>: אם הן מכילות איברים קבועים, בוחרים רק את השאר ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nk</annotation></semantics></math></span> (שלב 5).</li>\n</ul>\n<div class=\"lesson-rule\">🔑 השתמשו בטבלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">D_2=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">D_3=2</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D_4=9</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>5</mn></msub><mo>=</mo><mn>44</mn></mrow><annotation encoding=\"application/x-tex\">D_5=44</annotation></semantics></math></span> ובנסיגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>D</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">D_n=(n-1)(D_{n-1}+D_{n-2})</annotation></semantics></math></span>. בסוף בדקו שהתשובה קטנה מגודל המרחב.</div>\n"
    },
    "questions": [
     {
      "bankId": "24B-B-Q2a",
      "recap": "הכלה והדחה על סמיכות: $48+48-24=72$.",
      "recapHtml": "הכלה והדחה על סמיכות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>48</mn><mo>+</mo><mn>48</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>72</mn></mrow><annotation encoding=\"application/x-tex\">48+48-24=72</annotation></semantics></math></span>."
     },
     {
      "bankId": "24B-A-Q2b",
      "recap": "תתי-קבוצות עם איברים קבועים: $6+6-1=11$.",
      "recapHtml": "תתי-קבוצות עם איברים קבועים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>+</mo><mn>6</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">6+6-1=11</annotation></semantics></math></span>."
     },
     {
      "bankId": "24B-C-Q1a",
      "recap": "$96-48=48$, תנאי מוכל.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>96</mn><mo>−</mo><mn>48</mn><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">96-48=48</annotation></semantics></math></span>, תנאי מוכל."
     },
     {
      "bankId": "25B-A-Q1b",
      "recap": "בלוק עם סדר פנימי קבוע: $2\\cdot5!=240$.",
      "recapHtml": "בלוק עם סדר פנימי קבוע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>240</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot5!=240</annotation></semantics></math></span>."
     },
     {
      "bankId": "24B-A-Q2a",
      "recap": "$D_4\\cdot D_4=81$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>⋅</mo><msub><mi>D</mi><mn>4</mn></msub><mo>=</mo><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">D_4\\cdot D_4=81</annotation></semantics></math></span>."
     },
     {
      "bankId": "25B-B-Q1b",
      "recap": "$D_4\\cdot D_3=18$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>D</mi><mn>4</mn></msub><mo>⋅</mo><msub><mi>D</mi><mn>3</mn></msub><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">D_4\\cdot D_3=18</annotation></semantics></math></span>."
     }
    ]
   }
  ]
 }
};
