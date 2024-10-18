import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import avatar from "../assets/admin.jpeg"
import { Link } from 'react-router-dom'
import './side.css'
function Sidebar() {
  return (
<>

  <div className='logo font-bold text-xl text-center mb-3' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif",color:'white'}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>
 
 <div className='admin d-flex '> 
   <div>
   <img src={avatar} alt="" className='h-[50px]' />
   </div>
   <div>
   <h1 className='textColor fs-5 fw-bold font '>Welcome John</h1>
   <p></p>
   </div>
 </div>
 <div className='ps-4 text-light ms-5'><p>dayOut@gmail.com</p></div>
  
<ListGroup className=' group_list ' >
<Link to={'/panel'}><ListGroupItem className='list' style={{backgroundColor:"lightyellow"}}>
  <i className="fa-solid fa-chart-line" ></i> Dashboard
</ListGroupItem></Link>
<Link to={'/users'}><ListGroupItem className='list bg-dark text-light'>
  <i className="fa-regular fa-user"></i> Users
</ListGroupItem></Link>
<Link to={'/details'}><ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-suitcase"></i> Tour Details
</ListGroupItem></Link>
<Link to={'/order'}>
<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-calendar-check"></i> Bookings
</ListGroupItem>
</Link>
<Link to={'/details'}>
<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-map-signs"></i> Update Trips
</ListGroupItem></Link>
<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-regular fa-star"></i> Reviews
</ListGroupItem>

<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-list-check"></i> To do list
</ListGroupItem>
<Link to={'/details'}>
<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-plus"></i> Add Tours
</ListGroupItem>
</Link>
<Link to={'/details'}>
<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-edit"></i> Edit Tours
</ListGroupItem></Link>
<Link to={'/'}>
<ListGroupItem className='list bg-dark text-light'>
  <i className="fa-solid fa-home"></i> Home
</ListGroupItem></Link>
<Link to={'/admin'}>

<ListGroupItem className='list h-[80px] bg-dark text-light'>
  <i className="fa-solid fa-sign-out-alt"></i> Log Out
</ListGroupItem>
</Link>
</ListGroup>

 </>
  )
}

export default Sidebar