/**
 * 직원 의견 설문 — 응답 수집용 Google Apps Script
 * 응답을 받을 Google 스프레드시트에서 [확장 프로그램 > Apps Script]를 열고
 * 이 코드를 붙여 넣은 뒤 웹 앱으로 배포하세요. (README 참고)
 */
const COLUMNS = [
  "제출시각", "소속", "직무",
  "이용경험", "이용서비스", "만족도", "도움정도", "이용의견",
  "미이용사유",
  "희망서비스", "선호방식", "희망의견"
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    const p = e.parameter || {};
    const row = COLUMNS.map(c => c === "제출시각" ? new Date() : (p[c] || ""));
    sheet.appendRow(row);
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}
