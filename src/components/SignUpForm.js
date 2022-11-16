import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider';
import { VStack, Input,useColorMode} from "@chakra-ui/react";

function SignUpForm() {
  
  const { signUp, authStates } = useContext(authContext);
  const { colorMode } = useColorMode();
  return (
    <div className='Signin'>
      <p >Sign Up</p>
      <form className='SigninForm' onSubmit={signUp}>
        <Input type='text' name='username' placeholder='Username' className='formInput' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        <Input type='email' name='email' placeholder='E-mail' className='formInput' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        <Input type='password' name='password' placeholder='Password' className='formInput' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        <Input type='password' name='confirmPassword' placeholder='Confirm Password' className='formInput' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        <Input type='submit' name='submit' value='Submit' className='formSubmit' bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
      </form>
     
      <p id='errMsg'>{authStates.err}</p>
    </div>
  )
}

export default SignUpForm

  