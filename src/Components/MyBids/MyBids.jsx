import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MyBids = () => {

    const {user} = use(AuthContext);
    const [bids, setBids] = useState([])

    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/bids?email=${user.email}`
            )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBids(data)
            })
        }
    }, [user?.email])
    return (
        <div>
            <h3>My Bids: {bids.length}</h3>
            {/* table */}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Product</th>
        <th>Seller</th>
        <th>Bid Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
    {
        bids.map((bid, index) =>   <tr key={bid._id}>
        <th>
       {index + 1}
        </th>
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
              <div className="font-bold">{bid.buyer_name}</div>
             
            </div>
          </div>
        </td>
        <td>
         {bid.buyer_email}
          
        </td>
        <td>{bid.bid_price}</td>
        <td>
{
    bid.status == 'pending' ?<div className="badge badge-warning">
                {bid.status}
            </div> : <div className="badge badge-success">
                {bid.status}
            </div>
}

        </td>
        <th>
          <button className="btn btn-outline btn-xs">Remove Bid</button>
        </th>
      </tr>)
    }
  
    
    </tbody>
 
  </table>
</div>
        </div>
    );
};

export default MyBids;