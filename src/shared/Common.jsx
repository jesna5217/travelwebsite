import React from 'react'
import './Common.css'
import bg from "../assets/bg2.avif"
import { Col, Row ,Container} from 'react-bootstrap'
function Common({title}) {
  return (
   <section className="common">
   
    <Container>
        <Row>
            <Col lg="12">
          <div className='caption_tour'>
          <img src={bg} class="w-full h-64 r" alt="" />
          <h1 className='text-8xl font-semibold' style={{color:'white'}}>{title}</h1></div></Col>
        </Row>
    </Container>
   </section>
  )
}

export default Common