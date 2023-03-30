import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  SECRET
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const auth = firebase.auth();