import React from 'react';

const Overall = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] my-5'>
            <div className='grid grid-cols-3  items-center text-center justify-between text-white md:w-[85%] mx-auto md:p-12 p-5'>
                <div className='border-r border-gray-400'>
                    <h2 className='font-bold md:text-5xl text-3xl'>50K+</h2>
                    <p className='md:text-[20px] text-[14px] font-light'>Active Users</p>
                </div>
                <div className='border-r border-gray-400  '>
                    <h2 className='font-bold md:text-5xl text-3xl'>200+</h2>
                    <p className='md:text-[20px] text-[14px] font-light'>Premium Tools</p>
                </div>
                <div>
                    <h2 className='font-bold md:text-5xl text-3xl'>4.9</h2>
                    <p className='md:text-[20px] text-[14px] font-light'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Overall;