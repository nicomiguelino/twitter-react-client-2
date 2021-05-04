import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-center mt-3">
          <h3>Hello, Twitter clone!</h3>
        </div>

        <div className="d-flex justify-content-center">
          <h6 className="text-muted">The most-awaited clone is coming soon...</h6>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-sm btn-info">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
