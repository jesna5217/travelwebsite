import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './thank.css'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf'; // Import jsPDF
import html2canvas from 'html2canvas'; // Import html2canvas

function ThankYou() {
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
   <Container className=''>
    <Row>
        <Col lg="12">
        <div id='invoiceContent' className='p-5'>
  <div className='d-flex justify-center items-center p-5 flex-column'>
    <p className='thank textColor  fw-bold'>Thank You!</p>
    <p className='fs-4 invoice'>Dear Jesna Jose,</p>
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

  <h1 className=' text-center mt-5 fs-2 fw-bold checkout font'>CHECKOUT DETAILS</h1>

  <div className='d-flex flex-column m-5 border p-4 rounded checkoutBox' style={{ backgroundColor: '#f8f9fa' }}>
    <p><strong className='textColor'>Name:</strong> <span className='fs-5'>Jesna Jose</span></p>
    <p><strong className='textColor'>Phone No.:</strong> <span className='fs-5'>9804672901</span></p>
    <p><strong className='textColor'>Tour Package:</strong> <span className='fs-5'>Munnar 3D 2N</span></p>
    <p><strong className='textColor'>Number of Guests:</strong> <span className='fs-5'>10</span></p>
    <p><strong className='textColor'>GST and Service Charges:</strong> <span className='fs-5'>₹3,710.13</span></p>
    <p><strong className='textColor'>Total Amount Paid:</strong> <span className='fs-5'>₹33,710.13</span></p>
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