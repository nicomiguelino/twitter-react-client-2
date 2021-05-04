import React from "react";

import "./App.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="container">
        <div className="d-flex justify-content-center mt-3">
          <h3>Hello there!</h3>
        </div>

        <div className="d-flex justify-content-center">
          <h6 className="text-muted">
            It's like Twitter, but green.
          </h6>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-success">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
