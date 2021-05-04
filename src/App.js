import React from "react";

import "./App.scss";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Feed />
    </div>
  );
}

export default App;
