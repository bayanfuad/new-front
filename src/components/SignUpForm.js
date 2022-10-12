import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider';

function SignUpForm() {
  // const {signUp,err} = useContext(authContext);
  const { signUp, authStates } = useContext(authContext);
  return (
    <div className='Signin'>
      <p >Sign Up</p>
      <form className='SigninForm' onSubmit={signUp}>
        <input type='text' name='username' placeholder='Username' className='formInput' required ></input>
        <input type='email' name='email' placeholder='E-mail' className='formInput' required ></input>
        <input type='password' name='password' placeholder='Password' className='formInput' required ></input>
        <input type='password' name='confirmPassword' placeholder='Confirm Password' className='formInput' required ></input>
        <input type='submit' name='submit' value='Submit' className='formSubmit' ></input>
      </form>
      {/* <p id='errMsg'>{err}</p> */}
      <p id='errMsg'>{authStates.err}</p>
    </div>
  )
}

export default SignUpForm

  