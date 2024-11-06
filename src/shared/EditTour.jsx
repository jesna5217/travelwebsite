import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';


import Button from 'react-bootstrap/Button';
import { BASE_URL } from '../services/baseurl';
import { editTourApi } from '../services/allApi';
import { editTourResponseContext } from '../context/ContextShare';
function EditTour({tour}) {

    const {editTourResponse,setEditTourResponse}=useContext(editTourResponseContext)
    const [show, setShow] = useState(false);
const handleShow=()=>setShow(true);
const handleClose = () => setShow(false);
const[tourDetails,setTourDetails]=useState({
tourId:tour._id,
    id:tour.id,
    title:tour.title,
    city:tour.city,
    days:tour.days,
    desc:tour.desc,
    price:tour.price,
    maxGroupSize:tour.maxGroupSize,
    tourImage:""
})


const[preview,setPreview]=useState("")
const handleUpdate=async(e)=>{
    e.preventDefault();
    console.log(tourDetails);
    const {title,city,days,desc,tourImage,maxGroupSize,price,id,tourId}=tourDetails;
    console.log(tourId);
    
  if(!title || !city || !days || !desc  ||!maxGroupSize || !price ||!id ){
    alert("Please fill the form completely")
  }
  else{
    const reqBody=new FormData();

    reqBody.append("id",id)
    reqBody.append("title",title);
    reqBody.append("city",city);
 reqBody.append("days",days);
 reqBody.append("desc",desc);
 reqBody.append("maxGroupSize",maxGroupSize);
 reqBody.append("price",price)
preview?reqBody.append("tourImage",tourImage):reqBody.append("tourImage",tour.tourImage);
const token=sessionStorage.getItem("token");



  if(preview){
    const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result=await editTourApi(tourId,reqBody,reqHeader);
      console.log("updated tour",result);
    if(result.status===200){
      handleClose();
setEditTourResponse(result.data)
    }  
  }
  else{
    const reqHeader={
          "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
    const result=await editTourApi(tourId,reqBody,reqHeader)
    console.log("updated tour",result);

    if(result.status===200){
      handleClose();
setEditTourResponse(result.data)
      setOpen(false)
    }  
  }
  }
}
useEffect(()=>{
    if(tourDetails.tourImage){
        setPreview(URL.createObjectURL(tourDetails.tourImage))
    }
},[tourDetails.tourImage])


const handleClose1=()=>{
  handleClose();
  setTourDetails({
    //so that previous unedited value loads whan cancel button clicked
    tourId:tour._id,
    id:tour.id,
    title:tour.title,
    city:tour.city,
    days:tour.days,
    desc:tour.desc,
    price:tour.price,
    maxGroupSize:tour.maxGroupSize,
    tourImage:""
  })
  setPreview("")
}
  return (
   <>


<button  className='btn btn-outline-success'  onClick={handleShow}>EDIT</button>
       <Modal show={show} onHide={handleClose} centered >
  
      <Modal.Header closeButton>
       <div className='d-flex'>
       <Modal.Title className='textColor'>EDIT TOURS </Modal.Title>
      
       </div>
      </Modal.Header>
      <Modal.Body>
          <div className="" >
          <div  >

         <div className='d-flex justify-center items-center mb-2'>
         <label htmlFor="tourImg">
                      <input type="file" style={{display:'none'}}  id='tourImg'   
                       onChange={(e)=>setTourDetails({...tourDetails,tourImage:e.target.files[0]})}/>
             <img src={preview?preview : `${BASE_URL}/uploads/${tour.tourImage}`} alt="" className='h-[200px]' />
                 
                  </label>

         </div>

          </div>
      
          <div >
              <form action="">
             <div className="row">
              <div className="col-md-6">
              <input type="number" className='form-control mb-3' placeholder='id' value={tourDetails.id}
                onChange={(e)=>setTourDetails({...tourDetails,id:parseInt(e.target.value)})}    />

                  <input type="text" className='form-control mb-3' placeholder='Title' value={tourDetails.title}
                     onChange={(e)=>setTourDetails({...tourDetails,title:e.target.value})}/>
                  <input type="text" className='form-control mb-3' placeholder='City' value={tourDetails.city}
                onChange={(e)=>setTourDetails({...tourDetails,city:e.target.value})} />
                  
                 
              </div>
              <div className="col-md-6">
              <input type="number" className='form-control mb-3' placeholder='Number of days'
                value={tourDetails.days}     onChange={(e)=>setTourDetails({...tourDetails,days:e.target.value})} />
                    <input type="number" className='form-control mb-3' placeholder='Maximum number of people' value={tourDetails.maxGroupSize}
         onChange={(e)=>setTourDetails({...tourDetails,maxGroupSize:e.target.value})} />
                    <input type="number" className='form-control mb-3' placeholder='Price' value={tourDetails.price}
                    onChange={(e)=>setTourDetails({...tourDetails,price:e.target.value})}  />
              </div>
             </div>
                
                    <textarea name="" id="" rows={4} className='form-control mb-3' placeholder='Description' value={tourDetails.desc}
                onChange={(e)=>setTourDetails({...tourDetails,desc:e.target.value})}  ></textarea>
                  

              </form>
          </div>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>
          Cancel
        </Button>
        <Button variant="warning" onClick={handleUpdate} type='submit' >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

   
   </>
  )
}

export default EditTour