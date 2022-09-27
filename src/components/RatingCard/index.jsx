import React from "react";
import Rating from "../Rating";
import { ratings } from "../../utils/constants";

const index = ({ image, name, testimony }) => {
  return (
    <div className='bg-white rounded px-5 py-5 flex flex-col'>
      {/* heading */}
      <div className='flex justify-between items-center lg:flex-row md:flex-col md:space-y-3'>
        <img
          className='inline w-16 h-16 rounded-full object-cover ring-2 ring-gray-300'
          src={image}
          alt='Ellipse6'
        />

        {ratings.map((rating) => (
          <Rating
            key={rating.id}
            value={rating.rating}
            ratingStyle={"flex space-x-1 -mt-20"}
          />
        ))}
      </div>

      {/* contents */}
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg'>{name}</p>
      </div>

      <p className='text-sm text-justify font-normal'>{testimony}</p>
    </div>
  );
};

export default index;
