import React from "react";

export default function Feature() {
  return (
    <div className="Feature" id="feature">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img
              style={{ width: "80%" , transform: "scaleX(-1)"}}
              src="https://firebasestorage.googleapis.com/v0/b/dexspace-e99a4.appspot.com/o/asset%2Fimg-feature-dexspace.png?alt=media&token=16a549bf-a637-4558-a458-94660f511ae2"
              alt="Feature Dexspace"
            ></img>
          </div>

          <div class="col-sm" style={{ padding: 16 }}>
            <h2 style={{ textAlign: "center" }} className="bold">
              Dexspace Feature
            </h2>
            <br></br>
            <div style={{ padding: 32 }} class="text-left">
              <h5 class="bold red">
                <span className="number-feature">01</span> &nbsp;Licensed
                Operating System
              </h5>
              <h5 class="bold red">
                <span className="number-feature">02</span> &nbsp;Licensed
                Productivity Software
              </h5>
              <h5 class="bold red">
                <span className="number-feature">03</span> &nbsp;Data Backup
              </h5>
              <h5 class="bold red">
                <span className="number-feature">04</span> &nbsp;Security
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
