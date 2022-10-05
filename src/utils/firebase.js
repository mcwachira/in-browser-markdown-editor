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


import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    serverTimestamp,
    collection,
    writeBatch,
    query,
    getDocs,

} from 'firebase/firestore'



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


//Initialize our firebase db

const db = getFirestore()


//function to create and store sign up users in a users collection in our db

export const CreateUserDocumentFromAuth = async(userAuth, additionalInfo={} ) => {

    //1. first check if the user exist and if  exist
    if(!userAuth) return
    

    //2. create a document reference for our user auth if  it exist

    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    

    //3 .create a snapshot of the data and check if it exist in the db
    const userSnapShot = await getDoc(userDocRef)


    //create one iff it does not exist
    if(!userSnapShot.doc()){
     const {displayName, email} = userAuth;
     const createdAt = serverTimestamp()
     console.log(createdAt)

     try{
      
        //you can also add the document directly 
         // await setDoc(doc(db, 'users', userAuth), {   displayName,
        // email,
           //  createdAt
//})

        //adding a new document to our collection containing the display name and email
        //if the document does not exist it will be created


        //to use setDoc you need a specific id
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInfo

        })
     }catch(error){

        console.log('error creating document', error)
     }
    }


    return userDocRef;

}