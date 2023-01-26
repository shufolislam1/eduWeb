import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const FeaturedCourse = () => {
    return (
        <div className='my-40'>
            <h1 className='text-6xl font-serif text-purple-500'>Our Featured Courses</h1>
            <div className='mt-10'>
                <OwlCarousel margin={10} autoplay autoplayTimeout={3000} loop>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default FeaturedCourse;