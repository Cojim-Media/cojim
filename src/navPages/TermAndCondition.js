import React from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const TermAndCondition = () => {
    return (
        <>
            <Navbar />
            <div class="container mx-auto py-8 px-4">
                <h1 class="text-2xl font-bold mb-4">Terms and Conditions</h1>
                <p class="mb-4">
                    By accessing or using cojim.org (the "Website"),
                    you agree to be bound by the following terms and conditions of use (the "Terms").
                    Please read these Terms carefully before using the Website.
                    If you do not agree to these Terms, you should not access or use the Website.
                </p>
                <h2 class="text-xl font-bold mb-4">Use of the Website</h2>
                <p class="mb-4">
                    The Website is provided for informational and educational purposes only.
                    You may use the Website only for lawful purposes and in accordance with these Terms.
                    You may not use the Website in any manner that could damage, disable, overburden,
                    or impair the Website or interfere with any other party's use and enjoyment of the Website.
                    You may not use any robot, spider, or other automatic device, process, or means to access
                    the Website for any purpose, including monitoring or copying any of the material on the Website.
                </p>

                <h2 class="text-xl font-bold mb-4">Intellectual Property Rights</h2>
                <p class="mb-4">
                    The Website and its entire contents, features, and functionality
                    (including but not limited to all information, software, text, displays, images,
                    video, and audio, and the design, selection, and arrangement thereof),
                    are owned by COJIM or its affiliates, licensors, or other providers of such material
                    and are protected by Nigeria and international copyright, trademark, patent,
                    trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <h2 class="text-xl font-bold mb-4">User Content</h2>
                <p class="mb-4">
                    The Website may include interactive features and areas that allow users to
                    submit or upload content, including but not limited to comments, photos, videos,
                    and other materials (collectively, "User Content").
                    You are solely responsible for your User Content and the consequences of submitting or
                    publishing it. By submitting or publishing User Content on the Website,
                    you grant COJIM a non-exclusive, worldwide, royalty-free, perpetual, irrevocable,
                    sublicensable, and transferable license to use, reproduce, distribute,
                    prepare derivative works of, display, and perform your User Content in connection with
                    the Website and COJIM's business operations.
                </p>
                <h2 class="text-xl font-bold mb-4">Prohibited Uses</h2>
                <p class="mb-4">
                    You may use the Website only for lawful purposes and in accordance with these Terms. 
                    You agree not to use the Website:
                </p>
                <ul class="list-disc ml-8 mb-4">
                    <li>
                        In any way that violates any applicable Federal, State, Local, or International law or regulation
                    </li>
                    <li>
                        To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by COJIM, may harm COJIM or users of the Website or expose them to liability
                    </li>
                    <li>To impersonate or attempt to impersonate COJIM, a COJIM employee, another user, or any other person or entity</li>
                    <li>
                        To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation
                    </li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by COJIM, may harm COJIM or users of the Website or expose them to liability</li>
                </ul>
                <h2 class="text-xl font-bold mb-4">Disclaimer of Warranties</h2>
                <p class="mb-4">
                    THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
                    WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. COJIM DISCLAIMS ALL WARRANTIES,
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default TermAndCondition;