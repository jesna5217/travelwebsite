import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import day from "../assets/day.jpeg"

import { Link, useNavigate } from 'react-router-dom'
import './side.css'
function Sidebar() {
  const navigate=useNavigate()
  const handleAdminLogOut=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("Admin")
navigate('/')
  }
  return (
<>



<div className="menu">
<div className='logo font-bold text-xl  mb-3' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>
  
  <div className="menu-list">
  <Link to={'/panel'} ><div className="items" style={{ backgroundColor: "#23374d",color:"white"}}>
  <p >
  <i className="fa-solid fa-chart-line" ></i> Dashboard
</p></div></Link>

<Link to={'/details'}><div className='items'>
<p >
  <i className="fa-solid fa-suitcase"></i> Tour Details
</p>
  </div></Link>
<Link to={'/order'}>
<div className="items">
<p >
  <i className="fa-solid fa-calendar-check"></i> Bookings
</p>
</div>
</Link>
<Link to={'/details'}>
<div className="items">
<p>
  <i className="fa-solid fa-map-signs"></i> Update Trips
</p></div></Link>
<Link to={'/details'}>
<div className="items">
<p >
  <i className="fa-solid fa-plus"></i> Add Tours
</p>
</div>
</Link>
<Link to={'/userreview'}>
<div className="items">
<p >
  <i className="fa-solid fa-pen"></i> All Reviews
</p>
</div>
</Link>




<div className="items">
<p lassName='list h-[80px] bg-dark text-light' onClick={handleAdminLogOut}>
  <i className="fa-solid fa-sign-out-alt"></i> Log Out
</p>
</div>
  </div>
</div>

 </>
  )
}

export default Sidebar