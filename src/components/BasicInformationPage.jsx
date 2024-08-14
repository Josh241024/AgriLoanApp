

import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, MenuItem } from '@mui/material';
import './BasicInformationPage.css';

const BasicInformationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherOrHusbandName: '',
    gender: '',
    occupation: '',
    income: '',
    kycDocumentNumber: '',
    email: '',
    mobile: '',
    permanentAddress: '',
    addressDetails: '',
    communicationAddress: '',
    pinCode: '',
    accountNumber: '', // Account number will be used as ID in Django
  });

  const [errors, setErrors] = useState({});

  // Function to generate a random unique account number
  const generateAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000); // Generates a 10-digit random number
  };

  // Use useEffect to generate account number when component mounts
  useEffect(() => {
    const accountNumber = generateAccountNumber();
    setFormData(prevFormData => ({
      ...prevFormData,
      accountNumber: accountNumber.toString(), // Convert to string to match Django's CharField type
    }));
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
      case 'fatherOrHusbandName':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          return 'Name must contain only letters';
        }
        break;
      case 'kycDocumentNumber':
        if (!/^\d{14}$/.test(value)) {
          return 'KYC Document Number must be 14 digits';
        }
        break;
      case 'email':
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          return 'Enter a valid email address';
        }
        break;
      case 'mobile':
        if (!/^\d{10}$/.test(value)) {
          return 'Mobile number must be 10 digits';
        }
        break;
      case 'pinCode':
        if (!/^\d{6}$/.test(value)) {
          return 'Pin Code must be 6 digits';
        }
        break;
      case 'income':
        if (parseFloat(value) <= 30000) {
          return 'Income must be above 30,000';
        }
        break;
      case 'gender':
      case 'occupation':
      case 'permanentAddress':
      case 'addressDetails':
      case 'communicationAddress':
        if (!value) {
          return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = validateField(name, formData[name]);
      if (error) newErrors[name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert('Please fix the errors before submitting');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/basic-information/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formData.accountNumber, // Use account number as the ID
          full_name: formData.fullName,
          father_or_husband_name: formData.fatherOrHusbandName,
          gender: formData.gender,
          occupation: formData.occupation,
          income: formData.income,
          kyc_document_number: formData.kycDocumentNumber,
          email: formData.email,
          mobile: formData.mobile,
          permanent_address: formData.permanentAddress,
          address_details: formData.addressDetails,
          communication_address: formData.communicationAddress,
          pin_code: formData.pinCode,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving data. Please try again.');
    }
  };

  return (
    <div className="basic-information-page">
      <div className="basicinformation-final">
        <div className="basicinfo">
          <div className="basicinfoheader">
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
      <div className="basicinfocontentinfofinalinformation">
        <div className="basicinfocontentcontaininformation">
          <Container>
            <Typography variant="h4" gutterBottom>आधारभूत जानकारी | Basic Information</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="fullName"
                    label="Applicant's Full Name"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="fatherOrHusbandName"
                    label="Father's/Husband's Name"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.fatherOrHusbandName}
                    helperText={errors.fatherOrHusbandName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    name="gender"
                    label="Gender"
                    fullWidth
                    required
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="occupation"
                    label="Occupation Type"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="income"
                    label="Gross Annual Income"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.income}
                    helperText={errors.income}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="kycDocumentNumber"
                    label="KYC Document Number"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.kycDocumentNumber}
                    helperText={errors.kycDocumentNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    label="Email ID"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="mobile"
                    label="Mobile No."
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.mobile}
                    helperText={errors.mobile}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="permanentAddress"
                    label="Permanent Address"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="addressDetails"
                    label="Address Details"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="communicationAddress"
                    label="Communication Address"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="pinCode"
                    label="Pin Code"
                    fullWidth
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.pinCode}
                    helperText={errors.pinCode}
                  />
                </Grid>
                {/* Account number is displayed, but user cannot edit it */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="accountNumber"
                    label="Account Number"
                    fullWidth
                    value={formData.accountNumber}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationPage;
