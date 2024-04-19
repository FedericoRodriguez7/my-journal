import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9x2N2WaG91sJwe-me0UWGoWXZ2C_vqag",
  authDomain: "react-app-journal-7c180.firebaseapp.com",
  projectId: "react-app-journal-7c180",
  storageBucket: "react-app-journal-7c180.appspot.com",
  messagingSenderId: "166840584465",
  appId: "1:166840584465:web:265aca647ed14cdd3424b0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {
  db,
  provider,
    auth
};