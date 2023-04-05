import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import Home from './Home';
import About from './navPages/about us/About';
import Media from './navPages/media/Media';
import Give from './navPages/give/Give';
import Local from './navPages/give/local/Local';
import International from './navPages/give/International';
import ContactUs from 'navPages/ContactUs';
import NotFound from 'navPages/NotFound';
import Partnership from 'navPages/partnership/Partnership';
import PartnerLogin from 'navPages/PartnerLogin';
import AdminLogin from 'navPages/admin/AdminLogin';
import DashboardLayout from 'navPages/DashboardLayout';
import Overview from 'navPages/admin/Overview';
import AdminSettings from 'navPages/admin/AdminSettings';
import PartnersList from 'navPages/admin/PartnerList';
import UnconfirmedPayments from 'navPages/admin/UnconfirmedPayments';
import Profile from 'navPages/Profile';
import PartnerPaymentList from 'navPages/admin/PartnerPaymentList';
import GlobalPayReceipt from 'navPages/GlobalPayReceipt';
import Membership from 'navPages/Membership';
import MemberLogin from 'navPages/MemberLogin';
import MemberList from 'navPages/admin/MemberList';
import MemberMakePayment from 'navPages/MemberMakePayment';
import PartnerMakePayment from 'navPages/PartnerMakePayment';
import MemberPaymentList from 'navPages/MemberPaymentList';
import MediaUpload from 'navPages/admin/MediaUpload';
import PrayerLineFrom from 'navPages/PrayerLineFrom';
import PrayerLineList from 'navPages/admin/PrayerLineList';
import ShopList from 'navPages/shop/ShopList';
import Cart from 'navPages/shop/Cart';
import AddProduct from 'navPages/shop/AddProduct';
import ListProduct from 'navPages/shop/ListProduct';
import Sales from 'navPages/admin/Sales';
import TermAndCondition from 'navPages/TermAndCondition';
import RefundPolicy from 'navPages/RefundPolicy';
import ReturnPolicy from 'navPages/ReturnPolicy';
import CancellationPolicy from 'navPages/CancellationPolicy';
import Equipment from 'navPages/Equipment';
import AdminEquipmentList from 'navPages/admin/AdminEquipmentList';
import AddEquipment from 'navPages/admin/AddEquipment';
const TRACKING_ID = "UA-260931205-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/give" element={<Give />} />
          <Route path="/local" element={<Local />} />
          <Route path="/inter" element={<International />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/partner/login" element={<PartnerLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/prayer-line-form" element={<PrayerLineFrom />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="dashboard/" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="partners-list" element={<PartnersList />} />
            <Route path="members-list" element={<MemberList />} />
            <Route path="unconfirmed-payments" element={<UnconfirmedPayments />} />
            <Route path="media-upload" element={<MediaUpload />} />
            <Route path="prayer-line-list" element={<PrayerLineList />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-list" element={<ListProduct />} />
            <Route path="orders" element={<Sales />} />
            <Route path="equipment" element={<AdminEquipmentList />} />
            <Route path="add-equipment" element={<AddEquipment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="partner-payment-list/:partnerId" element={<PartnerPaymentList />} />
            <Route path="member-payment-list/:memberId" element={<MemberPaymentList />} />
            <Route path="partner-make-payment" element={<PartnerMakePayment />} />
            <Route path="member-make-payment" element={<MemberMakePayment />} />
          </Route>
          <Route path="/shop" element={<ShopList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/term-and-condition" element={<TermAndCondition />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/verify-globalpay" element={<GlobalPayReceipt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
