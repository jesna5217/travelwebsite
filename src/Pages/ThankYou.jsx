import React, { useContext } from 'react'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import './thank.css'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf'; // Import jsPDF
import html2canvas from 'html2canvas'; // Import html2canvas
import { bookingResponseContext } from '../context/ContextShare';

function ThankYou() {

  const {bookingResponse}=useContext(bookingResponseContext)
  const options={day:"numeric",month:"numeric",year:"numeric"}
 
      const downloadInvoice = () => {
       
        const input = document.getElementById('invoiceContent');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('invoice.pdf');
        });
        
      };
  return (
   <>
   <Container className='thanks'>
<Row>
<div className='d-flex justify-center items-center p-5 flex-column'>
    <p className='thank textColor  fw-bold'>Thank You!</p>
    <p className='fs-4 invoice'>Dear {bookingResponse.fullName},</p>
    <p>
      <span style={{ fontFamily: "Italianno, cursive" }} className='fs-5'>from </span>
      <span className='logo font-bold text-xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif" }}>
        day<span style={{ color: 'rgb(220, 190, 30)' }}>Out.</span>
      </span>
    </p>
    <p className='fs-5 fw-bold invoice'>Your tour is booked!</p>
    <p className='soon'>Our sales executives will contact you soon...</p>
    <p className='thank textColor '>Happy Holidays!</p>
  </div>

</Row>

    <Row>
        <Col lg="12">
        <div id='invoiceContent' className='p-5'>
  
<div className='head'>  <h1 className=' text-center fs-2 fw-bold checkout font'>INVOICE</h1></div>
<div className="row p-3 invoice">
  <div className="col-md-3">
    <h2 className='mt-2 fw-bold'>dayOut </h2>
    <p>dayOut@gmail.com</p>
    <p>MG road</p>
    <p>Kerala, India</p>
    <p>Phone no. : 9895000000</p>
  </div>
  <div className="col-md-6">
</div>
<div className="col-md-3">
  <p><span className='fw-bold'>Date : </span> {new Date().toLocaleDateString("en-US",options)}</p>
  <p><span className='fw-bold'>#Invoice : </span>12121</p>
</div>
 </div>

 <div className='head'>  <h1 className=' text-center  fs-3 fw-bold checkout font'>BOOKING DETAILS</h1></div>
<div className='row mt-3 invoice'>
  <div className="col-md-5">
    <h3 className='fw-bold'>Booked by</h3>
    <p>{bookingResponse.fullName}</p>
    <p>{bookingResponse.userEmail}</p>
    <p>{bookingResponse.phone}</p>
  </div>
  <div className="col-md-2"></div>
  <div className="col-md-5">
  <ListGroup>
    <ListGroupItem>Customer Name : {bookingResponse.fullName}</ListGroupItem>
    <ListGroupItem>Package Name : {bookingResponse.title}</ListGroupItem>
  <ListGroupItem>Guest Number : {bookingResponse.guestNo}</ListGroupItem>
  <ListGroupItem>Amount paid : ₹ {bookingResponse.price}</ListGroupItem>
  <ListGroupItem>Date : {bookingResponse.bookAt}</ListGroupItem>
  </ListGroup>

  </div>
</div>


  <div className='text-center mt-4 end'>
    <p className='textColor fs-6'>We hope you have an amazing experience!</p>
    <p className='textColor fs-6'>For any inquiries, contact us at <a href="mailto:dayout@gmail.com" className='textColor'>dayout@gmail.com</a></p>
  </div>
</div>
    <div className='d-flex justify-between download'>
    <Link to={'/'}>
          <h1 className='mt-5 font-bold'><i class="fa-solid fa-arrow-left me-2" style={{color:'rgb(220, 190, 30)'}}></i>BACK TO HOME</h1>
</Link>

<button className='btn btn-warning mt-5' onClick={downloadInvoice}>Download Invoice</button>
    </div>
        </Col>
        </Row>
       </Container></>
  )
}

export default ThankYou