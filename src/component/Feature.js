import React from "react";
import img from "../asset/img/img-feature-dexspace.png";

export default function Feature() {
  return (
    <div className="Feature" id="feature">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img
              style={{ width: "100%" }}
              src={img}
              alt="Feature Dexspace"
            ></img>
          </div>

          <div class="col-sm" style={{ padding: 16 }}>
            <h2 style={{ textAlign: "center" }} className="bold">
              Dexspace Feature
            </h2>
            <br></br>
            <div style={{ padding: 32 }} class="text-left">
              <h5 class="bold">
                <span className="number-feature">01</span> &nbsp;Licensed
                Windows 10
              </h5>
              <h5 class="bold">
                <span className="number-feature">02</span> &nbsp;Licensed
                Productivity Software
              </h5>
              <h5 class="bold">
                <span className="number-feature">03</span> &nbsp;Data Backup
              </h5>
              <h5 class="bold">
                <span className="number-feature">04</span> &nbsp;Security
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
