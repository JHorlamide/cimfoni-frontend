import React, { useState } from "react";
import CustomBtn from "../CustomBtn";
import CustomInput from "../CustomInput";

const Community = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='bg-dipBlue px-5 py-5 lg:px-40 md:px-30 lg:py-16 md:py-10'>
      <div className='flex flex-col justify-center space-y-5'>
        <h1 className='text-white text-center text-lg font-semibold lg:text-3xl md:text-3xl'>
          Join our community
        </h1>

        <p className='max-w-lg mx-auto text-white text-center font-normal'>
          Become a part of our community and get our monthly newsletter
          delivered to your inbox
        </p>

        <form
          onSubmit={handleSubscription}
          className='hidden mx-auto w-1/2 mt-1 relative rounded-md shadow-sm lg:block md:block'
        >
          <CustomInput
            inputClassName={
              "py-3.5 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-lg rounded-tr-xl rounded-br-xl"
            }
            inputProps={{
              type: "email",
              name: "email",
              placeholder: "Enter your email address",
              value: email,
              onChange: handleChange,
            }}
          />

          <div className='absolute inset-y-0 right-0 flex items-center'>
            <CustomBtn
              className={
                "text-lightBlueText px-8 py-3 rounded-tr-xl rounded-br-xl bg-skyBlue"
              }
            >
              Request
            </CustomBtn>
          </div>
        </form>

        {/* MOBILE */}
        <div className='flex justify-between space-x-3 mt-1 rounded-md shadow-sm lg:hidden md:hidden'>
          <CustomInput
            inputClassName='py-3.5 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-lg'
            inputProps={{
              type: "email",
              name: "email",
              placeholder: "Enter an email address...",
              value: email,
              onChange: handleChange,
            }}
          />

          <div className='inset-y-0 right-0 flex items-center'>
            <CustomBtn
              className={
                "text-sm text-lightBlueText px-8 py-2 rounded bg-skyBlue"
              }
            >
              Send invite
            </CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
