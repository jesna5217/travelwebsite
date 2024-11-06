import React from 'react'

import './style.css'




function Account({users,bookings,price}) {
  const userNo=users.length;

  const bookNo=bookings.length;

  
 
 

  
  return (
   <>
      <div className='user_number d-flex justify-center items-center '>
    <div className='logo font-bold text-5xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>

    </div>
   
    {/* <div className="row">
      <div className="col-md-1"></div>
    <div className="col-md-2 users ">

      <div className='text-center'><h1>USERS</h1>
      <p>{userNo}</p></div>
    </div>
    <div className="col-md-2 users">
    <div className='text-center'><h1>BOOKINGS</h1>
    <p>{bookNo}</p></div>
    </div>
    <div className="col-md-2 users">
    <div className='text-center'><h1>REVENUE</h1>
    <p>{price}</p></div>
    </div>
    <div className="col-md-4">
      
    </div>
    </div> */}
<div className="row">
<div className="col-md-1"></div>
<div className="col-md-3">
  <div className="users">
  <div className='text-center'><h1>USERS</h1>
  <p>{userNo}</p></div>
  </div>
</div>
<div className="col-md-3">
  <div className="users">
  <div className='text-center'><h1>BOOKINGS</h1>
  <p>{bookNo}</p></div>
  </div>
</div>
<div className="col-md-3">
  <div className="users">
  <div className='text-center'><h1>TOTAL REVENUE</h1>
  <p>{price}</p></div>
  </div>
</div>
</div>

   
  
      </>
  )
}

export default Account