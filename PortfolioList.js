import React from 'react';

const PortfolioList = ({ portfolio }) => {
  const totalValue = portfolio.reduce((acc, stock) => acc + (stock.price * stock.quantity), 0);

  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {portfolio.map(stock => (
          <li key={stock.id}>
            {stock.name} ({stock.symbol}) - {stock.quantity} shares
            <div>Current Price: ${stock.price}</div>
            <div>Total Value: ${stock.price * stock.quantity}</div>
          </li>
        ))}
      </ul>
      <h3>Total Portfolio Value: ${totalValue}</h3>
    </div>
  );
};

export default PortfolioList;
