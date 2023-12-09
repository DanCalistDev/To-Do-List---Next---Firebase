import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAlq73XmqUOhxir4N-k8vo9LAGgGq7OMQY",
    authDomain: "plancalist.firebaseapp.com",
    projectId: "plancalist",
});

const db = getFirestore(firebaseApp);

export default db;
