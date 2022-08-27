import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rectangle8 from "../../assets/Rectangle-8.png";
import CustomBtn from "../../components/CustomBtn";
import ArrowSVG from "../../assets/icons/arrow";
import Community from "../../components/Community";
import Testimony from "../../components/Testimony";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer/Footer";

const Courses = () => {
  return (
    <Fragment>
      <Navbar />
      <section className='bg-secondaryColor px-8 py-8 lg:px-10 md:px-10 lg:py-28 md:py-20 -mt-12'>
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h1 className='max-w-xs text-center text-primaryColor font-extrabold lg:font-bold md:font-bold text-2xl lg:leading-snug md:leading-snug lg:text-5xl md:text-4xl lg:max-w-2xl md:max-w-md'>
            Build a career by learning from the best
          </h1>
          <p className='text-primaryColor text-justify lg:text-center md:text-center md:max-w-fit lg:max-w-5xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
            gravida mus enim elit egestas ut. Nulla faucibus rutrum phasellus
            iaculis. Donec tristique volutpat id lectus nibh. Lorem commodo, sit
            elit suspendisse leo, phasellus <br className='hidden lg:block' />
            molestie.
          </p>
        </div>
      </section>

      {/* ALL YOU NEED TO KNOW ABOUT OUR COURSES */}
      <section className='flex flex-col space-y-5 py-10 md:px-20 lg:py-16 lg:px-20'>
        <h1 className='text-primaryColor text-center text-xl font-medium md:text-2xl md:font-semibold'>
          All you need to know about our courses
        </h1>

        {/* item-1 */}
        <div className='flex flex-col justify-center items-center space-y-5 md:space-x-5 md:flex-row lg:py-10 lg:space-x-20'>
          <img
            className='object-cover rounded-md w-80 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3'
            src={Rectangle8}
            alt=''
          />

          <div className='flex flex-col items-center space-y-5 lg:space-y-3 md:space-y-2 md:items-start md:space-x-5 md:h-1/4'>
            <h1 className='text-xl font-medium text-primaryColor md:font-bold md:text-2xl md:ml-4 lg:text-3xl'>
              Software Development
            </h1>

            <p className='text-primaryColor md:text-sm'>Duration 10 weeks</p>
            <p className='text-primaryColor md:text-sm'>90% completion rate</p>
            <p className='text-primaryColor md:text-sm'>10 class mates</p>

            <div id='languages' className='flex space-x-3 md:py-1'>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                Javascript
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                React.Js
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                MongoDB
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                HTML & CSS
              </p>
            </div>

            <p className='px-5 text-justify md:px-0 md:py-2 lg:max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
              gravida mus enim elit egestas ut. Nulla faucibus rutrum phasellus
              iaculis. Donec tristique volutpat id lectus nibh. Lorem commodo,
              sit elit suspendisse leo, phasellus molestie.
            </p>

            <CustomBtn
              className={
                "flex text-white font-medium rounded py-3 px-5 bg-primaryColor"
              }
              rightIcon={<ArrowSVG className={"w-8 h-8 ml-3 -mt-1"} />}
            >
              Enroll Now
            </CustomBtn>
          </div>
        </div>

        {/* item-2 */}
        <div className='flex flex-col flex-col-reverse justify-center items-center space-y-5 md:space-x-5 md:flex-row lg:py-10 lg:space-x-20'>
          <div className='flex flex-col items-center space-y-5 lg:space-y-3 md:space-y-2 md:items-start md:space-x-5 md:h-1/4'>
            <h1 className='mt-5 text-xl font-medium text-primaryColor md:font-bold md:text-2xl md:ml-4 lg:text-3xl'>
              Graphics Design
            </h1>

            <p className='text-primaryColor md:text-sm'>Duration 10 weeks</p>
            <p className='text-primaryColor md:text-sm'>90% completion rate</p>
            <p className='text-primaryColor md:text-sm'>10 class mates</p>

            <div id='languages' className='flex space-x-3 md:py-1'>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                Javascript
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                React.Js
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                MongoDB
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                HTML & CSS
              </p>
            </div>

            <p className='px-5 text-justify md:px-0 md:py-2 lg:max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
              gravida mus enim elit egestas ut. Nulla faucibus rutrum phasellus
              iaculis. Donec tristique volutpat id lectus nibh. Lorem commodo,
              sit elit suspendisse leo, phasellus molestie.
            </p>

            <CustomBtn
              className={
                "flex text-white font-medium rounded py-3 px-5 bg-primaryColor"
              }
              rightIcon={<ArrowSVG className={"w-8 h-8 ml-3 -mt-1"} />}
            >
              Enroll Now
            </CustomBtn>
          </div>

          <img
            className='object-cover rounded-md w-80 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3'
            src={Rectangle8}
            alt=''
          />
        </div>

        {/* item-3 */}
        <div className='flex flex-col justify-center items-center space-y-5 md:space-x-5 md:flex-row lg:py-10 lg:space-x-20'>
          <img
            className='object-cover rounded-md w-80 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3'
            src={Rectangle8}
            alt=''
          />

          <div className='flex flex-col items-center space-y-5 lg:space-y-3 md:space-y-2 md:items-start md:space-x-5 md:h-1/4'>
            <h1 className='mt-5 text-xl font-medium text-primaryColor md:font-bold md:text-2xl md:ml-4 lg:text-3xl'>
              Broadcasting Services
            </h1>

            <p className='text-primaryColor md:text-sm'>Duration 10 weeks</p>
            <p className='text-primaryColor md:text-sm'>90% completion rate</p>
            <p className='text-primaryColor md:text-sm'>10 class mates</p>

            <div id='languages' className='flex space-x-3 md:py-1'>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                Javascript
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                React.Js
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                MongoDB
              </p>
              <p className='bg-badgedColor rounded px-1.5 py-1.5 text-xs'>
                HTML & CSS
              </p>
            </div>

            <p className='px-5 text-justify md:px-0 md:py-2 lg:max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
              gravida mus enim elit egestas ut. Nulla faucibus rutrum phasellus
              iaculis. Donec tristique volutpat id lectus nibh. Lorem commodo,
              sit elit suspendisse leo, phasellus molestie.
            </p>

            <CustomBtn
              className={
                "flex text-white font-medium rounded py-3 px-5 bg-primaryColor"
              }
              rightIcon={<ArrowSVG className={"w-8 h-8 ml-3 -mt-1"} />}
            >
              Enroll Now
            </CustomBtn>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <Community />

      {/* TESTIMONY */}
      <Testimony />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Courses;
