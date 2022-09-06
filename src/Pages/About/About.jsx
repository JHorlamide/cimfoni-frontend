import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import CustomBtn from "../../components/CustomBtn";
// import ArrowSVG from "../../assets/icons/arrow";
import Footer from "../../components/Footer/Footer";

// import NewFrame1 from '../../assets/images/gallery-images/NewFrame-1.jpg'
import NewFrame2 from "../../assets/images/gallery-images/NewFrame-2.jpg";
import NewFrame5 from "../../assets/images/gallery-images/NewFrame-5.jpeg";

const About = () => {
  return (
    <section>
      <Navbar />

      <section className='bg-lightPurple px-8 py-8 lg:px-10 md:px-10 lg:py-28 md:py-20'>
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h1 className='max-w-xs text-center text-primaryColor font-extrabold lg:font-bold md:font-bold text-2xl lg:leading-snug md:leading-snug lg:text-5xl md:text-4xl lg:max-w-2xl md:max-w-md'>
            About Us
          </h1>
        </div>
      </section>

      <section className='bg-secondary py-5 px-5 lg:px-36 lg:py-20 md:px-10'>
        <div className='space-y-10 lg:space-y-32'>
          {/* ITEM 1 */}
          <div className='flex flex-col space-y-5 justify-evenly items-center lg:flex-row md:flex-row lg:flex-row-reverse md:flex-row-reverse'>
            <img
              className='object-cover rounded-lg lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
              src={NewFrame2}
              alt='Rectangle'
            />

            <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
              {/* <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                Introduction to Adobe suite
              </h1> */}

              <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                Creating and curating content is critical to the production of
                music, movies, social media clips or even the meta verse.
                Becoming a part of the global creator economy requires a strong
                foundation in the understanding of design and broadcast tools.
                Start your own personal journey to becoming a creator by
                enrolling in the Cimfoni Design and Broadcast Academy (CDBA).
                The world needs creative professionals with strong technical
                skills and our programs provide you with the knowledge and skill
                sets needed for today's exciting and growing media career
                market.
              </p>

              {/* <CustomBtn className='flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0'>
                View Courses
                <ArrowSVG className={"hover:animate-spin w-6 h-6 ml-3"} />
              </CustomBtn> */}
            </div>
          </div>

          {/* ITEM 2 */}
          <div className='flex flex-col space-y-10 justify-evenly items-center lg:flex-row md:flex-row'>
            <img
              className='object-cover rounded-lg lg:h-1/2 md:h-3/5 lg:w-1/3 md:w-1/3'
              src={NewFrame5}
              alt='Rectangle'
            />

            <div className='flex flex-col space-y-5 lg:w-1/2 md:w-1/2 lg:h-1/4 md:h-1/2'>
              {/* <h1 className='text-xl font-semibold text-center lg:text-left md:text-left lg:text-4xl md:text-2xl'>
                Broadcast Production
              </h1> */}

              <p className='text-normal text-justify lg:max-w-2xl md:max-w-2xl'>
                Our curriculum is simple enough for beginners to understand and
                combines theory with unique practical sessions using modern
                facilities. Early stage intending professionals can also
                strengthen their skills with any of our programs. Graduates will
                be able to find freelance, contract or full-time positions as
                videographers, editors, writers, performers, and a variety of
                other production and post-production positions, within the
                corporate, independent production, and broadcast fields. CDBA
                prepares you for success and our small class sizes ensures that
                every participant gets the required attention.
              </p>

              {/* <CustomBtn className='flex mx-auto justify-center bg-primaryColor text-white font-medium px-4 py-3 rounded-md lg:w-1/3 md:w-1/2 lg:mx-0 md:mx-0'>
                View Courses
                <ArrowSVG className={"w-6 h-6 ml-3"} />
              </CustomBtn> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default About;
