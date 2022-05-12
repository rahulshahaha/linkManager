import { initializeApp } from 'firebase/app';
import { getFirestore, doc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



var config = {
  apiKey: "AIzaSyAd9bly3kMUrVRvEXh4LxtvvQpGxVgHxsg",
  authDomain: "link-manager-eca2a.firebaseapp.com",
  projectId: "link-manager-eca2a",
  storageBucket: "link-manager-eca2a.appspot.com",
  messagingSenderId: "668279169408",
  appId: "1:668279169408:web:bc8122d9351b8a07e3a165"
};

initializeApp(config);
const db = getFirestore()
export const auth = getAuth()

export const currentUserID = () => auth.currentUser.uid
// export const getUserDocRef = () => doc(db,'users',currentUserID())
export const getUserDocRef = () => doc(db,'users','HpVZ2mycYKWo0Z8IatC4hRg9LgJ3')

// export const itemsCollection = () => collection(db,'users',currentUserID(),'items')


export const fbSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
}

export const fbSignOut = () => {
  auth.signOut()
}