import React from 'react'
import avatar from "../assets/admin.jpeg"
import { ListGroup, ListGroupItem } from 'react-bootstrap'
function Account() {
  return (
   <>
      <div className='user_number d-flex justify-center items-center '>
    <div className='logo font-bold text-5xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>

    </div>
    <div className='d-flex p-5 gap-5'>
      <div className="account d-flex justify-center items-center flex-column p-3" style={{border:"1px solid white"}}>
    <div><img src={avatar} alt="" className='h-[170px] mb-3'  /></div>
    <div>
      <ListGroup >
        <ListGroupItem style={{border:"none"}} className='list_items textColor bg-dark'>John Doe</ListGroupItem>
        <ListGroupItem style={{border:"none"}} className='list_items bg-dark text-light'>email : dayOut@gmail.com</ListGroupItem>
        <ListGroupItem style={{border:"none"}} className='list_items  bg-dark text-light'>Phone number : 9895000000</ListGroupItem>
        <ListGroupItem style={{border:"none"}} className='list_items  bg-dark text-light'>Place : India</ListGroupItem>
        <ListGroupItem style={{border:"none"}} className='list_items  bg-dark text-light'><button className='btn btn-warning '>Change Password</button></ListGroupItem>

      </ListGroup>
    </div>
      </div>
      <div className="details_total p-5">
      <div className="quick-stats fs-4">
        <h1 className='textColor text-center fw-bold mb-3 font'>DETAILS</h1>
  <div className='text-light'>Total Users: 500</div>
  <div className='text-light '>Total Bookings: 1500</div>
  <div className='text-light '>Total Revenue: ₹ 50,000</div>
  <div className='text-light '>Total Tours: 20</div>
</div>

      </div>
    </div></>
  )
}

export default Account