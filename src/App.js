import React, { useEffect } from "react";

import "./App.scss";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";

const middot = '\u00b7';

function App() {
  useEffect(() => {
    document.title = `Yet another Twitter clone ${middot}  Home`;
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Feed />
    </div>
  );
}

export default App;
