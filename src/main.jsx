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


const router = createBrowserRouter([
  {
    path:"/",
    Component: RootLayOut,
   children:[
    {
      index: true,
      Component: AllProduts,
    },
    {
      path: 'allproducts',
      Component:AllProduts
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
    }
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
