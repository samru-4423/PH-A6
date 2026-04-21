import React from 'react';

const Transform = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-20'>
            <div className='w-[80%] mx-auto text-center'>
                <h2 className='text-[42px] font-bold'>Ready To Transform Your Workflow?</h2>
                <p className='text-[16px] font-extralight py-5'>Join thousands of preofessionals who are already ising Digitools to work smarter. <br />
                    Start your free trial today.</p>
                
                <div className='space-x-2'>
                    <button className="btn border-2 bg-white text-purple-600 hover:bg-transparent hover:text-white py-5 rounded-full">Explore Products</button>
                    <button className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-5 rounded-full">View Pricing</button>
                </div>
                <p className='text-[16px] font-extralight py-5'>14-day free trial &bull; No credit card required &bull; Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;