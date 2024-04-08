import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AddedProduct = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="grid grid-cols-4">
            {
                product.map(products=><div key={products._id} className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={products.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Title:{products.title}</h2>
                  <p className="font-bold">Category: {products.category}</p>
                  <p className="font-bold">Price: {products.price} Taka</p>
                  <p>Description:{products.description.slice(0,50)}</p>

                  <div className="card-actions justify-end">
                    <Link to={`/dashboard/details/${products._id}`}><button className="btn btn-primary">Details</button></Link>
                   
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default AddedProduct;