import React from 'react'
import { useState,useReducer } from 'react';
import Bookingcomponent from '../components/Bookingcomponent';
import { fetchAPI,submitAPI } from '../utils/api';
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const [formData,setFormData]=useState({
    reservedate:"",
    guestnum:"",
    occasion:"",
    reservetime:""
  })
  const navigate = useNavigate();


const handleUserInput = (e) =>{
    setFormData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value, // Using the name to dynamically update the right state
      }));
      if(e.target.name==="reservedate"){
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value })
      }
  }
  const date  = new Date()
 
  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }


  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    submitForm(formData);
}
  
  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

  return (
    <>
        <main className='bookcontainer'>
            <div className='reserve'>
                <p>Reservation Form</p>
            </div>
            <Bookingcomponent formData={formData}
                              availableTimes={availableTimes}
                              handleUserInput={handleUserInput}
                              handleSubmit={handleSubmit}/>
        </main>
    </>
  )
}

export default BookingPage