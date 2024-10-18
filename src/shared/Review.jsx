import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Review.css'
import caro1 from "../assets/rev1.avif"
import caro2 from "../assets/rev2.avif"
import caro3 from "../assets/rev3.avif"
import caro4 from "../assets/rev4.jpg"

function Review() {
 
    const options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,              // Enable autoplay
        autoplayTimeout: 2000,       // Time between transitions (in milliseconds)
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 2,
            nav: true,
            loop:false,
            dots:false
          },
          600: {
            items: 4,
            nav: false,
            loop:false,
            dots:false
          },
          1000: {
            items: 5,
            nav: true,
            loop: true,
            dots:false
          },
        },
      };
   
  return (
    <>
  
   
<div className='owl4 mt-5' >
<h1 className='heading ' id='review'>Our Top Reviews</h1>
   <OwlCarousel className='owl-theme owl' loop nav {...options}>
   <div className='item '>
    <img src={caro1} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>
   </div>
   <div className='item '>
    <img src={caro2} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>

   </div>
   
   <div className='item'>
    <img src={caro3} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>

   </div>
   <div className='item'>
    <img src={caro4} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>

   </div>
   <div className='item'>
    <img src={caro1} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>

   </div>
   <div className='item'>
    <img src={caro2} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>

   </div>
   <div className='item'>
    <img src={caro3} alt="" />
   <div> <p>The trip was amazing ! Thankyou DayOut ❤️</p></div>

   </div>
</OwlCarousel>
</div></>
  )
}

export default Review;