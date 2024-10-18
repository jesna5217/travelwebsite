import React, { useState } from 'react'
import './Auth.css'
import login from '../assets/login.avif'
import signup from '../assets/signup.avif'
import { Link, useNavigate } from 'react-router-dom';
function LoginAdmin() {
  const [adminEmail,setAdminEmail]=useState("");
  const [adminPassword,setAdminPassword]=useState("");
  const navigate=useNavigate()
  const handleAdminLogin=(e)=>{
e.preventDefault();
if(!adminEmail || !adminPassword){
  alert("Please enter full details")
}
else{
  if(adminEmail==="dayOut@gmail.com" && adminPassword==="dayOut123"){
    navigate("/panel")
  }
  else{
    alert("Invalid email or password")
  }
}
  }
  return (
  <div style={{height:'100vh',backgroundColor:'lightyellow'}} className='d-flex justify-content-center align-items-center'>
  

<div className=' log_box'>
    <div className="row">
        <div className="col-md-6">
         <img src={login} alt="" />
         
        </div>
        <div className="col-md-6 p-4 d-flex justify-center items-center flex-column">
            <h1 className='logo font-bold text-xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span>
            </h1>
          <form className='w-100'>
          
        <div className='text-center'>  <p className='mb-3'>Sign in to admin account!</p></div>


            
          <input type="text" placeholder='Email id' className='w-90 form-control shadow mb-3' onChange={(e)=>setAdminEmail(e.target.value)} />
          <input type="password" placeholder='Password'  className='form-control shadow mb-3' onChange={(e)=>setAdminPassword(e.target.value)} />

 <button className='w-100 rounded mb-3'type='submit' style={{backgroundColor:'rgb(220, 190, 30)',height:'40px'}} onClick={handleAdminLogin}>LOG IN</button>
  
  
          </form>
          <Link to={'/'}>
          <h1 className='mt-4 font-bold'><i class="fa-solid fa-arrow-left me-2" style={{color:'rgb(220, 190, 30)'}}></i>GO TO HOMEPAGE</h1>
</Link>
        </div>
      

    </div>
</div>
  </div>
  )
}

export default LoginAdmin