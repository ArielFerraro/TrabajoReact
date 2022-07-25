
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBiTkWcq_qOWSFaXycUrLeHYGjiGdDRabU",
    authDomain: "proyectoreact-ecd13.firebaseapp.com",
    projectId: "proyectoreact-ecd13",
    storageBucket: "proyectoreact-ecd13.appspot.com",
    messagingSenderId: "1084446842475",
    appId: "1:1084446842475:web:4ccfaab19f6ee8504adb2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);