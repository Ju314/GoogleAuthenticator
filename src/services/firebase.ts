import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrGFKialROufAixrBWwQi6meS-OihDc_s",
  authDomain: "auth-a0f14.firebaseapp.com",
  projectId: "auth-a0f14",
  storageBucket: "auth-a0f14.appspot.com",
  messagingSenderId: "1033109564712",
  appId: "1:1033109564712:web:a918c00a5527913131741d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);