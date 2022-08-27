import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../utils/constants";
import NavLinks from "./NavLinks/Index";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import CustomBtn from "../CustomBtn";
import Logo from "../../assets/Cimfoni_Logo.png";

const Navbar = () => {
  return (
    <Disclosure as={"nav"} className='bg-white px-2 lg:px-6'>
      {({ open }) => (
        <Fragment>
          <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
            {/* Image */}
            <Link to='/' arial-current='page'>
              <img className='w-48 -ml-4 lg:ml-0' src={Logo} alt='Cimfoni Logo' />
            </Link>

            {/* NAV LINKS */}
            <div
              id='nav-link'
              className='hidden justify-between items-center w-full space-x-6 lg:flex lg:w-auto -mt-14'
            >
              <div className='flex flex-col text-base font-normal mt-4 lg:flex-row lg:space-x-6 lg:mt-0'>
                {navigation.map((link) => (
                  <NavLinks
                    key={link.id}
                    link={link}
                    styles={
                      "hover:font-semibold hover:text-primaryColor block py-2 pr-4 pl-3 text-gray-500 rounded"
                    }
                  />
                ))}
              </div>
            </div>

            {/* AUTH BUTTONS */}
            <div className='flex space-x-4 text-gray-500 -mt-14'>
              <div className='hidden flex items-center space-x-2 md:flex lg:flex'>
                <CustomBtn
                  btnStyle={
                    "bg-primaryColor text-white px-5 py-3 rounded font-semibold md:inline-block"
                  }
                >
                  Get Stated
                </CustomBtn>

                <CustomBtn
                  btnStyle={
                    "text-primaryColor rounded font-semibold border border-primaryColor px-4 py-3"
                  }
                >
                  Login
                </CustomBtn>
              </div>

              <Menu as='div' className='ml-3 relative'>
                <Menu.Button>
                  <span className='sr-only'>Open user menu</span>
                  <div
                    className='inline-flex items-center p-3 ml-1 text-lg text-primaryColor border-2 border-primaryColor rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-primaryColor'
                    data-collapse-toggle='mobile-menu-2'
                    type='button'
                    aria-controls='mobile-menu-2'
                    aria-expanded='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                      />
                    </svg>
                  </div>
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute z-50 origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {navigation.map((link) => {
                      return (
                        <Menu.Item key={link.id}>
                          <NavLinks
                            link={link}
                            styles={
                              "block px-4 py-2 text-sm text-gray-700 hover:font-semibold hover:text-primaryColor block py-2 pr-4 pl-3 text-gray-500 rounded"
                            }
                          />
                        </Menu.Item>
                      );
                    })}

                    <div className='flex flex-col space-y-4'>
                      <Menu.Item>
                        <CustomBtn
                          btnStyle={
                            "bg-primaryColor text-white  mx-2 px-2 py-3 rounded font-semibold md:inline-block"
                          }
                        >
                          Get Stated
                        </CustomBtn>
                      </Menu.Item>

                      <Menu.Item>
                        <CustomBtn
                          btnStyle={
                            "text-primaryColor rounded font-semibold border border-primaryColor mx-2 px-4 py-3"
                          }
                        >
                          Login
                        </CustomBtn>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Fragment>
      )}
    </Disclosure>
  );
};

export default Navbar;