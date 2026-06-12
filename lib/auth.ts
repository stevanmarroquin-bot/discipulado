import {
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User,
} from 'firebase/auth'
import { auth } from './firebase'

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)

export const signOut = () => fbSignOut(auth)

export const onAuthChange = (cb: (user: User | null) => void) =>
  onAuthStateChanged(auth, cb)

export const resetPassword = (email: string) =>
  sendPasswordResetEmail(auth, email)
