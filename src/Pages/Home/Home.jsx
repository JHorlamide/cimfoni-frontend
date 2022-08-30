import React, { Fragment } from "react";

import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero";
import FAQ from "../../components/FAQ/";
import Community from "../../components/Community";
import Testimony from "../../components/Testimony";

import Ellipse6 from "../../assets/images/Ellipse-6.png";
import Rectangle1 from "../../assets/images/Rectangle-1.png";
import Rectangle2 from "../../assets/images/Rectangle-2.png";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      {/* HERO */}
      <div className='h-full w-full bg-cover bg-center -mt-12'>
        <HeroSection />
      </div>

      {/* SUPPORT */}
      <div className='bg-secondaryColor px-8 py-10 flex flex-col justify-center items-center space-y-4 lg:space-y-10 md:space-y-10 lg:space-y-8 md:space-y-8 lg:px-10 lg:py-10'>
        <h1 className='max-w-lg font-semibold text-lg text-center lg:text-lg'>
          Supported by leading brands and organizations
        </h1>

        <div className='grid grid-rows-2 grid-flow-col gap-2 lg:flex md:flex lg:justify-center lg:items-center space-x-2 lg:space-x-10 md:space-x-4'>
          {[1, 2, 3, 4, 5].map((items, index) => (
            <img
              key={index}
              className='object-cover'
              src={Ellipse6}
              alt='Avatar'
            />
          ))}
        </div>
      </div>

      {/* WHAT WE DO 1 */}
      <div className='bg-white py-5 px-5 lg:px-36 md:px-10'>
        <h1 className='text-xl font-semibold text-center pb-6 lg:text-center lg:text-3xl md:text-xl lg:pt-20 md:pt-16 lg:pb-10 md:pb-10'>
          What we do at Cimfoni
        </h1>

        <div className='space-y-10 lg:space-y-32'>
          {/* ITEM 1 */}
          <div className='flex flex-col space-y-5 justify-evenly items-center lg:flex-row md:flex-row lg:flex-row-reverse md:flex-row-reverse'>
            <img
              className='object-cover lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
              src={Rectangle1}
              alt='Rectangle'
            />

            <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
              <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                Software Development
              </h1>
              <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>

              <CustomBtn
                className={
                  "flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0"
                }
              >
                View Courses
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 ml-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </CustomBtn>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className='flex flex-col space-y-10 justify-evenly items-center lg:flex-row md:flex-row'>
            <img
              className='object-cover lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
              src={Rectangle1}
              alt='Rectangle'
            />

            <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
              <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                Broadcasting Services
              </h1>
              <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>

              <CustomBtn
                className={
                  "flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0"
                }
              >
                View Courses
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 ml-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </CustomBtn>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className='flex flex-col space-y-10 justify-evenly items-center lg:flex-row md:flex-row lg:flex-row-reverse md:flex-row-reverse'>
            <img
              className='object-cover lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
              src={Rectangle1}
              alt='Rectangle'
            />

            <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
              <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                Graphics Design
              </h1>
              <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>

              <CustomBtn
                className={
                  "flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0"
                }
              >
                View Courses
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 ml-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </CustomBtn>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CIMFONI */}
      <div className='bg-lightGrayPrimary px-8 py-10 lg:px-28 lg:py-20'>
        <h1 className='font-semibold text-2xl lg:text-4xl md:text-4xl'>
          Why Cimfoni?
        </h1>

        <div className='flex flex-col py-5 space-y-4 lg:space-y-0 md:space-y-0 lg:space-x-16 md:space-x-6 lg:flex-row md:flex-row'>
          <img
            className='lg:h-auto md:h-80 object-cover'
            src={Rectangle2}
            alt='Rectangle2'
          />

          <div className='space-y-4 lg:space-y-0 md:space-y-0 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-x-10 lg:gap-y-0 md:grid md:grid-rows-2 md:grid-flow-col md:gap-x-6 md:gap-y-6'>
            {/* ITEM 1 */}
            <div className='flex flex-col space-y-3'>
              <h1 className='text-xl font-semibold'>
                Best Knowledge Of Design
              </h1>

              <p className='text-sm font-normal text-justify leading-relaxed'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>
            </div>

            {/* ITEM 2 */}
            <div className='flex flex-col space-y-3'>
              <h1 className='text-xl font-semibold'>Growth & Mentorship</h1>

              <p className='text-sm font-normal text-justify leading-relaxed'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>
            </div>

            {/* ITEM 3 */}
            <div className='flex flex-col space-y-3'>
              <h1 className='text-xl font-semibold'>Peer Support</h1>

              <p className='text-sm font-normal text-justify leading-relaxed'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>
            </div>

            {/* ITEM 4 */}
            <div className='flex flex-col space-y-3'>
              <h1 className='text-xl font-semibold'>Hands on Experiments</h1>

              <p className='text-sm font-normal text-justify leading-relaxed'>
                Navigating the product industry is usually a challenging phase
                for young designers. Without the right guidance and support, the
                average designer spends a longer time trying to find their feet.
                Perxels connects young designers with professionals and mentors
                with years of experience in the field to help them grow and
                thrive in the industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR STUDENT FEEDBACK */}
      <Testimony />

      {/* JOIN OUR COMMUNITY */}
      <Community />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Home;
