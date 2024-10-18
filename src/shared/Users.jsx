import React from 'react'
import Sidebar from './Sidebar'

function Users() {
  return (
    <>
<div className="container menu pe-0 bg-dark text-light pt-5">
<div className="row ">
  <div className="col-md-2 sidebar shadow">
  <Sidebar/>
  </div>
  <div className="col-md-10  d-flex justify-center items-center flex-column user_acc">
  <h1 className='text-center fs-2 fw-bold textColor font'>USER DETAILS</h1>
  <table className='table table-bordered w-75 mt-5 rounded '>
  <thead>
    <th className='p-3'>  SL. NO</th>
    <th className='p-3'>NAME</th>
    <th  className='p-3'>EMAIL ADDRESS</th>
    <th  className='p-3'>DEACTIVATE ACCOUNT</th>
    

  </thead>
  <tbody>
  <td  className='p-2'>1</td>
    <td  className='p-2'>Jesna Jose</td>
    
    <td  className='p-2'>jesna@gmail.com</td>
    <td  className='p-2'>  <button className='bg-red-600 text-black font-bold py-1 px-2 rounded hover:bg-red-700'>
    DELETE
  </button></td>
  </tbody>

  <tbody>
  <td  className='p-2'>2</td>
    <td  className='p-2'>Jesna Jose</td>
    
    <td  className='p-2'>jesna@gmail.com</td>
    <td  className='p-2'>  <button className='bg-red-600 text-black font-bold py-1 px-2 rounded hover:bg-red-700'>
    DELETE
  </button></td>
  </tbody>

  <tbody>
  <td  className='p-2'>3</td>
    <td  className='p-2'>Jesna Jose</td>
    
    <td  className='p-2'>jesna@gmail.com</td>
    <td  className='p-2'>  <button className='bg-red-600 text-black font-bold py-1 px-2 rounded hover:bg-red-700'>
    DELETE
  </button></td>
  </tbody>

  <tbody>
  <td  className='p-2'>4</td>
    <td  className='p-2'>Jesna Jose</td>
    
    <td  className='p-2'>jesna@gmail.com</td>
    <td  className='p-2'>  <button className='bg-red-600 text-black font-bold py-1 px-2 rounded hover:bg-red-700'>
    DELETE
  </button></td>
  </tbody>
 </table>
  </div>

</div>
</div>
</>

  )
}

export default Users
// {/* 
//   <div className='shadow rounded p-2 mt-4 users d-flex justify-between item-center'>
// <h2 style={{fontSize:'17px'}} className='m-2'>Jesna Jose</h2>
// <button className='btn' style={{backgroundColor:' rgb(220, 190, 30)',color:'white'}}>Delete</button>
//    </div> */}
  

{/*  */}
 