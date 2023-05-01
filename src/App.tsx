import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './compoents/Navbar';
import Card from './compoents/Card';
import Form from './compoents/Form';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
