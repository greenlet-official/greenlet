// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCKz-sX0ZSzwJmdGr0kqcUFCHAehgZqT6o",
  authDomain: "greenlet-7919f.firebaseapp.com",
  projectId: "greenlet-7919f",
  storageBucket: "greenlet-7919f.appspot.com",
  messagingSenderId: "68860296566",
  appId: "1:68860296566:web:2da85f8f286ca7ca434e57",
  measurementId: "G-0D3KD3NZMK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
