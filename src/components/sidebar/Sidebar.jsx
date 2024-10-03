import React from 'react'  
import {Link} from "react-router-dom"
import cart from "../../assets/cart.png"
import list from "../../assets/list.png"
import order from "../../assets/order.png"
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to={"/addproduct"} style={{textDecoration:"none"}} >
         <div className="sidebar-item">
            <img src={cart} alt="" />
            <p>Add Product</p>
         </div>
        
        </Link>
        <Link to={"/listproduct"} style={{textDecoration:"none"}} >
         <div className="sidebar-item">
            <img src={list} alt="" />
            <p>Products List</p>
         </div>
        
        </Link>
        <Link to={"/orders"} style={{textDecoration:"none"}} >
         <div className="sidebar-item">
            <img src={order} alt="" />
            <p>Orders</p>
         </div>
        
        </Link>
        
        

    </div>
  )
}

export default Sidebar