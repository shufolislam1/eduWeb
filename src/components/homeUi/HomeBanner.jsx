import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const HomeBanner = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-20 pt-12 pb-44  mx-auto bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
            <Fade left>
            <div className='text-start mx-auto ml-10'>
                <h1 className='text-6xl text-white font-serif'>
                    <Typewriter
                        options={{
                            strings: ['Write whatever', 'you want'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className='text-white font-serif text-xl my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempore maxime aliquam veniam! Laboriosam sunt sequi distinctio obcaecati illo cumque voluptates odit, aspernatur unde perspiciatis debitis! Harum veniam hic, aspernatur reprehenderit sapiente, assumenda consequatur ex voluptas nemo minus eius ad!</p>
                <Link to='/registration' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Join Us Free</span>
                    <span className="relative invisible">Join Us Free</span>
                </Link>
            </div>
            </Fade>
            <Fade right>

            <div className=''>
                <img src="https://i.ibb.co/vJFTw4b/twinkle-online-education.gif" alt="education" srcSet="" />
            </div>
            </Fade>
        </div>
    );
};

export default HomeBanner;