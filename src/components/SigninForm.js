import React, { useContext } from 'react';
import '../styles/SigninForm.css';
import { authContext } from '../contexts/AuthProvider';
import { VStack, Input,useColorMode} from "@chakra-ui/react";

function SigninForm() {
  const { signIn, err } = useContext(authContext);
  const { colorMode } = useColorMode();
  return (
    <div className='Signin'>
      <p >Sign In</p>
      <form className='SigninForm' onSubmit={signIn}>
      <VStack>
        <Input type='text' name='username' placeholder='Username' className='formInput' required   bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        <Input type='password' name='password' placeholder='Password' className='formInput' required  bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        <Input type='submit' name='submit' value='CONTINUE' className='formSubmit'  bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="gray.300"
                        rounded="md"></Input>
        </VStack>
      </form>
      <p id='errMsg'>{err}</p>
    </div>
  )
}

export default SigninForm
