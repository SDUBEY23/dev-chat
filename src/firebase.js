
import firebase from 'firebase/app';
import "firebase/auth";
 import "firebase/database";
 import "firebase/storage";

 var firebaseConfig = {
  apiKey: "AIzaSyBOQ2dzGOjeaQl10bnIjMtuXf3yEJlJiJ8",
  authDomain: "react-slack-chat-b4c68.firebaseapp.com",
  projectId: "react-slack-chat-b4c68",
  storageBucket: "react-slack-chat-b4c68.appspot.com",
  messagingSenderId: "484714394410",
  appId: "1:484714394410:web:57bc039811cbc48bcca453",
  measurementId: "G-5VBGC2PDRL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


export default firebase;
