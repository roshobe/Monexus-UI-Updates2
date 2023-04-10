// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "MONEXUS_API_KEY",
    authDomain: "money-transfer-aad55.firebaseapp.com",
    databaseURL: "https://money-transfer-aad55-default-rtdb.firebaseio.com",
    projectId: "money-transfer-aad55",
    storageBucket: "money-transfer-aad55.appspot.com",
    messagingSenderId: "74831144868",
    appId: "1:74831144868:web:8690a5b08474d902990331",
    measurementId: "G-S02XX0BTRX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

export {
    firebaseApp,
    firebaseAnalytics
};