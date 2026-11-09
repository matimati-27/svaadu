// ============================================================
//  STUDY CONFIG — the only file you normally need to edit.
// ============================================================
window.STUDY_CONFIG = {

  // 1) Paste the Web App URL from Google Apps Script here (ends in /exec).
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbyOkn77mt9dwZjRn0AoxYdHXeIBtxOf9u2YwcEl3xc4hRFsJl0cEGBBtvD5c-1qyj94/exec",

  // 2) Language used when the link has no ?lang=... part.
  //    Send people  .../?lang=te  for Telugu,  .../?lang=hi  for Hindi.
  defaultLang: "te",

  // How many times a respondent may play each question (1 = asked once).
  maxListens: 1,

  // Hard cap on one answer, in seconds (recording stops automatically).
  maxRecordSeconds: 360,

  // 3) The recipe video (no voiceover, no on-screen text). Put the file in media/.
  video: "media/recipe.mp4",

  // 4) Your question recordings. Put the files in questions/te/ and questions/hi/
  //    with EXACTLY these names (.m4a or .mp3; if you use .mp3, change the names here).
  //    To add or remove a question, add or remove a line. Order here = order shown.
  languages: {
    te: {
      name: "Telugu",
      questions: [
        { id: "q1_lunch",      audio: "questions/te/q1.m4a" },
        { id: "q2_restaurant", audio: "questions/te/q2.m4a" },
        { id: "q3_groceries",  audio: "questions/te/q3.m4a" },
        { id: "q4_halwa",      audio: "questions/te/q4.m4a" },
        { id: "q5_retell",     audio: "questions/te/q5.m4a" }
      ]
    },
    hi: {
      name: "Hindi",
      questions: [
        { id: "q1_lunch",      audio: "questions/hi/q1.m4a" },
        { id: "q2_restaurant", audio: "questions/hi/q2.m4a" },
        { id: "q3_groceries",  audio: "questions/hi/q3.m4a" },
        { id: "q4_halwa",      audio: "questions/hi/q4.m4a" },
        { id: "q5_retell",     audio: "questions/hi/q5.m4a" }
      ]
    }
  },

  // 5) Text on the first two slides (English; edit freely).
  intro: {
    title: "Namaste! Let's talk food. // నమస్కారం! ఆహారం గురించి మాటలాడుకుందాం.",
    body: "This is a study at IIIT Hyderabad about home cooking and food habits in Indian households. " +
          "This takes about 10–15 minutes. You will watch a short cooking video and then answer a few questions " +
          "by speaking — just like a conversation. There are no right or wrong answers." +
          "ఇది ఆహరపద్ధతుల గురించి జరుగుతున్న ఒక పరిశీలన​. ఈ సర్వేక్షణలో ఉన్న ప్రశ్నలన్నిటికీ సమాధానం ఇవ్వడానికి మొత్తం 10-15 ని॥ పడతాయి.​"
  },
  consent: {
    title: "Before we begin // మొదలపెట్టే ముందు కొన్ని సూచనలు",
    points: [
      "Your spoken answers will be recorded and used only for our course project at IIIT Hyderabad. // మీ సమాధానాలు ఈ ప్రాజెక్టు కోసమే వాడబడతాయి.",
      "Your name will not be asked or used. Recordings are stored privately with the researchers. // మేము మీ పేరుకోసం ఎక్కడా అడగము ఇంక మీ పేరుని ఎక్కడా వాడము.",
      "You may stop at any time by closing this page. // మీరు మధ్యలో ఎప్పుడైనా ఈ పేజీని ముయ్యగలరు.",
      "Please answer in a quiet place. Each question can be heard once and answered once, there is no re-recording. // ఒక ప్రశాంతమైన చోటులో సమాధానాలు ఇవ్వండి. మీరు సమాధానం ఒక్కసారె రికార్డ్ చెయ్యగలుగుతారు."
    ],
    checkboxLabel: "I am 18 or older and I agree to take part. // నా వయస్సు కనీసం 18 ఏళ్లు. నేను ఈ సర్వేక్షణ లో పాల్గొనడానికి ఒప్పుకుంటున్నాను.",
    researchers: "IIIT Hyderabad"

  }
};
