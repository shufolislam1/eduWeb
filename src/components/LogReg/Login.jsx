import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../homeUi/Footer';
import Navbar from '../homeUi/Navbar';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../../firebase/firebase.config';


// google login code
const auth = getAuth(app);
const provider =new GoogleAuthProvider()

const Login = () => {
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.log('error: ', error);
        })
    }
    return (
        <div className=' bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
            <Navbar></Navbar>
            <div className="hero min-h-screen  mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/QvSc8GN/login.gif" alt="login" srcSet="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-opacity-50">
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label mt-4 ">
                                    <a href="#" className="label-text-alt link link-hover text-pink-500">Forgot password?</a>
                                </label>
                                <label className="label mt-4 ">
                                    <h1>New to Edu Web?</h1>
                                    <Link to='/registration' className="label-text-alt link link-hover text-pink-500">Join Now!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleLogin} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                                    <span className="relative invisible">Login</span>
                                </button>
                            </div>
                        </div>
                        <div className="divider">OR</div>
                        <div className="h-20">
                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">Continue With Google</span>
                                <span className="relative invisible">Continue With Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;