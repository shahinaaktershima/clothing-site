import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import useAxios from "./useAxios";


const Login = () => {
    const { register, handleSubmit } = useForm();
    const axios=useAxios()
    const [err,seterr]=useState('')
    const {signIn,googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    console.log('state in the location',location.state);
    const onSubmit = (data) => {console.log(data)
      
        const email=data.email;
        const password=data.password;
        console.log(email,password);
        signIn(email,password)
        .then(res=>{
            console.log(res.user);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: 'Logged  in  successfully',
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from,{replace:true})
        })
        .catch(err=>{
            console.log(err);
            seterr(err)
        })}
    
    

    const handleGoogle=()=>{
      googleSignIn()
      .then(result=>{
        console.log(result.user);
        navigate('/')
        const userInfo={
          email:result.user?.email,
          name:result.user?.displayName
      }
      axios.post('/user',userInfo)
      .then(res=>{
          console.log(res.data);
        navigate('/')
      })
      })
          .catch(error=>{
            console.log(error);
            
        })
    }
    return (
        <div>
          <h1 className="text-4xl font-bold text-center my-2">Login now!</h1>

        <p className="text-blue-600 text-center">{err?.message}</p>
          <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
          
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  p-4 text-center">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Your email</span>
   
  </label>
  <input
   {...register("email")}
  type="email" placeholder="your email" className="input input-bordered w-full " />
  
</div>
<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Password</span>
   
  </label>
  <input
   {...register("password",{required:true})}
  type="password" placeholder="your password" className="input input-bordered w-full " />
  
</div>
     
<div className="form-control mt-6">
                
                <input  className="btn btn-primary" type="submit" value="Login" />
              </div>
    </form>
             <p className="my-2">Dont have an account to job space ? Please go to <Link className='text-blue-600 text-xl font-bold' to='/register'>Register</Link></p>
              <button onClick={handleGoogle} className="btn my-2 bg-blue-600 text-white w-3/4 mx-auto">Log in with google</button>
            </div>
            
          </div>
         
        </div>
      </div>
    );
};

export default Login;