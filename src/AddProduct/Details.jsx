import { useLoaderData } from "react-router-dom";
import useAxios from "../Login/useAxios"
import UseAdmin from "../Login/UseAdmin"

const Details = () => {
    const product=useLoaderData();
    const [userInfo]=UseAdmin();
    const axios=useAxios()
    console.log(product);
    const {name,title,category,price,description,date,amount,image}=product
    console.log(name);
    const handleClick=(product)=>{

      axios.post(`/payment?email=${userInfo?.email}`,product)
      .then(res=>{
        console.log(res.data.url);
        window.location.replace(res.data.url);
      })
    }
    return (
        <div>
           <div className="card  bg-base-100 shadow-xl">
  <figure className="">
    <img src={image} alt="Shoes" className="w-2/3 rounded-xl" />
  </figure>
  <div className="card-body  text-start">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Title: {title}</h2>
    <h2 className="card-title">Price: {price}</h2>
    <p>Category:{category} </p>
    <p>Posting Date:{date} </p>
    <p>Available amount:{amount}</p>
    <p>Description :{description}</p>
    <div className="card-actions">
      <button onClick={handleClick(product)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;