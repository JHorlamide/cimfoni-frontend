import React from "react";
import RatingCard from "../RatingCard";

// import Testimony1 from "../../assets/images/testimony-images/testimony-1.jpeg";
// import Testimony2 from "../../assets/images/testimony-images/testimony-2.jpeg";
import Testimony3 from "../../assets/images/testimony-images/testimony-3.jpg";
import Testimony4 from "../../assets/images/testimony-images/testimony-4.jpg";
import Ellipse6 from "../../assets/images/Ellipse-6.png";

const testimonies = [
  {
    id: 1,
    image: Testimony3,
    name: "Olamide Balogun",
    testimony:
      "I enjoyed my time at Cimfoni, The limited number of people in the class made learning easier",
  },
  {
    id: 2,
    image: Testimony4,
    name: "Ada Njoku",
    testimony:
      "Great experience! I had a wonderful time here. The trainers are patient and take their time to teach you.",
  },
  {
    id: 3,
    image: Ellipse6,
    name: "Chidi Ogbonna",
    testimony:
      "I highly recommend the broadcast production course, these guys are well seasoned and pay attention to details",
  },
];

const index = () => {
  return (
    <div className='bg-skyBlue px-10 py-10 lg:px-20 md:px-8 lg:py-16 md:py-10'>
      <div className='flex flex-col space-y-5'>
        {/* ITEM ONE */}
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h1 className='mx-auto text-2xl text-center font-bold text-lightBlueText'>
            Feedbacks
          </h1>

          <p className='font-normal text-center text-lightBlueText'>
            Don't take our words for it. Hear what others have to say
          </p>
        </div>

        {/* ITEM TWO */}
        <div className='flex flex-col justify-center items-center space-y-5 lg:space-x-3 md:space-x-5 lg:space-y-0 md:space-y-0 lg:flex-row md:flex-row'>
          {testimonies.map((testimony) => (
            <RatingCard
              key={testimony.id}
              image={testimony.image}
              name={testimony.name}
              testimony={testimony.testimony}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
