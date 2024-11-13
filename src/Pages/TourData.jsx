import React,{useContext, useEffect, useState} from 'react'
import Sidebar from '../shared/Sidebar'
import { BASE_URL } from '../services/baseurl';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import man from "../assets/add.avif"
import './tourData.css'

import { addTourApi, deleteTourApi, getAllTour } from '../services/allApi'
import EditTour from '../shared/EditTour';
import { addTourResponseContext, editTourResponseContext } from '../context/ContextShare';
function TourData() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const {addTourResponse,setAddTourResponse}=useContext(addTourResponseContext);
const {editTourResponse,setEditTourResponse}=useContext(editTourResponseContext);

const [tourDetails,setTourDetails]=useState({
  id:'',
  title:"",
  city:"",
  days:"",
  desc:"",
  maxGroupSize:"",
  price:"",
  tourImage:""
})
const[preview,setPreview]=useState("")
const [token,setToken]=useState("");
const [tourData,setTourData]=useState([])
const getAllTourItems=async()=>{
  const result=await getAllTour();
  console.log("result",result.data);
  setTourData(result.data)
}
useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
getAllTourItems()
},[editTourResponse])
useEffect(()=>{
console.log(tourDetails);
if(tourDetails.tourImage){
  setPreview(URL.createObjectURL(tourDetails.tourImage))
}
},[tourDetails.tourImage])


const hanndleAddTour=async(e)=>{
  e.preventDefault();
  const {title,city,days,desc,tourImage,maxGroupSize,price,id}=tourDetails;
  if(!title || !city || !days || !desc || !tourImage ||!maxGroupSize || !price ||!id){
    alert("Please fill the form completely")
  }
  else{
    //here we are uploading a file so it should be sent as form data
    const reqBody=new FormData();
    reqBody.append("id",id)
    reqBody.append("title",title);
    reqBody.append("city",city);
 reqBody.append("days",days);
 reqBody.append("desc",desc);
 reqBody.append("maxGroupSize",maxGroupSize);
 reqBody.append("price",price)
 reqBody.append("tourImage",tourImage)
  

  //here content type is multipart form data so another req header needed
  const reqHeader={
    'Content-Type':'multipart/form-data',
    'Authorization':`Bearer ${token}`
  }
  const result=await addTourApi(reqBody,reqHeader)
if(result.status===200){
  alert("Uploading Successfull")
  setAddTourResponse(result.data);
  setTourDetails({
    id:'',
    title:"",
    city:"",
    days:"",
    desc:"",
    maxGroupSize:"",
    price:"",
    tourImage:""
  })
  setPreview("");
  handleClose();
  getAllTourItems()
}
else if(result.status===409){
  alert(`${title} already exists`)
}
else{
  alert(`${title} uploading failed`);
  setTourDetails({
    id:'',
    title:"",
    city:"",
    days:"",
    desc:"",
    maxGroupSize:"",
    price:"",
    tourImage:""
  })
}

}
}
const handleClose1=()=>{
  setTourDetails({
    id:'',
    title:"",
    city:"",
    days:"",
    desc:"",
    maxGroupSize:"",
    price:"",
    tourImage:""
  })
  setPreview("");
  handleClose();

}
const handleDelete=async(tourId)=>{

  const token=sessionStorage.getItem("token");
  const reqHeader={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }
  const result=await deleteTourApi(tourId,reqHeader);
  console.log("delete",result);
  if(result.status===200){
    getAllTourItems()
  }
}

const [open, setOpen] = useState(false);

  return (
    <>
    <div className="container menu pe-0 ">
    <div className="row ">
      <div className="col-md-2 sidebar shadow " >
      <Sidebar/>
      </div>
      <div className="col-md-1"></div>
    
      <div className="col-md-8 border  d-flex justify-center items-center flex-column p-2 details_tour">
  <h1 className='text-center fs-2 fw-bold  font '>TOUR DETAILS</h1>
<div>


<button onClick={handleShow} className='mt-5 shadow rounded p-1  'style={{color:'white',backgroundColor:' rgb(220, 190, 30)'}}>
            ADD TOURS</button>
      




      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
       <div className='d-flex'>
       <Modal.Title className='textColor'>ADD TOURS </Modal.Title>
      
       </div>
      </Modal.Header>
      <Modal.Body>
          <div >
          <div >

  <div className='d-flex justify-center items-center mb-2'>
  <label htmlFor="tourImg">
                      <input type="file" style={{display:'none'}}  id='tourImg'   
                      onChange={(e)=>setTourDetails({...tourDetails,tourImage:e.target.files[0]})} />
             <img src={preview?preview:man} alt="" className='h-[200px]' />
                 
                  </label>
  </div>


          </div>
      
          <div>
              <form action="">
              <div className="row">
                <div className="col-md-6">
                <input type="text" className='form-control mb-3' placeholder='Sl. no'
                   onChange={(e)=>setTourDetails({...tourDetails,id:parseInt(e.target.value)})} value={tourDetails.id}/>

                  <input type="text" className='form-control mb-3' placeholder='Title'
                   onChange={(e)=>setTourDetails({...tourDetails,title:e.target.value})} value={tourDetails.title}/>
                  <input type="text" className='form-control mb-3' placeholder='City'
                   onChange={(e)=>setTourDetails({...tourDetails,city:e.target.value})} value={tourDetails.city}/>
                  
                 
                
                </div>
                <div className="col-md-6">

                <input type="number" className='form-control mb-3' placeholder='Number of days'
                   onChange={(e)=>setTourDetails({...tourDetails,days:parseInt(e.target.value)})} value={tourDetails.days}/>
                    <input type="number" className='form-control mb-3' placeholder='Maximum number of people'
                   onChange={(e)=>setTourDetails({...tourDetails,maxGroupSize:parseInt(e.target.value)})} value={tourDetails.maxGroupSize}/>
                    <input type="number" className='form-control mb-3' placeholder='Price'
                   onChange={(e)=>setTourDetails({...tourDetails,price:parseInt(e.target.value)})} value={tourDetails.price}/>


                </div>
              </div>
                    <textarea name="" id="" rows={4} className='form-control mb-3' placeholder='Description'
                   onChange={(e)=>setTourDetails({...tourDetails,desc:e.target.value})} value={tourDetails.desc}></textarea>
                  

              </form>
          </div>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>
          Cancel
        </Button>
        <Button variant="warning" onClick={hanndleAddTour} type='submit' >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>


</div>


{
  tourData.map((data)=>(<>
    <div className="row table-tour">
  <div className="col-md-5">
    <img src={`${BASE_URL}/uploads/${data.tourImage}`} alt="" />
  </div>
  <div className="col-md-7">
    <h1 className='text-center'><span style={{fontSize:"20px"}}>{data.id}.</span> {data.title.toUpperCase()}</h1>
    <p><span>City : </span>{data.city}</p>
    <p><span>Days : </span>{data.days}</p>
    <p><span>Guests : </span>{data.maxGroupSize}</p>
    <p><span>Price : </span>{data.price}</p>
    <p><span>Description : </span>{data.desc}</p>
   <div className='mt-3 d-flex justify-between'>
   <button className='btn btn-outline-danger '
        onClick={()=>handleDelete(data._id)}>
        DELETE
      </button>
     
     <EditTour tour={data}/>
   </div>
   
      
  </div>
</div>


</>
  ))
}

  </div>
  <div className="col-md-1"></div>

  <div>

  </div>

      </div>
    
    </div>
    
    </>
  )
}

export default TourData