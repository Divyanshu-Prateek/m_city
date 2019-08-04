import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyD34OWBpGGXDR_LLYyVS9KmKUQ_NTP00sA",
    authDomain: "m-city-150af.firebaseapp.com",
    databaseURL: "https://m-city-150af.firebaseio.com",
    projectId: "m-city-150af",
    storageBucket: "",
    messagingSenderId: "53145669931",
    appId: "1:53145669931:web:e82e623699dc521e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB =firebase.database( );
  const firebaseMatches =firebaseDB.ref('matches');

  export {
      firebase,
      firebaseMatches
  };
//   firebaseDB.ref('matches').once('value').then((snapshot)=>{
//       console.log(snapshot.val()); 
//   })