import firebase from "firebase";
import "firebase/auth";

let firebaseConfig = {
    apiKey: "AIzaSyBD6p7iOJXK6fx4S0D3PHbW1gAd7xb7X2k",
    authDomain: "tarcapppro.firebaseapp.com",
    databaseURL: "https://tarcapppro.firebaseio.com",
    projectId: "tarcapppro",
    storageBucket: "tarcapppro.appspot.com",
    messagingSenderId: "425061604731",
    appId: "1:425061604731:web:dbd4968be089ba6dc371de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;