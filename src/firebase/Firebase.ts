import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhm1NWAzdhwt5-qrJnQabJH9-Y8WXYTbg",
  authDomain: "eureka-ab1b1.firebaseapp.com",
  projectId: "eureka-ab1b1",
  storageBucket: "eureka-ab1b1.appspot.com",
  messagingSenderId: "970202512534",
  appId: "1:970202512534:web:73abf80f39085efcdf56b7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';

export { auth };
