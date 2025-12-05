import React, { use, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {

    const {_id: productId} = useLoaderData();
    const bidModalRef = useRef(null)

    const {user} = use(AuthContext);
  

    const handleBidModalOpen = () =>{
        bidModalRef.current.showModal();


    }




    const handleBidSubmit = (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const bid = e.target.bid.value;

        console.log(productId, name, email, bid)

        const newBid ={
            product: productId,
            buyer_name: name,
            buyer_email: email,
            bid_price: bid,
            status: 'pending'
        }
        fetch('http://localhost:3000/bids',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                bidModalRef.current.close();

                //sweetalert
                Swal.fire({
position: "top-end",
  title: "Congratulations!",
  text: "Your Bid Succesfull!",
  icon: "success"
});
            }
        
        })
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
    <h3 className="font-bold text-lg">Give the best offer!</h3>
    <p className="py-4">Offer something seller can not resist</p>

<form onSubmit={handleBidSubmit}>
        <fieldset className="fieldset">

          <label className="label">Name</label>
          <input type="text" className="input" name='name' readOnly
           defaultValue={user?.displayName || ""} />

           {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' readOnly
        defaultValue={user?.email || ""} />
    
{/* bid amount */}

   <label className="label">Bid</label>
          <input type="text" name='bid' className="input"  
            placeholder='your bid amount' />


          <button className="btn btn-neutral mt-4">Submit your Bid</button>
        </fieldset>
</form>




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