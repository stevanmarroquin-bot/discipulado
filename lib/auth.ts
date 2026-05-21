import {
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { auth } from './firebase'

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)

export const signOut = () => fbSignOut(auth)

export const onAuthChange = (cb: (user: User | null) => void) =>
  onAuthStateChanged(auth, cb)
