import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import RootLayOut from './Layout/RootLayOut.jsx';
import AllProduts from './Components/AllProducts/AllProduts.jsx';
import AuthProvide from './Context/AuthProvide.jsx';
import Register from './Components/Register/Register.jsx';
import MyProducts from './Components/MyProducts/MyProducts.jsx';
import MyBids from './Components/MyBids/MyBids.jsx';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayOut></RootLayOut>,
   children:[
    {
      index: true,
      Component: Home,
    },
    {
      path: 'allproducts',
      element:(
        <PrivateRoute>
          <AllProduts />
        </PrivateRoute>
      )
    },
    {
      path: 'register',
      Component: Register,
    },
    {
      path:'myproducts',
      element:<MyProducts></MyProducts>,
    },
    {
      path:'mybids',
      element:<MyBids></MyBids>
    },
    {
      path: 'login',
      Component: Login,
    },
    {
      path:'productdetails/:_id',
      loader: ({params}) => fetch(`http://localhost:3000/products/${params._id}`),
      Component:ProductDetails,
    },
    
   ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvide>
   <RouterProvider router={router} />
   </AuthProvide>
  </StrictMode>,
)
