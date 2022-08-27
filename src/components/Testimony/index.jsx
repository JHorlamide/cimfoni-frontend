import React from "react";
import Ellipse6 from '../../assets/images/Ellipse-6.png';
import RatingCard from '../RatingCard'

const index = () => {
  return (
    <div className='bg-skyBlue px-10 py-10 lg:px-20 md:px-8 lg:py-16 md:py-10'>
      <div className='flex flex-col space-y-5'>
        {/* ITEM ONE */}
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h1 className='mx-auto text-2xl text-center font-bold text-lightBlueText'>
            Our Student Feedbacks
          </h1>

          <p className='font-normal text-center text-lightBlueText'>
            Don't take our words for it. Hear what others have to say
          </p>
        </div>

        {/* ITEM TWO */}
        <div className='flex flex-col justify-center items-center space-y-5 lg:space-x-3 md:space-x-5 lg:space-y-0 md:space-y-0 space-x-5 lg:flex-row md:flex-row'>
          {[1, 2, 3].map((feedback, index) => (
            <RatingCard key={index} imageUrl={Ellipse6} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
