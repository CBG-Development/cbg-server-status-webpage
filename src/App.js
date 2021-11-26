import React from 'react';
import './App.css';
import Status from './Status';
import logo from '../public/logo.png';

export default function App() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo"/>
        <div className="logo-text">
          <h1>Carl-Benz Gaming</h1>
          <label>Server status</label>
        </div>
      </header>
      <Status />
    </>
  );
}