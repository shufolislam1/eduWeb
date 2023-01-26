import React from 'react';

const HomeBanner = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-20 my-36 py-12 max-w-6xl mx-auto'>
            <div>
                <h1>dfgrffdsdfg</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore maxime aliquam veniam! Laboriosam sunt sequi distinctio obcaecati illo cumque voluptates odit, aspernatur unde perspiciatis debitis! Harum veniam hic, aspernatur reprehenderit sapiente, assumenda consequatur ex voluptas nemo minus eius ad!</p>
                <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Join Us Free</span>
                    <span class="relative invisible">Join Us Free</span>
                </a>
            </div>
            <div>
                <img src="https://i.ibb.co/vJFTw4b/twinkle-online-education.gif" alt="education" srcset="" />
            </div>
        </div>
    );
};

export default HomeBanner;