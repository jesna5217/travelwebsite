import React, { useContext } from 'react'
import AdminHeader from './AdminHeader'
import './content.css'
import Users from './Users'
import { userResponseContext } from '../context/ContextShare'
function Content({bookings,price,tours}) {
    const{userResponse,setUserResponse}=useContext(userResponseContext)
 const user=userResponse.length
   const order=bookings.length
    const tour=tours.length;
    const data=[{
        id:0,
        name:"Users",
        number:user,
        icon:"fa-regular fa-user"
    },
{
    id:1,
        name:"Bookings",
        number:order,
        icon:"fa-solid fa-calendar-check"
},
{
    id:2,
        name:"Revenue",
        number:price,
        icon:"fas fa-coins"
},{
    id:3,
        name:"Tours",
        number:tour,
        icon:"fa fa-globe"
}]
  return (
  <div className="content">
    <AdminHeader/>


    {/* card */}
    <div className="card-container">
{
    data.map((item)=>(
        <div className="cards" >
            <div className="card-icon"><i className={item.icon}></i></div>
            <div className="card-title"><h2>
                {item.name} : {item.number}</h2></div>
        </div>
    ))
}
    </div>


    {/* <Users/> */}
  </div>
  )
}

export default Content