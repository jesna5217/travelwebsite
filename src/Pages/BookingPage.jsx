import React, {   useState } from 'react'
import './Booking.css'
import { useParams } from 'react-router-dom';
import { Container ,Row,Col, Form, ListGroup} from 'react-bootstrap';

import munnar from "../assets/munnar.avif"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import upload from "../assets/upload.avif"
import avatar from "../assets/women.avif"
import BookingPackage from '../Components/Booking/BookingPackage';
import Subscription from '../shared/Subscription';
import goa from "../assets/bg4.avif"

import shimla from "../assets/shimla.jpeg"
import rajasthan from "../assets/rajasthan.avif"
import varnasi from "../assets/varnasi.avif"
import agra from "../assets/agra.avif"
import ladakh from "../assets/ladakh.avif"
import mysore from "../assets/mysore.avif"

function BookingPage() {
 
  const tourData=[
    {
        id:1,
        title:"Goa",
        city:"Goa",
        days:3,
        price:3000,
        maxGroupSize:10,
        desc:'A popular tourist destination known for its beaches, hotels, restaurants, history, and culture. ',
        reviews:[{
            name:"Shon",
            Ratio:4.6
        }],
        avgRating:4.5,
        photo:goa,
        featured:true
    },
    {
        id:2,
        title:"Munnar",
        city:"Kerala",
       days:4,
        price:3000,
        maxGroupSize:10,
        desc:'A picturesque hill station in Kerala, renowned for its sprawling tea plantations, lush green landscapes, and cool, refreshing climate.',
        reviews:[{
            name:"Shon",
            Ratio:4.6
        }],
        avgRating:4.5,
        photo:munnar,
        featured:true
    },
    {
        id:3,
        title:"Shimla",
        city:"Himachal Pradesh",
        days:5,
        price:9000,
        maxGroupSize:10,
        desc:'eghjkmnbvd ertyuiolmnf',

        reviews:[{
            name:"Shon",
            Ratio:4.6
        }],
        avgRating:4.8,
        photo:shimla,
        featured:true
    },
    {
        id:4,
        title:"Jaipur",
        city:"Rajasthan",
        days:6,
        price:7000,
        maxGroupSize:10,
        desc:'The capital of Rajasthan, Jaipur is known as the Pink City and is a popular tourist attraction for its rich culture and heritage.',

        reviews:[{
            name:"Shon",
            Ratio:4.6
        }],
        avgRating:4.5,
        photo:rajasthan,
        featured:true
    },
    {
        id:5,
        title:"Varnasi",
        city:"Varnasi",
        days:7,
        price:10000,
        maxGroupSize:10,
        desc:'A prominent tourist destination in India, Varanasi is known for its temples, ghats, and the Buddhist site Sarnath',
        reviews:[{
            name:"Shon",
            Ratio:4.6
        }],
        avgRating:4.5,
        photo:varnasi,
        featured:true
    },
    {
        id:6,
        title:"Agra",
        city:"Uttar Pradesh",
        days:8,
        price:11000,
        maxGroupSize:10,
        desc:'A popular tourist destination known for its beaches, hotels, restaurants, history, and culture. ',
        reviews:[{
            name:"Shon",
            Ratio:2.3
        }],
        avgRating:4,
        photo:agra,
        featured:true
    },
    {
        id:7,
        title:"Ladakh",
        city:"Ladakh",
        days:9,
        price:15000,
        maxGroupSize:10,
        desc:'A dream destination for adventure enthusiasts, Ladakh is known for its alpine glacial lakes, high-altitude hiking trails, and some of the worlds highest passes.',
        reviews:[{
            name:"Shon",
            Ratio:4
        }],
        avgRating:3,
        photo:ladakh,
        featured:true
    }
    ,
    {
        id:8,
        title:"Mysore",
        city:"Mysore",
        days:10,
        price:3000,
        maxGroupSize:10,
        desc:'Known as the Palace City of India, Mysore is home to the Mysore Palace, which was the most visited place in India as of 2006. ',
        reviews:[{
            name:"Shon",
            Ratio:4
        }],
        avgRating:3,
        photo:mysore,
        featured:true
    }
]
const options={day:"numeric",month:"long",year:"numeric"}
const  {id}=useParams();
const tour=tourData.find(tour=>tour.id===parseInt(id));
const [reviewText,setReviewText]=useState("")

const {photo,title,avgRating,desc,price,reviews,city,days,maxGroupSize}=tour;
const [review,setReview]=useState(tour.reviews ||[])
const [tourRating,setTourRating]=useState(null);
//submmitting to server
 const handleSubmit=(e)=>{
  e.preventDefault();

 const newReview={
  name:"User",
  rating:tourRating,
  review:reviewText
 }
 setReview([...review,newReview]);

 setTourRating(null)
  alert(`${reviewText},${tourRating}`)
 }
  return (
<>
<section>
  <Container>
    <Row>
      <Col lg='8'>
      <div className="tour_data w-100">
        <img src={photo} alt="no image" width="100%" className='h-[500px]' />
        <div className="tour_info p-3" >
        <div className='d-flex justify-between'>
        
        <div>
        <h2 >{title}</h2>
  <p><i className='fa-solid fa-location-dot' style={{color:'brown'}}></i> {city}</p>
</div>

        <div className='rating '>
        <Stack spacing={1}>
      <Rating name="half-rating"  className='fs-5 star' readOnly defaultValue={avgRating} precision={0.5} />
     
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
  <h4 className='fw-bold mb-2'>Reviews ({reviews.length}review)</h4>
  <Form >
    <div className="d-flex items-center gap-3 mb-4 rating" >
 <span>1<i className='fa-solid fa-star' onClick={()=>setTourRating(1)}></i></span>
 <span>2<i className='fa-solid fa-star' onClick={()=>setTourRating(2)}></i></span>
 <span>3<i className='fa-solid fa-star' onClick={()=>setTourRating(3)}></i></span>
 <span>4<i className='fa-solid fa-star' onClick={()=>setTourRating(4)}></i></span>
 <span>5<i className='fa-solid fa-star' onClick={()=>setTourRating(5)}></i></span>

    </div>
    <div className="review_input">
    <input type="text" placeholder='Share your reviews' onChange={(e)=>setReviewText(e.target.value)} value={reviewText} />
<div className='image_upload'>
  <label htmlFor="upload">
    <input type="file" id='upload' style={{display:'none'}}  required/>
    <img src={upload} alt=""  />
  </label>
</div>
    </div>
   <div className='submit'>
    <button type='submit' onClick={handleSubmit}>SUBMIT</button>
   </div>
  </Form>
  <ListGroup className=' mt-3 user_reviews p-3'>
    {
      reviews?.map(review=>(
        <div className="review_item mt-3">

<div className="w-100">
  <div className="d-flex items-center justify-between ">
 <div className='d-flex'>
 <img src={avatar} alt="" />
  <div>
  <h5>Jena Hary</h5>
  <p>{new Date().toLocaleDateString("en-US",options)}</p>

 
</div>
 </div>
<span className='d-flex items-center'></span>
<p >5 <i className='fa-solid fa-star textColor'></i></p>
  </div>
  <h6>The trip was amazing 😍.</h6>
</div>
        </div>
      ))
    }
  </ListGroup>
</div>
      </Col>
      <Col lg='4'>
      <BookingPackage tour={tour}/>
      </Col>
    </Row>
    <Row><Col><div className="sub"><Subscription/></div></Col></Row>
  </Container>
</section>
</>
  )
}

export default BookingPage