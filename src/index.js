import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "./global-styles";
import "./style/styles.css";

import Navbar from "./component/Navbar";
import Container from "./component/Container";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Container />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
