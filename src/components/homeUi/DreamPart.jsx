import React from 'react';
import Bounce from 'react-reveal/Bounce';



const DreamPart = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mb-20 max-w-6xl mx-auto item'>
            <Bounce>
                <div>
                    <img src="https://i.ibb.co/9cn2NKW/clip-math-teacher-near-the-blackboard.gif" alt="teacher" srcSet="" />
                </div>
                <div className='font-serif text-start mx-auto ml-10'>
                    <h1 className='text-4xl text-purple-500'>Let's Make your next success with our expert mentor !</h1>
                    <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, provident aperiam exercitationem esse adipisci ipsa ut. Sequi, in, sunt dolore sed minima vel expedita quisquam error, debitis beatae ducimus nam culpa quibusdam quas hic atque qui enim consequatur earum doloremque officiis eaque explicabo magnam deleniti. Atque beatae aliquid nostrum dolor!</p>
                </div>
            </Bounce>
        </div>
    );
};

export default DreamPart;