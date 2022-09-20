import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CustomBtn from "../../components/CustomBtn";
import ArrowSVG from "../../assets/icons/arrow";
import Community from "../../components/Community";
import Testimony from "../../components/Testimony";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer/Footer";
import { paymentLinks } from "../../utils/constants";

// import Rectangle8 from "../../assets/images/Rectangle-8.png";
import NewFrame1 from "../../assets/images/gallery-images/NewFrame-1.jpg";
import NewFrame2 from "../../assets/images/gallery-images/NewFrame-2.jpg";
import NewFrame3 from "../../assets/images/gallery-images/NewFrame-3.jpg";

const badges = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Adobe Applications. etc",
];
const badges2 = [
  "Broadcast Hardware",
  "Broadcast Software",
  "Storage & Retrieval Systems. etc",
];
const badges3 = [
  "Industry and Financial Analysis",
  "Screen Presentation and Delivery. etc",
];

const Badge = ({ badgeText }) => {
  return (
    <p className='bg-skyBlue rounded px-1.5 py-1.5 text-xs'>{badgeText}</p>
  );
};

const Courses = () => {
  const handleCoursePayment = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Navbar />

      <section id='courses' className='lg:pt-5'>
        <div className='bg-secondaryColor px-8 py-8 lg:px-10 md:px-10 lg:py-28 md:py-20'>
          <div className='flex flex-col justify-center items-center space-y-3'>
            <h1 className='max-w-xs text-center text-primaryColor font-extrabold lg:font-bold md:font-bold text-2xl lg:leading-snug md:leading-snug lg:text-5xl md:text-4xl lg:max-w-2xl md:max-w-md'>
              Build a career by learning from the best
            </h1>

            <p className='text-primaryColor text-justify lg:text-justify md:text-justify md:max-w-fit lg:max-w-5xl'>
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
              {/* <br className='hidden lg:block' /> */}
            </p>
          </div>
        </div>

        {/* ALL YOU NEED TO KNOW ABOUT OUR COURSES */}
        <section className='flex flex-col space-y-5 py-10 md:px-20 lg:py-16 lg:px-20'>
          <h1 className='text-primaryColor text-center text-xl font-medium md:text-2xl lg:text-5xl md:font-semibold'>
            Our courses
          </h1>

          {/* item-1 */}
          <div
            id='course-adobe-suite'
            className='flex flex-col justify-center items-center space-y-5 md:space-x-5 md:flex-row lg:py-10 lg:space-x-20'
          >
            <img
              className='object-cover rounded-md w-80 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-96'
              src={NewFrame2}
              alt=''
            />

            <div className='flex flex-col items-center space-y-5 lg:space-y-3 md:space-y-2 md:items-start md:space-x-5 md:h-1/4'>
              <h1 className='text-xl font-medium text-primaryColor md:font-bold md:text-2xl md:ml-4 lg:text-3xl'>
                Introduction to Adobe Suite
              </h1>

              <p className='text-primaryColor md:text-sm'>Duration 2 weeks</p>
              <p className='text-primaryColor md:text-sm'>
                90% completion rate
              </p>
              <p className='text-primaryColor md:text-sm'>
                maximum of 10 persons per class
              </p>

              <div>
                <p className='text-center text-primaryColor md:text-sm font-semibold md:text-left lg:text-left'>
                  Start Date
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 1: 22nd - 6th Nov
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 2: 7th - 21st Nov
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 3: 22nd - 6th Dec
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 4: 7th - 21st Dec
                </p>
              </div>

              <div id='languages' className='flex space-x-3 md:py-1'>
                {badges.map((badge, index) => (
                  <Badge key={index} badgeText={badge} />
                ))}
              </div>

              <p className='px-5 text-sm text-justify md:px-0 md:py-2 lg:max-w-md'>
                Adobe applications are the most common tools used by media and
                content professionals globally for mobile, tablet or the big
                screen and is known for its strong suite of products from
                photography to illustrations, video editing and effects for
                mobile, tablets big screen, social media and movies. Our Adobe
                Introductory Course at CBDA breaks down each Adobe application
                for participants, explains their functions and how they work
                together in Adobe’s online distribution platform called the
                Adobe Cloud. Introduction to Adobe Suites takes learners on a
                journey through some of the key Adobe products they will use in
                their creator career and introduces them to the understanding of
                colors, text and fonts. The course is taught in seven parts
              </p>

              <CustomBtn
                className='flex text-white font-medium rounded py-3 px-5 bg-primaryColor'
                rightIcon={<ArrowSVG className={"w-8 h-8 ml-3 -mt-1"} />}
                onClick={() =>
                  handleCoursePayment(paymentLinks.intro_to_adobe_suite)
                }
              >
                Enroll Now
              </CustomBtn>
            </div>
          </div>

          {/* item-2 */}
          <div
            id='course-business-broadcast'
            className='flex flex-col flex-col-reverse justify-center items-center space-y-5 md:space-x-5 md:flex-row lg:py-10 lg:space-x-20'
          >
            <div className='flex flex-col items-center space-y-5 lg:space-y-3 md:space-y-2 md:items-start md:space-x-5 md:h-1/4'>
              <h1 className='mt-5 text-xl font-medium text-primaryColor md:font-bold md:text-2xl md:ml-4 lg:text-3xl'>
                Introduction to Business Broadcast
              </h1>

              <p className='text-primaryColor md:text-sm'>Duration 2 weeks</p>
              <p className='text-primaryColor md:text-sm'>
                90% completion rate
              </p>
              <p className='text-primaryColor md:text-sm'>
                maximum of 10 persons per class
              </p>

              <div>
                <p className='text-center text-primaryColor md:text-sm font-semibold md:text-left lg:text-left'>
                  Start Date
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 1: 22nd - 6th Nov
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 2: 7th - 21st Nov
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 3: 22nd - 6th Dec
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 4: 7th - 21st Dec
                </p>
              </div>

              <div id='languages' className='flex space-x-3 md:py-1'>
                {badges3.map((badge, index) => (
                  <Badge key={index} badgeText={badge} />
                ))}
              </div>

              <p className='px-5 text-sm text-justify md:px-0 md:py-2 lg:max-w-md'>
                This is a very intensive and course intended for those
                interested in building a career in business broadcasting. In
                whatever form, whether television, podcasting or other digital
                broadcast platforms, business broadcasting requires a strong
                knowledge of business, economy and industry terms, trends
                analysis and interpretations. Introduction to Business
                Broadcasting blends the teaching of business and economics with
                broadcasting. Graduates of this course will not only be able to
                speak the language of business but also produce and present
                business programs for any broadcast medium digital or
                traditional. In this course students review the various roles
                and duties of those involved in small independent productions
                and those working together on large network productions.
                Students learn how to conduct themselves when on-set and how to
                document the needs of individual productions through the budget
                and production schedules. The increasing complexities of the
                business world is crying out for explanations about what is
                going on around it. This course will equip you with the tools
                and skills to confidently and effectively deliver that
                explanation to your audience as a producer or a presenter. It
                offers you the chance for a career on various media platforms as
                an entrepreneur or career builder to fill the significant
                domestic and global demand for business broadcasters. At CBDA
                this course is taught in five parts as listed below
              </p>

              <CustomBtn
                className='flex text-white font-medium rounded py-3 px-5 bg-primaryColor'
                rightIcon={<ArrowSVG className={"w-8 h-8 ml-3 -mt-1"} />}
                onClick={() =>
                  handleCoursePayment(paymentLinks.intro_to_business_broadcast)
                }
              >
                Enroll Now
              </CustomBtn>
            </div>

            <img
              className='object-cover rounded-md w-80 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-96'
              src={NewFrame1}
              alt=''
            />
          </div>

          {/* item-3 */}
          <div
            id='course-broadcast-production'
            className='flex flex-col justify-center items-center space-y-5 md:space-x-5 md:flex-row lg:py-10 lg:space-x-20'
          >
            <img
              className='object-cover rounded-md w-80 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-96'
              src={NewFrame3}
              alt=''
            />

            <div className='flex flex-col items-center space-y-5 lg:space-y-3 md:space-y-2 md:items-start md:space-x-5 md:h-1/4'>
              <h1 className='mt-5 text-xl font-medium text-primaryColor md:font-bold md:text-2xl md:ml-4 lg:text-3xl'>
                Broadcast Production
              </h1>

              <p className='text-primaryColor md:text-sm'>Duration 2 weeks</p>
              <p className='text-primaryColor md:text-sm'>
                90% completion rate
              </p>
              <p className='text-primaryColor md:text-sm'>
                maximum of 10 persons per class
              </p>

              <div>
                <p className='text-center text-primaryColor md:text-sm font-semibold md:text-left lg:text-left'>
                  Start Date
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 1: 22nd - 6th Nov
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 2: 7th - 21st Nov
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 3: 22nd - 6th Dec
                </p>
                <p className='text-primaryColor md:text-sm font-medium'>
                  Stream 4: 7th - 21st Dec
                </p>
              </div>

              <div id='languages' className='flex space-x-3 md:py-1'>
                {badges2.map((badge, index) => (
                  <Badge key={index} badgeText={badge} />
                ))}
              </div>

              <p className='px-5 text-sm text-justify md:px-0 md:py-2 lg:max-w-md'>
                In this program you will learn what it means to write, perform,
                shoot, and edit content in a variety of formats. You will use
                use industry standard equipment and software to learn about
                storytelling, lighting, sound design, and post-production
                finishing. The rapid growth globally in both traditional and
                online media broadcasting has created a strong demand for
                broadcast production skills. Studying broadcast production at
                Cimfoni Broadcast and Design Academy (CBDA) is as practical and
                comprehensive as it gets. Beginning with access to our
                ultra-modern studio, master control room and post production
                rooms we work you through the basics of broadcast production.
                Enroll in this course to begin your broadcast
              </p>

              <CustomBtn
                className='flex text-white font-medium rounded py-3 px-5 bg-primaryColor'
                rightIcon={<ArrowSVG className={"w-8 h-8 ml-3 -mt-1"} />}
                onClick={() =>
                  handleCoursePayment(paymentLinks.broadcast_production)
                }
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
      </section>
    </>
  );
};

export default Courses;
