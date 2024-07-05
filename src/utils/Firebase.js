import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";

const FirebaseContext = createContext();

//custom hook
export const useFirebase = () => useContext(FirebaseContext)

const firebaseConfig = {
    apiKey: "AIzaSyA47PCNdn-EzLonVhF6-eNa2yKZGG-ocPI",
    authDomain: "blinkeat-5c29a.firebaseapp.com",
    projectId: "blinkeat-5c29a",
    storageBucket: "blinkeat-5c29a.appspot.com",
    messagingSenderId: "547428511439",
    appId: "1:547428511439:web:ad71dfec64a95a8a2d51ba"
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

//Helper function to get role

const getUserRole = async (id) => {
    const userDoc = await getDoc(doc(firestore, 'users', id));
    if (userDoc.exists()) return 'user';

    const restaurantDoc = await getDoc(doc(firestore, 'restaurants', id));
    if (restaurantDoc.exists()) return 'restaurant';

    return null;
}

export const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [role, setRole] = useState();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, async (authUser) => {
            if (authUser) {
                setUser(authUser);
                const userRole = await getUserRole(authUser.uid);
                setRole(userRole);

            } else {
                setUser(null);
                setRole(null);
            }
        });
        return unsubscribe;

    }, []);


    const userSignUp = async (email, password, firstname, lastname, contact, address, city, country, pincode, role) => {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;

        await setDoc(doc(firestore, 'users', user.uid), {
            email,
            firstname,
            lastname,
            contact,
            address,
            city,
            country,
            pincode,
            role,
        })
    }

    const addRestaurant = async (email, password, name, address, city, state, country, contact, role, logo) => {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;

        const imageRef = ref(storage, `uploads/images/${Date.now()}-${name}`);
        const uploadResult = await uploadBytes(imageRef, logo)

        await setDoc(doc(firestore, 'restaurants', user.uid), {
            email,
            name,
            address,
            city,
            state,
            country,
            contact,
            role,
            logo: uploadResult.ref.fullPath,
        })
    }

    const addFoodItems = async (name, description, ingredient, quantity, image, price) => {
        const imageRef = ref(storage, `uploads/items/${Date.now()}-${name}`);
        const uploadResult = await uploadBytes(imageRef, image)

        await addDoc(collection(firestore, 'items'), {
            name,
            description,
            ingredient,
            quantity,
            image: uploadResult.ref.fullPath,
            price,
            restaurantId: user.uid,
        })
    }


    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const signOut = () => {
        firebaseAuth.signOut().then(() => setUser(null));
    }

    const getImageUrl = (path) => {
        return getDownloadURL(ref(storage, path))
    }

    return (
        <FirebaseContext.Provider value={{ userSignUp, signIn, signOut, addRestaurant, addFoodItems, getImageUrl, firestore, user, role }}>
            {children}
        </FirebaseContext.Provider>
    )
}