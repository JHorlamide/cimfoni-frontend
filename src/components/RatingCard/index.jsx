import React from "react";
import Rating from "../Rating";
import { ratings } from "../../utils/constants";

const index = ({ imageUrl }) => {
  return (
    <div className='bg-white rounded px-5 py-5 flex flex-col space-y-3'>
      {/* heading */}
      <div className='flex justify-between items-center lg:flex-row md:flex-col md:space-y-3'>
        <img src={imageUrl} alt='Ellipse6' />

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
        <p className='font-semibold text-lg'>Chidi Ogbonna</p>
      </div>

      <p className='text-sm text-justify font-normal'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
        gravida ornare quam massa nec. A, ullamcorper risus diam lacinia viverra
        placerat odio tempor. Sed vitae facilisi amet, erat. Dui dapibus etiam
        cras placerat elementum dolor.
      </p>
    </div>
  );
};

export default index;
