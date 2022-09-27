import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Community from "../../components/Community";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HubsportServiceRequestForm from "../../components/HubsportServiceRequestForm";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e, "");
  };

  return (
    <section>
      <Navbar />

      <section className='lg:mt-4 bg-lightGraySecondary'>
        <div className='px-10 py-10 md:px-28 md:py-20 lg:px-80'>
          <div className='flex flex-col'>
            <div className=''>
              <h1 className='text-2xl font-bold text-center lg:text-5xl'>
                Get in touch with us?
              </h1>
              <p className='text-xs mt-4 text-center lg:text-md'>
                Do you require a service? Fill the details in the below form and
                we’ll get in touch with you at the earliest.
              </p>
            </div>

            <div className='mt-10 lg:mt-28'>
              <h1 className='text-lg font-medium text-center'>
                Lets translate your need into reality
              </h1>

              <section className='bg-secondary py-5 px-5 lg:px-36 lg:py-20 md:px-10'>
                <HubsportServiceRequestForm />
              </section>

              {/* <form className='mt-5' onSubmit={handleSubmit}>
                <p className='text-sm font-medium'>Personal Details</p>

                <div className='grid gap-6 mb-6 md:grid-cols-2 mt-4'>
                  <CustomInput
                    id='first_name'
                    label='First Name *'
                    inputProps={{
                      type: "text",
                      name: "first_name",
                      value: formData.first_name,
                      onChange: handleChange,
                    }}
                    required
                    inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                    labelClassName='text-sm text-gray-500 font-medium'
                  />

                  <CustomInput
                    id='last_name'
                    label='Last Name *'
                    inputProps={{
                      type: "text",
                      name: "last_name",
                      value: formData.last_name,
                      onChange: handleChange,
                    }}
                    required
                    inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                    labelClassName={"text-sm text-gray-500 font-medium"}
                  />
                </div>

                <div>
                  <CustomInput
                    id='email'
                    label='Email *'
                    inputProps={{
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleChange,
                    }}
                    required
                    inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                    labelClassName={"text-sm text-gray-500 font-medium"}
                  />
                </div>

                <div className='grid gap-6 mt-3 mb-6 md:grid-cols-2 lg:mt-10'>
                  <div>
                    <label
                      htmlFor='phone'
                      className='text-sm text-gray-500 font-medium'
                    >
                      Phone Number *
                    </label>
                    <div className='w-full flex space-x-3 lg:flex lg:space-x-2 md:flex md:space-x-2'>
                      <PhoneInput
                        country={"ng"}
                        containerClass='phone_input_container'
                        inputClass='phone_input'
                        autoFormat={true}
                        value={formData.phone_code}
                        onChange={(phone_code) => {
                          setFormData({
                            ...formData,
                            phone_code: phone_code,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className='mt-16'>
                  <label
                    htmlFor='phone'
                    className='text-sm text-gray-500 font-medium'
                  >
                    Training Details *
                  </label>

                  <p className='text-sm mt-3'>
                    Tell us about your Organisation. Give us a short brief so
                    that we can understand what you are looking for
                  </p>
                  <CustomInput
                    id='project'
                    box
                    boxProps={{
                      type: "text",
                      name: "project",
                      value: formData.project,
                      onChange: handleChange,
                      placeholder: "Start typing",
                      rows: "8",
                    }}
                    boxClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                  />
                </div>

                <div className='mt-4 lg:mt-10'>
                  <CustomBtn
                    type='submit'
                    className='w-full font-semibold bg-primaryColor py-4 mx-auto rounded-lg text-white'
                  >
                    Submit Application
                  </CustomBtn>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <Community />

      {/* FOOTER */}
      <Footer />
    </section>
  );
};

export default GetInTouch;
