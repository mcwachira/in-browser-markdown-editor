import {initializeApp} from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged,
    //for google sign up and sign in
    GoogleAuthProvider,
    signOut

} from 'firebase/auth'





const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
    appId: import.meta.VITE_FIREBASE_APP_ID, 
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, 
}


const app = initializeApp(firebaseConfig)

//create a new instance of the googleAuth provider
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt:'select_account'
})

