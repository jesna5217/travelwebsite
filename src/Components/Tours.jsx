import React, { useContext, useEffect, useState } from 'react'
import TourCard from '../shared/TourCard'
import { Col, Row } from 'react-bootstrap'
import { getAllTour } from '../services/allApi'
import { addTourResponseContext, editTourResponseContext } from '../context/ContextShare'


function Tours({location,numberOfDays,people}) {
  
   const {addTourResponse,setAddTourResponse}=useContext(addTourResponseContext) 
   const{editTourResponse,setEditTourResponse}=useContext(editTourResponseContext)
    const [tourData,setTourData]=useState([])
const getAllTourItems=async()=>{
    const res= await getAllTour();
    setTourData(res.data);

}
useEffect(()=>{
    getAllTourItems()
},[addTourResponse,editTourResponse])
    const filteredData = tourData.filter(item => {
        const isCityMatch = location === '' || item.title.toLowerCase().includes(location.toLowerCase());
        const isPeopleMatch = people === '' || item.maxGroupSize >= people;
        const isDaysMatch = numberOfDays === '' || item.days >= numberOfDays;
        console.log('Filtering:', isCityMatch, isPeopleMatch, isDaysMatch);

        return isCityMatch && isPeopleMatch && isDaysMatch;

        
    });
  return (
  <>
 <div >
  <Row className='d-flex flex-wrap'>

    {
       filteredData.length>0?
       filteredData?.map((item)=>(
        <Col key={item.id} lg={3} md={6} sm={6} xs={6} className="mb-4">
        <TourCard tour={item}/>
        </Col>
    )):
    <div className='d-flex justify-center items-center textColor fs-1 flex-column mt-5'>
        <img className='h-[200px]' src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1253.jpg?ga=GA1.1.1936982064.1714392964&semt=ais_hybrid" alt="" />
    <p className='fontColor fs-4 fw-bold'>Sorry , no tours found</p>
    </div>
    }
   
  </Row>
    </div></>
  )
}

export default Tours