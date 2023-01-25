import React from 'react'
import {useState} from 'react'
import BookingForm from '../MainComponents/BookingForm'


function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState("");

  const updateTimes = () => {

  }

  return (
  <div className="booking page">
    <BookingForm/>
  </div>
  )
}

export default BookingPage