import React from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const RefundPolicy = () => {
    return (
        <>
            <Navbar />
            <div class="container mx-auto py-8 px-4">
                <h1 class="text-2xl font-bold mb-4">Refund Policy</h1>
                <p class="mb-4">
                    All donations made to COJIM are final and non-refundable.
                    We appreciate your generosity and thank you for supporting our church and its ministries.
                </p>
                <p class="mb-4">
                    We reserve the right to modify this refund policy at any time without prior notice.
                    By using our website and services, you acknowledge and agree to this refund policy.
                    If you have any questions or concerns about this policy, please contact us
                </p>
            </div>
            <Footer />

        </>
    )
}

export default RefundPolicy;