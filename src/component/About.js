import React from "react";

export default function About() {
  return (
    <div className="About" id="what">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h2 style={{ textAlign: "center" }} className="bold">
              What is Dexspace?
            </h2>
            <div style={{ padding: 32 }} class="text-center">
              <p>
                Desktop As A Service dengan harga terjangkau sehingga kamu tidak
                perlu lagi ribet untuk membawa laptop dan takut data hilang karena suatu hal tak terduga
              </p>
              <p>
                Cocok juga untuk perusahaan yang memberikan asset bagi
                karyawannya untuk kerja. Virtual Desktop dapat meminimalisir
                biaya cost loh
              </p>
              <p style={{ color: "red" }} class="bold">
                Yuk kenali dulu cara kerjanya Cloud Computing
              </p>
              <p>
                <i>*Cek video berikut</i>
              </p>
            </div>
          </div>

          <div class="col-sm">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/DkpQHqkbPyU?rel=0"
                allowFullScreen
              ></iframe>
            </div>
            {/* <div style={{height:300}}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "300px"
                }}
                src={`https://www.youtube.com/embed/Sx6dAx7dnXg`}
                frameBorder="0"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
