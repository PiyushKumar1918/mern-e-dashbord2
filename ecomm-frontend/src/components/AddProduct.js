import React, {  useState } from "react";

const AddProduct = ()=>{
    const [name,setName]= useState("");
    const [price,setPrice]=useState("");
    const[category, setCatrgory]=useState("");
    const[company,setCompany]=useState("")
    const [error, setError]= useState(false)

    const addProduct = async()=>{

        console.warn(!name)
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;
        }
      


        console.warn(name,price,category,company)
        const userId = JSON.parse (localStorage.getItem('user'))._id;
        
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result)
        
    }
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           {error && !name && <span className="invalid-input">Enter Valid name</span>}

            <input type="text" placeholder="Enter Product Price" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
           {error && !price && <span className="invalid-input">Enter Valid price</span>}

            <input type="text" placeholder="Enter Product Category" className="inputBox" value={category} onChange={(e)=>{setCatrgory(e.target.value)}}/>
            {error && !category && <span className="invalid-input">Enter Valid category</span>}

            <input type="text" placeholder="Enter Product Company" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
          {error && !company && <span className="invalid-input">Enter Valid company</span>}
            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}
export default AddProduct