import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from './Components/Pages/Header';
import HomePage from './Components/Pages/HomePage';
import BookingPage from './Components/Pages/BookingPage';
import Footer from './Components/Pages/Footer';
import ConfirmedBooking from './Components/MainComponents/ConfirmedBooking';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
         <Header/>
            <ChakraProvider>
               <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/reservation" element={<BookingPage/>}/>
                  <Route path="/confirmation" element={<ConfirmedBooking/>}/>
               </Routes>
            </ChakraProvider>
         <Footer/>
      </Router>
   );
}
export default App;