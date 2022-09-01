import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { galleryImages } from "../../utils/constants";
import Community from "../../components/Community";
import Footer from "../../components/Footer/Footer";

//Gallery Images
// import Frame1 from "../../assets/images/gallery-images/Frame-1.png";
// import Frame2 from "../../assets/images/gallery-images/Frame-2.png";
// import Frame3 from "../../assets/images/gallery-images/Frame-3.png";
// import Frame4 from "../../assets/images/gallery-images/Frame-4.png";
// import Frame5 from "../../assets/images/gallery-images/Frame-5.png";
// import Frame6 from "../../assets/images/gallery-images/Frame-6.png";
// import Frame7 from "../../assets/images/gallery-images/Frame-7.png";
// import Frame8 from "../../assets/images/gallery-images/Frame-8.png";
// import Frame9 from "../../assets/images/gallery-images/Frame-9.png";
// import Frame10 from "../../assets/images/gallery-images/Frame-10.png";
// import Frame11 from "../../assets/images/gallery-images/Frame-11.png";
// import Frame12 from "../../assets/images/gallery-images/Frame-12.png";
// import Frame13 from "../../assets/images/gallery-images/Frame-13.png";
// import Frame14 from "../../assets/images/gallery-images/Frame-14.png";
// import Frame15 from "../../assets/images/gallery-images/Frame-15.png";
// import Frame16 from "../../assets/images/gallery-images/Frame-16.png";
// import Frame17 from "../../assets/images/gallery-images/Frame-17.png";

const Gallery = () => {
  return (
    <Fragment>
      <Navbar />

      <section className='bg-lightPurple px-10 py-10 md:px-28 md:py-20'>
        <p className='text-primaryColor font-medium mb-5 md:text-xl'>
          Our story
        </p>
        <h1 className='text-primaryColor font-bold mb-2 md:mb-3 text-2xl md:text-5xl'>
          We stand by
        </h1>
        <h1 className='text-primaryColor font-bold text-2xl md:text-5xl'>
          What we believe
        </h1>
      </section>

      <section className='bg-galleryBackgroundColor px-10 py-5 md:px-28 lg:py-20'>
        <h1 className='text-2xl font-bold text-gray-500 lg:text-4xl'>
          Photo gallery
        </h1>

        <p className='text-xs text-gray-500 mt-3 text-justify lg:max-w-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
          feugiat massa amet posuere venenatis in sed. Ut purus vestibulum
          vestibulum venenatis a, auctor.
        </p>

        <section className='overflow-hidden text-gray-700 mt-3'>
          <div className='py-2 mx-auto'>
            <div className='flex flex-wrap -m-1 md:-m-2'>
              {galleryImages.map(({ id, name, image, imageHeight }) => (
                <div key={id} className='flex flex-wrap w-1/4'>
                  <div className='w-full p-1 md:p-2'>
                    <img
                      alt={name}
                      className={`block object-cover object-center w-full h-full rounded-lg`}
                      src={image}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* <div className='grid grid-rows-4 grid-flow-col gap-4'>
              {galleryImages.map(({ id, name, image, imageHeight }) => (
                <div key={id} className='flex flex-wrap w-full'>
                  <div className='w-full p-1 md:p-2'>
                    <img
                      alt={name}
                      className={`block object-cover object-center w-full h-full rounded-lg`}
                      src={image}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </section>

      {/* COMMUNITY */}
      <Community />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Gallery;
