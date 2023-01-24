
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Main/>
      <Footer/>
    </div>
   );
}

export default HomePage;
