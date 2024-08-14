import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import './ApplyNow.css'
import { NavLink } from 'react-router-dom';

const ApplyNow = () => {
  return (
    <div className="apply-now-page" id="applyNowPage">
      <div className="sidebar" id="applyNowSidebar">
        <div className="sidebar-header" id="applyNowSidebarHeader">
          <img src="/path/to/logo.png" alt="Agriculture Loans" id="applyNowLogo" />
          <Typography variant="h6" id="applyNowSidebarTitleHindi">कृषि ऋण</Typography>
          <Typography variant="subtitle1" id="applyNowSidebarTitleEnglish">Agriculture Loans</Typography>
        </div>
        <div className="sidebar-content" id="applyNowSidebarContent">
          <Typography variant="h6" id="applyNowSidebarSubtitleHindi">प्रारंभिक विवरण</Typography>
          <Typography variant="subtitle1" id="applyNowSidebarSubtitleEnglish">Preliminary Details</Typography>
        </div>
      </div>
      <div className="main-content" id="applyNowMainContent">
        <div className="main-contentmiddle-applynow" id="applyNowMainContentMiddle">
          <Container id="applyNowContainer">
            <Typography variant="h4" gutterBottom id="applyNowTitle">कृषि ऋण | Agriculture Loan</Typography>
            <div className="customer-status" id="applyNowCustomerStatus">
              <Typography variant="body1" id="applyNowCustomerStatusText">क्या आप बैंक ऑफ बड़ौदा के ग्राहक हैं? | Are You Customer of our Service?</Typography>
              <div className="status-buttons" id="applyNowStatusButtons">
                <NavLink to="/basic" className="navlink-button" id="applyNowNavLinkNoAccount">
                  <Button variant="outlined" className="status-button" id="applyNowNoAccountButton">मेरे पास बॉब खाता नहीं है | I Don't Have Bank Account</Button>
                </NavLink>
                <NavLink to="/BasicInfoAccount" className="BasicInfoAccount" id="applyNowNavLinkWithAccount">
                  <Button variant="outlined" className="status-button" id="applyNowWithAccountButton">मेरे पास बॉब खाता है | I Have Bank Account</Button>
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
        <div className="right-sidebar" id="applyNowRightSidebar">
          <img src="/path/to/bank-logo.png" alt="Bank of Baroda" id="applyNowBankLogo" />
          <ul id="applyNowSidebarList">
            <li className="applyNowSidebarItem">Agri Loan Features</li>
            <li className="applyNowSidebarItem">Loan Eligibility Calculator</li>
            <li className="applyNowSidebarItem">EMI Calculator</li>
            <li className="applyNowSidebarItem">FAQs</li>
            <li className="applyNowSidebarItem">User Guide Video</li>
            <li className="applyNowSidebarItem">Toll Free No. 18002581111</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;


