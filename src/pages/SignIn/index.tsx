import { useState } from 'react';
import { GoogleLogo } from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss';

export function SignIn(){
  const [user, setUser] =  useState<User>({} as User);

  function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return(
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="User profile" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Access your account</h1>
      <span>
        Using social authentication, for example, authentication with Google you<br />
        facilitates the user's life allowing to use your application without registering.
      </span>
      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo />
        Login with Google
      </button>
    </div>
  )
}