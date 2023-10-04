import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAMakF_Arb90rSuGlUpIC93QaTMIHDjarU",
    authDomain: "the-dragon-news-project-6239e.firebaseapp.com",
    projectId: "the-dragon-news-project-6239e",
    storageBucket: "the-dragon-news-project-6239e.appspot.com",
    messagingSenderId: "79026079037",
    appId: "1:79026079037:web:acd3c34df5c8f846677154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;