import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Form from './components/Form';
import Button from './components/Button';

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
          <div className="col-md-6">
            <Button title="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
