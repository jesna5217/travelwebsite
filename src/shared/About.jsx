import React from 'react'
import boys from "../assets/boys.avif"
function About() {
  return (
   <div className='row mt-5'>
 <div className="col-md-7 text-center mt-5 about">
 <p>Welcome to <span className='fw-bold'>day <span  className='textColor'>Out.</span></span> – where your adventures begin! Founded by four passionate friends who share a love for exploration and travel, our agency is dedicated to creating unforgettable experiences for every traveler.</p><p>

At Day Out, we believe that travel is more than just a destination; it's about the memories you create along the way. With diverse backgrounds and a wealth of experiences, we’ve come together to curate unique travel packages that cater to every kind of adventurer – whether you’re seeking a serene getaway, an adrenaline-pumping adventure, or a cultural immersion.</p>
<p>
Our mission is simple: to make travel accessible, enjoyable, and enriching for everyone. We take pride in our personalized approach, ensuring that each journey reflects your preferences and interests. From discovering hidden gems to exploring popular attractions, we handle all the details so you can focus on making memories.</p>

 </div>
  <div className="col-md-5">
    <img src={boys} alt="" /></div> 
   </div>
  )
}

export default About