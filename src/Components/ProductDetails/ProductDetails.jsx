import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    //  const [bidAmount, setBidAmount] = useState("");

    const {_id: productId} = useLoaderData();
    const [bids, setBids] = useState([])
    const bidModalRef = useRef(null)

    const {user} = use(AuthContext);
  
useEffect(() =>{
    fetch(`http://localhost:3000/products/bids/${productId}`)
    .then(res => res.json())
    .then(data =>{
        console.log('bids for this product', data)
        setBids(data);
    })
}, [productId])
    const handleBidModalOpen = () =>{
        //  setBidAmount('');
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
            buyer_image: user?.photoURL,
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
  icon: "success",
  timer:1500
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
                     className='btn- btn-primary m-5 p-2'>I want to buy</button>
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
            <div>
                <h3 className='text-3xl m-5'>Bids for this Product: <span className='text-primary'>{bids.length}</span></h3>

           {/* Biders Table */}
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
      SL NO :
        </th>
        <th>Buyer Name</th>
        <th>Buyer Email</th>
        <th>Bid Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bids.map ((bid, index) =>  <tr>
        
        {/* serial number show */}
        <th>{index + 1} </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
     }
      {/* row 2 */}
      
   
      
    </tbody>
 
  </table>
</div>

            </div>
        </div>
    );
};

export default ProductDetails;