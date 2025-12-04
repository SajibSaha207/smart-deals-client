import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProduct = ({latestProductsPromise}) => {
    const products = use(latestProductsPromise);
    console.log(products)
    return (
        <div className='pt-10'>
            <h2 className='text-5xl text-center'>Recent<span className='text-primary'> Products</span></h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <Product key ={product._id}product = {product}></Product>)
            }
        </div>
        </div>
    );
};

export default LatestProduct;