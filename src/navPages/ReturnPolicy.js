import React from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const ReturnPolicy = () => {
    return (
        <>
            <Navbar />
            <div class="container mx-auto py-8 px-4">
                <h1 class="text-2xl font-bold mb-4">Return Policy</h1>
                <p class="mb-4">
                    At City of Jesus International Ministry (COJIM), we strive to provide our members and
                    visitors with the best possible service and experience.
                    Due to the nature of our products and services, we are unable to offer returns or refunds.
                </p>

                <h2 class="text-xl font-bold mb-4">Donations:</h2>
                <p class="mb-4">
                    All donations made to COJIM are final and non-refundable.
                    We appreciate your generosity and thank you for supporting our church and its ministries.
                </p>
                <h2 class="text-xl font-bold mb-4">Merchandise:</h2>
                <p class="mb-4">
                    All merchandise purchased from our online store is final sale and non-returnable.
                    We take great care to ensure that our products are of the highest quality,
                    and we stand behind them.
                </p>
                <h2 class="text-xl font-bold mb-4">Digital Products:</h2>
                <p class="mb-4">
                    Due to the nature of digital products, we do not offer refunds for any digital product
                    purchased from our online store, including but not limited to eBooks, audio downloads,
                    and video downloads.
                </p>

                <p class="mb-4">
                    We apologize for any inconvenience this may cause, and we appreciate your understanding.
                    If you have any questions or concerns about this policy, please contact us.
                </p>

                <p class="mb-4">
                    We reserve the right to modify this return policy at any time without prior notice.
                    By using our website and services, you acknowledge and agree to this return policy.
                </p>
            </div>
            <Footer />

        </>
    )
}

export default ReturnPolicy;