<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCKz-sX0ZSzwJmdGr0kqcUFCHAehgZqT6o",
    authDomain: "greenlet-7919f.firebaseapp.com",
    projectId: "greenlet-7919f",
    storageBucket: "greenlet-7919f.firebasestorage.app",
    messagingSenderId: "68860296566",
    appId: "1:68860296566:web:2da85f8f286ca7ca434e57",
    measurementId: "G-0D3KD3NZMK"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass  = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log("Logged in!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  });
</script>
