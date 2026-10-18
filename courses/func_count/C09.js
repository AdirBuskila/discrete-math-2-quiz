COURSE_LEVEL("func_count", {
  id: "C09", order: 9, icon: "🏆", title: "בוס: שאלות מבחן אמיתיות",
  goal: "לפתור שאלות ספירת פונקציות ברמת המבחן.",
  boss: true,
  source: "ai-verified",
  lesson: { html: String.raw`
<p>סיכום הכלים של הקורס. קודם מזהים את סוג הפונקציה, אחר כך את התנאי הנוסף.</p>
<table><thead><tr><th>סוג ($|A|=m,\ |B|=n$)</th><th>כמה</th></tr></thead><tbody>
<tr><td>כל הפונקציות</td><td>$n^m$</td></tr>
<tr><td>חח"ע</td><td>$P(n,m)$, ו-$0$ אם $m>n$</td></tr>
<tr><td>הפיכה ($m=n$)</td><td>$n!$</td></tr>
<tr><td>עולה ממש או יורדת ממש</td><td>$\binom nm$</td></tr>
<tr><td>עולה או יורדת (חלש)</td><td>$\binom{n+m-1}m$</td></tr>
<tr><td>על</td><td>$\sum_k(-1)^k\binom nk(n-k)^m$</td></tr>
<tr><td>חלוקות ל-$n$ בלוקים</td><td>#על חלקי $n!$</td></tr>
</tbody></table>
<ol>
<li><b>"אינן"</b>: משלים.</li>
<li><b>תנאי על $f(S)$ או $f^{-1}(T)$</b>: מפצלים לשני חלקים ומכפילים.</li>
<li><b>"או"</b>: הכלה והדחה. <b>"וגם"</b>: קובעים את שני התנאים.</li>
<li><b>תנאים סותרים או $n$ קטן מדי</b>: $0$.</li>
<li><b>מכפלה קרטזית</b>: $\binom{mn}k$.</li>
</ol>
<div class="lesson-trap">⚠️ בשאלה עם $n$ כללי אל תשכחו את המקרים: $n$ קטן, $n=m$ (חח"ע ועל = הפיכה) ו-$n$ גדול.</div>
` },
  questions: [
  {
    "bankId": "21B-A-Q4b",
    "recap": "לא הפיכה: $n^n-n!$"
  },
  {
    "bankId": "22B-B-Q3b",
    "recap": "על ותנאי על מקור: פיצול ו-$3!\\cdot\\mathrm{Sur}$"
  },
  {
    "bankId": "23B-A-Q1a",
    "recap": "חליפות על קבוצות ערכים זרות"
  },
  {
    "bankId": "25B-A-Q6b",
    "recap": "\"או\" בין תנאים: הכלה והדחה"
  },
  {
    "bankId": "25B-A-Q2c",
    "recap": "עולה ממש עם תנאי; על וחח\"ע עם $n$ כללי: מקרים"
  }
],
});
