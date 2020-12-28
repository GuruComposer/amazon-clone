import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAoHCM_wSrk72y7sLH-az1DXlBoDf4sdk4",
	authDomain: "clone-41556.firebaseapp.com",
	databaseURL: "https://clone-41556.firebaseio.com",
	projectId: "clone-41556",
	storageBucket: "clone-41556.appspot.com",
	messagingSenderId: "732043675694",
	appId: "1:732043675694:web:1b2c461e790d3b45fe37bf",
	measurementId: "G-3F48FL4QLB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
