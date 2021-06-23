import React from 'react';
import './App.css';
import AuctionDetails from './component/AuctionDetails/AuctionDetails';
import Header from './component/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <AuctionDetails></AuctionDetails>
    </div>
  );
}

export default App;
