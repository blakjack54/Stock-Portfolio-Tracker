import React, { useState } from 'react';
import PortfolioList from './components/PortfolioList';

const App = () => {
  const [portfolio, setPortfolio] = useState([]);

  // Example data for stocks
  const initialPortfolio = [
    { id: 1, name: 'Stock A', symbol: 'STK-A', price: 100, quantity: 10 },
    { id: 2, name: 'Stock B', symbol: 'STK-B', price: 75, quantity: 20 }
  ];

  useState(() => {
    setPortfolio(initialPortfolio);
  }, []);

  return (
    <div>
      <h1>Stock Portfolio Tracker</h1>
      <PortfolioList portfolio={portfolio} />
    </div>
  );
};

export default App;
