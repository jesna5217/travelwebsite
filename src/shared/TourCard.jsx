import React from 'react'

import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './tourCard.css'
function TourCard({tour}) {
  
  return (
 <>
 

    
 <div className='mt-5 tour_card '>


 <Link to={`/booking/${tour.id}`}><Card  className='shadow card '>
      <Card.Img variant="top" className='card_img' src={tour.photo} />
      <Card.Body>
       <div className='d-flex justify-between'>
       <h2 className='mb-3'><i className='fa-solid fa-location-dot' style={{color:"brown"}}></i> {tour.city}</h2>
        <div className='rating'>
        <Stack spacing={1}>
      <Rating name="half-rating" className='star_rating' style={{fontSize:'18px'}} readOnly defaultValue={tour.avgRating} precision={0.5} />
     
    </Stack>
        </div>

       </div>
        <Card.Title className='loc'>{tour.title}  {tour.days}D {tour.days-1}N</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <div className='d-flex justify-around card_bottom'>
            <div className='fw-bold money'>₹ {tour.price}<span className='person'>/person</span></div>
       <Link to={`/booking/${tour.id}`}> <button className='btn'><span  className='book'><u>Book now</u></span></button></Link>
        </div>
     
      </Card.Body>
    </Card>

</Link>


    {/*  */}
 </div>



 
 </>
  )
}

export default TourCard


