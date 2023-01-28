import React from 'react';

const CardInBanner = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-16 justify-items-center max-w-6xl mx-auto -mt-24'>
            <div className="card lg:card-side bg-base-100 shadow-xl w-96">
                <figure><img src="https://i.ibb.co/8cbgjjH/mentor.gif" alt="Expert Mentor" /></figure>
                <div className="card-body text-start font-serif">
                    <h2 className="card-title">Expert Mentor</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-96">
                <figure><img src="https://i.ibb.co/4JnVnky/access.gif" alt="Life time Access" /></figure>
                <div className="card-body text-start font-serif">
                    <h2 className="card-title">Life time Access</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-96">
                <figure><img src="https://i.ibb.co/DMJz2jb/courses.gif" alt="Best Courses" /></figure>
                <div className="card-body text-start font-serif">
                    <h2 className="card-title">Best Courses!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default CardInBanner;