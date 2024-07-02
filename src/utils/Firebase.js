import { initializeApp } from "firebase/app";
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



const FirebaseProvider = ({children}) => {

    return (
        <FirebaseContext.Provider value={{}}>
            {children}
        </FirebaseContext.Provider>
    )
}