import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyB662RzucfTqDHGu01jRvUW598sdiF0MU8",
    authDomain: "webflix-e9ed3.firebaseapp.com",
    projectId: "webflix-e9ed3",
    storageBucket: "webflix-e9ed3.appspot.com",
    messagingSenderId: "889466089773",
    appId: "1:889466089773:web:c078d9304d7b5fc804a3a4"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };