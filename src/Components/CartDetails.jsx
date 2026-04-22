import React from 'react';

const CartDetails = ({item, handleRemove}) => {
    return (
        <div className='flex justify-between bg-gray-100 rounded-2xl p-5 my-3'>
            <div className='flex gap-3 '>
                <h2 className='text-3xl w-auto p-1 bg-white rounded-full'><img src="./../public/Play.png" alt="" className='w-9 p-1' /></h2>
                <div>
                    <p className='text-[16px]'>{item.name}</p>
                    <p className='text-gray-400'>${item.price}</p>
                </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className='btn border-none bg-transparent text-red-500'>Remove</button>
        </div>
    );
};

export default CartDetails;