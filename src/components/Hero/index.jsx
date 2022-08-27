import React from "react";
import ArrowSVG from "../../assets/icons/arrow";
import CustomBtn from "../CustomBtn";

const index = () => {
  return (
    <div
      className='bg-center bg-cover bg-no-repeat items-center w-full h-full text-white -mt-10'
      style={{ backgroundImage: "url('images/hero-image.png')" }}
    >
      <div className='px-5 py-6 lg:px-36 md:px-20 lg:py-36 md:py-20 bg-overlayColor justify-center'>
        <h1 className='max-w-sm text-2xl text-center mx-auto mb-3 font-bold lg:font-bold md:font-bold lg:mx-0 md:mx-0 lg:max-w-4xl md:max-w-lg lg:leading-snug md:leading-snug lg:text-6xl md:text-4xl lg:text-left md:text-left'>
          Design Digital <br className='hidden lg:block' />
          Experience that Improves business growth
        </h1>

        <p className='max-w-2xl py-1 px-5 bottom-0 text-md text-justify mx-auto lg:mx-0 md:mx-0 lg:py-5 lg:px-0 md:px-0 md:py-2 lg:max-w-5xl md:max-w-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
          gravida mus enim elit egestas ut. Nulla faucibus rutrum phasellus
          iaculis. Donec tristique volutpat id lectus nibh. Lorem commodo, sit
          elit suspendisse leo, phasellus <br className='hidden lg:block' />
          molestie.
        </p>

        <div className='flex justify-center items-center lg:justify-start md:justify-start items-start space-x-3 py-3 lg:flex-row'>
          <CustomBtn
            className='text-sm bg-white text-primaryColor font-medium px-4 py-3 rounded-md flex lg:text-md'
            rightIcon={
              <ArrowSVG className='hidden lg:inline-flex md:inline-flex w-6 h-6 ml-3' />
            }
          >
            View Courses
          </CustomBtn>

          <CustomBtn
            className='text-sm border-white bg-primaryColor text-white font-medium px-4 py-3 rounded-md flex lg:border-0 lg:text-md'
            rightIcon={
              <ArrowSVG className='hidden lg:inline-flex md:inline-flex w-6 h-6 ml-3' />
            }
          >
            Start a project
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default index;
