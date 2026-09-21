<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNDifUQOSYt_nQSeL_ZIxXhfNzTGQJGdA",
    authDomain: "ledger-df7a0.firebaseapp.com",
    projectId: "ledger-df7a0",
    storageBucket: "ledger-df7a0.firebasestorage.app",
    messagingSenderId: "854106995075",
    appId: "1:854106995075:web:198b3702c4214197929eb6",
    measurementId: "G-9C0C5XSD5K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
