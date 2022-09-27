import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowSVG from "../../assets/icons/arrow";
import CustomBtn from "../CustomBtn";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div
        className='bg-center bg-cover bg-no-repeat items-center w-full h-full text-white mt-10 lg:mt-16 md:mt-16'
        style={{ backgroundImage: "url('images/NewFrame-2.jpg')" }}
      >
        <div className='px-5 py-6 lg:px-36 md:px-20 lg:py-30 md:py-20 bg-primaryColorLight justify-center'>
          <h1
            id='_hero_animation'
            className='max-w-sm text-2xl text-center mx-auto mb-3 font-bold lg:font-bold md:font-bold lg:mx-0 md:mx-0 lg:max-w-4xl md:max-w-lg lg:leading-snug md:leading-snug lg:text-6xl md:text-4xl lg:text-left md:text-left'
          >
            Experience design and broadcast training that empowers you
          </h1>

          <p className='max-w-2xl py-1 px-5 bottom-0 text-lg text-justify mx-auto lg:mx-0 md:mx-0 lg:py-5 lg:px-0 md:px-0 md:py-2 lg:max-w-5xl md:max-w-xl'>
            At Cimfoni we create design and broadcast training classes that
            empower creatives like you. Helping you maximize the business
            potentials within the creative economy. Begin your creative career
            by registering for one of our courses today. It’s that simple!
          </p>

          <div className='flex justify-center items-center lg:justify-start md:justify-start items-start space-x-3 py-3 lg:flex-row'>
            <CustomBtn
              className='text-sm bg-white text-primaryColor font-medium px-4 py-3 rounded-md flex lg:text-md'
              rightIcon={
                <ArrowSVG className='hidden lg:inline-flex md:inline-flex w-6 h-6 ml-3' />
              }
              onClick={() => navigate("/courses")}
            >
              View Courses
            </CustomBtn>

            <CustomBtn
              className='text-sm border-white bg-primaryColor text-white font-medium px-4 py-3 rounded-md flex lg:border-0 lg:text-md'
              rightIcon={
                <ArrowSVG className='hidden lg:inline-flex md:inline-flex w-6 h-6 ml-3' />
              }
              onClick={() => navigate("/get-in-touch")}
            >
              Request a service
            </CustomBtn>
          </div>

          {/* <div className='flex justify-center items-center py-7 md:py-8 lg:py-5'>
            <CustomBtn
              className='text-lg border-white bg-primaryColor text-white font-semibold px-6 py-4 rounded-md flex lg:border-0 lg:text-md'
              onClick={() => navigate("/get-in-touch")}
            >
              Get in touch
            </CustomBtn>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
