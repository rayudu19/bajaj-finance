import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Apply for a Loan</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Loan Amount"
          variant="outlined"
          fullWidth
          margin="normal"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Apply Now
        </Button>
      </form>
    </Container>
  );
};

export default LoanApplicationForm;
