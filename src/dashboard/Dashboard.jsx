import { FaHome,    FaUsers, FaUtensilSpoon,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Login/UseAdmin";
import {  FaMedal } from "react-icons/fa6";



const Dashboard = () => {
    const [userInfo]=UseAdmin()
    console.log(userInfo);
 
    return (
        <div className="flex">
        <div className="w-64 min-h-screen bg-blue-300">
            
            <ul className="menu p-4">
              {
                userInfo.role === "admin"? ( <>
                                <li><NavLink to='/'><FaHome></FaHome>  Home</NavLink></li>
                  
                  <li ><NavLink to='/dashboard/addproducts' > <FaUtensilSpoon></FaUtensilSpoon>  Add items</NavLink></li>
                  <li ><NavLink to='/dashboard/user' ><FaUsers></FaUsers>All Users</NavLink></li>
                  <li ><NavLink to='/dashboard' ><FaUsers></FaUsers>Added product</NavLink></li>
                  <li><NavLink to='/dashboard/manageItem'><FaMedal></FaMedal> Manage Product</NavLink></li>
             
             
              </>):(<>

                  
              <li ><NavLink to='/' ><FaHome></FaHome>  Home</NavLink></li>
             
              <li ><NavLink to='/dashboard' ><FaUsers></FaUsers>Added product</NavLink></li>
                </>)
              
              }
              
              
            </ul>
        </div>
        <div className="flex-1 ">
            <Outlet></Outlet>
        </div>
        
    </div>
    );
};

export default Dashboard;