import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from './Components/Pages/Header';
import HomePage from './Components/Pages/HomePage';
import BookingPage from './Components/Pages/BookingPage';
import Footer from './Components/Pages/Footer';
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
