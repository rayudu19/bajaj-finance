import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px 0' }}>
      <Container>
        <Typography variant="body2" align="center">
          &copy; 2025 Bajaj Finance. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
