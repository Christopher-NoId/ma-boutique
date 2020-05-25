import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {

  apiKey: "AIzaSyCyZKcd2XzKzMnt3OO9yhlWtlNBIykDPnA",
  authDomain: "ma-boutique-7c57a.firebaseapp.com",
  databaseURL: "https://ma-boutique-7c57a.firebaseio.com",
  projectId: "ma-boutique-7c57a",
  storageBucket: "ma-boutique-7c57a.appspot.com",
  messagingSenderId: "776197210129",
  appId: "1:776197210129:web:362b56ef72dc8e05aef1b0",
  measurementId: "G-38WEEEM8BC"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    //on check si le snapshot du user existe déjà
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //si il y en a pas, on crée le nouveau user avec les informations suivantes

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
//permet de toujours enclencher  la fenêtre pop-up google quand on utilise
//GoogleAuthProvider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;