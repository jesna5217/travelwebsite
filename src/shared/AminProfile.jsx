import React, { useEffect, useState } from 'react'
import './profile.css'
import { adminLoginApi, getAdminApi, updateAdminApi } from '../services/allApi'
import adminProfile from "../assets/auth1.avif";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

function AminProfile() {
const [admin,setAdmin]=useState({});
const [show, setShow] = useState(false);
const [modalContent, setModalContent] = useState("edit");
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const[detail,setDetail]=useState({
    email:"",
    password:""
});
 
const [password,setPassword]=useState("")
const [preview,setPreview]=useState("")
    const getAdmin=async()=>{
const token=sessionStorage.getItem('token');

    const reqHeader={
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
        const res=await getAdminApi(reqHeader);
        if(res.status===200){
          
            setAdmin(res.data[0]);
               
            
        }
    }

    
    useEffect(()=>{
        getAdmin()
    },[])

    const handleCheck=async()=>{
        
        const res=await adminLoginApi(detail)
        if(res.status==200){
           
            setModalContent("success");   
        }
        else {
            // You can handle failure cases here
            setModalContent("error"); // Or any other failure state
          }
    }

   
   const id=admin._id;
   console.log(id);
   
   const handleUpdate=async(e)=>{
e.preventDefault();
console.log(password);
if(!password){
    alert("Please enter a password")
}
const reqBody=new FormData();
reqBody.append("password",password)
const token=sessionStorage.getItem("token");
const reqHeader={
     "Content-Type":"application/json",
        "Authorization":`Bearer ${token} `
}
const res=await updateAdminApi(id,reqBody,reqHeader);
if(res.status===200){
    alert("Updated successfully")
    handleClose();
    getAdmin()
    setModalContent("edit");
    setDetail({
        email:"",
        password:""
    })
}
}


const handleClose2=()=>{
    setDetail({
        email:"",
        password:""
    })
    setModalContent("edit");
    handleClose()
}
const handleClose3=()=>{
    setDetail({
        email:"",
        password:""
    })
   
    handleClose()
}
  return (
  <div className="profile p-5">
 <div className="profile-head">
    <h2 className='header-title'>Profile</h2>

</div>
<div className="admin-profile p-3">

    <div >
       
        <div className="admin-detail">
            <img src={adminProfile} alt="" />
          <div className='admin-content'>  <h3 className="adminname">{admin.name}</h3></div>
           <div className='admin-content'> <span>{admin.email}</span></div>
           
        </div>
 <div className='edit' onClick={handleShow}>      <button className='btn btn-outline-primary'> CHANGE PASSWORD <i className='fas fa-edit '></i> </button></div>
    </div>
   

    

</div>

 <Modal show={show} onHide={handleClose}>
     <ModalHeader className='fw-bold'>EDIT PASSWORD</ModalHeader>
        
       {
        modalContent==="edit" &&<>
        <Modal.Body>
        <div className="row">

            <div className='input'> <input type="text" placeholder="Enter  email"  onChange={(e)=>setDetail({...detail,email:e.target.value})} value={detail.email}/>
           </div>
           <div className='input'>  <input type="text" placeholder='Enter old password' onChange={(e)=>setDetail({...detail,password:e.target.value})} value={detail.password}/></div>
        </div>
        </Modal.Body>
         <Modal.Footer>
         <Button variant="secondary" onClick={handleClose3}>
         Cancel
         </Button>
         <Button variant="warning" onClick={handleCheck}>
          Enter
         </Button>
       </Modal.Footer></>
       }
       {
       
       modalContent === "error" && (
      <>
        <Modal.Body>
            <div className="error-message">
              <h4>INVALID EMAIL OR PASSWORD</h4>
              
            </div>
            </Modal.Body>
            <ModalFooter>
            <Button variant="secondary" onClick={handleClose2}>
               Close
             </Button>
            </ModalFooter>
           </>
   
          )}
          {modalContent==="success" &&(
            <>
            <ModalBody>
            <div>
             
                <div >   
                <div className='input'> <input type="text" placeholder='Enter new password'
                onChange={(e)=>setPassword(e.target.value)}/></div>
                </div>
            </div>
            </ModalBody>
             <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button variant="warning" type='submit' onClick={handleUpdate} >
            Save Changes
             </Button>
           </Modal.Footer></>
          )}
        
       
      </Modal> 
  </div>
  )
}

export default AminProfile