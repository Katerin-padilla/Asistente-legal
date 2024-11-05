import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_4dXdHsN_aPlzvwCmeZ23TmGvmMeTaXY",
    authDomain: "login-c01ab.firebaseapp.com",
    projectId: "login-c01ab",
    storageBucket: "login-c01ab.appspot.com",
    messagingSenderId: "1010329309058",
    appId: "1:1010329309058:web:c080178e6dbc8a1e5a099b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);