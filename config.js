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
  // ---------------------------------------------------------------
  firebase: {
    apiKey:            "AIzaSyBMYA3HK1h91pcZG9GlatwgvmCf-5kss1o",
    authDomain:        "expenses-tracker-70a00.firebaseapp.com",
    databaseURL:       "https://expenses-tracker-70a00-default-rtdb.europe-west1.firebasedatabase.app",
    projectId:         "expenses-tracker-70a00",
    storageBucket:     "expenses-tracker-70a00.firebasestorage.app",
    messagingSenderId: "554495557896",
    appId:             "1:554495557896:web:d95d7c67a419fd97b9ecbd",
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
