import React from 'react'
import './Footer.css'
import { Container, Row } from 'react-bootstrap'
function Footer() {
  return (
  <>
  <footer>
  

    <div className="d-flex justify-around items-baseline footer">
      <div className="dayout">
<ul> <li>
   <div className='logo font-bold text-lg mb-3' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>
  </li>
  <li>About Us</li>

  <li>Our Team</li>
  <li>Careers</li>
  <li>Press</li>
  <li>Complaince</li>

</ul>
      </div>
      <div className="Need Help">
        <ul>
          <li>

          <div className='logo font-bold text-lg mb-3' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>Need Help</div>
          </li>
          <li>FAQ'S</li>
          <li>Cancellation Policy</li>
         <li>Terms and Conditions</li>
        </ul>
      </div>
<div className='contact'>
  <ul>
    <li>
   <div className='logo font-bold text-lg mb-3' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>Contact Us</div>
      
    </li>
    <li>John Doe</li>
    <li>dayOut Holidays</li>
    <li> India</li>
    <li>Ph no.: 9895000000</li>
   <li>dayOut@gmail.com</li>
  </ul>
</div>
    </div>

<div className='d-flex justify-center items-center text-center flex-column mt-3'>
<div className='logo font-bold text-lg mb-3' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>Connect with Us</div>
<div className='d-flex payment  '>
         
         <i className='fb' style={{ color: 'rgb(57, 87, 154)', fontSize: '25px' }} class="fa-brands fa-facebook me-2"></i>
         <div className='twitter me-2'><i class="fa-brands fa-twitter"></i></div>
         <i style={{ color: 'rgb(237, 56, 51)', fontSize: '25px' }} class="fa-brands fa-google-plus me-2"></i>
         <i class="fa-brands fa-pinterest me-2" style={{ fontSize: '25px', color: 'rgb(205,29,31' }}></i>
         <div className='twitter me-2' style={{ backgroundColor: 'rgb(85, 85, 85)' }}><i class="far fa-envelope" ></i></div>

         <div className='twitter me-2' style={{ backgroundColor: 'rgb(237, 56, 51)' }}><i class="fa-brands fa-youtube"></i></div>
         <div className='twitter me-2' style={{ backgroundColor: 'rgb(233, 27, 144)' }}><i class="fa-brands fa-instagram"></i></div>
         <div className='twitter me-2' style={{ backgroundColor: 'rgb(57, 125, 179)' }}><i class="fa-brands fa-linkedin-in"></i></div>

       </div>
</div>
  
  </footer>
  </>
  )
}

export default Footer
 
