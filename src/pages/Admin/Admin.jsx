import React from 'react'
import "./admin.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../components/Addproduct/Addproduct'
import Listproduct from '../../components/Listproduct/Listproduct'
import Orders from '../../components/orders/Orders'


function Admin() {
  return (
    <div className='admin'>

    <Sidebar/>
    <Routes>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/listproduct' element={<Listproduct/>}/>
      <Route path='/orders' element={<Orders/>}/>
    </Routes>
    </div>
  )
}

export default Admin