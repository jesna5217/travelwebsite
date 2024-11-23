import React, { useEffect, useState } from 'react'
import Common from '../shared/Common'
import "../shared/search.css"
import { Container ,Col,Row} from 'react-bootstrap'
import Tours from './Tours'
import './tour.css'

import {  getAllTour, getSearchTourApi } from '../services/allApi'
function TourPage() {
   const[tours,setTours]=useState([])
const [showDisplay,setShowDisplay]=useState(false)
   const getAllTourItems=async()=>{
    const res= await getAllTour();
 
    
    setTours(res.data);
setShowDisplay(false)
}
useEffect(()=>{
    getAllTourItems()
},[])
const [searchDetails,setSearchDetails]=useState({
  location:"",
fromDate:"",
toDate:"",
  people:""
})



const {location,fromDate,toDate,people}=searchDetails;
const handleSearch =async(e) => {
    e.preventDefault();
setShowDisplay(true)
    if (!location) {
        alert('Please enter a location.');
        return;
    }
    if (!fromDate || !toDate) {
        alert('Please select both from and to dates.');
        return;
    }
    if (new Date(fromDate) >= new Date(toDate)) {
        alert('The "From" date must be earlier than the "To" date.');
        return;
    }

 console.log("search",searchDetails);
 
const res=await getSearchTourApi(searchDetails)

if(res.status===200){
setTours(res.data);
setShowDisplay(true)
setSearchDetails({
  location:"",
fromDate:"",
toDate:"",
people:""
})


}

};
const handleDisplay=()=>{
  getAllTourItems();
  setTours(res.data);
 
 
}
  return (
   <>
   <Common title={"All Tours"}/>
   <Container style={{backgroundColor:"white"}} className='pt-0'>
    <Row >
        <div className="col-md-2"></div>
       <div className="col-md-8">
       <Row className='d-flex justify-content-center '>
        <Col lg="12">
          <div className="search_bars shadow w-100 p-3">
            <form className='d-flex align-items-center justify-between gap-4'>
        
              <div className='d-flex gap-3 form_group borders align-items-center'>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Location</h6>
                  <input
                    type="text"
                    placeholder='Place you wish to visit?'
                    onChange={(e) =>setSearchDetails({...searchDetails,location:e.target.value})}
                 value={searchDetails.location} />
                </div>
              </div>

          
              <div className='d-flex gap-3 form_group borders align-items-center'>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>From</h6>
                  <input
                    type="date"
                    className='month'
                  
                    onChange={(e) =>setSearchDetails({...searchDetails,fromDate:e.target.value})}
                 value={searchDetails.fromDate}
                  />
                </div>
              </div>

              <div className='d-flex gap-3 form_group borders align-items-center'>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>To</h6>
                  <input
                    type="date"
                    className='month'
                    onChange={(e) =>setSearchDetails({...searchDetails,toDate:e.target.value})}
                    value={searchDetails.toDate}
                  />
                </div>
              </div>

     
              <div className='d-flex gap-3 form_group  align-items-center'>
                <i className="fa-solid fa-users"></i>
                <div>
                  <h6>Maximum People</h6>
                  <input
                    type="number"
                    className='number'
                    placeholder='1'
                    min="1"
                    onChange={(e) => setSearchDetails({...searchDetails,people:e.target.value})}
                    value={searchDetails.people}
                  />
                </div>
              </div>

              <div className='search-button-container'>
                <button onClick={handleSearch} className='search_btn' type='submit'>
                  <i className='fa-solid fa-search text-light'></i>
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
       </div>
       <div className="col-md-2"></div>

    </Row>

    {
      showDisplay &&
    <div className='text-center mt-3'><button onClick={handleDisplay}  style={{color:"blue"}} className='fw-bold'><u>Display All</u></button></div>

    }
    <Row className='tour-row'>
        <Col>
        <Tours tours={tours} />
        </Col>
        <Col lg="12">
      </Col>
    </Row>
   </Container>
   
   </>
  )
}

export default TourPage