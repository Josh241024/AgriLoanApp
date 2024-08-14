

import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ManageUsers from './ManageUsers';
import './AdminHome.css';

const AdminHome = () => {
  const [basicInformation, setBasicInformation] = useState([]);
  const [basicInfoAccount, setBasicInfoAccount] = useState([]);
  const [showReports, setShowReports] = useState(false);
  const [showManageUsers, setShowManageUsers] = useState(false);

  useEffect(() => {
    // Fetch Basic Information data from server
    fetch('http://localhost:5000/basicInformation')
      .then(response => response.json())
      .then(data => {
        const uniqueData = data.filter((item, index, self) =>
          index === self.findIndex((t) => t.id === item.id)
        );
        setBasicInformation(uniqueData);
      })
      .catch(error => console.error('Error fetching basic information:', error));

    // Fetch Basic Info Account data from server
    fetch('http://localhost:5000/basicInfoAccount')
      .then(response => response.json())
      .then(data => {
        const uniqueData = data.filter((item, index, self) =>
          index === self.findIndex((t) => t.accountNumber === item.accountNumber)
        );
        setBasicInfoAccount(uniqueData);
      })
      .catch(error => console.error('Error fetching basic info account:', error));
  }, []);

  return (
    <div className="admin-home-page">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <Typography variant="h6">Admin Dashboard</Typography>
        </div>
        <div className="admin-sidebar-content">
          <List>
            <ListItem button onClick={() => { setShowReports(false); setShowManageUsers(false); }}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => { setShowReports(true); setShowManageUsers(false); }}>
              <ListItemText primary="View Reports" />
            </ListItem>
            <ListItem button onClick={() => { setShowReports(false); setShowManageUsers(true); }}>
              <ListItemText primary="Manage Users" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>
      </div>
      <div className="admin-main-content">
        <Container>
          <Typography variant="h4" gutterBottom>Welcome, Admin</Typography>
          {!showReports && !showManageUsers && (
            <Typography variant="body1">Select an option from the sidebar to get started.</Typography>
          )}
          {showReports && (
            <div className="admin-reports-container">
              <section className="admin-reports">
                <Typography variant="h6">Basic Information Reports</Typography>
                {basicInformation.length > 0 ? (
                  <TableContainer component={Paper} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>Full Name</TableCell>
                          <TableCell>Father's/Husband's Name</TableCell>
                          <TableCell>Gender</TableCell>
                          <TableCell>Occupation</TableCell>
                          <TableCell>Income</TableCell>
                          <TableCell>KYC Document Number</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Mobile</TableCell>
                          <TableCell>Permanent Address</TableCell>
                          <TableCell>Address Details</TableCell>
                          <TableCell>Communication Address</TableCell>
                          <TableCell>Pin Code</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {basicInformation.map(info => (
                          <TableRow key={info.id}>
                            <TableCell>{info.fullName}</TableCell>
                            <TableCell>{info.fatherOrHusbandName}</TableCell>
                            <TableCell>{info.gender}</TableCell>
                            <TableCell>{info.occupation}</TableCell>
                            <TableCell>{info.income}</TableCell>
                            <TableCell>{info.kycDocumentNumber}</TableCell>
                            <TableCell>{info.email}</TableCell>
                            <TableCell>{info.mobile}</TableCell>
                            <TableCell>{info.permanentAddress}</TableCell>
                            <TableCell>{info.addressDetails}</TableCell>
                            <TableCell>{info.communicationAddress}</TableCell>
                            <TableCell>{info.pinCode}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <Typography variant="body1">No basic information reports available.</Typography>
                )}
              </section>
              <div className='admin-reports-container-basicinfo'>
              <section className="admin-reports">
                <Typography variant="h6">Basic Info Account Reports</Typography>
                {basicInfoAccount.length > 0 ? (
                  <TableContainer component={Paper} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>Account Number</TableCell>
                          <TableCell>Loan Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {basicInfoAccount.map(info => (
                          <TableRow key={info.accountNumber}>
                            <TableCell>{info.accountNumber}</TableCell>
                            <TableCell>{info.loanAmount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <Typography variant="body1">No basic info account reports available.</Typography>
                )}
              </section>
            </div>
            </div>
          )}
          {showManageUsers && <ManageUsers />}
          <Box mt={4}>
            <Button variant="contained" color="primary" onClick={() => setShowReports(true)}>View Reports</Button>
            <Button variant="outlined" color="primary" onClick={() => setShowManageUsers(true)}>Manage Users</Button>
          </Box>
        </Container>
      </div>
      <div className="admin-right-sidebar">
        <Typography variant="h6">Quick Links</Typography>
        <List>
          <ListItem button onClick={() => { setShowReports(false); setShowManageUsers(true); }}>
            <ListItemText primary="Manage Users" />
          </ListItem>
          <ListItem button onClick={() => { setShowReports(true); setShowManageUsers(false); }}>
            <ListItemText primary="View Reports" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Typography variant="body2" style={{ marginTop: '16px' }}>
          For assistance, contact support at: support@example.com
        </Typography>
      </div>
    </div>
  );
};

export default AdminHome;
