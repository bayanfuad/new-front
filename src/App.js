import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import AuthProvider from './contexts/AuthProvider';
import DataProvider from './contexts/DataProvider';
import { Button, useColorMode, VStack } from '@chakra-ui/react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './components/Theme';
import {provider} from 'react-redux';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   

      // <Button
      //   onClick={toggleColorMode}
      //   position='fixed'
      //   top='0'
      //   right='0'
      //   m={4}
      //   bg={colorMode === "light" ? "gray.800" : "gray.300"}
      //   color={colorMode === "light" ? "gray.300" : "gray.800"}
      //   _hover={{ bg: colorMode === "light" ? "gray.700" : "gray.400" }}
      // >
      //   Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      // </Button>


    <AuthProvider>
      <DataProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/login" element={<Register />}></Route>
            <Route exact path='/' element={<Main />}></Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
 
    
  );
}

export default App;