import React from "react";
import { Disclosure } from "@headlessui/react";
// import FAQItem from "./FAQItem/index";

const index = () => {
  return (
    <div className='bg-secondaryColor px-16 py-10 lg:px-30 md:px-28 lg:py-16 md:py-10'>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-xl font-bold text-lightBlueText text-center mx-auto lg:text-2xl md:text-2xl'>
          Frequently Asked Questions
        </h1>

        {/* FAQ NEW 3 */}
        <div className='w-full md:max-w-xl lg:max-w-xl'>
          <div className='w-full max-w-xl rounded-2xl bg-white'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between rounded-lg border bg-secondaryColor px-4 py-4 text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span>Are the courses online? </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } w-6 h-6 text-purple-500`}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 5v14m7-7H5'
                      />
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    No, the courses are 100% physical in our class and studio
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* FAQ NEW 4 */}
        <div className='w-full md:max-w-xl lg:max-w-xl'>
          <div className='w-full max-w-xl rounded-2xl bg-white'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between rounded-lg border bg-secondaryColor px-4 py-4 text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span>How Long are the classes?</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } w-6 h-6 text-purple-500`}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 5v14m7-7H5'
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Average of 2 weeks
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* FAQ NEW 5 */}
        <div className='w-full md:max-w-xl lg:max-w-xl'>
          <div className='w-full max-w-xl rounded-2xl bg-white'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between border rounded-lg bg-secondaryColor px-4 py-4 text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span>When do classes start?</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } w-6 h-6 text-purple-500`}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 5v14m7-7H5'
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Morning and afternoon sessions
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default index;
