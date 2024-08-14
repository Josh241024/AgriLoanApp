
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, TextField, MenuItem } from '@mui/material';
import './BasicInfoAccount.css';

const BasicInfoAccountPresent = () => {
  const [formData, setFormData] = useState({
    account_number: '', // Updated field name
    loan_amount: '', // Updated field name
    loan_requested_for: '' // Updated field name
  });

  const [errors, setErrors] = useState({
    account_number: '',
    loan_amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation rules
    let error = '';
    if (name === 'account_number') {
      if (!/^\d{10}$/.test(value)) {
        error = 'Account number must be exactly 10 digits';
      }
    } else if (name === 'loan_amount') {
      if (!/^\d+$/.test(value)) {
        error = 'Loan amount must be a number';
      } else if (parseInt(value) <= 10000) {
        error = 'Loan amount must be greater than 10,000';
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure no validation errors before submission
    if (!errors.account_number && !errors.loan_amount) {
      try {
        const response = await fetch('http://127.0.0.1:8000/basic-info-account/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Data saved successfully!');
          navigate('/BasicinfoAcceptingloan'); // Navigate after successful submission
        } else {
          alert('Failed to save data.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during submission. Please try again.');
      }
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="apply-now-page" id="basicInfoAccountPage">
      <div className="apply-now-sidebar" id="basicInfoAccountSidebar">
        <div className="apply-now-sidebar-header" id="basicInfoAccountSidebarHeader">
          <img src="/path/to/logo.png" alt="Agriculture Loans" className="apply-now-logo" id="basicInfoAccountLogo" />
          <Typography variant="h6" id="basicInfoAccountTitleHindi">कृषि ऋण</Typography>
          <Typography variant="subtitle1" id="basicInfoAccountTitleEnglish">Agriculture Loans</Typography>
        </div>
        <div className="apply-now-sidebar-content-basicinfo" id="basicInfoAccountSidebarContent">
          <Typography variant="h6" id="basicInfoAccountSubtitleHindi">प्रारंभिक विवरण</Typography>
          <Typography variant="subtitle1" id="basicInfoAccountSubtitleEnglish">Preliminary Details</Typography>
        </div>
      </div>
      <div className="apply-now-main-content" id="basicInfoAccountMainContent">
        <Container id="basicInfoAccountContainer">
          <Typography variant="h4" gutterBottom id="basicInfoAccountMainTitle">कृषि ऋण | Agriculture Loan</Typography>
          <Container className="apply-now-account-details" id="basicInfoAccountDetailsContainer">
            <div className="apply-now-account-details-container" id="basicInfoAccountDetailsInnerContainer">
              <Typography variant="h6" gutterBottom id="basicInfoAccountDetailsTitle">बैंक ऑफ बड़ौदा खाते का विवरण | Bank of AMJ account Details</Typography>
              <form onSubmit={handleSubmit} id="basicInfoAccountForm">
                <TextField
                  fullWidth
                  name="account_number" // Updated field name
                  label="खाता संख्या | Account Number"
                  margin="normal"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={formData.account_number}
                  error={Boolean(errors.account_number)}
                  helperText={errors.account_number}
                  id="basicInfoAccountNumber"
                />
                <TextField
                  fullWidth
                  name="loan_amount" // Updated field name
                  label="आवश्यक ऋण राशि | The Loan Amount Required"
                  margin="normal"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={formData.loan_amount}
                  error={Boolean(errors.loan_amount)}
                  helperText={errors.loan_amount}
                  id="basicInfoLoanAmount"
                />
                <TextField
                  fullWidth
                  name="loan_requested_for" // Updated field name
                  select
                  label="ऋण का अनुरोध किया गया | Loan Requested For"
                  margin="normal"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={formData.loan_requested_for}
                  id="basicInfoLoanRequestedFor"
                >
                  <MenuItem value="Financing Agriclinics & Agribusiness" id="basicInfoOptionAgriclinics">Financing Agriclinics & Agribusiness</MenuItem>
                  <MenuItem value="Advances to Food Agro Based Units" id="basicInfoOptionAgroBased">Advances to Food Agro Based Units</MenuItem>
                  <MenuItem value="Animal Husbandry and Fisheries Kisan Credit Card Scheme" id="basicInfoOptionAnimalHusbandry">Animal Husbandry and Fisheries Kisan Credit Card Scheme</MenuItem>
                  <MenuItem value="Kisan Credit Card (KCC)" id="basicInfoOptionKCC">Kisan Credit Card (KCC)</MenuItem>
                  <MenuItem value="Kisan Tatkal Loan Scheme" id="basicInfoOptionTatkal">Kisan Tatkal Loan Scheme</MenuItem>
                  <MenuItem value="Financing Agencies Providing Custom Services To Farmers" id="basicInfoOptionCustomServices">Financing Agencies Providing Custom Services To Farmers</MenuItem>
                  <MenuItem value="Financing Development of Dairy, Poultry, Fishery, etc." id="basicInfoOptionDairyPoultry">Financing Development of Dairy, Poultry, Fishery, etc.</MenuItem>
                  <MenuItem value="Financing Tractors and Heavy Agriculture Machinery" id="basicInfoOptionTractors">Financing Tractors and Heavy Agriculture Machinery</MenuItem>
                  <MenuItem value="Scheme for Purchase of Agriculture Land" id="basicInfoOptionPurchaseLand">Scheme for Purchase of Agriculture Land</MenuItem>
                </TextField>
                <Box mt={2}>
                  
                  <Button type="submit" variant="contained" color="primary" fullWidth className="apply-now-submit-button" id="basicInfoSubmitButton" onClick={handleSubmit}>
                    प्रस्तुत करें | SUBMIT
                  </Button>
                
                </Box>
              </form>
            </div>
          </Container>
        </Container>
      </div>
      <div className="apply-now-right-sidebar" id="basicInfoAccountRightSidebar">
        <img src="/path/to/bank-logo.png" alt="Bank of Baroda" className="apply-now-bank-logo" id="basicInfoAccountRightSidebarLogo" />
        <ul className="apply-now-sidebar-list" id="basicInfoAccountSidebarList">
          <li className="apply-now-sidebar-item" id="basicInfoAccountSidebarItemFeatures">Agri Loan Features</li>
          <li className="apply-now-sidebar-item" id="basicInfoAccountSidebarItemEligibility">Loan Eligibility Calculator</li>
          <li className="apply-now-sidebar-item" id="basicInfoAccountSidebarItemEMI">EMI Calculator</li>
          <li className="apply-now-sidebar-item" id="basicInfoAccountSidebarItemFAQs">FAQs</li>
          <li className="apply-now-sidebar-item" id="basicInfoAccountSidebarItemGuide">User Guide Video</li>
          <li className="apply-now-sidebar-item" id="basicInfoAccountSidebarItemTollFree">Toll Free No. 18002581111</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicInfoAccountPresent;