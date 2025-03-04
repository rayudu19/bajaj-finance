import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const FinancePlans = () => {
  const [plans, setPlans] = useState([]);

  // Using useEffect to simulate fetching data from an API
  useEffect(() => {
    // Simulated fetch call (You can replace this with a real API call)
    const fetchedPlans = [
      { id: 1, title: 'Personal Loan', interest: '12%', amount: 'Up to ₹5 Lakh' },
      { id: 2, title: 'Home Loan', interest: '8.5%', amount: 'Up to ₹10 Lakh' },
      { id: 3, title: 'Car Loan', interest: '10%', amount: 'Up to ₹3 Lakh' },
    ];
    setPlans(fetchedPlans);
  }, []); // Empty dependency array means it runs once after initial render

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Available Finance Plans
      </Typography>
      <Grid container spacing={2}>
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{plan.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Interest: {plan.interest}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Amount: {plan.amount}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Apply Now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FinancePlans;
