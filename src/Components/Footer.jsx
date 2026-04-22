import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-15 md:w-[80%] w-[90%] mx-auto md:py-20 py-5 border-b-2 border-gray-400'>
                <div className=''>
                    <h2 className='text-4xl font-bold pb-5'>DigiTools</h2>
                    <p className='text-gray-300 font-extralight'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 md:gap-15 gap-5'>
                        <div className=''>
                            <h2 className='text-2xl pb-2'>Product</h2>
                            <div className='text-gray-300 font-extralight'>
                                <p className='py-2'>Features</p>
                                <p className='py-2'>Pricing</p>
                                <p className='py-2'>Templates</p>
                                <p className='py-2'>Integrations</p>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-2xl pb-2'>Company</h2>
                            <div className='text-gray-300 font-extralight'>
                                <p className='py-2'>About</p>
                                <p className='py-2'>Blog</p>
                                <p className='py-2'>Careers</p>
                                <p className='py-2'>Press</p>
                            </div>

                        </div>
                        <div className=''>
                            <h2 className='text-2xl pb-2'>Resources</h2>
                            <div className='text-gray-300 font-extralight'>
                                <p className='py-2'>Documentation</p>
                                <p className='py-2'>Help Center</p>
                                <p className='py-2'>Community</p>
                                <p className='py-2'>Contact</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='md:ml-5'>
                    <h2 className='text-2xl'>Social Links</h2>
                    <div className='flex gap-3 py-3'>
                        <div className='bg-white w-[15%] p-1 rounded-full'>
                            <img src="/instagram.png" alt="" className='w-10' />
                        </div>
                        <div className='bg-white w-[15%] p-1 rounded-full'>
                            <img src="/facebook.png" alt="" className='w-10' />
                        </div>
                        <div className='bg-white w-[15%] p-1 rounded-full'>
                            <img src="/x.png" alt="" className='w-10' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex md:justify-between text-center w-[80%] mx-auto text-gray-300 font-extralight py-8'>
                <p>&copy; 2026 Digitools. All rights reserved.</p>
                <div className='flex gap-7'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;