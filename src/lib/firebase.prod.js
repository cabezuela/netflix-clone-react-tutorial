import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRfiOxkcgxzI1J-qS1540iGwy5Xgf7AZ4",
  authDomain: "netflix-clone-e88ae.firebaseapp.com",
  databaseURL: "https://netflix-clone-e88ae.firebaseio.com",
  projectId: "netflix-clone-e88ae",
  storageBucket: "netflix-clone-e88ae.appspot.com",
  messagingSenderId: "815461002523",
  appId: "1:815461002523:web:d377799aefc8b5e3a077be",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
