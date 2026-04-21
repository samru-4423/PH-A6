import React from 'react';

const Card = ({ card }) => {
    return (
        <div className='w-full  p-3 border-2 border-base-300 rounded-2xl'>
            <div className='flex justify-end'>
                <p className='text-center bg-amber-200 text-orange-400  px-3 rounded-full w-auto'>{card.tag}</p>
            </div>

            <h2 className='text-3xl w-12 p-1 border-2 border-gray-200 rounded-full -mt-4'>{card.icon}</h2>

            <h2 className='text-[20px] font-bold py-2'>{card.name}</h2>

            <p className='text-gray-400 py-2'>{card.description}</p>

            <h2 className='font-bold text-xl'>${card.price}<span className='font-light text-[16px] text-gray-400'>/{card.period}</span> </h2>

            <div className='flex items-center gap-2'>
                <img src="./../public/check.png" alt="" className='w-4 h-4' />
                <p className='text-gray-400 py-2'>{card.features[0]}</p>
            </div>
            <div className='flex items-center gap-2'>
                <img src="./../public/check.png" alt="" className='w-4 h-4' />
                <p className='text-gray-400 py-2'>{card.features[1]}</p>
            </div>
            <div className='flex items-center gap-2'>
                <img src="./../public/check.png" alt="" className='w-4 h-4' />
                <p className='text-gray-400 py-2'>{card.features[2]}</p>
            </div>

            <div className="mt-6">
      <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Buy Now</button>
    </div>

        </div>
    );
};

export default Card;