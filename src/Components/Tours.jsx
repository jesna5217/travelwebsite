import React from 'react'
import TourCard from '../shared/TourCard'
import { Col, Row } from 'react-bootstrap'
import goa from "../assets/bg4.avif"
import munnar from  "../assets/munnar.avif"
import shimla from "../assets/shimla.jpeg"
import rajasthan from "../assets/rajasthan.avif"
import varnasi from "../assets/varnasi.avif"
import agra from "../assets/agra.avif"
import ladakh from "../assets/ladakh.avif"
import mysore from "../assets/mysore.avif"


function Tours({location,numberOfDays,people}) {
  
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
        <Col key={item.id} lg={3} md={4} sm={6} xs={6} className="mb-4">
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