import React from 'react'
import './adminheader.css'
import { Menu, MenuItem} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css'
import { Link ,useNavigate} from 'react-router-dom';
function AdminHeader() {
    const navigate=useNavigate()
    const handleAdminLogOut=()=>{
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("Admin")
  navigate('/')
    }
  return (
    <div className="content-header d-flex">
 <div className='me-5 dashbar'>
 <Menu menuButton={<button ><i class="fa-solid fa-bars"></i></button>} transition>
      <MenuItem>
      <Link to={'/panel'} ><div className="items" >
  <p >
  <i className="fa-solid fa-chart-line" ></i> Dashboard
</p></div></Link></MenuItem>
<MenuItem>
<Link to={'/details'}><div className='items'>
<p >
  <i className="fa-solid fa-suitcase"></i> Tour Details
</p>
  </div></Link>
</MenuItem>
<MenuItem>
<Link to={'/order'}>
<div className="items">
<p >
  <i className="fa-solid fa-calendar-check"></i> Bookings
</p>
</div>
</Link>
</MenuItem>
<MenuItem>
<Link to={'/details'}>
<div className="items">
<p>
  <i className="fa-solid fa-map-signs"></i> Update Trips
</p></div></Link>
</MenuItem>
<MenuItem>
<Link to={'/details'}>
<div className="items">
<p >
  <i className="fa-solid fa-plus"></i> Add Tours
</p>
</div>
</Link>

</MenuItem>
<MenuItem>
<Link to={'/userreview'}>
<div className="items">
<p >
  <i className="fa-solid fa-pen"></i> All Reviews
</p>
</div>
</Link>

</MenuItem>
<MenuItem>
<div className="items">
<p lassName='list h-[80px] bg-dark text-light' onClick={handleAdminLogOut}>
  <i className="fa-solid fa-sign-out-alt"></i> Log Out
</p>
</div>
</MenuItem>
    </Menu>
 </div>

     
      <h1 className='header-title'>Dashboard</h1>

      
       
        
    </div>
  )
}

export default AdminHeader