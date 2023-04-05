import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import ProgressBar from 'components/ProgressBar';

const AddEquipment = () => {
    // states htmlFor storing form data
    const [formInputData, setFormInputData] = useState({
        name: '', quantity: '', description: ''
    });
    // States htmlFor checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [uploadedImageImg, setUploadedImageImg] = useState();
    const [imagePhotoReaderResult, setImagePhotoReaderResult] = useState();

    const handleImageUpload = (e) => {
        setUploadedImageImg(e.target.files[0]);
    }

    const handleFormInput = (e) => {
        setFormInputData({
            ...formInputData,
            [e.target.name]: e.target.value
        });
    }

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // make sure compulsory inputs are not empty
        if (formInputData.name === '' ||
            formInputData.quantity === '' || formInputData.description === '') {
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please fill all the required fields',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        if (!uploadedImageImg) {
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please upload passport photo to continue',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        // send form data as post request to the server
        (async () => {
            const rawResponse = await fetch('/api/equipment', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formInputData,
                    image: imagePhotoReaderResult
                })
            });
            const content = await rawResponse.json();
            // stop the progress bar
            setSubmitted(false);
            // check if there is an error in the response
            if (content.error) {
                Swal.fire({
                    title: 'Error!',
                    text: content.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            } else {
                setFormInputData({
                    ...formInputData,
                    name: '', quantity: '', description: ''
                });

                Swal.fire({
                    title: 'Success!',
                    text: content.message,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }
        })();
    }

    useEffect(() => {
        if (!uploadedImageImg) {
            return;
        }

        const imagePhotoReader = new FileReader();
        imagePhotoReader.readAsDataURL(uploadedImageImg);
        imagePhotoReader.onloadend = () => {
            setImagePhotoReaderResult(imagePhotoReader.result);
        };
        imagePhotoReader.onerror = () => {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong with the uploaded image photo',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedImageImg]);

    return (
        <>
            <div className="container my-16 px-10 mx-auto">

                <section className="mb-32 text-gray-800">
                    <h5 className="text-xl font-semibold text-center mb-10 md:mb-6">Add New Item</h5>

                    <div className="p-2 flex justify-center items-center mt-2">
                        <div className="w-full md:w-1/2 relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
                            <div
                                className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
                                <label className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                                            rounded-md font-semibold text-xs tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
                                            focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" htmlFor="imageImage">

                                    Select the equipment image
                                </label>
                                <input id="imageImage" onChange={handleImageUpload} className="text-sm cursor-pointer w-36 hidden" type="file" />

                            </div>
                            <div
                                className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                                {
                                    uploadedImageImg ?
                                        <img className="w-16 h-24 md:w-32 md:h-40" src={URL.createObjectURL(uploadedImageImg)} alt="Uploaded equipment" /> :
                                        <span className="text-gray-400 opacity-75">
                                            <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                        </span>
                                }

                            </div>
                        </div>
                    </div>

                    <form>
                        <div className="form-group mb-6">
                            <input
                                name="name"
                                onChange={handleFormInput}
                                value={formInputData['name']}
                                type="text"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleInput7" placeholder="Item Name" />
                        </div>
                        <div className="form-group mb-6">
                            <input
                                name="quantity"
                                onChange={handleFormInput}
                                value={formInputData['quantity']}
                                type="number"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleInput8" placeholder="Quantity" />
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                                name="description"
                                onChange={handleFormInput}
                                value={formInputData['description']}
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea13" rows="3" placeholder="Description"></textarea>
                        </div>

                        {
                            // show the progress bar if data is submited and being processed
                            (submitted) ? (
                                <div className="bg-gray-900">
                                    <ProgressBar />
                                </div>
                            ) : ""
                        }

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Save
                        </button>
                    </form>
                </section>

            </div>
        </>
    )
}

export default AddEquipment;