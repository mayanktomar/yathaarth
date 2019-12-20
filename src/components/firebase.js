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
  
  