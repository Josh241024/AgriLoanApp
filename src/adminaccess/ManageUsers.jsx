import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './ManageUsers.css';

const ManageUsers = () => {
  const [basicInfoAccount, setBasicInfoAccount] = useState([]);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    accountNumber: '',
    loanAmount: '',
    loanRequestedFor: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/basicInfoAccount')
      .then(response => response.json())
      .then(data => setBasicInfoAccount(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/basicInfoAccount/${id}`, { method: 'DELETE' })
      .then(() => setBasicInfoAccount(basicInfoAccount.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    fetch('http://localhost:5000/basicInfoAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newUser, id: Math.random().toString(36).substr(2, 9) }) // Add an ID to the new user
    })
    .then(response => response.json())
    .then(data => {
      setBasicInfoAccount([...basicInfoAccount, data]);
      setNewUser({ accountNumber: '', loanAmount: '', loanRequestedFor: '' });
      setOpen(false);
    })
    .catch(error => console.error('Error adding user:', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Manage Users</Typography>
      <Box mt={2} mb={2}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Add User</Button>
      </Box>
      <TableContainer component={Paper} className="table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Account Number</TableCell>
              <TableCell>Loan Amount</TableCell>
              <TableCell>Loan Requested For</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basicInfoAccount.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.accountNumber}</TableCell>
                <TableCell>{user.loanAmount}</TableCell>
                <TableCell>{user.loanRequestedFor}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new user, please fill in the following fields.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="accountNumber"
            label="Account Number"
            type="text"
            fullWidth
            value={newUser.accountNumber}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="loanAmount"
            label="Loan Amount"
            type="text"
            fullWidth
            value={newUser.loanAmount}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="loanRequestedFor"
            label="Loan Requested For"
            type="text"
            fullWidth
            value={newUser.loanRequestedFor}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleAddUser} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ManageUsers;
