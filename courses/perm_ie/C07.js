/* perm_ie, level 7: fixed points and fixed-prefix derangements */
COURSE_LEVEL("perm_ie", {
  id: "C07", order: 7, icon: "📌", title: "נקודות שבת וקידומת קבועה",
  goal: "לספור תמורות עם מספר נתון של נקודות שבת, ותמורות אי-סדר מלא שבהן קבוצה קבועה יושבת בתחילת התמורה.",
  source: "ai-verified",
  lesson: { html: String.raw`
<h3>בדיוק $j$ נקודות שבת</h3>
<div class="lesson-rule">🔑 מספר התמורות של $n$ איברים עם <b>בדיוק</b> $j$ נקודות שבת הוא $\binom nj D_{n-j}$ : בוחרים אילו $j$ איברים נשארים במקומם, ואת $n-j$ האחרים מסדרים בלי אף נקודת שבת.</div>
<div class="lesson-ex"><b>דוגמה:</b> תמורות של $\{1,\dots,6\}$ עם בדיוק שלוש נקודות שבת: $\binom63D_3=20\cdot2=40$.</div>
<p><b>לפחות</b> נקודת שבת אחת: משלים של אי-סדר מלא, $n!-D_n$.</p>
<h3>קידומת קבועה</h3>
<p>נניח שמבקשים תמורת אי-סדר מלא של $\{1,\dots,n\}$ שבה האיברים $1,\dots,k$ נמצאים ב-$k$ המקומות הראשונים. אז במקומות $1,\dots,k$ יושבת תמורה של $\{1,\dots,k\}$, ובמקומות $k+1,\dots,n$ תמורה של $\{k+1,\dots,n\}$. שני החלקים בלתי תלויים, וכל אחד חייב להיות בלי נקודת שבת.</p>
<div class="lesson-rule">🔑 התשובה היא $D_k\cdot D_{n-k}$.</div>
<div class="lesson-ex"><b>דוגמה:</b> אי-סדר מלא של $\{1,\dots,5\}$ שבו $1,2$ הם בשני המקומות הראשונים: $D_2\cdot D_3=1\cdot2=2$. התמורות הן $(2,1,4,5,3)$ ו-$(2,1,5,3,4)$.</div>
<div class="lesson-trap">⚠️ התשובה אינה $D_n$ (כל אי-סדר מלא של $n$ איברים) ואינה $D_k$ לבדו: גם הצד השני חייב להיות אי-סדר מלא, בגודל $n-k$.</div>
` },
  questions: [
    { id: "C07-Q1",
      step: { type: "numeric", prompt: String.raw`כמה תמורות של $\{1,\dots,6\}$ יש בדיוק שתי נקודות שבת?`, answer: 135, tol: 0,
              explain: String.raw`בוחרים את נקודות השבת: $\binom62=15$. ארבעת האחרים באי-סדר מלא: $D_4=9$. $15\cdot9=135$.` },
      recap: String.raw`$\binom nj D_{n-j}$.` },
    { id: "C07-Q2", question: String.raw`כמה תמורות של $\{1,\dots,5\}$ יש בדיוק נקודת שבת אחת?`,
      options: [{ id: "a", value: "44" }, { id: "b", value: "120" }, { id: "c", value: "45" }, { id: "d", value: "24" }],
      correctId: "c",
      explanation: String.raw`בוחרים את נקודת השבת ($5$ אפשרויות), והארבעה האחרים באי-סדר מלא: $5\cdot D_4=45$. התשובה 44 היא $D_5$, תמורות בלי אף נקודת שבת. התשובה 120 היא כל התמורות. התשובה 24 היא $4!$, שמתעלמת מהדרישה שלארבעת האחרים אין נקודת שבת.`,
      recap: String.raw`נקודת שבת אחת: $nD_{n-1}$.` },
    { id: "C07-Q3",
      step: { type: "numeric", prompt: String.raw`כמה תמורות של $\{1,\dots,5\}$ מכילות **לפחות** נקודת שבת אחת?`, answer: 76, tol: 0,
              explain: String.raw`$5!-D_5=120-44=76$.` },
      recap: String.raw`לפחות אחת: $n!-D_n$.` },
    { id: "C07-Q4",
      step: { type: "numeric", prompt: String.raw`כמה תמורות אי-סדר מלא של $\{1,\dots,6\}$ יש כך ש-$1,2,3,4$ נמצאים ב-4 המקומות הראשונים?`, answer: 9, tol: 0,
              explain: String.raw`ארבעת הראשונים: אי-סדר מלא של $\{1,2,3,4\}$, $D_4=9$. שני האחרונים חייבים להיות $5,6$ באי-סדר מלא, $D_2=1$ (זה $6,5$). סך הכל $9\cdot1=9$.` },
      recap: String.raw`$D_k\cdot D_{n-k}$.` },
    { id: "C07-Q5",
      step: { type: "numeric", prompt: String.raw`כמה תמורות אי-סדר מלא של $\{1,\dots,7\}$ יש כך ש-$1,2$ נמצאים בשני המקומות הראשונים?`, answer: 44, tol: 0,
              explain: String.raw`$D_2\cdot D_5=1\cdot44=44$.` },
      recap: String.raw`שני חלקים, כל אחד אי-סדר מלא בגודל שלו.` },
    { id: "C07-Q6", question: String.raw`כמה תמורות אי-סדר מלא של $\{1,\dots,7\}$ יש כך ש-$1,2,3$ נמצאים בשלושת המקומות הראשונים?`,
      options: [{ id: "a", value: "18" }, { id: "b", value: "1854" }, { id: "c", value: "11" }, { id: "d", value: "144" }],
      correctId: "a",
      explanation: String.raw`$D_3\cdot D_4=2\cdot9=18$. התשובה 1854 היא $D_7$, כל תמורות אי-הסדר המלא. התשובה 11 היא סכום $D_3+D_4$ במקום מכפלה. התשובה 144 היא $3!\cdot4!$, תמורות רגילות של שני החלקים.`,
      recap: String.raw`מכפילים, לא מחברים: $D_3\cdot D_4$.` },
  ],
});
