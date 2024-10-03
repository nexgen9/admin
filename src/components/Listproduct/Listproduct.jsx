import React, { useEffect, useState } from 'react'
import"./Listproduct.css"
import  remove from "../../assets/remove.png"

function Listproduct() {
  const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";


  const [all,setAll]=useState([]);
  const fetchInfo=async()=>{
    const response = await fetch(`${baseUrl}/allproducts`);
    const data = await response.json();
    
    setAll(data);
  }

  useEffect(()=>{
    fetchInfo()
  },[])
  const remove_product=async(id)=>{
    await fetch(`${baseUrl}/removeproduct`,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify({id:id})

    })
    await fetchInfo()
  }


  return (
    <div className='listproduct'>
      
      <h1>All Products List </h1>
       <div className="listproduct-main">
        <p>Products</p>
        <p>Title</p>
        
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
       </div>
 <div className="listproduct-all">
  <hr/>
  {all.map((product, index) =>{
    return<div key={index} className="listproduct-main format">
      <img src={product.image} alt="" className="listproduct-image" />
      <p>{product.name}</p>
      <p>${product.price}</p>
       <p>{product.category}</p>
       <img onClick={()=>{remove_product(product.id)}} src={remove} alt="" className="listproduct-remove" />
    </div>
   
    
  })}
 </div>
    </div>
  )
}

export default Listproduct