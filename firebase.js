// Replace the firebaseConfig with your project's config from Firebase console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "000000000000",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
