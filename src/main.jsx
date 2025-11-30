import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import RootLayOut from './Layout/RootLayOut.jsx';
import AllProduts from './Components/AllProducts/AllProduts.jsx';


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
   ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
