import React from 'react';

const CartDetails = ({item, handleRemove}) => {
    return (
        <div className='flex justify-between bg-gray-100 rounded-2xl p-5 my-3'>
            <div className='flex gap-3 '>
                <h2 className='text-3xl w-auto h-13 p-1 border-2 border-gray-200 rounded-full'>{item.icon}</h2>
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