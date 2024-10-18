import React, { useState } from 'react'
import './bookingPackage.css'
import { FormGroup,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function BookingPackage({tour}) {
    const {price,reviews,avgRating}=tour;
    const[credentials,setCredentials]=useState({
        usedId:"1",
        userEmail:'example@gmail.com',
        fullName:'',
        phone:'',
        guestNo:"",
        bookAt:''
    })
    const navigate=useNavigate()
    const handleCredentials=(e)=>{
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }
    const handleCheckOut=(e)=>{
        e.preventDefault()
        console.log (credentials);
        navigate("/thankyou")
    }
  return (
<>
<div className="booking ">
    <div className="booking_top d-flex items-center justify-between">
        <h3 className='fs-3  fw-bold' >₹ {price}<span className='person'>/person</span></h3>
        <span>
        <div className='rating d-flex '>
       
    <p className=' text-xs'><i className='fa-solid fa-star textColor'></i>{avgRating}({reviews.length})</p>
        </div> 
            </span></div>
            
            {/*booking form  */}
            <Form className='details_booking'>
                <FormGroup>
                    <h1>Enter Details</h1>
<input type="text" placeholder='Full name' name='fullName' value={credentials.fullName} onChange={handleCredentials} />
<input type="number" placeholder='Contact number' name='phone' value={credentials.phone} onChange={handleCredentials} />
       <div>
        <input type="date" style={{fontSize:"12px",color:"grey"}} className='date ' name='bookAt' value={credentials.bookAt} onChange={handleCredentials} />
        <input type="number" placeholder='Guest'className='date' min="1" name='guestNo' value={credentials.guestNo}  onChange={handleCredentials} />
        </div>         </FormGroup>
            </Form>


            <div className="booking_bottom ps-3">
            <h1 className='font textColor fs-5 '>AMOUNT</h1>
               
               
                <div>
                   
                    <p>₹{price} × {credentials.guestNo || 1}</p>
                    <p>₹{price * (credentials.guestNo || 1)}</p>
                </div>
                <div>
                    <h2>GST + Service Charge</h2>
                    <p>₹ 314.13</p>
                </div>
               
                <div>
                    <h2 className='fw-bold'>Total</h2>
                    <p className='fw-bold'>₹ {(price * (credentials.guestNo || 1)) + 314.13}</p>
                </div>
                <button className='w-100 mt-4 check_out' type='submit' onClick={handleCheckOut}>CHECK OUT</button>
            </div>
            </div></>
  )
}

export default BookingPackage