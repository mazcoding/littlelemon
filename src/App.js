import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from './Components/MainComponents/Header';
import Main from './Components/MainComponents/Main';
import Footer from './Components/MainComponents/Footer';

function App() {
  return (
   <ChakraProvider>
      <Header/>
      <Main/>
      <Footer/>
   </ChakraProvider>
   );
}

export default App;
