import React, {useReducer} from 'react'
import { useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import BookingForm from '../MainComponents/BookingForm'



function BookingPage(props) {

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};


const today = new Date ();
const redirect = useNavigate
const [state, dispatch] = useReducer(updateTimes, initializeTimes());


function initializeTimes() {
  return {availableTimes: fetchAPI(today)};
}


let navigate = useNavigate(); 
const submitForm = (formData) =>{ 
  let path = "/confirmation"; 
   navigate(path);}

function updateTimes(state, selectedDate) {
  return {availableTimes: fetchAPI(selectedDate)};
}

function handleDateChange(selectedDate) {
  dispatch(selectedDate);
}

  return (
  <div className="booking page">
    <BookingForm availableTimes={state} dispatch={dispatch} handleDateChange={handleDateChange} submitForm={submitForm}/>
  </div>
  )
}

export default BookingPage