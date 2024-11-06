import React, {   useEffect, useState } from 'react'
import './Booking.css'
import { useParams } from 'react-router-dom';
import { Container ,Row,Col, Form, ListGroup} from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import upload from "../assets/upload.avif"
import avatar from "../assets/women.avif"
import BookingPackage from '../Components/Booking/BookingPackage';
import Subscription from '../shared/Subscription';

import { addReviewsApi, getAllTourById, getReviewApi } from '../services/allApi';

function BookingPage() {
 

const  {id}=useParams();

const [token,setToken]=useState('');
useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))

  }
},[])
const [tourDetails,setTourDetails]=useState({});
const getAllTourItemsById=async(id)=>{
  const result=await getAllTourById(id);
  console.log(result.data);
  
  if(result.status===200){
    setTourDetails(result.data)
  }
}
useEffect(()=>{
  getAllTourItemsById(id)
},[])

const {title,city,days,price,maxGroupSize,tourImage,desc,_id}=tourDetails;

const options={day:"numeric",month:"long",year:"numeric"}

const tourId=_id;
console.log(_id);

const userName=JSON.parse(sessionStorage.getItem("loggedUser")).username;




const [reviews,setReviews]=useState({
  tourRating:"",
  reviewText:"", 
  image:""
});
const [preview1,setPreview1]=useState("")
useEffect(()=>{
  if(reviews.image){
    setPreview1(URL.createObjectURL(reviews.image))
  }
},[reviews.image])


const handleSubmit=async(e)=>{
e.preventDefault()

  if(!token){
    alert("Please login")
  }

else{
console.log(reviews);
const{tourRating,reviewText,image}=reviews;
const reqBody=new FormData();
reqBody.append("userName",userName);
reqBody.append("tourRating",tourRating);
reqBody.append("reviewText",reviewText);
reqBody.append("image",image);
reqBody.append("tourId",tourId) 


const reqHeader={
  'Content-Type':'multipart/form-data',
  'Authorization':`Bearer ${token}`
}
const result=await addReviewsApi(reqBody,reqHeader);
if(result.status===200){
  alert("Review uploaded");
 getReviewById(tourId)
}
else{
  alert("Something went wrong")
}
}
}
const[idReview,setIdReview]=useState([])
const getReviewById=async(tourId)=>{
  try{
    const result=await getReviewApi(tourId);
    if(result.status===200){
      console.log(result.data);
      
      setIdReview(result.data);
    }
  }
  catch(err){
    console.log(err);
    
  }

}
useEffect(()=>{
 if(tourId){
  getReviewById(tourId)
 }
},[tourId])
return (
<>
<section>
  <Container>
    <Row>
      <Col lg='8'>
      <div className="tour_data w-100">
        <img src={`${BASE_URL}/uploads/${tourImage}`} alt="no image" width="100%" className='h-[500px]' />
        <div className="tour_info p-3" >
        <div className='d-flex justify-between'>
        
        <div>
        <h2 >{title}</h2>
  <p><i className='fa-solid fa-location-dot' style={{color:'brown'}}></i> {city}</p>
</div>

        <div className='rating '>
        <Stack spacing={1}>
      <Rating name="half-rating"  className='fs-5 star' readOnly defaultValue={4} precision={0.5} />
     
    </Stack>
        </div>
        </div>
        <p className='fw-bold mt-3' style={{color:' rgb(220, 190, 30)'}}>Description</p>

       <div className="description ">
        <p>{desc}</p>
         
          </div>   
        <div className='d-flex justify-between items-baseline price w-50'>
        <div className='mt-3'><h3>₹ {price}/person</h3></div>
       <p><i class="fa-solid fa-calendar-days"style={{color:"brown"}}></i> {days}D {days-1}N</p>
     
        <div><p><i class="fa-solid fa-user-group" style={{color:"brown"}}></i> <span className='text-xs'>{maxGroupSize} people</span></p></div>
        </div>
</div></div>


<div className="reviews">
  <h4 className='fw-bold mb-2'>Reviews (3 review)</h4>
  <Form >
    <div className="d-flex items-center gap-3 mb-4 rating" >
 <span>1<i className='fa-solid fa-star'onClick={()=>setReviews({...reviews,tourRating:1})} ></i></span>
 <span>2<i className='fa-solid fa-star' onClick={()=>setReviews({...reviews,tourRating:2})} ></i></span>
 <span>3<i className='fa-solid fa-star' onClick={()=>setReviews({...reviews,tourRating:3})} ></i></span>
 <span>4<i className='fa-solid fa-star' onClick={()=>setReviews({...reviews,tourRating:4})} ></i></span>
 <span>5<i className='fa-solid fa-star' onClick={()=>setReviews({...reviews,tourRating:5})} ></i></span>

    </div>
    <div className="review_input">
    <input type="text" placeholder='Share your reviews' onChange={(e)=>setReviews({...reviews,reviewText:e.target.value})} value={reviews.reviewText}/>
<div className='image_upload'>
  <label htmlFor="upload">
    <input type="file" id='upload' style={{display:'none'}}  required  
     onChange={(e)=>setReviews({...reviews,image:e.target.files[0]})}/>
    <img src={preview1?preview1:upload} alt=""  />
  </label>
</div>
    </div>
   <div className='submit'>
    <button type='submit' onClick={(e)=>handleSubmit(e)} >SUBMIT</button>
   </div>
  </Form>
  
 
   
  
   
    {
      idReview?idReview.map((item)=>(<>
        <ListGroup className=' mt-3 user_reviews p-3'>
        <div className="review_item mt-3">

      <div className="w-100">
        <div className="d-flex items-center justify-between ">
       <div className='d-flex'>
       <img src={avatar} alt="" />
        <div>
        <h5>{item.userName}</h5>
        <p>{new Date().toLocaleDateString("en-US",options)}</p>
      
       
      </div>
       </div>
      <span className='d-flex items-center'></span>
      <p >{item.tourRating} <i className='fa-solid fa-star textColor'></i></p>
        </div>
        <h6>{item.reviewText}</h6>
      </div>

   
   
              </div>
              
                 <div className="mt-3">
                 <img src={`${BASE_URL}/uploads/${item.image}`} className='h-[100px]'></img>
                 
                 </div></ListGroup> </>
      )):<p>No reviews found!!</p>
    }
 
</div> 




      </Col>
      <Col lg='4'>
      <BookingPackage tour={tourDetails}/>
      </Col>
    </Row>
    <Row><Col><div className="sub"><Subscription/></div></Col></Row>
  </Container>
</section>
</>
  )
}

export default BookingPage

{/* 
*/}