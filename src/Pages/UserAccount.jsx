import React, { useEffect, useState } from 'react'
import './Account.css'
import pro from "../assets/profile.webp"
import { getBookingApi, getUserByIdApi, updateProfileApi} from '../services/allApi';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
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
    alert("Please select an image")
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
    alert("Profile Image Uploaded Successfully");
    const uploadedImageUrl = URL.createObjectURL(profile);
    setPreview(uploadedImageUrl);
    const updatedUser = { ...user, profile: uploadedImageUrl }; // or the new profile URL from the response
    setUser(updatedUser);

}
   }
   }


    return (
        <>
            <div className="container pt-0">
                <div className="row w-100 d-flex justify-center items-center">

                    <div className="account ">
                    <div className='text-center'>

<label htmlFor="upload">
    <input type="file"  style={{ display: 'none' }} required 
  />
    <img src={preview || (user.profile ? `${BASE_URL}/uploads/${user.profile}` : pro)}  alt="" className='h-[200px]' width="200px" style={{borderRadius:"50%"}}/>
</label>

</div>
                        <div className='p-2 '>
                            <div className='text-center'>
                                <h2 className='textColor'>{user.username}</h2>
                                <p>{user.email}</p>
                              

         
{
    !user.profile &&
    <button onClick={handleShow} className='btn btn-outline-warning'>IMAGE UPLOAD</button>
}


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
                            </div>

                
                        </div>
                 





                        
                        <hr />

                      
                        <div className='p-3 order-head d-flex  justify-center flex-column'>  <h2 className='fs-4'>My Orders</h2>
                           
                                {
                                   bookings.length>0? bookings.map((item) => (  <div >
                                        <div className='border p-3 mt-3'>
                                            <h6>Package :<span className='textColor fw-bold'>{item.tourName}</span></h6>
                                            <p>Amount Paid : ₹ {item.price}</p>
                                            <p>Guests :{item.guestNo}</p>
                                            <p>Date :{(item.bookAt)}</p>
                                        </div>    </div>       
                                    )):<p>No Orders</p>

                                }

</div>
                        








              
                    </div>

                </div>


            </div>


        </>
    )
}

export default UserAccount