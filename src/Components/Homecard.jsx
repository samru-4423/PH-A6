import React, { use } from 'react';
import Card from './Card';

const Homecard = ({ cardPromise }) => {
    const cardContent = use(cardPromise);
    console.log(cardContent);
    return (
        <div className=' w-[80%] mx-auto '>
            <div className='text-center py-15'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[16px] text-gray-400 py-5'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity. </p>
                <div className='border-2 border-base-200 w-[15%] mx-auto space-x-1 rounded-full'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Products</button>
                    <button className='btn bg-transparent border-none rounded-full'>Cart (0)</button>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {
                    cardContent.map(card => <Card card={card}></Card>)
                }
            </div>

        </div>
    );
};

export default Homecard;