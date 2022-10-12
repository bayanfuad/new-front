import React, { useContext } from 'react';
import '../styles/Register.css';
import { authContext } from '../contexts/AuthProvider';


function RegisterHero() {
  const { goToSignUp } = useContext(authContext);
  return (
    <div className='registerHero'>
      <div className='heroTop'>
      </div>
      <div className='heroMid'>
        <h3>Welcome to  <span id='siteName'>posts and comments White-Board</span> </h3>
        <p>Don't have an account <a  onClick={goToSignUp}>SignUp</a></p>
      </div>
      <div className='heroBot'>
      </div>
    </div>
  )
}

export default RegisterHero