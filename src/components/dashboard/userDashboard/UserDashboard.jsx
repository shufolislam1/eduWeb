import React from 'react';
import Footer from '../../homeUi/Footer';
import Navbar from '../../homeUi/Navbar';

const UserDashboard = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
            <Navbar></Navbar>
            <h1 className='text-5xl font-serif text-white mt-10 ml-10 text-start'>Welcome to dashboard</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10 text-start'>
                <div className="card lg:card-side bg-base-100 shadow-xl m-10 p-8 font-serif">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course Name</h2>
                        <p>Mentor name</p>
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        <div className="card-actions mt-5">
                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
                                <span className="relative invisible">continue</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl m-10 p-8 font-serif">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course Name</h2>
                        <p>Mentor name</p>
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        <div className="card-actions mt-5">
                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
                                <span className="relative invisible">continue</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl m-10 p-8 font-serif">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course Name</h2>
                        <p>Mentor name</p>
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        <div className="card-actions mt-5">
                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
                                <span className="relative invisible">continue</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl m-10 p-8 font-serif">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course Name</h2>
                        <p>Mentor name</p>
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        <div className="card-actions mt-5">
                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Continue</span>
                                <span className="relative invisible">continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserDashboard;