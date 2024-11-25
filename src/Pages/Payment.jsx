import React, { useContext, useState } from 'react'
import './payment.css'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { bookingResponseContext } from '../context/ContextShare';


function Payment() {


const navigate=useNavigate()
const[aname,setaName]=useState("");
const [email,setEmail]=useState("");
const [accNo,setAccNo]=useState("");
const[cAccNo,setcAccNo]=useState("");
const [ifsc,setIfsc]=useState("")


const [isaName,setIsaName]=useState(true);
const [isEmail,setIsEmail]=useState(true);
const [isAccNo,setIsAccNo]=useState(true);
const[iscAccNo,setIscAccNo]=useState(true);
const [isIfsc,setIsIfsc]=useState(true)

const getValue=(e)=>{
const {name,value}=e.target;
if(name==="aname"){
  setaName(value)
    setIsaName(/^[A-Za-z\s]+$/.test(value)); 
  }


  if (name === "email") {
    setEmail(value);
    setIsEmail(/\S+@\S+\.\S+/.test(value));
  }

  if (name === "accNo") {
    setAccNo(value);
    setIsAccNo(/^\d{9,18}$/.test(value)); 
  }

  if (name === "cAccNo") {
    setcAccNo(value);
    setIscAccNo(value === accNo); 
  }

  if (name === "ifsc") {
    setIfsc(value);
    setIsIfsc(/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)); 
  }
}
const handlePay=(e)=>{
if(!aname || !email || !accNo ||!cAccNo || !ifsc){
  Swal.fire({
    title: "Error!",
    text: "Please fill in all the fields.",
    icon: "error",
    confirmButtonText: "OK",
    timer: 3000
  });
}

else{




  Swal.fire({
    title: 'Booking Confirmed!',
    text: 'Your booking has been successfully completed.',
    icon: 'success',
    confirmButtonText: 'OK',
    timer: 3000 
  });
navigate('/thankyou')
  setPay({
    name:"",
  email:"",
  accNo:"",
cAccNo:"",
ifsc:""
  })
}
}





  

return (
    <div className='container'>
        <div className='blue-head'></div>
        <div className="pay-box">
            <div className='box1 '>
              
            <div>
            <p>Pay using a checking account</p>
            </div>
            
<div>
<img height='20px' src="	https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg" alt="" />
</div>            
            
            </div>
<form>
          <div className="box-2">
          <h2 className='head-pay'>Please enter the required details</h2>

<div className="row mt-3">
<div className="col-md-1"></div>
<div className="col-md-11">
<div  className='row payrow'>
<div className='col-md-3'>
<label htmlFor="" className='label'>Name of the Payee</label>
</div>
<div className='col-md-3'>
<input type="text" className='input-pay' 
onChange={(e)=>getValue(e)}
value={aname || ""} name='aname'

/>
{
  !isaName &&
  <p className='invalid'>Invalid</p>
}

</div>
</div>
<div  className='row payrow'>
<div className='col-md-3'>
<label htmlFor="" className='label'>Email Address</label>
</div>
<div className='col-md-3'>
<input type="text" className='input-pay'
onChange={(e)=>getValue(e)} name='email'
value={email || ""} />
{
  !isEmail &&
  <p className="invalid">Invalid</p>
}
</div>
</div>

</div>
</div>
          </div>




          <div className="box-3">

            <h2 className='head-pay'>Enter secure payment information</h2>


           <div className="row mt-3">
            <div className="col-md-1"></div>
            <div className="col-md-11">
            <div  className='row payrow'>
<div className='col-md-3'>
<label htmlFor="" className='label'>Account Number</label>
</div>
<div className='col-md-3'>
<input type="text" className='input-pay'
onChange={(e)=>getValue(e)} name='accNo'
value={accNo || ""}  />
{
  !isAccNo && 
  <p className="invalid">Invalid</p>
}
</div>
</div>
<div  className='row payrow'>
<div className='col-md-3'>
<label htmlFor="" className='label'>Confirm Account Number</label>
</div>
<div className='col-md-3'>
<input type="text" className='input-pay'
onChange={(e)=>getValue(e)} name='cAccNo'
value={cAccNo || ""}  />
{
  !iscAccNo && 
  <p className="invalid">Not match as above</p>
}
</div>
</div>

          
            <div>
            <div  className='row payrow'>
<div className='col-md-3'>
<label htmlFor="" className='label'>IFSC Code</label>
</div>
<div className='col-md-3'>
<input type="text" className='input-pay'
onChange={(e)=>getValue(e)} name='ifsc'
value={ifsc || ""}  />
{
  !isIfsc && 
  <p className="invalid">Invalid</p>
}
</div>
</div>
            </div>
            </div>
           </div>
            
          </div>


<div className="box-4">
  <div className="row">
    <div className="col-md-2">
      <div className='policy'><h6>Return to policy</h6></div>
    </div>

    <div className="col-md-10 ">
   
    <div className='d-flex'>
    {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3 me-2">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            
          />
</div> ))}
 
<p> I agree to the terms and conditions of the
  <span> Payment Authorization Agreement</span></p>   </div>

<button className='acc' type='submit'
onClick={handlePay}>Pay using your checking account</button>
    </div>
  </div>
</div>

</form>

        </div>

        <div className='d-flex justify-end me-5  back'>
          <Link to={'/'}>
          <button style={{cursor:"pointer"}}>
            
        
            
            </button></Link></div>
    </div>
  )
}

export default Payment