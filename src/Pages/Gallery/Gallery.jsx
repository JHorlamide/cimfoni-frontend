import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { galleryImages } from "../../utils/constants";
import Community from "../../components/Community";
import Footer from "../../components/Footer/Footer";
import YouTube from "react-youtube";

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

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
    event.target.pauseVideo();
  };

  return (
    <section>
      <Navbar />

      <section className='bg-lightPurple px-10 py-10 md:px-28 md:py-20'>
        <h1 className='text-primaryColor font-bold mb-2 md:mb-3 text-2xl md:text-5xl'>
          Photo gallery
        </h1>
      </section>

      <section className='bg-galleryBackgroundColor px-10 py-5 md:px-28 lg:py-20'>
        <section className='overflow-hidden text-gray-700 mt-3'>
          <div className='py-2 mx-auto'>
            <div className='flex flex-wrap -m-1 md:-m-2'>
              {galleryImages.map(({ id, name, image }) => (
                <div key={id} className='flex flex-wrap w-1/4'>
                  <div className='w-full p-1 md:p-2'>
                    <img
                      className='block object-cover object-center w-full h-full rounded-lg cursor-pointer'
                      alt={name}
                      src={image}
                      onClick={handleIsOpen}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={galleryImages[photoIndex].image}
              nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length].image}
              prevSrc={
                galleryImages[
                  (photoIndex + galleryImages.length - 1) % galleryImages.length
                ].image
              }
              onCloseRequest={handleIsOpen}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + galleryImages.length - 1) % galleryImages.length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex(photoIndex + 1) % galleryImages.length
              }
            />
          )}
        </section>

        <div className='flex justify-center items-center lg:py-20'>
          <YouTube
            className={"rounded-lg"}
            videoId='e5Z_Fr3R5QQ'
            opts={opts}
            onReady={_onReady}
          />
          {/* <YouTube className={'rounded-lg'} videoId='e5Z_Fr3R5QQ' opts={opts} onReady={_onReady} /> */}
        </div>
      </section>

      {/* COMMUNITY */}
      <Community />

      {/* FOOTER */}
      <Footer />
    </section>
  );
};

export default Gallery;
