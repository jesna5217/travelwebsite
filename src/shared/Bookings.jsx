import React from 'react'
import './Book.css'
import Sidebar from './Sidebar'
function Bookings() {
  return (
  <>
 {/**/}
     <div className="container pb-5 menu pe-0 bg-dark text-light">
<div className="row ">
  <div className="col-md-2 sidebar shadow">
  <Sidebar/>
  </div>
  <div className="col-md-10 booking_data ">

    <h1 className='fw-bold textColor fs-3 m-5 text-center'>ALL BOOKINGS</h1>
  <div className="row">
    <div className="col-md-1 "></div>
    <div className="col-md-5 ">
        <div className='bookings p-3'>
<h1 className=' text-center fs-5 fw-bold'>BOOKING DETAILS</h1>
<div className='mt-3'>
<p>Customer Name :  Jesna Jose</p>
<p>Location : Goa</p>
<p>From : Nov 21</p>
<p>To : Nov 24</p>
<p>Amount paid : 3999 /- </p>

<button className='btn btn-warning'>DELETE</button>
</div>
        </div>
    </div>


    <div className="col-md-5 ">
        <div className='bookings p-3'>
<h1 className=' text-center fs-5 fw-bold'>BOOKING DETAILS</h1>
<div className='mt-3'>
<p>Customer Name :  Jesna Jose</p>
<p>Location : Goa</p>
<p>From : Nov 21</p>
<p>To : Nov 24</p>
<p>Amount paid : 3999 /- </p>

<button className='btn btn-warning'>DELETE</button>
</div>
        </div>
    </div>
    <div className="col-md-1"></div>
 </div> 
  </div>

</div>





        </div></>
 
  )
}

export default Bookings