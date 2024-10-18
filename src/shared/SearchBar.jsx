import React, { useState } from 'react'

import { Col, Row } from 'react-bootstrap'
function SearchBar() {
   const [location,setLocation]=useState('');
   const [fromDate,setFromDate]=useState("");
   const [toDate,setToDate]=useState("")
   const[people,setPeople]=useState("")
   const calculateDays = (from, to) => {
    const startDate = new Date(from);
    const endDate = new Date(to);
    const timeDifference = endDate - startDate; // Difference in milliseconds
    const dayDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
    return dayDifference;
};

const handleSearch = (e) => {
    e.preventDefault();

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

    const numberOfDays = calculateDays(fromDate, toDate);
    console.log(`Location: ${location}, From: ${fromDate}, To: ${toDate}, People: ${people}`);
    console.log(`Number of days: ${numberOfDays}`);
};


  return (
  
    <>
      <Row className='d-flex justify-content-center bar'>
        <Col lg="12">
          <div className="search_bars shadow w-100 p-3">
           
            <form className='d-flex align-items-center justify-between gap-4'>
        
              <div className='d-flex gap-3 form_group borders align-items-center'>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Location</h6>
                  <input
                    type="text"
                    placeholder='Place you wish to visit ?'
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

          
              <div className='d-flex gap-3 form_group borders align-items-center'>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>From</h6>
                  <input
                    type="date"
                    className='month'
                    onChange={(e) => setFromDate(e.target.value)}
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
                    onChange={(e) => setToDate(e.target.value)}
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
                    onChange={(e) => setPeople(parseInt(e.target.value))}
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


          {/* =========================================== */}
          
        </Col>
        <Col>
        <div className="phone">
              <form action="">
              <input
                    type="text"
                    placeholder='Place you wish to visit ?'
                    onChange={(e) => setLocation(e.target.value)}
                  />
              </form>
            </div>
        </Col>
      </Row>
    </>



  )
}

export default SearchBar