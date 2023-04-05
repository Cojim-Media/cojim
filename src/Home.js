import React, { useEffect, useState } from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import bg_img_2 from 'img/slide-2.jpg';
import bg_img_3 from 'img/slide-3.jpg';
import bg_img_4 from 'img/slide-4.jpg';
import bg_img_5 from 'img/slide-1.jpg';
import cta_img from 'img/cta-img.jpg';
import online_message from 'img/online-message.jpg';
import donate_min from 'img/donate-min.jpg';
import partner_min from 'img/partner-min.jpg';
import EquipmentDonationBanner from 'components/EquipmentDonationBanner';


const bg_images = [bg_img_2, bg_img_3, bg_img_4, bg_img_5];

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(bg_images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * bg_images.length);
      setBackgroundImage(bg_images[index]);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // start up backend server
    fetch('/api/startup');
  }, []);

  return (
    <>
      <Navbar />

      <EquipmentDonationBanner />

      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white font-semibold text-3xl">
                  This is the City Of Jesus International Ministry
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Where all good things that come from God, Jesus Christ and the Holy Spirit happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="my-8 mx-3">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="flex lg:py-12">
              <img src={cta_img} className="w-full rounded-lg shadow-lg"
                id="cta-img-nml-50" style={{ zIndex: "1" }} alt="" />
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
            <div
              className="bg-blue-600 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
              <div className="lg:pl-12">
                <h2 className="text-3xl font-bold mb-6">Join us for a worship service</h2>
                <p className="mb-6 pb-2 lg:pb-0">
                  Visit us at our location or online, and get connected with people near you.
                </p>
                <a href="membership">
                  <button type="button" className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Become a member</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <h1 className="text-2xl font-semibold capitalize text-white lg:text-3xl">Finding Hope and Joy in Christ</h1>

            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              Check out the different ways to get involved at City of Jesus International Ministry
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="relative">
                <img className="h-36 w-full rounded-lg object-cover object-center lg:h-44" src={partner_min} alt="" />
                <div className="absolute bottom-0 flex p-3 bg-gray-900">
                  <div className="mx-4">
                    <a href="partnership">
                      <h1 className="text-sm text-gray-200">Become a Partner</h1>
                    </a>
                  </div>
                </div>
              </div>

              <hr className="my-6 w-32 text-blue-500" />
              <p className="text-sm text-gray-400">
                Join Our Community of Compassion: we're a family united by our love of God and our commitment to serving others.
              </p>
            </div>

            <div>
              <div className="relative">
                <img className="h-36 w-full rounded-lg object-cover object-center lg:h-44" src={online_message} alt="" />
                <div className="absolute bottom-0 flex p-3 bg-gray-900">
                  <div className="mx-4">
                    <a href="media">
                      <h1 className="text-sm text-gray-200">Online Messages</h1>
                    </a>
                  </div>
                </div>
              </div>

              <hr className="my-6 w-32 text-blue-500" />
              <p className="text-sm text-gray-400">
                Our online messages can help you develop spiritually.
                Materials to aid in applying the Bible to your life
              </p>
            </div>

            <div>
              <div className="relative">
                <img className="h-36 w-full rounded-lg object-cover object-center lg:h-44" src={donate_min} alt="" />
                <div className="absolute bottom-0 flex p-3 bg-gray-900">
                  <div className="mx-4">
                    <a target="_blank" rel="noreferrer" href="https://logif.org">
                      <h1 className="text-sm text-gray-200">Want to do good? Visit LOGIF</h1>
                    </a>
                  </div>
                </div>
              </div>

              <hr className="my-6 w-32 text-blue-500" />
              <p className="text-sm text-gray-400">
                Join us in making a positive impact on the world.
                Your donation can help us provide essential services
                and support to those in need, and help us build a better
                future for all.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
