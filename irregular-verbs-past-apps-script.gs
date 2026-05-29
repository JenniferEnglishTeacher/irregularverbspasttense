const SPREADSHEET_ID = "1OBjL_J5zE52ybzCbWwldXDjWyRoTl3gl1JGBzaEVfSk";
const SHEET_NAME = "quiz result";

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const payload = JSON.parse(e.postData.contents || "{}");

  sheet.appendRow([
    new Date(),
    payload.studentName || "",
    payload.sectionTested || "",
    payload.percentage || "",
    payload.wrongVerbs || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
