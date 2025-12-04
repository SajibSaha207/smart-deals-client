import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Banner from '../Components/Home/Banner/Banner';
import LatestProduct from '../Components/LatestProduct/LatestProduct';
import Product from '../Components/Product/Product';

const RootLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
      
            <Outlet></Outlet>
                  
             
             
        </div>
    );
};

export default RootLayOut;