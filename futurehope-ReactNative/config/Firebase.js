import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-L823T5HalQTT2T374fQBDil-6co3HW8",
    authDomain: "future-hope-school.firebaseapp.com",
    databaseURL: "https://future-hope-school.firebaseio.com",
    projectId: "future-hope-school",
    storageBucket: "future-hope-school.appspot.com",
    messagingSenderId: "586160685845",
    appId: "1:586160685845:web:926a03982f90efa2"
  }

  // window.addEventListener = x => x;

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
// db.settings({
// 	timestampsInSnapshots: true
// })

export default Firebase