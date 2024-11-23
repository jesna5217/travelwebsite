import React, { useEffect, useState } from 'react'

import './Review.css'

import { getAllReviewApi } from '../services/allApi';
import Rating from '@mui/material/Rating';
import { BASE_URL } from '../services/baseurl';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
import { div } from 'framer-motion/client';
function Review() {
const [review,setReview]=useState([]);

const getReview=async()=>{
  const res=await getAllReviewApi();
  if(res.status===200){
    setReview(res.data);
    console.log("review",res.data);
    
  }
}
useEffect(()=>{
  getReview()
},[])


  return (
    <>

 <div className="row review-row">
<h1 className='heading ' id='review'>Our Top Reviews</h1>
<div className="col-md-5 review-para" >
    <p className='see textColor'>Lets see what our </p>
    <p className='see textColor'> customers has to say </p>
     <p className='see textColor'>about us ...</p>
  </div>
  <div className="col-md-7">

  <Swiper
  pagination={{
    dynamicBullets: true,
  }}
  autoplay={{
    delay: 3000, // Delay between slides in ms (3000ms = 3s)
    disableOnInteraction: false, // Keeps autoplay active after interaction
  }}
  modules={[Pagination, Autoplay]} // Include Autoplay module here
  className="mySwiper"
>
  {review?.map((item, index) => (
   
     <SwiperSlide key={index} >
     <div className='review-swiper'>
      



        <div className="container">
          <div className="row review-column">
            <div className="col-md-6">
<img  className='pic h-[250px]' src={`${BASE_URL}/uploads/${item.image}`} alt="" style={{borderRadius:"10px"
}} />
            
            </div>
            <div className="col-md-6 d-flex justify-center items-center">
<div className='text-center view'>
<p>"{item.reviewText}"</p>
<Rating className='rating' name="disabled" value={item.tourRating} readOnly />
         <h6>-{item.userName}</h6>
      
</div>

            </div>
          </div>
        </div>
      </div>
      
    </SwiperSlide>
  
  ))}
      
      </Swiper>

  </div>
  
</div>

</>
  )
}

export default Review;