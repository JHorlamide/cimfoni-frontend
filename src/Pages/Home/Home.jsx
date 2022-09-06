import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/Hero";
import FAQ from "../../components/FAQ/";
import Community from "../../components/Community";
import Testimony from "../../components/Testimony";
import ArrowSVG from "../../assets/icons/arrow";

import NewFrame1 from '../../assets/images/gallery-images/NewFrame-1.jpg'
import NewFrame2 from '../../assets/images/gallery-images/NewFrame-2.jpg'
import NewFrame3 from '../../assets/images/gallery-images/NewFrame-3.jpg'
import NewFrame4 from '../../assets/images/gallery-images/NewFrame-4.jpeg'

// import Rectangle1 from "../../assets/images/Rectangle-1.png";
// import Rectangle2 from "../../assets/images/Rectangle-2.png";

import { supporterLogo } from "../../utils/constants";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateToCourse = () => {
    navigate("/courses");
  };

  return (
    <section>
      <Navbar />
      {/* HERO */}
      <div className='h-full w-full bg-cover bg-center -mt-12'>
        <HeroSection />
      </div>

      {/* WHAT WE DO 1 */}
      <div className='bg-backgroundColor py-5 px-5 lg:px-36 md:px-10'>
        <h1 className='text-xl font-semibold text-center pb-6 lg:text-center lg:text-3xl md:text-xl lg:pt-20 md:pt-16 lg:pb-10 md:pb-10'>
          What we do at Cimfoni
        </h1>

        <div className='space-y-10 lg:space-y-32'>
          {/* ITEM 1 */}
          <AnimationOnScroll animateIn='animate__fadeInRight animate__delay-8s'>
            <div className='flex flex-col space-y-5 justify-evenly items-center lg:flex-row md:flex-row lg:flex-row-reverse md:flex-row-reverse'>
              <img
                className='object-cover rounded-lg lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
                src={NewFrame2}
                alt='Rectangle'
              />

              <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
                <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                  Introduction to Adobe suite
                </h1>

                <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                  Adobe applications are the most common tools used by media and
                  content professionals globally for mobile, tablet or the big
                  screen and is known for its strong suite of products from
                  photography to illustrations, video editing and effects for
                  mobile, tablets big screen, social media and movies. Our Adobe
                  Introductory Course at CBDA breaks down each Adobe application
                  for participants, explains their functions and how they work
                  together in Adobe’s online distribution platform called the
                  Adobe Cloud.
                </p>

                <CustomBtn
                  className='flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0'
                  onClick={navigateToCourse}
                >
                  View Courses
                  <ArrowSVG className={"hover:animate-spin w-6 h-6 ml-3"} />
                </CustomBtn>
              </div>
            </div>
          </AnimationOnScroll>

          {/* ITEM 2 */}
          <AnimationOnScroll animateIn='animate__fadeInLeft animate__delay-8s'>
            <div className='flex flex-col space-y-10 justify-evenly items-center lg:flex-row md:flex-row'>
              <img
                className='object-cover rounded-lg lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
                src={NewFrame3}
                alt='Rectangle'
              />

              <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
                <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                  Broadcast Production
                </h1>

                <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                  In this program you will learn what it means to write,
                  perform, shoot, and edit content in a variety of formats. You
                  will use use industry standard equipment and software to learn
                  about storytelling, lighting, sound design, and
                  post-production finishing. The rapid growth globally in both
                  traditional and online media broadcasting has created a strong
                  demand for broadcast production skills. Studying broadcast
                  production at Cimfoni Broadcast and Design Academy (CBDA) is
                  as practical and comprehensive as it gets.
                </p>

                <CustomBtn
                  className='flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0'
                  onClick={navigateToCourse}
                >
                  View Courses
                  <ArrowSVG className={"w-6 h-6 ml-3"} />
                </CustomBtn>
              </div>
            </div>
          </AnimationOnScroll>

          {/* ITEM 3 */}
          <AnimationOnScroll animateIn='animate__fadeInRight animate__delay-8s'>
            <div className='flex flex-col space-y-10 justify-evenly items-center lg:flex-row md:flex-row lg:flex-row-reverse md:flex-row-reverse'>
              <img
                className='object-cover rounded-lg lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
                src={NewFrame1}
                alt='Rectangle'
              />

              <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
                <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                  Business Broadcasting
                </h1>

                <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                  This is a very intensive and course intended for those
                  interested in building a career in business broadcasting. In
                  whatever form, whether television, podcasting or other digital
                  broadcast platforms, business broadcasting requires a strong
                  knowledge of business, economy and industry terms, trends
                  analysis and interpretations. Introduction to Business
                  Broadcasting blends the teaching of business and economics
                  with broadcasting. Graduates of this course will not only be
                  able to speak the language of business but also produce and
                  present business programs for any broadcast medium digital or
                  traditional.
                </p>

                <CustomBtn
                  className='flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0'
                  onClick={navigateToCourse}
                >
                  View Courses
                  <ArrowSVG className={"w-6 h-6 ml-3"} />
                </CustomBtn>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      {/* SUPPORT */}
      <div className='bg-secondaryColor px-8 py-10 flex flex-col justify-center items-center space-y-4 lg:space-y-10 md:space-y-10 lg:space-y-8 md:space-y-8 lg:px-10 lg:py-10'>
        <AnimationOnScroll animateIn='animate__bounce animate__shakeY animate__delay-8s'>
          <h1 className='max-w-lg font-semibold text-lg text-center lg:text-lg'>
            Supported by leading brands and organizations
          </h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__backInUp animate__delay-8s'>
          <div className='grid grid-row-3 md:grid-rows-2 lg:grid-rows-2 grid-flow-col gap-2 lg:flex md:flex lg:justify-center lg:items-center space-x-2 lg:space-x-10 md:space-x-4'>
            {supporterLogo.map(({ id, image, widthHight }) => (
              <img
                key={id}
                className={`object-cover ${widthHight}`}
                src={image}
                alt='Avatar'
              />
            ))}
          </div>
        </AnimationOnScroll>
      </div>

      {/* WHY CIMFONI */}
      <div className='bg-lightGrayPrimary px-8 py-10 lg:px-28 lg:py-20'>
        <h1 className='font-semibold text-2xl lg:text-4xl md:text-4xl'>
          Why Cimfoni?
        </h1>

        <AnimationOnScroll animateIn='animate__zoomIn'>
          <div className='flex flex-col py-5 space-y-4 lg:space-y-0 md:space-y-0 lg:space-x-16 md:space-x-6 lg:flex-row md:flex-row'>
            <img
              className='lg:w-80 lg:h-96 md:h-80 object-cover rounded-lg'
              src={NewFrame4}
              alt='Rectangle2'
            />

            <div
              className='space-y-4 
              lg:space-y-0 md:space-y-0 
              lg:grid lg:grid-rows-2 
              lg:grid-flow-col 
              lg:gap-x-10 
              lg:gap-y-0 
              md:grid 
              md:grid-cols-2
              md:grid-rows-2
              md:grid-flow-col
              md:gap-x-6
              md:gap-y-6'
            >
              {/* ITEM 1 */}
              <div className='flex flex-col space-y-3'>
                <h1 className='text-xl font-semibold'>
                  Best knowledge for creatives
                </h1>

                <p className='text-sm font-normal text-justify leading-relaxed'>
                  For both new and matured creatives the quest for knowledge is
                  never ending. Cimfoni provides creatives with one the most
                  dynamic knowledge environment to help them keep pace with
                  developments in the media industry. New creatives trust us to
                  equip them with the right foundation while mature creatives
                  rely on us to take them further in their careers
                </p>
              </div>

              {/* ITEM 2 */}
              <div className='flex flex-col space-y-3'>
                <h1 className='text-xl font-semibold'>Growth and mentorship</h1>

                <p className='text-sm font-normal text-justify leading-relaxed'>
                  Our hub and spoke approach ensures that you not only progress
                  but also find like minds that can guide you along your own way
                  without compromising your unique vision of your career. In a
                  world often and easily dominated by senior industry influences
                  it is important that the uniqueness of each creative is
                  preserved for the diversity it gives to us all without getting
                  lost in the crowd.
                </p>
              </div>

              {/* ITEM 3 */}
              <div className='flex flex-col space-y-3'>
                <h1 className='text-xl font-semibold'>Peer support</h1>

                <p className='text-sm font-normal text-justify leading-relaxed'>
                  The friendships and relationships that form during our courses
                  lead to career long peer support for alumni. At Cimfoni we
                  help alumni build and sustain professional networks that serve
                  as valuable and available resources for future projects and
                  sounding boards
                </p>
              </div>

              {/* ITEM 4 */}
              <div className='flex flex-col space-y-3'>
                <h1 className='text-xl font-semibold'>Deliberately hands on</h1>

                <p className='text-sm font-normal text-justify leading-relaxed'>
                  All aspects of media from graphic design, broadcast
                  journalism, post production to script writing are are
                  practical. It’s for this reason that our courses at Cimfoni
                  are deliberately hands on. Our classroom teaching are only a
                  stepping stone to the world of practice where skills are
                  forged in the furnace of experimentation and discovery
                </p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      {/* OUR STUDENT FEEDBACK */}
      <AnimationOnScroll animateIn='animate__zoomIn animate__delay-8s'>
        <Testimony />
      </AnimationOnScroll>

      {/* JOIN OUR COMMUNITY */}
      <AnimationOnScroll animateIn='animate__lightSpeedInRight animate__delay-8s'>
        <Community />
      </AnimationOnScroll>

      {/* FAQ */}
      <AnimationOnScroll animateIn='animate__zoomIn animate__delay-8s'>
        <FAQ />
      </AnimationOnScroll>

      {/* FOOTER */}
      <AnimationOnScroll animateIn='animate__fadeInBottomRight animate__delay-8s'>
        <Footer />
      </AnimationOnScroll>
    </section>
  );
};

export default Home;
