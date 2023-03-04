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
// import Inter from './navPages/give/inter/Inter';
// import Partner from './navPages/partner/Partner';
import Gallery from './navPages/galery/Gallery';
import ContactUs from 'navPages/ContactUs';
import NotFound from 'navPages/NotFound';
import Partnership from 'navPages/partnership/Partnership';
import PartnerLogin from 'navPages/PartnerLogin';
import AdminLogin from 'navPages/AdminLogin';
import DashboardLayout from 'navPages/DashboardLayout';
import Overview from 'navPages/Overview';
import AdminSettings from 'navPages/AdminSettings';
import PartnersList from 'navPages/PartnerList';
import UnconfirmedPayments from 'navPages/UnconfirmedPayments';
import Profile from 'navPages/Profile';
import PartnerPaymentList from 'navPages/PartnerPaymentList';
import GlobalPayReceipt from 'navPages/GlobalPayReceipt';
import Membership from 'navPages/Membership';
import MemberLogin from 'navPages/MemberLogin';
import MemberList from 'navPages/MemberList';
import MemberMakePayment from 'navPages/MemberMakePayment';
import PartnerMakePayment from 'navPages/PartnerMakePayment';
import MemberPaymentList from 'navPages/MemberPaymentList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/sermon" exact element={<Sermons />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/logif" exact element={<Logif />} />
          <Route path="/media" exact element={<Media />} />
          <Route path="/give" exact element={<Give />} />
          <Route path="/local" exact element={<Local />} />
          <Route path="/inter" exact element={<International />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/membership" exact element={<Membership />} />
          <Route path="/member/login" exact element={<MemberLogin />} />
          <Route path="/partnership" exact element={<Partnership />} />
          <Route path="/partner/login" exact element={<PartnerLogin />} />
          <Route path="/admin/login" exact element={<AdminLogin />} />
          <Route path="dashboard/" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="settings" exact element={<AdminSettings />} />
            <Route path="partners-list" element={<PartnersList />} />
            <Route path="members-list" element={<MemberList />} />
            <Route path="unconfirmed-payments" element={<UnconfirmedPayments />} />
            <Route path="profile" element={<Profile />} />
            <Route path="partner-payment-list/:partnerId" element={<PartnerPaymentList />} />
            <Route path="member-payment-list/:memberId" element={<MemberPaymentList />} />
            <Route path="partner-make-payment" element={<PartnerMakePayment />} />
            <Route path="member-make-payment" element={<MemberMakePayment />} />
          </Route>
          <Route path="/verify-globalpay" exact element={<GlobalPayReceipt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
