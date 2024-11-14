import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
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
// import { div } from 'framer-motion/client';
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
const options = {
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
};

  return (
    <>
<div className="row">
<h1 className='heading ' id='review'>Our Top Reviews</h1>
<OwlCarousel className="owl-theme" {...options}>
       {
        review?.map((item)=>(
          <div>
            <img height='300px' className='pic' src={`${BASE_URL}/uploads/${item.image}`} alt="" />
            <div className='review_data d-flex justify-center items-center flex-column'>
          <div><p>"{item.reviewText}"</p></div>
          <div>
            <Rating className='rating' name="disabled" value={item.tourRating} readOnly />
          </div>
          <div className='d-flex'>-<h6>{item.userName}</h6></div>
        </div>
          </div>
        ))
       }
      

        {/* Add more slides as needed */}
      </OwlCarousel>


</div> 

 {/* <div className="row">
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
    <SwiperSlide key={index}>
      <div className='item'>
      
        <div className='review_data d-flex justify-center items-center flex-column'>
        <img height='300px' className='pic' src={`${BASE_URL}/uploads/${item.image}`} alt="" />

          <div><p>"{item.reviewText}"</p></div>
          <div>
            <Rating className='rating' name="disabled" value={item.tourRating} readOnly />
          </div>
          <div className='d-flex'>-<h6>{item.userName}</h6></div>
        </div>
      </div>
    </SwiperSlide>
  ))}
      
      </Swiper>

  </div>
  
</div> */}

</>
  )
}

export default Review;