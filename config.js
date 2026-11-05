// =====================================================================
//  YOUR SETTINGS
//  This is the only file you need to edit.
//  Keep the quotes "..." and the commas at the end of each line.
// =====================================================================

window.APP_CONFIG = {

  // ---------------------------------------------------------------
  //  1. FIREBASE
  //  Firebase console > Project settings (gear icon) > General >
  //  "Your apps" > your web app > "SDK setup and configuration" > Config.
  //  Copy each value from there into the matching line below.
  //
  //  databaseURL is shown only after you have created the
  //  Realtime Database. If it is missing from the snippet, copy it
  //  from the top of the Realtime Database > Data page instead.
  //  It looks like: https://xxxx-default-rtdb.europe-west1.firebasedatabase.app
  // ---------------------------------------------------------------
  firebase: {
    apiKey:            "PASTE_API_KEY_HERE",
    authDomain:        "PASTE_PROJECT_ID.firebaseapp.com",
    databaseURL:       "PASTE_DATABASE_URL_HERE",
    projectId:         "PASTE_PROJECT_ID",
    storageBucket:     "PASTE_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "PASTE_SENDER_ID",
    appId:             "PASTE_APP_ID",
  },

  // ---------------------------------------------------------------
  //  2. APP
  // ---------------------------------------------------------------

  // Name shown at the top of the app.
  appName: "Shared balance",

  // Three-letter currency code: "EUR", "USD", "GBP", "CHF", ...
  currency: "EUR",

  // Number format. Leave empty "" to use each phone's own language,
  // or force one, for example "it-IT" (1.240,50 €) or "en-GB" (€1,240.50).
  locale: "",

  // How many past changes to show in the history list.
  historyLength: 100,
};
