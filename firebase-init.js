import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAay9ozqNbMSyaoVCKVlgh66UmBjoRUGBY",
  authDomain: "megapath-2d9f2.firebaseapp.com",
  projectId: "megapath-2d9f2",
  storageBucket: "megapath-2d9f2.appspot.com",
  messagingSenderId: "639975739542",
  appId: "1:639975739542:web:5ed291036401d2ce5532b7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, provider, db };
