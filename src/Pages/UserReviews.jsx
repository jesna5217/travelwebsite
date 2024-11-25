import React, { useEffect, useState } from 'react'
import {getAllReviewApi, getAllTour, getReviewApi } from '../services/allApi';
import Sidebar from '../shared/Sidebar';
import { BASE_URL } from '../services/baseurl';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './user.css'
function UserReviews() {
    const [allTour,setAllTour]=useState([]);
    const getTour=async()=>{
        const res=await getAllTour();
        if(res.status===200){
            setAllTour(res.data);
            console.log(res.data);
            
        }
    }
    useEffect(()=>{
        getTour()
    },[])


    const [allReview,setAllReview]=useState([]);

const getAllReview=async()=>{
    const res=await getAllReviewApi();
    if(res.status===200){
        setAllReview(res.data)
    }
}
useState(()=>{
    getAllReview()
},[])

const[tour,setTour]=useState("")

    const handleChange = (event) => {
      setTour(event.target.value);
    };


    const getReview=async(id)=>{
        const res=await getReviewApi(id);
        if(res.status===200){
            setAllReview(res.data);
            console.log(res.data);
            
        }
    }

  return (
    <>
    <div className="container  pe-0 ">
    <div className="row ">
      <div className="col-md-2 sidebar shadow " >
      <Sidebar/>
      </div>
          <div className="col-md-1"></div>

      <div className="col-md-9 mt-4">
        <h1 className='text-center fs-2 fw-bold  font'>ALL REVIEWS</h1>

<div className="row">
<Box  style={{width:"400px"}}  className="mt-3">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tours</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tour}
          label="Age"
          onChange={handleChange}
        >
        
       {
        allTour?.map((data)=>(
            <MenuItem value={data.title}  onClick={()=>getReview(data._id)}>{data.title}</MenuItem>
        ))
       }
        </Select>
      </FormControl>
    </Box>

<div className="row">
   {
    allReview?allReview.map((item)=>(
        <div className="col-md-5 border m-3 p-3  tour-review-box"
        style={{width:"500px"}} >
        <div className='d-flex items-center justify-around text-center '>
            <img src={`${BASE_URL}/uploads/${item.image}`} 
            className='h-[150px] w-[200px]' alt="No Image" />
<div>
    <p className='fw-bold'>{item.reviewText}</p>
    <h3>-{item.userName}</h3>
    <Rating name="read-only" value={item.tourRating} readOnly style={{fontSize:"15px"}}/>
</div>

        </div>
<div className='d-flex justify-end'>

</div>    </div>
    )):<p>No reviews found</p>
   }
</div>
</div>


      </div>
     
      </div></div></>
  )
}

export default UserReviews