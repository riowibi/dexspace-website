import React from "react";
import "../style/styles.css";

import {Link} from "react-router-dom";
import {handleLogout} from '../config'

const NavBarUser = () => {
  
  return (
    <div className="Navbar shadow p-3 mb-5 bg-white">
      <div className="container ">
        <div className="row">
          <div className="col-xs">
            <h1 className="bold">
              <Link className="link" style={{color:"black"}} to="/home"><span className="number-feature" style={{fontSize:38}}>Dexspace</span> <span style={{fontSize:24, fontWeight:"lighter"}}>Console</span></Link></h1>
          </div>

          <div className="col-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ float:"right"}}>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    {/* <li class="nav-item">
                      <a class="nav-link"><Link className="link" to="/profile">Profile</Link></a>
                    </li> */}
                    <li className="nav-item">
                      <Link className="link nav-link" to="/profile">Profile</Link>
                    </li>                    
                    <li className="nav-item">
                      <Link  className="nav-link clickable" to="/home" onClick={handleLogout}>Log Out</Link>
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

export default NavBarUser;