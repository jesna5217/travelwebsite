import React, { useEffect, useState } from 'react'
import travel from "../assets/travel.avif"

import girl from "../assets/himage.avif"
import girl2 from "../assets/himage2.avif"
import girl3 from "../assets/himage3.avif"

import './Home.css'

import HomeTours from "../shared/HomeTours"
import About from '../shared/About'
import Review from '../shared/Review'
import Subscription from '../shared/Subscription'
import bg from '../assets/travelbg.avif'

function Homepage() {
 

  return (
    <>
    <div className='w-100 sticky'  style={{background:"antiquewhite"}}>

<img src={bg} alt="" className='h-[500px]'width='100%' />
<h3 className=' tion text-light'>Enjoy your holidays with day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span> !!!</h3>

  </div>
    <div className="contain   w-100">
      
      <div className="row">
        <div className="col-md-5">
            <div  className='content d-flex justify-center items-center flex-column'>
                <p className="para">  Welcome to   <span className='logo font-bold text-xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></span>, your ultimate travel companion! Whether you're dreaming of a serene beach escape, a thrilling adventure,
                     or a cultural city tour, we've got you covered. DayOut is designed to help you find the best destinations, plan the perfect itinerary,
                      and book your dream trips with ease. Let us guide you to hidden gems, must-see attractions, and unforgettable experiences.
                       Your journey starts here!

</p>
            </div>
        </div>
        <div className="col-md-7">
            <div className="images d-flex">
              <div className="box one">
              <img src={girl} alt="" height="100px" />
              </div>
              <div className="box two">
              <img src={girl2} alt="" height="100px" />
              </div>
              <div className="box three">
              <img src={girl3} alt="" height="100px" />
              </div>
            </div>
        </div>

      </div>



<div className="row mt-5">
    <div className="col-md-3 services">
      <h3 className='des'>We Provide</h3> 
    <p>the best service for you...</p>
    </div>
    <div className="col-md-3 provide shadow">
        <div className='headset'><i class="fas fa-headset"></i></div>
        <h1>24/7 Customer Support</h1>
        <p>"Here for you, 24/7 — because your journey never stops!"</p>
    </div>

    <div className="col-md-3 provide shadow">
        <div className="headset"><i class="fas fa-shuttle-van"></i></div><h1>
    Pickup and Drop</h1>
    <p>"Seamless pickup and drop — we've got your journey covered!"</p></div>
    <div className="col-md-3 provide shadow">
        <div className="d-flex">
            <div className="headset"><i class="fas fa-utensils text-gray-700"></i>
            </div>
        </div>
        <h1>
    Food and Accomodation</h1>
    <p>"Delicious food and comfortable accommodation — everything you need for a perfect stay!"</p></div>
    
</div>

<section className='mt-5'>
 <div>
 <h1 className='heading'>Featured Tours</h1>

 </div>
<HomeTours/>
</section>


<section id='about'>
<h1 className='heading '>About Us</h1>

  <About/>
</section>

<section>

  <Review/>
</section>

<section>
<h1 className='heading'>Why choose Us ?</h1>
  <div className="row">
<div className=' mt-5 col-md-4 us'>
  <img src={travel} alt=""  width="500px"/>
</div>
<div className="col-md-8 mt-5 choose">
<div>
  <p><span className='fw-bold'>Friendship and Trust</span>: Our bond as friends is the foundation of our business. We understand the importance of trust in travel planning, and we are committed to treating your journey as if it were our own.</p>
</div>

<div>
<span className='fw-bold'>Local Expertise</span>: With our combined knowledge of various destinations, we offer insider tips and recommendations to enhance your travel experience.
</div>

<div><span className='fw-bold'>Customized Itineraries</span>: Every traveler is unique, and so are our itineraries. We listen to your needs and tailor our packages to create the perfect trip just for you.</div>

<div><span className='fw-bold'>Community Engagement</span>: We are passionate about supporting local communities and promoting sustainable tourism practices. Our tours are designed to benefit the destinations we visit, ensuring that your travels have a positive impact.</div>
  
  
  
  </div>
  </div>
</section>

<section>
  <Subscription/>
</section>
    </div>
      
    
    </>
  )
}

export default Homepage