// Replace the firebaseConfig with your project's config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCKz-sX0ZSzwJmdGr0kqcUFCHAehgZqT6o",
  authDomain: "greenlet-7919f.firebaseapp.com",
  projectId: "greenlet-7919f",
  storageBucket: "greenlet-7919f.firebasestorage.app",
  messagingSenderId: "68860296566",
  appId: "1:68860296566:web:2da85f8f286ca7ca434e57" 
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
