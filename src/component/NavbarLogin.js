import React from "react";
import "../style/styles.css";

import {Link} from "react-router-dom";

export default function NavbarLogin() {
  return (
    <div className="Navbar">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h1 className="bold">
            <Link className="link" style={{color:"black"}} to="/"><span className="number-feature" style={{fontSize:38}}>Dexspace</span> <span style={{fontSize:24, fontWeight:"lighter"}}>Console</span></Link></h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}
