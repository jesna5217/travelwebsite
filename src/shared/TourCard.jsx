import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../services/baseurl';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './tourCard.css'
import { ToastContainer } from 'react-bootstrap';
function TourCard({tour}) {
  const [token,setToken]=useState("")
  useEffect(()=>{
    if(sessionStorage.token){
      setToken(sessionStorage.token)
    }
  })
  const navigate=useNavigate()
  const handleBooking=()=>{
if(!token){
  alert("Please Login");
  navigate('/login')
}
else{
navigate(`/booking/${tour.id}`)
}
  }
  return (
 <>
 

    
 <div className='mt-5 tour_card '>


<Card  className='shadow card '>
      <Card.Img variant="top" className='card_img' src={`${BASE_URL}/uploads/${tour.tourImage}`} />
      <Card.Body>
       <div className='d-flex justify-between'>
       <h2 className='mb-3'><i className='fa-solid fa-location-dot' style={{color:"brown"}}></i> {tour.city}</h2>
        <div className='rating'>
        <Stack spacing={1}>
      <Rating name="half-rating" className='star_rating' style={{fontSize:'18px'}} readOnly defaultValue={4} precision={0.5} />
     
    </Stack>
        </div>

       </div>
        <Card.Title className='loc'>{tour.title}  {tour.days}D {tour.days-1}N</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <div className='d-flex justify-around card_bottom'>
            <div className='fw-bold money'>₹ {tour.price}<span className='person'>/person</span></div>
        <button className='bn' onClick={handleBooking}>Book Now</button>
        </div>
     
      </Card.Body>
    </Card>




    {/*  */}
 </div>


 
 </>
  )
}

export default TourCard


