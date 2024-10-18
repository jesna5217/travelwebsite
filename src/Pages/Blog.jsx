import React from 'react'
import icon from "../assets/travelicon.webp"
import './Blog.css'
import travela from "../assets/travel2.avif"
import travelb from "../assets/travel3.avif"
import travelc from "../assets/travel13.avif"
import traveld from "../assets/travel5.avif"
import travele from "../assets/travel6.avif"
import travelf from "../assets/travel7.avif"
import travelg from "../assets/travel2.avif"
import travelh from "../assets/travel9.avif"
import traveli from "../assets/travel10.avif"
import travelj from "../assets/travel11.avif"
import travelk from "../assets/travel2.avif"
import travell from "../assets/travel4.avif"

function Blog() {
  return (
   <>
   <div className="blog pt-5">
    <div className='d-flex justify-center items-center travel'>
    <img src={icon} alt="" className='mb-3'/>
    </div>
     <div className='images' >

<div className="row" >
    <div className="col-md-3">
    <img src={traveld} alt=""  />
    <img src={travelh} alt="" className='mt-2' />
    <img src={travelc} alt="" className='mt-5'/>
    </div>
    <div className="col-md-3">
    <img src={travelb} alt=""  />
    <img src={travelj} alt="" className='mt-2' />
    </div>
    <div className="col-md-3">
    <img src={travela} alt="" />
    <img src={travell} alt=""  className='mt-5'/>
    </div>
    <div className="col-md-3">
    <img src={travelf} alt=""  />
    <img src={traveli} alt="" className='mt-2' />
    </div>

</div>

<div className="row mt-3" >
<div className="col-md-3">
    <img src={traveld} alt=""  />
    <img src={travelh} alt="" className='mt-2' />
    <img src={travelc} alt="" className='mt-5'/>
    </div>
    <div className="col-md-3">
    <img src={travelb} alt=""  />
    <img src={travelj} alt="" className='mt-2' />
    </div>
    <div className="col-md-3">
    <img src={travela} alt="" />
    <img src={travell} alt=""  className='mt-5'/>
    </div>
    <div className="col-md-3">
    <img src={travelf} alt=""  />
    <img src={traveli} alt="" className='mt-2' />
    </div>
</div>

 
     </div>
    </div></>
  )
}

export default Blog