import React,{useState} from 'react'
import Sidebar from '../shared/Sidebar'

import goa from "../assets/bg4.avif"
import munnar from  "../assets/munnar.avif"
import shimla from "../assets/shimla.jpeg"
import rajasthan from "../assets/rajasthan.avif"
import varnasi from "../assets/varnasi.avif"
import agra from "../assets/agra.avif"
import ladakh from "../assets/ladakh.avif"
import mysore from "../assets/mysore.avif"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import man from "../assets/add.avif"
import './tourData.css'
import { Table } from 'react-bootstrap'
function TourData() {
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
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
    <div className="container menu pe-0 bg-dark text-light">
    <div className="row ">
      <div className="col-md-2 sidebar shadow">
      <Sidebar/>
      </div>
      <div className="col-md-1"></div>
    
      <div className="col-md-8 border  d-flex justify-center items-center flex-column p-3 details_tour">
  <h1 className='text-center fs-2 fw-bold textColor font text-light'>TOUR DETAILS</h1>
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
          <div className="row">
          <div className="col-md-6">

          <label htmlFor="tourImg">
                      <input type="file" style={{display:'none'}}  id='tourImg'   />
             <img src={man} alt="" />
                 
                  </label>


          </div>
          <div className="col-md-6">
              <form action="">
                  <input type="text" className='form-control mb-3' placeholder='Title'/>
                  <input type="text" className='form-control mb-3' placeholder='City'/>
                  <input type="text" className='form-control mb-3' placeholder='Number of days'/>
                  <input type="text" className='form-control mb-3' placeholder='Description'/>

              </form>
          </div>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>


</div>

  <Table className='table table-bordered w-100 mt-5 rounded p-2'>
  <thead>
    <th className='p-3'>  SL. NO</th>
    <th className='p-3'>TITLE</th>
    <th  className='p-3'>CITY</th>
    <th  className='p-3'>NO. OFDAYS</th>
    <th  className='p-3'>PRICE</th>
    <th className='p-3'>IMAGE</th>
    <th className='p-3'>DESCRIPTION</th>

<th className='p-3'>DELETE</th>
<th className='p-3' >EDIT</th>

  </thead>
  

    {
      tourData?.map(data=>(<> 
<tbody>
       <td  className='p-2'>{data.id}</td>
        <td  className='p-2'>{data.title}</td>
        
        <td  className='p-2'>{data.city}</td>
        <td  className='p-2'>{data.days}</td>
        <td  className='p-2'>{data.price}</td>
        <td  className='p-2'><img src={data.photo} alt="" /></td>
        <td  className='p-2'>{data.desc}</td>
       
        <td  className='p-2'>  <button className='bg-red-600 text-black font-bold py-1 px-2 rounded hover:bg-red-700'>
        DELETE
      </button></td>
      <td  className='p-2 ' onClick={handleShow}><i className='fa-solid fa-edit ' style={{color:"green"}}></i></td>
    
      </tbody>
</>

      ))
    }
 
  


  
 </Table>
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