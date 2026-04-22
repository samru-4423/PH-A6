import React, { Suspense } from 'react';
import CartDetails from './CartDetails';

const Cart = ({ cartItems, handleRemove, handleClearCart }) => {

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='md:w-[80%] md:mx-auto mx-2 border-2 border-gray-300 md:p-7 p-4 rounded-2xl'>
            <h2 className='font-bold text-3xl'>Your Cart</h2>

            {
                // <Suspense fallback={<h3>Loading...</h3>}>
                //     <CartDetails></CartDetails>
                // </Suspense>
                cartItems.length === 0
                    ? <p className=' py-4 text-center'><img src="/shopping.png" alt="" className='w-25 mx-auto'/>Your cart is empty</p>
                    : cartItems.map(item => (
                        <CartDetails
                            key={item.id}
                            item={item}
                            handleRemove={handleRemove}
                        />
                    ))
            }

            <div className='flex justify-between'>
                <p className='text-gray-400'>Total:</p>
                <p className='font-bold text-[20px]'>${total}</p>
            </div>
            <div className="mt-6">
                <button onClick={handleClearCart} className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default Cart;