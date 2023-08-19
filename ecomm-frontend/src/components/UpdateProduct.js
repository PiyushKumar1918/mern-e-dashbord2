import React, {  useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const UpdateProduct = ()=>{
    const [name,setName]= useState("");
    const [price,setPrice]=useState("");
    const[category, setCatrgory]=useState("");
    const[company,setCompany]=useState("")
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async()=>{

      
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result =await result.json();
        setName(result.name)
        setPrice(result.price)
        setCatrgory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async()=>{
        console.warn(name,price,category,company)

     
    }
    return(
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          

            <input type="text" placeholder="Enter Product Price" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
          

            <input type="text" placeholder="Enter Product Category" className="inputBox" value={category} onChange={(e)=>{setCatrgory(e.target.value)}}/>
         

            <input type="text" placeholder="Enter Product Company" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
       
            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    )
}
export default UpdateProduct;