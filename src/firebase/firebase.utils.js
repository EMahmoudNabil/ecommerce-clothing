import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    
        apiKey: "AIzaSyDX-2N_hqEZ08drKGKKlnV0xEAy481Z7eI",
        authDomain: "ecommerce-clothing-db-af943.firebaseapp.com",
        projectId: "ecommerce-clothing-db-af943",
        storageBucket: "ecommerce-clothing-db-af943.appspot.com",
        messagingSenderId: "43513502664",
        appId: "1:43513502664:web:665975c5fc0d6a7a457efd"
      
}

firebase.initializeApp(config);


// create User Profile Document
export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };

      



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
