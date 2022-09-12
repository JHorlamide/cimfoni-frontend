import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HubspotContactForm from "../../components/HubsportContactForm";

const HUBSPORT_FORM_ID = process.env.REACT_APP_HUBSPORT_FORM_ID;
const HUBSPORT_PORTAL_ID = process.env.REACT_APP_HUBSPORT_PORTAL_ID;
const HUBSPORT_REGION = process.env.REACT_APP_REGION;

const ContactUs = () => {
  return (
    <section>
      <Navbar />

      <section className='bg-lightPurple px-8 py-8 lg:px-10 md:px-10 lg:py-28 md:py-20'>
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h1 className='max-w-xs text-center text-primaryColor font-extrabold lg:font-bold md:font-bold text-2xl lg:leading-snug md:leading-snug lg:text-5xl md:text-4xl lg:max-w-2xl md:max-w-md'>
            Contact Us
          </h1>
        </div>
      </section>

      <section className='bg-secondary py-5 px-5 lg:px-36 lg:py-20 md:px-10'>
        <HubspotContactForm
          region={HUBSPORT_REGION}
          formId={HUBSPORT_FORM_ID}
          portalId={HUBSPORT_PORTAL_ID}
          // region={"eu1"}
          // formId={"f444d897-9d9d-48e3-adc1-a91caa1c5055"}
          // portalId={"26226203"}
        />
      </section>

      <Footer />
    </section>
  );
};

export default ContactUs;
