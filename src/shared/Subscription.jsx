import React from 'react'

function Subscription() {
  return (
<div className='subscribe row '>
    <div className="col-md-6 w-100 d-flex justify-center items-center fs-2 fw-bold text-center" style={{color:'black'}}>
<p>Subscribe to our YouTube channel for instant updates !</p>

    </div>
    <div className="col-md-6 d-flex justify-center items-center"><form action="">
      <input type="text" name="" id="" placeholder='Enter your email id' />
    <button className='btn btn-danger ms-3 mb-2 subs'  >SUBSCRIBE <i class="fab fa-youtube"></i></button>
    </form></div>
  </div>
  )
}

export default Subscription