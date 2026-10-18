/* graphs, level 10: מבחן */
COURSE_LEVEL("graphs", {
  id: "C10", order: 10, icon: "🏆", title: String.raw`מבחן: גרפים`,
  goal: String.raw`לפתור שאלות אמיתיות ממבחנים: סדרות דרגות, משלים, עצים, אוילר והמילטון.`,
  boss: true,
  source: "ai-verified",
  lesson: { html: String.raw`<p>השלב האחרון הוא שאלות אמיתיות ממבחנים בנושא. לפני שמתחילים, סיכום הכלים:</p>
<table><thead><tr><th>סוג השאלה</th><th>הכלי</th></tr></thead><tbody>
<tr><td>קיים גרף עם סדרת דרגות?</td><td>סכום זוגי, ואז Havel-Hakimi</td></tr>
<tr><td>גרף שווה או איזומורפי למשלים</td><td>$|E|=\frac12\binom n2$, ודרגות $d\leftrightarrow n-1-d$</td></tr>
<tr><td>עץ עם דרגות מוגבלות</td><td>$\sum\deg=2(n-1)$</td></tr>
<tr><td>משלים של עץ או דו-צדדי</td><td>צד עם 3 צמתים נהפך למשולש</td></tr>
<tr><td>אוילר</td><td>קשיר וכל הדרגות זוגיות</td></tr>
<tr><td>המילטון</td><td>Dirac, צדדים שווים בדו-צדדי, עלה או צומת הפרדה מפריכים</td></tr>
</tbody></table>
<div class="lesson-rule">🔑 בהוכחה מציינים כל שימוש במשפט: משפט הדרגות, Dirac, אפיון העץ. ובהפרכה מביאים דוגמה נגדית מפורשת.</div>` },
  questions: [
    { bankId: "25B-A-Q4a", recap: String.raw`סדרת דרגות: Havel-Hakimi, והסרת הצומת מדרגה 6 המחובר לכולם.` },
    { bankId: "21B-B-Q3c", recap: String.raw`$C_n\cong\overline{C_n}$ גורר $2n=\binom n2$, ולכן $n=5$.` },
    { bankId: "24B-A-Q3c", recap: String.raw`שני גרפים $r$-רגולריים משלימים: $|V|=2r+1$, אבל $r$ אי-זוגי דורש $|V|$ זוגי.` },
    { bankId: "25B-A-Q4b", recap: String.raw`עץ עם 5 צמתים: צד עם 3 צמתים נהפך למשולש במשלים.` },
    { bankId: "25B-B-Q1c", recap: String.raw`דרגות $\{1,5\}$ ו-30 צמתים: $p+5(30-p)=58$ ולכן $p=23$.` },
    { bankId: "25S-A-Q3c", recap: String.raw`משלים של $P_n$: דרגות $n-2$ ו-$n-3$, אחת מהן אי-זוגית. והמילטון לפי Dirac.` },
  ],
});
