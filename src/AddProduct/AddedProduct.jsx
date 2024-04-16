import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AddedProduct = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://agro-firm-server.vercel.app/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const breakfast=product.filter(item=>item.name==='Cow')
    const lunch=product.filter(item=>item.name==='goat')
    const dinner=product.filter(item=>item.name==='duck')
    const handleSubmit=(e)=>{
      e.preventDefault();
      const name=e.target.text.value;
      if(name==='cow'){
          setProduct(breakfast);
      }
      if(name==='Goat'){
          setProduct(lunch);
      }
      if(name==='Duck'){
          setProduct(dinner)
      }
         
  }
    return (
        <div>
          <div className="flex items-center">
          <form className="flex my-2" onSubmit={handleSubmit}>
      <input name="text" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button  className="btn btn-primary -ml-4">Search</button>
      </form>

          </div>
          <div className="grid grid-cols-3 gap-5">
            {
                product.map(products=><div key={products._id} className="card card-compact h-[450px] bg-base-100 shadow-xl">
                <figure><img className="w-full h-[250px] " src={products.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Title:{products.title}</h2>
                  <p className="font-bold">Category: {products.category}</p>
                  <p className="font-bold">Price: {products.price} Taka</p>
                  <p>Description:{products.description.slice(0,50)}</p>

                  <div className="card-actions justify-end">
                    <Link to={`/dashboard/details/${products._id}`}><button className="btn btn-primary">Buy now</button></Link>
                  </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default AddedProduct;