// ============================================================
//  ON-SCREEN TEXT, one block per language.
//  Each language has exactly the same keys, in the same order, so the
//  Telugu and Hindi sites mirror each other line for line.
//  Lines written "English // Telugu" or "English <br> Telugu" are shown as-is.
//  Keys that are still English-only in both languages are marked  (EN only).
//
//  Where a value may contain HTML (<b>, <br>), that is noted as  [html].
//  Everywhere else, write plain text (a <br> would show up literally).
// ============================================================
window.STUDY_STRINGS = {

  // ------------------------------------------------------------ TELUGU
  te: {
    htmlLang: "te",
    gotIt: "Got it",                                                        // (EN only)
    choose: "Choose…",                                                      // (EN only)

    intro: {
      kicker: "A study on home cooking",                                    // (EN only)
      title: "Namaste! Let's talk food. // నమస్కారం! ఆహారం గురించి మాటలాడుకుందాం.",
      body: /* [html] */
        "This is a study at IIIT Hyderabad about home cooking and food habits in Indian households. " +
        "This takes about 10–15 minutes. You will watch a short cooking video and then answer a few questions " +
        "by speaking — just like a conversation. There are no right or wrong answers." +
        "<br><br>" +
        "ఇది ఆహారపద్ధతుల గురించి జరుగుతున్న ఒక పరిశీలన​. ఈ సర్వేక్షణలో ఉన్న ప్రశ్నలన్నిటికీ సమాధానం ఇవ్వడానికి మొత్తం 10-15 ని॥ పడతాయి.​",
      start: "Let's start"                                                  // (EN only)
    },

    consent: {
      kicker: "Consent",                                                    // (EN only)
      title: "Before we begin // మొదలుపెట్టే ముందు కొన్ని సూచనలు",
      points: [
        "Your spoken answers will be recorded and used only for our course project at IIIT Hyderabad. // మీ సమాధానాలు ఈ ప్రాజెక్టు కోసమే వాడబడతాయి.",
        "Your name will not be asked or used. Recordings are stored privately with the researchers. // మేము మీ పేరుకోసం ఎక్కడా అడగము ఇంక మీ పేరుని ఎక్కడా వాడము.",
        "You may stop at any time by closing this page. // మీరు మధ్యలో ఎప్పుడైనా ఈ పేజీని ముయ్యగలరు.",
        "Please answer in a quiet place. Each question can be heard once and answered once, there is no re-recording. // ఒక ప్రశాంతమైన చోటులో సమాధానాలు ఇవ్వండి. మీరు సమాధానం ఒక్కసారే రికార్డ్ చెయ్యగలుగుతారు."
      ],
      checkbox: "I am 18 or older and I agree to take part. // నా వయస్సు కనీసం 18 ఏళ్లు. నేను ఈ సర్వేక్షణ లో పాల్గొనడానికి ఒప్పుకుంటున్నాను.",
      continueBtn: "I agree, continue",                                     // (EN only)
      micCheck: {
        title: "Microphone check // ఆడియో పరిశీలన​",
        text: /* [html] */ "Your phone will now ask to use the microphone. Please tap <b>Allow</b>, we need it to record your answers. <br> మీ ఫోన్ ఇప్పుడు ఆడియో రికార్డింగ్ చెయ్యడానికి అనుమతి అడుగుతుంది. <b>Allow</b> అనే బటన్ నొక్కండి."
      },
      micBlocked: {
        title: "Microphone blocked // ఆడియో బ్లాక్ అయింది",
        text: /* [html] */ "We couldn't use the microphone. Please allow microphone access for this site in your browser settings, then reload this page. (On iPhone, please use Safari.) <br> మేము ఆడియో తీసుకోలేకపోయాము. దయచేసి మీ బ్రౌజర్ సెట్టింగ్‌లలో ఈ సైట్ కోసం మైక్రోఫోన్ యాక్సెస్‌ను అనుమతించి, ఆ తర్వాత ఈ పేజీని రీలోడ్ చేయండి. (ఐఫోన్‌లో అయితే, దయచేసి సఫారీని ఉపయోగించండి.)"
      }
    },

    video: {
      kicker: "Watch // చూడండి",
      heading: /* [html] */ "Please see this short video <br> ఈ చిన్న వంట వీడియో చూడండీ",
      hint: /* [html] */ "Watch till the end to continue. (Credits: Vismai Foods) <br> ముందుకెళ్లడానికి వీడియో చివరి వరకూ చూడండి. (సౌజన్యం: Vismai Foods)",
      ended: "Done! Tap Next. // వీడియో పూర్తయ్యింది. 'Next' నొక్కండి.",
      watched: "You've watched it. Tap Next.",                              // (EN only)
      loadError: "The video didn't load. Check your connection and reload the page.", // (EN only)
      next: "Next",                                                         // (EN only)
      popup: {
        title: "Watch the video // వీడియో చూడండి",
        text: /* [html] */ "Tap ▶ and watch the whole video. There is no talking in it. Just watch what is being cooked. <br> ▶ నొక్కీ వీడియో చివరివరకూ చూడండి. ఈ వీడియోలో ఎవరూ మాటలాడరు. ఇందులో ఏమిటి వండుతున్నారో చూడండి."
      }
    },

    question: {
      kicker: (i, n) => "Question " + i + " of " + n,                       // (EN only)
      listenLabel: "1 · Listen",                                            // (EN only)
      answerLabel: "2 · Answer",                                            // (EN only)
      canHear: (left, max) => max === 1 ? "You can hear this once"          // (EN only)
                                        : "You can hear this " + left + " more time" + (left > 1 ? "s" : ""),
      heard: "Heard ✓ // వినబడింది ✓",
      playing: "Playing",                                                   // (EN only)
      loadError: "Couldn't load the question. Check your internet and tap again. // ప్రశ్న వినిపించలేకపోయాము. మీ ఇంటర్నెట్ కనెక్షన్ చూసుకోండి.",
      tapAgain: "Tap again to play.",                                       // (EN only)
      listenFirst: "Listen to the question first",                          // (EN only)
      tapToRecord: "Tap to start recording",                                // (EN only)
      recording: "Recording… tap to finish // రికార్డింగ్ జరుగుతున్నాది... పూర్తయ్యాకా ఆపడానికి నొక్కండి",
      recorded: "Recorded",                                                 // (EN only)
      saved: "Answer saved",                                                // (EN only)
      sending: "Sending your answer // మీ సమాధానం చేరుతున్నాది",
      sent: "Your answer was sent ✓",                                       // (EN only)
      sendError: "Couldn't send — check your internet, then tap Retry.",   // (EN only)
      retry: "Retry sending",                                               // (EN only)
      next: "Next question",                                                // (EN only)
      howItWorks: {
        title: "How this works // కొన్ని సూచనలు",
        text: /* [html] */ (max) =>
          "<b>Step 1:</b> tap the green speaker 🔊 to hear the question. You can hear it upto " + (max === 1 ? "once" : max + " times") +
          " <br> ప్రశ్నను వినడానికి ఆకుపచ్చ రంగు స్పీకర్ 🔊 పై నొక్కండి. మీరు దీన్ని  " + (max === 1 ? "ఒక్కసారి" : max + " సార్లు") + " వినవచ్చు." +
          "<br><br><b>Step 2:</b> tap the red microphone 🎙 and answer out loud. Tap it again when you're done." +
          " <br> ఎరుపు రంగు మైక్రోఫోన్ 🎙 గుర్తుపై నొక్కీ సమాధానం చెప్పండి. చెప్పడం పూర్తయ్యాక మళ్లీ దానిపై నొక్కండి."
      },
      notSupported: {
        title: "Recording not supported // రికార్డింగ్ చెయ్యడమవ్వదు",
        text: /* [html] */ "This browser can't record audio. Please open the link in Chrome (Android) or Safari (iPhone). <br> ఈ బ్రౌజర్ లో రికార్డింగ్ అవ్వదు. దయచేసి క్రోమ్ (Android) లో లేదా సఫారీ (iPhone) లో దీన్ని తెరవండి."
      },
      micBlocked: {
        title: "Microphone blocked // మైక్ బ్లాక్ అయింది",
        text: /* [html] */ "Please allow microphone access for this site, then tap the microphone again. <br> మైక్ వాడటానికి అనుమతించండి. ఆ పై మళ్లా మైక్ బటన్ నొక్కండి."
      },
      finish: {
        title: "Finished answering? // మీరు సమాధానం పూర్తిగా ఇచ్చారా?",
        text: /* [html] */ "You can't record this answer again, so take your time if you have more to say. <br> మీ సమాధానాన్ని మీరు మళ్లా రికార్డు చేసుకోలేరు. అందుకే ఇంకా ఏమైనా చెప్తారంటే మీరు ఇప్పుడు వెనక్కి వెళ్లీ చెప్పగలరు.",
        keep: "talk // చెప్పాలి",
        done: "done // అయింది"
      }
    },

    details: {
      kicker: "Almost done // చివరికి",
      heading: "A little about you // మీ గురించి కొన్ని వివరాలు",
      note: /* [html] */ "This helps us study answers. No names, please. <br> ఇవి వేరే సమాధానాలను అర్ధం చేసుకోడంలో మాకు సహాయబడతాయి. మీ పేరు ఎక్కడా రాయకండి.",
      age: "Age // వయస్సు",
      gender: "Gender // లింగం",
      // [value saved in the Sheet, label shown]. Values stay English so both languages line up in the Sheet.
      genderOptions: [["Woman", "Female // మహిళ​"], ["Man", "Man // పురుషుడు"]],
      motherTongue: "Mother tongue // మాతృభాష​",
      otherLanguages: "Other languages you understand? // మీకు యే యే వేరే భాషలు అర్ధమవుతాయి?",
      grewUp: "Where did you grow up? // మీరు ఎక్కడ పెరిగారు?",
      grewUpHint: "(city / town, state)",                                   // (EN only)
      livesNow: "Where do you live now? // ఇప్పుడు ఎక్కడ ఉంటున్నారు?",
      cooking: "Since how long have you been able to cook regularly? // ఎప్పటి నుంచీ మీరు వంట వండగలుగుతున్నారు?",
      cookingOptions: [
        ["Less than 1 year",       "Less than 1 year // ఒక ఏడాది లోపల​"],
        ["1–5 years",              "1–5 years // కిందటి 1-5 ఏళ్ల​ లోపల​"],
        ["5–15 years",             "5–15 years // కిందటి 5-15 ఏళ్ల​ లోపల​ "],
        ["More than 15 years",     "More than 15 years // కిందటి 15 ఏళ్ల పైన"],
        ["Doesn't cook regularly", "I don't cook regularly // నాకు వండే అలవాటు లేదు"]
      ],
      submit: "Submit // సమాధానాలు పంపించండి",
      sending: "Sending…",                                                  // (EN only)
      sendError: "Couldn't send — check your internet and tap Submit again. // మీ కనెక్షన్ చూసుకునీ మళ్లా పంపించడానికి ప్రయత్నించండి."
    },

    thanks: {
      title: "Thank you! // ధన్యవాదములు!",
      body: "Your answers have been saved. You can close this page now. // మీరు ఈ పేజీ ని ఇప్పుడు ముయ్యగలరు.",
      idLabel: "Your response ID // మీ సమాధానానికి ఐ. డీ.:"
    }
  },

  // ------------------------------------------------------------ HINDI
  hi: {
    htmlLang: "hi",
    gotIt: "Got it",                                                        // (EN only)
    choose: "Choose…",                                                      // (EN only)

    intro: {
      kicker: "A study on home cooking",                                    // (EN only)
      title: "Namaste! Let's talk food. // नमस्ते! चलिए, खाने की बातें करें।",
      body: /* [html] */
        "This is a study at IIIT Hyderabad about home cooking and food habits in Indian households. " +
        "This takes about 10–15 minutes. You will watch a short cooking video and then answer a few questions " +
        "by speaking — just like a conversation. There are no right or wrong answers." +
        "<br><br>" +
        "यह खान-पान पर एक अध्ययन है। इस सर्वे के सभी सवालों के जवाब देने में कुल 10–15 मिनट लगेंगे। सहजता से उत्तर दें, यहाँ कुछ सही या ग़लत नहीं है। मन खोल के बोलिए।",
      start: "Let's start"                                                  // (EN only)
    },

    consent: {
      kicker: "Consent",                                                    // (EN only)
      title: "Before we begin // शुरू करने से पहले कुछ बातें",
      points: [
        "Your spoken answers will be recorded and used only for our course project at IIIT Hyderabad. // आपके जवाब सिर्फ़ इसी प्रोजेक्ट के लिए इस्तेमाल किए जाएँगे।",
        "Your name will not be asked or used. Recordings are stored privately with the researchers. // हम कहीं भी आपका नाम नहीं पूछेंगे, और न ही आपका नाम कहीं इस्तेमाल करेंगे।",
        "You may stop at any time by closing this page. // आप बीच में कभी भी यह पेज बंद कर सकते हैं।",
        "Please answer in a quiet place. Each question can be heard once and answered once, there is no re-recording. // किसी शांत जगह पर जवाब दीजिए। आप हर जवाब सिर्फ़ एक बार रिकॉर्ड कर पाएँगे।"
      ],
      checkbox: "I am 18 or older and I agree to take part. // मेरी उम्र कम से कम 18 साल है। मैं इस सर्वे में भाग लेने के लिए सहमत हूँ।",
      continueBtn: "I agree, continue",                                     // (EN only)
      micCheck: {
        title: "Microphone check // माइक्रोफ़ोन की जाँच",
        text: /* [html] */ "Your phone will now ask to use the microphone. Please tap <b>Allow</b>, we need it to record your answers. <br> अब आपका फ़ोन ऑडियो रिकॉर्ड करने की अनुमति माँगेगा। <b>Allow</b> वाला बटन दबाइए।"
      },
      micBlocked: {
        title: "Microphone blocked // माइक्रोफ़ोन ब्लॉक हो गया",
        text: /* [html] */ "We couldn't use the microphone. Please allow microphone access for this site in your browser settings, then reload this page. (On iPhone, please use Safari.) <br> हम ऑडियो नहीं ले पाए। कृपया अपने ब्राउज़र की सेटिंग्स में इस साइट के लिए माइक्रोफ़ोन की अनुमति दीजिए, फिर यह पेज रीलोड कीजिए। (iPhone पर कृपया Safari इस्तेमाल कीजिए।)"
      }
    },

    video: {
      kicker: "Watch // देखिए",
      heading: /* [html] */ "Please see this short video <br> यह छोटा-सा खाना बनाने का वीडियो देखिए",
      hint: /* [html] */ "Watch till the end to continue. (Credits: Tasty Treasure) <br> आगे बढ़ने के लिए वीडियो आख़िर तक देखिए। (सौजन्य: Tasty Treasure)",
      ended: "Done! Tap Next. // वीडियो पूरा हो गया। 'Next' दबाइए।",
      watched: "You've watched it. Tap Next.",                              // (EN only)
      loadError: "The video didn't load. Check your connection and reload the page.", // (EN only)
      next: "Next",                                                         // (EN only)
      popup: {
        title: "Watch the video // वीडियो देखिए",
        text: /* [html] */ "Tap ▶ and watch the whole video. There is no talking in it. Just watch what is being cooked. <br> ▶ दबाकर वीडियो आख़िर तक देखिए। इस वीडियो में कोई बात नहीं करता। बस देखिए कि इसमें क्या पकाया जा रहा है।"
      }
    },

    question: {
      kicker: (i, n) => "Question " + i + " of " + n,                       // (EN only)
      listenLabel: "1 · Listen",                                            // (EN only)
      answerLabel: "2 · Answer",                                            // (EN only)
      canHear: (left, max) => max === 1 ? "You can hear this once"          // (EN only)
                                        : "You can hear this " + left + " more time" + (left > 1 ? "s" : ""),
      heard: "Heard ✓ // सुन लिया ✓",
      playing: "Playing",                                                   // (EN only)
      loadError: "Couldn't load the question. Check your internet and tap again. // सवाल नहीं चल पाया। अपना इंटरनेट कनेक्शन देखिए और फिर से दबाइए।",
      tapAgain: "Tap again to play.",                                       // (EN only)
      listenFirst: "Listen to the question first",                          // (EN only)
      tapToRecord: "Tap to start recording",                                // (EN only)
      recording: "Recording… tap to finish // रिकॉर्डिंग चल रही है... पूरा होने पर रोकने के लिए दबाइए",
      recorded: "Recorded",                                                 // (EN only)
      saved: "Answer saved",                                                // (EN only)
      sending: "Sending your answer // आपका जवाब भेजा जा रहा है",
      sent: "Your answer was sent ✓",                                       // (EN only)
      sendError: "Couldn't send — check your internet, then tap Retry.",   // (EN only)
      retry: "Retry sending",                                               // (EN only)
      next: "Next question",                                                // (EN only)
      howItWorks: {
        title: "How this works // कुछ ज़रूरी बातें",
        text: /* [html] */ (max) =>
          "<b>Step 1:</b> tap the green speaker 🔊 to hear the question. You can hear it upto " + (max === 1 ? "once" : max + " times") +
          " <br> सवाल सुनने के लिए हरे रंग के स्पीकर 🔊 को दबाइए। आप इसे " + (max === 1 ? "सिर्फ़ एक बार" : max + " बार") + " सुन सकते हैं।" +
          "<br><br><b>Step 2:</b> tap the red microphone 🎙 and answer out loud. Tap it again when you're done." +
          " <br> लाल रंग के माइक्रोफ़ोन 🎙 को दबाकर जवाब बोलिए। बोलना पूरा होने पर उसे फिर से दबाइए।"
      },
      notSupported: {
        title: "Recording not supported // रिकॉर्डिंग नहीं हो सकती",
        text: /* [html] */ "This browser can't record audio. Please open the link in Chrome (Android) or Safari (iPhone). <br> इस ब्राउज़र में रिकॉर्डिंग नहीं हो सकती। कृपया इसे Chrome (Android) या Safari (iPhone) में खोलिए।"
      },
      micBlocked: {
        title: "Microphone blocked // माइक ब्लॉक हो गया",
        text: /* [html] */ "Please allow microphone access for this site, then tap the microphone again. <br> माइक इस्तेमाल करने की अनुमति दीजिए, फिर माइक वाला बटन दोबारा दबाइए।"
      },
      finish: {
        title: "Finished answering? // क्या आपने पूरा जवाब दे दिया?",
        text: /* [html] */ "You can't record this answer again, so take your time if you have more to say. <br> आप यह जवाब दोबारा रिकॉर्ड नहीं कर पाएँगे। इसलिए अगर आपको और कुछ कहना है, तो अभी वापस जाकर कह सकते हैं।",
        keep: "talk // और बोलना है",
        done: "done // हो गया"
      }
    },

    details: {
      kicker: "Almost done // बस हो ही गया अब",
      heading: "A little about you // आपके बारे में कुछ जानकारी",
      note: /* [html] */ "This helps us study answers. No names, please. <br> इससे हमें जवाबों को समझने में मदद मिलती है। अपना नाम लिखना आवश्यक नहीं है।",
      age: "Age // उम्र",
      gender: "Gender // लिंग",
      genderOptions: [["Woman", "Female // महिला"], ["Man", "Man // पुरुष"]],
      motherTongue: "Mother tongue // मातृभाषा",
      otherLanguages: "Other languages you understand? // आपको और कौन-कौन सी भाषाएँ आती हैं?",
      grewUp: "Where did you grow up? // आपका बचपन कहाँ बीता?",
      grewUpHint: "(city / town, state)",                                   // (EN only)
      livesNow: "Where do you live now? // आजकल आपका कहाँ रहते है?",
      cooking: "Since how long have you been able to cook regularly? // आपको नियमित रूप से खाना बनाते हुए कितना समय हुआ है?",
      cookingOptions: [
        ["Less than 1 year",       "Less than 1 year // एक साल से कम"],
        ["1–5 years",              "1–5 years // 1–5 साल"],
        ["5–15 years",             "5–15 years // 5–15 साल"],
        ["More than 15 years",     "More than 15 years // 15 साल से ज़्यादा"],
        ["Doesn't cook regularly", "I don't cook regularly // मुझे खाना बनाने की आदत नहीं है"]
      ],
      submit: "Submit // जवाब जमा करें",
      sending: "Sending…",                                                  // (EN only)
      sendError: "Couldn't send — check your internet and tap Submit again. // अपना कनेक्शन देखिए और फिर से भेजने की कोशिश कीजिए।"
    },

    thanks: {
      title: "Thank you! // धन्यवाद!",
      body: "Your answers have been saved. You can close this page now. // आप अब यह पेज बंद कर सकते हैं।",
      idLabel: "Your response ID // आपके जवाब की आई.डी.:"
    }
  }
};
