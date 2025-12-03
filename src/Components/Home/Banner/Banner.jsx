import React from 'react';
import leftImg from '../../../assets/bg-hero-left.png';
import rightImg from '../../../assets/bg-hero-right.png';
import { IoMdSearch } from 'react-icons/io';


const Banner = () => {
    return (
        <div className='max-w-[1600px] max-h-[500px] bg-gradient-to-r from-[#ff7bbf] to-[#8e7eff] border-none text-white p-15 '>
            <div className=' '>
                <div className=' text-center '>
                    <h2 className='font-bold text-4xl '>Deal Your<span className='text-primary'> Products</span><br/>In A<span className='text-primary'> Smart</span> Way !</h2>
                </div>
                <div className='pt-3'>
                    <h4 className='text-[#627382] text-center'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</h4>
                </div>
                {/* search bar */}

                <div class="w-[450px] flex justify-center mx-auto bg-white rounded-full shadow-md mt-7">
    <input 
        type="text" 
        placeholder="Search for products, categories..." 
        class="flex-1 px-4 py-2 text-sm text-gray-700 bg-transparent outline-none rounded-full"
    />
    
    <button 
        class="w-12 h-10 flex items-center justify-center rounded-full 
               bg-primary text-white text-lg"
    >
        <IoMdSearch />
    </button>
</div>
 
            </div>
        
            <div className='mt-5 '>
                <div className='flex justify-center items-center gap-4'>
                    <button className='btn btn-primary'>Watch All Product</button>
                    <button className='border border-purple-700 w-[150px] h-[37px]'>Post an Product</button>
                </div>
            </div>
          </div>
            
        
    );
};

export default Banner;