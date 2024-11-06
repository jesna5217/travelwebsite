import React, { useEffect, useState } from 'react'
import './admin.css'


import Sidebar from '../shared/Sidebar'

import { getAllBookingsApi, getAllUsersApi } from '../services/allApi';
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

  return (
    <>

<div className="body">
<div className='dashboard'>
  <Sidebar/>
  <div className="row dashboard-content ">
   <div className="col-md-7">
   <Content  bookings={orders} price={price}/>
   <Users/>
   </div>
  <div className="col-md-5">
  <AminProfile/>
  </div>
  </div>
</div>
</div>
</>
  )
}

export default AdminPanel