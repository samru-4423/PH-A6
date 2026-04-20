import React from 'react';

const Banner = () => {
    return (
        <div className="hero py-5">
            <div className="hero-content grid grid-cols-2 w-[80%] mx-auto p-6">
                <div>
                    <div className='flex items-center gap-1 bg-base-300 w-[49%] py-1 px-2 rounded-full'>
                        <img src="./../public/navbarDot.png
                    " alt="" className='w-5 h-5 rounded-full' />
                        <h4 className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Availbale</h4>
                    </div>
                    <h1 className="text-6xl font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6 text-[18px] text-gray-400">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className='space-x-2'>
                        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                        <button className="btn border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full"><img src="./public/Play.png" alt="" /> Watch Demo</button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img
                        src="./public/banner.png"
                        className="w-[75%] rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;