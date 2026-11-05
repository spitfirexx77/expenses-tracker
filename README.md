# Shared balance

A small app that shows one money balance and keeps it in sync between phones.
It runs from your own GitHub Pages site and stores the data in your own Firebase project.

## Files

| File | What it is | Edit it? |
|---|---|---|
| `config.js` | Your Firebase settings, app name, currency | **Yes, this is the one to edit** |
| `index.html` | The whole app: layout, colors, logic | Only if you want to change how it looks or works |
| `manifest.json` | Name and icon used when installed | Optional: change `name` / `short_name` |
| `sw.js` | Makes it open instantly and install like an app | No |
| `icons/` | Home screen icons | Optional: replace with your own PNGs of the same size |
| `database.rules.json` | Security rules to paste into Firebase | Yes, put your email(s) in it (step 4) |

---

## Setup (about 20 minutes, once)

### 1. Create a Firebase project
1. Go to <https://console.firebase.google.com> and sign in with a Google account.
2. Click **Create a project**, give it a name (for example `shared-balance`).
3. Google Analytics is not needed; you can turn it off.

### 2. Create the database
1. In the left menu: **Build → Realtime Database → Create database**.
2. Location: **Belgium (europe-west1)** is closest to Italy.
3. Choose **Start in locked mode**. (You'll add the real rules in step 4.)

### 3. Turn on email login and create the account(s)
1. **Build → Authentication → Get started**.
2. Tab **Sign-in method → Email/Password → Enable → Save**. (Leave "Email link" off.)
3. Tab **Users → Add user**: enter an email and a password.
   - One account for both phones: create one user.
   - One account per person: create one user for each.
4. Optional but recommended: tab **Settings → User actions**, untick
   **Enable create (sign-up)** so nobody else can make an account in your project.

### 4. Protect the data (important)
1. **Realtime Database → Rules** tab.
2. Delete what's there and paste the contents of `database.rules.json`.
3. Replace `first.person@example.com` and `second.person@example.com` with the
   email(s) from step 3, **in lowercase**. Using only one account? Put the same
   email in both places.
4. Click **Publish**.

Only those accounts can now read or change the balance.

### 5. Connect the app to Firebase
1. Click the gear icon → **Project settings → General**.
2. Under **Your apps**, click the web icon **`</>`**, give it a nickname, click **Register app**.
   (Don't tick "Firebase Hosting".)
3. You'll see a block like `const firebaseConfig = { apiKey: "...", ... }`.
4. Open `config.js` and copy each value into the matching line.
5. Make sure `databaseURL` is filled in. If it isn't in the block, copy it from the
   top of the **Realtime Database → Data** page (it ends in `firebasedatabase.app`).

These values are not secret. Your data is protected by the login and the rules from step 4.

### 6. Put the app online with GitHub Pages
1. Create a free account at <https://github.com>.
2. Click **+ → New repository**, name it `balance`, set it to **Public**, click **Create repository**.
3. Click **uploading an existing file** and drag in **all the files and the `icons` folder**.
   Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Branch*, pick `main` and `/ (root)`, click **Save**.
5. After a minute the page shows your address, e.g. `https://yourname.github.io/balance/`.

### 7. Allow your address in Firebase
**Authentication → Settings → Authorized domains → Add domain** → enter `yourname.github.io`
(just the domain, without `https://` or `/balance/`).

### 8. Install on the phones
- **iPhone:** open the address in **Safari** → Share button → **Add to Home Screen**.
- **Android:** open the address in **Chrome** → ⋮ menu → **Add to Home screen** (or **Install app**).

Open the app from the new icon and sign in. You only sign in once per phone.

Tap the app name at the top to open **Settings**, where you can give each phone a name
(e.g. "Anna's iPhone"). That name appears next to every change in the history.

---

## Using it

Changes stay on your phone until you send them.

- **Put in / Take out:** adds or subtracts an amount, with an optional note.
- **Tap the big number:** sets the balance to an exact amount (to correct it).
- **Calculator (button next to Put in):** add and subtract with **+** and **−**,
  halve with **÷ 2**, clear with **C**. **Use current balance** copies the balance into
  the calculation. **Copy to balance** puts the result into the balance.
- **Send to Firebase (yellow button):** sends all your changes so the other phone gets them.
  Until then the big number shows your changes and the history marks them "Not sent yet".
- **Discard:** throws away all changes that haven't been sent (tap twice).
- **Tap a history entry:** see details or **Undo this change** (also sent with the Send button).
  Tap a "Not sent yet" entry to remove just that one.
- The dot at the top right: green = synced, yellow = not sent or sending, red = offline.

Unsent changes are saved on the phone, so they survive closing the app.
The other phone's changes keep arriving live while yours wait to be sent.

When you send, adds and subtractions are applied on top of whatever is in Firebase at that
moment, so changes from both phones count. A "set" (exact amount or calculator result)
replaces the balance with that amount.

## Making changes later

1. On GitHub, open the file (usually `config.js`), click the **pencil icon**, edit, **Commit changes**.
2. Wait a minute or two, then close and reopen the app on each phone.

Common edits:
- **Currency:** `currency: "EUR"` in `config.js`.
- **Number format:** `locale: "it-IT"` in `config.js` for 1.240,50 €.
- **Colors:** the lines at the top of the `<style>` section in `index.html`
  (`--panel` is the green, `--in` and `--out` are the plus/minus colors).

## If something doesn't work

| What you see | What to check |
|---|---|
| "Almost there" screen | `config.js` still has `PASTE_...` text or `databaseURL` is empty |
| "Email or password is wrong" | The user from step 3 and its password |
| "Email sign-in is turned off" | Step 3.2 |
| Red dot and "No access" | The email in the rules (step 4) must match the login, in lowercase |
| Sign-in error mentioning domain | Step 7 |
| Changes you uploaded don't appear | Close the app fully and open it again (sometimes twice) |
