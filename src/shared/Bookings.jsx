import React, { useEffect, useState } from 'react'
import './Book.css'
import Sidebar from './Sidebar'
import {  getAllBookingsApi } from '../services/allApi'
function Bookings() {
  const [bookingDetails,setBookingDetails]=useState([])
  const getAllBookings=async()=>{
const result=await getAllBookingsApi();
if(result.status===200){
  setBookingDetails(result.data)
}
  }
useEffect(()=>{
getAllBookings()
},[])

  return (
  <>
 {/**/}
     <div className="container pb-5 menu pe-0 ">
<div className="row ">
  <div className="col-md-2 sidebar shadow">
  <Sidebar/>
  </div>
  <div className="col-md-10 booking_data ">

    <div className='all-bookings'><h1 className='fw-bold  fs-3 m-5 text-center'>ALL BOOKINGS</h1></div>
    <div className="row">
    {
      bookingDetails?
      bookingDetails.map((data)=>(
      <>
    
        <div className="col-md-5 ">
        <div className='bookings p-3 mb-3 ms-5'>
<h1 className=' text-center fs-5 fw-bold textColor'>BOOKING DETAILS</h1>
<div className='mt-3'>
<p>Customer Name :  {data.fullName}</p>
<p>Email : {data.userEmail}</p>
<p>Location : {data.tourName}</p>
<p>Booked for : {data.bookAt}</p>
<p>Guests : {data.guestNo}</p>
<p>Amount paid : {data.price} /- </p>


</div>
        </div>
    </div>

    </>
      )):<p>No bookings</p>
    }

</div>
   
  </div>

</div>





        </div></>
 
  )
}

export default Bookings