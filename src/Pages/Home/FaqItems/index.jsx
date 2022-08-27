import React from "react";

const index = ({ text }) => {
  return (
    <div className='flex justify-between border px-2 py-4 rounded-lg space-x-48 lg:space-x-96 md:space-x-96'>
      <p className='text-sm font-normal lg:text-md md:text-md'>asking questions</p>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 5v14m7-7H5' />
      </svg>
    </div>
  );
};

export default index;
