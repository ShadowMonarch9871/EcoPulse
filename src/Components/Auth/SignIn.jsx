import React, { useState } from 'react';
import { app } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './SignIn.css';

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth(app)
   
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log('User created:', userCredential.user);

          })
          .catch((error) => {
            console.error('Error creating user:', error);
          });
      };
    
      const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('User signed in with Google:', user);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error('Error signing in with Google:', errorMessage);
          });
      };


  return (
    <div className="container">
        <div className="signup-page">
    <label htmlFor="">Email</label>
    <input type="email"
    value={email}
    onChange={(e)=> setEmail(e.target.value)} 
    required
    placeholder='enter you email'/>

    <label htmlFor="">Password</label>
    <input type="password" 
    value={password}
    onChange={(e)=> setPassword(e.target.value)} 
    required
    placeholder='enter you Password'/>

    <button onClick={createUser}>SignIn</button>
    <button onClick={signInWithGoogle}><img src="./Icons/google.png"></img>Google</button>
    </div>
    </div>
  )
}

export default SignIn