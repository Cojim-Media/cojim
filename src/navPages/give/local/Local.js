import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
// import PayStackPop from '@paystack/inline-js';
import './local.css';

// const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });
const Local = () => {
  // For the display for the PayStack
  // const [show, setshow] = useState(true);

  //for the payStack payment
  // const [email, setemail] = useState('');
  // const [amount, setamount] = useState('');
  // const [first, setfirst] = useState('');
  // const [last, setlast] = useState('');

  // const makeid = (length) => {
  //   let result = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   const charactersLength = characters.length;
  //   let counter = 0;
  //   while (counter < length) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     counter += 1;
  //   }
  //   return result;
  // }

  // const paystack = (e) => {
  //   e.preventDefault();

  //   const payme = new PayStackPop();
  //   payme.newTransaction({
  //     key: 'pk_live_439d0945863071775784e3267f50754fcd8be337',
  //     amount: amount * 100,
  //     email,
  //     first,
  //     last,
  //     onSuccess(transaction) {
  //       let message = `Payment Complete! Reference ${transaction.reference}`;
  //       alert(message);
  //       setemail('');
  //       setamount('');
  //       setfirst('');
  //       setlast('');
  //     },
  //     onCancel() {
  //       alert('You have cancelled the transaction');
  //     },
  //   });
  // };
  // const paystack2 = (e) => {
  //   e.preventDefault();

  //   const payme = new PayStackPop();
  //   payme.newTransaction({
  //     key: 'pk_test_39fa63e9fe4d9ab4ee92e510a2b85a30d7c45a65',
  //     amount: amount * 100,
  //     email,
  //     first,
  //     last,
  //     onSuccess(transaction) {
  //       let message = `Payment Complete! Reference ${transaction.reference}`;
  //       alert(message);
  //       setemail('');
  //       setamount('');
  //       setfirst('');
  //       setlast('');
  //     },
  //     onCancel() {
  //       alert('You have cancelled the transaction');
  //     },
  //   });
  // };

  // for paypal payment
  // const [price, setprice] = useState(0);
  // const createOrder = (data, actions) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: price,
  //         },
  //       },
  //     ],
  //   });
  // };

  // const onApprove = (data, actions) => {
  //   return actions.order.capture();
  // };
  return (
    <>
      <Navbar />
      {/* <div className="ab-sub">
        <h2>LOCAL DONATIONS</h2>
      </div> */}
      {/* For the payment body */}
      <div className="local-body">
        <div className="l-left">
          <h2>Donations</h2>
          <p>
            kindly send your donations to the following Bank account numbers;
          </p>
          <div className="bank">
            <div>
              <p>
                Bank Name : <span>Ecobank</span>
              </p>
              <p>
                Account Name :
                <span> THE CITY OF JESUS INTERNATIONAL MINISTRY</span>
              </p>
              <p>
                Account Number :<span>1190009245 (Naira)</span>
              </p>
            </div>
            <div>
              <p>
                Bank Name : <span>First Bank</span>
              </p>
              <p>
                Account Name :
                <span> THE CITY OF JESUS INTERNATIONAL MINISTRY</span>
              </p>
              <p>
                Account Number :<span> 2035291271 (Naira)</span>
              </p>
            </div>
          </div>

          <span>Purpose of donation - </span>
          <ul>
            <li>Seed sowing/Offering</li>
            <li>Tithe.</li>
          </ul>

          <p>All Donors Must send Proof of donation to the following;</p>

          <p>Email : donations@cojim.org</p>
          <p>
            Whatsapp : <span>+2347043315405</span>
          </p>
          <p>
            SMS : <span>+2347043315405</span>
          </p>

          <p className="note">
            Please state the purpose of your donation on the donation slip or the
            comment/note section of your bank transfer app.
          </p>

          <Link className="local-btn" to="/inter">
            INTERNATIONAL DONATIONS
          </Link>
        </div>
        {/* ONLINE PAYMENT */}

        {/* <div className="pay-form">
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form
                className="py-6 px-9"
                action="https://www.globalpay.com.ng/GlobalPayAPI/Paymentgatewaycapture.aspx"
                method="POST"
              >
                <div className="mb-5">
                  Donate with <img alt="Globay Pay" src="https://demo.globalpay.com.ng/GlobalPayAPI/img/globalpay.jpg" className="w-20 h-4" />
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Fill in the required details below to continue:
                  </label>
                  <div className="font-semibold">Full Name</div>
                  <div className="mb-2">
                    <input name="names" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" placeholder="e.g Christopher Orji" />
                  </div>

                  <div className="font-semibold">How much would you like to donate?</div>
                  <div className="mb-2">
                    <input name="amount" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" placeholder="e.g 10000" />
                  </div>

                  <div className="font-semibold">Enter your email address</div>
                  <div className="mb-2">
                    <input name="email_address" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" placeholder="e.g cojimmedia@gmail.com" />
                  </div>

                  <div className="font-semibold">Enter your phone number</div>
                  <div className="mb-2">
                    <input name="phone_number" className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" type="text" placeholder="e.g +2347043315405" />
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
                    <select name="currency" className="text-2xl w-64 font-bold rounded border-2 border-pribg-primary text-gray-600 h-14 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                      <option value="NGN">NGN</option>
                    </select>
                  </div>

                  <input type="hidden" id="merch_txnref" name="merch_txnref" value={makeid(50)}></input>
                  <input type="hidden" id="merchantid" name="merchantid" value="3366" />
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
          </div>
        </div> */}
        {/* <div className="paystack">
            <div className="pay-form">
              <h2>Donate with PayStack</h2>
              <div className="pay-input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />

                <label htmlFor="first-name">FirstName:</label>
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setfirst(e.target.value)}
                />

                <label htmlFor="last-name">LastName:</label>
                <input
                  type="text"
                  value={last}
                  onChange={(e) => setlast(e.target.value)}
                />

                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                />

                <input
                  onClick={paystack}
                  className="pay-sub"
                  type="submit"
                  value="Pay to COJIM"
                />
                <input
                  onClick={paystack2}
                  className="pay-sub"
                  type="submit"
                  value="Pay to LOGIF"
                />
              </div>
            </div>
          </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Local;
