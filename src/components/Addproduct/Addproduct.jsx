import React, { useState } from 'react'
import "./Addproduct.css"
import upload from "../../assets/upload.jpg"
function Addproduct() {
    const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:4000";

    const [image, setImage] = useState(false);
    const [details, setDetails] = useState({
        name: "",
        image: "", // This will store the file or its name.
        price: "",
        category: "women"
    });

    // Handles the file input
    const imageHandler = (e) => {
        setImage(e.target.files[0])
       
    };

    // Handles changes to text inputs and select dropdown
    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });

    };

    // For adding the product (add any API logic or form submission here)
    const addproduct = async () => {
        console.log(details);
        let responseData;
        let formData =new FormData();
        let product =details;
        formData.append("product",image);
        await fetch (`https://backend-e8zy.onrender.com//upload`,{
            method:"POST",
            headers:{
                Accept:"application/json",
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image=responseData.image_url;
       
            setDetails({
                name: "",
                image:"",
                price: "",
                category: "women",
              });
              setImage(false)
            await fetch(`https://backend-e8zy.onrender.com//addproduct`,{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(product)
            }).then((resp)=>{resp.json()}).then((data)=>{
                data.success?alert("product added"):alert("failed")
            })
        }
    };

  return (
    <div className='addproduct'>
        <div className="addproduct-item">
            <p>Product Name</p>
           <input value={details.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-item">
                <p>Price</p>
                <input value={details.price} onChange={changeHandler} type="text" name="price" />
            </div>
        </div>
        <div className="addproduct-item">
            <p>Product Category</p>
            <select name="category" value={details.category} onChange={changeHandler} className='addproduct-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>

            </select>
        </div>
        <div className="addproduct-item">
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image): upload} alt="" />
            </label>
            <input  onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={addproduct} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default Addproduct