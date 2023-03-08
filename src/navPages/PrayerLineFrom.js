import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import ProgressBar from 'components/ProgressBar';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const PrayerLineFrom = () => {
    // states htmlFor storing form data
    const [formInputData, setFormInputData] = useState({
        fullname: '', age: '', state: '', email: '',
        occupation: '', nationality: '', country: '', phone: '',
        problemDuration: '', medicalAid: '', medication: ''
    });

    const [prayerType, setPrayerType] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);

    const [uploadedMedicalReportImg, setUploadedMedicalReportImg] = useState();
    const [medicalReportPhotoReaderResult, setMedicalReportPhotoReaderResult] = useState();
    const [uploadedHIVTestImg, setUploadedHIVTestImg] = useState();
    const [HIVTestReaderResult, setHIVTestReaderResult] = useState();

    const handleFormInput = (e) => {
        setFormInputData({
            ...formInputData,
            [e.target.name]: e.target.value
        });
    }

    const handleSelectPrayerType = (e) => {
        setPrayerType(e.target.value);
    }

    const handleMedicalReportUpload = (e) => {
        setUploadedMedicalReportImg(e.target.files[0]);
    }

    const handleHIVTestUpload = (e) => {
        setUploadedHIVTestImg(e.target.files[0]);
    }

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // make sure compulsory inputs are not empty
        if (formInputData.fullname === '' ||
            formInputData.age === '' || formInputData.nationality === '' ||
            formInputData.country === '' || formInputData.phone === '' ||
            formInputData.problemDuration === '') {
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please fill all the required fields',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        if(prayerType === ''){
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please select a prayer type',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        if (!uploadedMedicalReportImg) {
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please upload payment receipt to continue',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        if (!uploadedHIVTestImg) {
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please upload payment receipt to continue',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        // send form data as post request to the server
        (async () => {
            const rawResponse = await fetch('/api/prayer-line/submit-request', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formInputData,
                    prayerType: prayerType,
                    medicalReport: medicalReportPhotoReaderResult,
                    HIVTest: HIVTestReaderResult
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
                    fullname: '', age: '', state: '', email: '',
                    occupation: '', nationality: '', country: '', phone: '',
                    problemDuration: '', medicalAid: '', medication: ''
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
        if (!uploadedMedicalReportImg) {
            return;
        }

        const medicalReportPhotoReader = new FileReader();
        medicalReportPhotoReader.readAsDataURL(uploadedMedicalReportImg);
        medicalReportPhotoReader.onloadend = () => {
            setMedicalReportPhotoReaderResult(medicalReportPhotoReader.result);
        };
        medicalReportPhotoReader.onerror = () => {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong with the uploaded medicalReport photo',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedMedicalReportImg]);

    useEffect(() => {
        if (!uploadedHIVTestImg) {
            return;
        }

        const HIVTestReader = new FileReader();
        HIVTestReader.readAsDataURL(uploadedHIVTestImg);
        HIVTestReader.onloadend = () => {
            setHIVTestReaderResult(HIVTestReader.result);
        };
        HIVTestReader.onerror = () => {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong with the uploaded HIVTest',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedHIVTestImg]);

    useEffect(() => {
        // start up backend server
        fetch('/api/startup');
    }, []);

    return (
        <>
            <Navbar />
            <div class="flex items-center justify-center bg-gray-100">
                <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 class="text-xl font-bold text-center">COJIM PRAYER LINE REGISTRATION FORM</h3>
                    <div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Full Name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['fullname']} name="fullname" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Age</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['age']} name="age" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Age" />
                                </div>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">State/Province</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['state']} name="state" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Nationality</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['nationality']} name="nationality" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Country of Resident</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['country']} name="country" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Occupation</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['occupation']} name="occupation" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Telephone Number/Fax</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['phone']} name="phone" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['email']} name="email" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">
                                    Select Prayer Type
                                </label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <select onChange={handleSelectPrayerType} name="prayerType" data-te-select-init>
                                        <option value="">Select</option>
                                        <option value="healing">Healing</option>
                                        <option value="deliverance">Deliverance</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {
                            (prayerType === 'healing') ?
                                <>
                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-5">
                                            <label for="" class="text-xs font-semibold px-1">
                                                Current Medical Reports From Government Approved Hospital
                                                (that shows the kind of sickness you have)
                                            </label>
                                            <div class="flex">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <div
                                                    className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
                                                    <label className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                                                rounded-md font-semibold text-xs tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
                                                focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" htmlFor="medicalReportImage">

                                                        Select a medicalReport photograph
                                                    </label>
                                                    <input id="medicalReportImage" onChange={handleMedicalReportUpload} className="text-sm cursor-pointer w-36 hidden" type="file" />

                                                </div>
                                                <div
                                                    className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                                                    {
                                                        uploadedMedicalReportImg ?
                                                            <img className="w-16 h-24 md:w-32 md:h-40" src={URL.createObjectURL(uploadedMedicalReportImg)} alt="Uploaded medicalReport" /> :
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
                                    </div>

                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-5">
                                            <label for="" class="text-xs font-semibold px-1">
                                                Confirmatory Test of HIV/AIDS From Government Recognized Hospital
                                            </label>
                                            <div class="flex">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <div
                                                    className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
                                                    <label className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                                                rounded-md font-semibold text-xs tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
                                                focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" htmlFor="HIVTestImage">

                                                        Upload HIV/AIDS Test Result
                                                    </label>
                                                    <input id="HIVTestImage" onChange={handleHIVTestUpload} className="text-sm cursor-pointer w-36 hidden" type="file" />

                                                </div>
                                                <div
                                                    className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                                                    {
                                                        uploadedHIVTestImg ?
                                                            <img className="w-16 h-24 md:w-32 md:h-40" src={URL.createObjectURL(uploadedHIVTestImg)} alt="Uploaded HIVTest" /> :
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
                                    </div>

                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-5">
                                            <label for="" class="text-xs font-semibold px-1">
                                                Medical aid instructions e.g Lumber Corset,
                                                Neck Culler, Inhealer, Wheelchair, Pair of Clutches,
                                                Nebulizer etc.
                                            </label>
                                            <div class="flex">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <textarea
                                                    name="medicalAid"
                                                    class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    rows="3">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex -mx-3">
                                        <div class="w-full px-3 mb-5">
                                            <label for="" class="text-xs font-semibold px-1">
                                                Medication You're taking (if available)
                                            </label>
                                            <div class="flex">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <input onChange={handleFormInput} value={formInputData['medication']} name="medication" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                            </div>
                                        </div>
                                    </div>


                                </> :
                                (prayerType === 'deliverance') ?
                                <>
                                    <label for="" class="text-xs font-semibold px-1">
                                        IF YOU HAVE SPIRITUAL PROBLEMS RANGING FROM DEMONIC OPERATION, NIGHT MARES, EVIL ATTACKS, MOVING OBJECTS, MARITAL PROBLEMS LIKE DISAPPOINTMENTS IN MARRIAGE, FAILURE, GENERATIONAL COURSE  LIKE POVERTY, SUDDEN DEATH FROM THE FAMILY, ETC.
                                    </label>
                                </> : ''
                        }

                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">
                                    kindly state how long you have having the problem or problems
                                </label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={handleFormInput} value={formInputData['problemDuration']} name="problemDuration" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        {
                            // show the progress bar if data is submited and being processed
                            (submitted) ? (
                                <div className="bg-gray-900">
                                    <ProgressBar />
                                </div>
                            ) : ""
                        }

                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <button onClick={handleSubmit} class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SEND NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrayerLineFrom;