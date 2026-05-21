import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyASqnwl0wIDYbpay6A2oir2XQqTZBM4S9Q',
  authDomain: 'discipulado-bol.firebaseapp.com',
  projectId: 'discipulado-bol',
  storageBucket: 'discipulado-bol.firebasestorage.app',
  messagingSenderId: '1084742963010',
  appId: '1:1084742963010:web:29a562261984b2793902db',
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db   = getFirestore(app)
