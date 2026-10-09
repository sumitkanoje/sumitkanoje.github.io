# Privacy Policy

This page holds the privacy policies for apps published by knoje. Each app has its own section:

- [UAE Wealth Tracker](#uae-wealth-tracker) (Android, `com.knoje.uaewealth`)
- [Knoje Virtual Speaker and other apps](#knoje-virtual-speaker-and-other-apps)

---

## UAE Wealth Tracker

**Effective date:** 9 October 2026
**App:** UAE Wealth Tracker (Android package `com.knoje.uaewealth`), shown in the app as "UAE Wealth" / "uae.wealth"
**Developer:** knoje (Google Play developer account "knoje")
**Contact:** [CONTACT EMAIL]
**Website:** [WEBSITE, optional]

### The short version

- UAE Wealth Tracker does **not** collect, transmit or share any of your data. The app has no account, no sign-in, no server, no analytics and no ads.
- Your bank statements are decrypted and read **on your phone**. Nothing is uploaded.
- Everything the app stores is kept in an encrypted file on your phone. The encryption key is kept in Android's Keystore-backed secure storage.
- The app does not request the internet permission. It works in airplane mode.
- Fingerprint or face unlock is handled by Android. The app never receives your biometric data.
- Backups exist only if you turn them on, and you choose where they go.
- "Delete all my data" in Settings erases everything on the phone.

This policy applies to the Android app and is the same policy linked from Google Play and from inside the app.

### 1. Who we are

UAE Wealth Tracker is published by **knoje**, an independent developer. The app is not affiliated with, endorsed by or connected to any bank (including RAKBANK or Mashreq, whose statement formats it can read) or any government entity of the United Arab Emirates. The app shows your own figures and gives no financial or investment advice.

Questions about this policy or about your data: **[CONTACT EMAIL]**.

### 2. What the app does, in plain language

You choose a PDF bank statement from your phone. The app asks for the statement's password, opens the PDF on the device, extracts the transactions, checks that they add up to the statement's own printed totals, and shows you a review before anything is saved. From then on the app shows your cards, due dates, limit usage, spending by category and merchant, and a net worth section where you type in what you own.

All of this happens inside the app on your phone. There is no "cloud" side to this app.

### 3. Data the app stores on your phone

The app keeps the following **on your device only**, because it needs them to work:

| What | Where | Why |
|---|---|---|
| Transactions, cards, accounts, statement summaries, categories you create, merchant-to-category choices, assets you enter (gold, stocks and ETFs, property, deposits, cash), reminder preferences and app settings | One encrypted file (`vault.bin`) in the app's private storage, encrypted with AES-256-GCM. The random 256-bit key is stored in Android Keystore-backed secure storage (`flutter_secure_storage`). | So the app can show you your figures. |
| Statement passwords you tick "Remember" for | Android Keystore-backed secure storage | So next month's statement from the same bank opens without asking. You can see and remove them in Settings › Saved statement passwords. |
| Your app PIN (if you choose a PIN lock) | Only a salted PBKDF2-HMAC-SHA256 hash of the PIN, in Keystore-backed secure storage. The PIN itself is never stored. | To unlock the app. |
| Lock settings (biometrics on/off, PIN on/off) | Keystore-backed secure storage | To know how to lock the app. |

The statement PDF itself is **not** copied or kept by the app. It is read from the location you picked and only the extracted figures are saved.

Android's private app storage is not readable by other apps on an unrooted phone, and the encrypted file cannot be read without the key held in secure storage.

### 4. Data we collect: none

We do not collect, receive, transmit, sell or share any personal data. In detail:

- **No network access.** The release version of the app does not declare the Android `INTERNET` permission, so it cannot open network connections at all. Fonts and everything else the app needs are bundled inside it.
- **No account.** There is nothing to sign up for or sign in to, and therefore no account to delete on any server.
- **No analytics, crash reporting, advertising or tracking SDKs** are included in the app.
- **No contact with your bank.** The app never connects to RAKBANK, Mashreq or any other bank. It only reads the statement PDF you give it.
- **Nothing is sent to us.** We cannot see your statements, transactions, balances, PIN or passwords, and we have no way to recover them for you.

The only information we might receive is what you choose to send us yourself, for example if you email **[CONTACT EMAIL]** for support. We use such messages only to reply to you.

### 5. Permissions

The release version of the app declares these Android permissions:

- `android.permission.USE_BIOMETRIC` and `android.permission.USE_FINGERPRINT` (older devices): to offer fingerprint or face unlock through Android's own biometric prompt. See section 6.
- `com.knoje.uaewealth.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`: an internal, signature-level permission added automatically by the Android support libraries; it does not give access to any data.

The app does **not** request internet, storage, contacts, location, camera, microphone, SMS, phone or notification permissions. Choosing a PDF or saving a backup or CSV file uses Android's built-in file picker, which gives the app access only to the single file you pick, for that action.

### 6. Biometrics (fingerprint and face unlock)

If you turn on biometric unlock, the app asks Android to show its standard biometric prompt. Android checks your fingerprint or face against the data it holds in the phone's secure hardware and tells the app only "succeeded" or "failed/cancelled". **The app never receives, stores or can access your fingerprint, face or any other biometric data.** Android's own screen-lock fallback (PIN, pattern or password) is allowed on that prompt.

If you choose the app's own 6-digit PIN instead, only a salted PBKDF2 hash of the PIN is stored (section 3).

### 7. Backups, exports and who can read what

All three options below are **off until you use them**. The app itself never uploads anything; in every case the data leaves the app only because you asked for it, and it goes only where you chose.

#### 7a. Encrypted backup file (Settings › Export encrypted backup)

You choose a passphrase (at least 8 characters). The app encrypts a copy of your data with AES-256-GCM using a key derived from that passphrase (PBKDF2-HMAC-SHA256, 210,000 iterations) and lets you save the resulting `.uwbackup` file wherever you like through Android's file picker: on the phone, on a USB drive, in Google Drive, Dropbox or any other app you select.

- **Who can read it:** only someone who has both the file and the passphrase. We cannot open it and cannot reset the passphrase.
- Where you save it is up to you. If you save it into a cloud service, that service's own privacy policy applies to the storage of the file.
- Restoring a backup replaces the data on the phone with the data in the file.

#### 7b. Back up to your Google account (Settings › Back up to your Google account)

This option uses **Android's own app backup** (Android Backup Service), which backs up app data to the Google account on the phone on Android's schedule, usually daily while charging on Wi-Fi. It is available on Android 9 and later and is off by default.

When you turn it on, the app keeps a copy of its encrypted data file **together with the key needed to open it** in a folder that Android is allowed to back up, so that a restored phone can open the copy without a passphrase. Because the key is included, the protection of this copy relies on Android's backup encryption:

- The app's backup rules tell Android to include that folder **only when the backup is end-to-end encrypted** with your phone's screen lock (Android's `requireFlags="clientSideEncryption"` on Android 9 to 11 and `disableIfNoEncryptionCapabilities="true"` on Android 12 and later). In that mode Google states it cannot read the backup contents.
- The main data file and the Keystore key are always excluded from the backup. Your app PIN and remembered statement passwords are never backed up.
- The same folder is also allowed to move during Android's **device-to-device transfer** when you set up a new phone directly from the old one.
- The transfer to Google is performed by Android under your Google account and Google's privacy policy, not by this app. The app only tells Android that something changed.
- Turning the switch off deletes the copy and tells Android to drop it from the next backup. "Delete all my data" does the same.
- Android's backup settings (Settings › Google › Backup on most phones) must be on, otherwise nothing is backed up even with the switch on.

#### 7c. CSV export (Settings › Export transactions as CSV)

Creates a plain, **unencrypted** text file of your transactions (date, merchant, description, category, amount, card or account, foreign currency and amount) and lets you save it wherever you choose. Anyone who can open that file can read it, so treat it like any other document containing your financial details.

### 8. Deleting your data

- **Settings › Delete all my data** removes the encrypted data file and its key, all cards, statements, transactions, assets and categories, remembered statement passwords, the app lock, and the copy kept for Google account backup. It cannot be undone.
- Uninstalling the app removes the app's private storage as well. If you had turned on backup to your Google account, Android may keep that backup under your Google account for a time according to Google's rules; turning the switch off before uninstalling clears it.
- Backup files and CSV files you exported are ordinary files you control; delete them wherever you saved them.
- Because we hold no data about you, there is nothing for us to delete on our side. If you believe we have received something from you (for example by email), write to **[CONTACT EMAIL]** and we will delete it.

### 9. Data retention

Data stays on your phone until you delete it, delete the app or restore a different backup. We have no retention period of our own because we hold nothing.

### 10. Children

UAE Wealth Tracker is intended for adults who hold bank accounts and credit cards. It is **not directed at anyone under 18**, and we do not knowingly collect data from children. Since the app collects no data at all, no child's data can reach us; if you believe a child has sent us personal data by email, contact us and we will delete it.

### 11. Security

- Data at rest: AES-256-GCM with a random key stored in Android Keystore-backed secure storage; the file alone, copied off the phone, cannot be read.
- Backup file: AES-256-GCM with a key derived from your passphrase using PBKDF2-HMAC-SHA256 (210,000 iterations, random salt).
- App PIN: salted PBKDF2-HMAC-SHA256 hash, compared in constant time. Easily guessed PINs are refused.
- App lock: optional biometric or PIN lock, with the screen contents hidden when the app is in the background or locked.
- No data in transit, because the app has no network access.

We do not claim any third-party security certification. No system is perfectly secure; keep your phone updated, use a screen lock, and keep your backup passphrase somewhere safe.

### 12. Third parties

The app includes no third-party services that receive your data. Software components used by the app (Flutter, the PDFium PDF engine, Android support libraries, Google Fonts' Alexandria typeface bundled inside the app) run entirely on the device and make no connections.

Separately from this app, Google and your device maker may collect device-level diagnostics (for example crash statistics through Google Play services) under their own policies; that data is not generated or sent by this app and does not include your financial information.

### 13. Your rights, and the UAE Personal Data Protection Law

If you are in the UAE, Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) gives you rights over personal data that a controller processes about you, including access, correction, erasure, restriction and portability. Because this app processes your data **only on your own device under your own control**, and we (the developer) never receive it, there is no personal data held by us to which these rights would apply. You exercise them directly in the app:

- **Access and portability:** your data is visible in the app and can be exported as a CSV file or an encrypted backup file at any time.
- **Correction:** re-tag transactions, rename categories and edit assets in the app.
- **Erasure:** Settings › Delete all my data.

If you are elsewhere, similar rights under your local law apply in the same way. If you still have a question or complaint, contact **[CONTACT EMAIL]**. You may also contact your local data protection authority.

### 14. Changes to this policy

If the app ever changes how it handles data (for example if an optional cloud sync is added), this policy will be updated first, the effective date at the top will change, and the Google Play listing and the in-app link will point to the new version. Features that send data off the phone will always be optional and clearly explained in the app before they are turned on.

### 15. Contact

**[CONTACT EMAIL]**
[WEBSITE, optional]

---

## Knoje Virtual Speaker and other apps

**Last updated:** January 10, 2025

This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.

### Interpretation and Definitions

#### Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

#### Definitions

For the purposes of this Privacy Policy:

- **Account** means a unique account created for You to access our Service or parts of our Service.
- **Affiliate** means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
- **Application** refers to Knoje Virtual Speaker, the software program provided by the Company.
- **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Knoje Virtual Speaker.
- **Country** refers to the location where the Company operates, specifically Maharashtra, India.
- **Device** means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
- **Personal Data** is any information that relates to an identified or identifiable individual.
- **Service** refers to the Application.
- **Service Provider** means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.
- **Usage Data** refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
- **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

### Collecting and Using Your Personal Data

#### Types of Data Collected

##### Personal Data

While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

- Usage Data

##### Usage Data

Usage Data is collected automatically when using the Service.

Usage Data may include information such as Your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.

When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers, and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.

#### Use of Your Personal Data

The Company may use Personal Data for the following purposes:

- **To provide and maintain our Service**, including to monitor the usage of our Service.
- **To manage Your Account:** to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
- **For the performance of a contract:** the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service.
- **To contact You:** To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation.
- **To provide You** with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
- **To manage Your requests:** To attend and manage Your requests to Us.
- **For business transfers:** We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
- **For other purposes:** We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Service, products, services, marketing, and your experience.

We may share Your personal information in the following situations:

- **With Service Providers:** We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
- **For business transfers:** We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
- **With Affiliates:** We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us.
- **With business partners:** We may share Your information with Our business partners to offer You certain products, services, or promotions.
- **With other users:** when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
- **With Your consent:** We may disclose Your personal information for any other purpose with Your consent.

#### Retention of Your Personal Data

The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.

#### Transfer of Your Personal Data

Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.

Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.

The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.

#### Delete Your Personal Data

You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

Our Service may give You the ability to delete certain information about You from within the Service.

You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.

#### Disclosure of Your Personal Data

##### Business Transactions

If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.

##### Law enforcement

Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).

##### Other legal requirements

The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:

- Comply with a legal obligation
- Protect and defend the rights or property of the Company
- Prevent or investigate possible wrongdoing in connection with the Service
- Protect the personal safety of Users of the Service or the public
- Protect against legal liability

#### Security of Your Personal Data

The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.

### Children's Privacy

Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.

### Links to Other Websites

Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

### Changes to this Privacy Policy

We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

### Contact Us

If you have any questions about this Privacy Policy, You can contact us:

- By email: <sumitkanoje@gmail.com>
