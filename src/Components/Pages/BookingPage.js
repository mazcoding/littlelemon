import React, {useReducer} from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import BookingForm from '../MainComponents/BookingForm'



function BookingPage() {

  const [date, setDate] = useState("");



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

  function updateTimes(state) {
    return {availableTimes: [ "18:00", "19:00",  "21:00", "22:00"]}
}

const handleChange = (e) => {
  setDate(e);
  dispatch(e);
 }

  return (
  <div className="booking page">
    <BookingForm availableTimes={state} setDate={setDate} date={date} dispatch={dispatch} handleDateChange={handleChange} submitForm={submitForm}/>
  </div>
  )
}

export default BookingPage