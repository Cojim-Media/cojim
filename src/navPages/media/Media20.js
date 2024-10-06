// import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ImageGallery from './ImageGallery';
import MediaList from './MediaList';
import './media.css';


const Media20 = () => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-2 py-8 bg-gray-50">
                <div className="w-full items-center mx-auto max-w-screen-lg">
                    <div className="group grid w-full sm:grid-cols-2">
                        <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-blue-500 overflow-hidden">
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-4/6 overflow-hidden flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all shadow-2xl">
                                <img src="https://res.cloudinary.com/cojim/image/upload/v1677951281/gallery/177A1905_vsvony.jpg" alt="" />
                            </div>

                            <div className="h-2/3 rounded-xl overflow-hidden">
                                <img src="https://res.cloudinary.com/cojim/image/upload/v1714838441/gallery/MOG_jlcpun.jpg" className="h-full" alt="" />
                            </div>
                            <a className="sm:-rotate-90 font-bold mt-2 mb-8 r gap-2 h-16 text-2xl leading-7" href="/#">
                                <span>MEDIA</span>
                            </a>
                            <a className="absolute h-20 bg-blue-500 w-20 flex items-center justify-center rounded-full bottom-10 left-10 text-white before:block before:absolute before:h-20 before:w-20 before:bg-sky-100 before:rounded-full group-hover:before:animate-ping before:-z-10 hover:bg-sky-600" href="/#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <div className="pl-12">
                                <h2 className="text-5xl font-medium mb-6">Experience Our COJIM Like Never Before</h2>
                                <h3 className="text-2xl font-medium mb-6">Welcome to Our Media Page</h3>
                                <p className="mb-6 text-gray-400">Experience the power and presence of God from the comfort of your own home. Our page is packed with inspiring pictures, videos, and other multimedia content that will help you connect with God and grow in your faith.
                                </p>
                                <h3 className="mb-4 font-semibold text-xl text-gray-400">Explore Our Media Content</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between mb-3">
                                    <a href="/#" className="flex items-center gap-3 hover:text-blue-300">
                                        <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold">Sermons</span>
                                    </a>
                                    <a href="/#" className="flex items-center gap-3 hover:text-blue-300">
                                        <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold">Worship</span>
                                    </a>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between mb-3">
                                    <a href="/#" className="flex items-center gap-3 hover:text-blue-300">
                                        <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold">Prayers</span>
                                    </a>
                                    <a href="/#" className="flex items-center gap-3 hover:text-blue-300">
                                        <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold">Events</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MediaList />
            <ImageGallery />

            <section className="mx-6 my-14 md:mx-24">
                <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-3xl">
                    Our Social Media Pages
                </h1>
                <div className="mx-auto mt-6 flex justify-center">
                    <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                    <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                    <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500">
                    Stay connected with City of Jesus International Ministry and never miss a
                    moment of our inspiring messages and events. Follow us on our social media pages to access all of
                    our media content, including photos, videos, and more. Don't forget to like, share, and comment on
                    our posts to join in the conversation and help spread the word of God to others. Check us out today and
                    see what God is doing in the lives of our church community!
                </p>

                <div className="flex items-center justify-center space-x-2 mt-6">
                    <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/ChristopherOrjiMinistriesCOJIM?mibextid=ZbWKwL&_rdc=1&_rdr" className="text-neutral-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="currentColor"
                            style={{ color: "#1877f2" }}
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/cojimofficiel?t=gM2yvX_4GzUAgcdXD-rP8g&s=09" className="text-neutral-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="currentColor"
                            style={{ color: "#1da1f2" }}
                            viewBox="0 0 24 24">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cojimofficiel/?igshid=YmMyMTA2M2Y%3D" className="text-neutral-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="currentColor"
                            style={{ color: "#c13584" }}
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@christopherorjiministries6459" className="text-neutral-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="currentColor"
                            style={{ color: "#ff0000" }}
                            viewBox="0 0 24 24">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@cojim?_t=8aMdh9hObgs&_r=1" className="text-neutral-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-10 w-10"
                            style={{ color: "#6a76ac" }}>
                            <path
                                fill="currentColor"
                                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Media20;
