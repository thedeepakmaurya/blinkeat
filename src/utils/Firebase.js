import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { createContext } from "react";

const FirebaseContext = createContext();

const firebaseConfig = {
    apiKey: "AIzaSyA47PCNdn-EzLonVhF6-eNa2yKZGG-ocPI",
    authDomain: "blinkeat-5c29a.firebaseapp.com",
    projectId: "blinkeat-5c29a",
    storageBucket: "blinkeat-5c29a.appspot.com",
    messagingSenderId: "547428511439",
    appId: "1:547428511439:web:ad71dfec64a95a8a2d51ba"
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp);


export const FirebaseProvider = ({ children }) => {

    const addRestaurant = async (email, password, name, role) => {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;

        await setDoc(doc(firestore, 'restaurants', user.uid), {
              email,
              name,
              role,
              uid: user.uid,
        })
    }

    return (
        <FirebaseContext.Provider value={addRestaurant}>
            {children}
        </FirebaseContext.Provider>
    )
}