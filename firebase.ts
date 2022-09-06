// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBS9qb_r8owhAzBfNqign99oceDJFz1dSc',
    authDomain: 'netflix-clone-ml.firebaseapp.com',
    projectId: 'netflix-clone-ml',
    storageBucket: 'netflix-clone-ml.appspot.com',
    messagingSenderId: '49396844692',
    appId: '1:49396844692:web:e6d96fe34a13097004cc81',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
