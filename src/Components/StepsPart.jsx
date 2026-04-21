import React from 'react';

const StepsPart = () => {
    return (
        <div className='w-full bg-base-200 py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Get Started In 3 Steps</h2>
                <p className='text-[16px] text-gray-400 py-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:w-[80%] w-[90%] mx-auto gap-10 py-5'>
                <div className='relative bg-white p-5 text-center rounded-xl'>
                    <div className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>
                        <p>01</p>
                    </div>
                    {/* <img src="./../public/user.png" alt="" className='block mx-auto bg-purple-200 p-3 rounded-full' /> */}
                    <div className='bg-purple-200 w-[20%] mx-auto p-3 mt-15 rounded-full'>
                        <img src="./../public/user.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold py-3'>Create Account</h2>
                    <p className='text-[16px] text-gray-400 pb-15'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='relative bg-white p-5 text-center rounded-xl'>
                    <div className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>
                        <p>02</p>
                    </div>
                    {/* <img src="./../public/package.png" alt="" className='block mx-auto bg-purple-200 p-3 rounded-full' /> */}
                    <div className='bg-purple-200 w-[20%] mx-auto p-3 mt-15 rounded-full'>
                        <img src="./../public/package.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold py-3'>Choose Products</h2>
                    <p className='text-[16px] text-gray-400 pb-15'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='relative bg-white p-5 text-center rounded-xl'>
                    <div className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>
                        <p>03</p>
                    </div>
                    <div className='bg-purple-200 w-[20%] mx-auto p-3 mt-15 rounded-full'>
                        <img src="./../public/rocket.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold py-3'>Start Creating</h2>
                    <p className='text-[16px] text-gray-400 pb-15'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default StepsPart;