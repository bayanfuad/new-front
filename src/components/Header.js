import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider'
import { When } from 'react-if';
import cookies from 'react-cookies'
import { Box, HStack, Button, Text, useColorMode} from "@chakra-ui/react";


function Header() {

  const { logOut, isAuth } = useContext(authContext);
  const { colorMode } = useColorMode();
  return (
    <Box display='flex' justifyContent='flex-end'>
      <HStack>
        <When condition={isAuth}>
          <Text>Welcome {cookies.load('username')}</Text>
          <Button onClick={logOut}  bg={colorMode === "light" ? "blue.800" : "blue.200"}
              color={colorMode === "light" ? "pink.200" : "pink.800"}
              _hover={{ bg: colorMode === "light" ? "pink.700" : "pink.300" }}
              ml="1rem">Log Out</Button>
        </When>
      </HStack>
    </Box>
  )
}
export default Header;