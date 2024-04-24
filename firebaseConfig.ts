import { initializeApp } from 'firebase/app';
import{getAuth}from'firebase/auth';
{/**Add more firestor options here, like linking to a data base */}
import{getFirestore}from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOGGtR6Ea1MG82ldoE75qNA5YFHXcxI_Q",
    authDomain: "walnut-8384d.firebaseapp.com",
    projectId: "walnut-8384d",
    storageBucket: "walnut-8384d.appspot.com",
    messagingSenderId: "147749493627",
    appId: "1:147749493627:web:1f5b72abaa28def3083bde"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
