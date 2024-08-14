// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Home from './components/Home';
// import Header from './components/Header';
// import CardDetails from './components/CardDetails';
// import Footer from './components/Footer';
// import ApplyNow from './components/ApplyNow';
// import BasicInformation from './components/BasicInformationPage';
// import BasicInfoAccount from './components/BasicInfoAccountPresent';
// import LoginPage from './LoginPage';
// import AdminHome from './adminaccess/AdminHome';
// import AdminLogin from './adminaccess/AdminLogin';
// import AdminSignUp from './adminaccess/AdminSignUp'; // Import AdminSignUp
// import ManageUsers from './adminaccess/ManageUsers';
// import BasicInfoAccepting from './components/BasicinfoAcceptingloan';
// import BasicDocumentUpload from'./components/BasicinfoDocumentupload';
// import Basicinfootp from'./components/BasicinfoOtpDetails';
// const AppContent = () => {
//   const location = useLocation();

//   const hideHeaderFooter = ['/apply-now', '/basic', '/BasicInfoAccount','/BasicinfoAcceptingloan','/BasicDocumentUpload','/BasicinfoOtp','/admin-login','/admin-signup','/login','/signup','/logindupe'].includes(location.pathname);
//   return (
//     <>
//       {!hideHeaderFooter && <Header />}
//       <Routes>
//         <Route path="/logindupe" element={<LoginPage />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/admin-home" element={<AdminHome />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin-signup" element={<AdminSignUp />} /> 
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/details/:id" element={<CardDetails />} /> 
//         <Route path="/apply-now" element={<ApplyNow />} />
//         <Route path="/basic" element={<BasicInformation />} /> 
//         <Route path="/BasicInfoAccount" element={<BasicInfoAccount />} /> 
//         <Route path="/BasicinfoAcceptingloan" element={<BasicInfoAccepting />} /> 
//         <Route path="/BasicDocumentUpload" element={<BasicDocumentUpload />} /> 
//         <Route path="/BasicinfoOtp" element={<Basicinfootp />} /> 
//         <Route path="/manage-users" component={ManageUsers} />
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//       {!hideHeaderFooter && <Footer />}
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Header from './components/Header';
import CardDetails from './components/CardDetails';
import Footer from './components/Footer';
import ApplyNow from './components/ApplyNow';
import BasicInformation from './components/BasicInformationPage';
import BasicInfoAccount from './components/BasicInfoAccountPresent';
import LoginPage from './LoginPage';
import AdminHome from './adminaccess/AdminHome';
import AdminLogin from './adminaccess/AdminLogin';
import AdminSignUp from './adminaccess/AdminSignUp'; 
import ManageUsers from './adminaccess/ManageUsers';
import BasicInfoAccepting from './components/BasicinfoAcceptingloan';
import BasicDocumentUpload from './components/BasicinfoDocumentupload';
import Basicinfootp from './components/BasicinfoOtpDetails';

const AppContent = () => {
  const location = useLocation();

  const hideHeaderFooter = ['/apply-now', '/basic', '/BasicInfoAccount','/BasicinfoAcceptingloan','/BasicDocumentUpload','/BasicinfoOtp','/admin-login','/admin-signup','/login','/signup','/logindupe'].includes(location.pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/logindupe" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignUp />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id" element={<CardDetails />} /> 
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/basic" element={<BasicInformation />} /> 
        <Route path="/BasicInfoAccount" element={<BasicInfoAccount />} /> 
        <Route path="/BasicinfoAcceptingloan" element={<BasicInfoAccepting />} /> 
        <Route path="/BasicDocumentUpload" element={<BasicDocumentUpload />} /> 
        <Route path="/BasicinfoOtp" element={<Basicinfootp />} /> 
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

