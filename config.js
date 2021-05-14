import firebase from 'firebase';
require('@firebase/firestore')

/*var firebaseConfig = {
    apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
    authDomain: "book-santa-app.firebaseapp.com",
    databaseURL: "https://book-santa-app.firebaseio.com",
    projectId: "book-santa-app",
    storageBucket: "book-santa-app.appspot.com",
    messagingSenderId: "69634746716",
    appId: "1:69634746716:web:6fbbfc110fb4475365f999",
    measurementId: "G-DLB7XC0JPL"
  };*/

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7B9pO6z2iFVPw_-H3gxqT7HvXNtYSDTw",
    authDomain: "booksanta-151e1.firebaseapp.com",
    projectId: "booksanta-151e1",
    storageBucket: "booksanta-151e1.appspot.com",
    messagingSenderId: "439300651645",
    appId: "1:439300651645:web:36df6f409f9d6c5aaa4f14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
