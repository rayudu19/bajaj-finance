import React from 'react';
import Header from './components/Header';
import FinancePlans from './components/FinancePlans';
import LoanApplicationForm from './components/LoanApplicationForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <FinancePlans />
      <LoanApplicationForm />
      <Footer />
    </div>
  );
};

export default App;
