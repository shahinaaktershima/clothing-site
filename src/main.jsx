import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Login/Register';
import AuthProvider from './Login/AuthProvider';
import AddProduct from './AddProduct/AddProduct';
import AddedProduct from './AddProduct/AddedProduct';
import Details from './AddProduct/Details';
import Usersetup from './Login/Usersetup';
import Dashboard from './dashboard/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },
      
      
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard/addproducts',
        element:<AddProduct></AddProduct>
      },
      
      {
      
      
        path:'/dashboard/user',
        element:<Usersetup></Usersetup>
      
    },
   
    {
      path:'/dashboard',
      element:<AddedProduct></AddedProduct>
    },
    {
      path:'/dashboard/details/:id',
      element:<Details></Details>,
      loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
    }
  
  
  ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
