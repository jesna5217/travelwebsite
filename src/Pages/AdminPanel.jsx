import React, { useEffect, useState } from 'react'
import './admin.css'


import Sidebar from '../shared/Sidebar'

import { getAllBookingsApi, getAllTour, getAllUsersApi } from '../services/allApi';
import AminProfile from '../shared/AminProfile';
import Content from '../shared/Content';
import Users from '../shared/Users';


function AdminPanel() {

  const[users,setUsers]=useState([]);
  const getAllUsers=async()=>{
    const result=await getAllUsersApi();
    setUsers(result.data)
  
    
  }
  useEffect(()=>{
    getAllUsers()
  },[])


  const[orders,setOrders]=useState([])
  
const getAllOrders=async()=>{
  const res=await getAllBookingsApi();
  if(res.status===200){
    setOrders(res.data)
  }
}
  useEffect(()=>{

getAllOrders()
  },[])



console.log(orders);
const totalPrice = orders.reduce((total, order) => {
  return total + (order.price || 0); 
}, 0);
const price=totalPrice.toFixed(2)
const [tours,setTours]=useState([]);
const getAllTours=async()=>{
  const res=await getAllTour();
  if(res.status===200){
   
    setTours(res.data)  
    } 
}
useEffect(()=>{
  getAllTours()
},[])  

return (
    <>

<div className="body">
<div className='dashboard'>
  <Sidebar/>
  <div className="row dashboard-content ">
   <div className="col-md-12">
   <Content  bookings={orders} price={price} tours={tours}/>

   </div>

   <div className="row">
    <div className="col-md-7">
    <Users/> 
    </div>
    <div className="col-md-5">
    <AminProfile/>
    </div>
   </div>

  </div>
</div>
</div>
</>
  )
}

export default AdminPanel