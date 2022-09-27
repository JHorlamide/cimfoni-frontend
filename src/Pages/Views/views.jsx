import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { galleryImages } from "../../utils/constants";
import Community from "../../components/Community";
import Footer from "../../components/Footer/Footer";
import YouTube from "react-youtube";

function Views() {
  const opts = {
    height: "390",
    width: "640",
    rel: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <section>
      <Navbar />

      <section className='bg-lightPurple px-10 py-10 md:px-28 md:py-20'>
        {/* <p className='text-primaryColor font-medium mb-5 md:text-xl'>
              Our story
            </p> */}

        {/* <h1 className='text-primaryColor font-bold text-2xl md:text-5xl'>
              What we believe
            </h1> */}

        <h1 className='text-primaryColor font-bold mb-2 md:mb-3 text-2xl md:text-5xl'>
          Photo gallery
        </h1>
      </section>

      <section className='bg-galleryBackgroundColor px-10 py-5 md:px-28 lg:py-20'>
        {/* <h1 className='text-2xl font-bold text-gray-500 lg:text-4xl'>
              Photo gallery
            </h1> */}
        {/* <p className='text-xs text-gray-500 mt-3 text-justify lg:max-w-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              feugiat massa amet posuere venenatis in sed. Ut purus vestibulum
              vestibulum venenatis a, auctor.
            </p> */}
        <section className='overflow-hidden text-gray-700 mt-3'>
          <div className='py-2 mx-auto'>
            <div className='flex flex-wrap -m-1 md:-m-2'>
              {galleryImages.map(({ id, name, image, imageHeight }) => (
                <div key={id} className='flex flex-wrap w-1/4'>
                  <div className='w-full p-1 md:p-2'>
                    <img
                      alt={name}
                      className={`block object-cover object-center w-full h-full rounded-lg`}
                      src={image} />
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

        <div className='flex justify-center items-center lg:py-20'>
          <YouTube
            className={"rounded-lg"}
            videoId='e5Z_Fr3R5QQ'
            opts={opts}
            onReady={_onReady} />
          {/* <YouTube className={'rounded-lg'} videoId='e5Z_Fr3R5QQ' opts={opts} onReady={_onReady} /> */}
        </div>
      </section>

      {/* COMMUNITY */}
      <Community />

      {/* FOOTER */}
      <Footer />
    </section>
  );
}

export default Views;
