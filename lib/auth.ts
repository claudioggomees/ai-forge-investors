import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from './firebase'

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Google sign-in error:', error)
    throw error
  }
}

export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    return result.user
  } catch (error) {
    console.error('Github sign-in error:', error)
    throw error
  }
}

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result.user
  } catch (error) {
    console.error('Email sign-in error:', error)
    throw error
  }
}

export const createAccount = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return result.user
  } catch (error) {
    console.error('Account creation error:', error)
    throw error
  }
}