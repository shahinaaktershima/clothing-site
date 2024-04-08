import { FaHome,  FaSearch, FaUsers, FaUtensilSpoon,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Login/UseAdmin";



const Dashboard = () => {
    const [userInfo]=UseAdmin()
    console.log(userInfo);
 
    return (
        <div className="flex">
        <div className="w-64 min-h-screen bg-orange-400">
            
            <ul className="menu p-4">
              {
                userInfo?  <>
                
              <li ><NavLink to='/' ><FaHome></FaHome>  Home</NavLink></li>
              <li ><NavLink to='/dashboard' ><FaUsers></FaUsers>Added product</NavLink></li>
             
              </>:<>
                <li><NavLink to='/'>home</NavLink></li>
                  
                <li ><NavLink to='/dashboard/addproducts' > <FaUtensilSpoon></FaUtensilSpoon>  Add items</NavLink></li>
                <li ><NavLink to='/dashboard/user' ><FaUsers></FaUsers>All Users</NavLink></li>
                <li ><NavLink to='/dashboard' ><FaUsers></FaUsers>Added product</NavLink></li>
               
                </>
              
              }
              
              
            </ul>
        </div>
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
        
    </div>
    );
};

export default Dashboard;