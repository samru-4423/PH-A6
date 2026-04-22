import React from 'react';
import CardFeature from './CardFeature';

const Card = ({ card }) => {
    const isTagType = card.tagType;
    // console.log(isTagType);

    const isFeatures = card.features;
    //console.log(isFeatures);

    const tagStyles =
        isTagType === "best-seller"
            ? "bg-amber-100 text-orange-400"
            : isTagType === "popular"
                ? "bg-purple-100 text-purple-500"
                : isTagType === "new"
                    ? "bg-green-100 text-green-500"
                    : "";
    return (
        <div className='flex flex-col w-full p-3 border-2 border-base-300 rounded-2xl hover:-translate-y-2 transition duration-300'>
            <div className='flex justify-end'>
                <p className={`text-center px-3 rounded-full w-auto ${tagStyles}`}>{card.tag}</p>
            </div>

            <h2 className='text-3xl w-12 p-1 border-2 border-gray-200 rounded-full -mt-4'>{card.icon}</h2>

            <h2 className='text-[20px] font-bold py-2'>{card.name}</h2>

            <p className='text-gray-400 py-2'>{card.description}</p>

            <h2 className='font-bold text-xl'>${card.price}<span className='font-light text-[16px] text-gray-400'>/{card.period}</span> </h2>

            {/* <div className='flex items-center gap-2'>
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
            </div> */}

            <div className='flex-1'>
                {
                    isFeatures.map((feature, index) => <CardFeature key={index} feature={feature}></CardFeature>)
                }
            </div>

            <div className="mt-6">
                <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Buy Now</button>
            </div>

        </div>
    );
};

export default Card;