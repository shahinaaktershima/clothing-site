import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product=useLoaderData();
    console.log(product);
    const {name,title,category,price,description,date,amount,image}=product
    return (
        <div>
           <div className="card  bg-base-100 shadow-xl">
  <figure className="">
    <img src={image} alt="Shoes" className="w-1/2 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Title: {title}</h2>
    <h2 className="card-title">Price: {price}</h2>
    <p>Category:{category} </p>
    <p>Posting Date:{date} </p>
    <p>Available amount:{amount}</p>
    <p>Description :{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;