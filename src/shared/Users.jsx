import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { deleteUserApi, getAllUsersApi } from '../services/allApi';
import { BASE_URL } from '../services/baseurl';
import './users.css'
import dummy from "../assets/profile.webp"
import { userResponseContext } from '../context/ContextShare';
function Users() {
  const[users,setUsers]=useState([]);
  const {setUserResponse}=useContext(userResponseContext)
  const getAllUsers=async()=>{
    const result=await getAllUsersApi();
    setUsers(result.data)
    console.log(result);
    setUserResponse(result.data)
  }
  useEffect(()=>{
    getAllUsers()
  },[])

  const handleDelete=async(userId)=>{
    
    console.log(userId);
    
    const token=sessionStorage.getItem("token");
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await deleteUserApi(userId,reqHeader);
    if(result.status===200){
    alert("delete sucess");
      getAllUsers()
     
    }
  }
  return (
    <>
<div className="user-list">
  <div className="list-header">

   <h2>Users</h2>
  </div>
  <div className="list-container">
    {
      users.map((user)=>(
       <div className="lists" key={user._id}>
       
        <div className="user-detail d-flex justify-between">
          <img src={user.profile ? `${BASE_URL}/uploads/${user.profile}` :dummy} alt={user.username} />
          <h2 className='fw-bold text'>{user.username}</h2>
       
       </div>
      <div>
      <h2 className='fw-bold text d-flex flex-start'>
          {user.email}
        </h2>
      </div>
       <button  onClick={()=>handleDelete(user._id)}><i className='fa-solid fa-trash text-danger'></i></button>
       </div> 
      ))
    }
  </div>
</div>


</>

  )
}

export default Users

 