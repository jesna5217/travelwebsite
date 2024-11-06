import React, { useState } from 'react'
import './Auth.css'
import login from '../assets/auth1.avif'
import signup from '../assets/auth2.avif'
import { Link, useNavigate } from 'react-router-dom';
import { adminLoginApi, loginApi, registerApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Auth({register}) {
    const registerForm=register?true:false;
const [userData,setUserData]=useState({
  username:"",
  email:"",
  password:""
})

const navigate=useNavigate();
const handleRegister=async(e)=>{

  e.preventDefault();
  const {username,email,password}=userData;
  if(!username || !email || !password){
    toast.error("Please fill the form completely")
  }
else{ 
  const result=await registerApi(userData);
  if(result.status===201){

    setUserData({
      username:"",
  email:"",
  password:""
    })
toast.success(` ${username} registration Successfull`)
navigate('/login')
  }
  else if(result.status==400){
    toast.error('User already exists')
  }
  else{
    toast.error("Something went wrong")
  }
 // console.log(result);
  
}



}
 

const handleLogin=async(e)=>{
  e.preventDefault();

const{email,password}=userData;


if(!email || !password){
  toast.warning("Please fill the form completely")

}

const res=await adminLoginApi(userData)
if(res.status===200){
  sessionStorage.setItem("Admin", JSON.stringify(res.data.data));
      sessionStorage.setItem("token", res.data.token);
      setUserData({
        username: "",
        email: "",
        password: ""
      });
  alert("Admin login successfull")
  navigate('/panel')
}
else if(res.status===401){
  alert("Incorrect password")
}
else if(res.status===404){

try{
  const userResult=await loginApi(userData);
  if(userResult.status===200){

    sessionStorage.setItem("loggedUser", JSON.stringify(userResult.data.data));
      sessionStorage.setItem("token", userResult.data.token);
      setUserData({
        username: "",
        email: "",
        password: ""
      });
      toast.success('Logged in successfully');
      navigate('/'); // Navigate to user dashboard or home
    } else if (userResult.status === 401) {
      toast.error("Invalid email or password");
    } else {
      toast.error('Something went wrong');
    }
  } catch (error) {
    console.error("User login failed", error);
    toast.error('Something went wrong during user login');
  }

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
        <input type="text" placeholder='Username' className='w-90 form-control shadow mb-3' onChange={(e)=>setUserData({...userData,username:e.target.value})} value={userData.username} /></>:
        <div className='text-center '>  <p className='mb-3'>Sign in to your account!</p></div>


            }

          <input type="text" placeholder='Email id' className='w-90 form-control shadow mb-3' onChange={(e)=>setUserData({...userData,email:e.target.value})}   value={userData.email} />
          <input type="password" placeholder='Password'  className='form-control shadow mb-3' onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password}/>
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