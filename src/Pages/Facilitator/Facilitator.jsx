import React, { Fragment, useState } from "react";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";
import Navbar from "../../components/Navbar/Navbar";
import Community from "../../components/Community";
import Footer from "../../components/Footer/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";

const specializationOptions = [
  {
    label: "Choose your specialization",
    value: "",
  },
  {
    label: "Software Engineer",
    value: "software engineer",
  },
  {
    label: "Graphic Designer",
    value: "graphics designer",
  },
  {
    label: "Media Broadcasting",
    value: "media broadcasting",
  },
];

const Facilitator = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    linkedin_profile: "",
    phone_number: "",
    phone_code: "",
    specialization: "",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <Navbar />

      <section className='bg-lightPurple px-8 py-8 lg:px-10 md:px-10 lg:py-28 md:py-20'>
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h1 className='max-w-xs text-center text-primaryColor font-extrabold lg:font-bold md:font-bold text-2xl lg:leading-snug md:leading-snug lg:text-5xl md:text-4xl lg:max-w-2xl md:max-w-md'>
            Join our team of talented facilitators
          </h1>
          <p className='text-primaryColor text-center lg:text-center md:text-center md:max-w-fit lg:max-w-5xl'>
            You have the knowledge and the expertise, we have the platform.{" "}
            <br className='hidden lg:block md:block' />
            Join us upskill the next generation of tech talents.
          </p>
        </div>
      </section>

      <section className='w-full flex flex-col px-10 py-5 md:px-28 lg:px-80 lg:py-10'>
        <h1 className='text-lg font-medium md:text-2xl lg:text-3xl'>
          Fill out the form below
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-6 mb-6 md:grid-cols-2 mt-10 lg:mt-10 md:mt-10'>
            <div>
              <CustomInput
                id='first_name'
                label={"First Name"}
                inputProps={{
                  type: "text",
                  name: "first_name",
                  value: formData.first_name,
                  onChange: handleChange,
                }}
                errorText={errors.first_name && "First name is required"}
                required
                inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                labelClassName={"text-sm text-gray-500 font-medium"}
              />
            </div>

            <div>
              <CustomInput
                id='last_name'
                label={"Last Name"}
                inputProps={{
                  type: "text",
                  name: "last_name",
                  value: formData.last_name,
                  onChange: handleChange,
                }}
                errorText={errors.label && "Last name is required"}
                required
                inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                labelClassName={"text-sm text-gray-500 font-medium"}
              />
            </div>
          </div>

          <div className='mb-6'>
            <CustomInput
              id='email'
              label={"Email"}
              inputProps={{
                type: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
              }}
              errorText={errors.email && "Email is required"}
              required
              inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
              labelClassName={"text-sm text-gray-500 font-medium"}
            />
          </div>

          <div className='mb-6'>
            <CustomInput
              id='linkedin'
              label={"LinkedIn Profile"}
              inputProps={{
                type: "text",
                name: "linkedin_profile",
                value: formData.linkedin_profile,
                onChange: handleChange,
              }}
              errorText={
                errors.linkedin_profile && "linkedin profile is required"
              }
              required
              inputClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
              labelClassName={"text-sm text-gray-500 font-medium"}
            />
          </div>

          <div className='grid gap-6 mb-6 md:grid-cols-2 lg:mt-10'>
            <div>
              <label
                htmlFor='phone'
                className='text-sm text-gray-500 font-medium'
              >
                Phone Number
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

            <div>
              <CustomInput
                id='specialization'
                label={"Area of specialization"}
                select
                selectOptions={specializationOptions}
                selectProps={{
                  name: "specialization",
                  value: formData.specialization,
                  onChange: handleChange,
                }}
                required
                selectClassName='w-full mt-3 px-3 py-2 rounded-md border-2'
                labelClassName={"text-sm text-gray-500 font-medium"}
                aria-label='Choose your specialization'
                errorText={
                  errors.specialization && "Your specialization is required"
                }
              />
            </div>
          </div>

          <div className='mb-6 lg:mt-20'>
            <CustomBtn
              type='submit'
              className='w-full font-semibold bg-primaryColor py-4 mx-auto rounded-lg text-white'
            >
              Sign me up
            </CustomBtn>
            <p className='text-xs text-primaryColor mt-4 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
              gravida mus enim elit egestas
            </p>
          </div>
        </form>
      </section>

      {/* COMMUNITY */}
      <Community />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Facilitator;