import React from 'react'

import { Col, Row } from 'react-bootstrap'
import kerala from "../assets/kerala.avif"
import goa from  "../assets/goa2.avif"
import andaman from "../assets/Port-Blair Andaman.avif"

import kashmir from "../assets/kashmir2.avif"
import thailand from "../assets/phuket11.webp"
import himachal from "../assets/himachal.jpg"
import south from  "../assets/south.jpg"
import ladakh from "../assets/ladakh2.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './hometour.css'
function HomeTours() {
    const options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,              // Enable autoplay
        autoplayTimeout: 2000,       // Time between transitions (in milliseconds)
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 2.5,
            nav: true,
            loop:false,
            dots:false
          },
          600: {
            items: 4,
            nav: false,
            loop:false,
            dots:false
          },
          1000: {
            items: 7,
            nav: true,
            loop: false,
            dots:false
          },
        },
      };
    const tourData=[
        {
            id:1,
            title:"Kerala",
            
            days:5,
            price:3000,
            
            photo:kerala,

        },
        {
            id:2,
            title:"Kashmir",
           
           days:4,
            price:3000,
            
            photo:kashmir,
    
        },
        {
            id:3,
            title:"Goa",
        
            days:5,
            price:9000,
           
            photo:goa,
            featured:true
        },
        {
            id:4,
            title:"Ladakh",
           
            days:6,
            price:7000,
           
            photo:ladakh,
  
        },
        {
            id:5,
            title:" Himachal",
           
            days:7,
            price:10000,
            maxGroupSize:10,
           
            photo:himachal,
       
        },
        {
            id:6,
            title:"South India",
            days:8,
            price:11000, 
            photo:south,
     
        },
        {
            id:6,
            title:"South India",
            days:8,
            price:11000, 
            photo:andaman,
     
        }
        ,
        {
            id:7,
            title:"Thailand",
            days:10,
            price:91000, 
            photo:thailand,
     
        }
    ]
   
    

  return (
  <>
 <div className='package_box'>
    
    <Row className="inside">
    <OwlCarousel className='owl-theme' loop nav {...options}>
    
{
tourData?.map(item=>(

    <div className='start'>
        <img src={item.photo} alt=""  style={{borderRadius:"10px"}}/>
    <div><p>{item.title} {item.days}D {item.days-1}N</p>
    <h6>Starting at just ₹{item.price}</h6></div>
    </div>
    

))


}
        
</OwlCarousel>







    </Row>
  {/* <Row className='d-flex flex-wrap'>

    {
     
       tourData?.map((item)=>(
        <Col key={item.id} lg={3} md={4} sm={6} xs={6} className="mb-4">
        <TourCard tour={item}/>
        </Col>
    ))
}
  </Row> */}
    </div></>
  )
}

export default HomeTours