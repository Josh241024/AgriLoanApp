/*
import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './BasicinfoDocumentupload.css';

const BasicinfoDocumentupload = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    console.log("Back button clicked");
    navigate('/BasicinfoAcceptingloan'); // Ensure this path matches your route
  };

  const handleContinueClick = () => {
    navigate('/BasicinfoOtp'); // Ensure this path matches your route
  };

  return (
    <div className="basic-information-page">
      
      <div className="basicinfoUpload-left-sidebar">
            <Typography variant="h6">कृषि ऋण</Typography>
            <Typography variant="subtitle1">Agriculture Loans</Typography>
            <Typography variant="h6">आधारभूत जानकारी</Typography>
            <Typography variant="subtitle1">Basic Details</Typography>
            <Typography variant="h6">ऋण जानकारी</Typography>
            <Typography variant="subtitle1">Loan Details</Typography>
            <Typography variant="h6">Submit</Typography>
      </div>

   
      <div className="basicinfoUpload-main-container">
        <div className="basicinfoUpload-main-title">
          <Typography variant="h4" gutterBottom>Document Upload</Typography>
          <Typography variant="subtitle1">
            Your Application ID is <span id="applicationId">AGRI20295340973</span>
          </Typography>
        </div>
        <Container>
        
          <Box mt={4} id="documentUploadContainer">
            <Typography variant="h5" id="documentUploadHeader">Document Upload</Typography>
            <Typography variant="body2" id="documentUploadSubheader">
              Document upload (Optional, please upload in pdf format only)
            </Typography>

            <Grid container spacing={2}>
              
              <Grid item xs={12} id="kycDocument1">
                <Typography variant="body1">1) KYC Document 1</Typography>
                <Button variant="outlined" component="label">
                  Choose File
                  <input type="file" hidden />
                </Button>
                <Typography variant="body2">No file chosen</Typography>
              </Grid>

           
              <Grid item xs={12} id="kycDocument2">
                <Typography variant="body1">2) KYC Document 2</Typography>
                <Button variant="outlined" component="label" className="choosefileupload">
                  Choose File
                  <input type="file" hidden />
                </Button>
                <Typography variant="body2">No file chosen</Typography>
              </Grid>

            
              <Grid item xs={12} id="kycDocument3">
                <Typography variant="body1">3) KYC Document 3</Typography>
                <Button variant="outlined" component="label" className="choosefileupload">
                  Choose File
                  <input type="file" hidden />
                </Button>
                <Typography variant="body2">No file chosen</Typography>
              </Grid>

              <Grid item xs={12} id="kycDocument4">
                <Typography variant="body1">4) KYC Document 4</Typography>
                <Button variant="outlined" component="label" className="choosefileupload">
                  Choose File
                  <input type="file" hidden />
                </Button>
                <Typography variant="body2">No file chosen</Typography>
              </Grid>
            </Grid>

            <Box mt={4} display="flex" justifyContent="space-between">
              <Button variant="outlined" color="primary" id="backButton" onClick={handleBackClick}>
                BACK
              </Button>
              <Button variant="contained" color="primary" id="continueButton" onClick={handleContinueClick}>
                CONTINUE
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default BasicinfoDocumentupload;*/


import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './BasicinfoDocumentupload.css';

const BasicinfoDocumentupload = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    console.log("Back button clicked");
    navigate('/BasicinfoAcceptingloan'); // Ensure this path matches your route
  };

  const handleContinueClick = () => {
    navigate('/BasicinfoOtp'); // Ensure this path matches your route
  };

  return (
    <div className="basic-information-page">
      {/* Left Sidebar */}
      <div className="basicinfoUpload-left-sidebar">
        <Typography variant="h6">कृषि ऋण</Typography>
        <Typography variant="subtitle1">Agriculture Loans</Typography>
        <Typography variant="h6">आधारभूत जानकारी</Typography>
        <Typography variant="subtitle1">Basic Details</Typography>
        <Typography variant="h6">ऋण जानकारी</Typography>
        <Typography variant="subtitle1">Loan Details</Typography>
        <Typography variant="h6">Submit</Typography>
      </div>

      {/* Main Container */}
      <div className="basicinfoUpload-main-container">
        <div className="basicinfoUpload-main-title">
          <Typography variant="h4" gutterBottom>Document Upload</Typography>
          <Typography variant="subtitle1">
            Your Application ID is <span id="applicationId">AGRI20295340973</span>
          </Typography>
        </div>
        <Container>
          {/* Document Upload Section */}
          <Box mt={4} id="documentUploadContainer">
            <Typography variant="h5" id="documentUploadHeader">Document Upload</Typography>
            <Typography variant="body2" id="documentUploadSubheader">
              Document upload (Optional, please upload in pdf format only)
            </Typography>

            <Grid container spacing={2}>
              {/* KYC Document 1 */}
              <Grid item xs={12} id="kycDocument1">
                <Typography variant="body1">KYC Document 1:</Typography>
                <input type="file" accept=".pdf" />
              </Grid>
              
              {/* KYC Document 2 */}
              <Grid item xs={12} id="kycDocument2">
                <Typography variant="body1">KYC Document 2:</Typography>
                <input type="file" accept=".pdf" />
              </Grid>
              
              {/* Additional Documents */}
              <Grid item xs={12} id="additionalDocuments">
                <Typography variant="body1">Additional Documents:</Typography>
                <input type="file" accept=".pdf" multiple />
              </Grid>
            </Grid>
          </Box>
          {/* Buttons */}
          <Box mt={4} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleBackClick}>Back</Button>
            <Button variant="contained" color="secondary" onClick={handleContinueClick}>Continue</Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default BasicinfoDocumentupload;
