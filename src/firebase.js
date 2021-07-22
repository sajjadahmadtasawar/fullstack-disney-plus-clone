import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJ9WrK9B2DDPaD7CPQgDRNWB2gAnL4whQ',
  authDomain: 'disney-clone-7a312.firebaseapp.com',
  projectId: 'disney-clone-7a312',
  storageBucket: 'disney-clone-7a312.appspot.com',
  messagingSenderId: '996617433698',
  appId: '1:996617433698:web:cb0c5716b914f7247b973b',
  measurementId: 'G-4XP04HB3Z0',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
