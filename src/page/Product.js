import React, { Component } from "react";

import Navbar from "../component/Navbar";
import LandingPage from "../component/LandingPage";
import About from "../component/About";
import Feature from "../component/Feature";
import Illustration from "../component/Illustration";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

class Product extends Component {

  render () {

    // console.log(Timestamps())

    return (
      <div>      
        <Navbar />
        <LandingPage />
        <About />
        <Illustration />
        <Feature />
        <Contact />
        <Footer />
      </div>
    )};
}


export default Product;
