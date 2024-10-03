import React, { useEffect, useState } from "react";
import "./Orders.css";
import { FaCircleXmark } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";



function Orders() {
  const [done, setDone] = useState(false);
  const [orders, setOrders] = useState([]);
  const [all_product,setAll_product]=useState([])

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAll_product(data);
        
       
        });},[]);
        
  const fetchOrders = async () => {
    const response = await fetch("http://localhost:4000/orders");
    const data = await response.json();
    setOrders(data);
  
  };

  useEffect(() => {
    fetchOrders();
    
  }, []);
  const remove_order = async (id) => {
    await fetch("http://localhost:4000/removeorder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchOrders(); // Refresh orders after deletion
  };
  const handleOrder = () => {
   setDone(!done)
  };
  return (
    <div className="receive-order">
     <div className="titles">
      <h5>Costumers</h5>
      <h5>Orders</h5>
     </div>
     <hr className="between" />

      <div className="order-list">
      
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order) => (
            <>
            <div key={order.id}
            style={{
              backgroundColor: done ? "rgb(172, 206, 172)" : "white" // Set color based on order's status
            }}
                className="order-item">
              
              <div className="customer">
              
              <p><span>Name: </span>{order.name}</p>
              <p><span>Phone: </span>{order.phone}</p>
              <p><span>State: </span>{order.state}</p>
              <p><span>City: </span>{order.city}</p>
              <p><span>Shipping: </span>{order.shipping}</p>
              </div>
              <div className="clothes">
              
             
                {order.cartItems && order.cartItems.length > 0 && Object.keys(order.cartItems[0])
  .filter(itemId => order.cartItems[0][itemId] > 0) // Access first object inside the array
  .map((itemId) => {
    const product = all_product.find(p => p.id.toString() === itemId.toString());
    return product ? (
      <li key={itemId}>
        {product.name} - ${product.price} x {order.cartItems[0][itemId]} {/* Access quantity */}
      </li>
    ) : null;
  
        
    })}</div>
    <div className="buttons-order">
    <IoCheckmarkCircle className="done" onClick={handleOrder}/>

<FaCircleXmark className="remove-icon" onClick={() => remove_order(order._id)} />
</div>
    
    </div>
   
    <hr className="between" />
    </>
    
      )))
      }
     
      
      </div>
    </div>
  )
}

export default Orders;