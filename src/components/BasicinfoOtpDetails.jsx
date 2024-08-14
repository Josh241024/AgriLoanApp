import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';
import './BasicinfoOtpDetails.css';

const BasicinfoOtpDetails = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    otp: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms to continue.');
      return;
    }
    try {
      await fetch('http://localhost:5000/basicInformation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="basic-information-page-otp">
      <div className="basicinformation-final-otp">
        <Typography variant="h6">OTP Details</Typography>
        <Typography variant="subtitle1">Verify your identity</Typography>
      </div>
      <div className="basicinfootpcontainer">
        <Container className='otpcont'>
          <Typography variant="h5" gutterBottom>OTP Details</Typography>
          <div className="application-id">
            Application ID: 1234567890
          </div>
          <form onSubmit={handleSubmit} id='otptrialfinal'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  name="accountNumber" 
                  label="Account Number" 
                  fullWidth 
                  required 
                  value={formData.accountNumber}
                  onChange={handleChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  name="otp" 
                  label="OTP" 
                  fullWidth 
                  required 
                  value={formData.otp}
                  onChange={handleChange} 
                />
              </Grid>
            </Grid>
            <Box mt={4} display="flex" justifyContent="flex-start">
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange} 
                    name="termsAccepted" 
                    color="primary"
                  />
                }
                label="I confirm that the information provided by me is accurate. I accept the terms of the privacy policy. I understand that credit approval and sanction of my loan is at the sole discretion of the bank."
              />
            </Box>
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button 
                type="button"
                variant="outlined"
                color="primary"
                className="basicinfootp"
              >
                SAVE AND CONTINUE LATER
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                className="basicinfootp"
              >
                CONTINUE
              </Button>
            </Box>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default BasicinfoOtpDetails;
