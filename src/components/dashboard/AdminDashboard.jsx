import React from 'react';
import Footer from '../homeUi/Footer';
import Navbar from '../homeUi/Navbar';

const AdminDashboard = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
            <Navbar></Navbar>
            <h1 className='text-5xl font-serif text-white my-10 ml-10 text-start'>Welcome to Admin dashboard</h1>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* <!-- Page content here --> */}
                        <label htmlFor="my-drawer-2" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group lg:hidden"><span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Oper Sidebar</span>
                            <span className="relative invisible">Oper Sidebar</span></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content rounded-r-lg">
                            {/* <!-- Sidebar content here --> */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminDashboard;