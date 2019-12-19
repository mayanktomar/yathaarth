// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-analytics.js"></script>


  // Your web app's Firebase configuration
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  var firebaseConfig = {
    apiKey: "AIzaSyBkqhOYAmHNu-EMQnKGHqvrQ_8jfg--l8M",
    authDomain: "yathaarth-test.firebaseapp.com",
    databaseURL: "https://yathaarth-test.firebaseio.com",
    projectId: "yathaarth-test",
    storageBucket: "yathaarth-test.appspot.com",
    messagingSenderId: "211201318281",
    appId: "1:211201318281:web:6bdd96e2b414b036099558",
    measurementId: "G-FCMRY0SXB8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase
  
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();