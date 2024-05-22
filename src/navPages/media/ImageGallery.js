import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [galleryOpened, setGalleryOpened] = useState(false);
    const [activeUrl, setActiveUrl] = useState(null);
    const [imageIndex, setImageIndex] = useState(null);

    const openGallery = (index) => {
        setImageIndex(index);
        setActiveUrl(images[index]);
        setGalleryOpened(true);
    };

    const closeGallery = () => {
        setGalleryOpened(false);
        setTimeout(() => setActiveUrl(null), 300);
    };

    const nextImage = () => {
        let newIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
        setImageIndex(newIndex);
        setActiveUrl(images[newIndex]);
    };

    const prevImage = () => {
        let newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
        setImageIndex(newIndex);
        setActiveUrl(images[newIndex]);
    };

    return (
        <>
            <section className="px-4 py-14 mx-auto">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Our Church Family in Pictures</span>
                    </h1>
                </div>

            </section>
            <section className="container mx-auto px-2 py-2">
                <div className="w-full h-full select-none">
                    <div className="max-w-6xl mx-auto">
                        <ul id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
                            {images.map((imgSrc, index) =>
                                <li key={index}>
                                    <img onClick={() => openGallery(index)} src={imgSrc} alt={`gallery ${index + 1}`} />
                                </li>
                            )}
                        </ul>
                    </div>
                    {galleryOpened && (
                        <div onClick={closeGallery} className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out">
                            <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                                <div onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                                    {/* SVG for left arrow */}
                                </div>
                                <img className="object-contain object-center w-full h-full select-none cursor-zoom-out" src={activeUrl} alt="" />
                                <div onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                                    {/* SVG for right arrow */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ImageGallery;
