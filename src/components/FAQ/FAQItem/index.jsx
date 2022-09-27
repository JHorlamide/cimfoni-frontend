import { Disclosure } from "@headlessui/react";

export default function Example() {
  return (
    <div className='w-full px-4 py-10'>
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>What is your refund policy?</span>
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
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>Do you offer technical support?</span>
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
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
