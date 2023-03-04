import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import waitingIllustration from 'img/waiting-for-customer.svg';
import PaymentDetail from 'components/PaymentDetail';
import ProgressBar from 'components/ProgressBar';

const UnconfirmedPayments = () => {
    let navigate = useNavigate();

    const [itemDetails, setItemDetails] = useState({});
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [isPartnerDataReady, setIsPartnerDataReady] = useState(false);
    const [partnerPayments, setPartnerPayments] = useState({});

    const [isMemberDataReady, setIsMemberDataReady] = useState(false);
    const [memberPayments, setMemberPayments] = useState({});

    const toggleEditModal = (itemDetails = {}) => {
        // update item details based on the selected item
        setItemDetails(itemDetails);
        // open modal
        setIsEditModalOpen(!isEditModalOpen);
    }

    useEffect(() => {
        // send a get request to the server to fetch partnerPayments
        (async () => {
            const rawResponse = await fetch(`/api/payment/get-all-payment`, {
                method: 'GET',
            });
            const content = await rawResponse.json();
            const status = rawResponse.status;
            // Redirect the user to login page if status == 401
            if (status === 401) {
                // redirect to login page
                navigate("/partnership");
                return false;
            }
            // check if there is an error in the response
            if (content.error) {
                alert(content.message);
            } else {
                // update payment
                const partnerPayments = content.data;
                let unconfirmedPayments = partnerPayments.filter((item) => item.reviewed !== true);
                const dataObj = {};
                unconfirmedPayments.map(item => dataObj[item._id] = item)
                setPartnerPayments({ ...dataObj });
                // stop the progress bar
                setIsPartnerDataReady(true);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // send a get request to the server to fetch partnerPayments
        (async () => {
            const rawResponse = await fetch(`/api/member-payment/get-all-payment`, {
                method: 'GET',
            });
            const content = await rawResponse.json();
            const status = rawResponse.status;
            // Redirect the user to login page if status == 401
            if (status === 401) {
                // redirect to login page
                navigate("/membership");
                return false;
            }
            // check if there is an error in the response
            if (content.error) {
                alert(content.message);
            } else {
                // update payment
                const memberPayments = content.data;
                let unconfirmedPayments = memberPayments.filter((item) => item.reviewed !== true);
                const dataObj = {};
                unconfirmedPayments.map(item => dataObj[item._id] = item)
                setMemberPayments({ ...dataObj });
                // stop the progress bar
                setIsMemberDataReady(true);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Depositor</th>
                        <th className="py-3 px-6 text-left">Amount</th>
                        <th className="py-3 px-6 text-center">Status</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {
                        // if data is not ready diplay spinners else diplay the table
                        !isPartnerDataReady ? (
                            <tr>
                                <td>
                                    <ProgressBar />
                                </td>
                            </tr>
                        ) : (
                            // If there is no customer yet, display a message
                            !(Object.values(partnerPayments) === undefined || Object.values(partnerPayments).length === 0) ? (
                                Object.values(partnerPayments).map((payment, index) => {
                                    const date = new Date(payment.createdAt);
                                    return (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">
                                                <span>{date.toUTCString()}</span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                <span>{payment.partnerId.firstname} {payment.partnerId.lastname}</span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                <span>{payment.amount}</span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                {
                                                    (payment.reviewed) ? (
                                                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Confirmed</span>
                                                    ) : (
                                                        <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                                    )
                                                }

                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center space-x-4 text-sm">
                                                <button onClick={() => toggleEditModal(payment)} className="bg-green-600 text-white rounded-lg px-3 py-2 font-bold text-xs drop-shadow-lg" aria-label="Edit">
                                                        Confirm
                                                    </button>
                                                    <button onClick={() => toggleEditModal(payment)} className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold text-xs drop-shadow-lg" aria-label="Edit">
                                                        More Details
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })

                            ) : <tr></tr>

                        )
                    }
                </tbody>

                <tbody className="text-gray-600 text-sm font-light">
                    {
                        // if data is not ready diplay spinners else diplay the table
                        !isMemberDataReady ? (
                            <tr>
                                <td>
                                    <ProgressBar />
                                </td>
                            </tr>
                        ) : (
                            // If there is no customer yet, display a message
                            !(Object.values(memberPayments) === undefined || Object.values(memberPayments).length === 0) ? (
                                Object.values(memberPayments).map((payment, index) => {
                                    const date = new Date(payment.createdAt);
                                    return (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">
                                                <span>{date.toUTCString()}</span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                <span>{payment.memberId.firstname} {payment.memberId.lastname}</span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                <span>{payment.amount}</span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                {
                                                    (payment.reviewed) ? (
                                                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Confirmed</span>
                                                    ) : (
                                                        <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                                    )
                                                }

                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center space-x-2 text-sm">
                                                    <button onClick={() => toggleEditModal(payment)} className="bg-green-600 text-white rounded-lg px-3 py-2 font-bold text-xs drop-shadow-lg" aria-label="Edit">
                                                        Confirm
                                                    </button>
                                                    <button onClick={() => toggleEditModal(payment)} className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold text-xs drop-shadow-lg" aria-label="Edit">
                                                        More Details
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })

                            ) : <tr></tr>

                        )
                    }
                </tbody>
            </table>
            {
                (Object.values(memberPayments).length === 0 && Object.values(partnerPayments).length === 0) ? (
                    <>
                        <h3 className="text-center text-gray-600 p-4 text-lg">The list of all partnerPayments will appear here</h3>
                        <div className="flex">
                            <img className="self-center mx-auto" src={waitingIllustration} alt="illustration" />
                        </div>
                    </>
                ) : ''
            }

            <PaymentDetail
                toggleEditModal={toggleEditModal}
                itemDetails={itemDetails}
                isEditModalOpen={isEditModalOpen} />
            {
                isEditModalOpen &&
                <div modal-backdrop="" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
            }
        </div>

    )
}

export default UnconfirmedPayments