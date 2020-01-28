import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteViews from "./components/RouteViews";

function App() {
  return (
    <Router>
      <Navbar />
      <RouteViews />
    </Router>
  );
}

export default App;
