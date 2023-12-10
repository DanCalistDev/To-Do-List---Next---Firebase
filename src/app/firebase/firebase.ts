import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "plancalist.firebaseapp.com",
    projectId: "plancalist",
});

const db = getFirestore(firebaseApp);

export default db;
