window.COURSES = {
 "func_count": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🧮",
    "title": "כמה פונקציות יש? כל הפונקציות, חח\"ע והפיכות",
    "goal": "לחשב כמה פונקציות יש בין שתי קבוצות סופיות, וכמה מהן חד-חד-ערכיות או הפיכות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>פונקציה</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">f:A\\to B</annotation></semantics></math></span> נותנת לכל איבר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> (התחום) בדיוק ערך אחד ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> (הטווח). נסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">|A|=m</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">|B|=n</annotation></semantics></math></span>. כדי לספור פונקציות, מחליטים איבר אחרי איבר: מה התמונה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, מה התמונה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>, וכן הלאה, וכופלים את מספר האפשרויות בכל שלב (<b>כלל המכפלה</b>).</p>\n<div class=\"lesson-rule\">🔑 מספר כל הפונקציות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^m</annotation></semantics></math></span>: לכל אחד מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> איברי התחום יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ערכים אפשריים.</div>\n<div class=\"lesson-trap\">⚠️ התחום הוא המעריך והטווח הוא הבסיס. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2\\}</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">2^3=8</annotation></semantics></math></span> פונקציות, לא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">3^2=9</annotation></semantics></math></span>.</div>\n<h3>חד-חד-ערכית (חח\"ע)</h3>\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi></mrow><annotation encoding=\"application/x-tex\">f</annotation></semantics></math></span> חח\"ע אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo mathvariant=\"normal\">≠</mo><mi>y</mi><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo mathvariant=\"normal\">≠</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">x\\ne y\\Rightarrow f(x)\\ne f(y)</annotation></semantics></math></span>: שני איברים שונים לא מקבלים אותה תמונה. סופרים ברצף: ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(1)</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אפשרויות, ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(2)</annotation></semantics></math></span> נשארו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> (אסור לחזור על ערך), וכן הלאה. לפיכך</p>\n<span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋯</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">!</mo></mrow></mfrac><mi mathvariant=\"normal\">.</mi></mrow><annotation encoding=\"application/x-tex\">P(n,m)=n(n-1)\\cdots(n-m+1)=\\frac{n!}{(n-m)!}.</annotation></semantics></math></span>\n<p>סדרה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> איברים שונים מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> נקראת <b>חליפה</b> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,m)</annotation></semantics></math></span> הוא מספר החליפות. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span> אין מספיק ערכים שונים והתשובה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>.</p>\n<div class=\"lesson-ex\">דוגמה: חח\"ע מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot4\\cdot3=P(5,3)=60</annotation></semantics></math></span>.</div>\n<h3>הפיכה (חח\"ע ועל)</h3>\n<p>כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m=n</annotation></semantics></math></span>, פונקציה חח\"ע מכסה את כל הטווח, ולכן היא הפיכה. מספרן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">P(n,n)=n!</annotation></semantics></math></span>.</p>\n<h3>\"לא\" = משלים</h3>\n<p>כשהשאלה אומרת \"כמה פונקציות <b>אינן</b> חח\"ע\", סופרים את כולן ומחסרים את החח\"ע:</p>\n<span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">.</mi></mrow><annotation encoding=\"application/x-tex\">n^m-P(n,m).</annotation></semantics></math></span>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות $f:\\{1,2,3,4\\}\\to\\{1,2,3\\}$ יש?",
       "answer": 81,
       "tol": 0,
       "explain": "לכל אחד מארבעת איברי התחום יש 3 ערכים: $3^4=81$. הערך $4^3=64$ הוא התשובה כשהתחום והטווח מתחלפים.",
       "promptHtml": "כמה פונקציות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,2,3\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "לכל אחד מארבעת איברי התחום יש 3 ערכים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>4</mn></msup><mo>=</mo><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">3^4=81</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>3</mn></msup><mo>=</mo><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">4^3=64</annotation></semantics></math></span> הוא התשובה כשהתחום והטווח מתחלפים."
      },
      "recap": "כל הפונקציות: (גודל הטווח) בחזקת (גודל התחום)",
      "recapHtml": "כל הפונקציות: (גודל הטווח) בחזקת (גודל התחום)"
     },
     {
      "id": "C01-Q2",
      "question": "כמה פונקציות חד-חד-ערכיות $f:\\{1,2,3,4\\}\\to\\{1,2,\\dots,7\\}$ יש?",
      "options": [
       {
        "id": "a",
        "value": "$7^4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>7</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">7^4</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$P(7,4)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(7,4)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$\\binom74$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom74</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$4^7$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>7</mn></msup></mrow><annotation encoding=\"application/x-tex\">4^7</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "נכון: $7\\cdot6\\cdot5\\cdot4=P(7,4)=840$. $7^4=2401$ סופר את כל הפונקציות כולל כאלה שחוזרות על ערך. $\\binom74=35$ מתעלם מהסדר, אבל כאן הסדר חשוב כי $f(1)$ ו-$f(2)$ הם איברים שונים בתחום. $4^7$ מחליף בין התחום לטווח.",
      "recap": "חח\"ע: $P(n,m)=n(n-1)\\cdots(n-m+1)$, הסדר חשוב",
      "questionHtml": "כמה פונקציות חד-חד-ערכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,2,\\dots,7\\}</annotation></semantics></math></span> יש?",
      "explanationHtml": "נכון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>840</mn></mrow><annotation encoding=\"application/x-tex\">7\\cdot6\\cdot5\\cdot4=P(7,4)=840</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>7</mn><mn>4</mn></msup><mo>=</mo><mn>2401</mn></mrow><annotation encoding=\"application/x-tex\">7^4=2401</annotation></semantics></math></span> סופר את כל הפונקציות כולל כאלה שחוזרות על ערך. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>35</mn></mrow><annotation encoding=\"application/x-tex\">\\binom74=35</annotation></semantics></math></span> מתעלם מהסדר, אבל כאן הסדר חשוב כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(1)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(2)</annotation></semantics></math></span> הם איברים שונים בתחום. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>7</mn></msup></mrow><annotation encoding=\"application/x-tex\">4^7</annotation></semantics></math></span> מחליף בין התחום לטווח.",
      "recapHtml": "חח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋯</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,m)=n(n-1)\\cdots(n-m+1)</annotation></semantics></math></span>, הסדר חשוב"
     },
     {
      "id": "C01-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות חד-חד-ערכיות $f:\\{1,2,3,4,5\\}\\to\\{1,2,3,4\\}$ יש?",
       "answer": 0,
       "tol": 0,
       "explain": "בתחום 5 איברים ובטווח רק 4 ערכים, ולכן חייבת להיות חזרה על ערך (עיקרון שובך היונים). אין אף פונקציה חח\"ע.",
       "promptHtml": "כמה פונקציות חד-חד-ערכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4,5\\}\\to\\{1,2,3,4\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "בתחום 5 איברים ובטווח רק 4 ערכים, ולכן חייבת להיות חזרה על ערך (עיקרון שובך היונים). אין אף פונקציה חח\"ע."
      },
      "recap": "$m>n$: אין פונקציות חח\"ע",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span>: אין פונקציות חח\"ע"
     },
     {
      "id": "C01-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות הפיכות $f:\\{1,2,3,4,5\\}\\to\\{1,2,3,4,5\\}$ יש?",
       "answer": 120,
       "tol": 0,
       "explain": "הפיכה = חח\"ע ועל, ובקבוצות שוות בגודל זה אותו דבר: $5!=120$. הערך $5^5=3125$ סופר את כל הפונקציות.",
       "promptHtml": "כמה פונקציות הפיכות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4,5\\}\\to\\{1,2,3,4,5\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "הפיכה = חח\"ע ועל, ובקבוצות שוות בגודל זה אותו דבר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>5</mn><mn>5</mn></msup><mo>=</mo><mn>3125</mn></mrow><annotation encoding=\"application/x-tex\">5^5=3125</annotation></semantics></math></span> סופר את כל הפונקציות."
      },
      "recap": "הפיכות בין שתי קבוצות בגודל $n$: $n!$",
      "recapHtml": "הפיכות בין שתי קבוצות בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>"
     },
     {
      "id": "C01-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות $f:\\{1,2,3,4\\}\\to\\{1,\\dots,6\\}$ **אינן** חד-חד-ערכיות?",
       "answer": 936,
       "tol": 0,
       "explain": "כל הפונקציות: $6^4=1296$. החח\"ע: $P(6,4)=360$. אלה שאינן חח\"ע: $1296-360=936$. הערך 360 לבדו הוא מספר החח\"ע.",
       "promptHtml": "כמה פונקציות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,6\\}</annotation></semantics></math></span> <strong>אינן</strong> חד-חד-ערכיות?",
       "explainHtml": "כל הפונקציות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>6</mn><mn>4</mn></msup><mo>=</mo><mn>1296</mn></mrow><annotation encoding=\"application/x-tex\">6^4=1296</annotation></semantics></math></span>. החח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>360</mn></mrow><annotation encoding=\"application/x-tex\">P(6,4)=360</annotation></semantics></math></span>. אלה שאינן חח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1296</mn><mo>−</mo><mn>360</mn><mo>=</mo><mn>936</mn></mrow><annotation encoding=\"application/x-tex\">1296-360=936</annotation></semantics></math></span>. הערך 360 לבדו הוא מספר החח\"ע."
      },
      "recap": "\"לא\" = כולן פחות המבוקש",
      "recapHtml": "\"לא\" = כולן פחות המבוקש"
     },
     {
      "bankId": "23B-B-Q3b",
      "recap": "לא חח\"ע: $n^m-P(n,m)$",
      "recapHtml": "לא חח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">n^m-P(n,m)</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "📈",
    "title": "פונקציות עולות ממש ויורדות ממש",
    "goal": "לזהות שפונקציה עולה ממש נקבעת לגמרי מקבוצת הערכים שלה, ולספור אותן בעזרת $\\binom nm$.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לזהות שפונקציה עולה ממש נקבעת לגמרי מקבוצת הערכים שלה, ולספור אותן בעזרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span>.",
    "lesson": {
     "html": "\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi></mrow><annotation encoding=\"application/x-tex\">f</annotation></semantics></math></span> <b>עולה ממש</b> אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mo>⋯</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(1)&lt;f(2)&lt;\\dots&lt;f(m)</annotation></semantics></math></span>. אין צורך לבחור סדר: ברגע שבוחרים אילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> ערכים שונים מופיעים, הם חייבים להופיע מהקטן לגדול, ולכן יש דרך אחת בלבד לסדר אותם.</p>\n<div class=\"lesson-rule\">🔑 פונקציות עולות ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,m\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n\\}</annotation></semantics></math></span> הן בהתאמה חח\"ע ועל לתתי-הקבוצות של הטווח בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span>, ולכן מספרן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span>. אותו מספר גם ליורדות ממש (סדר הפוך, עדיין דרך אחת).</div>\n<div class=\"lesson-ex\">דוגמה: עולות ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span>. הבחירה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{2,4,5\\}</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>4</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=2,\\ f(2)=4,\\ f(3)=5</annotation></semantics></math></span> ורק אותה. בסך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>5</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">\\binom53=10</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ עולה ממש היא תמיד חח\"ע, אבל חח\"ע אינה תמיד עולה. מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,m)</annotation></semantics></math></span> החח\"ע, בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span> עולות, כלומר חלק של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mrow><mi>m</mi><mo stretchy=\"false\">!</mo></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac1{m!}</annotation></semantics></math></span>. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span> התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>.</div>\n<p><b>תנאי על ערך:</b> אם קובעים ערך, למשל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span>, מסירים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(1)</annotation></semantics></math></span> ואת הערך הזה מהחשבון וסופרים את השאר: ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span> יתר הערכים נבחרים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{2,\\dots,n\\}</annotation></semantics></math></span>.</p>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות עולות ממש $f:\\{1,2,3\\}\\to\\{1,\\dots,6\\}$ יש?",
       "answer": 20,
       "tol": 0,
       "explain": "בוחרים 3 ערכים מתוך 6 והסדר נקבע מאליו: $\\binom63=20$. הערך $P(6,3)=120$ סופר גם את הסידורים שאינם עולים.",
       "promptHtml": "כמה פונקציות עולות ממש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3\\}\\to\\{1,\\dots,6\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "בוחרים 3 ערכים מתוך 6 והסדר נקבע מאליו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">\\binom63=20</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">P(6,3)=120</annotation></semantics></math></span> סופר גם את הסידורים שאינם עולים."
      },
      "recap": "עולה ממש: $\\binom nm$",
      "recapHtml": "עולה ממש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span>"
     },
     {
      "id": "C02-Q2",
      "question": "כמה פונקציות יורדות ממש $f:\\{1,2,3,4\\}\\to\\{1,\\dots,8\\}$ יש?",
      "options": [
       {
        "id": "a",
        "value": "$\\binom84$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>8</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom84</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$P(8,4)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(8,4)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$8^4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>8</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">8^4</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$\\binom{11}4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{11}4</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "נכון: $\\binom84=70$, כי בחירת 4 ערכים קובעת את הפונקציה היורדת. $P(8,4)=1680$ סופר סדרות בכל סדר. $8^4$ סופר את כל הפונקציות. $\\binom{11}4=330$ הוא מספר הפונקציות העולות **לא** בהכרח ממש, ובפונקציה ממש אסורה חזרה על ערך.",
      "recap": "יורדת ממש = עולה ממש: $\\binom nm$",
      "questionHtml": "כמה פונקציות יורדות ממש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,8\\}</annotation></semantics></math></span> יש?",
      "explanationHtml": "נכון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>8</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>70</mn></mrow><annotation encoding=\"application/x-tex\">\\binom84=70</annotation></semantics></math></span>, כי בחירת 4 ערכים קובעת את הפונקציה היורדת. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1680</mn></mrow><annotation encoding=\"application/x-tex\">P(8,4)=1680</annotation></semantics></math></span> סופר סדרות בכל סדר. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>8</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">8^4</annotation></semantics></math></span> סופר את כל הפונקציות. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>11</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>330</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{11}4=330</annotation></semantics></math></span> הוא מספר הפונקציות העולות <strong>לא</strong> בהכרח ממש, ובפונקציה ממש אסורה חזרה על ערך.",
      "recapHtml": "יורדת ממש = עולה ממש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span>"
     },
     {
      "id": "C02-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות חח\"ע $f:\\{1,2,3,4\\}\\to\\{1,\\dots,6\\}$ **אינן** עולות ממש?",
       "answer": 345,
       "tol": 0,
       "explain": "חח\"ע: $P(6,4)=360$. עולות ממש: $\\binom64=15$. החח\"ע שאינן עולות: $360-15=345$.",
       "promptHtml": "כמה פונקציות חח\"ע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,6\\}</annotation></semantics></math></span> <strong>אינן</strong> עולות ממש?",
       "explainHtml": "חח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>360</mn></mrow><annotation encoding=\"application/x-tex\">P(6,4)=360</annotation></semantics></math></span>. עולות ממש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">\\binom64=15</annotation></semantics></math></span>. החח\"ע שאינן עולות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>360</mn><mo>−</mo><mn>15</mn><mo>=</mo><mn>345</mn></mrow><annotation encoding=\"application/x-tex\">360-15=345</annotation></semantics></math></span>."
      },
      "recap": "עולות ממש הן תת-קבוצה של החח\"ע",
      "recapHtml": "עולות ממש הן תת-קבוצה של החח\"ע"
     },
     {
      "id": "C02-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות עולות ממש $f:\\{1,2,3,4,5\\}\\to\\{1,2,3,4\\}$ יש?",
       "answer": 0,
       "tol": 0,
       "explain": "כדי לעלות ממש צריך 5 ערכים שונים, ובטווח רק 4. אין אף פונקציה.",
       "promptHtml": "כמה פונקציות עולות ממש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4,5\\}\\to\\{1,2,3,4\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "כדי לעלות ממש צריך 5 ערכים שונים, ובטווח רק 4. אין אף פונקציה."
      },
      "recap": "$m>n$: אין עולות ממש",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span>: אין עולות ממש"
     },
     {
      "id": "C02-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות עולות ממש $f:\\{1,2,3,4\\}\\to\\{1,\\dots,9\\}$ מקיימות $f(1)=1$?",
       "answer": 56,
       "tol": 0,
       "explain": "אחרי $f(1)=1$ נשארים שלושה ערכים $f(2)<f(3)<f(4)$ מתוך $\\{2,\\dots,9\\}$ (8 איברים): $\\binom83=56$.",
       "promptHtml": "כמה פונקציות עולות ממש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,9\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span>?",
       "explainHtml": "אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span> נשארים שלושה ערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(2)&lt;f(3)&lt;f(4)</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{2,\\dots,9\\}</annotation></semantics></math></span> (8 איברים): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>8</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>56</mn></mrow><annotation encoding=\"application/x-tex\">\\binom83=56</annotation></semantics></math></span>."
      },
      "recap": "מקבעים ערך ובוחרים את השאר מהנותרים",
      "recapHtml": "מקבעים ערך ובוחרים את השאר מהנותרים"
     },
     {
      "bankId": "20B-A-Q4b",
      "recap": "עולות ממש: $\\binom nm$; חח\"ע: $P(n,m)$",
      "recapHtml": "עולות ממש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span>; חח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,m)</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "📊",
    "title": "פונקציות עולות (לא בהכרח ממש) והמשלים שלהן",
    "goal": "לספור פונקציות עולות חלש עם $\\binom{n+m-1}m$ ולהשתמש במשלים ל\"אינן עולות\".",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לספור פונקציות עולות חלש עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{n+m-1}m</annotation></semantics></math></span> ולהשתמש במשלים ל\"אינן עולות\".",
    "lesson": {
     "html": "\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi></mrow><annotation encoding=\"application/x-tex\">f</annotation></semantics></math></span> <b>עולה</b> (חלש) אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>≤</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>≤</mo><mo>⋯</mo><mo>≤</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(1)\\le f(2)\\le\\dots\\le f(m)</annotation></semantics></math></span>: מותר לחזור על ערך, אבל אסור לרדת. כאן הפונקציה נקבעת על ידי <b>כמה פעמים</b> מופיע כל ערך, כלומר בחירה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> ערכים מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> עם חזרות.</p>\n<div class=\"lesson-rule\">🔑 מספר הפונקציות העולות (חלש) מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,m\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n\\}</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">D(n,m)=\\binom{n+m-1}{m}</annotation></semantics></math></span>. אותו מספר ליורדות חלש.</div>\n<p><b>למה?</b> מגדירים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>i</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">g(i)=f(i)+i-1</annotation></semantics></math></span>. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi></mrow><annotation encoding=\"application/x-tex\">f</annotation></semantics></math></span> עולה חלש אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi></mrow><annotation encoding=\"application/x-tex\">g</annotation></semantics></math></span> עולה ממש ומקבלת ערכים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n+m-1\\}</annotation></semantics></math></span>, וההתאמה הפוכה. לפי השיעור הקודם יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{n+m-1}m</annotation></semantics></math></span> פונקציות כאלה.</p>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>n</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">m=2,\\ n=3</annotation></semantics></math></span>. הזוגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(f(1),f(2))</annotation></semantics></math></span> שעולים חלש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1),(1,2),(1,3),(2,2),(2,3),(3,3)</annotation></semantics></math></span>. הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">6=\\binom42</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ \"עולה\" בלי המילה \"ממש\" פירושו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>≤</mo></mrow><annotation encoding=\"application/x-tex\">\\le</annotation></semantics></math></span>. במקרה כזה אין להשתמש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span> (זה רק לעולה ממש) ואין הגבלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>≤</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m\\le n</annotation></semantics></math></span>: גם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span> אפשרי.</div>\n<h3>אינן עולות</h3>\n<p>שוב משלים: כל הפונקציות פחות העולות, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">n^m-\\binom{n+m-1}m</annotation></semantics></math></span>. כדי לספור עולות חלש שאינן עולות ממש, מחסרים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\binom{n+m-1}m-\\binom nm</annotation></semantics></math></span>.</p>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות עולות (חלש) $f:\\{1,2,3\\}\\to\\{1,2,3,4\\}$ יש?",
       "answer": 20,
       "tol": 0,
       "explain": "$D(4,3)=\\binom{4+3-1}3=\\binom63=20$. הערך $\\binom43=4$ סופר רק את העולות ממש.",
       "promptHtml": "כמה פונקציות עולות (חלש) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3\\}\\to\\{1,2,3,4\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mn>4</mn><mo>+</mo><mn>3</mn><mo>−</mo><mn>1</mn></mrow><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">D(4,3)=\\binom{4+3-1}3=\\binom63=20</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">\\binom43=4</annotation></semantics></math></span> סופר רק את העולות ממש."
      },
      "recap": "עולה חלש: $\\binom{n+m-1}m$",
      "recapHtml": "עולה חלש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{n+m-1}m</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q2",
      "question": "כמה פונקציות עולות (חלש) $f:\\{1,2,3,4\\}\\to\\{1,2,3\\}$ יש?",
      "options": [
       {
        "id": "a",
        "value": "$\\binom64$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom64</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$\\binom34$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>3</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom34</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$\\binom74$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom74</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$3^4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">3^4</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "נכון: $\\binom{3+4-1}4=\\binom64=15$. $\\binom34=0$ הוא מספר העולות ממש (אין 4 ערכים שונים ב-3), אבל כאן מותר לחזור. $\\binom74=35$ הוא טעות של $n+m$ במקום $n+m-1$. $3^4=81$ סופר את כל הפונקציות.",
      "recap": "עולה חלש: מותר $m>n$",
      "questionHtml": "כמה פונקציות עולות (חלש) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,2,3\\}</annotation></semantics></math></span> יש?",
      "explanationHtml": "נכון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mn>3</mn><mo>+</mo><mn>4</mn><mo>−</mo><mn>1</mn></mrow><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>6</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{3+4-1}4=\\binom64=15</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>3</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\binom34=0</annotation></semantics></math></span> הוא מספר העולות ממש (אין 4 ערכים שונים ב-3), אבל כאן מותר לחזור. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>35</mn></mrow><annotation encoding=\"application/x-tex\">\\binom74=35</annotation></semantics></math></span> הוא טעות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n+m</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+m-1</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>4</mn></msup><mo>=</mo><mn>81</mn></mrow><annotation encoding=\"application/x-tex\">3^4=81</annotation></semantics></math></span> סופר את כל הפונקציות.",
      "recapHtml": "עולה חלש: מותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות $f:\\{1,2,3\\}\\to\\{1,2,3\\}$ **אינן** עולות (חלש)?",
       "answer": 17,
       "tol": 0,
       "explain": "כולן: $27$. עולות חלש: $\\binom{5}3=10$. אינן עולות: $27-10=17$.",
       "promptHtml": "כמה פונקציות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3\\}\\to\\{1,2,3\\}</annotation></semantics></math></span> <strong>אינן</strong> עולות (חלש)?",
       "explainHtml": "כולן: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">27</annotation></semantics></math></span>. עולות חלש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>5</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{5}3=10</annotation></semantics></math></span>. אינן עולות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>27</mn><mo>−</mo><mn>10</mn><mo>=</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">27-10=17</annotation></semantics></math></span>."
      },
      "recap": "אינן עולות = כל הפונקציות פחות $\\binom{n+m-1}m$",
      "recapHtml": "אינן עולות = כל הפונקציות פחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{n+m-1}m</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות $f:\\{1,2,3,4\\}\\to\\{1,\\dots,5\\}$ עולות (חלש) אבל **אינן** עולות ממש?",
       "answer": 65,
       "tol": 0,
       "explain": "עולות חלש: $\\binom84=70$. עולות ממש: $\\binom54=5$. ההפרש: $65$.",
       "promptHtml": "כמה פונקציות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,5\\}</annotation></semantics></math></span> עולות (חלש) אבל <strong>אינן</strong> עולות ממש?",
       "explainHtml": "עולות חלש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>8</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>70</mn></mrow><annotation encoding=\"application/x-tex\">\\binom84=70</annotation></semantics></math></span>. עולות ממש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>5</mn><mn>4</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">\\binom54=5</annotation></semantics></math></span>. ההפרש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>65</mn></mrow><annotation encoding=\"application/x-tex\">65</annotation></semantics></math></span>."
      },
      "recap": "עולות חלש פחות עולות ממש = יש לפחות חזרה אחת",
      "recapHtml": "עולות חלש פחות עולות ממש = יש לפחות חזרה אחת"
     },
     {
      "id": "C03-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות יורדות (חלש) $f:\\{1,2\\}\\to\\{1,\\dots,6\\}$ יש?",
       "answer": 21,
       "tol": 0,
       "explain": "יורדת חלש נספרת כמו עולה חלש: $\\binom{6+2-1}2=\\binom72=21$.",
       "promptHtml": "כמה פונקציות יורדות (חלש) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2\\}\\to\\{1,\\dots,6\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "יורדת חלש נספרת כמו עולה חלש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mn>6</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{6+2-1}2=\\binom72=21</annotation></semantics></math></span>."
      },
      "recap": "יורדת חלש = עולה חלש בספירה",
      "recapHtml": "יורדת חלש = עולה חלש בספירה"
     },
     {
      "bankId": "21B-B-Q3b",
      "recap": "אינן עולות: $n^m-\\binom{n+m-1}m$",
      "recapHtml": "אינן עולות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">n^m-\\binom{n+m-1}m</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🎯",
    "title": "פונקציות על והכלה-והדחה",
    "goal": "לספור פונקציות על בעזרת הנוסחה $\\sum(-1)^k\\binom nk(n-k)^m$.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לספור פונקציות על בעזרת הנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>∑</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>k</mi></msup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">\\sum(-1)^k\\binom nk(n-k)^m</annotation></semantics></math></span>.",
    "lesson": {
     "html": "\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">f:A\\to B</annotation></semantics></math></span> היא <b>על</b> (surjective) אם כל ערך של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> מתקבל לפחות פעם אחת: לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>∈</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">y\\in B</annotation></semantics></math></span> קיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>∈</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">x\\in A</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">f(x)=y</annotation></semantics></math></span>. אפשרי רק אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>≥</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m\\ge n</annotation></semantics></math></span>.</p>\n<p>לספור \"על\" ישירות קשה, אז סופרים את ההפך: כל הפונקציות פחות אלה שמחסרות ערך. נסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>A</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">A_i</annotation></semantics></math></span> את הפונקציות שהערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> לא מופיע בהן. יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">(n-1)^m</annotation></semantics></math></span> כאלה. לפי <b>הכלה והדחה</b> (ראו את הנושא על ההכלה וההדחה) מקבלים, כשנסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">r</mi></mrow><annotation encoding=\"application/x-tex\">\\mathrm{Sur}</annotation></semantics></math></span> את מספר הפונקציות על:</p>\n<span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mrow><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">r</mi></mrow><mo>=</mo><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>1</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mo>+</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mo>−</mo><mo>⋯</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>k</mi></msup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mi mathvariant=\"normal\">.</mi></mrow><annotation encoding=\"application/x-tex\">\\mathrm{Sur}=n^m-\\binom n1(n-1)^m+\\binom n2(n-2)^m-\\dots=\\sum_{k=0}^{n}(-1)^k\\binom nk(n-k)^m.</annotation></semantics></math></span>\n<div class=\"lesson-rule\">🔑 הסימנים מתחלפים, מתחילים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><msup><mi>n</mi><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">+n^m</annotation></semantics></math></span>. בחזקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(n-k)</annotation></semantics></math></span> נמצא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> (גודל התחום).</div>\n<div class=\"lesson-ex\">דוגמה: על מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3,4\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>1</mn><mn>4</mn></msup><mo>+</mo><mn>1</mn><mo>⋅</mo><msup><mn>0</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">2^4-2\\cdot1^4+1\\cdot0^4=16-2=14</annotation></semantics></math></span>. (בצורה ישירה: כל הפונקציות פחות שתי הקבועות.)</div>\n<div class=\"lesson-ex\">דוגמה: על מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>−</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mn>5</mn></msup><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>1</mn><mn>5</mn></msup><mo>=</mo><mn>243</mn><mo>−</mo><mn>96</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>150</mn></mrow><annotation encoding=\"application/x-tex\">3^5-3\\cdot2^5+3\\cdot1^5=243-96+3=150</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&lt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&lt;n</annotation></semantics></math></span> אין פונקציה על. כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m=n</annotation></semantics></math></span> הנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>.</div>\n<p><b>פונקציות שאינן על</b> סופרים במשלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mrow><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">r</mi></mrow></mrow><annotation encoding=\"application/x-tex\">n^m-\\mathrm{Sur}</annotation></semantics></math></span>. למשל מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>243</mn><mo>−</mo><mn>150</mn><mo>=</mo><mn>93</mn></mrow><annotation encoding=\"application/x-tex\">243-150=93</annotation></semantics></math></span>. כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=2</annotation></semantics></math></span> מורידים רק את שתי הקבועות, שאינן על.</p>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות על $f:\\{1,2,3,4\\}\\to\\{1,2\\}$ יש?",
       "answer": 14,
       "tol": 0,
       "explain": "$2^4-\\binom21\\cdot1^4=16-2=14$. מורידים את שתי הפונקציות הקבועות, שמחסרות ערך.",
       "promptHtml": "כמה פונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,2\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>−</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>2</mn><mn>1</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>⋅</mo><msup><mn>1</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">2^4-\\binom21\\cdot1^4=16-2=14</annotation></semantics></math></span>. מורידים את שתי הפונקציות הקבועות, שמחסרות ערך."
      },
      "recap": "על אל 2 ערכים: $2^m-2$",
      "recapHtml": "על אל 2 ערכים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>m</mi></msup><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2^m-2</annotation></semantics></math></span>"
     },
     {
      "id": "C04-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות על $f:\\{1,2,3,4\\}\\to\\{1,2,3\\}$ יש?",
       "answer": 36,
       "tol": 0,
       "explain": "$3^4-3\\cdot2^4+3\\cdot1^4=81-48+3=36$.",
       "promptHtml": "כמה פונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,2,3\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>4</mn></msup><mo>−</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mn>4</mn></msup><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>1</mn><mn>4</mn></msup><mo>=</mo><mn>81</mn><mo>−</mo><mn>48</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">3^4-3\\cdot2^4+3\\cdot1^4=81-48+3=36</annotation></semantics></math></span>."
      },
      "recap": "$n^m-n(n-1)^m+\\binom n2(n-2)^m-\\dots$",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mo>+</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup><mo>−</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">n^m-n(n-1)^m+\\binom n2(n-2)^m-\\dots</annotation></semantics></math></span>"
     },
     {
      "id": "C04-Q3",
      "question": "איזה ביטוי נותן את מספר הפונקציות על $f:\\{1,\\dots,5\\}\\to\\{1,2,3\\}$?",
      "options": [
       {
        "id": "a",
        "value": "$3^5-3\\cdot2^5+3\\cdot1^5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>−</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mn>5</mn></msup><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>1</mn><mn>5</mn></msup></mrow><annotation encoding=\"application/x-tex\">3^5-3\\cdot2^5+3\\cdot1^5</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$3^5-3\\cdot2^5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>−</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mn>5</mn></msup></mrow><annotation encoding=\"application/x-tex\">3^5-3\\cdot2^5</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$3^5-2^5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>−</mo><msup><mn>2</mn><mn>5</mn></msup></mrow><annotation encoding=\"application/x-tex\">3^5-2^5</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$3^5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup></mrow><annotation encoding=\"application/x-tex\">3^5</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "נכון: $243-96+3=150$. בלי האיבר האחרון ($147$) מורידים פעמיים פונקציות שמחסרות שני ערכים. $3^5-2^5=211$ מחסיר רק ערך אחד מסוים. $3^5=243$ הוא כל הפונקציות.",
      "recap": "אחרי כל חיסור יש תיקון חיבור",
      "questionHtml": "איזה ביטוי נותן את מספר הפונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,\\dots,5\\}\\to\\{1,2,3\\}</annotation></semantics></math></span>?",
      "explanationHtml": "נכון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>243</mn><mo>−</mo><mn>96</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>150</mn></mrow><annotation encoding=\"application/x-tex\">243-96+3=150</annotation></semantics></math></span>. בלי האיבר האחרון (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>147</mn></mrow><annotation encoding=\"application/x-tex\">147</annotation></semantics></math></span>) מורידים פעמיים פונקציות שמחסרות שני ערכים. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>−</mo><msup><mn>2</mn><mn>5</mn></msup><mo>=</mo><mn>211</mn></mrow><annotation encoding=\"application/x-tex\">3^5-2^5=211</annotation></semantics></math></span> מחסיר רק ערך אחד מסוים. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>=</mo><mn>243</mn></mrow><annotation encoding=\"application/x-tex\">3^5=243</annotation></semantics></math></span> הוא כל הפונקציות.",
      "recapHtml": "אחרי כל חיסור יש תיקון חיבור"
     },
     {
      "id": "C04-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות על $f:\\{1,2,3\\}\\to\\{1,2,3,4\\}$ יש?",
       "answer": 0,
       "tol": 0,
       "explain": "כדי לכסות 4 ערכים צריך לפחות 4 איברים בתחום, ויש 3. אין פונקציה על.",
       "promptHtml": "כמה פונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3\\}\\to\\{1,2,3,4\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "כדי לכסות 4 ערכים צריך לפחות 4 איברים בתחום, ויש 3. אין פונקציה על."
      },
      "recap": "$m<n$: אין פונקציה על",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&lt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&lt;n</annotation></semantics></math></span>: אין פונקציה על"
     },
     {
      "id": "C04-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות על $f:\\{1,\\dots,5\\}\\to\\{1,\\dots,5\\}$ יש?",
       "answer": 120,
       "tol": 0,
       "explain": "בקבוצות שוות בגודל, על = הפיכה, ויש $5!=120$. הנוסחה נותנת אותו דבר.",
       "promptHtml": "כמה פונקציות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,\\dots,5\\}\\to\\{1,\\dots,5\\}</annotation></semantics></math></span> יש?",
       "explainHtml": "בקבוצות שוות בגודל, על = הפיכה, ויש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. הנוסחה נותנת אותו דבר."
      },
      "recap": "$m=n$: על = הפיכה = $n!$",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m=n</annotation></semantics></math></span>: על = הפיכה = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span>"
     },
     {
      "bankId": "25S-A-Q1a",
      "recap": "על: הכלה והדחה על הערכים החסרים",
      "recapHtml": "על: הכלה והדחה על הערכים החסרים"
     },
     {
      "bankId": "22B-A-Q3b",
      "recap": "אינן על: $n^m-\\mathrm{Sur}$",
      "recapHtml": "אינן על: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup><mo>−</mo><mrow><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">r</mi></mrow></mrow><annotation encoding=\"application/x-tex\">n^m-\\mathrm{Sur}</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🔍",
    "title": "תנאים על תמונה של תת-קבוצה",
    "goal": "לפצל פונקציה לשני חלקים כשיש תנאי על $f(S)$ או על $f^{-1}(T)$.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לפצל פונקציה לשני חלקים כשיש תנאי על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(S)</annotation></semantics></math></span> או על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">(</mo><mi>T</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f^{-1}(T)</annotation></semantics></math></span>.",
    "lesson": {
     "html": "\n<p><b>תמונה של קבוצה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">{</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>:</mo><mi>x</mi><mo>∈</mo><mi>S</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(S)=\\{f(x):x\\in S\\}</annotation></semantics></math></span>. <b>המקור של קבוצה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">(</mo><mi>T</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">{</mo><mi>x</mi><mo>:</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>∈</mo><mi>T</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f^{-1}(T)=\\{x:f(x)\\in T\\}</annotation></semantics></math></span>, כלומר כל האיברים שנשלחים לתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>.</p>\n<div class=\"lesson-rule\">🔑 תנאי על תמונה או מקור מפצלים את הפונקציה לשני חלקים בלתי תלויים, סופרים כל חלק וכופלים.</div>\n<h3><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">f(S)=T</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi></mrow><annotation encoding=\"application/x-tex\">f</annotation></semantics></math></span> חח\"ע</h3>\n<p>כשהפונקציה חח\"ע ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>T</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">|S|=|T|=k</annotation></semantics></math></span>, הפונקציה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> היא התאמה חח\"ע על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">k!</annotation></semantics></math></span> אפשרויות. על שאר התחום היא חח\"ע לתוך הערכים ש<b>לא</b> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> (הערכים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> כבר תפוסים), כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo separator=\"true\">,</mo><mtext> </mtext><mi>m</mi><mo>−</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n-k,\\,m-k)</annotation></semantics></math></span>.</p>\n<div class=\"lesson-ex\">דוגמה: חח\"ע מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,7\\}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">{</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(\\{1,2\\})=\\{6,7\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>60</mn><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">2!\\cdot P(5,3)=2\\cdot60=120</annotation></semantics></math></span>.</div>\n<h3><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo><mo>⊆</mo><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">f(S)\\subseteq T</annotation></semantics></math></span></h3>\n<p>כל איבר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> בוחר ערך מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>T</mi><msup><mi mathvariant=\"normal\">∣</mi><mrow><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">|T|^{|S|}</annotation></semantics></math></span> (בלי חח\"ע), או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi mathvariant=\"normal\">∣</mi><mi>T</mi><mi mathvariant=\"normal\">∣</mi><mo separator=\"true\">,</mo><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(|T|,|S|)</annotation></semantics></math></span> (עם חח\"ע). שני תנאים על חלקי תחום זרים כופלים.</p>\n<h3><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">(</mo><mi>T</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">f^{-1}(T)=S</annotation></semantics></math></span></h3>\n<p>האיברים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> (ורק הם) נשלחים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>, ושאר התחום נשלח אל מחוץ ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>T</mi><msup><mi mathvariant=\"normal\">∣</mi><mrow><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi></mrow></msup><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>T</mi><mi mathvariant=\"normal\">∣</mi><msup><mo stretchy=\"false\">)</mo><mrow><mi>m</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">|T|^{|S|}\\cdot(n-|T|)^{m-|S|}</annotation></semantics></math></span> בלי תנאים נוספים.</p>\n<div class=\"lesson-trap\">⚠️ שכחת להגביל את שאר התחום: ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">f(S)=T</annotation></semantics></math></span> חח\"ע, שאר התחום <b>לא</b> יכול לקבל ערכים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות חד-חד-ערכיות $f:\\{1,2,3,4\\}\\to\\{1,\\dots,7\\}$ מקיימות $f(\\{1,2\\})=\\{6,7\\}$?",
       "answer": 40,
       "tol": 0,
       "explain": "$2!$ דרכים להתאים את $1,2$ ל-$6,7$. עבור $f(3),f(4)$ נשארים הערכים $\\{1,\\dots,5\\}$, חח\"ע: $P(5,2)=20$. מכפלה: $40$.",
       "promptHtml": "כמה פונקציות חד-חד-ערכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,7\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">{</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(\\{1,2\\})=\\{6,7\\}</annotation></semantics></math></span>?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">2!</annotation></semantics></math></span> דרכים להתאים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">6,7</annotation></semantics></math></span>. עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(3),f(4)</annotation></semantics></math></span> נשארים הערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span>, חח\"ע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">P(5,2)=20</annotation></semantics></math></span>. מכפלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">40</annotation></semantics></math></span>."
      },
      "recap": "פיצול: התאמה על $S$, חליפה על השאר",
      "recapHtml": "פיצול: התאמה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span>, חליפה על השאר"
     },
     {
      "id": "C05-Q2",
      "question": "כמה פונקציות חד-חד-ערכיות $f:\\{1,\\dots,5\\}\\to\\{1,\\dots,8\\}$ מקיימות $f(\\{1,2,3\\})=\\{6,7,8\\}$?",
      "options": [
       {
        "id": "a",
        "value": "$3!\\cdot P(5,2)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">3!\\cdot P(5,2)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$P(5,2)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(5,2)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$3!\\cdot5^2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><msup><mn>5</mn><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">3!\\cdot5^2</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$P(8,5)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(8,5)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "נכון: $6\\cdot20=120$. בלי $3!$ שוכחים לבחור איזה מ-$1,2,3$ הולך לאן. $3!\\cdot5^2=150$ מאפשר לשני האיברים האחרונים לחזור על ערך. $P(8,5)=6720$ מתעלם מהתנאי.",
      "recap": "התאמה על $S$ כפול חליפה על השאר",
      "questionHtml": "כמה פונקציות חד-חד-ערכיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,\\dots,5\\}\\to\\{1,\\dots,8\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">{</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(\\{1,2,3\\})=\\{6,7,8\\}</annotation></semantics></math></span>?",
      "explanationHtml": "נכון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">6\\cdot20=120</annotation></semantics></math></span>. בלי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">3!</annotation></semantics></math></span> שוכחים לבחור איזה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> הולך לאן. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><msup><mn>5</mn><mn>2</mn></msup><mo>=</mo><mn>150</mn></mrow><annotation encoding=\"application/x-tex\">3!\\cdot5^2=150</annotation></semantics></math></span> מאפשר לשני האיברים האחרונים לחזור על ערך. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6720</mn></mrow><annotation encoding=\"application/x-tex\">P(8,5)=6720</annotation></semantics></math></span> מתעלם מהתנאי.",
      "recapHtml": "התאמה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> כפול חליפה על השאר"
     },
     {
      "id": "C05-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות $f:\\{1,2,3,4\\}\\to\\{1,\\dots,5\\}$ (לא בהכרח חח\"ע) מקיימות $f(\\{1,2\\})\\subseteq\\{4,5\\}$?",
       "answer": 100,
       "tol": 0,
       "explain": "לכל אחד מ-$1,2$ יש 2 ערכים, ולכל אחד מ-$3,4$ יש 5: $2^2\\cdot5^2=100$.",
       "promptHtml": "כמה פונקציות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,5\\}</annotation></semantics></math></span> (לא בהכרח חח\"ע) מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>⊆</mo><mo stretchy=\"false\">{</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(\\{1,2\\})\\subseteq\\{4,5\\}</annotation></semantics></math></span>?",
       "explainHtml": "לכל אחד מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span> יש 2 ערכים, ולכל אחד מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span> יש 5: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>⋅</mo><msup><mn>5</mn><mn>2</mn></msup><mo>=</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">2^2\\cdot5^2=100</annotation></semantics></math></span>."
      },
      "recap": "$f(S)\\subseteq T$: $|T|^{|S|}$ כפול השאר חופשי",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo><mo>⊆</mo><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">f(S)\\subseteq T</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>T</mi><msup><mi mathvariant=\"normal\">∣</mi><mrow><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">|T|^{|S|}</annotation></semantics></math></span> כפול השאר חופשי"
     },
     {
      "id": "C05-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות $f:\\{1,\\dots,5\\}\\to\\{1,\\dots,4\\}$ מקיימות $f^{-1}(\\{1,2\\})=\\{1,2,3\\}$?",
       "answer": 32,
       "tol": 0,
       "explain": "האיברים $1,2,3$ נשלחים ל-$\\{1,2\\}$: $2^3$. האיברים $4,5$ נשלחים ל-$\\{3,4\\}$ (מחוץ ל-$\\{1,2\\}$): $2^2$. מכפלה: $32$.",
       "promptHtml": "כמה פונקציות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,\\dots,5\\}\\to\\{1,\\dots,4\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f^{-1}(\\{1,2\\})=\\{1,2,3\\}</annotation></semantics></math></span>?",
       "explainHtml": "האיברים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,2,3</annotation></semantics></math></span> נשלחים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^3</annotation></semantics></math></span>. האיברים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">4,5</annotation></semantics></math></span> נשלחים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{3,4\\}</annotation></semantics></math></span> (מחוץ ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2\\}</annotation></semantics></math></span>): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^2</annotation></semantics></math></span>. מכפלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">32</annotation></semantics></math></span>."
      },
      "recap": "$f^{-1}(T)=S$: בפנים $|T|^{|S|}$, בחוץ $(n-|T|)^{m-|S|}$",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">(</mo><mi>T</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">f^{-1}(T)=S</annotation></semantics></math></span>: בפנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>T</mi><msup><mi mathvariant=\"normal\">∣</mi><mrow><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">|T|^{|S|}</annotation></semantics></math></span>, בחוץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>T</mi><mi mathvariant=\"normal\">∣</mi><msup><mo stretchy=\"false\">)</mo><mrow><mi>m</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>S</mi><mi mathvariant=\"normal\">∣</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">(n-|T|)^{m-|S|}</annotation></semantics></math></span>"
     },
     {
      "id": "C05-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות חח\"ע $f:\\{1,2,3,4\\}\\to\\{1,\\dots,6\\}$ מקיימות $f(\\{1,2\\})\\subseteq\\{1,2,3\\}$ וגם $f(\\{3,4\\})\\subseteq\\{4,5,6\\}$?",
       "answer": 36,
       "tol": 0,
       "explain": "$f(1),f(2)$: חליפה בגודל 2 מתוך $\\{1,2,3\\}$, $P(3,2)=6$. $f(3),f(4)$: חליפה בגודל 2 מתוך $\\{4,5,6\\}$, גם $6$. הקבוצות זרות, ולכן אין התנגשות בין החלקים: $36$.",
       "promptHtml": "כמה פונקציות חח\"ע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,6\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>⊆</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(\\{1,2\\})\\subseteq\\{1,2,3\\}</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">{</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo stretchy=\"false\">)</mo><mo>⊆</mo><mo stretchy=\"false\">{</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(\\{3,4\\})\\subseteq\\{4,5,6\\}</annotation></semantics></math></span>?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(1),f(2)</annotation></semantics></math></span>: חליפה בגודל 2 מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,2,3\\}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">P(3,2)=6</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(3),f(4)</annotation></semantics></math></span>: חליפה בגודל 2 מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{4,5,6\\}</annotation></semantics></math></span>, גם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>. הקבוצות זרות, ולכן אין התנגשות בין החלקים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">36</annotation></semantics></math></span>."
      },
      "recap": "קבוצות ערכים זרות: כופלים בלי חשש להתנגשות",
      "recapHtml": "קבוצות ערכים זרות: כופלים בלי חשש להתנגשות"
     },
     {
      "bankId": "22B-A-Q1a",
      "recap": "תנאי על $f(S)$: מפצלים ומכפילים",
      "recapHtml": "תנאי על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(S)</annotation></semantics></math></span>: מפצלים ומכפילים"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "⚖️",
    "title": "ערכים קבועים, \"או\" ופרמטר n",
    "goal": "להתמודד עם $f(i)=c$, עם \"או\" (הכלה-והדחה), עם סתירה בין תנאים ועם טווח בגודל $n$ כללי.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "להתמודד עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">f(i)=c</annotation></semantics></math></span>, עם \"או\" (הכלה-והדחה), עם סתירה בין תנאים ועם טווח בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כללי.",
    "lesson": {
     "html": "\n<h3>ערך קבוע</h3>\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>i</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">f(i)=c</annotation></semantics></math></span> מוריד את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> מהתחום ואת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> מהטווח (אם החח\"ע מונעת שימוש חוזר). חח\"ע מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,m\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n\\}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n-1,\\,m-1)</annotation></semantics></math></span>. עולה ממש עם ערך באמצע מפצל לשתי בחירות בלתי תלויות: מה שלפני הערך ומה שאחריו.</p>\n<div class=\"lesson-ex\">עולה ממש מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,4\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,9\\}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">f(2)=5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>∈</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(1)\\in\\{1,\\dots,4\\}</annotation></semantics></math></span> (4 אפשרויות) ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(3)&lt;f(4)</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>6</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{6,\\dots,9\\}</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">\\binom42=6</annotation></semantics></math></span>). בסך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>6</mn><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot6=24</annotation></semantics></math></span>.</div>\n<h3>\"או\" = הכלה והדחה</h3>\n<p>\"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">f(6)=6</annotation></semantics></math></span>\": <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><msub><mi>A</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A_1\\cup A_2|=|A_1|+|A_2|-|A_1\\cap A_2|</annotation></semantics></math></span>. מחשבים כל גודל בנפרד, ובחיתוך מקבעים את שני התנאים.</p>\n<div class=\"lesson-ex\">הפיכות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,5\\}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">f(5)=5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>+</mo><mn>4</mn><mo stretchy=\"false\">!</mo><mo>−</mo><mn>3</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>42</mn></mrow><annotation encoding=\"application/x-tex\">4!+4!-3!=42</annotation></semantics></math></span>.</div>\n<h3>סתירה</h3>\n<p>לפעמים התנאים לא יכולים להתקיים יחד. אם הפונקציה עולה ממש ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>7</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=7,\\ f(3)=8</annotation></semantics></math></span>, אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(2)</annotation></semantics></math></span> צריך להיות בין 7 ל-8, ואין שלם כזה. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>, לא נוסחה.</p>\n<h3>טווח בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כללי</h3>\n<p>כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הוא פרמטר, מפרידים למקרים: אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> קטן מדי אין פונקציות (למשל חח\"ע מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> איברים צריכה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n\\ge m</annotation></semantics></math></span>), אחרת מציבים בנוסחה. חח\"ע מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,m\\}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,\\dots,n\\}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n-1,m-1)</annotation></semantics></math></span> וקיימת רק עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n\\ge m</annotation></semantics></math></span>; עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&lt;</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n&lt;m</annotation></semantics></math></span> התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>. כדי לבדוק נוסחה מציבים ערך מספרי.</p>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות הפיכות $f:\\{1,\\dots,6\\}\\to\\{1,\\dots,6\\}$ מקיימות $f(1)=1$ **או** $f(6)=6$?",
       "answer": 216,
       "tol": 0,
       "explain": "כל תנאי לבדו: $5!=120$. שניהם יחד: $4!=24$. הכלה והדחה: $120+120-24=216$. הערך $240$ סופר פעמיים את המקרה ששני התנאים מתקיימים.",
       "promptHtml": "כמה פונקציות הפיכות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,\\dots,6\\}\\to\\{1,\\dots,6\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span> <strong>או</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">f(6)=6</annotation></semantics></math></span>?",
       "explainHtml": "כל תנאי לבדו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">5!=120</annotation></semantics></math></span>. שניהם יחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo stretchy=\"false\">!</mo><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4!=24</annotation></semantics></math></span>. הכלה והדחה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>120</mn><mo>+</mo><mn>120</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>216</mn></mrow><annotation encoding=\"application/x-tex\">120+120-24=216</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>240</mn></mrow><annotation encoding=\"application/x-tex\">240</annotation></semantics></math></span> סופר פעמיים את המקרה ששני התנאים מתקיימים."
      },
      "recap": "\"או\": $|A|+|B|-|A\\cap B|$",
      "recapHtml": "\"או\": <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>∩</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|+|B|-|A\\cap B|</annotation></semantics></math></span>"
     },
     {
      "id": "C06-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות עולות ממש $f:\\{1,2,3,4\\}\\to\\{1,\\dots,9\\}$ מקיימות $f(1)=7$ וגם $f(4)=8$?",
       "answer": 0,
       "tol": 0,
       "explain": "צריך $7<f(2)<f(3)<8$, ואין שלם בין 7 ל-8. התנאים סותרים: אפס פונקציות.",
       "promptHtml": "כמה פונקציות עולות ממש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,9\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=7</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">f(4)=8</annotation></semantics></math></span>?",
       "explainHtml": "צריך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">7&lt;f(2)&lt;f(3)&lt;8</annotation></semantics></math></span>, ואין שלם בין 7 ל-8. התנאים סותרים: אפס פונקציות."
      },
      "recap": "תנאים סותרים: התשובה $0$",
      "recapHtml": "תנאים סותרים: התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "numeric",
       "prompt": "עבור $n=7$: כמה פונקציות חח\"ע $f:\\{1,2,3,4\\}\\to\\{1,\\dots,n\\}$ מקיימות $f(1)=1$?",
       "answer": 120,
       "tol": 0,
       "explain": "הערך $1$ תפוס, נשארו $n-1=6$ ערכים לשלושה איברים: $P(6,3)=120$. הנוסחה הכללית $P(n-1,3)$ תקפה ל-$n\\ge4$, ומתאפסת כש-$n<4$.",
       "promptHtml": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">n=7</annotation></semantics></math></span>: כמה פונקציות חח\"ע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,n\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=1</annotation></semantics></math></span>?",
       "explainHtml": "הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> תפוס, נשארו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">n-1=6</annotation></semantics></math></span> ערכים לשלושה איברים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">P(6,3)=120</annotation></semantics></math></span>. הנוסחה הכללית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n-1,3)</annotation></semantics></math></span> תקפה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge4</annotation></semantics></math></span>, ומתאפסת כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>&lt;</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n&lt;4</annotation></semantics></math></span>."
      },
      "recap": "ערך קבוע: מורידים אותו מהתחום ומהטווח",
      "recapHtml": "ערך קבוע: מורידים אותו מהתחום ומהטווח"
     },
     {
      "id": "C06-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פונקציות עולות ממש $f:\\{1,2,3,4\\}\\to\\{1,\\dots,9\\}$ מקיימות $f(2)=5$?",
       "answer": 24,
       "tol": 0,
       "explain": "$f(1)\\in\\{1,\\dots,4\\}$: 4 אפשרויות. $f(3)<f(4)$ מתוך $\\{6,\\dots,9\\}$: $\\binom42=6$. מכפלה: $24$.",
       "promptHtml": "כמה פונקציות עולות ממש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo><mo>→</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f:\\{1,2,3,4\\}\\to\\{1,\\dots,9\\}</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">f(2)=5</annotation></semantics></math></span>?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>∈</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">f(1)\\in\\{1,\\dots,4\\}</annotation></semantics></math></span>: 4 אפשרויות. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>&lt;</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(3)&lt;f(4)</annotation></semantics></math></span> מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>6</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>9</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{6,\\dots,9\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>4</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">\\binom42=6</annotation></semantics></math></span>. מכפלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">24</annotation></semantics></math></span>."
      },
      "recap": "ערך באמצע מפצל לשתי בחירות בלתי תלויות",
      "recapHtml": "ערך באמצע מפצל לשתי בחירות בלתי תלויות"
     },
     {
      "bankId": "21B-B-Q4b",
      "recap": "עולה ממש עם $f(1)=3$: מצמצמים את הטווח של השאר",
      "recapHtml": "עולה ממש עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">f(1)=3</annotation></semantics></math></span>: מצמצמים את הטווח של השאר"
     },
     {
      "bankId": "25B-B-Q2c",
      "recap": "סתירה בין התנאים: $0$; חח\"ע עם $n$ כללי: $P(n,m)$ כש-$n\\ge m$",
      "recapHtml": "סתירה בין התנאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>; חח\"ע עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כללי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,m)</annotation></semantics></math></span> כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n\\ge m</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "✖️",
    "title": "מכפלה קרטזית ובחירה של זוגות",
    "goal": "לספור תתי-קבוצות של $A\\times B$ וסדרות של אותיות שונות עם תנאי התחלה.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לספור תתי-קבוצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span> וסדרות של אותיות שונות עם תנאי התחלה.",
    "lesson": {
     "html": "\n<p><b>מכפלה קרטזית</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span> היא קבוצת כל הזוגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(a,b)</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>∈</mo><mi>A</mi><mo separator=\"true\">,</mo><mtext> </mtext><mi>b</mi><mo>∈</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">a\\in A,\\ b\\in B</annotation></semantics></math></span>. יש בה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>⋅</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|\\cdot|B|</annotation></semantics></math></span> איברים.</p>\n<div class=\"lesson-rule\">🔑 תת-קבוצה בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span> היא בחירה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> זוגות מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">mn</annotation></semantics></math></span> (בלי סדר): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>m</mi><mi>n</mi></mrow><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{mn}k</annotation></semantics></math></span>. אם יש מגבלה על האיברים (למשל \"אין זוג שמכיל את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>z</mi></mrow><annotation encoding=\"application/x-tex\">z</annotation></semantics></math></span>\"), מסלקים אותם קודם ובוחרים מהשאר.</div>\n<p><b>פונקציה כתת-קבוצה:</b> פונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">f:A\\to B</annotation></semantics></math></span> היא תת-קבוצה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span> שיש בה <b>בדיוק זוג אחד</b> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">a\\in A</annotation></semantics></math></span>. לא כל תת-קבוצה היא פונקציה.</p>\n<h3>סדרות של אותיות שונות</h3>\n<p>סדרה בת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> אותיות שונות היא חליפה, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,k)</annotation></semantics></math></span> מספרן. אם הסדרה חייבת להתחיל במילה קבועה, מקבעים אותה וסופרים חליפה בגודל הנותר מהאותיות שנשארו. \"מתחילה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">X</annotation></semantics></math></span> או ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">Y</annotation></semantics></math></span>\": אם אין סדרה שמתחילה בשניהם, מחברים בלי הכלה והדחה.</p>\n<div class=\"lesson-ex\">סדרות בנות 4 אותיות שונות מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>e</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c,d,e\\}</annotation></semantics></math></span> שמתחילות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">ab</annotation></semantics></math></span>: נשארו 3 אותיות לשני מקומות, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">P(3,2)=6</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "step": {
       "type": "numeric",
       "prompt": "תהיינה $A=\\{1,2,3\\}$ ו-$B=\\{a,b,c,d\\}$. כמה תתי-קבוצות בגודל 5 יש ל-$A\\times B$?",
       "answer": 792,
       "tol": 0,
       "explain": "$|A\\times B|=12$, ובוחרים 5 זוגות מתוך 12: $\\binom{12}5=792$.",
       "promptHtml": "תהיינה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">A=\\{1,2,3\\}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">B=\\{a,b,c,d\\}</annotation></semantics></math></span>. כמה תתי-קבוצות בגודל 5 יש ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span>?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mo>×</mo><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">|A\\times B|=12</annotation></semantics></math></span>, ובוחרים 5 זוגות מתוך 12: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>12</mn><mn>5</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>792</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{12}5=792</annotation></semantics></math></span>."
      },
      "recap": "תת-קבוצות של $A\\times B$: $\\binom{|A||B|}k$",
      "recapHtml": "תת-קבוצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{|A||B|}k</annotation></semantics></math></span>"
     },
     {
      "id": "C07-Q2",
      "step": {
       "type": "numeric",
       "prompt": "באותן קבוצות: כמה תתי-קבוצות בגודל 5 של $A\\times B$ אינן מכילות אף זוג עם האות $d$?",
       "answer": 126,
       "tol": 0,
       "explain": "מסלקים את 3 הזוגות עם $d$ ונשארים עם $12-3=9$ זוגות. בוחרים 5: $\\binom95=126$.",
       "promptHtml": "באותן קבוצות: כמה תתי-קבוצות בגודל 5 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span> אינן מכילות אף זוג עם האות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>?",
       "explainHtml": "מסלקים את 3 הזוגות עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> ונשארים עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">12-3=9</annotation></semantics></math></span> זוגות. בוחרים 5: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>9</mn><mn>5</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>126</mn></mrow><annotation encoding=\"application/x-tex\">\\binom95=126</annotation></semantics></math></span>."
      },
      "recap": "מסלקים את האסור ואז בוחרים",
      "recapHtml": "מסלקים את האסור ואז בוחרים"
     },
     {
      "id": "C07-Q3",
      "step": {
       "type": "numeric",
       "prompt": "באותן קבוצות: כמה תתי-קבוצות בגודל 3 של $A\\times B$ הן פונקציה מ-$A$ ל-$B$ (זוג אחד לכל איבר של $A$)?",
       "answer": 64,
       "tol": 0,
       "explain": "לכל אחד מ-3 איברי $A$ בוחרים ערך מ-$B$: $4^3=64$. זה רק חלק מ-$\\binom{12}3=220$ תתי-הקבוצות בגודל 3.",
       "promptHtml": "באותן קבוצות: כמה תתי-קבוצות בגודל 3 של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\times B</annotation></semantics></math></span> הן פונקציה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> (זוג אחד לכל איבר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>)?",
       "explainHtml": "לכל אחד מ-3 איברי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בוחרים ערך מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mn>3</mn></msup><mo>=</mo><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">4^3=64</annotation></semantics></math></span>. זה רק חלק מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>12</mn><mn>3</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>220</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{12}3=220</annotation></semantics></math></span> תתי-הקבוצות בגודל 3."
      },
      "recap": "פונקציה = תת-קבוצה עם זוג אחד לכל איבר בתחום",
      "recapHtml": "פונקציה = תת-קבוצה עם זוג אחד לכל איבר בתחום"
     },
     {
      "id": "C07-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה סדרות בנות 4 אותיות שונות מתוך $\\{a,b,c,d,e,f\\}$ מתחילות ב-$a$ **או** ב-$b$?",
       "answer": 120,
       "tol": 0,
       "explain": "מתחילות ב-$a$: שלוש אותיות מתוך החמש הנותרות, $P(5,3)=60$. כך גם עם $b$. אין סדרה שמתחילה בשתיהן: $60+60=120$.",
       "promptHtml": "כמה סדרות בנות 4 אותיות שונות מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>e</mi><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c,d,e,f\\}</annotation></semantics></math></span> מתחילות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> <strong>או</strong> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span>?",
       "explainHtml": "מתחילות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>: שלוש אותיות מתוך החמש הנותרות, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">P(5,3)=60</annotation></semantics></math></span>. כך גם עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span>. אין סדרה שמתחילה בשתיהן: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>60</mn><mo>+</mo><mn>60</mn><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">60+60=120</annotation></semantics></math></span>."
      },
      "recap": "זרים: מחברים בלי להחסיר חיתוך",
      "recapHtml": "זרים: מחברים בלי להחסיר חיתוך"
     },
     {
      "id": "C07-Q5",
      "step": {
       "type": "numeric",
       "prompt": "כמה סדרות בנות 4 אותיות שונות מתוך $\\{a,b,c,d,e,f\\}$ מתחילות ב-$ab$ **או** ב-$cd$?",
       "answer": 24,
       "tol": 0,
       "explain": "אחרי $ab$ נשארו 4 אותיות לשני מקומות: $P(4,2)=12$. אותו דבר ל-$cd$, ואין חיתוך: $24$.",
       "promptHtml": "כמה סדרות בנות 4 אותיות שונות מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>c</mi><mo separator=\"true\">,</mo><mi>d</mi><mo separator=\"true\">,</mo><mi>e</mi><mo separator=\"true\">,</mo><mi>f</mi><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a,b,c,d,e,f\\}</annotation></semantics></math></span> מתחילות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">ab</annotation></semantics></math></span> <strong>או</strong> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cd</annotation></semantics></math></span>?",
       "explainHtml": "אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">ab</annotation></semantics></math></span> נשארו 4 אותיות לשני מקומות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">P(4,2)=12</annotation></semantics></math></span>. אותו דבר ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cd</annotation></semantics></math></span>, ואין חיתוך: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">24</annotation></semantics></math></span>."
      },
      "recap": "מקבעים התחלה וסופרים חליפה על השאר",
      "recapHtml": "מקבעים התחלה וסופרים חליפה על השאר"
     },
     {
      "bankId": "24B-B-Q2b",
      "recap": "$\\binom{|A||B|}k$ וחליפות עם התחלה קבועה",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{|A||B|}k</annotation></semantics></math></span> וחליפות עם התחלה קבועה"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות ספירת פונקציות ברמת המבחן.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>סיכום הכלים של הקורס. קודם מזהים את סוג הפונקציה, אחר כך את התנאי הנוסף.</p>\n<table><thead><tr><th>סוג (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>m</mi><mo separator=\"true\">,</mo><mtext> </mtext><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">|A|=m,\\ |B|=n</annotation></semantics></math></span>)</th><th>כמה</th></tr></thead><tbody>\n<tr><td>כל הפונקציות</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">n^m</annotation></semantics></math></span></td></tr>\n<tr><td>חח\"ע</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(n,m)</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m&gt;n</annotation></semantics></math></span></td></tr>\n<tr><td>הפיכה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m=n</annotation></semantics></math></span>)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n!</annotation></semantics></math></span></td></tr>\n<tr><td>עולה ממש או יורדת ממש</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom nm</annotation></semantics></math></span></td></tr>\n<tr><td>עולה או יורדת (חלש)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow><mi>m</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{n+m-1}m</annotation></semantics></math></span></td></tr>\n<tr><td>על</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mo>∑</mo><mi>k</mi></msub><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>k</mi></msup><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>k</mi><msup><mo stretchy=\"false\">)</mo><mi>m</mi></msup></mrow><annotation encoding=\"application/x-tex\">\\sum_k(-1)^k\\binom nk(n-k)^m</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<ol>\n<li><b>\"אינן\"</b>: משלים.</li>\n<li><b>תנאי על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>S</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f(S)</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">(</mo><mi>T</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">f^{-1}(T)</annotation></semantics></math></span></b>: מפצלים לשני חלקים ומכפילים.</li>\n<li><b>\"או\"</b>: הכלה והדחה. <b>\"וגם\"</b>: קובעים את שני התנאים.</li>\n<li><b>תנאים סותרים או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> קטן מדי</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>.</li>\n<li><b>מכפלה קרטזית</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mrow><mi>m</mi><mi>n</mi></mrow><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{mn}k</annotation></semantics></math></span>.</li>\n</ol>\n<div class=\"lesson-trap\">⚠️ בשאלה עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כללי אל תשכחו את המקרים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> קטן, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n=m</annotation></semantics></math></span> (חח\"ע ועל = הפיכה) ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> גדול.</div>\n"
    },
    "questions": [
     {
      "bankId": "21B-A-Q4b",
      "recap": "לא הפיכה: $n^n-n!$",
      "recapHtml": "לא הפיכה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mi>n</mi></msup><mo>−</mo><mi>n</mi><mo stretchy=\"false\">!</mo></mrow><annotation encoding=\"application/x-tex\">n^n-n!</annotation></semantics></math></span>"
     },
     {
      "bankId": "22B-B-Q3b",
      "recap": "על ותנאי על מקור: פיצול ו-$3!\\cdot\\mathrm{Sur}$",
      "recapHtml": "על ותנאי על מקור: פיצול ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo stretchy=\"false\">!</mo><mo>⋅</mo><mrow><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">r</mi></mrow></mrow><annotation encoding=\"application/x-tex\">3!\\cdot\\mathrm{Sur}</annotation></semantics></math></span>"
     },
     {
      "bankId": "23B-A-Q1a",
      "recap": "חליפות על קבוצות ערכים זרות",
      "recapHtml": "חליפות על קבוצות ערכים זרות"
     },
     {
      "bankId": "25B-A-Q6b",
      "recap": "\"או\" בין תנאים: הכלה והדחה",
      "recapHtml": "\"או\" בין תנאים: הכלה והדחה"
     },
     {
      "bankId": "25B-A-Q2c",
      "recap": "עולה ממש עם תנאי; על וחח\"ע עם $n$ כללי: מקרים",
      "recapHtml": "עולה ממש עם תנאי; על וחח\"ע עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כללי: מקרים"
     }
    ]
   }
  ]
 },
 "graphs": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔢",
    "title": "דרגות ומשפט הדרגות",
    "goal": "לחשב מספר צלעות מתוך דרגות, ולזהות מתי סדרת דרגות לא יכולה להתקיים בגלל זוגיות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p><b>גרף לא מכוון</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> מורכב מקבוצת <b>צמתים</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi></mrow><annotation encoding=\"application/x-tex\">V</annotation></semantics></math></span> ומקבוצת <b>צלעות</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>, שכל אחת מהן זוג צמתים. בקורס הגרפים <b>פשוטים</b>: בלי לולאות ובלי צלעות כפולות. <b>דרגה</b> של צומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\"application/x-tex\">v</annotation></semantics></math></span>, שנכתבת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\deg(v)</annotation></semantics></math></span>, היא מספר הצלעות שנוגעות בו (מספר השכנים שלו). בגרף פשוט על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים תמיד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>≤</mo><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>≤</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0\\le\\deg(v)\\le n-1</annotation></semantics></math></span>.</p>\n<div class=\"lesson-rule\">🔑 <b>משפט הדרגות:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mo>∑</mo><mrow><mi>v</mi><mo>∈</mo><mi>V</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">\\sum_{v\\in V}\\deg(v)=2|E|</annotation></semantics></math></span>. כל צלע נספרת פעמיים, פעם בכל אחד מקצותיה.</div>\n<ul>\n<li><b>מסקנה:</b> מספר הצמתים בעלי דרגה אי-זוגית הוא תמיד זוגי (כי הסכום זוגי).</li>\n<li><b>גרף שלם</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_n</annotation></semantics></math></span>: כל זוג צמתים מחובר, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">|E|=\\binom n2=\\frac{n(n-1)}2</annotation></semantics></math></span>.</li>\n<li><b>גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>-רגולרי:</b> כל הדרגות שוות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>⋅</mo><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">r\\cdot|V|=2|E|</annotation></semantics></math></span>.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> בגרף על 6 צמתים כל הדרגות 3. סכום הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">6\\cdot3=18</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">|E|=9</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ סכום דרגות אי-זוגי אי-אפשרי. למשל 5 צמתים בדרגה 3 נותנים סכום 15, ולכן אין גרף כזה.</div>"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "step": {
       "type": "numeric",
       "prompt": "בגרף יש 8 צמתים וכל צומת בו בדרגה 3. כמה צלעות יש בגרף?",
       "answer": 12,
       "tol": 0,
       "explain": "סכום הדרגות הוא $8\\cdot3=24$, ולפי משפט הדרגות $|E|=24/2=12$.",
       "promptHtml": "בגרף יש 8 צמתים וכל צומת בו בדרגה 3. כמה צלעות יש בגרף?",
       "explainHtml": "סכום הדרגות הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">8\\cdot3=24</annotation></semantics></math></span>, ולפי משפט הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>24</mn><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">|E|=24/2=12</annotation></semantics></math></span>."
      },
      "recap": "$|E|=\\frac12\\sum\\deg(v)$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>∑</mo><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">|E|=\\frac12\\sum\\deg(v)</annotation></semantics></math></span>."
     },
     {
      "id": "C01-Q2",
      "question": "האם קיים גרף פשוט על 7 צמתים שכל צומת בו בדרגה 3?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי 3 קטן מ-7",
        "type": "text",
        "html": "כן, כי 3 קטן מ-7"
       },
       {
        "id": "b",
        "value": "לא, כי סכום הדרגות 21 הוא אי-זוגי",
        "type": "text",
        "html": "לא, כי סכום הדרגות 21 הוא אי-זוגי"
       },
       {
        "id": "c",
        "value": "לא, כי 3 גדול מדי ל-7 צמתים",
        "type": "text",
        "html": "לא, כי 3 גדול מדי ל-7 צמתים"
       },
       {
        "id": "d",
        "value": "כן, לכל מספר צמתים קיים גרף 3-רגולרי",
        "type": "text",
        "html": "כן, לכל מספר צמתים קיים גרף 3-רגולרי"
       }
      ],
      "correctId": "b",
      "explanation": "סכום הדרגות הוא $7\\cdot3=21$, והוא חייב להיות $2|E|$, מספר זוגי. לכן אין גרף כזה. הדרגה 3 לא גדולה מדי (המקסימום הוא $6$). הטענה שלכל מספר צמתים קיים גרף 3-רגולרי שגויה: על 8 צמתים קיים, על 7 לא.",
      "recap": "סכום הדרגות חייב להיות זוגי.",
      "questionHtml": "האם קיים גרף פשוט על 7 צמתים שכל צומת בו בדרגה 3?",
      "explanationHtml": "סכום הדרגות הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">7\\cdot3=21</annotation></semantics></math></span>, והוא חייב להיות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">2|E|</annotation></semantics></math></span>, מספר זוגי. לכן אין גרף כזה. הדרגה 3 לא גדולה מדי (המקסימום הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>). הטענה שלכל מספר צמתים קיים גרף 3-רגולרי שגויה: על 8 צמתים קיים, על 7 לא.",
      "recapHtml": "סכום הדרגות חייב להיות זוגי."
     },
     {
      "id": "C01-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה צלעות יש בגרף השלם $K_9$ ?",
       "answer": 36,
       "tol": 0,
       "explain": "כל זוג צמתים מחובר: $\\binom92=\\frac{9\\cdot8}2=36$.",
       "promptHtml": "כמה צלעות יש בגרף השלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>9</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_9</annotation></semantics></math></span> ?",
       "explainHtml": "כל זוג צמתים מחובר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>9</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>9</mn><mo>⋅</mo><mn>8</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">\\binom92=\\frac{9\\cdot8}2=36</annotation></semantics></math></span>."
      },
      "recap": "$|E(K_n)|=\\binom n2$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><msub><mi>K</mi><mi>n</mi></msub><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">|E(K_n)|=\\binom n2</annotation></semantics></math></span>."
     },
     {
      "id": "C01-Q4",
      "step": {
       "type": "numeric",
       "prompt": "בגרף 10 צמתים: ארבעה מהם בדרגה 3 ושישה בדרגה 2. כמה צלעות יש בו?",
       "answer": 12,
       "tol": 0,
       "explain": "סכום הדרגות $4\\cdot3+6\\cdot2=24$, ולכן $|E|=12$.",
       "promptHtml": "בגרף 10 צמתים: ארבעה מהם בדרגה 3 ושישה בדרגה 2. כמה צלעות יש בו?",
       "explainHtml": "סכום הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>+</mo><mn>6</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot3+6\\cdot2=24</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">|E|=12</annotation></semantics></math></span>."
      },
      "recap": "מחברים את כל הדרגות ומחלקים ב-2.",
      "recapHtml": "מחברים את כל הדרגות ומחלקים ב-2."
     },
     {
      "id": "C01-Q5",
      "question": "איזו מהסדרות הבאות <b>לא</b> יכולה להיות סדרת הדרגות של גרף?",
      "options": [
       {
        "id": "a",
        "value": "$2,2,2,2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2,2,2,2</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$3,3,2,2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3,3,2,2</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$3,3,3,1,1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,3,3,1,1</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$4,2,2,2,2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">4,2,2,2,2</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "בסדרה $3,3,3,1,1$ סכום הדרגות הוא $11$, אי-זוגי (חמישה צמתים בדרגה אי-זוגית), ולכן אין גרף כזה. את שלוש האחרות אפשר לממש: $C_4$, גרף $K_4$ בלי צלע אחת, ושני משולשים החולקים צומת.",
      "recap": "סכום אי-זוגי: אין גרף.",
      "questionHtml": "איזו מהסדרות הבאות &lt;b&gt;לא&lt;/b&gt; יכולה להיות סדרת הדרגות של גרף?",
      "explanationHtml": "בסדרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,3,3,1,1</annotation></semantics></math></span> סכום הדרגות הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">11</annotation></semantics></math></span>, אי-זוגי (חמישה צמתים בדרגה אי-זוגית), ולכן אין גרף כזה. את שלוש האחרות אפשר לממש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_4</annotation></semantics></math></span>, גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_4</annotation></semantics></math></span> בלי צלע אחת, ושני משולשים החולקים צומת.",
      "recapHtml": "סכום אי-זוגי: אין גרף."
     },
     {
      "id": "C01-Q6",
      "step": {
       "type": "numeric",
       "prompt": "בגרף רגולרי יש 10 צמתים ו-20 צלעות. מהי הדרגה של כל צומת?",
       "answer": 4,
       "tol": 0,
       "explain": "$r\\cdot10=2\\cdot20=40$, ולכן $r=4$.",
       "promptHtml": "בגרף רגולרי יש 10 צמתים ו-20 צלעות. מהי הדרגה של כל צומת?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>⋅</mo><mn>10</mn><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">r\\cdot10=2\\cdot20=40</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">r=4</annotation></semantics></math></span>."
      },
      "recap": "$r|V|=2|E|$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">r|V|=2|E|</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🔄",
    "title": "הגרף המשלים",
    "goal": "לחשב דרגות ומספר צלעות במשלים, ולזהות משלימים של גרפים מוכרים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>ה<b>משלים</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span> של גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(V,E)</annotation></semantics></math></span> הוא גרף על אותם צמתים, שבו שני צמתים שונים מחוברים <b>בדיוק כאשר הם לא מחוברים</b> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>. כלומר מוחקים את כל הצלעות הקיימות ומוסיפים את כל החסרות.</p>\n<div class=\"lesson-rule\">🔑 בגרף על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mi>G</mi></msub><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>+</mo><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><mi>G</mi></mrow></msub><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\deg_G(v)+\\deg_{\\overline G}(v)=n-1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><mi>G</mi><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><mrow class=\"ovl\"><mi>G</mi></mrow><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">|E(G)|+|E(\\overline G)|=\\binom n2</annotation></semantics></math></span>.</div>\n<ul>\n<li>המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_n</annotation></semantics></math></span> הוא גרף בלי צלעות (n צמתים מבודדים), ולהפך.</li>\n<li>המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{m,n}</annotation></semantics></math></span> הוא איחוד זר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>m</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_m</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_n</annotation></semantics></math></span>.</li>\n<li>המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_5</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_5</annotation></semantics></math></span> (כשרושמים את הצמתים בסדר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>5</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_1,v_3,v_5,v_2,v_4</annotation></semantics></math></span>).</li>\n<li>אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> <b>לא קשיר</b>, אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span> קשיר: שני צמתים מרכיבים שונים לא מחוברים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>, ולכן מחוברים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span>. ההפך לא נכון: ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span> ולמשלים שלו שניהם קשירים.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> איזומורפי ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span>, אז יש להם אותו מספר צלעות, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">2|E|=\\binom n2</annotation></semantics></math></span>. בגרף כזה על 5 צמתים יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">|E|=5</annotation></semantics></math></span> צלעות.</div>\n<div class=\"lesson-trap\">⚠️ משלים הופך <b>דרגה</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn><mo>−</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">n-1-d</annotation></semantics></math></span> ולא ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">n-d</annotation></semantics></math></span>. הצומת עצמו לא נספר כשכן.</div>"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "בגרף $G$ יש 7 צמתים ו-8 צלעות. כמה צלעות יש במשלים $\\overline G$ ?",
       "answer": 13,
       "tol": 0,
       "explain": "$\\binom72=21$, ולכן במשלים $21-8=13$ צלעות.",
       "promptHtml": "בגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> יש 7 צמתים ו-8 צלעות. כמה צלעות יש במשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">\\binom72=21</annotation></semantics></math></span>, ולכן במשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mo>−</mo><mn>8</mn><mo>=</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">21-8=13</annotation></semantics></math></span> צלעות."
      },
      "recap": "$|E(\\overline G)|=\\binom n2-|E|$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><mrow class=\"ovl\"><mi>G</mi></mrow><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|E(\\overline G)|=\\binom n2-|E|</annotation></semantics></math></span>."
     },
     {
      "id": "C02-Q2",
      "step": {
       "type": "numeric",
       "prompt": "בגרף על 9 צמתים יש צומת $v$ בדרגה 2. מהי הדרגה של $v$ במשלים?",
       "answer": 6,
       "tol": 0,
       "explain": "$\\deg_{\\overline G}(v)=n-1-\\deg_G(v)=9-1-2=6$.",
       "promptHtml": "בגרף על 9 צמתים יש צומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\"application/x-tex\">v</annotation></semantics></math></span> בדרגה 2. מהי הדרגה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\"application/x-tex\">v</annotation></semantics></math></span> במשלים?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mrow class=\"ovl\"><mi>G</mi></mrow></msub><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>−</mo><msub><mrow><mi>deg</mi><mo>⁡</mo></mrow><mi>G</mi></msub><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>9</mn><mo>−</mo><mn>1</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">\\deg_{\\overline G}(v)=n-1-\\deg_G(v)=9-1-2=6</annotation></semantics></math></span>."
      },
      "recap": "דרגה במשלים: $n-1-d$.",
      "recapHtml": "דרגה במשלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn><mo>−</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">n-1-d</annotation></semantics></math></span>."
     },
     {
      "id": "C02-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה צלעות יש במשלים של $K_{3,4}$ ?",
       "answer": 9,
       "tol": 0,
       "explain": "ל-$K_{3,4}$ יש $12$ צלעות, ו-$\\binom72=21$, ולכן במשלים $9$ צלעות. זה מתאים לכך שהמשלים הוא $K_3\\cup K_4$ עם $3+6=9$ צלעות.",
       "promptHtml": "כמה צלעות יש במשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,4}</annotation></semantics></math></span> ?",
       "explainHtml": "ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,4}</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> צלעות, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>7</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">\\binom72=21</annotation></semantics></math></span>, ולכן במשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">9</annotation></semantics></math></span> צלעות. זה מתאים לכך שהמשלים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>3</mn></msub><mo>∪</mo><msub><mi>K</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_3\\cup K_4</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">3+6=9</annotation></semantics></math></span> צלעות."
      },
      "recap": "משלים של $K_{m,n}$: $K_m\\cup K_n$.",
      "recapHtml": "משלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{m,n}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>m</mi></msub><mo>∪</mo><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_m\\cup K_n</annotation></semantics></math></span>."
     },
     {
      "id": "C02-Q4",
      "question": "איזה גרף הוא המשלים של $C_5$ ?",
      "options": [
       {
        "id": "a",
        "value": "מסלול על 5 צמתים",
        "type": "text",
        "html": "מסלול על 5 צמתים"
       },
       {
        "id": "b",
        "value": "מעגל באורך 5",
        "type": "text",
        "html": "מעגל באורך 5"
       },
       {
        "id": "c",
        "value": "כוכב עם 4 עלים",
        "type": "text",
        "html": "כוכב עם 4 עלים"
       },
       {
        "id": "d",
        "value": "גרף בלי צלעות",
        "type": "text",
        "html": "גרף בלי צלעות"
       }
      ],
      "correctId": "b",
      "explanation": "ל-$C_5$ יש 5 צלעות והמשלים הוא 2-רגולרי עם $10-5=5$ צלעות, ובאמת מעגל באורך 5. מסלול על 5 צמתים יש לו רק 4 צלעות, לכוכב 4 צלעות ודרגות שונות, וגרף בלי צלעות הוא המשלים של $K_5$.",
      "recap": "$\\overline{C_5}\\cong C_5$.",
      "questionHtml": "איזה גרף הוא המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_5</annotation></semantics></math></span> ?",
      "explanationHtml": "ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_5</annotation></semantics></math></span> יש 5 צלעות והמשלים הוא 2-רגולרי עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>−</mo><mn>5</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">10-5=5</annotation></semantics></math></span> צלעות, ובאמת מעגל באורך 5. מסלול על 5 צמתים יש לו רק 4 צלעות, לכוכב 4 צלעות ודרגות שונות, וגרף בלי צלעות הוא המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span>.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><msub><mi>C</mi><mn>5</mn></msub></mrow><mo>≅</mo><msub><mi>C</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">\\overline{C_5}\\cong C_5</annotation></semantics></math></span>."
     },
     {
      "id": "C02-Q5",
      "question": "הגרף $G$ אינו קשיר. מה נכון תמיד לגבי $\\overline G$ ?",
      "options": [
       {
        "id": "a",
        "value": "אינו קשיר",
        "type": "text",
        "html": "אינו קשיר"
       },
       {
        "id": "b",
        "value": "קשיר תמיד",
        "type": "text",
        "html": "קשיר תמיד"
       },
       {
        "id": "c",
        "value": "הוא עץ",
        "type": "text",
        "html": "הוא עץ"
       },
       {
        "id": "d",
        "value": "הוא דו-צדדי",
        "type": "text",
        "html": "הוא דו-צדדי"
       }
      ],
      "correctId": "b",
      "explanation": "שני צמתים משני רכיבים שונים לא מחוברים ב-$G$ ולכן מחוברים ב-$\\overline G$, וכל צומת מחובר דרכם לכל השאר. המשלים לא חייב להיות עץ או דו-צדדי: משלים של שלושה צמתים מבודדים הוא משולש.",
      "recap": "$G$ לא קשיר גורר $\\overline G$ קשיר.",
      "questionHtml": "הגרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> אינו קשיר. מה נכון תמיד לגבי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span> ?",
      "explanationHtml": "שני צמתים משני רכיבים שונים לא מחוברים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> ולכן מחוברים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span>, וכל צומת מחובר דרכם לכל השאר. המשלים לא חייב להיות עץ או דו-צדדי: משלים של שלושה צמתים מבודדים הוא משולש.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> לא קשיר גורר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span> קשיר."
     },
     {
      "id": "C02-Q6",
      "step": {
       "type": "numeric",
       "prompt": "גרף $G$ על 13 צמתים איזומורפי למשלים שלו. כמה צלעות יש בו?",
       "answer": 39,
       "tol": 0,
       "explain": "אותו מספר צלעות ב-$G$ וב-$\\overline G$, וסכומם $\\binom{13}2=78$. לכן $|E|=39$.",
       "promptHtml": "גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> על 13 צמתים איזומורפי למשלים שלו. כמה צלעות יש בו?",
       "explainHtml": "אותו מספר צלעות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span>, וסכומם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>13</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>78</mn></mrow><annotation encoding=\"application/x-tex\">\\binom{13}2=78</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>39</mn></mrow><annotation encoding=\"application/x-tex\">|E|=39</annotation></semantics></math></span>."
      },
      "recap": "$G\\cong\\overline G$ גורר $|E|=\\frac12\\binom n2$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>≅</mo><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">G\\cong\\overline G</annotation></semantics></math></span> גורר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">|E|=\\frac12\\binom n2</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🧮",
    "title": "סדרות דרגות ואלגוריתם Havel-Hakimi",
    "goal": "להחליט אם סדרת מספרים היא סדרת הדרגות של גרף, ולהסביר למה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>סדרה של מספרים טבעיים היא <b>גרפית</b> אם קיים גרף פשוט שהדרגות של צמתיו הן בדיוק הסדרה. שני תנאים הכרחיים: הסכום <b>זוגי</b>, והמספר הגדול ביותר <b>קטן מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span></b> (מספר איברי הסדרה). אבל הם לא מספיקים: הסדרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,3,1,1</annotation></semantics></math></span> עוברת את שניהם ואינה גרפית.</p>\n<div class=\"lesson-rule\">🔑 <b>אלגוריתם Havel-Hakimi:</b> (1) מסדרים את הסדרה בסדר יורד. (2) מוחקים את האיבר הראשון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> ומפחיתים 1 מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> האיברים הבאים; אם אין מספיק איברים או שמתקבל מספר שלילי, הסדרה לא גרפית. (3) חוזרים על השלבים עד שכל האיברים 0 (הסדרה גרפית) או עד כישלון.</div>\n<p>הרעיון: צומת בדרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> אפשר לחבר לצמתים בעלי הדרגות הגדולות ביותר, ולכן אחרי מחיקתו נשארת בעיה קטנה יותר.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,2,2,2,1</annotation></semantics></math></span> גרפית? מוחקים 3 ומפחיתים משלושת הבאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1,1,1,1</annotation></semantics></math></span>. מוחקים 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0,1,1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1,1,0</annotation></semantics></math></span>. מוחקים 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0,0</annotation></semantics></math></span>. הכול אפס, ולכן הסדרה גרפית.</div>\n<div class=\"lesson-trap\">⚠️ צומת בדרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> מחובר לכל הצמתים האחרים, ולכן לא יכול להיות בגרף אותו צומת בדרגה 0. לכן אין גרף על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span> צמתים שבו כל הדרגות שונות זו מזו.</div>"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "איזו מהסדרות הבאות (כולן עם סכום זוגי) היא <b>לא</b> סדרת דרגות של גרף?",
      "options": [
       {
        "id": "a",
        "value": "$3,3,2,2,2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3,3,2,2,2</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$4,2,2,1,1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">4,2,2,1,1</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$4,4,3,1,1,1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">4,4,3,1,1,1</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$3,3,3,3$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3,3,3,3</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "ב-$4,4,3,1,1,1$ מוחקים 4 ומפחיתים מארבעת הבאים: $3,2,0,0,1$, כלומר $3,2,1,0,0$. מוחקים 3 ומפחיתים משלושת הבאים: $1,0,-1,0$, מספר שלילי, ולכן הסדרה לא גרפית. השאר גרפיות: $3,3,3,3$ הוא $K_4$, ו-$4,2,2,1,1$ מתקבלת מ-$1,1,0,0$ אחרי חיבור צומת לארבעת הצמתים.",
      "recap": "סכום זוגי לא מספיק: מריצים Havel-Hakimi.",
      "questionHtml": "איזו מהסדרות הבאות (כולן עם סכום זוגי) היא &lt;b&gt;לא&lt;/b&gt; סדרת דרגות של גרף?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">4,4,3,1,1,1</annotation></semantics></math></span> מוחקים 4 ומפחיתים מארבעת הבאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,2,0,0,1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">3,2,1,0,0</annotation></semantics></math></span>. מוחקים 3 ומפחיתים משלושת הבאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1,0,-1,0</annotation></semantics></math></span>, מספר שלילי, ולכן הסדרה לא גרפית. השאר גרפיות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3,3,3,3</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_4</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">4,2,2,1,1</annotation></semantics></math></span> מתקבלת מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1,1,0,0</annotation></semantics></math></span> אחרי חיבור צומת לארבעת הצמתים.",
      "recapHtml": "סכום זוגי לא מספיק: מריצים Havel-Hakimi."
     },
     {
      "id": "C03-Q2",
      "question": "מריצים צעד אחד של Havel-Hakimi על הסדרה $4,3,3,2,2,1,1$. מהי הסדרה שמתקבלת (בסדר יורד)?",
      "options": [
       {
        "id": "a",
        "value": "$2,2,1,1,1,1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,2,1,1,1,1</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$3,2,2,1,1,1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,2,2,1,1,1</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2,2,1,1,1,0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">2,2,1,1,1,0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$3,3,2,2,1,1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,3,2,2,1,1</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "מוחקים 4 ומפחיתים 1 מארבעת הבאים $3,3,2,2$: מתקבל $2,2,1,1$, ושני האיברים האחרונים $1,1$ לא משתנים. התוצאה $2,2,1,1,1,1$. בתשובות האחרות הופחת מהצמתים הלא נכונים או במספר לא נכון של צמתים.",
      "recap": "מוחקים $d$ ומפחיתים 1 מ-$d$ הבאים.",
      "questionHtml": "מריצים צעד אחד של Havel-Hakimi על הסדרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">4,3,3,2,2,1,1</annotation></semantics></math></span>. מהי הסדרה שמתקבלת (בסדר יורד)?",
      "explanationHtml": "מוחקים 4 ומפחיתים 1 מארבעת הבאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3,3,2,2</annotation></semantics></math></span>: מתקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,2,1,1</annotation></semantics></math></span>, ושני האיברים האחרונים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1,1</annotation></semantics></math></span> לא משתנים. התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,2,1,1,1,1</annotation></semantics></math></span>. בתשובות האחרות הופחת מהצמתים הלא נכונים או במספר לא נכון של צמתים.",
      "recapHtml": "מוחקים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> ומפחיתים 1 מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> הבאים."
     },
     {
      "id": "C03-Q3",
      "question": "האם קיים גרף פשוט על 7 צמתים שבו כל הדרגות שונות זו מזו?",
      "options": [
       {
        "id": "a",
        "value": "כן, למשל מסלול",
        "type": "text",
        "html": "כן, למשל מסלול"
       },
       {
        "id": "b",
        "value": "לא: הדרגות היו חייבות להיות 0,1,2,3,4,5,6 וצומת בדרגה 6 לא יכול להתקיים יחד עם צומת בדרגה 0",
        "type": "text",
        "html": "לא: הדרגות היו חייבות להיות 0,1,2,3,4,5,6 וצומת בדרגה 6 לא יכול להתקיים יחד עם צומת בדרגה 0"
       },
       {
        "id": "c",
        "value": "כן, אבל רק אם הסכום זוגי",
        "type": "text",
        "html": "כן, אבל רק אם הסכום זוגי"
       },
       {
        "id": "d",
        "value": "לא, כי 7 מספר אי-זוגי",
        "type": "text",
        "html": "לא, כי 7 מספר אי-זוגי"
       }
      ],
      "correctId": "b",
      "explanation": "בגרף על 7 צמתים הדרגות בין 0 ל-6, ולכן 7 דרגות שונות הן בדיוק $0,1,\\dots,6$. אבל צומת בדרגה 6 מחובר לכולם, כולל לצומת בדרגה 0. סתירה. במסלול יש דרגות חוזרות.",
      "recap": "דרגה $n-1$ ודרגה 0 לא מופיעות יחד.",
      "questionHtml": "האם קיים גרף פשוט על 7 צמתים שבו כל הדרגות שונות זו מזו?",
      "explanationHtml": "בגרף על 7 צמתים הדרגות בין 0 ל-6, ולכן 7 דרגות שונות הן בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">0,1,\\dots,6</annotation></semantics></math></span>. אבל צומת בדרגה 6 מחובר לכולם, כולל לצומת בדרגה 0. סתירה. במסלול יש דרגות חוזרות.",
      "recapHtml": "דרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> ודרגה 0 לא מופיעות יחד."
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "numeric",
       "prompt": "סדרת הדרגות $5,4,3,3,2,2,2,1$ גרפית. כמה צלעות יש בגרף?",
       "answer": 11,
       "tol": 0,
       "explain": "הסכום $5+4+3+3+2+2+2+1=22$, ולכן $|E|=11$.",
       "promptHtml": "סדרת הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">5,4,3,3,2,2,2,1</annotation></semantics></math></span> גרפית. כמה צלעות יש בגרף?",
       "explainHtml": "הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">5+4+3+3+2+2+2+1=22</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">|E|=11</annotation></semantics></math></span>."
      },
      "recap": "$|E|=\\frac12\\sum d_i$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>∑</mo><msub><mi>d</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">|E|=\\frac12\\sum d_i</annotation></semantics></math></span>."
     },
     {
      "id": "C03-Q5",
      "question": "האם $7,6,5,5,3,2,2,2$ היא סדרת דרגות של גרף?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי הסכום זוגי",
        "type": "text",
        "html": "כן, כי הסכום זוגי"
       },
       {
        "id": "b",
        "value": "לא, אף שהסכום זוגי האלגוריתם נכשל",
        "type": "text",
        "html": "לא, אף שהסכום זוגי האלגוריתם נכשל"
       },
       {
        "id": "c",
        "value": "לא, כי הסכום אי-זוגי",
        "type": "text",
        "html": "לא, כי הסכום אי-זוגי"
       },
       {
        "id": "d",
        "value": "כן, כי הדרגה המקסימלית קטנה מ-8",
        "type": "text",
        "html": "כן, כי הדרגה המקסימלית קטנה מ-8"
       }
      ],
      "correctId": "b",
      "explanation": "הסכום $32$ זוגי והמקסימום $7<8$, אבל מוחקים 7: $5,4,4,2,1,1,1$. מוחקים 5: $3,3,1,0,0,1$, כלומר $3,3,1,1,0,0$. מוחקים 3: $2,0,0,0,0$. מוחקים 2: צריך להפחית מהשניים הבאים, שהם 0 ו-0, ומתקבל מספר שלילי. אין גרף כזה.",
      "recap": "שני התנאים ההכרחיים לא מספיקים.",
      "questionHtml": "האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">7,6,5,5,3,2,2,2</annotation></semantics></math></span> היא סדרת דרגות של גרף?",
      "explanationHtml": "הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">32</annotation></semantics></math></span> זוגי והמקסימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>&lt;</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">7&lt;8</annotation></semantics></math></span>, אבל מוחקים 7: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">5,4,4,2,1,1,1</annotation></semantics></math></span>. מוחקים 5: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,3,1,0,0,1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">3,3,1,1,0,0</annotation></semantics></math></span>. מוחקים 3: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">2,0,0,0,0</annotation></semantics></math></span>. מוחקים 2: צריך להפחית מהשניים הבאים, שהם 0 ו-0, ומתקבל מספר שלילי. אין גרף כזה.",
      "recapHtml": "שני התנאים ההכרחיים לא מספיקים."
     },
     {
      "id": "C03-Q6",
      "step": {
       "type": "order",
       "prompt": "סדרו את שלבי Havel-Hakimi על הסדרה $3,3,2,2,1,1$.",
       "lines": [
        "מוחקים 3 ומפחיתים 1 מהשלושה הבאים: $2,1,1,1,1$",
        "מוחקים 2 ומפחיתים 1 מהשניים הבאים: $1,1,0,0$",
        "מוחקים 1 ומפחיתים 1 מהבא: $0,0,0$",
        "כל האיברים אפס, ולכן הסדרה גרפית"
       ],
       "explain": "כל שלב מתחיל בסדרה שנוצרה בקודמו, ולכן הסדר קבוע.",
       "promptHtml": "סדרו את שלבי Havel-Hakimi על הסדרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3,3,2,2,1,1</annotation></semantics></math></span>.",
       "explainHtml": "כל שלב מתחיל בסדרה שנוצרה בקודמו, ולכן הסדר קבוע.",
       "linesHtml": [
        "מוחקים 3 ומפחיתים 1 מהשלושה הבאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2,1,1,1,1</annotation></semantics></math></span>",
        "מוחקים 2 ומפחיתים 1 מהשניים הבאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1,1,0,0</annotation></semantics></math></span>",
        "מוחקים 1 ומפחיתים 1 מהבא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0,0,0</annotation></semantics></math></span>",
        "כל האיברים אפס, ולכן הסדרה גרפית"
       ]
      },
      "recap": "ממשיכים עד אפסים (גרפית) או עד איבר שלילי.",
      "recapHtml": "ממשיכים עד אפסים (גרפית) או עד איבר שלילי."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔀",
    "title": "גרפים דו-צדדיים",
    "goal": "לזהות גרף דו-צדדי, לספור צלעות לפי הצדדים, ולהסביר למה המשלים שלו כמעט אף פעם לא דו-צדדי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>גרף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>E</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">G=(A,B,E)</annotation></semantics></math></span> הוא <b>דו-צדדי</b> אם אפשר לחלק את הצמתים לשתי קבוצות לא ריקות וזרות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A,B</annotation></semantics></math></span>, כך שכל צלע מחברת צומת מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> לצומת מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>. אין צלעות בתוך צד.</p>\n<div class=\"lesson-rule\">🔑 גרף דו-צדדי אם ורק אם אין בו מעגל <b>באורך אי-זוגי</b>. בפרט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">C_n</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> זוגי דו-צדדי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">C_n</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אי-זוגי לא, וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_n</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge3</annotation></semantics></math></span> לא (יש בו משולש).</div>\n<ul>\n<li><b>דו-צדדי שלם</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{m,n}</annotation></semantics></math></span>: כל צומת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">|A|=m</annotation></semantics></math></span>) מחובר לכל צומת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">|B|=n</annotation></semantics></math></span>). יש בו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">mn</annotation></semantics></math></span> צלעות.</li>\n<li>בכל גרף דו-צדדי כל צלע נספרת פעם אחת בצד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ופעם אחת בצד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mo>∑</mo><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>a</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msub><mo>∑</mo><mrow><mi>b</mi><mo>∈</mo><mi>B</mi></mrow></msub><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>b</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">\\sum_{a\\in A}\\deg(a)=\\sum_{b\\in B}\\deg(b)=|E|</annotation></semantics></math></span>.</li>\n<li>אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">|A|=a</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">|B|=n-a</annotation></semantics></math></span>, יש לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a(n-a)</annotation></semantics></math></span> צלעות.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> בגרף דו-צדדי עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">|A|=3</annotation></semantics></math></span> שבו כל צומת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בדרגה 4 יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12</annotation></semantics></math></span> צלעות. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">|B|=6</annotation></semantics></math></span> וכל דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> שוות, כל צומת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> בדרגה 2.</div>\n<div class=\"lesson-trap\">⚠️ משלים של גרף דו-צדדי על 5 צמתים או יותר <b>אינו</b> דו-צדדי: לפחות אחד הצדדים מכיל 3 צמתים, ובמקור אין ביניהם צלעות, ולכן במשלים הם יוצרים משולש. משולש הוא מעגל אי-זוגי.</div>"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה צלעות יש ב-$K_{5,7}$ ?",
       "answer": 35,
       "tol": 0,
       "explain": "כל אחד מ-5 צמתי $A$ מחובר לכל 7 צמתי $B$: $5\\cdot7=35$.",
       "promptHtml": "כמה צלעות יש ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>5</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{5,7}</annotation></semantics></math></span> ?",
       "explainHtml": "כל אחד מ-5 צמתי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מחובר לכל 7 צמתי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>7</mn><mo>=</mo><mn>35</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot7=35</annotation></semantics></math></span>."
      },
      "recap": "$|E(K_{m,n})|=mn$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><msub><mi>K</mi><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow></msub><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>m</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">|E(K_{m,n})|=mn</annotation></semantics></math></span>."
     },
     {
      "id": "C04-Q2",
      "question": "איזה מהגרפים הבאים דו-צדדי?",
      "options": [
       {
        "id": "a",
        "value": "$C_7$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_7</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$C_8$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>8</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_8</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$K_4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_4</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$K_5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "$C_8$ הוא מעגל באורך זוגי, ולכן אפשר לצבוע את צמתיו לסירוגין בשני צדדים. ב-$C_7$ יש מעגל באורך 7 (אי-זוגי), וב-$K_4$ ו-$K_5$ יש משולשים.",
      "recap": "אין מעגל אי-זוגי: דו-צדדי.",
      "questionHtml": "איזה מהגרפים הבאים דו-צדדי?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>8</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_8</annotation></semantics></math></span> הוא מעגל באורך זוגי, ולכן אפשר לצבוע את צמתיו לסירוגין בשני צדדים. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_7</annotation></semantics></math></span> יש מעגל באורך 7 (אי-זוגי), וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_4</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span> יש משולשים.",
      "recapHtml": "אין מעגל אי-זוגי: דו-צדדי."
     },
     {
      "id": "C04-Q3",
      "step": {
       "type": "numeric",
       "prompt": "בגרף דו-צדדי $|A|=4$ וכל צומת של $A$ בדרגה 3. ב-$B$ יש 6 צמתים, וכולם באותה דרגה. מהי הדרגה של צומת ב-$B$ ?",
       "answer": 2,
       "tol": 0,
       "explain": "מספר הצלעות $4\\cdot3=12$, וגם $6\\cdot d=12$. לכן $d=2$.",
       "promptHtml": "בגרף דו-צדדי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">|A|=4</annotation></semantics></math></span> וכל צומת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בדרגה 3. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> יש 6 צמתים, וכולם באותה דרגה. מהי הדרגה של צומת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> ?",
       "explainHtml": "מספר הצלעות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot3=12</annotation></semantics></math></span>, וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><mi>d</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">6\\cdot d=12</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">d=2</annotation></semantics></math></span>."
      },
      "recap": "$\\sum_A\\deg=\\sum_B\\deg=|E|$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mo>∑</mo><mi>A</mi></msub><mi>deg</mi><mo>⁡</mo><mo>=</mo><msub><mo>∑</mo><mi>B</mi></msub><mi>deg</mi><mo>⁡</mo><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">\\sum_A\\deg=\\sum_B\\deg=|E|</annotation></semantics></math></span>."
     },
     {
      "id": "C04-Q4",
      "question": "האם המשלים של $K_{2,5}$ הוא דו-צדדי?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי $K_{2,5}$ דו-צדדי",
        "type": "text",
        "html": "כן, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{2,5}</annotation></semantics></math></span> דו-צדדי"
       },
       {
        "id": "b",
        "value": "לא דו-צדדי, כי במשלים יש משולש",
        "type": "text",
        "html": "לא דו-צדדי, כי במשלים יש משולש"
       },
       {
        "id": "c",
        "value": "לא, כי יש בו 7 צמתים",
        "type": "text",
        "html": "לא, כי יש בו 7 צמתים"
       },
       {
        "id": "d",
        "value": "כן, כי הוא קשיר",
        "type": "text",
        "html": "כן, כי הוא קשיר"
       }
      ],
      "correctId": "b",
      "explanation": "המשלים הוא $K_2\\cup K_5$. הצד בן 5 הצמתים הופך לקליקה $K_5$, ובה משולש. תכונה של גרף לא עוברת למשלים שלו. 7 צמתים לבדם לא מונעים דו-צדדיות, והמשלים אף אינו קשיר.",
      "recap": "צד עם 3 צמתים נהפך למשולש במשלים.",
      "questionHtml": "האם המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{2,5}</annotation></semantics></math></span> הוא דו-צדדי?",
      "explanationHtml": "המשלים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>∪</mo><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_2\\cup K_5</annotation></semantics></math></span>. הצד בן 5 הצמתים הופך לקליקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span>, ובה משולש. תכונה של גרף לא עוברת למשלים שלו. 7 צמתים לבדם לא מונעים דו-צדדיות, והמשלים אף אינו קשיר.",
      "recapHtml": "צד עם 3 צמתים נהפך למשולש במשלים."
     },
     {
      "id": "C04-Q5",
      "step": {
       "type": "numeric",
       "prompt": "מהו מספר הצלעות המרבי בגרף דו-צדדי על 9 צמתים?",
       "answer": 20,
       "tol": 0,
       "explain": "אם $|A|=a$ אז $|B|=9-a$ ומספר הצלעות לכל היותר $a(9-a)$. הערך הגדול ביותר ב-$a=4$ או $a=5$: $4\\cdot5=20$.",
       "promptHtml": "מהו מספר הצלעות המרבי בגרף דו-צדדי על 9 צמתים?",
       "explainHtml": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">|A|=a</annotation></semantics></math></span> אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>9</mn><mo>−</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">|B|=9-a</annotation></semantics></math></span> ומספר הצלעות לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo stretchy=\"false\">(</mo><mn>9</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a(9-a)</annotation></semantics></math></span>. הערך הגדול ביותר ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a=4</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">a=5</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot5=20</annotation></semantics></math></span>."
      },
      "recap": "מקסימום $a(n-a)$, בצדדים שווים ככל האפשר.",
      "recapHtml": "מקסימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a(n-a)</annotation></semantics></math></span>, בצדדים שווים ככל האפשר."
     },
     {
      "id": "C04-Q6",
      "step": {
       "type": "numeric",
       "prompt": "בגרף דו-צדדי דרגות הצמתים ב-$A$ הן $4,3,3,2$. ב-$B$ יש חמישה צמתים בדרגות $3,3,2,2,x$. מהו $x$ ?",
       "answer": 2,
       "tol": 0,
       "explain": "בצד $A$ יש $4+3+3+2=12$ צלעות. ב-$B$: $3+3+2+2+x=12$, לכן $x=2$.",
       "promptHtml": "בגרף דו-צדדי דרגות הצמתים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">4,3,3,2</annotation></semantics></math></span>. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> יש חמישה צמתים בדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">3,3,2,2,x</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> ?",
       "explainHtml": "בצד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">4+3+3+2=12</annotation></semantics></math></span> צלעות. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>+</mo><mi>x</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">3+3+2+2+x=12</annotation></semantics></math></span>, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=2</annotation></semantics></math></span>."
      },
      "recap": "סכום הדרגות בכל צד שווה למספר הצלעות.",
      "recapHtml": "סכום הדרגות בכל צד שווה למספר הצלעות."
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🌳",
    "title": "עצים ויערות",
    "goal": "לזהות עץ, ולחשב מספר צלעות, רכיבים ועלים לפי מספר הצמתים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p><b>עץ</b> הוא גרף קשיר בלי מעגלים. <b>יער</b> הוא גרף בלי מעגלים (איחוד זר של עצים). <b>עלה</b> הוא צומת בדרגה 1.</p>\n<div class=\"lesson-rule\">🔑 בגרף על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים כל אחד מהתנאים הבאים שקול ל\"עץ\": (1) קשיר וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|E|=n-1</annotation></semantics></math></span>; (2) בלי מעגלים וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|E|=n-1</annotation></semantics></math></span>; (3) לכל שני צמתים יש מסלול <b>יחיד</b> ביניהם.</div>\n<ul>\n<li>ביער עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> רכיבי קשירות יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">|E|=n-k</annotation></semantics></math></span> צלעות, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">k=n-|E|</annotation></semantics></math></span>.</li>\n<li>לכל עץ עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span> צמתים יש לפחות <b>שני עלים</b>: שני קצות המסלול הארוך ביותר.</li>\n<li>הסרת עלה מעץ משאירה עץ.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> יער עם 20 צמתים ו-3 רכיבים הוא בעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">20-3=17</annotation></semantics></math></span> צלעות.</div>\n<div class=\"lesson-trap\">⚠️ התנאי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|E|=n-1</annotation></semantics></math></span> לבדו לא מספיק: צריך גם קשירות או גם היעדר מעגלים. משולש וצומת מבודד: 4 צמתים, 3 צלעות, אבל זה לא עץ.</div>"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה צלעות יש בעץ עם 15 צמתים?",
       "answer": 14,
       "tol": 0,
       "explain": "$|E|=n-1=14$.",
       "promptHtml": "כמה צלעות יש בעץ עם 15 צמתים?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">|E|=n-1=14</annotation></semantics></math></span>."
      },
      "recap": "עץ על $n$ צמתים: $n-1$ צלעות.",
      "recapHtml": "עץ על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צלעות."
     },
     {
      "id": "C05-Q2",
      "step": {
       "type": "numeric",
       "prompt": "ביער יש 20 צמתים ו-3 רכיבי קשירות. כמה צלעות יש בו?",
       "answer": 17,
       "tol": 0,
       "explain": "$|E|=n-k=20-3=17$.",
       "promptHtml": "ביער יש 20 צמתים ו-3 רכיבי קשירות. כמה צלעות יש בו?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>=</mo><mn>20</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">|E|=n-k=20-3=17</annotation></semantics></math></span>."
      },
      "recap": "יער: $|E|=n-k$.",
      "recapHtml": "יער: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">|E|=n-k</annotation></semantics></math></span>."
     },
     {
      "id": "C05-Q3",
      "step": {
       "type": "numeric",
       "prompt": "ביער יש 30 צמתים ו-24 צלעות. כמה רכיבי קשירות יש בו?",
       "answer": 6,
       "tol": 0,
       "explain": "$k=n-|E|=30-24=6$.",
       "promptHtml": "ביער יש 30 צמתים ו-24 צלעות. כמה רכיבי קשירות יש בו?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>30</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">k=n-|E|=30-24=6</annotation></semantics></math></span>."
      },
      "recap": "$k=n-|E|$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">k=n-|E|</annotation></semantics></math></span>."
     },
     {
      "id": "C05-Q4",
      "question": "בגרף 7 צמתים ו-6 צלעות. איזה תנאי נוסף <b>מבטיח</b> שהוא עץ?",
      "options": [
       {
        "id": "a",
        "value": "אין בו צומת מבודד",
        "type": "text",
        "html": "אין בו צומת מבודד"
       },
       {
        "id": "b",
        "value": "הגרף קשיר",
        "type": "text",
        "html": "הגרף קשיר"
       },
       {
        "id": "c",
        "value": "יש בו צומת בדרגה 3",
        "type": "text",
        "html": "יש בו צומת בדרגה 3"
       },
       {
        "id": "d",
        "value": "הוא דו-צדדי",
        "type": "text",
        "html": "הוא דו-צדדי"
       }
      ],
      "correctId": "b",
      "explanation": "קשיר ו-$|E|=n-1$ הם עץ לפי משפט האפיון. שאר התנאים לא מספיקים: משולש ועוד כוכב $K_{1,3}$ הם גרף עם 7 צמתים ו-6 צלעות, בלי צומת מבודד ועם דרגה 3, ואינו עץ. ו-$C_4$ ועוד מסלול על 3 צמתים הוא דו-צדדי ואינו עץ.",
      "recap": "$n-1$ צלעות ועוד קשיר (או בלי מעגלים) הם עץ.",
      "questionHtml": "בגרף 7 צמתים ו-6 צלעות. איזה תנאי נוסף &lt;b&gt;מבטיח&lt;/b&gt; שהוא עץ?",
      "explanationHtml": "קשיר ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|E|=n-1</annotation></semantics></math></span> הם עץ לפי משפט האפיון. שאר התנאים לא מספיקים: משולש ועוד כוכב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,3}</annotation></semantics></math></span> הם גרף עם 7 צמתים ו-6 צלעות, בלי צומת מבודד ועם דרגה 3, ואינו עץ. ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_4</annotation></semantics></math></span> ועוד מסלול על 3 צמתים הוא דו-צדדי ואינו עץ.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צלעות ועוד קשיר (או בלי מעגלים) הם עץ."
     },
     {
      "id": "C05-Q5",
      "question": "מסירים עלה מעץ עם לפחות 3 צמתים. מה מתקבל?",
      "options": [
       {
        "id": "a",
        "value": "יער עם שני רכיבים",
        "type": "text",
        "html": "יער עם שני רכיבים"
       },
       {
        "id": "b",
        "value": "מתקבל עץ",
        "type": "text",
        "html": "מתקבל עץ"
       },
       {
        "id": "c",
        "value": "גרף עם מעגל",
        "type": "text",
        "html": "גרף עם מעגל"
       },
       {
        "id": "d",
        "value": "גרף לא קשיר",
        "type": "text",
        "html": "גרף לא קשיר"
       }
      ],
      "correctId": "b",
      "explanation": "העלה נוגע בצלע אחת בלבד, ולכן מסלולים בין שאר הצמתים לא עברו דרכו. הגרף נשאר קשיר, ואין בו מעגלים: עץ עם צומת אחד פחות.",
      "recap": "הסרת עלה משאירה עץ.",
      "questionHtml": "מסירים עלה מעץ עם לפחות 3 צמתים. מה מתקבל?",
      "explanationHtml": "העלה נוגע בצלע אחת בלבד, ולכן מסלולים בין שאר הצמתים לא עברו דרכו. הגרף נשאר קשיר, ואין בו מעגלים: עץ עם צומת אחד פחות.",
      "recapHtml": "הסרת עלה משאירה עץ."
     },
     {
      "id": "C05-Q6",
      "question": "מהו מספר העלים המזערי של עץ עם $n\\ge2$ צמתים?",
      "options": [
       {
        "id": "a",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "$n-1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "אין חסם",
        "type": "text",
        "html": "אין חסם"
       }
      ],
      "correctId": "b",
      "explanation": "בעץ יש לפחות שני עלים: המסלול הארוך ביותר מתחיל ומסתיים בצמתים שדרגתם 1. המסלול $P_n$ מראה שיש עץ עם בדיוק שני עלים.",
      "recap": "לעץ עם $n\\ge2$ לפחות שני עלים.",
      "questionHtml": "מהו מספר העלים המזערי של עץ עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span> צמתים?",
      "explanationHtml": "בעץ יש לפחות שני עלים: המסלול הארוך ביותר מתחיל ומסתיים בצמתים שדרגתם 1. המסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">P_n</annotation></semantics></math></span> מראה שיש עץ עם בדיוק שני עלים.",
      "recapHtml": "לעץ עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span> לפחות שני עלים."
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🍃",
    "title": "כמה עלים יש בעץ?",
    "goal": "לחשב מספר עלים בעץ שדרגותיו מוגבלות, בעזרת סכום הדרגות $2(n-1)$.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לחשב מספר עלים בעץ שדרגותיו מוגבלות, בעזרת סכום הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(n-1)</annotation></semantics></math></span>.",
    "lesson": {
     "html": "<p>בעץ על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צלעות, ולכן משפט הדרגות נותן <b>סכום דרגות קבוע</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>∑</mo><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sum\\deg(v)=2(n-1)</annotation></semantics></math></span>. כשכל הדרגות בעץ הן 1 או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>, זה משוואה במשתנה אחד.</p>\n<div class=\"lesson-rule\">🔑 <b>מתכון:</b> נסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> את מספר העלים; שאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">n-p</annotation></semantics></math></span> הצמתים בדרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>. אז\n<span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>p</mi><mo>+</mo><mi>d</mi><mtext> </mtext><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">.</mi></mrow><annotation encoding=\"application/x-tex\">p+d\\,(n-p)=2(n-1).</annotation></semantics></math></span>\nפותרים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> ובודקים שהתוצאה <b>מספר שלם</b> בין 2 ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. אם לא, אין עץ כזה.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> עץ עם 20 צמתים שכל דרגותיו 1 או 3. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mn>20</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>38</mn></mrow><annotation encoding=\"application/x-tex\">p+3(20-p)=38</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>60</mn><mo>−</mo><mn>2</mn><mi>p</mi><mo>=</mo><mn>38</mn></mrow><annotation encoding=\"application/x-tex\">60-2p=38</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">p=11</annotation></semantics></math></span> עלים ו-9 צמתים בדרגה 3.</div>\n<div class=\"lesson-trap\">⚠️ מספר העלים הוא משתנה, לא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>. ואם יוצא שבר, אין עץ כזה: למשל דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,4\\}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">n=25</annotation></semantics></math></span> נותנות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>52</mn><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">p=52/3</annotation></semantics></math></span>.</div>\n<p>אם יש כמה דרגות שונות, מסכמים על כל הצמתים: למשל צומת אחד בדרגה 4, אחד בדרגה 3 והשאר עלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>p</mi><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p+4+3=2(p+2-1)</annotation></semantics></math></span>.</p>"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "step": {
       "type": "numeric",
       "prompt": "בעץ עם 14 צמתים כל הדרגות הן 1 או 3. כמה עלים יש בו?",
       "answer": 8,
       "tol": 0,
       "explain": "$p+3(14-p)=2\\cdot13=26$, כלומר $42-2p=26$ ולכן $p=8$.",
       "promptHtml": "בעץ עם 14 צמתים כל הדרגות הן 1 או 3. כמה עלים יש בו?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mn>14</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>13</mn><mo>=</mo><mn>26</mn></mrow><annotation encoding=\"application/x-tex\">p+3(14-p)=2\\cdot13=26</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>42</mn><mo>−</mo><mn>2</mn><mi>p</mi><mo>=</mo><mn>26</mn></mrow><annotation encoding=\"application/x-tex\">42-2p=26</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">p=8</annotation></semantics></math></span>."
      },
      "recap": "$p+d(n-p)=2(n-1)$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p+d(n-p)=2(n-1)</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q2",
      "question": "האם קיים עץ עם 25 צמתים שכל דרגותיו הן 1 או 4?",
      "options": [
       {
        "id": "a",
        "value": "כן, עם 16 עלים",
        "type": "text",
        "html": "כן, עם 16 עלים"
       },
       {
        "id": "b",
        "value": "לא, כי מתקבל מספר עלים לא שלם",
        "type": "text",
        "html": "לא, כי מתקבל מספר עלים לא שלם"
       },
       {
        "id": "c",
        "value": "לא, כי 25 אי-זוגי",
        "type": "text",
        "html": "לא, כי 25 אי-זוגי"
       },
       {
        "id": "d",
        "value": "כן, עם 7 צמתים בדרגה 4",
        "type": "text",
        "html": "כן, עם 7 צמתים בדרגה 4"
       }
      ],
      "correctId": "b",
      "explanation": "$p+4(25-p)=48$ נותן $100-3p=48$, ולכן $p=52/3$, לא שלם. אין עץ כזה. אי-זוגיות של $n$ לא מפריעה כאן. ו-16 עלים נותנים סכום $16+36=52\\ne48$.",
      "recap": "פתרון לא שלם: אין עץ כזה.",
      "questionHtml": "האם קיים עץ עם 25 צמתים שכל דרגותיו הן 1 או 4?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>4</mn><mo stretchy=\"false\">(</mo><mn>25</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">p+4(25-p)=48</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo>−</mo><mn>3</mn><mi>p</mi><mo>=</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">100-3p=48</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>52</mn><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">p=52/3</annotation></semantics></math></span>, לא שלם. אין עץ כזה. אי-זוגיות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> לא מפריעה כאן. ו-16 עלים נותנים סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mo>+</mo><mn>36</mn><mo>=</mo><mn>52</mn><mo mathvariant=\"normal\">≠</mo><mn>48</mn></mrow><annotation encoding=\"application/x-tex\">16+36=52\\ne48</annotation></semantics></math></span>.",
      "recapHtml": "פתרון לא שלם: אין עץ כזה."
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "numeric",
       "prompt": "בעץ עם 26 צמתים כל הדרגות הן 1 או 5. כמה עלים יש בו?",
       "answer": 20,
       "tol": 0,
       "explain": "$p+5(26-p)=2\\cdot25=50$, כלומר $130-4p=50$ ולכן $p=20$ (ו-6 צמתים בדרגה 5).",
       "promptHtml": "בעץ עם 26 צמתים כל הדרגות הן 1 או 5. כמה עלים יש בו?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>5</mn><mo stretchy=\"false\">(</mo><mn>26</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>25</mn><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">p+5(26-p)=2\\cdot25=50</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>130</mn><mo>−</mo><mn>4</mn><mi>p</mi><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">130-4p=50</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">p=20</annotation></semantics></math></span> (ו-6 צמתים בדרגה 5)."
      },
      "recap": "$p+d(n-p)=2(n-1)$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p+d(n-p)=2(n-1)</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q4",
      "step": {
       "type": "numeric",
       "prompt": "בעץ יש צומת אחד בדרגה 4, צומת אחד בדרגה 3, וכל שאר הצמתים עלים. כמה עלים יש בעץ?",
       "answer": 5,
       "tol": 0,
       "explain": "אם $p$ עלים אז $n=p+2$ וסכום הדרגות $p+4+3=2(n-1)=2(p+1)$. לכן $p+7=2p+2$ ו-$p=5$.",
       "promptHtml": "בעץ יש צומת אחד בדרגה 4, צומת אחד בדרגה 3, וכל שאר הצמתים עלים. כמה עלים יש בעץ?",
       "explainHtml": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> עלים אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mi>p</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=p+2</annotation></semantics></math></span> וסכום הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p+4+3=2(n-1)=2(p+1)</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>7</mn><mo>=</mo><mn>2</mn><mi>p</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">p+7=2p+2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">p=5</annotation></semantics></math></span>."
      },
      "recap": "סוכמים את הדרגות של כל הצמתים.",
      "recapHtml": "סוכמים את הדרגות של כל הצמתים."
     },
     {
      "id": "C06-Q5",
      "step": {
       "type": "numeric",
       "prompt": "בעץ כל הדרגות הן 1 או 3, ויש בו 15 עלים. כמה צמתים יש בעץ?",
       "answer": 28,
       "tol": 0,
       "explain": "אם $x$ צמתים בדרגה 3 אז $n=15+x$ ו-$15+3x=2(14+x)$, כלומר $x=13$. לכן $n=28$.",
       "promptHtml": "בעץ כל הדרגות הן 1 או 3, ויש בו 15 עלים. כמה צמתים יש בעץ?",
       "explainHtml": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> צמתים בדרגה 3 אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>15</mn><mo>+</mo><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">n=15+x</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mo>+</mo><mn>3</mn><mi>x</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mn>14</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">15+3x=2(14+x)</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">x=13</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>28</mn></mrow><annotation encoding=\"application/x-tex\">n=28</annotation></semantics></math></span>."
      },
      "recap": "בעץ עם דרגות $\\{1,3\\}$: $x=p-2$.",
      "recapHtml": "בעץ עם דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,3\\}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mi>p</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=p-2</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q6",
      "step": {
       "type": "findbug",
       "prompt": "בפתרון הבא של השאלה ״מצאו כמה עלים יש בעץ עם 17 צמתים שדרגותיו 1 או 4״ יש טעות בשורה אחת. מצאו אותה.",
       "lines": [
        "נסמן ב-$p$ את מספר העלים. שאר $17-p$ הצמתים בדרגה 4.",
        "סכום הדרגות בעץ על 17 צמתים הוא $2\\cdot17=34$.",
        "לכן $p+4(17-p)=32$.",
        "כלומר $68-3p=32$ ולכן $p=12$."
       ],
       "bugIndex": 1,
       "explain": "בעץ על $n$ צמתים יש $n-1$ צלעות, ולכן סכום הדרגות הוא $2(n-1)=32$ ולא $2n$.",
       "promptHtml": "בפתרון הבא של השאלה ״מצאו כמה עלים יש בעץ עם 17 צמתים שדרגותיו 1 או 4״ יש טעות בשורה אחת. מצאו אותה.",
       "explainHtml": "בעץ על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צלעות, ולכן סכום הדרגות הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">2(n-1)=32</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span>.",
       "linesHtml": [
        "נסמן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> את מספר העלים. שאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>17</mn><mo>−</mo><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">17-p</annotation></semantics></math></span> הצמתים בדרגה 4.",
        "סכום הדרגות בעץ על 17 צמתים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>17</mn><mo>=</mo><mn>34</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot17=34</annotation></semantics></math></span>.",
        "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>4</mn><mo stretchy=\"false\">(</mo><mn>17</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">p+4(17-p)=32</annotation></semantics></math></span>.",
        "כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>68</mn><mo>−</mo><mn>3</mn><mi>p</mi><mo>=</mo><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">68-3p=32</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">p=12</annotation></semantics></math></span>."
       ]
      },
      "recap": "סכום הדרגות בעץ: $2(n-1)$, לא $2n$.",
      "recapHtml": "סכום הדרגות בעץ: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(n-1)</annotation></semantics></math></span>, לא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🔁",
    "title": "עצים והמשלים שלהם",
    "goal": "לחשב צלעות במשלים של עץ, ולהוכיח שהמשלים של עץ גדול איננו עץ ואיננו דו-צדדי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>לעץ על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צמתים יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צלעות, ולכן למשלים שלו יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom n2-(n-1)</annotation></semantics></math></span> צלעות.</p>\n<div class=\"lesson-rule\">🔑 <b>מתי המשלים של עץ הוא עץ?</b> צריך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\binom n2-(n-1)=n-1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mfrac><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\frac{n(n-1)}2=2(n-1)</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=4</annotation></semantics></math></span> (או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>). על 4 צמתים יש שני עצים: ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span> המשלים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span> (עץ), ול-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,3}</annotation></semantics></math></span> המשלים הוא משולש ועוד צומת מבודד (לא עץ).</div>\n<div class=\"lesson-rule\">🔑 <b>עץ גדול:</b> עץ הוא דו-צדדי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B)</annotation></semantics></math></span>. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span> אז אחד הצדדים מכיל לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌉</mo><mo>≥</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil n/2\\rceil\\ge3</annotation></semantics></math></span> צמתים. בעץ אין ביניהם צלעות, ולכן במשלים הם קליקה, ובפרט משולש. לכן המשלים של עץ עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span> צמתים אינו דו-צדדי ובוודאי אינו עץ.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> המשלים של הכוכב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,4}</annotation></semantics></math></span> (5 צמתים): ארבעת העלים נהפכים לקליקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_4</annotation></semantics></math></span>, והמרכז מבודד. יש בו משולשים, ולכן אינו דו-צדדי.</div>\n<div class=\"lesson-trap\">⚠️ הטיעון \"משולש במשלים\" דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span>. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=4</annotation></semantics></math></span> הצד הגדול הוא בגודל 2 לפחות, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span> הוא דוגמה נגדית.</div>"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "step": {
       "type": "numeric",
       "prompt": "בעץ $T$ יש 8 צמתים. כמה צלעות יש במשלים $\\overline T$ ?",
       "answer": 21,
       "tol": 0,
       "explain": "$\\binom82=28$ ו-$|E(T)|=7$, ולכן $28-7=21$.",
       "promptHtml": "בעץ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> יש 8 צמתים. כמה צלעות יש במשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>T</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline T</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>8</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>28</mn></mrow><annotation encoding=\"application/x-tex\">\\binom82=28</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><mi>T</mi><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">|E(T)|=7</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>28</mn><mo>−</mo><mn>7</mn><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">28-7=21</annotation></semantics></math></span>."
      },
      "recap": "$|E(\\overline T)|=\\binom n2-(n-1)$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mo stretchy=\"false\">(</mo><mrow class=\"ovl\"><mi>T</mi></mrow><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">|E(\\overline T)|=\\binom n2-(n-1)</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q2",
      "question": "על 4 צמתים יש שני עצים: $P_4$ ו-$K_{1,3}$. למי מהם המשלים הוא עץ?",
      "options": [
       {
        "id": "a",
        "value": "$P_4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$K_{1,3}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,3}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "לשניהם",
        "type": "text",
        "html": "לשניהם"
       },
       {
        "id": "d",
        "value": "לאף אחד מהם",
        "type": "text",
        "html": "לאף אחד מהם"
       }
      ],
      "correctId": "a",
      "explanation": "המשלים של $P_4=v_1v_2v_3v_4$ הוא המסלול $v_3,v_1,v_4,v_2$, עץ. המשלים של $K_{1,3}$ הוא משולש על שלושת העלים וצומת מבודד, ולכן יש בו מעגל והוא לא קשיר.",
      "recap": "רק $P_4$ (ו-$n=4$ היחיד).",
      "questionHtml": "על 4 צמתים יש שני עצים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,3}</annotation></semantics></math></span>. למי מהם המשלים הוא עץ?",
      "explanationHtml": "המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub><msub><mi>v</mi><mn>3</mn></msub><msub><mi>v</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4=v_1v_2v_3v_4</annotation></semantics></math></span> הוא המסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>v</mi><mn>3</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>4</mn></msub><mo separator=\"true\">,</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">v_3,v_1,v_4,v_2</annotation></semantics></math></span>, עץ. המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,3}</annotation></semantics></math></span> הוא משולש על שלושת העלים וצומת מבודד, ולכן יש בו מעגל והוא לא קשיר.",
      "recapHtml": "רק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_4</annotation></semantics></math></span> (ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=4</annotation></semantics></math></span> היחיד)."
     },
     {
      "id": "C07-Q3",
      "question": "מהו המשלים של הכוכב $K_{1,5}$ (מרכז וחמישה עלים)?",
      "options": [
       {
        "id": "a",
        "value": "עץ עם 6 צמתים",
        "type": "text",
        "html": "עץ עם 6 צמתים"
       },
       {
        "id": "b",
        "value": "$K_6$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_6</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$K_5$ ועוד צומת מבודד",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span> ועוד צומת מבודד"
       },
       {
        "id": "d",
        "value": "מסלול על 6 צמתים",
        "type": "text",
        "html": "מסלול על 6 צמתים"
       }
      ],
      "correctId": "c",
      "explanation": "בכוכב המרכז מחובר לכולם, ולכן במשלים הוא מבודד. החמישה האחרים לא היו מחוברים זה לזה, ולכן במשלים הם מחוברים כולם: $K_5$.",
      "recap": "משלים של כוכב: קליקה ועוד צומת מבודד.",
      "questionHtml": "מהו המשלים של הכוכב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{1,5}</annotation></semantics></math></span> (מרכז וחמישה עלים)?",
      "explanationHtml": "בכוכב המרכז מחובר לכולם, ולכן במשלים הוא מבודד. החמישה האחרים לא היו מחוברים זה לזה, ולכן במשלים הם מחוברים כולם: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span>.",
      "recapHtml": "משלים של כוכב: קליקה ועוד צומת מבודד."
     },
     {
      "id": "C07-Q4",
      "step": {
       "type": "numeric",
       "prompt": "$T$ עץ עם 9 צמתים והוא דו-צדדי $(A,B)$. מהו הגודל הקטן ביותר שהצד הגדול יכול להיות?",
       "answer": 5,
       "tol": 0,
       "explain": "$|A|+|B|=9$, ולכן הצד הגדול לפחות $\\lceil9/2\\rceil=5$. הצמתים האלה יוצרים $K_5$ במשלים.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> עץ עם 9 צמתים והוא דו-צדדי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B)</annotation></semantics></math></span>. מהו הגודל הקטן ביותר שהצד הגדול יכול להיות?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>+</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">|A|+|B|=9</annotation></semantics></math></span>, ולכן הצד הגדול לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>9</mn><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil9/2\\rceil=5</annotation></semantics></math></span>. הצמתים האלה יוצרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_5</annotation></semantics></math></span> במשלים."
      },
      "recap": "הצד הגדול לפחות $\\lceil n/2\\rceil$.",
      "recapHtml": "הצד הגדול לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil n/2\\rceil</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q5",
      "question": "$T$ הוא עץ כלשהו עם 6 צמתים. מה נכון לגבי המשלים $\\overline T$ ?",
      "options": [
       {
        "id": "a",
        "value": "המשלים תמיד דו-צדדי",
        "type": "text",
        "html": "המשלים תמיד דו-צדדי"
       },
       {
        "id": "b",
        "value": "המשלים אינו דו-צדדי, לכל עץ כזה",
        "type": "text",
        "html": "המשלים אינו דו-צדדי, לכל עץ כזה"
       },
       {
        "id": "c",
        "value": "המשלים דו-צדדי רק אם העץ הוא מסלול",
        "type": "text",
        "html": "המשלים דו-צדדי רק אם העץ הוא מסלול"
       },
       {
        "id": "d",
        "value": "המשלים הוא תמיד עץ",
        "type": "text",
        "html": "המשלים הוא תמיד עץ"
       }
      ],
      "correctId": "b",
      "explanation": "אחד הצדדים של העץ מכיל לפחות 3 צמתים, והם יוצרים משולש במשלים, ולכן המשלים אינו דו-צדדי. הוא גם לא עץ, כי ל-$\\overline T$ יש $15-5=10$ צלעות ולעץ על 6 צמתים יש 5.",
      "recap": "עץ עם $n\\ge5$: המשלים לא דו-צדדי.",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> הוא עץ כלשהו עם 6 צמתים. מה נכון לגבי המשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>T</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline T</annotation></semantics></math></span> ?",
      "explanationHtml": "אחד הצדדים של העץ מכיל לפחות 3 צמתים, והם יוצרים משולש במשלים, ולכן המשלים אינו דו-צדדי. הוא גם לא עץ, כי ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>T</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline T</annotation></semantics></math></span> יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mo>−</mo><mn>5</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">15-5=10</annotation></semantics></math></span> צלעות ולעץ על 6 צמתים יש 5.",
      "recapHtml": "עץ עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span>: המשלים לא דו-צדדי."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "♾️",
    "title": "גרפי אוילר",
    "goal": "להחליט אם בגרף יש מעגל אוילר או מסלול אוילר לפי הדרגות והקשירות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p><b>מעגל אוילר</b> הוא טיול סגור שעובר בכל צלע של הגרף בדיוק פעם אחת (מותר לחזור לצמתים). <b>גרף אוילר</b> הוא גרף עם צלעות שיש בו מעגל אוילר. בקורס \"מסלול\" פירושו טיול בלי חזרה על צלע.</p>\n<div class=\"lesson-rule\">🔑 <b>משפט אוילר:</b> לגרף עם צלעות יש מעגל אוילר אם ורק אם הוא <b>קשיר</b> וכל הדרגות <b>זוגיות</b>. מסלול אוילר פתוח (מצומת אחד לאחר) קיים אם ורק אם הגרף קשיר ויש בו בדיוק <b>שני</b> צמתים בדרגה אי-זוגית.</div>\n<ul>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">K_n</annotation></semantics></math></span> הוא גרף אוילר אם ורק אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אי-זוגי (כל הדרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>). אורך המעגל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom n2</annotation></semantics></math></span>.</li>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{m,n}</annotation></semantics></math></span> הוא גרף אוילר אם ורק אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m,n</annotation></semantics></math></span> שניהם זוגיים.</li>\n<li>המשלים של מסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">P_n</annotation></semantics></math></span>: הקצוות מקבלים דרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n-2</annotation></semantics></math></span> והצמתים הפנימיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n-3</annotation></semantics></math></span>. אחד המספרים אי-זוגי, ולכן המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">P_n</annotation></semantics></math></span> לעולם אינו גרף אוילר (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n=2,3</annotation></semantics></math></span> הוא גם אינו קשיר).</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{2,3}</annotation></semantics></math></span> שני צמתים בדרגה 3 ושלושה בדרגה 2. יש בדיוק שני צמתים אי-זוגיים, ולכן יש מסלול אוילר פתוח ואין מעגל אוילר.</div>\n<div class=\"lesson-trap\">⚠️ דרגות זוגיות לא מספיקות: צריך גם קשירות. שני משולשים זרים: כל הדרגות 2, אבל אין מעגל אוילר.</div>"
    },
    "questions": [
     {
      "id": "C08-Q1",
      "question": "איזה מהגרפים הבאים הוא גרף אוילר?",
      "options": [
       {
        "id": "a",
        "value": "$K_6$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_6</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$K_8$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>8</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_8</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$K_7$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_7</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$K_{3,4}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,4}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "ב-$K_7$ כל הדרגות 6, זוגיות, והגרף קשיר. ב-$K_6$ וב-$K_8$ הדרגות 5 ו-7, אי-זוגיות. ב-$K_{3,4}$ ארבעה צמתים בדרגה 3.",
      "recap": "אוילר: קשיר וכל הדרגות זוגיות.",
      "questionHtml": "איזה מהגרפים הבאים הוא גרף אוילר?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>7</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_7</annotation></semantics></math></span> כל הדרגות 6, זוגיות, והגרף קשיר. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_6</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>8</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_8</annotation></semantics></math></span> הדרגות 5 ו-7, אי-זוגיות. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,4}</annotation></semantics></math></span> ארבעה צמתים בדרגה 3.",
      "recapHtml": "אוילר: קשיר וכל הדרגות זוגיות."
     },
     {
      "id": "C08-Q2",
      "question": "מה נכון לגבי $K_{2,3}$ ?",
      "options": [
       {
        "id": "a",
        "value": "יש בו מעגל אוילר",
        "type": "text",
        "html": "יש בו מעגל אוילר"
       },
       {
        "id": "b",
        "value": "יש מסלול אוילר שאינו סגור, אבל אין מעגל אוילר",
        "type": "text",
        "html": "יש מסלול אוילר שאינו סגור, אבל אין מעגל אוילר"
       },
       {
        "id": "c",
        "value": "אין בו מסלול אוילר בכלל",
        "type": "text",
        "html": "אין בו מסלול אוילר בכלל"
       },
       {
        "id": "d",
        "value": "יש בו מעגל אוילר רק אם מוסיפים צלע",
        "type": "text",
        "html": "יש בו מעגל אוילר רק אם מוסיפים צלע"
       }
      ],
      "correctId": "b",
      "explanation": "הדרגות: שני צמתים בדרגה 3 ושלושה בדרגה 2. בדיוק שני צמתים אי-זוגיים, ולכן קיים מסלול אוילר פתוח (בין שני הצמתים האלה), אבל מעגל אוילר דורש שאין צמתים אי-זוגיים.",
      "recap": "שני צמתים אי-זוגיים: מסלול אוילר פתוח.",
      "questionHtml": "מה נכון לגבי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{2,3}</annotation></semantics></math></span> ?",
      "explanationHtml": "הדרגות: שני צמתים בדרגה 3 ושלושה בדרגה 2. בדיוק שני צמתים אי-זוגיים, ולכן קיים מסלול אוילר פתוח (בין שני הצמתים האלה), אבל מעגל אוילר דורש שאין צמתים אי-זוגיים.",
      "recapHtml": "שני צמתים אי-זוגיים: מסלול אוילר פתוח."
     },
     {
      "id": "C08-Q3",
      "step": {
       "type": "numeric",
       "prompt": "מהו אורך מעגל אוילר ב-$K_9$ ?",
       "answer": 36,
       "tol": 0,
       "explain": "בכל צומת דרגה 8, זוגית, והגרף קשיר, ולכן יש מעגל אוילר. הוא עובר בכל צלע פעם אחת, ולכן אורכו $|E|=\\binom92=36$.",
       "promptHtml": "מהו אורך מעגל אוילר ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mn>9</mn></msub></mrow><annotation encoding=\"application/x-tex\">K_9</annotation></semantics></math></span> ?",
       "explainHtml": "בכל צומת דרגה 8, זוגית, והגרף קשיר, ולכן יש מעגל אוילר. הוא עובר בכל צלע פעם אחת, ולכן אורכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>9</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">|E|=\\binom92=36</annotation></semantics></math></span>."
      },
      "recap": "אורך מעגל אוילר שווה ל-$|E|$.",
      "recapHtml": "אורך מעגל אוילר שווה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|E|</annotation></semantics></math></span>."
     },
     {
      "id": "C08-Q4",
      "question": "הגרף הוא איחוד זר של שני משולשים (6 צמתים, כל הדרגות 2). האם הוא גרף אוילר?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי כל הדרגות זוגיות",
        "type": "text",
        "html": "כן, כי כל הדרגות זוגיות"
       },
       {
        "id": "b",
        "value": "לא, כי הגרף אינו קשיר",
        "type": "text",
        "html": "לא, כי הגרף אינו קשיר"
       },
       {
        "id": "c",
        "value": "לא, כי יש צומת בדרגה אי-זוגית",
        "type": "text",
        "html": "לא, כי יש צומת בדרגה אי-זוגית"
       },
       {
        "id": "d",
        "value": "כן, כי יש בו מעגלים",
        "type": "text",
        "html": "כן, כי יש בו מעגלים"
       }
      ],
      "correctId": "b",
      "explanation": "הדרגות אכן זוגיות, אבל מעגל אוילר חייב לעבור בכל הצלעות, וזה בלתי אפשרי כשהגרף מורכב משני רכיבים: אי אפשר לעבור מהמשולש הראשון לשני.",
      "recap": "אוילר דורש קשירות.",
      "questionHtml": "הגרף הוא איחוד זר של שני משולשים (6 צמתים, כל הדרגות 2). האם הוא גרף אוילר?",
      "explanationHtml": "הדרגות אכן זוגיות, אבל מעגל אוילר חייב לעבור בכל הצלעות, וזה בלתי אפשרי כשהגרף מורכב משני רכיבים: אי אפשר לעבור מהמשולש הראשון לשני.",
      "recapHtml": "אוילר דורש קשירות."
     },
     {
      "id": "C08-Q5",
      "step": {
       "type": "numeric",
       "prompt": "עבור כמה ערכי $n$ בין 5 ל-10 (כולל) המשלים של $C_n$ הוא גרף אוילר?",
       "answer": 3,
       "tol": 0,
       "explain": "המשלים של $C_n$ הוא $(n-3)$-רגולרי וקשיר לכל $n\\ge5$. הדרגה $n-3$ זוגית בדיוק כאשר $n$ אי-זוגי: $n=5,7,9$. התשובה 3.",
       "promptHtml": "עבור כמה ערכי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בין 5 ל-10 (כולל) המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">C_n</annotation></semantics></math></span> הוא גרף אוילר?",
       "explainHtml": "המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">C_n</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(n-3)</annotation></semantics></math></span>-רגולרי וקשיר לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span>. הדרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n-3</annotation></semantics></math></span> זוגית בדיוק כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אי-זוגי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">n=5,7,9</annotation></semantics></math></span>. התשובה 3."
      },
      "recap": "משלים של $C_n$: דרגה $n-3$.",
      "recapHtml": "משלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">C_n</annotation></semantics></math></span>: דרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n-3</annotation></semantics></math></span>."
     },
     {
      "id": "C08-Q6",
      "question": "האם המשלים של $P_6$ הוא גרף אוילר?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי הוא קשיר",
        "type": "text",
        "html": "כן, כי הוא קשיר"
       },
       {
        "id": "b",
        "value": "לא, כי אינו קשיר",
        "type": "text",
        "html": "לא, כי אינו קשיר"
       },
       {
        "id": "c",
        "value": "לא, כי יש בו צומת בדרגה אי-זוגית",
        "type": "text",
        "html": "לא, כי יש בו צומת בדרגה אי-זוגית"
       },
       {
        "id": "d",
        "value": "כן, כי כל הדרגות שוות",
        "type": "text",
        "html": "כן, כי כל הדרגות שוות"
       }
      ],
      "correctId": "c",
      "explanation": "ב-$P_6$ הצמתים הפנימיים בדרגה 2, ולכן במשלים בדרגה $6-1-2=3$, אי-זוגית. המשלים קשיר, אבל יש בו צמתים בדרגה אי-זוגית.",
      "recap": "משלים של $P_n$ אף פעם אינו אוילר.",
      "questionHtml": "האם המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_6</annotation></semantics></math></span> הוא גרף אוילר?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>6</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_6</annotation></semantics></math></span> הצמתים הפנימיים בדרגה 2, ולכן במשלים בדרגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>−</mo><mn>1</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">6-1-2=3</annotation></semantics></math></span>, אי-זוגית. המשלים קשיר, אבל יש בו צמתים בדרגה אי-זוגית.",
      "recapHtml": "משלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">P_n</annotation></semantics></math></span> אף פעם אינו אוילר."
     }
    ]
   },
   {
    "id": "C09",
    "order": 9,
    "icon": "🔗",
    "title": "גרפי המילטון",
    "goal": "להחליט אם בגרף יש מעגל המילטון או מסלול המילטון, בעזרת משפט Dirac ותנאים הכרחיים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p><b>מעגל המילטון</b> הוא מעגל פשוט שעובר בכל צומת של הגרף בדיוק פעם אחת. <b>גרף המילטון</b> הוא גרף שיש בו מעגל המילטון. <b>מסלול המילטון</b> הוא מסלול פשוט שעובר בכל הצמתים (לא בהכרח נסגר). קל להתבלבל עם אוילר: אוילר עוסק בצלעות והמילטון בצמתים, ושני התנאים בלתי תלויים.</p>\n<div class=\"lesson-rule\">🔑 <b>משפט Dirac (תנאי מספיק):</b> אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>≥</mo><mfrac><mi>n</mi><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\deg(v)\\ge\\frac n2</annotation></semantics></math></span> לכל צומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\"application/x-tex\">v</annotation></semantics></math></span>, אז הגרף המילטון. אם התנאי לא מתקיים אי אפשר להסיק כלום: צריך להציג מעגל או להפריך בדרך אחרת.</div>\n<ul>\n<li><b>להפריך:</b> צומת בדרגה 1 (כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge3</annotation></semantics></math></span>), או צומת הפרדה (אחרי הסרתו הגרף לא קשיר).</li>\n<li><b>דו-צדדי:</b> מעגל המילטון מתחלף בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>, ולכן דרוש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|=|B|</annotation></semantics></math></span>. מסלול המילטון דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo fence=\"false\" stretchy=\"true\" minsize=\"1.2em\" maxsize=\"1.2em\">∣</mo><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi><mo fence=\"false\" stretchy=\"true\" minsize=\"1.2em\" maxsize=\"1.2em\">∣</mo><mo>≤</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\big||A|-|B|\\big|\\le1</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mi>m</mi><mo separator=\"true\">,</mo><mi>n</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{m,n}</annotation></semantics></math></span> המילטוני אם ורק אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">m=n\\ge2</annotation></semantics></math></span>.</li>\n<li>המשלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">P_n</annotation></semantics></math></span> הוא גרף המילטון עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge6</annotation></semantics></math></span>: הדרגות הן לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>3</mn><mo>≥</mo><mfrac><mi>n</mi><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">n-3\\ge\\frac n2</annotation></semantics></math></span>, ו-Dirac חל.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{2,3}</annotation></semantics></math></span> יש 2 צמתים בצד אחד ו-3 בצד השני. מסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi><mo separator=\"true\">,</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b,a,b,a,b</annotation></semantics></math></span> עובר בכל הצמתים, אבל מעגל המילטון דורש צדדים שווים, ולכן אין.</div>\n<div class=\"lesson-trap\">⚠️ משפט Dirac הוא תנאי מספיק בלבד. מעגל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">C_n</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge5</annotation></semantics></math></span> הוא המילטון אף שדרגותיו 2, קטנות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n/2</annotation></semantics></math></span>.</div>"
    },
    "questions": [
     {
      "id": "C09-Q1",
      "question": "איזה מהגרפים הבאים הוא גרף המילטון?",
      "options": [
       {
        "id": "a",
        "value": "$K_{3,4}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,4}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$K_{2,5}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>5</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{2,5}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$K_{3,3}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,3}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$K_{4,6}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{4,6}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "בגרף דו-צדדי מעגל המילטון מתחלף בין הצדדים ולכן דורש צדדים שווים. רק ב-$K_{3,3}$ מתקיים $|A|=|B|$.",
      "recap": "דו-צדדי המילטוני: $|A|=|B|$.",
      "questionHtml": "איזה מהגרפים הבאים הוא גרף המילטון?",
      "explanationHtml": "בגרף דו-צדדי מעגל המילטון מתחלף בין הצדדים ולכן דורש צדדים שווים. רק ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,3}</annotation></semantics></math></span> מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|=|B|</annotation></semantics></math></span>.",
      "recapHtml": "דו-צדדי המילטוני: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|A|=|B|</annotation></semantics></math></span>."
     },
     {
      "id": "C09-Q2",
      "question": "בגרף על 10 צמתים כל הצמתים בדרגה 5 לפחות. מה אפשר להסיק?",
      "options": [
       {
        "id": "a",
        "value": "יש בו מעגל המילטון",
        "type": "text",
        "html": "יש בו מעגל המילטון"
       },
       {
        "id": "b",
        "value": "יש בו מעגל אוילר",
        "type": "text",
        "html": "יש בו מעגל אוילר"
       },
       {
        "id": "c",
        "value": "הוא דו-צדדי",
        "type": "text",
        "html": "הוא דו-צדדי"
       },
       {
        "id": "d",
        "value": "אי אפשר להסיק דבר",
        "type": "text",
        "html": "אי אפשר להסיק דבר"
       }
      ],
      "correctId": "a",
      "explanation": "$\\deg(v)\\ge5=\\frac{10}2$ לכל צומת, ולכן לפי Dirac הגרף המילטון. מעגל אוילר דורש דרגות זוגיות וקשירות, ואין לנו מידע על זוגיות. דו-צדדיות לא נובעת.",
      "recap": "Dirac: $\\deg\\ge n/2$ מספיק להמילטון.",
      "questionHtml": "בגרף על 10 צמתים כל הצמתים בדרגה 5 לפחות. מה אפשר להסיק?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>v</mi><mo stretchy=\"false\">)</mo><mo>≥</mo><mn>5</mn><mo>=</mo><mfrac><mn>10</mn><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\deg(v)\\ge5=\\frac{10}2</annotation></semantics></math></span> לכל צומת, ולכן לפי Dirac הגרף המילטון. מעגל אוילר דורש דרגות זוגיות וקשירות, ואין לנו מידע על זוגיות. דו-צדדיות לא נובעת.",
      "recapHtml": "Dirac: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>deg</mi><mo>⁡</mo><mo>≥</mo><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\deg\\ge n/2</annotation></semantics></math></span> מספיק להמילטון."
     },
     {
      "id": "C09-Q3",
      "step": {
       "type": "numeric",
       "prompt": "$G$ גרף 3-רגולרי על 10 צמתים. מהי הדרגה של כל צומת במשלים $\\overline G$ ?",
       "answer": 6,
       "tol": 0,
       "explain": "$10-1-3=6\\ge\\frac{10}2$, ולכן לפי Dirac המשלים הוא גרף המילטון.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> גרף 3-רגולרי על 10 צמתים. מהי הדרגה של כל צומת במשלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>G</mi></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline G</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>−</mo><mn>1</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>6</mn><mo>≥</mo><mfrac><mn>10</mn><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">10-1-3=6\\ge\\frac{10}2</annotation></semantics></math></span>, ולכן לפי Dirac המשלים הוא גרף המילטון."
      },
      "recap": "דרגה במשלים: $n-1-r$.",
      "recapHtml": "דרגה במשלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn><mo>−</mo><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">n-1-r</annotation></semantics></math></span>."
     },
     {
      "id": "C09-Q4",
      "question": "מה נכון לגבי המסלול $P_5$ (5 צמתים בשורה)?",
      "options": [
       {
        "id": "a",
        "value": "יש בו מעגל המילטון",
        "type": "text",
        "html": "יש בו מעגל המילטון"
       },
       {
        "id": "b",
        "value": "יש מסלול המילטון, אבל אין מעגל המילטון",
        "type": "text",
        "html": "יש מסלול המילטון, אבל אין מעגל המילטון"
       },
       {
        "id": "c",
        "value": "אין בו מסלול המילטון",
        "type": "text",
        "html": "אין בו מסלול המילטון"
       },
       {
        "id": "d",
        "value": "יש בו מעגל המילטון אבל אין מסלול המילטון",
        "type": "text",
        "html": "יש בו מעגל המילטון אבל אין מסלול המילטון"
       }
      ],
      "correctId": "b",
      "explanation": "המסלול עצמו עובר בכל הצמתים. אין מעגל המילטון: הקצוות הם עלים (דרגה 1), ומעגל דורש שני שכנים לכל צומת.",
      "recap": "עלה מונע מעגל המילטון.",
      "questionHtml": "מה נכון לגבי המסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">P_5</annotation></semantics></math></span> (5 צמתים בשורה)?",
      "explanationHtml": "המסלול עצמו עובר בכל הצמתים. אין מעגל המילטון: הקצוות הם עלים (דרגה 1), ומעגל דורש שני שכנים לכל צומת.",
      "recapHtml": "עלה מונע מעגל המילטון."
     },
     {
      "id": "C09-Q5",
      "question": "הגרף מורכב משני משולשים החולקים צומת אחד (5 צמתים, דרגות $4,2,2,2,2$). מה נכון לגביו?",
      "options": [
       {
        "id": "a",
        "value": "אוילר כן, המילטון כן",
        "type": "text",
        "html": "אוילר כן, המילטון כן"
       },
       {
        "id": "b",
        "value": "אוילר כן, המילטון לא",
        "type": "text",
        "html": "אוילר כן, המילטון לא"
       },
       {
        "id": "c",
        "value": "אוילר לא, המילטון כן",
        "type": "text",
        "html": "אוילר לא, המילטון כן"
       },
       {
        "id": "d",
        "value": "אוילר לא, המילטון לא",
        "type": "text",
        "html": "אוילר לא, המילטון לא"
       }
      ],
      "correctId": "b",
      "explanation": "כל הדרגות זוגיות והגרף קשיר, ולכן יש מעגל אוילר. אבל הצומת המשותף הוא צומת הפרדה: אחרי הסרתו נשארים שני רכיבים, ולכן אין מעגל המילטון.",
      "recap": "אוילר והמילטון בלתי תלויים.",
      "questionHtml": "הגרף מורכב משני משולשים החולקים צומת אחד (5 צמתים, דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">4,2,2,2,2</annotation></semantics></math></span>). מה נכון לגביו?",
      "explanationHtml": "כל הדרגות זוגיות והגרף קשיר, ולכן יש מעגל אוילר. אבל הצומת המשותף הוא צומת הפרדה: אחרי הסרתו נשארים שני רכיבים, ולכן אין מעגל המילטון.",
      "recapHtml": "אוילר והמילטון בלתי תלויים."
     },
     {
      "id": "C09-Q6",
      "question": "מה נכון לגבי $K_{3,4}$ ?",
      "options": [
       {
        "id": "a",
        "value": "יש בו מעגל המילטון",
        "type": "text",
        "html": "יש בו מעגל המילטון"
       },
       {
        "id": "b",
        "value": "יש מסלול המילטון, אבל אין מעגל המילטון",
        "type": "text",
        "html": "יש מסלול המילטון, אבל אין מעגל המילטון"
       },
       {
        "id": "c",
        "value": "אין בו מסלול המילטון",
        "type": "text",
        "html": "אין בו מסלול המילטון"
       },
       {
        "id": "d",
        "value": "יש בו מעגל המילטון אבל אין מסלול המילטון",
        "type": "text",
        "html": "יש בו מעגל המילטון אבל אין מסלול המילטון"
       }
      ],
      "correctId": "b",
      "explanation": "הצדדים הם 3 ו-4, והפרש הגדלים 1: מסלול $b,a,b,a,b,a,b$ עובר בכל הצמתים. מעגל המילטון דורש צדדים שווים, ולכן אין.",
      "recap": "הפרש 1 בין הצדדים: מסלול כן, מעגל לא.",
      "questionHtml": "מה נכון לגבי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>K</mi><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">K_{3,4}</annotation></semantics></math></span> ?",
      "explanationHtml": "הצדדים הם 3 ו-4, והפרש הגדלים 1: מסלול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi><mo separator=\"true\">,</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi><mo separator=\"true\">,</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b,a,b,a,b,a,b</annotation></semantics></math></span> עובר בכל הצמתים. מעגל המילטון דורש צדדים שווים, ולכן אין.",
      "recapHtml": "הפרש 1 בין הצדדים: מסלול כן, מעגל לא."
     }
    ]
   },
   {
    "id": "C10",
    "order": 10,
    "icon": "🏆",
    "title": "מבחן: גרפים",
    "goal": "לפתור שאלות אמיתיות ממבחנים: סדרות דרגות, משלים, עצים, אוילר והמילטון.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "<p>השלב האחרון הוא שאלות אמיתיות ממבחנים בנושא. לפני שמתחילים, סיכום הכלים:</p>\n<table><thead><tr><th>סוג השאלה</th><th>הכלי</th></tr></thead><tbody>\n<tr><td>קיים גרף עם סדרת דרגות?</td><td>סכום זוגי, ואז Havel-Hakimi</td></tr>\n<tr><td>גרף שווה או איזומורפי למשלים</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">|E|=\\frac12\\binom n2</annotation></semantics></math></span>, ודרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>↔</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>−</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d\\leftrightarrow n-1-d</annotation></semantics></math></span></td></tr>\n<tr><td>עץ עם דרגות מוגבלות</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>∑</mo><mi>deg</mi><mo>⁡</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sum\\deg=2(n-1)</annotation></semantics></math></span></td></tr>\n<tr><td>משלים של עץ או דו-צדדי</td><td>צד עם 3 צמתים נהפך למשולש</td></tr>\n<tr><td>אוילר</td><td>קשיר וכל הדרגות זוגיות</td></tr>\n<tr><td>המילטון</td><td>Dirac, צדדים שווים בדו-צדדי, עלה או צומת הפרדה מפריכים</td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 בהוכחה מציינים כל שימוש במשפט: משפט הדרגות, Dirac, אפיון העץ. ובהפרכה מביאים דוגמה נגדית מפורשת.</div>"
    },
    "questions": [
     {
      "bankId": "25B-A-Q4a",
      "recap": "סדרת דרגות: Havel-Hakimi, והסרת הצומת מדרגה 6 המחובר לכולם.",
      "recapHtml": "סדרת דרגות: Havel-Hakimi, והסרת הצומת מדרגה 6 המחובר לכולם."
     },
     {
      "bankId": "21B-B-Q3c",
      "recap": "$C_n\\cong\\overline{C_n}$ גורר $2n=\\binom n2$, ולכן $n=5$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>≅</mo><mrow class=\"ovl\"><msub><mi>C</mi><mi>n</mi></msub></mrow></mrow><annotation encoding=\"application/x-tex\">C_n\\cong\\overline{C_n}</annotation></semantics></math></span> גורר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi><mo>=</mo><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">2n=\\binom n2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">n=5</annotation></semantics></math></span>."
     },
     {
      "bankId": "24B-A-Q3c",
      "recap": "שני גרפים $r$-רגולריים משלימים: $|V|=2r+1$, אבל $r$ אי-זוגי דורש $|V|$ זוגי.",
      "recapHtml": "שני גרפים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>-רגולריים משלימים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mn>2</mn><mi>r</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|V|=2r+1</annotation></semantics></math></span>, אבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> אי-זוגי דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>V</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|V|</annotation></semantics></math></span> זוגי."
     },
     {
      "bankId": "25B-A-Q4b",
      "recap": "עץ עם 5 צמתים: צד עם 3 צמתים נהפך למשולש במשלים.",
      "recapHtml": "עץ עם 5 צמתים: צד עם 3 צמתים נהפך למשולש במשלים."
     },
     {
      "bankId": "25B-B-Q1c",
      "recap": "דרגות $\\{1,5\\}$ ו-30 צמתים: $p+5(30-p)=58$ ולכן $p=23$.",
      "recapHtml": "דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{1,5\\}</annotation></semantics></math></span> ו-30 צמתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mn>5</mn><mo stretchy=\"false\">(</mo><mn>30</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>58</mn></mrow><annotation encoding=\"application/x-tex\">p+5(30-p)=58</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>=</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">p=23</annotation></semantics></math></span>."
     },
     {
      "bankId": "25S-A-Q3c",
      "recap": "משלים של $P_n$: דרגות $n-2$ ו-$n-3$, אחת מהן אי-זוגית. והמילטון לפי Dirac.",
      "recapHtml": "משלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>P</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">P_n</annotation></semantics></math></span>: דרגות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n-2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n-3</annotation></semantics></math></span>, אחת מהן אי-זוגית. והמילטון לפי Dirac."
     }
    ]
   }
  ]
 },
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
 },
 "recurrence": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔢",
    "title": "לחשב איברים ולבדוק נוסחה",
    "goal": "לחשב איברים של נסיגה מתנאי התחלה, ולבדוק אם נוסחה מפורשת נכונה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>סדרה היא רשימת מספרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>2</mn></msub><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">a_0,a_1,a_2,\\dots</annotation></semantics></math></span>. <b>נוסחת נסיגה</b> אומרת איך מחשבים כל איבר מהאיברים שלפניו. <b>תנאי התחלה</b> הם האיברים הראשונים, שאין מאיפה לחשב אותם.</p>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span>, עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_1=3</annotation></semantics></math></span>. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">a_2=3\\cdot3-2\\cdot1=7</annotation></semantics></math></span>, אחר כך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">a_3=3\\cdot7-2\\cdot3=15</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>15</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>7</mn><mo>=</mo><mn>31</mn></mrow><annotation encoding=\"application/x-tex\">a_4=3\\cdot15-2\\cdot7=31</annotation></semantics></math></span>. הסדרה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>15</mn><mo separator=\"true\">,</mo><mn>31</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">1,3,7,15,31,\\dots</annotation></semantics></math></span></div>\n<h3>הסוג שנלמד בקורס</h3>\n<p>נסיגה <b>ליניארית מסדר 2 עם מקדמים קבועים</b> נראית כך:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>p</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>q</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=p\\,a_{n-1}+q\\,a_{n-2}+g(n)</annotation></semantics></math></span></div>\n<ul>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">q</annotation></semantics></math></span> הם מספרים קבועים (לא תלויים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>).</li>\n<li>\"מסדר 2\" פירושו שכל איבר תלוי בשני הקודמים לו, ולכן צריך <b>שני</b> תנאי התחלה, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_1</annotation></semantics></math></span>.</li>\n<li>אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">g(n)=0</annotation></semantics></math></span> הנסיגה <b>הומוגנית</b>. אחרת יש לה \"אגף ימין\" <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g(n)</annotation></semantics></math></span>, למשל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">g(n)=5</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">g(n)=3\\cdot2^n</annotation></semantics></math></span>.</li>\n</ul>\n<h3>נוסחה מפורשת</h3>\n<p><b>נוסחה מפורשת</b> (פתרון מפורש) נותנת את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub></mrow><annotation encoding=\"application/x-tex\">a_n</annotation></semantics></math></span> ישירות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, בלי לחשב את כל האיברים שלפניו. את השיטה למצוא אותה נלמד בשלבים הבאים. כדי לבדוק שנוסחה נכונה, מציבים בה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=0,1,2</annotation></semantics></math></span> ומשווים לאיברים שחישבנו מהנסיגה.</p>\n<div class=\"lesson-ex\">בדוגמה למעלה נוסחה מועמדת היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=2^{n+1}-1</annotation></semantics></math></span>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n=2</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>. אלה בדיוק האיברים שחישבנו.</div>\n<div class=\"lesson-trap\">⚠️ נוסחה שמתאימה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_0</annotation></semantics></math></span> ול-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_1</annotation></semantics></math></span> בלבד עדיין לא בהכרח נכונה. בודקים גם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_2</annotation></semantics></math></span> מהנסיגה, כי רק היא אומרת איך הסדרה ממשיכה.</div>\n"
    },
    "questions": [
     {
      "id": "R01-Q1",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=a_{n-1}+2a_{n-2}$ לכל $n\\ge2$, עם $a_0=1$ ו-$a_1=1$. מהו $a_5$ ?",
       "answer": 21,
       "tol": 0,
       "explain": "מחשבים איבר אחר איבר: $a_2=1+2\\cdot1=3$, $a_3=3+2\\cdot1=5$, $a_4=5+2\\cdot3=11$, $a_5=11+2\\cdot5=21$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}+2a_{n-2}</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span>, עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_1=1</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_5</annotation></semantics></math></span> ?",
       "explainHtml": "מחשבים איבר אחר איבר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_2=1+2\\cdot1=3</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">a_3=3+2\\cdot1=5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>5</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">a_4=5+2\\cdot3=11</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mn>11</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>21</mn></mrow><annotation encoding=\"application/x-tex\">a_5=11+2\\cdot5=21</annotation></semantics></math></span>."
      },
      "recap": "מחשבים איבר אחר איבר מהנסיגה, מתנאי ההתחלה.",
      "recapHtml": "מחשבים איבר אחר איבר מהנסיגה, מתנאי ההתחלה."
     },
     {
      "id": "R01-Q2",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=4a_{n-1}-3a_{n-2}+2$ לכל $n\\ge2$, עם $a_0=0$ ו-$a_1=1$. מהו $a_4$ ?",
       "answer": 76,
       "tol": 0,
       "explain": "$a_2=4\\cdot1-3\\cdot0+2=6$, $a_3=4\\cdot6-3\\cdot1+2=23$, $a_4=4\\cdot23-3\\cdot6+2=76$. את הקבוע $+2$ מוסיפים בכל צעד.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_n=4a_{n-1}-3a_{n-2}+2</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge2</annotation></semantics></math></span>, עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a_0=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_1=1</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_4</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>3</mn><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_2=4\\cdot1-3\\cdot0+2=6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>6</mn><mo>−</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">a_3=4\\cdot6-3\\cdot1+2=23</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>23</mn><mo>−</mo><mn>3</mn><mo>⋅</mo><mn>6</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>76</mn></mrow><annotation encoding=\"application/x-tex\">a_4=4\\cdot23-3\\cdot6+2=76</annotation></semantics></math></span>. את הקבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">+2</annotation></semantics></math></span> מוסיפים בכל צעד."
      },
      "recap": "אגף ימין קבוע מוסיפים בכל צעד חישוב.",
      "recapHtml": "אגף ימין קבוע מוסיפים בכל צעד חישוב."
     },
     {
      "id": "R01-Q3",
      "question": "נתון $a_n=3a_{n-1}-2a_{n-2}$ עם $a_0=1$ ו-$a_1=3$. איזו נוסחה מפורשת מתאימה לסדרה?",
      "options": [
       {
        "id": "a",
        "value": "$a_n=3^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n=2^{n+1}-1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=2^{n+1}-1</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n=2^n+n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n=2^n+n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n=n+1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=n+1</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "מהנסיגה $a_2=3\\cdot3-2\\cdot1=7$. הנוסחה $2^{n+1}-1$ נותנת $1,3,7$ ולכן מתאימה. הנוסחה $3^n$ נותנת $a_2=9$. הנוסחה $2^n+n$ נותנת $a_2=6$. הנוסחה $n+1$ נותנת $a_1=2$ ולא $3$.",
      "recap": "בודקים נוסחה על $a_0,a_1,a_2$.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_1=3</annotation></semantics></math></span>. איזו נוסחה מפורשת מתאימה לסדרה?",
      "explanationHtml": "מהנסיגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">a_2=3\\cdot3-2\\cdot1=7</annotation></semantics></math></span>. הנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{n+1}-1</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">1,3,7</annotation></semantics></math></span> ולכן מתאימה. הנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3^n</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">a_2=9</annotation></semantics></math></span>. הנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2^n+n</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_2=6</annotation></semantics></math></span>. הנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_1=2</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>.",
      "recapHtml": "בודקים נוסחה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_0,a_1,a_2</annotation></semantics></math></span>."
     },
     {
      "id": "R01-Q4",
      "question": "למה בנסיגה מסדר 2 צריך לתת שני תנאי התחלה ולא אחד?",
      "options": [
       {
        "id": "a",
        "value": "כי כל איבר תלוי בשני הקודמים לו, ובלי שני תנאים יש אינסוף סדרות שמקיימות את אותה נסיגה",
        "type": "text",
        "html": "כי כל איבר תלוי בשני הקודמים לו, ובלי שני תנאים יש אינסוף סדרות שמקיימות את אותה נסיגה"
       },
       {
        "id": "b",
        "value": "כי הנוסחה המפורשת תמיד מכילה את $n$ בשתי חזקות שונות",
        "type": "text",
        "html": "כי הנוסחה המפורשת תמיד מכילה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> בשתי חזקות שונות"
       },
       {
        "id": "c",
        "value": "כי $a_0$ ו-$a_1$ הם המקדמים $p$ ו-$q$ של הנסיגה",
        "type": "text",
        "html": "כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_1</annotation></semantics></math></span> הם המקדמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">q</annotation></semantics></math></span> של הנסיגה"
       },
       {
        "id": "d",
        "value": "כי שני תנאי התחלה משנים את הנסיגה עצמה",
        "type": "text",
        "html": "כי שני תנאי התחלה משנים את הנסיגה עצמה"
       }
      ],
      "correctId": "a",
      "explanation": "דוגמה: גם $a_n=2^n$ וגם $a_n=3^n$ מקיימות $a_n=5a_{n-1}-6a_{n-2}$ (אפשר להציב), אבל הן סדרות שונות. רק תנאי ההתחלה קובעים איזו מהן. $p,q$ הם מקדמי הנסיגה ולא קשורים לתנאי ההתחלה, ותנאי התחלה לא משנים את הנסיגה.",
      "recap": "סדר 2 דורש שני תנאי התחלה.",
      "questionHtml": "למה בנסיגה מסדר 2 צריך לתת שני תנאי התחלה ולא אחד?",
      "explanationHtml": "דוגמה: גם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=2^n</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3^n</annotation></semantics></math></span> מקיימות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}</annotation></semantics></math></span> (אפשר להציב), אבל הן סדרות שונות. רק תנאי ההתחלה קובעים איזו מהן. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo separator=\"true\">,</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">p,q</annotation></semantics></math></span> הם מקדמי הנסיגה ולא קשורים לתנאי ההתחלה, ותנאי התחלה לא משנים את הנסיגה.",
      "recapHtml": "סדר 2 דורש שני תנאי התחלה."
     },
     {
      "id": "R01-Q5",
      "question": "איזו נסיגה היא ליניארית הומוגנית מסדר 2 עם מקדמים קבועים?",
      "options": [
       {
        "id": "a",
        "value": "$a_n=a_{n-1}\\cdot a_{n-2}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>⋅</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}\\cdot a_{n-2}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n=2a_{n-1}+a_{n-2}+1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=2a_{n-1}+a_{n-2}+1</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n=2a_{n-1}-5a_{n-2}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=2a_{n-1}-5a_{n-2}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n=n\\,a_{n-1}-a_{n-2}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=n\\,a_{n-1}-a_{n-2}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "במכפלה $a_{n-1}\\cdot a_{n-2}$ האיברים מוכפלים זה בזה, ולכן היא לא ליניארית. בשנייה יש קבוע $+1$ בסוף, ולכן היא לא הומוגנית. בשלישית המקדם $n$ משתנה, ולכן המקדמים לא קבועים.",
      "recap": "הומוגנית: בלי איבר חופשי. קבועה: המקדמים מספרים.",
      "questionHtml": "איזו נסיגה היא ליניארית הומוגנית מסדר 2 עם מקדמים קבועים?",
      "explanationHtml": "במכפלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>⋅</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_{n-1}\\cdot a_{n-2}</annotation></semantics></math></span> האיברים מוכפלים זה בזה, ולכן היא לא ליניארית. בשנייה יש קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">+1</annotation></semantics></math></span> בסוף, ולכן היא לא הומוגנית. בשלישית המקדם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> משתנה, ולכן המקדמים לא קבועים.",
      "recapHtml": "הומוגנית: בלי איבר חופשי. קבועה: המקדמים מספרים."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🧩",
    "title": "משוואה אופיינית ושני שורשים",
    "goal": "לפתור נסיגה הומוגנית מסדר 2 כשלמשוואה האופיינית שני שורשים שונים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>נסיגה הומוגנית: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>p</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>q</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=p\\,a_{n-1}+q\\,a_{n-2}</annotation></semantics></math></span>. מחפשים פתרונות מהצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=x^n</annotation></semantics></math></span>. הצבה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mi>p</mi><mtext> </mtext><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><mi>q</mi><mtext> </mtext><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">x^n=p\\,x^{n-1}+q\\,x^{n-2}</annotation></semantics></math></span>, ואחרי חלוקה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">x^{n-2}</annotation></semantics></math></span> מקבלים:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>p</mi><mtext> </mtext><mi>x</mi><mo>+</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">x^2=p\\,x+q</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mtext> </mtext><mi>x</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-p\\,x-q=0</annotation></semantics></math></span></div>\n<p>זו <b>המשוואה האופיינית</b> של הנסיגה. שימו לב לסימנים: מעבירים אגף, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">q</annotation></semantics></math></span> מקבלים סימן הפוך.</p>\n<div class=\"lesson-rule\">🔑 אם למשוואה האופיינית שני שורשים שונים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>r</mi><mn>1</mn></msub><mo mathvariant=\"normal\">≠</mo><msub><mi>r</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">r_1\\ne r_2</annotation></semantics></math></span>, הפתרון הכללי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msubsup><mi>r</mi><mn>1</mn><mi>n</mi></msubsup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mi>n</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1r_1^n+C_2r_2^n</annotation></semantics></math></span>. את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1,C_2</annotation></semantics></math></span> קובעים מתנאי ההתחלה.</div>\n<h3>המתכון</h3>\n<ol>\n<li>כותבים את המשוואה האופיינית ומוצאים שורשים.</li>\n<li>כותבים את הפתרון הכללי עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1,C_2</annotation></semantics></math></span>.</li>\n<li>מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>. נוצרת מערכת של שתי משוואות בשני נעלמים.</li>\n<li>פותרים ובודקים את התוצאה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_2</annotation></semantics></math></span>.</li>\n</ol>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_0=3</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">a_1=8</annotation></semantics></math></span>. המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-5x+6=0</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">x=3</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot3^n</annotation></semantics></math></span>. מתנאי ההתחלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">2C_1+3C_2=8</annotation></semantics></math></span>. מחסירים פעמיים את הראשונה מהשנייה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_2=2</annotation></semantics></math></span>, ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1=1</annotation></semantics></math></span>. התוצאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=2^n+2\\cdot3^n</annotation></semantics></math></span>. בדיקה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_2</annotation></semantics></math></span>: הנסיגה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>8</mn><mo>−</mo><mn>6</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot8-6\\cdot3=22</annotation></semantics></math></span>, והנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>+</mo><mn>18</mn><mo>=</mo><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">4+18=22</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ במשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">x^2=7x-12</annotation></semantics></math></span> המשוואה האופיינית היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x+12=0</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2+7x+12=0</annotation></semantics></math></span>. ואם אחד השורשים שלילי, כותבים אותו בסוגריים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">(-2)^n</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "R02-Q1",
      "question": "מהי המשוואה האופיינית של $a_n=7a_{n-1}-12a_{n-2}$ ?",
      "options": [
       {
        "id": "a",
        "value": "$x^2+7x+12=0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2+7x+12=0</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$x^2-7x-12=0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x-12=0</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$x^2-12x+7=0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>7</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-12x+7=0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$x^2-7x+12=0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x+12=0</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "מ-$x^2=7x-12$ מעבירים אגף ומקבלים $x^2-7x+12=0$. בתשובה $x^2+7x+12$ שני הסימנים הפוכים. בתשובה $x^2-7x-12$ הקבוע לא הועבר אגף נכון. בתשובה $x^2-12x+7$ התחלפו המקדמים $p,q$.",
      "recap": "$x^2=px+q$, כלומר $x^2-px-q=0$.",
      "questionHtml": "מהי המשוואה האופיינית של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>7</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>12</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=7a_{n-1}-12a_{n-2}</annotation></semantics></math></span> ?",
      "explanationHtml": "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">x^2=7x-12</annotation></semantics></math></span> מעבירים אגף ומקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x+12=0</annotation></semantics></math></span>. בתשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">x^2+7x+12</annotation></semantics></math></span> שני הסימנים הפוכים. בתשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x-12</annotation></semantics></math></span> הקבוע לא הועבר אגף נכון. בתשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">x^2-12x+7</annotation></semantics></math></span> התחלפו המקדמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo separator=\"true\">,</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">p,q</annotation></semantics></math></span>.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>p</mi><mi>x</mi><mo>+</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">x^2=px+q</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>x</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-px-q=0</annotation></semantics></math></span>."
     },
     {
      "id": "R02-Q2",
      "step": {
       "type": "numeric",
       "prompt": "מהו השורש הגדול של המשוואה $x^2=7x-12$ ?",
       "answer": 4,
       "tol": 0,
       "explain": "$x^2-7x+12=(x-3)(x-4)=0$, ולכן השורשים הם $3$ ו-$4$. השורש הגדול הוא $4$.",
       "promptHtml": "מהו השורש הגדול של המשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">x^2=7x-12</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x+12=(x-3)(x-4)=0</annotation></semantics></math></span>, ולכן השורשים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>. השורש הגדול הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>."
      },
      "recap": "מפרקים את המשוואה האופיינית לגורמים.",
      "recapHtml": "מפרקים את המשוואה האופיינית לגורמים."
     },
     {
      "id": "R02-Q3",
      "question": "מהו הפתרון הכללי של $a_n=a_{n-1}+6a_{n-2}$ ?",
      "options": [
       {
        "id": "a",
        "value": "$a_n=C_1\\cdot3^n+C_2\\cdot(-2)^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot(-2)^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n=C_1\\cdot(-3)^n+C_2\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot(-3)^n+C_2\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n=C_1\\cdot3^n+C_2\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n=C_1\\cdot 6^n+C_2\\cdot1^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>6</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>1</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot 6^n+C_2\\cdot1^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "המשוואה האופיינית $x^2-x-6=0$ נותנת $(x-3)(x+2)=0$ ולכן $x=3$ ו-$x=-2$. בתשובה השנייה התחלפו סימני השורשים. בשלישית שני השורשים חיוביים, אבל $-2$ שורש ולא $2$. ברביעית המקדמים $p,q$ שימשו כשורשים.",
      "recap": "שורשים $r_1\\ne r_2$: $C_1r_1^n+C_2r_2^n$.",
      "questionHtml": "מהו הפתרון הכללי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}+6a_{n-2}</annotation></semantics></math></span> ?",
      "explanationHtml": "המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-x-6=0</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">(x-3)(x+2)=0</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">x=3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=-2</annotation></semantics></math></span>. בתשובה השנייה התחלפו סימני השורשים. בשלישית שני השורשים חיוביים, אבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">-2</annotation></semantics></math></span> שורש ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>. ברביעית המקדמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo separator=\"true\">,</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">p,q</annotation></semantics></math></span> שימשו כשורשים.",
      "recapHtml": "שורשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>r</mi><mn>1</mn></msub><mo mathvariant=\"normal\">≠</mo><msub><mi>r</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">r_1\\ne r_2</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><msubsup><mi>r</mi><mn>1</mn><mi>n</mi></msubsup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mi>n</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">C_1r_1^n+C_2r_2^n</annotation></semantics></math></span>."
     },
     {
      "id": "R02-Q4",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=5a_{n-1}-6a_{n-2}$, $a_0=1$, $a_1=0$. הפתרון הכללי הוא $a_n=C_1\\cdot2^n+C_2\\cdot3^n$. מהו $C_2$ ?",
       "answer": -2,
       "tol": 0,
       "explain": "מ-$n=0$: $C_1+C_2=1$. מ-$n=1$: $2C_1+3C_2=0$. מחסירים פעמיים את הראשונה: $C_2=-2$ ואז $C_1=3$. בדיקה: $a_2=5\\cdot0-6\\cdot1=-6$, והנוסחה נותנת $3\\cdot4-2\\cdot9=-6$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">a_1=0</annotation></semantics></math></span>. הפתרון הכללי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot3^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_2</annotation></semantics></math></span> ?",
       "explainHtml": "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=1</annotation></semantics></math></span>. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">2C_1+3C_2=0</annotation></semantics></math></span>. מחסירים פעמיים את הראשונה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_2=-2</annotation></semantics></math></span> ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">C_1=3</annotation></semantics></math></span>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn><mo>⋅</mo><mn>0</mn><mo>−</mo><mn>6</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mo>−</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_2=5\\cdot0-6\\cdot1=-6</annotation></semantics></math></span>, והנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>4</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>9</mn><mo>=</mo><mo>−</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot4-2\\cdot9=-6</annotation></semantics></math></span>."
      },
      "recap": "מציבים $n=0,1$ ופותרים מערכת.",
      "recapHtml": "מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=0,1</annotation></semantics></math></span> ופותרים מערכת."
     },
     {
      "id": "R02-Q5",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=a_{n-1}+2a_{n-2}$, $a_0=2$, $a_1=1$. מצאו נוסחה מפורשת וחשבו את $a_{10}$.",
       "answer": 1025,
       "tol": 0,
       "explain": "המשוואה האופיינית $x^2-x-2=0$ נותנת $x=2$ ו-$x=-1$. אז $a_n=C_1\\cdot2^n+C_2\\cdot(-1)^n$, ומתנאי ההתחלה $C_1+C_2=2$ ו-$2C_1-C_2=1$ מקבלים $C_1=1$, $C_2=1$. לכן $a_n=2^n+(-1)^n$ ו-$a_{10}=1024+1=1025$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}+2a_{n-2}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_0=2</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_1=1</annotation></semantics></math></span>. מצאו נוסחה מפורשת וחשבו את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>10</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_{10}</annotation></semantics></math></span>.",
       "explainHtml": "המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-x-2=0</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x=-1</annotation></semantics></math></span>. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot(-1)^n</annotation></semantics></math></span>, ומתנאי ההתחלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2C_1-C_2=1</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_2=1</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=2^n+(-1)^n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>10</mn></msub><mo>=</mo><mn>1024</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>1025</mn></mrow><annotation encoding=\"application/x-tex\">a_{10}=1024+1=1025</annotation></semantics></math></span>."
      },
      "recap": "הנוסחה המפורשת מאפשרת לחשב כל איבר ישירות.",
      "recapHtml": "הנוסחה המפורשת מאפשרת לחשב כל איבר ישירות."
     },
     {
      "id": "R02-Q6",
      "step": {
       "type": "order",
       "prompt": "סדרו את שלבי הפתרון של נסיגה הומוגנית עם שני שורשים שונים.",
       "lines": [
        "כותבים את המשוואה האופיינית $x^2-px-q=0$",
        "פותרים אותה ומקבלים שורשים $r_1\\ne r_2$",
        "כותבים $a_n=C_1r_1^n+C_2r_2^n$",
        "מציבים $n=0$ ו-$n=1$ ופותרים את $C_1,C_2$"
       ],
       "explain": "כל שלב משתמש בתוצאת הקודם: אי אפשר לכתוב פתרון כללי לפני שיש שורשים, ואי אפשר למצוא קבועים לפני שיש פתרון כללי.",
       "promptHtml": "סדרו את שלבי הפתרון של נסיגה הומוגנית עם שני שורשים שונים.",
       "explainHtml": "כל שלב משתמש בתוצאת הקודם: אי אפשר לכתוב פתרון כללי לפני שיש שורשים, ואי אפשר למצוא קבועים לפני שיש פתרון כללי.",
       "linesHtml": [
        "כותבים את המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>x</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-px-q=0</annotation></semantics></math></span>",
        "פותרים אותה ומקבלים שורשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>r</mi><mn>1</mn></msub><mo mathvariant=\"normal\">≠</mo><msub><mi>r</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">r_1\\ne r_2</annotation></semantics></math></span>",
        "כותבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msubsup><mi>r</mi><mn>1</mn><mi>n</mi></msubsup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mi>n</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1r_1^n+C_2r_2^n</annotation></semantics></math></span>",
        "מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span> ופותרים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1,C_2</annotation></semantics></math></span>"
       ]
      },
      "recap": "אופיינית, שורשים, פתרון כללי, תנאי התחלה.",
      "recapHtml": "אופיינית, שורשים, פתרון כללי, תנאי התחלה."
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🔁",
    "title": "שורש כפול",
    "goal": "לפתור נסיגה הומוגנית כשהמשוואה האופיינית נותנת שורש כפול.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>לפעמים למשוואה האופיינית יש שורש <b>כפול</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mtext> </mtext><mi>x</mi><mo>−</mo><mi>q</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mi>r</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2-p\\,x-q=(x-r)^2</annotation></semantics></math></span>. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">r^n</annotation></semantics></math></span> הוא פתרון אחד בלבד, וצריך עוד פתרון עצמאי. מתברר ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,r^n</annotation></semantics></math></span> מקיים את הנסיגה גם הוא.</p>\n<div class=\"lesson-rule\">🔑 שורש כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>: הפתרון הכללי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\,r^n+C_2\\,n\\,r^n</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=4a_{n-1}-4a_{n-2}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_1=6</annotation></semantics></math></span>. המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-4x+4=(x-2)^2=0</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">r=2</annotation></semantics></math></span> כפול. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot n\\cdot2^n</annotation></semantics></math></span>. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1=1</annotation></semantics></math></span>. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">2C_1+2C_2=6</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_2=2</annotation></semantics></math></span>. התוצאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\">)</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=2^n+2n\\cdot2^n=(1+2n)2^n</annotation></semantics></math></span>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>6</mn><mo>−</mo><mn>4</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">a_2=4\\cdot6-4\\cdot1=20</annotation></semantics></math></span> והנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot4=20</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ שלוש טעויות נפוצות: (1) לכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>r</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">r^{2n}</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,r^n</annotation></semantics></math></span>. (2) להציב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span> ולשכוח את הגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>: האיבר השני נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mn>1</mn><mo>⋅</mo><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">C_2\\cdot1\\cdot r</annotation></semantics></math></span>, ולכן המשוואה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mi>r</mi><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">rC_1+rC_2</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1+C_2</annotation></semantics></math></span>. (3) כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">r=1</annotation></semantics></math></span> הפתרון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n=C_1+C_2\\,n</annotation></semantics></math></span>, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>1</mn><mi>n</mi></msup><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1^n=1</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "R03-Q1",
      "question": "מהו הפתרון הכללי של $a_n=6a_{n-1}-9a_{n-2}$ ?",
      "options": [
       {
        "id": "a",
        "value": "$a_n=C_1\\cdot3^n+C_2\\cdot3^{2n}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot3^{2n}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n=C_1\\cdot3^n+C_2\\cdot9^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot9^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n=C_1\\cdot3^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "המשוואה $x^2-6x+9=(x-3)^2=0$ נותנת שורש כפול $3$, ולכן הפתרון הוא $C_1 3^n+C_2 n 3^n$. הביטוי $3^{2n}=9^n$ אינו פתרון (הצבה בנסיגה לא מתקיימת). והתשובה האחרונה חסרה פתרון עצמאי שני, ואז אי אפשר לעמוד בשני תנאי התחלה.",
      "recap": "שורש כפול: $r^n$ ו-$n\\,r^n$.",
      "questionHtml": "מהו הפתרון הכללי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>9</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=6a_{n-1}-9a_{n-2}</annotation></semantics></math></span> ?",
      "explanationHtml": "המשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-6x+9=(x-3)^2=0</annotation></semantics></math></span> נותנת שורש כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>, ולכן הפתרון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>n</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">C_1 3^n+C_2 n 3^n</annotation></semantics></math></span>. הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><msup><mn>9</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3^{2n}=9^n</annotation></semantics></math></span> אינו פתרון (הצבה בנסיגה לא מתקיימת). והתשובה האחרונה חסרה פתרון עצמאי שני, ואז אי אפשר לעמוד בשני תנאי התחלה.",
      "recapHtml": "שורש כפול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">r^n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,r^n</annotation></semantics></math></span>."
     },
     {
      "id": "R03-Q2",
      "step": {
       "type": "numeric",
       "prompt": "מהו השורש של $x^2=10x-25$ ?",
       "answer": 5,
       "tol": 0,
       "explain": "$x^2-10x+25=(x-5)^2=0$, ולכן $x=5$ שורש כפול.",
       "promptHtml": "מהו השורש של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>10</mn><mi>x</mi><mo>−</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">x^2=10x-25</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>10</mn><mi>x</mi><mo>+</mo><mn>25</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-10x+25=(x-5)^2=0</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">x=5</annotation></semantics></math></span> שורש כפול."
      },
      "recap": "ריבוע שלם במשוואה האופיינית נותן שורש כפול.",
      "recapHtml": "ריבוע שלם במשוואה האופיינית נותן שורש כפול."
     },
     {
      "id": "R03-Q3",
      "step": {
       "type": "findbug",
       "prompt": "בפתרון של $a_n=6a_{n-1}-9a_{n-2}$ עם $a_0=2$ ו-$a_1=9$ נפלה שגיאה בשורה אחת. מצאו אותה.",
       "lines": [
        "המשוואה האופיינית $x^2-6x+9=0$ נותנת שורש כפול $x=3$",
        "לכן $a_n=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n$",
        "מ-$a_0=2$ מקבלים $C_1=2$",
        "מ-$a_1=9$ מקבלים $C_1+C_2=9$, ולכן $C_2=7$"
       ],
       "bugIndex": 3,
       "explain": "בשורה האחרונה הציבו $n=1$ בלי לכפול בשורש. נכון: $a_1=C_1\\cdot3+C_2\\cdot1\\cdot3=3C_1+3C_2=9$, ולכן $C_2=1$. בדיקה: $a_2=6\\cdot9-9\\cdot2=36$, והנוסחה $2\\cdot9+1\\cdot2\\cdot9$ נותנת $36$.",
       "promptHtml": "בפתרון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>9</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=6a_{n-1}-9a_{n-2}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_0=2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">a_1=9</annotation></semantics></math></span> נפלה שגיאה בשורה אחת. מצאו אותה.",
       "explainHtml": "בשורה האחרונה הציבו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span> בלי לכפול בשורש. נכון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><mn>3</mn><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">a_1=C_1\\cdot3+C_2\\cdot1\\cdot3=3C_1+3C_2=9</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_2=1</annotation></semantics></math></span>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn><mo>⋅</mo><mn>9</mn><mo>−</mo><mn>9</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">a_2=6\\cdot9-9\\cdot2=36</annotation></semantics></math></span>, והנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>9</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot9+1\\cdot2\\cdot9</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>36</mn></mrow><annotation encoding=\"application/x-tex\">36</annotation></semantics></math></span>.",
       "linesHtml": [
        "המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-6x+9=0</annotation></semantics></math></span> נותנת שורש כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">x=3</annotation></semantics></math></span>",
        "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot n\\cdot3^n</annotation></semantics></math></span>",
        "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_0=2</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1=2</annotation></semantics></math></span>",
        "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">a_1=9</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=9</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">C_2=7</annotation></semantics></math></span>"
       ]
      },
      "recap": "$a_1=rC_1+rC_2$ בשורש כפול.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>r</mi><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mi>r</mi><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_1=rC_1+rC_2</annotation></semantics></math></span> בשורש כפול."
     },
     {
      "id": "R03-Q4",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=4a_{n-1}-4a_{n-2}$, $a_0=1$, $a_1=6$. הנוסחה המפורשת היא $a_n=(1+2n)2^n$. חשבו את $a_5$.",
       "answer": 352,
       "tol": 0,
       "explain": "$a_5=(1+2\\cdot5)\\cdot2^5=11\\cdot32=352$. אפשר לאמת מהנסיגה: $a_2=20$, $a_3=4\\cdot20-4\\cdot6=56$, $a_4=4\\cdot56-4\\cdot20=144$, $a_5=4\\cdot144-4\\cdot56=352$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=4a_{n-1}-4a_{n-2}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_1=6</annotation></semantics></math></span>. הנוסחה המפורשת היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\">)</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=(1+2n)2^n</annotation></semantics></math></span>. חשבו את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_5</annotation></semantics></math></span>.",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>5</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mn>5</mn></msup><mo>=</mo><mn>11</mn><mo>⋅</mo><mn>32</mn><mo>=</mo><mn>352</mn></mrow><annotation encoding=\"application/x-tex\">a_5=(1+2\\cdot5)\\cdot2^5=11\\cdot32=352</annotation></semantics></math></span>. אפשר לאמת מהנסיגה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">a_2=20</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>20</mn><mo>−</mo><mn>4</mn><mo>⋅</mo><mn>6</mn><mo>=</mo><mn>56</mn></mrow><annotation encoding=\"application/x-tex\">a_3=4\\cdot20-4\\cdot6=56</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>56</mn><mo>−</mo><mn>4</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>144</mn></mrow><annotation encoding=\"application/x-tex\">a_4=4\\cdot56-4\\cdot20=144</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>144</mn><mo>−</mo><mn>4</mn><mo>⋅</mo><mn>56</mn><mo>=</mo><mn>352</mn></mrow><annotation encoding=\"application/x-tex\">a_5=4\\cdot144-4\\cdot56=352</annotation></semantics></math></span>."
      },
      "recap": "הנוסחה המפורשת נותנת כל איבר ישירות.",
      "recapHtml": "הנוסחה המפורשת נותנת כל איבר ישירות."
     },
     {
      "id": "R03-Q5",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=2a_{n-1}-a_{n-2}$, $a_0=3$, $a_1=5$. מצאו נוסחה מפורשת וחשבו את $a_{100}$.",
       "answer": 203,
       "tol": 0,
       "explain": "$x^2-2x+1=(x-1)^2=0$, שורש כפול $1$. אז $a_n=C_1+C_2\\,n$. מ-$a_0=3$ מקבלים $C_1=3$, ומ-$a_1=C_1+C_2=5$ מקבלים $C_2=2$. לכן $a_n=3+2n$ ו-$a_{100}=203$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_n=2a_{n-1}-a_{n-2}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_0=3</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">a_1=5</annotation></semantics></math></span>. מצאו נוסחה מפורשת וחשבו את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>100</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_{100}</annotation></semantics></math></span>.",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-2x+1=(x-1)^2=0</annotation></semantics></math></span>, שורש כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n=C_1+C_2\\,n</annotation></semantics></math></span>. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">a_0=3</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">C_1=3</annotation></semantics></math></span>, ומ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">a_1=C_1+C_2=5</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_2=2</annotation></semantics></math></span>. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n=3+2n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>100</mn></msub><mo>=</mo><mn>203</mn></mrow><annotation encoding=\"application/x-tex\">a_{100}=203</annotation></semantics></math></span>."
      },
      "recap": "שורש כפול 1: $a_n=C_1+C_2n$.",
      "recapHtml": "שורש כפול 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n=C_1+C_2n</annotation></semantics></math></span>."
     },
     {
      "bankId": "21B-A-Q3b",
      "recap": "שורש כפול 2: $C_1 2^n+C_2 n 2^n$.",
      "recapHtml": "שורש כפול 2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>n</mi><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">C_1 2^n+C_2 n 2^n</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "➕",
    "title": "אגף ימין קבוע",
    "goal": "למצוא פתרון פרטי קבוע, או $A\\,n$ כש-1 שורש, ולהשלים לפתרון כללי.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "למצוא פתרון פרטי קבוע, או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">A\\,n</annotation></semantics></math></span> כש-1 שורש, ולהשלים לפתרון כללי.",
    "lesson": {
     "html": "\n<p>כשיש אגף ימין, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>p</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>q</mi><mtext> </mtext><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=p\\,a_{n-1}+q\\,a_{n-2}+g(n)</annotation></semantics></math></span>, הפתרון הכללי הוא סכום של שני חלקים:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n=a_n^{(h)}+a_n^{(p)}</annotation></semantics></math></span></div>\n<ul>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n^{(h)}</annotation></semantics></math></span> הוא <b>הפתרון ההומוגני</b>: הפתרון של הנסיגה בלי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">g(n)</annotation></semantics></math></span>, כמו בשלבים הקודמים, עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1,C_2</annotation></semantics></math></span>.</li>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}</annotation></semantics></math></span> הוא <b>פתרון פרטי</b>: פתרון אחד כלשהו של הנסיגה המלאה, בלי קבועים לא ידועים.</li>\n</ul>\n<h3>אגף ימין קבוע</h3>\n<p>כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">g(n)=c</annotation></semantics></math></span> מנחשים פתרון פרטי קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A</annotation></semantics></math></span>. הצבה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>p</mi><mi>A</mi><mo>+</mo><mi>q</mi><mi>A</mi><mo>+</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">A=pA+qA+c</annotation></semantics></math></span>, ולכן:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mi>c</mi><mrow><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi></mrow></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">A=\\dfrac{c}{1-p-q}</annotation></semantics></math></span></div>\n<p>זה עובד כל עוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1-p-q\\ne0</annotation></semantics></math></span>, כלומר כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> <b>אינו</b> שורש של המשוואה האופיינית (הצבת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x=1</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>x</mi><mo>−</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">x^2-px-q</annotation></semantics></math></span> נותנת בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">1-p-q</annotation></semantics></math></span>).</p>\n<div class=\"lesson-rule\">🔑 אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> <b>כן</b> שורש של המשוואה האופיינית, הניחוש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> לא עובד (מגיעים לסתירה כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=4</annotation></semantics></math></span>). מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>7</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>12</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_n=7a_{n-1}-12a_{n-2}+6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_0=2</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">a_1=7</annotation></semantics></math></span>. שורשי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-7x+12=0</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(h)}=C_1\\cdot3^n+C_2\\cdot4^n</annotation></semantics></math></span>. כאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mn>7</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>6</mn><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1-7+12=6\\ne0</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mn>6</mn><mn>6</mn></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{6}{6}=1</annotation></semantics></math></span>. הפתרון הכללי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot4^n+1</annotation></semantics></math></span>. <b>רק עכשיו</b> מציבים תנאי התחלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2+1=2</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">3C_1+4C_2+1=7</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3C_1+4C_2=6</annotation></semantics></math></span>. מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">C_2=3</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1=-2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=-2\\cdot3^n+3\\cdot4^n+1</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1,C_2</annotation></semantics></math></span> קובעים מתנאי ההתחלה רק אחרי שהוספנו את הפתרון הפרטי. הצבה בפתרון ההומוגני בלבד נותנת קבועים שגויים.</div>\n"
    },
    "questions": [
     {
      "id": "R04-Q1",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=5a_{n-1}-6a_{n-2}+12$. מהו המקדם $A$ בפתרון פרטי קבוע $a_n^{(p)}=A$ ?",
       "answer": 6,
       "tol": 0,
       "explain": "$1-p-q=1-5+6=2$, ולכן $A=\\frac{12}{2}=6$. בדיקה: $6=5\\cdot6-6\\cdot6+12$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}+12</annotation></semantics></math></span>. מהו המקדם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בפתרון פרטי קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>1</mn><mo>−</mo><mn>5</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1-p-q=1-5+6=2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mn>12</mn><mn>2</mn></mfrac><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{12}{2}=6</annotation></semantics></math></span>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>=</mo><mn>5</mn><mo>⋅</mo><mn>6</mn><mo>−</mo><mn>6</mn><mo>⋅</mo><mn>6</mn><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">6=5\\cdot6-6\\cdot6+12</annotation></semantics></math></span>."
      },
      "recap": "$A=c/(1-p-q)$.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A=c/(1-p-q)</annotation></semantics></math></span>."
     },
     {
      "id": "R04-Q2",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=a_{n-1}+6a_{n-2}+12$. מהו המקדם $A$ בפתרון פרטי קבוע $a_n^{(p)}=A$ ?",
       "answer": -2,
       "tol": 0,
       "explain": "$1-p-q=1-1-6=-6$, ולכן $A=\\frac{12}{-6}=-2$. בדיקה: $-2=-2+6\\cdot(-2)+12$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}+6a_{n-2}+12</annotation></semantics></math></span>. מהו המקדם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בפתרון פרטי קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>−</mo><mn>6</mn><mo>=</mo><mo>−</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">1-p-q=1-1-6=-6</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mn>12</mn><mrow><mo>−</mo><mn>6</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{12}{-6}=-2</annotation></semantics></math></span>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>2</mn><mo>=</mo><mo>−</mo><mn>2</mn><mo>+</mo><mn>6</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">-2=-2+6\\cdot(-2)+12</annotation></semantics></math></span>."
      },
      "recap": "$A=c/(1-p-q)$, גם כשהמכנה שלילי.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A=c/(1-p-q)</annotation></semantics></math></span>, גם כשהמכנה שלילי."
     },
     {
      "id": "R04-Q3",
      "question": "נתון $a_n=3a_{n-1}-2a_{n-2}+4$. איזה ניחוש לפתרון הפרטי נכון?",
      "options": [
       {
        "id": "a",
        "value": "$a_n^{(p)}=A$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n^{(p)}=A\\,n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n^{(p)}=A\\,n^2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n^{(p)}=A\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot2^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "המשוואה האופיינית $x^2-3x+2=0$ נותנת $x=1$ ו-$x=2$. כי $1$ שורש, ניחוש קבוע $A$ נותן $A=3A-2A+4$, כלומר $0=4$, סתירה. לכן מנחשים $A\\,n$. הניחוש $A\\,n^2$ נדרש רק כש-$1$ שורש כפול. והניחוש $A\\cdot2^n$ מתאים לאגף ימין מעריכי, לא לקבוע.",
      "recap": "1 שורש של האופיינית: מנחשים $A\\,n$.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}+4</annotation></semantics></math></span>. איזה ניחוש לפתרון הפרטי נכון?",
      "explanationHtml": "המשוואה האופיינית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-3x+2=0</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x=2</annotation></semantics></math></span>. כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> שורש, ניחוש קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>3</mn><mi>A</mi><mo>−</mo><mn>2</mn><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">A=3A-2A+4</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=4</annotation></semantics></math></span>, סתירה. לכן מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">A\\,n</annotation></semantics></math></span>. הניחוש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n^2</annotation></semantics></math></span> נדרש רק כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> שורש כפול. והניחוש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot2^n</annotation></semantics></math></span> מתאים לאגף ימין מעריכי, לא לקבוע.",
      "recapHtml": "1 שורש של האופיינית: מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">A\\,n</annotation></semantics></math></span>."
     },
     {
      "id": "R04-Q4",
      "step": {
       "type": "numeric",
       "prompt": "באותה נסיגה, $a_n=3a_{n-1}-2a_{n-2}+4$, מנחשים $a_n^{(p)}=A\\,n$. מהו $A$ ?",
       "answer": -4,
       "tol": 0,
       "explain": "הצבה: $An=3A(n-1)-2A(n-2)+4=An+A+4$. מחסרים $An$ משני האגפים: $0=A+4$, ולכן $A=-4$. הפתרון הפרטי הוא $-4n$.",
       "promptHtml": "באותה נסיגה, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}+4</annotation></semantics></math></span>, מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ?",
       "explainHtml": "הצבה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>n</mi><mo>=</mo><mn>3</mn><mi>A</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>−</mo><mn>2</mn><mi>A</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>4</mn><mo>=</mo><mi>A</mi><mi>n</mi><mo>+</mo><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">An=3A(n-1)-2A(n-2)+4=An+A+4</annotation></semantics></math></span>. מחסרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">An</annotation></semantics></math></span> משני האגפים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=A+4</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo>−</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">A=-4</annotation></semantics></math></span>. הפתרון הפרטי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>4</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">-4n</annotation></semantics></math></span>."
      },
      "recap": "מצמצמים $A\\,n$ משני האגפים ומשאירים משוואה ב-$A$.",
      "recapHtml": "מצמצמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">A\\,n</annotation></semantics></math></span> משני האגפים ומשאירים משוואה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>."
     },
     {
      "id": "R04-Q5",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=7a_{n-1}-12a_{n-2}+6$, $a_0=1$, $a_1=2$. הפתרון הכללי הוא $a_n=C_1\\cdot3^n+C_2\\cdot4^n+1$. מהו $C_1$ ?",
       "answer": -1,
       "tol": 0,
       "explain": "מ-$n=0$: $C_1+C_2+1=1$, כלומר $C_1+C_2=0$. מ-$n=1$: $3C_1+4C_2+1=2$, כלומר $3C_1+4C_2=1$. אז $C_2=1$ ו-$C_1=-1$. אם שוכחים את הפתרון הפרטי מקבלים $C_1+C_2=1$ ו-$3C_1+4C_2=2$, כלומר $C_1=2$, וזו שגיאה.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>7</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>12</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">a_n=7a_{n-1}-12a_{n-2}+6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">a_1=2</annotation></semantics></math></span>. הפתרון הכללי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot3^n+C_2\\cdot4^n+1</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_1</annotation></semantics></math></span> ?",
       "explainHtml": "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2+1=1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=0</annotation></semantics></math></span>. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3C_1+4C_2+1=2</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3C_1+4C_2=1</annotation></semantics></math></span>. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_2=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1=-1</annotation></semantics></math></span>. אם שוכחים את הפתרון הפרטי מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3C_1+4C_2=2</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1=2</annotation></semantics></math></span>, וזו שגיאה."
      },
      "recap": "תנאי התחלה מציבים בפתרון הכללי השלם.",
      "recapHtml": "תנאי התחלה מציבים בפתרון הכללי השלם."
     },
     {
      "bankId": "23B-B-Q2b",
      "recap": "אגף ימין קבוע ושורש כפול: $A=c/(1-p-q)$.",
      "recapHtml": "אגף ימין קבוע ושורש כפול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>−</mo><mi>q</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A=c/(1-p-q)</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "📈",
    "title": "אגף ימין מעריכי",
    "goal": "למצוא פתרון פרטי $A\\,s^n$ כש-$s$ אינו שורש של המשוואה האופיינית.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "למצוא פתרון פרטי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,s^n</annotation></semantics></math></span> כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> אינו שורש של המשוואה האופיינית.",
    "lesson": {
     "html": "\n<p>כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>g</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>c</mi><mo>⋅</mo><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">g(n)=c\\cdot s^n</annotation></semantics></math></span> (מספר קבוע כפול חזקה) מנחשים פתרון פרטי מאותה צורה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,s^n</annotation></semantics></math></span>. זה עובד כל עוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> <b>אינו</b> שורש של המשוואה האופיינית.</p>\n<h3>איך מוצאים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span></h3>\n<p>מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,s^n</annotation></semantics></math></span> בנסיגה המלאה ומחלקים בחזקה הנמוכה ביותר, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">s^{n-2}</annotation></semantics></math></span>. נשארים רק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">s^2</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> ומספרים:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mi>p</mi><mtext> </mtext><mi>A</mi><mtext> </mtext><mi>s</mi><mo>+</mo><mi>q</mi><mtext> </mtext><mi>A</mi><mo>+</mo><mi>c</mi><mtext> </mtext><msup><mi>s</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">A\\,s^2=p\\,A\\,s+q\\,A+c\\,s^2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>c</mi><mtext> </mtext><msup><mi>s</mi><mn>2</mn></msup></mrow><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mtext> </mtext><mi>s</mi><mo>−</mo><mi>q</mi></mrow></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">A=\\dfrac{c\\,s^2}{s^2-p\\,s-q}</annotation></semantics></math></span></div>\n<p>המכנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>s</mi><mo>−</mo><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">s^2-ps-q</annotation></semantics></math></span> הוא המשוואה האופיינית עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">x=s</annotation></semantics></math></span>. הוא שונה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> בדיוק כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> אינו שורש.</p>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}+4^n</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">a_0=10</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>35</mn></mrow><annotation encoding=\"application/x-tex\">a_1=35</annotation></semantics></math></span>. שורשי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">x^2-5x+6</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">2,3</annotation></semantics></math></span>. כאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">s=4</annotation></semantics></math></span> אינו שורש, ולכן מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot4^n</annotation></semantics></math></span>. הצבה וחלוקה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">4^{n-2}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mi>A</mi><mo>=</mo><mn>20</mn><mi>A</mi><mo>−</mo><mn>6</mn><mi>A</mi><mo>+</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16A=20A-6A+16</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>A</mi><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">2A=16</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">A=8</annotation></semantics></math></span>. הפתרון הכללי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>8</mn><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot3^n+8\\cdot4^n</annotation></semantics></math></span>. תנאי התחלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>8</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2+8=10</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>32</mn><mo>=</mo><mn>35</mn></mrow><annotation encoding=\"application/x-tex\">2C_1+3C_2+32=35</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_2=-1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">C_1=3</annotation></semantics></math></span>. בדיקה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_2</annotation></semantics></math></span>: הנסיגה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>35</mn><mo>−</mo><mn>6</mn><mo>⋅</mo><mn>10</mn><mo>+</mo><mn>16</mn><mo>=</mo><mn>131</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot35-6\\cdot10+16=131</annotation></semantics></math></span>, והנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>−</mo><mn>9</mn><mo>+</mo><mn>128</mn><mo>=</mo><mn>131</mn></mrow><annotation encoding=\"application/x-tex\">12-9+128=131</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ מחלקים את <b>כל</b> האיברים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">s^{n-2}</annotation></semantics></math></span>, כולל אגף הימין: באגף הימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo>⋅</mo><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">c\\cdot s^n</annotation></semantics></math></span> הופך ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mtext> </mtext><msup><mi>s</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">c\\,s^2</annotation></semantics></math></span>, ולא נשאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> לבדו.</div>\n"
    },
    "questions": [
     {
      "id": "R05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=4a_{n-1}-3a_{n-2}+5\\cdot 2^n$. מנחשים $a_n^{(p)}=A\\cdot2^n$. מהו $A$ ?",
       "answer": -20,
       "tol": 0,
       "explain": "השורשים של $x^2-4x+3$ הם $1,3$, ולכן $2$ אינו שורש. הצבה וחלוקה ב-$2^{n-2}$: $4A=8A-3A+5\\cdot4$, כלומר $4A=5A+20$ ו-$A=-20$. לפי הנוסחה: $\\frac{5\\cdot4}{4-8+3}=\\frac{20}{-1}=-20$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=4a_{n-1}-3a_{n-2}+5\\cdot 2^n</annotation></semantics></math></span>. מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot2^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ?",
       "explainHtml": "השורשים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">x^2-4x+3</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1,3</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> אינו שורש. הצבה וחלוקה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{n-2}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mo>=</mo><mn>8</mn><mi>A</mi><mo>−</mo><mn>3</mn><mi>A</mi><mo>+</mo><mn>5</mn><mo>⋅</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4A=8A-3A+5\\cdot4</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mo>=</mo><mn>5</mn><mi>A</mi><mo>+</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">4A=5A+20</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mo>−</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">A=-20</annotation></semantics></math></span>. לפי הנוסחה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mn>5</mn><mo>⋅</mo><mn>4</mn></mrow><mrow><mn>4</mn><mo>−</mo><mn>8</mn><mo>+</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mn>20</mn><mrow><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{5\\cdot4}{4-8+3}=\\frac{20}{-1}=-20</annotation></semantics></math></span>."
      },
      "recap": "$A=cs^2/(s^2-ps-q)$ כש-$s$ אינו שורש.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><msup><mi>s</mi><mn>2</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>s</mi><mo>−</mo><mi>q</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A=cs^2/(s^2-ps-q)</annotation></semantics></math></span> כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> אינו שורש."
     },
     {
      "id": "R05-Q2",
      "question": "נתון $a_n=a_{n-1}+6a_{n-2}+7\\cdot 4^n$. איזה ניחוש לפתרון הפרטי נכון?",
      "options": [
       {
        "id": "a",
        "value": "$a_n^{(p)}=A\\cdot4^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot4^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n^{(p)}=A\\,n\\cdot4^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\cdot4^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n^{(p)}=A\\cdot7^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>7</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot7^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n^{(p)}=A\\,n^2\\cdot4^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2\\cdot4^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "השורשים של $x^2-x-6$ הם $3,-2$, ולכן $4$ אינו שורש ואין צורך להכפיל ב-$n$. הבסיס של הניחוש הוא הבסיס של אגף הימין, $4$, ולא המקדם $7$. הכפלה ב-$n^2$ נדרשת רק לשורש כפול.",
      "recap": "בסיס הניחוש הוא בסיס אגף הימין; כופלים ב-$n$ רק אם הוא שורש.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>7</mn><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}+6a_{n-2}+7\\cdot 4^n</annotation></semantics></math></span>. איזה ניחוש לפתרון הפרטי נכון?",
      "explanationHtml": "השורשים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">x^2-x-6</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">3,-2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> אינו שורש ואין צורך להכפיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. הבסיס של הניחוש הוא הבסיס של אגף הימין, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>, ולא המקדם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>. הכפלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> נדרשת רק לשורש כפול.",
      "recapHtml": "בסיס הניחוש הוא בסיס אגף הימין; כופלים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> רק אם הוא שורש."
     },
     {
      "id": "R05-Q3",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=a_{n-1}+6a_{n-2}+6\\cdot 4^n$. מהו $A$ בפתרון הפרטי $A\\cdot4^n$ ?",
       "answer": 16,
       "tol": 0,
       "explain": "המכנה הוא $s^2-ps-q=16-1\\cdot4-6=6$, ולכן $A=\\frac{6\\cdot16}{6}=16$. בדיקה אחרי חלוקה ב-$4^{n-2}$: $16A=4A+6A+96$, כלומר $256=64+96+96$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>6</mn><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=a_{n-1}+6a_{n-2}+6\\cdot 4^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בפתרון הפרטי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot4^n</annotation></semantics></math></span> ?",
       "explainHtml": "המכנה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>s</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>16</mn><mo>−</mo><mn>1</mn><mo>⋅</mo><mn>4</mn><mo>−</mo><mn>6</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">s^2-ps-q=16-1\\cdot4-6=6</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mo>⋅</mo><mn>16</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{6\\cdot16}{6}=16</annotation></semantics></math></span>. בדיקה אחרי חלוקה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">4^{n-2}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mi>A</mi><mo>=</mo><mn>4</mn><mi>A</mi><mo>+</mo><mn>6</mn><mi>A</mi><mo>+</mo><mn>96</mn></mrow><annotation encoding=\"application/x-tex\">16A=4A+6A+96</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>256</mn><mo>=</mo><mn>64</mn><mo>+</mo><mn>96</mn><mo>+</mo><mn>96</mn></mrow><annotation encoding=\"application/x-tex\">256=64+96+96</annotation></semantics></math></span>."
      },
      "recap": "במכנה $ps$ ולא $p$ לבדו.",
      "recapHtml": "במכנה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">ps</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> לבדו."
     },
     {
      "id": "R05-Q4",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=6a_{n-1}-8a_{n-2}+3^n$, $a_0=-1$, $a_1=1$. הפתרון הכללי הוא $a_n=C_1\\cdot2^n+C_2\\cdot4^n-9\\cdot3^n$. מהו $C_2$ ?",
       "answer": 6,
       "tol": 0,
       "explain": "מ-$n=0$: $C_1+C_2-9=-1$, כלומר $C_1+C_2=8$. מ-$n=1$: $2C_1+4C_2-27=1$, כלומר $C_1+2C_2=14$. מחסירים: $C_2=6$ ו-$C_1=2$. בדיקה על $a_2$: הנסיגה נותנת $6\\cdot1-8\\cdot(-1)+9=23$, והנוסחה נותנת $8+96-81=23$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>8</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=6a_{n-1}-8a_{n-2}+3^n</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=-1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_1=1</annotation></semantics></math></span>. הפתרון הכללי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup><mo>−</mo><mn>9</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot4^n-9\\cdot3^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">C_2</annotation></semantics></math></span> ?",
       "explainHtml": "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>−</mo><mn>9</mn><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2-9=-1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=8</annotation></semantics></math></span>. מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>−</mo><mn>27</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2C_1+4C_2-27=1</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">C_1+2C_2=14</annotation></semantics></math></span>. מחסירים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">C_2=6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1=2</annotation></semantics></math></span>. בדיקה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_2</annotation></semantics></math></span>: הנסיגה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>8</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>9</mn><mo>=</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">6\\cdot1-8\\cdot(-1)+9=23</annotation></semantics></math></span>, והנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>+</mo><mn>96</mn><mo>−</mo><mn>81</mn><mo>=</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">8+96-81=23</annotation></semantics></math></span>."
      },
      "recap": "הפתרון הפרטי נכנס לתנאי ההתחלה.",
      "recapHtml": "הפתרון הפרטי נכנס לתנאי ההתחלה."
     },
     {
      "id": "R05-Q5",
      "question": "מציבים $A\\cdot4^n$ בנסיגה $a_n=5a_{n-1}-6a_{n-2}+4^n$ ומחלקים ב-$4^{n-2}$. איזו משוואה מתקבלת?",
      "options": [
       {
        "id": "a",
        "value": "$4A=5A-6A+4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mo>=</mo><mn>5</mn><mi>A</mi><mo>−</mo><mn>6</mn><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4A=5A-6A+4</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$16A=5A-6A+16$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mi>A</mi><mo>=</mo><mn>5</mn><mi>A</mi><mo>−</mo><mn>6</mn><mi>A</mi><mo>+</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16A=5A-6A+16</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$16A=20A-6A+16$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mi>A</mi><mo>=</mo><mn>20</mn><mi>A</mi><mo>−</mo><mn>6</mn><mi>A</mi><mo>+</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16A=20A-6A+16</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$16A=20A-6A+4$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mi>A</mi><mo>=</mo><mn>20</mn><mi>A</mi><mo>−</mo><mn>6</mn><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">16A=20A-6A+4</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "ב-$A\\cdot4^n$ מחלקים ב-$4^{n-2}$ ומקבלים $16A$. האיבר $5A\\cdot4^{n-1}$ נותן $20A$, והאיבר $6A\\cdot4^{n-2}$ נותן $6A$. האיבר $4^n$ נותן $16$. בתשובות האחרות מחלקים רק חלק מהאיברים, ולכן הן נותנות $A$ שגוי (במקום $A=8$).",
      "recap": "מחלקים כל איבר ב-$s^{n-2}$, כולל אגף הימין.",
      "questionHtml": "מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot4^n</annotation></semantics></math></span> בנסיגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}+4^n</annotation></semantics></math></span> ומחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">4^{n-2}</annotation></semantics></math></span>. איזו משוואה מתקבלת?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot4^n</annotation></semantics></math></span> מחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">4^{n-2}</annotation></semantics></math></span> ומקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">16A</annotation></semantics></math></span>. האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">5A\\cdot4^{n-1}</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">20A</annotation></semantics></math></span>, והאיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">6A\\cdot4^{n-2}</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">6A</annotation></semantics></math></span>. האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">4^n</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span>. בתשובות האחרות מחלקים רק חלק מהאיברים, ולכן הן נותנות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שגוי (במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">A=8</annotation></semantics></math></span>).",
      "recapHtml": "מחלקים כל איבר ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">s^{n-2}</annotation></semantics></math></span>, כולל אגף הימין."
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🔔",
    "title": "רזוננס: כשהבסיס הוא שורש",
    "goal": "לזהות שבסיס אגף הימין הוא שורש של המשוואה האופיינית, ולנחש $A\\,n\\,s^n$ או $A\\,n^2\\,s^n$.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לזהות שבסיס אגף הימין הוא שורש של המשוואה האופיינית, ולנחש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,s^n</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n^2\\,s^n</annotation></semantics></math></span>.",
    "lesson": {
     "html": "\n<p>מה קורה כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> של אגף הימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo>⋅</mo><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">c\\cdot s^n</annotation></semantics></math></span> <b>כן</b> שורש של המשוואה האופיינית? הניחוש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,s^n</annotation></semantics></math></span> כבר פתרון של החלק ההומוגני, ולכן ההצבה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mi>c</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">0=c\\,s^n</annotation></semantics></math></span>, סתירה. זו <b>תופעת הרזוננס</b> (התאמה). התיקון: מכפילים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.</p>\n<table>\n<thead><tr><th><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> ביחס למשוואה האופיינית</th><th>ניחוש לפתרון פרטי</th></tr></thead>\n<tbody>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> אינו שורש</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,s^n</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> שורש פשוט (אחד משני שורשים שונים)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,s^n</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> שורש כפול</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n^2\\,s^n</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<p>אחרי הניחוש מציבים בנסיגה ומחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>s</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">s^{n-2}</annotation></semantics></math></span> כמו קודם. המקדמים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> (או של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>) מצטמצמים משני האגפים, ונשארת משוואה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בלבד. התוצאה:</p>\n<ul>\n<li>שורש פשוט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>c</mi><mtext> </mtext><msup><mi>s</mi><mn>2</mn></msup></mrow><mrow><mi>p</mi><mtext> </mtext><mi>s</mi><mo>+</mo><mn>2</mn><mi>q</mi></mrow></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">A=\\dfrac{c\\,s^2}{p\\,s+2q}</annotation></semantics></math></span>.</li>\n<li>שורש כפול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mi>c</mi><mn>2</mn></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">A=\\dfrac{c}{2}</annotation></semantics></math></span>.</li>\n</ul>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}+3^n</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">a_0=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">a_1=10</annotation></semantics></math></span>. השורשים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">2,3</annotation></semantics></math></span>. כאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">s=3</annotation></semantics></math></span> שורש פשוט, ולכן מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,3^n</annotation></semantics></math></span>. לפי הנוסחה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mn>9</mn><mrow><mn>15</mn><mo>−</mo><mn>12</mn></mrow></mfrac><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{9}{15-12}=3</annotation></semantics></math></span>. הפתרון הכללי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>3</mn><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=C_1\\cdot2^n+C_2\\cdot3^n+3\\,n\\,3^n</annotation></semantics></math></span>. מתנאי ההתחלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_1+C_2=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>9</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">2C_1+3C_2+9=10</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C_2=-1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">C_1=2</annotation></semantics></math></span>. בדיקה על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_2</annotation></semantics></math></span>: הנסיגה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>10</mn><mo>−</mo><mn>6</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>9</mn><mo>=</mo><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot10-6\\cdot1+9=53</annotation></semantics></math></span>, והנוסחה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>−</mo><mn>9</mn><mo>+</mo><mn>54</mn><mo>=</mo><mn>53</mn></mrow><annotation encoding=\"application/x-tex\">8-9+54=53</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ מזהים רזוננס <b>לפני</b> שמנחשים: קודם מוצאים את השורשים של המשוואה האופיינית, ואז משווים אליהם את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span>. סימן שניחשתם לא נכון הוא משוואה כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=4</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "R06-Q1",
      "question": "נתון $a_n=3a_{n-1}-2a_{n-2}+5\\cdot 2^n$. איזה ניחוש לפתרון הפרטי נכון?",
      "options": [
       {
        "id": "a",
        "value": "$a_n^{(p)}=A\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n^{(p)}=A\\,n^2\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n^{(p)}=A\\,n\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n^{(p)}=A\\,n\\cdot5^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\cdot5^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "השורשים של $x^2-3x+2$ הם $1,2$. הבסיס $2$ של אגף הימין הוא שורש פשוט, ולכן מנחשים $A\\,n\\,2^n$. הניחוש $A\\,2^n$ נכשל ברזוננס, $n^2$ מיועד לשורש כפול, והבסיס $5$ הוא המקדם ולא הבסיס.",
      "recap": "שורש פשוט: $A\\,n\\,s^n$.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}+5\\cdot 2^n</annotation></semantics></math></span>. איזה ניחוש לפתרון הפרטי נכון?",
      "explanationHtml": "השורשים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x^2-3x+2</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1,2</annotation></semantics></math></span>. הבסיס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> של אגף הימין הוא שורש פשוט, ולכן מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,2^n</annotation></semantics></math></span>. הניחוש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,2^n</annotation></semantics></math></span> נכשל ברזוננס, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> מיועד לשורש כפול, והבסיס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span> הוא המקדם ולא הבסיס.",
      "recapHtml": "שורש פשוט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,s^n</annotation></semantics></math></span>."
     },
     {
      "id": "R06-Q2",
      "question": "נתון $a_n=4a_{n-1}-4a_{n-2}+7\\cdot 2^n$. איזה ניחוש לפתרון הפרטי נכון?",
      "options": [
       {
        "id": "a",
        "value": "$a_n^{(p)}=A\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n^{(p)}=A\\,n^2\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n^{(p)}=A\\,n\\cdot2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\cdot2^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n^{(p)}=A\\,n^2\\cdot7^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>7</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2\\cdot7^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "המשוואה $x^2-4x+4=(x-2)^2$ נותנת $2$ כפול, וגם אגף הימין הוא $2^n$. גם ב-$A\\,n\\,2^n$ ההצבה נותנת סתירה, כי $n\\,2^n$ הוא כבר פתרון הומוגני. לכן מנחשים $A\\,n^2\\,2^n$.",
      "recap": "שורש כפול: $A\\,n^2\\,s^n$.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=4a_{n-1}-4a_{n-2}+7\\cdot 2^n</annotation></semantics></math></span>. איזה ניחוש לפתרון הפרטי נכון?",
      "explanationHtml": "המשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2-4x+4=(x-2)^2</annotation></semantics></math></span> נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> כפול, וגם אגף הימין הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span>. גם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,2^n</annotation></semantics></math></span> ההצבה נותנת סתירה, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,2^n</annotation></semantics></math></span> הוא כבר פתרון הומוגני. לכן מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n^2\\,2^n</annotation></semantics></math></span>.",
      "recapHtml": "שורש כפול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n^2\\,s^n</annotation></semantics></math></span>."
     },
     {
      "id": "R06-Q3",
      "question": "נתון $a_n=5a_{n-1}-6a_{n-2}+7\\cdot 4^n$. איזה ניחוש לפתרון הפרטי נכון?",
      "options": [
       {
        "id": "a",
        "value": "$a_n^{(p)}=A\\cdot4^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot4^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n^{(p)}=A\\,n\\cdot4^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\cdot4^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n^{(p)}=A\\,n^2\\cdot4^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2\\cdot4^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n^{(p)}=A\\cdot 2^n+B\\cdot3^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mi>B</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\cdot 2^n+B\\cdot3^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "השורשים הם $2,3$ ו-$4$ אינו אחד מהם, ולכן אין רזוננס והניחוש הרגיל $A\\cdot4^n$ מספיק. הכפלה ב-$n$ היא רק כשהבסיס שורש. והניחוש האחרון הוא הפתרון ההומוגני, שאינו תלוי באגף הימין.",
      "recap": "קודם בודקים אם הבסיס שורש.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>7</mn><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=5a_{n-1}-6a_{n-2}+7\\cdot 4^n</annotation></semantics></math></span>. איזה ניחוש לפתרון הפרטי נכון?",
      "explanationHtml": "השורשים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">2,3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> אינו אחד מהם, ולכן אין רזוננס והניחוש הרגיל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot4^n</annotation></semantics></math></span> מספיק. הכפלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> היא רק כשהבסיס שורש. והניחוש האחרון הוא הפתרון ההומוגני, שאינו תלוי באגף הימין.",
      "recapHtml": "קודם בודקים אם הבסיס שורש."
     },
     {
      "id": "R06-Q4",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=3a_{n-1}-2a_{n-2}+3\\cdot 2^n$. מנחשים $a_n^{(p)}=A\\,n\\,2^n$. מהו $A$ ?",
       "answer": 6,
       "tol": 0,
       "explain": "הצבה וחלוקה ב-$2^{n-2}$: $4An=6A(n-1)-2A(n-2)+12$, כלומר $4An=4An-2A+12$, ולכן $A=6$. לפי הנוסחה: $\\frac{3\\cdot4}{3\\cdot2+2\\cdot(-2)}=\\frac{12}{2}=6$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}+3\\cdot 2^n</annotation></semantics></math></span>. מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\,2^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ?",
       "explainHtml": "הצבה וחלוקה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{n-2}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mi>n</mi><mo>=</mo><mn>6</mn><mi>A</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>−</mo><mn>2</mn><mi>A</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">4An=6A(n-1)-2A(n-2)+12</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mi>n</mi><mo>=</mo><mn>4</mn><mi>A</mi><mi>n</mi><mo>−</mo><mn>2</mn><mi>A</mi><mo>+</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">4An=4An-2A+12</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">A=6</annotation></semantics></math></span>. לפי הנוסחה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mn>3</mn><mo>⋅</mo><mn>4</mn></mrow><mrow><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>12</mn><mn>2</mn></mfrac><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{3\\cdot4}{3\\cdot2+2\\cdot(-2)}=\\frac{12}{2}=6</annotation></semantics></math></span>."
      },
      "recap": "שורש פשוט: $A=cs^2/(ps+2q)$.",
      "recapHtml": "שורש פשוט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><msup><mi>s</mi><mn>2</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mi>p</mi><mi>s</mi><mo>+</mo><mn>2</mn><mi>q</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A=cs^2/(ps+2q)</annotation></semantics></math></span>."
     },
     {
      "id": "R06-Q5",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=7a_{n-1}-12a_{n-2}+5\\cdot 4^n$. מנחשים $a_n^{(p)}=A\\,n\\,4^n$. מהו $A$ ?",
       "answer": 20,
       "tol": 0,
       "explain": "השורשים הם $3,4$, ולכן $4$ שורש פשוט. $A=\\frac{5\\cdot16}{7\\cdot4+2\\cdot(-12)}=\\frac{80}{4}=20$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>7</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>12</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=7a_{n-1}-12a_{n-2}+5\\cdot 4^n</annotation></semantics></math></span>. מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>4</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n\\,4^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ?",
       "explainHtml": "השורשים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3,4</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> שורש פשוט. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo>⋅</mo><mn>16</mn></mrow><mrow><mn>7</mn><mo>⋅</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>12</mn><mo stretchy=\"false\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>80</mn><mn>4</mn></mfrac><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{5\\cdot16}{7\\cdot4+2\\cdot(-12)}=\\frac{80}{4}=20</annotation></semantics></math></span>."
      },
      "recap": "שורש פשוט: $A=cs^2/(ps+2q)$.",
      "recapHtml": "שורש פשוט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><msup><mi>s</mi><mn>2</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mi>p</mi><mi>s</mi><mo>+</mo><mn>2</mn><mi>q</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A=cs^2/(ps+2q)</annotation></semantics></math></span>."
     },
     {
      "id": "R06-Q6",
      "step": {
       "type": "numeric",
       "prompt": "$a_n=6a_{n-1}-9a_{n-2}+10\\cdot 3^n$. מנחשים $a_n^{(p)}=A\\,n^2\\cdot3^n$. מהו $A$ ?",
       "answer": 5,
       "tol": 0,
       "explain": "$x^2-6x+9=(x-3)^2$, שורש כפול $3$ והבסיס של אגף הימין הוא $3$. לפי $A=\\frac{c}{2}$ מקבלים $A=\\frac{10}{2}=5$.",
       "promptHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>6</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>9</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>10</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=6a_{n-1}-9a_{n-2}+10\\cdot 3^n</annotation></semantics></math></span>. מנחשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>=</mo><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n^{(p)}=A\\,n^2\\cdot3^n</annotation></semantics></math></span>. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>=</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2-6x+9=(x-3)^2</annotation></semantics></math></span>, שורש כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> והבסיס של אגף הימין הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>. לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">A=\\frac{c}{2}</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mfrac><mn>10</mn><mn>2</mn></mfrac><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">A=\\frac{10}{2}=5</annotation></semantics></math></span>."
      },
      "recap": "שורש כפול: $A=c/2$.",
      "recapHtml": "שורש כפול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mi>c</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">A=c/2</annotation></semantics></math></span>."
     },
     {
      "id": "R06-Q7",
      "question": "מציבים $A\\cdot2^n$ בנסיגה $a_n=3a_{n-1}-2a_{n-2}+2^n$ ומחלקים ב-$2^{n-2}$. מתקבלת $4A=6A-2A+4$, כלומר $0=4$. מה זה אומר?",
      "options": [
       {
        "id": "a",
        "value": "$2$ שורש של המשוואה האופיינית, ולכן צריך לנחש $A\\,n\\,2^n$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> שורש של המשוואה האופיינית, ולכן צריך לנחש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,2^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "יש טעות בנסיגה ואין לה פתרון",
        "type": "text",
        "html": "יש טעות בנסיגה ואין לה פתרון"
       },
       {
        "id": "c",
        "value": "$A$ שווה לאפס ולכן הפתרון הפרטי הוא $0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> שווה לאפס ולכן הפתרון הפרטי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "צריך לנחש $A\\cdot3^n$",
        "type": "text",
        "html": "צריך לנחש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot3^n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "סתירה מהצורה $0=c$ עבור $c\\ne0$ היא הסימן לרזוננס: $2$ שורש של $x^2-3x+2$. הנסיגה תקינה ויש לה פתרון, אבל הוא מצורה אחרת. אם $A=0$ היינו מקבלים $0=4$ גם כן, כלומר $0$ אינו פתרון פרטי. והבסיס $3$ אינו קשור לאגף הימין.",
      "recap": "סתירה כמו $0=4$: להכפיל ב-$n$.",
      "questionHtml": "מציבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\cdot2^n</annotation></semantics></math></span> בנסיגה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>+</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=3a_{n-1}-2a_{n-2}+2^n</annotation></semantics></math></span> ומחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{n-2}</annotation></semantics></math></span>. מתקבלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>A</mi><mo>=</mo><mn>6</mn><mi>A</mi><mo>−</mo><mn>2</mn><mi>A</mi><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4A=6A-2A+4</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=4</annotation></semantics></math></span>. מה זה אומר?",
      "explanationHtml": "סתירה מהצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">0=c</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">c\\ne0</annotation></semantics></math></span> היא הסימן לרזוננס: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> שורש של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x^2-3x+2</annotation></semantics></math></span>. הנסיגה תקינה ויש לה פתרון, אבל הוא מצורה אחרת. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> היינו מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=4</annotation></semantics></math></span> גם כן, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> אינו פתרון פרטי. והבסיס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> אינו קשור לאגף הימין.",
      "recapHtml": "סתירה כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">0=4</annotation></semantics></math></span>: להכפיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "📏",
    "title": "סדר גודל: להראות O(cⁿ)",
    "goal": "לזהות את האיבר הדומיננטי ולהוכיח או להפריך טענת $O(c^n)$.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לזהות את האיבר הדומיננטי ולהוכיח או להפריך טענת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>c</mi><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(c^n)</annotation></semantics></math></span>.",
    "lesson": {
     "html": "\n<p>הנוסחה המפורשת היא סכום של איברים כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>⋅</mo><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">C\\cdot r^n</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">C\\,n\\,r^n</annotation></semantics></math></span>. לפעמים התרגיל מבקש להראות ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>c</mi><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(c^n)</annotation></semantics></math></span>, כלומר שקיימים קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi></mrow><annotation encoding=\"application/x-tex\">K</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>n</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">n_0</annotation></semantics></math></span> כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mi>K</mi><mo>⋅</mo><msup><mi>c</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le K\\cdot c^n</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">n\\ge n_0</annotation></semantics></math></span>.</p>\n<h3>מי שולט בסכום</h3>\n<p>האיבר הדומיננטי הוא זה עם <b>הבסיס הגדול ביותר</b>. אם הבסיסים שווים, זה עם החזקה הגדולה יותר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. כך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">5^n</annotation></semantics></math></span> שולט ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n+3^n+5^n</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,2^n</annotation></semantics></math></span> שולט ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n+n\\,2^n</annotation></semantics></math></span>.</p>\n<h3>איך מוכיחים</h3>\n<ol>\n<li>מחליפים כל איבר בחסם גדול יותר מהצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mo>⋅</mo><msup><mi>c</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">K\\cdot c^n</annotation></semantics></math></span>, כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> הוא הבסיס הדומיננטי. משתמשים באי-שוויונות כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>≤</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n\\le3^n</annotation></semantics></math></span> (נכון לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge0</annotation></semantics></math></span>) או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>≤</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">1\\le n</annotation></semantics></math></span> (נכון לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge1</annotation></semantics></math></span>).</li>\n<li>איבר שלילי אפשר להשמיט, כי השמטתו רק מגדילה את הסכום.</li>\n<li>מסכמים את המקדמים ומקבלים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi></mrow><annotation encoding=\"application/x-tex\">K</annotation></semantics></math></span>.</li>\n</ol>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a_n=2\\cdot3^n+5\\cdot2^n-4</annotation></semantics></math></span>. לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge0</annotation></semantics></math></span> מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>≤</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n\\le3^n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>4</mn><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">-4&lt;0</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>=</mo><mn>7</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le2\\cdot3^n+5\\cdot3^n=7\\cdot3^n</annotation></semantics></math></span>. מצאנו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">K=7</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>.</div>\n<div class=\"lesson-rule\">🔑 איבר עם גורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מוסיף את הגורם הזה לסדר הגודל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\">)</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=(1+2n)2^n</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\,2^n)</annotation></semantics></math></span>, והוא <b>לא</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(2^n)</annotation></semantics></math></span>. אבל הוא כן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(3^n)</annotation></semantics></math></span>, כי בסיס גדול ממש מהדומיננטי מכסה גם את הגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ התרגיל יכול לבקש חסם שגוי. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>25</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=-2^n+2\\cdot3^n+25\\cdot5^n</annotation></semantics></math></span> הטענה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(3^n)</annotation></semantics></math></span> שקרית, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">25\\cdot5^n</annotation></semantics></math></span> גדל מהר יותר מכל מכפלה קבועה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3^n</annotation></semantics></math></span>. תמיד בודקים מי הדומיננטי לפני שמוכיחים.</div>\n"
    },
    "questions": [
     {
      "id": "R07-Q1",
      "question": "נתון $a_n=7\\cdot2^n+4\\cdot3^n-10$. איזו טענה נכונה ומדויקת (החסם הקטן ביותר מהצורה $O(c^n)$ עם $c$ שלם)?",
      "options": [
       {
        "id": "a",
        "value": "$a_n=O(3^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n=O(2^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(2^n)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n=O(10^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>10</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(10^n)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n=O(n\\cdot3^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(n\\cdot3^n)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "האיבר הדומיננטי הוא $4\\cdot3^n$, ולכן $a_n=O(3^n)$, למשל עם $K=11$. הטענה $O(2^n)$ שקרית כי $4\\cdot3^n$ גדל מהר יותר. הטענה $O(10^n)$ נכונה אבל לא מדויקת. והטענה $O(n\\cdot3^n)$ נכונה אך רופפת, כי אין בביטוי גורם $n$.",
      "recap": "הבסיס הגדול ביותר שולט.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>7</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>4</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>−</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">a_n=7\\cdot2^n+4\\cdot3^n-10</annotation></semantics></math></span>. איזו טענה נכונה ומדויקת (החסם הקטן ביותר מהצורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>c</mi><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(c^n)</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> שלם)?",
      "explanationHtml": "האיבר הדומיננטי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">4\\cdot3^n</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>, למשל עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mo>=</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">K=11</annotation></semantics></math></span>. הטענה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(2^n)</annotation></semantics></math></span> שקרית כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">4\\cdot3^n</annotation></semantics></math></span> גדל מהר יותר. הטענה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>10</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(10^n)</annotation></semantics></math></span> נכונה אבל לא מדויקת. והטענה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\cdot3^n)</annotation></semantics></math></span> נכונה אך רופפת, כי אין בביטוי גורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
      "recapHtml": "הבסיס הגדול ביותר שולט."
     },
     {
      "id": "R07-Q2",
      "question": "נתון $a_n=(1+2n)2^n$. איזו מהטענות הבאות <b>שגויה</b>?",
      "options": [
       {
        "id": "a",
        "value": "$a_n=O(n\\cdot2^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(n\\cdot2^n)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$a_n=O(3^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$a_n=O(4^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>4</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(4^n)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$a_n=O(2^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(2^n)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "היחס $a_n/2^n=1+2n$ לא חסום, ולכן $a_n\\ne O(2^n)$. לעומת זאת $a_n\\le3n\\,2^n$ לכל $n\\ge1$. וגם $a_n=O(3^n)$ ו-$a_n=O(4^n)$ נכונות, כי $n\\,(2/3)^n$ חסום.",
      "recap": "גורם $n$ לא נבלע בתוך אותו בסיס.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\">)</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=(1+2n)2^n</annotation></semantics></math></span>. איזו מהטענות הבאות &lt;b&gt;שגויה&lt;/b&gt;?",
      "explanationHtml": "היחס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">/</mi><msup><mn>2</mn><mi>n</mi></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">a_n/2^n=1+2n</annotation></semantics></math></span> לא חסום, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo mathvariant=\"normal\">≠</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n\\ne O(2^n)</annotation></semantics></math></span>. לעומת זאת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mn>3</mn><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le3n\\,2^n</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge1</annotation></semantics></math></span>. וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>4</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(4^n)</annotation></semantics></math></span> נכונות, כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><mo stretchy=\"false\">(</mo><mn>2</mn><mi mathvariant=\"normal\">/</mi><mn>3</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,(2/3)^n</annotation></semantics></math></span> חסום.",
      "recapHtml": "גורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> לא נבלע בתוך אותו בסיס."
     },
     {
      "id": "R07-Q3",
      "step": {
       "type": "numeric",
       "prompt": "נתון $a_n=10\\cdot2^n+5\\,n\\cdot2^n$. מהו הקבוע הקטן ביותר $K$ כך ש-$a_n\\le K\\cdot n\\cdot2^n$ לכל $n\\ge1$ ?",
       "answer": 15,
       "tol": 0,
       "explain": "$\\frac{a_n}{n\\,2^n}=\\frac{10}{n}+5$. הביטוי הזה יורד עם $n$, ולכן הגדול ביותר הוא ב-$n=1$: $10+5=15$. אותו $K=15$ מתקבל מחיבור המקדמים אחרי הערכה $2^n\\le n\\,2^n$.",
       "promptHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>10</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>5</mn><mtext> </mtext><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=10\\cdot2^n+5\\,n\\cdot2^n</annotation></semantics></math></span>. מהו הקבוע הקטן ביותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi></mrow><annotation encoding=\"application/x-tex\">K</annotation></semantics></math></span> כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mi>K</mi><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le K\\cdot n\\cdot2^n</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge1</annotation></semantics></math></span> ?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow></mfrac><mo>=</mo><mfrac><mn>10</mn><mi>n</mi></mfrac><mo>+</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{a_n}{n\\,2^n}=\\frac{10}{n}+5</annotation></semantics></math></span>. הביטוי הזה יורד עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ולכן הגדול ביותר הוא ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n=1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">10+5=15</annotation></semantics></math></span>. אותו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">K=15</annotation></semantics></math></span> מתקבל מחיבור המקדמים אחרי הערכה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>≤</mo><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n\\le n\\,2^n</annotation></semantics></math></span>."
      },
      "recap": "בודקים את $n$ הקטן ביותר שמותר.",
      "recapHtml": "בודקים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הקטן ביותר שמותר."
     },
     {
      "id": "R07-Q4",
      "step": {
       "type": "order",
       "prompt": "סדרו את ההוכחה ש-$a_n=2\\cdot3^n+5\\cdot2^n-4$ מקיים $a_n=O(3^n)$.",
       "lines": [
        "לכל $n\\ge0$ מתקיים $2^n\\le3^n$ ו-$-4<0$",
        "לכן $a_n\\le2\\cdot3^n+5\\cdot3^n$",
        "כלומר $a_n\\le7\\cdot3^n$ לכל $n\\ge0$",
        "לפי ההגדרה, עם $K=7$ ו-$n_0=0$, מתקיים $a_n=O(3^n)$"
       ],
       "explain": "כל שורה נשענת על הקודמת: קודם אי-שוויונות בסיסיים, אחר כך הצבה, אחר כך חיבור מקדמים, ובסוף המסקנה מההגדרה.",
       "promptHtml": "סדרו את ההוכחה ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">a_n=2\\cdot3^n+5\\cdot2^n-4</annotation></semantics></math></span> מקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>.",
       "explainHtml": "כל שורה נשענת על הקודמת: קודם אי-שוויונות בסיסיים, אחר כך הצבה, אחר כך חיבור מקדמים, ובסוף המסקנה מההגדרה.",
       "linesHtml": [
        "לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge0</annotation></semantics></math></span> מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>≤</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n\\le3^n</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>4</mn><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">-4&lt;0</annotation></semantics></math></span>",
        "לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>5</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le2\\cdot3^n+5\\cdot3^n</annotation></semantics></math></span>",
        "כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≤</mo><mn>7</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n\\le7\\cdot3^n</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge0</annotation></semantics></math></span>",
        "לפי ההגדרה, עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">K=7</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n_0=0</annotation></semantics></math></span>, מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>"
       ]
      },
      "recap": "מחליפים כל איבר בחסם, מחברים מקדמים.",
      "recapHtml": "מחליפים כל איבר בחסם, מחברים מקדמים."
     },
     {
      "id": "R07-Q5",
      "question": "נתון $a_n=-2^n+2\\cdot3^n+25\\cdot5^n$, ומבקשים להראות $a_n=O(3^n)$. מה נכון?",
      "options": [
       {
        "id": "a",
        "value": "הטענה שגויה, כי האיבר $25\\cdot5^n$ גדל מהר יותר מכל מכפלה קבועה של $3^n$",
        "type": "text",
        "html": "הטענה שגויה, כי האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">25\\cdot5^n</annotation></semantics></math></span> גדל מהר יותר מכל מכפלה קבועה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3^n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "הטענה נכונה, כי יש בביטוי איבר $2\\cdot3^n$",
        "type": "text",
        "html": "הטענה נכונה, כי יש בביטוי איבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2\\cdot3^n</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "הטענה נכונה, כי האיבר $-2^n$ שלילי ומקזז את $5^n$",
        "type": "text",
        "html": "הטענה נכונה, כי האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">-2^n</annotation></semantics></math></span> שלילי ומקזז את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">5^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "הטענה שגויה, כי חסר בביטוי איבר עם גורם $n$",
        "type": "text",
        "html": "הטענה שגויה, כי חסר בביטוי איבר עם גורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "היחס $a_n/3^n$ גדל ללא גבול בגלל $25\\,(5/3)^n$, ולכן הטענה שקרית; החסם הנכון הוא $O(5^n)$. עצם קיום האיבר $2\\cdot3^n$ לא מספיק. האיבר $-2^n$ קטן מדי מכדי לקזז את $5^n$. וגורם $n$ לא נדרש.",
      "recap": "בודקים מי הדומיננטי לפני שמוכיחים.",
      "questionHtml": "נתון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup><mo>+</mo><mn>25</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n=-2^n+2\\cdot3^n+25\\cdot5^n</annotation></semantics></math></span>, ומבקשים להראות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a_n=O(3^n)</annotation></semantics></math></span>. מה נכון?",
      "explanationHtml": "היחס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">/</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">a_n/3^n</annotation></semantics></math></span> גדל ללא גבול בגלל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mtext> </mtext><mo stretchy=\"false\">(</mo><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>3</mn><msup><mo stretchy=\"false\">)</mo><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">25\\,(5/3)^n</annotation></semantics></math></span>, ולכן הטענה שקרית; החסם הנכון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>5</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(5^n)</annotation></semantics></math></span>. עצם קיום האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2\\cdot3^n</annotation></semantics></math></span> לא מספיק. האיבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">-2^n</annotation></semantics></math></span> קטן מדי מכדי לקזז את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">5^n</annotation></semantics></math></span>. וגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> לא נדרש.",
      "recapHtml": "בודקים מי הדומיננטי לפני שמוכיחים."
     },
     {
      "bankId": "22B-A-Q2b",
      "recap": "פתרון עם $n\\,2^n$ ואחר כך חסם של כל איבר.",
      "recapHtml": "פתרון עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mtext> </mtext><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">n\\,2^n</annotation></semantics></math></span> ואחר כך חסם של כל איבר."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "אתגר: שאלות מבחן אמיתיות",
    "goal": "לפתור נסיגות מסדר 2 בסגנון המבחן, עם אגף ימין וחסם אסימפטוטי.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>זה שלב האתגר: שאלות אמיתיות ממבחנים. כל התרגילים עוקבים אחרי אותו מתכון, ובו שלוש החלטות.</p>\n<ol>\n<li><b>שורשי המשוואה האופיינית</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>p</mi><mi>x</mi><mo>−</mo><mi>q</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x^2-px-q=0</annotation></semantics></math></span>: שני שורשים שונים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><msubsup><mi>r</mi><mn>1</mn><mi>n</mi></msubsup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mi>n</mi></msubsup></mrow><annotation encoding=\"application/x-tex\">C_1r_1^n+C_2r_2^n</annotation></semantics></math></span>) או שורש כפול (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>C</mi><mn>1</mn></msub><msup><mi>r</mi><mi>n</mi></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>r</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">C_1r^n+C_2\\,n\\,r^n</annotation></semantics></math></span>).</li>\n<li><b>ניחוש הפתרון הפרטי</b> לפי אגף הימין, כפי שבטבלה.</li>\n<li><b>תנאי התחלה</b> מציבים רק בפתרון הכללי השלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>n</mi><mrow><mo stretchy=\"false\">(</mo><mi>p</mi><mo stretchy=\"false\">)</mo></mrow></msubsup></mrow><annotation encoding=\"application/x-tex\">a_n^{(h)}+a_n^{(p)}</annotation></semantics></math></span>.</li>\n</ol>\n<table>\n<thead><tr><th>אגף ימין</th><th>ניחוש</th></tr></thead>\n<tbody>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> אינו שורש)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">c</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> שורש)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">A\\,n</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo>⋅</mo><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">c\\cdot s^n</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> אינו שורש)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,s^n</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo>⋅</mo><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">c\\cdot s^n</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> שורש פשוט)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n\\,s^n</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mo>⋅</mo><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">c\\cdot s^n</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> שורש כפול)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mtext> </mtext><msup><mi>n</mi><mn>2</mn></msup><mtext> </mtext><msup><mi>s</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">A\\,n^2\\,s^n</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<p>ואם מבקשים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>c</mi><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(c^n)</annotation></semantics></math></span>: מחליפים כל איבר בחסם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mo>⋅</mo><msup><mi>c</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">K\\cdot c^n</annotation></semantics></math></span> (או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>K</mi><mtext> </mtext><mi>n</mi><mtext> </mtext><msup><mi>c</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">K\\,n\\,c^n</annotation></semantics></math></span> כשיש גורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>), ומשמיטים איברים שליליים.</p>\n<div class=\"lesson-trap\">⚠️ בסוף תמיד מציבים בחזרה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_0,a_1,a_2</annotation></semantics></math></span>. בשאלות אמיתיות יש לפעמים נתון שגוי או חסם שגוי; לכן בודקים לפני שמוכיחים.</div>\n"
    },
    "questions": [
     {
      "bankId": "24B-A-Q3b",
      "recap": "שורש כפול 3 עם אגף ימין $4\\cdot5^n$.",
      "recapHtml": "שורש כפול 3 עם אגף ימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">4\\cdot5^n</annotation></semantics></math></span>."
     },
     {
      "bankId": "25B-B-Q3a",
      "recap": "שני שורשים ואגף ימין $6\\cdot5^n$.",
      "recapHtml": "שני שורשים ואגף ימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">6\\cdot5^n</annotation></semantics></math></span>."
     },
     {
      "bankId": "24B-B-Q3b",
      "recap": "שורש כפול 2 עם אגף ימין $2\\cdot3^n$.",
      "recapHtml": "שורש כפול 2 עם אגף ימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2\\cdot3^n</annotation></semantics></math></span>."
     },
     {
      "bankId": "25B-A-Q3a",
      "recap": "שורש כפול 3 עם אגף ימין $3\\cdot2^n$.",
      "recapHtml": "שורש כפול 3 עם אגף ימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">3\\cdot2^n</annotation></semantics></math></span>."
     },
     {
      "bankId": "22B-B-Q2b",
      "recap": "שורש כפול 3, חסם $O(n\\cdot5^n)$.",
      "recapHtml": "שורש כפול 3, חסם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\cdot5^n)</annotation></semantics></math></span>."
     }
    ]
   }
  ]
 }
};
