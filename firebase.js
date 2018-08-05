import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDJftb-Frw6E9V0jt1e9Q3IPDCnh0ScZq8",
    authDomain: "whatsappclone-5d74a.firebaseapp.com",
    databaseURL: "https://whatsappclone-5d74a.firebaseio.com",
    projectId: "whatsappclone-5d74a",
    storageBucket: "whatsappclone-5d74a.appspot.com",
    messagingSenderId: "327126726782"
  };
  const Firebase = firebase.initializeApp(config);
 
  export default Firebase