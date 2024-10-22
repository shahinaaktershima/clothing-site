
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Login/AuthProvider";





const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }
    const navlinks=<>
         <li>
          <Link className="hover:bg-sky-300 text-2xl font-bold text-white font-sans" to='/' >Home</Link>
         </li>
        
        <li>
         <Link className="hover:bg-sky-300 text-2xl font-bold text-white font-sans" to='/guideline'>Guideline</Link>
        </li>
       
    </>

    return (
        <div>
            <div className="navbar bg-blue-300 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navlinks
       }
      </ul>
    </div>

    <a className="btn btn-ghost text-xl">Boutique shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlinks
      }
    </ul>
  </div>
  <div className="navbar-end mr-20">
      {
    user?
    <div className="dropdown">
    <div tabIndex={0} role="button" className="m-1 lg:mr-14">
      {
        user&&
        <div className="w-12">
          <img className="h-[50px] w-[50px] rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      
      }
      </div>
    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 text-center">
      <li>{user?.displayName}</li>
     <li><Link to='/dashboard'>Dashboard</Link></li>
     
      <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
    </ul>
  </div>:  <NavLink to='/login' className='btn'>Join us</NavLink>
  }
      </div>

   
  </div>


</div>
        
    );
};

export default Navbar;