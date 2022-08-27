import React from "react";
import FAQItem from './FAQItem'

const index = () => {
  return (
    <div className='bg-secondaryColor px-16 py-10 lg:px-30 md:px-28 lg:py-16 md:py-10'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-xl font-bold text-communityColor text-center mx-auto lg:text-2xl md:text-2xl'>
          Frequently Asked Questions
        </h1>

        {[1, 2, 3, 4, 5].map((item, index) => (
          <FAQItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default index;
