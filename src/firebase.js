import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC0Te3w4IW01MpEHcuQVDmy3HO1Gb6Ytw",
    authDomain: "fit-kit-fire.firebaseapp.com",
    projectId: "fit-kit-fire",
    storageBucket: "fit-kit-fire.appspot.com",
    messagingSenderId: "886314945281",
    appId: "1:886314945281:web:1fdd293be21c09b4966900"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
