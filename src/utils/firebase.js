import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1IVmSMWFElv-BoX74SqGTfTOFXj-USAQ",
    authDomain: "playway-4de62.firebaseapp.com",
    databaseURL: "https://playway-4de62.firebaseio.com",
    projectId: "playway-4de62",
    storageBucket: "playway-4de62.appspot.com",
    messagingSenderId: "456674711143",
    appId: "1:456674711143:web:605a6ad40aef4440fbe6c2",
    measurementId: "G-5VDP6BHJ15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;