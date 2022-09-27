import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { footerNav, footerSocials } from "../../utils/constants";
import ArrowSVG from "../../assets/icons/arrow";
// import FooterLogo from "../../assets/images/FooterLogo.png";

const FooterSocial = () => {
  return (
    <Fragment>
      <div className='md:flex md:space-x-2 lg:flex lg:space-x-5'>
        <h1 className='font-semibold mb-5 pt-3 text-center lg:mx-auto lg:text-left md:text-left lg:pt-5 md:pt-5 lg:whitespace-nowrap'>
          Follow Us
        </h1>

        {/* <div className='grid grid-rows-2 grid-flow-col gap-x-16 gap-y-5 mx-5 justify-center items-center lg:justify-start lg:items-start lg:space-x-2 md:space-x-2 lg:flex md:flex lg:ml-0 lg:mt-5'> */}
        <div className='flex space-x-5 mx-5 justify-center items-center lg:justify-start lg:items-start lg:space-x-2 md:space-x-2 lg:flex md:flex lg:ml-0 lg:mt-5'>
          {footerSocials.map(({ id, url, title, image }) => (
            <a
              className='flex space-x-2 lg:mr-5'
              key={id}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='w-4 h-4' src={image} alt={title} />
              <p className='text-sm'>{title}</p>
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const Footer = () => {
  return (
    <div className='bg-dipBlue w-full px-3 py-5 lg:px-10 md:px-0 lg:py-10 md:pb-10 md:py-0'>
      <div className='text-white flex flex-col justify-center items-center space-y-10 lg:justify-evenly lg:items-start lg:space-x-5 md:space-y-0 lg:flex lg:flex-row md:grid md:grid-rows-2 md:grid-flow-col gap-x-40 gap-y-0'>
        {/* ITEM-1 */}
        <div className='mt-10 flex flex-col space-y-5 justify-center items-center lg:justify-start md:justify-start lg:items-start md:items-start'>
          {/* <h4>Logo</h4> */}
          {/* <img className='w-10 h-10' src={FooterLogo} alt='Cimfoni Logo' /> */}

          <div>
            <p className='text-sm text-center'>
              Cimfoni 2022. All copyright reserved
            </p>

            <div className='flex space-x-1'>
              <p className='text-sm mx-auto lg:mx-0 md:mx-0'>
                Our privacy policies
              </p>

              <ArrowSVG className='hidden w-6 h-6 lg:block md:block' />
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='text-md font-semibold'>Contact Us</p>

            <div className='flex space-x-1'>
              <p className='text-sm'>info@cimfoni.com</p>
              <ArrowSVG className='hidden w-6 h-6 lg:block md:block' />
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center space-x-1 md:items-start lg:items-start md:justify-start md:flex-row lg:flex-row'>
              <div className="flex space-x-2 md:flex-none lg:flex-none">
                <p className='text-md font-semibold'>Office</p>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>

              <p className='text-sm'>
                49 Raufu Williams crescent Surulere, Lagos
              </p>
            </div>
          </div>
        </div>

        {/* ITEM-2 */}
        <div className='flex flex-col space-x-5 justify-center items-center lg:items-start md:items-start lg:space-x-0 md:space-x-0 lg:flex-col md:flex-col'>
          <h1 className='mx-auto font-semibold mb-5 lg:mx-0 md:mx-0 lg:mx-0'>
            Explore
          </h1>

          {/* <div className='text-sm grid grid-rows-2 grid-flow-col gap-6 lg:flex md:flex lg:flex-col md:flex-col lg:space-y-2'> */}
          <div className='text-sm space-x-5 flex lg:flex md:space-x-0 md:flex lg:flex-col md:flex-col md:space-y-2 lg:space-y-2'>
            {footerNav.explore.map((navItem) => (
              <div key={navItem.id} className='flex space-x-1'>
                <Link to={navItem.path} className='text-sm'>
                  {navItem.title}
                </Link>

                <navItem.icon className={"hidden lg:block md:block w-6 h-6"} />
              </div>
            ))}

            {/* Socials desktop */}
            <div className='lg:w-2/3 -mr-80 hidden lg:block md:block'>
              <FooterSocial />
            </div>
          </div>
        </div>

        {/* ITEM-3 */}
        {/* <div className='flex flex-col space-x-5 justify-center items-center lg:items-start md:items-start lg:justify-start md:justify-start lg:space-x-0 md:space-x-0 lg:flex-col md:flex-col'>
            <h1 className='mx-auto font-semibold mb-5 md:mx-0 lg:mx-0'>
              Learn
            </h1>

            <div className='text-sm grid grid-rows-2 grid-flow-col gap-3 lg:flex md:flex lg:flex-col md:flex-col lg:space-y-2'>
              {footerNav.learn.map((navItem) => (
                <div key={navItem.id} className='flex space-x-1'>
                  <Link to={navItem.path} className='text-sm whitespace-nowrap'>
                    {navItem.title}
                  </Link>
                  <navItem.icon
                    className={"hidden lg:block md:block  w-6 h-6"}
                  />
                </div>
              ))}
            </div>
          </div> */}

        {/* ITEM-4 */}
        <div className='flex flex-col space-x-5 justify-center items-center lg:items-start md:items-start lg:justify-start md:justify-start lg:space-x-0 md:space-x-0 lg:flex-col md:flex-col'>
          <h1 className='mx-auto font-semibold mb-5 md:mx-0 lg:mx-0'>Legal</h1>

          {/* <div className='text-sm grid grid-rows-2 grid-flow-col gap-3 lg:flex md:flex lg:flex-col md:flex-col lg:space-y-2'> */}
          <div className='text-sm flex space-x-3 md:space-x-0 lg:space-x-0 lg:flex md:flex lg:flex-col md:flex-col lg:space-y-2'>
            {footerNav.legal.map((navItem) => (
              <div key={navItem.id} className='flex space-x-1'>
                <Link to={navItem.path} className='text-xs whitespace-nowrap'>
                  {navItem.title}
                </Link>
                <ArrowSVG className={"hidden lg:block md:block  w-6 h-6"} />
              </div>
            ))}
          </div>
        </div>

        {/* Socials mobile */}
        <div className='lg:hidden md:hidden'>
          <FooterSocial />
        </div>
      </div>
    </div>
  );
};

export default Footer;
