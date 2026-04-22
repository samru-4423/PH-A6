import React from 'react';

const CardFeature = ({ feature }) => {
    return (
        <div className='flex items-center gap-2'>
            <img src="./../public/check.png" alt="" className='w-4 h-4' />
            <p className='text-gray-400 py-2'>{feature}</p>
        </div>
    );
};

export default CardFeature;