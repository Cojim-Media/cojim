import React, { useState, useEffect } from "react";
import './media.css'; // Import your CSS file

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the images from your API endpoint
    fetch("/api/media/get-images")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.data || []); // Access the correct part of the response
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="image-gallery-container">
      <section className="px-4 py-14 mx-auto">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Our Church Family in Pictures
            </span>
          </h1>
        </div>
      </section>

      {/* Image gallery section */}
      <section className="container mx-auto px-2 py-2">
        <div className="w-full h-full select-none">
          <div className="gallery">
            {Array.isArray(images) && images.map((image) => (
              <div
                key={image._id}
                className="gallery-item"
                onClick={() => handleClick(image.link)}
              >
                <img src={image.link} alt={`Image ${image._id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
