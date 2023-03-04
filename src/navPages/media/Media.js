/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Media = () => {
  return (
    <>
      <Navbar />
      <div class="container mx-auto px-6 py-6">
        <h1 class="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-3xl">
          Experience COJIM like never before with our Media Page
        </h1>

        <div class="mx-auto mt-6 flex justify-center">
          <span class="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
          <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
          <span class="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
        </div>

        <p class="mx-auto mt-6 max-w-2xl text-center text-gray-500">
          Welcome to City of Jesus International Ministry's Media Page,
          where you can experience the power and presence of God from the comfort of your own home.
          Our page is packed with inspiring pictures, videos, and other
          multimedia content that will help you connect with God and grow in your faith.
        </p>
      </div>

      <section className="mx-6 md:mx-24">
        <h1 class="text-center my-4 text-xl font-semibold capitalize text-gray-800 lg:text-2xl">Our Latest Sermons</h1>

        <div class="grid gap-6 md:grid-cols-2">
          <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" }}>
            <iframe
              class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/v64KOxKVLVg"
              allowfullscreen></iframe>
          </div>

          <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" }}>
            <iframe
              class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
              src="https://player.vimeo.com/video/137857207"
              allowfullscreen></iframe>
          </div>
          <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" }}>
            <iframe
              class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/v64KOxKVLVg"
              allowfullscreen></iframe>
          </div>

          <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style={{ paddingTop: "56.25%" }}>
            <iframe
              class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
              src="https://player.vimeo.com/video/137857207"
              allowfullscreen></iframe>
          </div>
        </div>
      </section>


      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h1 class="text-center my-4 text-xl font-semibold capitalize text-gray-800 lg:text-2xl">Gallery</h1>
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Media;
