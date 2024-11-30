import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddProduct = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleJobs=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const title=form.title.value;
        const category=form.category.value;
        const price=form.price.value;
        const description=form.description.value;
        const date=form.date.value;
        const image=form.image.value;
        const amount=form.amount.value;
        console.log(name,title,category,price,description,date,amount);
        form.reset('')
        const Product={name,title,category,price,description,date,amount,image}
       console.log(Product);
        fetch('https://cloth-server-tan.vercel.app/product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Product)
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'products Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                navigate(location?.state?location?.state:'/')  
            }
           })

    
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add Product</h2>
        <form onSubmit={handleJobs} >
            {/* form name  row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Brand name row */}
            <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Category</span>
   
  </label>
  <select defaultValue={'default'} name="category"  className="select select-bordered w-full ">
  <option  value={'default'}>select category</option>
  <option value="child">child</option>
        <option value="old">Old</option>
        <option value="middle">Middle</option>
       
        
</select>
  
</div>
<div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="price" placeholder="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Posting date</span>
                    </label>
                    <label className="input-group">
                    <input type="date" name="date" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form price row */}
            <div className="md:flex mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Number of Amount</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="amount" placeholder="amount" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input  type="submit" value="Add Products" className="btn btn-block" />

        </form>
    </div>
    );
};

export default AddProduct;