import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.config';
import { AuthContext } from '../../contexts/UserContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


// sweet alert things
const MySwal = withReactContent(Swal);

const Navbar = () => {
    const { googleLogout } = useContext(AuthContext);
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        googleLogout()
            .then(() => {
                MySwal.fire({
                    title: 'Are you sure You wanna Logout?',
                    text: "You won't be able to access you purchased Course!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Logout!'
                })
                .then((result) => {
                    if (result?.isConfirmed) {
                      MySwal.fire(
                        'Logged Out!',
                        'You are successfully logged out.',
                        'success'
                      )
                    }
                  })
            })
            .catch((error) => {
                if (error) {
                    MySwal.fire({
                        title: <p>`{error.message}`</p>,
                    })
                }
            })
    }
    return (
        <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 sticky top-0 z-40'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden  bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-500 rounded-box w-52 text-white">
                            <li><a href='#featuredCourse'>Featured Courses</a></li>
                            <li><a href='#package'>Packages</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Ongoing Batch
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-purple-400">
                                    <li><a>University D unit</a></li>
                                    <li><a>Projukti Unit</a></li>
                                </ul>
                            </li>
                            {user? <li><Link to='/udashboard'>User dashboard/ My classes</Link></li> : ''}
                            <li><Link to='/adashboard'>Admin dashboard</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Edu Web</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a href='#featuredCourse'>Featured Courses</a></li>
                        <li><a href='#package'>Packages</a></li>
                        <li tabIndex={0}>
                            <a>
                                Ongoing Batch
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-purple-400">
                                <li><a>University D unit</a></li>
                                <li><a>Projukti Unit</a></li>
                            </ul>
                        </li>
                        {user? <li><Link to='/udashboard'>User dashboard/ My classes</Link></li> : ''}
                        <li><Link to='/adashboard'>Admin dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {
                        user ? <button onClick={handleLogout} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Logout</span>
                            <span className="relative invisible">Logout</span>
                        </button> : <Link to='/login' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                            <span className="relative invisible">Login</span>
                        </Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;
