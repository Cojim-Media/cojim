import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './navPages/about us/About';
import Sermons from './navPages/sermons/Sermons';
import Events from './navPages/events/Events';
import Logif from './navPages/logif/Logif';
import Media from './navPages/media/Media';
import Give from './navPages/give/Give';
import Local from './navPages/give/local/Local';
import International from './navPages/give/International';
import Gallery from './navPages/galery/Gallery';
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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sermon" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/logif" element={<Logif />} />
          <Route path="/media" element={<Media />} />
          <Route path="/give" element={<Give />} />
          <Route path="/local" element={<Local />} />
          <Route path="/inter" element={<International />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/partner/login" element={<PartnerLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/prayer-line-form" element={<PrayerLineFrom />} />
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
            <Route path="profile" element={<Profile />} />
            <Route path="partner-payment-list/:partnerId" element={<PartnerPaymentList />} />
            <Route path="member-payment-list/:memberId" element={<MemberPaymentList />} />
            <Route path="partner-make-payment" element={<PartnerMakePayment />} />
            <Route path="member-make-payment" element={<MemberMakePayment />} />
          </Route>
          <Route path="/shop" element={<ShopList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify-globalpay" element={<GlobalPayReceipt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
