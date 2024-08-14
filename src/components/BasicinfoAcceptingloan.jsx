/*
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './BasicinfoAcceptingloan.css';

const BasicinfoAcceptingloan = () => {
  return (
    <div className="basic-acceptingloan-page">
      <div className="basicacceptingloan-final">
        <div className="basicacceptingloan">
          <div className="basicacceptingloanheader">
            <Typography variant="h6">कृषि ऋण</Typography>
            <Typography variant="subtitle1">Agriculture Loans</Typography>
            <Typography variant="h6">आधारभूत जानकारी</Typography>
            <Typography variant="subtitle1">Basic Details</Typography>
            <Typography variant="h6">ऋण जानकारी</Typography>
            <Typography variant="subtitle1">Loan Details</Typography>
            <Typography variant="h6">Submit</Typography>
          </div>
        </div>
      </div>
      <div className="basicinfoacceptingloan">
        <Container>
          <Typography variant="h4" gutterBottom>Agriculture Loan</Typography>
          <Typography variant="subtitle1">
            Application Accepted. Please note down your lead number: 
            <span className="lead-number">AGRI20295340973</span>
          </Typography>
          <Link to="/BasicDocumentUpload">
            <Button variant="contained" color="primary" className="basicinfoacceptingcontinue-button">
              Continue
            </Button>
          </Link>
        </Container>
      </div>
      <div className="right-sidebarbasicinfoacceptingloan">
        <img src="/path/to/bank-logo.png" alt="Bank of AMJ" />
        <ul>
          <li>Agri Loan Features</li>
          <li>Loan Eligibility Calculator</li>
          <li>EMI Calculator</li>
          <li>FAQs</li>
          <li>User Guide Video</li>
          <li>Toll Free No. 18002581111</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicinfoAcceptingloan;
*/

import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './BasicinfoAcceptingloan.css';

const BasicinfoAcceptingloan = () => {
  const location = useLocation();
  const agriId = location.state?.agri_id || 'AGRIXXXXXXX'; // Replace with actual Agri ID from state

  return (
    <div className="basic-acceptingloan-page">
      <div className="basicacceptingloan-final">
        <div className="basicacceptingloan">
          <div className="basicacceptingloanheader">
            <Typography variant="h6">कृषि ऋण</Typography>
            <Typography variant="subtitle1">Agriculture Loans</Typography>
            <Typography variant="h6">आधारभूत जानकारी</Typography>
            <Typography variant="subtitle1">Basic Details</Typography>
            <Typography variant="h6">ऋण जानकारी</Typography>
            <Typography variant="subtitle1">Loan Details</Typography>
            <Typography variant="h6">Submit</Typography>
          </div>
        </div>
      </div>
      <div className="basicinfoacceptingloan">
        <Container>
          <Typography variant="h4" gutterBottom>Agriculture Loan</Typography>
          <Typography variant="subtitle1">
            Application Accepted. Details will be validated  
            {/*<span className="lead-number">{agriId}</span>*/}
          </Typography>
          <Link to="/BasicDocumentUpload">
            <Button variant="contained" color="primary" className="basicinfoacceptingcontinue-button">
              Continue
            </Button>
          </Link>
        </Container>
      </div>
      <div className="right-sidebarbasicinfoacceptingloan">
        <img src="/path/to/bank-logo.png" alt="Bank of AMJ" />
        <ul>
          <li>Agri Loan Features</li>
          <li>Loan Eligibility Calculator</li>
          <li>EMI Calculator</li>
          <li>FAQs</li>
          <li>User Guide Video</li>
          <li>Toll Free No. 18002581111</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicinfoAcceptingloan;
