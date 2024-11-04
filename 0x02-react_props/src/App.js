// src/App.js
import React from 'react';
import Notifications from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import './App.css';

const App = () => {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
