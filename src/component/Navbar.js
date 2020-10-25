import React from "react";
import "../style/styles.css";

import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h1 className="bold">
              <Link className="link" style={{color:"black"}} to="/">Dexspace</Link></h1>
          </div>

          <div class="col-sm">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ float:"right"}}>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#what"> What? <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#illustration">Illustration</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#feature">Feature</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"><Link className="link" to="/signin">Sign In</Link></a>
                    </li>
                    {/* <li class="nav-item">
                      <a class="nav-link" href="#">Team</a>
                    </li> */}
                    {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li> */}
                    {/* <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li> */}
                  </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
    </div>
  );
}
