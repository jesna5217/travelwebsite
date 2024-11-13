import React, { useEffect, useState } from 'react'
import './Account.css'
import pro from "../assets/man2.avif"
import { getBookingApi, getUserByIdApi, updateProfileApi} from '../services/allApi';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import nil from "../assets/noorder.avif"
import Swal from 'sweetalert2';


function UserAccount() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [token,setToken]=useState('');
useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))

  }
},[])
const [userD,setUserD]=useState({})
    const [bookings, setBookings] = useState([])
    
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const userId = loggedUser._id;
    const[user,setUser]=useState({});
    const getUserById=async(id)=>{
        const res=await getUserByIdApi(id);
        if(res.status===200){
setUser(res.data);
console.log(user);

        }
    }
    useEffect(()=>{
        getUserById(userId)
    },[userId])
    const getBookingDetails = async (userId) => {
        const result = await getBookingApi(userId);

        if (result.status === 200) {
            setBookings(result.data);

        }
    }
    useEffect(() => {
        getBookingDetails(userId)
    }, [userId])

const[preview,setPreview]=useState("");
useEffect(()=>{
    if(userD.profile){
      setPreview(URL.createObjectURL(userD.profile))
    }
  },[userD.profile])
  

   const handleChange=async(e)=>{

    e.preventDefault();
    const{profile}=userD;
   if(!profile){
    Swal.fire({
        title: 'Please select an image!',
        text: 'You need to choose an image to upload.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
   }
   else{
    const reqBody=new FormData();
    reqBody.append("profile",profile)
    const reqHeader={
        'Content-Type':'multipart/form-data',
        'Authorization':`Bearer ${token}`
      }
   const res=await updateProfileApi(userId,reqBody,reqHeader)
if(res.status===200){
    handleClose()
   
    const uploadedImageUrl = URL.createObjectURL(profile);
    setPreview(uploadedImageUrl);
    const updatedUser = { ...user, profile: uploadedImageUrl }; // or the new profile URL from the response
    setUser(updatedUser);
     Swal.fire({
        title: 'Profile Image Uploaded!',
        text: 'Your profile image has been successfully updated.',
        icon: 'success',
        confirmButtonText: 'Cool'
      });

}
   }
   }


    return (
        <>
          
<div className="container acc-row">


    <div className="row ">
      <div className="col-md-3 account">
      <div className='logos font-bold text-xl text-center user-logo' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>
      <div className='text-center'>

<label htmlFor="upload">
    <input type="file"  style={{ display: 'none' }} required 
  />
    <img src={preview || (user.profile ? `${BASE_URL}/uploads/${user.profile}` : pro)}  alt="" className='h-[150px]' width="150px" style={{borderRadius:"50%"}}/>
</label>

</div>

<div className='text-center'>
    <h1>{user.username}</h1>
    <p>{user.email}</p>
</div>

<div className="text-cente but" >
{
    !user.profile &&
    <button onClick={handleShow} className='btn btn-outline-warning'><span style={{color:"brown"}}><i class="fa-solid fa-camera me-2"></i>IMAGE UPLOAD</span></button>
}
</div>


      </div>


<div className="col-md-8 order-acc">

<div className='p-3 order-head d-flex  justify-center flex-column'>  <h2 className='fs-3 fw-bold'>MY ORDERS</h2>
                           
                           {
                              bookings?.length>0? bookings.map((item) => (  <div >
                                   <div className='border p-3 mt-3 booking-details'>
                                  <div className='order-data'>     <h6 className='fs-5 '>Order Details</h6></div>
                                       <p><span className='textColor fw-bold'>{item.tourName.toUpperCase()}</span></p>
                                       <p>Amount Paid :  ₹ {item.price}</p>
                                       <p>Guests :{item.guestNo}</p>
                                       <p>Booked for :{(item.bookAt)}</p>
                                       
                                      
                                   </div>    </div>       
                               )):<div className='d-flex justify-center items-center flex-column mt-2'><img style={{borderRadius:"20px"}} src={nil} alt="" className='h-[300px]' />
                               <p className='fs-5' style={{color:'brown'}}>Book a holiday!!!</p></div>

                           }

</div>



</div>

    </div>
</div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE PROFILE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
    <label htmlFor="upload">
    <input type="file" id='upload' style={{ display: 'none' }} required  
    onChange={(e)=>setUserD({...user,profile:e.target.files[0]})}
/>
<img src={preview?preview:pro} alt="" className='h-[200px]' width="200px" style={{borderRadius:"50%"}}/>
    
</label>
    </div>
    <div className="col-md-4">
        
    </div>

</div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={(e)=>handleChange(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default UserAccount