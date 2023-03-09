import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import ProgressBar from 'components/ProgressBar';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';

const Cart = () => {
    const [cartItems, setCartItems] = useState({});
    // for monitoring when a http request is sent
    const [submitted, setSubmitted] = useState(false);
    // const globayPayMerchantid = {
    //     'NGN': "22979",
    //     'USD': "22980"
    // };
    // const [globalpayCurrency, setGlobalpayCurrency] = useState('USD');

    const [billingData, setBillingData] = useState({
        phone: '', address: '', fullname: '', email: ""
    });

    const handleFormInput = (e) => {
        setBillingData({
            ...billingData,
            [e.target.name]: e.target.value
        });
    }

    // const makeid = (length) => {
    //     let result = '';
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     const charactersLength = characters.length;
    //     let counter = 0;
    //     while (counter < length) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //         counter += 1;
    //     }
    //     return result;
    // }

    const cartTotalAmount = Object.values(cartItems).reduce((prev, item) => (
        prev + (item.sellingPrice * item.count)
    ), 0);

    const handleItemCountChange = (event, _id) => {
        setCartItems({
            ...cartItems,
            [_id]: {
                ...cartItems[_id],
                count: event.target.value
            }
        });
    }

    const handleLeaveCountChange = (event, _id) => {
        // if count is less than 1 update it to 1
        if (!(event.target.value) || (event.target.value < 1)) {
            setCartItems({
                ...cartItems,
                [_id]: {
                    ...cartItems[_id],
                    count: 1
                }
            });
        }
    }

    const handleRemoveFromCart = (_id) => {
        // destructure assignment
        const { [_id]: value, ...otherItems } = cartItems;
        setCartItems({ ...otherItems });
    }

    const handleSaveOrder = (e) => {
        e.preventDefault();
        // make sure cartItems is not empty before continuing
        if (!Object.values(cartItems).length) {
            // exit function
            return false;
        }

        // make sure compulsory inputs are not empty
        if (billingData.phone === '' ||
            billingData.address === '' || billingData.fullname === '' ||
            billingData.email === '') {
            setSubmitted(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please fill all the required fields',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        // prepare the post data
        // "products"
        const sales = Object.values(cartItems).map(item => {
            return {
                referenceId: `SA${(new Date()).getTime().toString()}`,
                productId: item._id,
                quantity: (item.count > 0) ? item.count : 1,
                subTotal: (item.sellingPrice * item.count),
            }
        });

        setSubmitted(true);
        // send a post request to the server
        (async () => {
            const rawResponse = await fetch('/api/sales/add-sales', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        referenceId: `ORD${(new Date()).getTime().toString()}`,
                        customerId: null,
                        grandTotal: cartTotalAmount,
                        sales: sales,
                        billingData: billingData
                    }
                )
            });
            const content = await rawResponse.json();
            // stop the progress bar
            setSubmitted(false);
            // check if there is an error in the response
            if (content.error) {
                alert(content.message);
            } else {
                Swal.fire({
                    title: 'Success!',
                    text: `We are excited to inform you that we have received your order. 
                            We would like to thank you for your purchase and support of our church's ministry.
                            We are now processing your order and will ship it out as soon as possible. 
                            Please note that delivery times may vary depending on your location.`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                setCartItems({});
                localStorage.setItem('cart', JSON.stringify([]));
            }
        })();
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            const cartObj = {};
            cart.forEach((item) => cartObj[item._id] = item);
            setCartItems({
                ...cartItems,
                ...cartObj
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!Object.values(cartItems).length) {
            return;
        }
        const cart = Object.values(cartItems);
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cartItems]);

    return (
        <>
            <Navbar />
            <div className="px-4 py-1">
                <form className="grid grid-cols-12 gap-5 bg-white rounded-lg p-2 xs:p-5" action="#">
                    <div className="col-span-12 lg:col-span-8">
                        {/* <!-- Element Responsive --> */}
                        {
                            Object.values(cartItems).map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col xs:flex-row lg:hidden gap-2 w-full p-2 transition-all-300 hover:bg-gray-100">
                                        <div className="content flex items-center">
                                            <div className="flex items-center">
                                                <div className="border rounded-lg h-[30px] w-[30px] min-w-[30px] overflow-hidden">
                                                    <span >
                                                        <img className="w-full h-full object-cover" src={`${item.thumbnailFile ? item.thumbnailFile.url : ''}`} alt="product" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 w-full">
                                            <div className="flex flex-col gap-2 w-full">
                                                <div className="content">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-light xs:hidden">{item.productName}</span>
                                                        <span className="font-bold clamp-2 break-all" >{item.productName}</span>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-light lg:hidden">Unit Price</span>
                                                        <div className="flex gap-2 items-center">
                                                            <span className="font-bold text-primary">${item.sellingPrice}</span>
                                                            <small className="text-xs text-primary line-through">${item.mainPrice}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-light">Subtotal</span>
                                                        <span className="font-bold text-primary">${item.sellingPrice * item.count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content flex items-center">
                                                <div className="flex items-center gap-x-4 gap-y-1">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-light">Quantity</span>
                                                        <div className="quantity inline-flex bg-white rounded-lg shadow">
                                                            <input
                                                                onBlur={(e) => handleLeaveCountChange(e, item._id)}
                                                                onChange={(e) => handleItemCountChange(e, item._id)}
                                                                className="quantity-value input-number w-12 text-center text-lg p-1 bg-transparent text-gray-400 border-none focus:ring-0 focus:border-none"
                                                                type="number"
                                                                min="1"
                                                                value={item.count} />
                                                        </div>
                                                    </div>
                                                    <div onClick={() => handleRemoveFromCart(item._id)} className="tippy tippy-remove text-slate-400 hover:text-primary cursor-pointer transition-all-300">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash fill-current" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <!-- Element Desktop --> */}
                        <div className="overflow-x-auto hidden lg:block">
                            <table className="w-full min-w-[800px] text-left table-auto">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="p-2">Product Name</th>
                                        <th className="p-2">Unit Price</th>
                                        <th className="p-2">Quantity</th>
                                        <th className="p-2">Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.values(cartItems).map((item, index) => {
                                            return (
                                                <tr key={index} className="hover:bg-gray-100">
                                                    <td className="p-2">
                                                        <div className="border rounded-lg h-[30px] w-[30px] min-w-[30px] overflow-hidden">
                                                            <span >
                                                                <img className="w-full h-full object-cover" src={`${item.thumbnailFile ? item.thumbnailFile.url : ''}`} alt={item.productName} />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="p-2">
                                                        <span className="font-bold clamp-2 break-all" >{item.productName}</span>
                                                    </td>
                                                    <td className="p-2">
                                                        <span className="font-bold text-primary">${item.sellingPrice}</span>
                                                    </td>
                                                    <td className="p-2">
                                                        <div className="quantity inline-flex bg-white rounded-lg shadow">
                                                            <input
                                                                onBlur={(e) => handleLeaveCountChange(e, item._id)}
                                                                onChange={(e) => handleItemCountChange(e, item._id)}
                                                                className="quantity-value input-number w-12 text-center text-lg p-1 bg-transparent text-gray-400 border-none focus:ring-0 focus:border-none"
                                                                type="number"
                                                                min="1"
                                                                value={item.count} />
                                                        </div>
                                                    </td>
                                                    <td className="p-2">
                                                        <span className="font-bold text-primary">${item.sellingPrice * item.count}</span>
                                                    </td>
                                                    <td className="p-2">
                                                        <div onClick={() => handleRemoveFromCart(item._id)} className="tippy tippy-remove btn-delete text-slate-400 hover:text-primary transition-all-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash fill-current" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                            </svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-3 items-center">
                                <div className="w-32">
                                    <span className="text-gray-600 font-semibold">Contact</span>
                                </div>
                                <div className="flex-grow pl-3">
                                    <input onChange={handleFormInput} placeholder="e.g +2347043315405" name="phone" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" />
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-32">
                                    <span className="text-gray-600 font-semibold">Billing Address</span>
                                </div>
                                <div className="flex-grow pl-3">
                                    <input onChange={handleFormInput} name="address" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" />
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-32">
                                    <span className="text-gray-600 font-semibold">Fullname</span>
                                </div>
                                <div className="flex-grow pl-3">
                                    <input onChange={handleFormInput} name="fullname" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" />
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-32">
                                    <span className="text-gray-600 font-semibold">Email Address</span>
                                </div>
                                <div className="flex-grow pl-3">
                                    <input onChange={handleFormInput} name="email" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                            <div className="w-full p-3 border-b border-gray-200">
                                <div className="mb-5">
                                    <label for="type1" className="flex items-center cursor-pointer">
                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                        <img alt=" " src="https://demo.globalpay.com.ng/GlobalPayAPI/img/globalpay.jpg" className="h-6 ml-3" />
                                    </label>
                                </div>
                                <form
                                    target="_blank"
                                    className="px-9"
                                    action="https://demo.globalpay.com.ng/globalpay_demo/Paymentgatewaycapture.aspx"
                                    method="POST"
                                >
                                    <div className="mb-5">
                                        <div className="mb-2">
                                            <input name="names" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="hidden" placeholder="e.g Christopher Orji" />
                                        </div>

                                        <div className="mb-2">
                                            <input type="hidden" value={cartTotalAmount} name="amount" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" />
                                        </div>

                                        <div className="mb-2">
                                            <input name="email_address" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="hidden" placeholder="e.g cojimmedia@gmail.com" />
                                        </div>

                                        <div className="mb-2">
                                            <input name="phone_number" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="hidden" placeholder="e.g +2347043315405" />
                                        </div>

                                        <div className="relative inline-flex self-center">
                                            <svg className="text-white bg-primary absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 38 22" version="1.1">
                                                <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                                <g id="ZahnhelferDE—Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g transform="translate(-539.000000, -199.000000)" fill="#ffffff" fillRule="nonzero">
                                                        <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                                                            <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <select onChange={(e) => setGlobalpayCurrency(e.target.value)} name="currency" className="text-2xl w-64 font-bold rounded border-2 border-pribg-primary text-gray-600 h-14 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                                <option>NGN</option>
                                                <option>USD</option>
                                            </select>
                                        </div>

                                        <input type="hidden" id="merch_txnref" name="merch_txnref" value={makeid(50)}></input>
                                        <input type="hidden" id="merchantid" name="merchantid" value={globayPayMerchantid[globalpayCurrency]} />
                                    </div>


                                    <div>
                                        <button
                                            className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                        >
                                            Donate Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="w-full p-3">
                                <label for="type2" className="flex items-center cursor-pointer">
                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                    <img alt=" " src="data:image/png;base64,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" width="80" className="ml-3" />
                                </label>
                            </div>
                        </div> */}

                        <div className="border-2 rounded-lg p-4">
                            <span className="font-bold text-lg text-center inline-block mb-10">Summary of your purchase:</span>
                            <div className="py-4">
                                <div className="flex justify-between my-2">
                                    <span>Subtotal:</span>
                                    <span>${cartTotalAmount}</span>
                                </div>
                                <div className="flex justify-between my-2">
                                    <span>Vat:</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between my-2">
                                    <span>Discount:</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div className="uppercase flex justify-between font-bold text-xl py-4 border-t-2 border-gray-200">
                                <span>Total:</span>
                                <span>${cartTotalAmount}</span>
                            </div>
                            {
                                // show the progress bar if data is submited and being processed
                                (submitted) ? (
                                    <div className="bg-gray-900">
                                        <ProgressBar />
                                    </div>
                                ) : ""
                            }
                            <button onClick={handleSaveOrder} className="btn-view-shopping-cart btn-effect flex justify-center items-center w-full p-2 bg-primary rounded-lg transition-all-300">
                                <span className="font-bold uppercase text-white">Checkout</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <Footer />
        </>
    )
}

export default Cart;