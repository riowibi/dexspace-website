import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "./global-styles";
import "./style/styles.css";
import "./style/styles-mobile.css";

// import Navbar from "./component/Navbar";
import Container from "./component/Container";
import AuthProvider from "./util/AuthProvider"
// import LandingPage from "./component/LandingPage"
// import App from './component/App'

const App = () => (
<AuthProvider>
  <Router>
    <div>
      <Container />
    </div>
  </Router>
</AuthProvider>
);

render(<App />, document.getElementById("root"));