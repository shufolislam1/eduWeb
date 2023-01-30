import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Footer from '../homeUi/Footer';
import Navbar from '../homeUi/Navbar';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

// sweet alert things
const MySwal = withReactContent(Swal);

// google provider
const provider = new GoogleAuthProvider();
const Registration = () => {
    // import necessary things from context.
    const { cUserEmailPass, createUserWithGoogle } = useContext(AuthContext);

    //************* login with google***********
    const googleResgistrationHandler = () => {
        createUserWithGoogle(provider)
            .then((result) => {
                const user = result.user;
                if (user) {
                    MySwal.fire({
                        title: "Done!",
                        text: "Registration with Google successfull!",
                        icon: "success",
                    })
                }
            })
            .catch((error) => {
                if (error) {
                    MySwal.fire({
                        title: <p>`{error.message}`</p>,
                    })
                }
            })
    }

    //************* registration with email and pasword***********
    const handleRegistration = event => {
        event.preventDefault();

        const form = event?.target;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;

        cUserEmailPass(email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    MySwal.fire({
                        title: "Done!",
                        text: "Registration successfull!",
                        icon: "success",
                    })
                }
            })
            .catch((error) => {
                if (error) {
                    MySwal.fire({
                        title: <p>`{error.message}`</p>,
                    })
                }
            })
        event.target.reset();

    }
    return (
        <div>
            <div className=' bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
                <Navbar></Navbar>
                <Jump>
                    <Fade>
                        <div className="hero min-h-screen  mx-auto">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="text-center lg:text-left">
                                    <img className='ml-10' src="https://i.ibb.co/NYpGbmz/reg.gif" alt="registration" srcSet="" />
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-opacity-50">
                                    <form onSubmit={handleRegistration} className="card-body ">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label mt-4 ">
                                                <h1>Already have an account?</h1>
                                                <Link to='/login' className="label-text-alt link link-hover text-pink-500">Login</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
                                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">Registration</span>
                                                <span className="relative invisible">Registration</span>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="divider">OR</div>
                                    <div className="h-20">
                                        <button onClick={googleResgistrationHandler} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group">
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
                    </Fade>
                </Jump>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Registration;