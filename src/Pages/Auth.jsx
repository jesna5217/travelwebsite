import React, { useState } from 'react'
import './Auth.css'
import login from '../assets/login.avif'
import signup from '../assets/signup.avif'
import { Link, useNavigate } from 'react-router-dom';
function Auth({register}) {
    const registerForm=register?true:false;
const [username,setUsername]=useState('');
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate();
const handleRegister=(e)=>{
if(!email || !password || !username){
  alert('Please fill the form completely')
}
else{
  e.preventDefault();
  alert(`You have succesfully registered`)
  console.log(`${username},${password},${email}`);
  navigate('/login')





}
 
}
const handleLogin=(e)=>{
  e.preventDefault();
  alert(`You have succesfully logined`)

  if(email==="dayOut@gmail.com" && password==="dayOut123"){
    navigate('/panel')
  }else{


  navigate('/')
}
}
  return (
  <div style={{height:'100vh',backgroundColor:'lightyellow'}} className='d-flex justify-content-center align-items-center authpage' >
  

<div className=' log_box'>
    <div className="row">
        <div className="col-md-6">
         {
            registerForm?   <img src={signup} alt="" />:   <img src={login} alt="" />
         }
        </div>
        <div className="col-md-6 p-4 d-flex justify-center items-center flex-column day">
            <h1 className='logo font-bold text-xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span>
            </h1>
          <form className='w-100 signin'>
            {
                registerForm?
        <>
        <div className='text-center'>  <p className='mb-3'>Sign up to your account!</p></div>
        <input type="text" placeholder='Username' className='w-90 form-control shadow mb-3' onChange={(e)=>setUsername(e.target.value)} /></>:
        <div className='text-center '>  <p className='mb-3'>Sign in to your account!</p></div>


            }

          <input type="text" placeholder='Email id' className='w-90 form-control shadow mb-3' onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Password'  className='form-control shadow mb-3'onChange={(e)=>setPassword(e.target.value)}/>
{
    registerForm?
    <div><button className='w-100 rounded mb-3' style={{backgroundColor:'rgb(220, 190, 30)',height:'40px'}} type='submit' onClick={handleRegister}>REGISTER</button>
    <p>Already a user ? Then click here to <Link to={'/login'} style={{color:'rgb(220, 190, 30)',fontWeight:'500'}}>LOGIN.</Link></p></div>
    :
    <div><button className='w-100 rounded mb-3'type='submit' style={{backgroundColor:'rgb(220, 190, 30)',height:'40px'}} onClick={handleLogin}>LOG IN</button>
    <p>Not registered yet ? Then click here to <Link to={'/register'} style={{color:'rgb(220, 190, 30)',fontWeight:'500' 
    }}>REGISTER.</Link> </p></div>

}
      
          </form>
          <Link to={'/'}>
          <h1 className='mt-4 font-bold'><i class="fa-solid fa-arrow-left me-2" style={{color:'rgb(220, 190, 30)'}}></i>BACK TO HOME</h1>
</Link>
        </div>
      

    </div>
</div>
  </div>
  )
}

export default Auth