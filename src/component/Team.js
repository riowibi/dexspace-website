import React from "react";
import imgRio from "../asset/img/dexspace-rio.png";
import imgRezdi from "../asset/img/dexspace-rezdi.png";
import imgIndra from "../asset/img/dexspace-indra.png";

export default function Team() {
  return (
    <div className="Team">
      <div class="container">

      <h2 className="bold" style={{textAlign: "center"}}>Dexspace Team</h2><br></br>
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src={imgRezdi}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  <span className="bold">CFO / CMO</span>
                  <br></br>
                  <span>Rezdi Lutfhan Pramananda</span>
                  <hr></hr>
                  <span>Junior Account Manager</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div class="card">
              <img
                class="card-img-top"                
                src={imgRio}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  <span className="bold">CEO</span>
                  <br></br>
                  <span>Rio Wibisono</span>
                  <hr></hr>
                  <span>Sales Engineer</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm">
            <div class="card">
              <img
                class="card-img-top"                
                src={imgIndra}
                alt="Card image cap"
              ></img>
              <div class="card-body">
                <p class="card-text">
                  <span className="bold">CTO</span>
                  <br></br>
                  <span>Indra Bari Yulio</span>
                  <hr></hr>
                  <span>Network Operation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
