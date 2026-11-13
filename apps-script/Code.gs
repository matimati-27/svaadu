/**
 * Kitchen Talk — receiver for recordings and respondent details.
 *
 * ONE-TIME SETUP (see README.md for screenshots-level steps):
 *   1. Paste this whole file into a new Apps Script project (script.google.com).
 *   2. Select the function "setup" in the toolbar and click Run. Approve the permissions.
 *      It creates a Drive folder "Kitchen Talk Recordings" and a Google Sheet "Kitchen Talk Responses"
 *      and prints their links in the Execution log.
 *   3. Deploy → New deployment → type "Web app" → Execute as: Me → Who has access: Anyone → Deploy.
 *      Copy the Web app URL (ends in /exec) into config.js.
 */

const FOLDER_NAME = "Kitchen Talk Recordings";
const SHEET_NAME  = "Kitchen Talk Responses";

function setup() {
  const props = PropertiesService.getScriptProperties();
  let folderId = props.getProperty("FOLDER_ID");
  let sheetId  = props.getProperty("SHEET_ID");
  if (!folderId) {
    folderId = DriveApp.createFolder(FOLDER_NAME).getId();
    props.setProperty("FOLDER_ID", folderId);
  }
  if (!sheetId) {
    const ss = SpreadsheetApp.create(SHEET_NAME);
    sheetId = ss.getId();
    props.setProperty("SHEET_ID", sheetId);
    const r = ss.getSheets()[0];
    r.setName("Respondents");
    r.appendRow(["Response ID", "Language", "Started", "Finished", "Age", "Gender", "Mother tongue",
                 "Other languages", "Grew up", "Lives now", "School medium", "Cooking experience",
                 "Answers received", "Folder", "Device"]);
    r.setFrozenRows(1);
    const rec = ss.insertSheet("Recordings");
    rec.appendRow(["Received", "Response ID", "Language", "Question #", "Question ID",
                   "Duration (s)", "Size (KB)", "Format", "File"]);
    rec.setFrozenRows(1);
  }
  Logger.log("Recordings folder: " + DriveApp.getFolderById(folderId).getUrl());
  Logger.log("Responses sheet:   " + SpreadsheetApp.openById(sheetId).getUrl());
}

function doGet() {
  return ContentService.createTextOutput("Kitchen Talk receiver is running.");
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
    const d = JSON.parse(e.postData.contents);
    const props = PropertiesService.getScriptProperties();
    const ss = SpreadsheetApp.openById(props.getProperty("SHEET_ID"));
    const root = DriveApp.getFolderById(props.getProperty("FOLDER_ID"));
    const rid = String(d.rid || "unknown").replace(/[^A-Za-z0-9-]/g, "");
    const lang = String(d.lang || "").replace(/[^a-z]/g, "");

    if (d.kind === "start") {
      const row = findOrCreateRow_(ss, rid, lang);
      const sh = ss.getSheetByName("Respondents");
      if (!sh.getRange(row, 3).getValue()) sh.getRange(row, 3).setValue(new Date());
      sh.getRange(row, 15).setValue(String(d.ua || "").slice(0, 300));
    }
    else if (d.kind === "audio") {
      const folder = respondentFolder_(root, rid);
      const ext = String(d.ext || "webm").replace(/[^a-z0-9]/g, "");
      const qn = ("0" + (d.qindex || 0)).slice(-2);
      const name = rid + "_" + lang + "_Q" + qn + "_" + String(d.qid || "").replace(/[^A-Za-z0-9_]/g, "") + "." + ext;
      const blob = Utilities.newBlob(Utilities.base64Decode(d.audio), d.mimeType || "audio/webm", name);
      const file = folder.createFile(blob);
      ss.getSheetByName("Recordings").appendRow([new Date(), rid, lang, d.qindex, d.qid, d.durationSec,
        Math.round((d.sizeBytes || 0) / 1024), d.mimeType, file.getUrl()]);
      const row = findOrCreateRow_(ss, rid, lang);
      const sh = ss.getSheetByName("Respondents");
      const n = Number(sh.getRange(row, 13).getValue() || 0) + 1;
      sh.getRange(row, 13).setValue(n);
      sh.getRange(row, 14).setValue(folder.getUrl());
    }
    else if (d.kind === "details") {
      const row = findOrCreateRow_(ss, rid, lang);
      const sh = ss.getSheetByName("Respondents");
      const v = k => (d[k] === undefined || d[k] === null ? "" : d[k]);
      sh.getRange(row, 4, 1, 9).setValues([[new Date(), v("age"), v("gender"), v("mother_tongue"), v("other_languages"),
        v("grew_up"), v("lives_now"), v("school_medium"), v("cooking_years")]]);
    }
    else {
      throw new Error("Unknown kind");
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function findOrCreateRow_(ss, rid, lang) {
  const sh = ss.getSheetByName("Respondents");
  const last = sh.getLastRow();
  if (last > 1) {
    const ids = sh.getRange(2, 1, last - 1, 1).getValues();
    for (let i = 0; i < ids.length; i++) if (ids[i][0] === rid) return i + 2;
  }
  sh.appendRow([rid, lang]);
  return sh.getLastRow();
}

function respondentFolder_(root, rid) {
  const it = root.getFoldersByName(rid);
  return it.hasNext() ? it.next() : root.createFolder(rid);
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
