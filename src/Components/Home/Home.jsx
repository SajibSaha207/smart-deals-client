import React from 'react';
import LatestProduct from '../LatestProduct/LatestProduct';


const latestProductsPromise = fetch('http://localhost:3000/latest-products')
.then(res => res.json());

const Home = () => {
    return (
        <div>
            <h2>this home</h2>
            <LatestProduct latestProductsPromise={latestProductsPromise}></LatestProduct>
        </div>
    );
};

export default Home;