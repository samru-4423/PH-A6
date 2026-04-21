import React from 'react';

const PackagePlan = () => {
    return (
        <div className='md:py-20 py-5'>
            <div className='text-center'>
                <h2 className='md:text-5xl text-[40px] font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-[16px] text-gray-400 py-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:w-[80%] w-[90%] mx-auto gap-10 py-5'>
                <div className='bg-base-200 p-5 rounded-xl hover:-translate-y-2 transition duration-300'>
                    <h2 className='text-2xl font-bold'>Starter</h2>
                    <p className='text-[16px] text-gray-400 py-2'>Perfect for getting started</p>
                    <h2 className='text-4xl font-bold py-4'>$0<span className='text-[18px] text-gray-400 font-normal'>/Month</span></h2>
                    <div className='flex items-center gap-2 pt-4'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Access to 10 free tools</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Basic templates</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Community support</p>
                    </div>
                    <div className='flex items-center gap-2 pb-17'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>1 project per month</p>
                    </div>
                    <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Get Started Free</button>
                </div>
                <div className='text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-5 rounded-xl hover:-translate-y-2 transition duration-300'>
                    <p className=' bg-amber-100 text-orange-500 w-[35%] mx-auto text-center rounded-full -mt-8 mb-2'>Most Popular</p>
                    <h2 className='text-2xl font-bold'>Pro</h2>
                    <p className='text-[16px] font-light py-2'>Best for professionals</p>
                    <h2 className='text-4xl font-bold py-4'>$29<span className='text-[18px]  font-normal'>/Month</span></h2>
                    <div className='flex items-center gap-2 pt-4'>
                        <img src="./../public/check2.png" alt="" className='w-4 h-4' />
                        <p>Access to all premium tools</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check2.png" alt="" className='w-4 h-4' />
                        <p>Unlimited templates</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check2.png" alt="" className='w-4 h-4' />
                        <p>Priority support</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check2.png" alt="" className='w-4 h-4' />
                        <p>Unlimited projects</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check2.png" alt="" className='w-4 h-4' />
                        <p>Cloud sync</p>
                    </div>
                    <div className='flex items-center gap-2 pb-5'>
                        <img src="./../public/check2.png" alt="" className='w-4 h-4' />
                        <p>Advanced analytics</p>
                    </div>
                    <button className="btn bg-white text-purple-600 rounded-full btn-block">Start Pro Trial</button>
                </div>
                <div className='bg-base-200 p-5 rounded-xl hover:-translate-y-2 transition duration-300'>
                    <h2 className='text-2xl font-bold'>Enterprise</h2>
                    <p className='text-[16px] text-gray-400 py-2'>For teams and businesses</p>
                    <h2 className='text-4xl font-bold py-4'>$99<span className='text-[18px] text-gray-400 font-normal'>/Month</span></h2>
                    <div className='flex items-center gap-2 pt-4'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Everything in Pro</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Team collaboration</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Custom integrations</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Dedicated support</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>SLA guarantee</p>
                    </div>
                    <div className='flex items-center gap-2 pb-5'>
                        <img src="./../public/check.png" alt="" className='w-4 h-4' />
                        <p className='text-gray-400'>Custom branding</p>
                    </div>
                    <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Contact Sales</button>
                </div>
            </div>
        </div>

    );
};

export default PackagePlan;