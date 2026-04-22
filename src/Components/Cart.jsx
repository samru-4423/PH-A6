import React, { Suspense } from 'react';
import CartDetails from './CartDetails';

const Cart = () => {
    return (
        <div className='md:w-[80%] md:mx-auto mx-2 border-2 border-gray-300 md:p-7 p-4 rounded-2xl'>
            <h2 className='font-bold text-3xl'>Your Cart</h2>

            {
                <Suspense fallback={<h3>Loading...</h3>}>
                    <CartDetails></CartDetails>
                </Suspense>
            }

            <div className='flex justify-between'>
                <p className='text-gray-400'>Total:</p>
                <p className='font-bold text-[20px]'>$79</p>
            </div>
            <div className="mt-6">
                <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default Cart;