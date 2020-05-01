import firebase from 'firebase/app'
import firestore from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDAK4l04jqkpRiPBBNTXEamiymNwRMVlLA",
    authDomain: "crud-udemy-fd599.firebaseapp.com",
    databaseURL: "https://crud-udemy-fd599.firebaseio.com",
    projectId: "crud-udemy-fd599",
    storageBucket: "crud-udemy-fd599.appspot.com",
    messagingSenderId: "639149164960",
    appId: "1:639149164960:web:e4687728512e6588287cc5",
    measurementId: "G-MNMBGDYMJ2"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  firebaseApp.firestore().settings({})

  export default firebaseApp.firestore()