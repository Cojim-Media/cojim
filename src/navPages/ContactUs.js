import React from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="container my-6 px-6 mx-auto">

                <section className="mb-32 text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                <div className="map-container-2 w-full">
                                    <iframe title="COJIM Map" src="https://maps.google.com/maps?q=CITY+OF+JESUS+INTERNATIONAL+MINISTRY,+400104,+Enugu&t=&z=13&ie=UTF8&iwloc=&output=embed" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>

                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="grow-0 shrink-0 basis-auto m-4 mb-6 md:mb-0 w-full px-3 lg:px-6">
                                    <h2 className="text-3xl font-bold mb-6 text-primary">Contact us</h2>
                                    <p className="text-gray-500 mb-6">
                                        At City of Jesus International Ministry, we believe that every person
                                        is a valuable part of our community, and we want to make it as easy as
                                        possible for you to connect with us.
                                        Whether you have a question, a prayer request, or simply want to say hello,
                                        we're here for you.
                                    </p>
                                    <p className="text-gray-500 mb-2">
                                        IN/20 Emene Industrial Layout,
                                        Enugu East Local Government Area, Enugu State, Nigeria, West Africa
                                    </p>
                                    <p className="text-gray-500 mb-2">+ 234 704 331 5405</p>
                                    <p className="text-gray-500 mb-2">info@cojim.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
}

export default ContactUs;