import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD8900mGqKcNXqx-DD1bEGdCfFVzJgyFT8",
  authDomain: "netflix-clone-350bf.firebaseapp.com",
  projectId: "netflix-clone-350bf",
  storageBucket: "netflix-clone-350bf.appspot.com",
  messagingSenderId: "1081230276972",
  appId: "1:1081230276972:web:83acd49035df5673c45b49"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
