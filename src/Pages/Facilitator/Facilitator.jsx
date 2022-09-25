import React, { useState } from "react";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";
import Navbar from "../../components/Navbar/Navbar";
import Community from "../../components/Community";
import Footer from "../../components/Footer/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";

    <section>
      <Navbar />

      <section className='pt-2 lg:pt-4'>
        <section className='bg-lightPurple px-8 py-8 lg:px-10 md:px-10 lg:py-28 md:py-20'>
          <div className='flex flex-col justify-center items-center space-y-3'>
            <h1 className='max-w-xs text-center text-primaryColor font-extrabold lg:font-bold md:font-bold text-2xl lg:leading-snug md:leading-snug lg:text-5xl md:text-4xl lg:max-w-2xl md:max-w-md'>
              Join our team of talented facilitators
            </h1>

            <p className='text-primaryColor text-center lg:text-center md:text-center md:max-w-fit lg:max-w-5xl'>
              Let’s up-skill the next generation creators
            </p>
          </div>
        </section>

        <section className='w-full flex flex-col px-10 py-5 md:px-28 lg:px-80 lg:py-10'>
          <h1 className='text-lg font-medium md:text-2xl lg:text-3xl'>
            Fill out the form below
          </h1>
          const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '26226203',
                    formId: '62e13a3b-7823-4ad8-a0c4-98c69c4fdbed',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );

}

          
        </section>

        {/* COMMUNITY */}
        <Community />

        {/* FOOTER */}
        <Footer />
      </section>
    </section>
  );
};

export default Facilitator;
