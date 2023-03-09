import React from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const CancellationPolicy = () => {
    return (
        <>
            <Navbar />
            <div class="container mx-auto py-8 px-4">
                <h1 class="text-2xl font-bold mb-4">Cancellation Policy</h1>
                <p class="mb-4">
                    At City of Jesus International Ministry, we understand that circumstances can arise
                    that may prevent you from attending a scheduled event or service.
                    However, we regret to inform you that we do not allow cancellations or
                    refunds for any of our events or services.
                </p>
                <p class="mb-4">
                    We encourage our members and visitors to carefully review their schedules and
                    commitments before registering or signing up for any of our events or services.
                    Once you have committed to attending an event or service, we expect you to honor your
                    commitment and attend as scheduled.
                </p>

                <p class="mb-4">
                    We believe that our events and services are important opportunities for members and
                    visitors to connect with God and with one another, and we strive to make them as
                    accessible and meaningful as possible.
                    Therefore, we ask that you respect our policy and attend as planned.
                </p>

                <p class="mb-4">
                    If you have any questions or concerns about our cancellation policy, please do not hesitate to contact us.
                    Thank you for your understanding and cooperation.
                </p>
            </div>
            <Footer />

        </>
    )
}

export default CancellationPolicy;