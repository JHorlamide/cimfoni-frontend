import React, { useState } from "react";
import CustomBtn from "../../components/CustomBtn";
import CustomInput from "../../components/CustomInput";
import Navbar from "../../components/Navbar/Navbar";
import Community from "../../components/Community";
import Footer from "../../components/Footer/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import HubspotForm from 'react-hubspot-form'

const specializationOptions = [
  {
    label: "Choose your specialization",
    value: "",
  },
  {
    label: "Graphic Designer",
    value: "graphics designer",
  },
  {
    label: "Broadcast production",
    value: "broadcast production",
  },
  {
    label: "Journalism",
    value: "journalism",
  },
  {
    label: "Digital Marketing Platforms",
    value: "digital marketing platforms",
  },
];

const Facilitator = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_code: "",
    phone_number: "",
    specialization: "",
    linkedin_profile: "",
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
    <section>
      <Navbar />

      <HubspotForm
                portalId='26226203'
                formId='5a06921c-9229-4caa-aef5-39b8f75bbcb1'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />

        {/* COMMUNITY */}
        <Community />

        {/* FOOTER */}
        <Footer />
      </section>
    
  );
};

export default Facilitator;
