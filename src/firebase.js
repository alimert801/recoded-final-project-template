import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBd7IYBzvQA7oInYpBAaKnW61SavvDCJxY",
    authDomain: "bootcamp-7278d.firebaseapp.com",
    databaseURL: "https://bootcamp-7278d.firebaseio.com",
    projectId: "bootcamp-7278d",
    storageBucket: "bootcamp-7278d.appspot.com",
    messagingSenderId: "808428788120",
    appId: "1:808428788120:web:077a7c1de79ce956"
});

const db = firebaseApp.firestore();

export {db};
