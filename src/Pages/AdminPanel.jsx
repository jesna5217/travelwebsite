import React, { useState } from 'react'
import './admin.css'


import Sidebar from '../shared/Sidebar'
import Account from '../shared/Account'
import styled from '@emotion/styled'


function AdminPanel() {
  
  return (
    <>
    <div className="container menu pe-0 bg-dark">
<div className="row " >
  <div className="col-md-2 sidebar shadow">
  <Sidebar/>
  </div>
  <div className="col-md-10 admin_acc">
<Account/>
  </div>

</div>





        </div></>
  )
}

export default AdminPanel