import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Zoom from 'react-reveal/Zoom';

const FeaturedCourse = () => {
    return (
        <div>
            <div className='my-40' id='featuredCourse'>
                <Zoom>
                    <h1 className='text-5xl font-serif text-purple-500'>Our Featured Courses</h1>
                    <div className=''>
                        <OwlCarousel className='grid lg:grid-cols-3 sm:grid-cols-1 mt-10' margin={10} autoplay autoplayTimeout={3000} loop>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-purple-500 duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Join Us Free</span>
                                            <span className="relative invisible">Join Us Free</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-purple-500 duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Join Us Free</span>
                                            <span className="relative invisible">Join Us Free</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-purple-500 duration-300 -translate-x-full bg-pink-500 group-hover:translate-x-0 ease">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Join Us Free</span>
                                            <span className="relative invisible">Join Us Free</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default FeaturedCourse;