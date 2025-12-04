import React, { useRef } from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {

    const product = useLoaderData();
    const bidModalRef = useRef(null)
    console.log(product)

    const handleBidModalOpen = () =>{
        bidModalRef.current.showModal();

    }
    return (
        <div>
            {/* product info */}
            <div>
                <div>

                </div>
                <div>
                    <button onClick={handleBidModalOpen}
                     className='btn- btn-primary'>I want to buy</button>
<dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                </div>
            </div>
            {/* bids for this product */}
        </div>
    );
};

export default ProductDetails;