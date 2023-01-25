import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from './Components/MainComponents/Header';
import HomePage from './Components/MainComponents/HomePage';
import BookingPage from './Components/MainComponents/BookingPage';
import Footer from './Components/MainComponents/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
         <div className='App'>
            <Header/>
               <ChakraProvider>
               <div className="content">
                  <Routes>
                     <Route path="/" element={ <HomePage />} />
                     <Route path="/reservation" element={ <BookingPage/>} />
                  </Routes>
               </div>
               </ChakraProvider>
            <Footer/>   
         </div>
      </Router>
   );
}

export default App;
