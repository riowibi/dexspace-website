import React from "react";

export default function Illustration() {
  return (
    <div className="Illustration" id="illustration">
      <div class="container">
        <h2 className="bold" style={{textAlign: "center"}}>Illustration</h2><br></br>
        <div class="row">
          <div class="col-sm">
          <img style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/dexspace-e99a4.appspot.com/o/asset%2Fimg-illustration-1-dexspace.png?alt=media&token=93e06332-4bf6-44c4-ae8a-a6d4c84138f5"
              alt="Illustration Dexspace"></img>
          </div>
          <div class="col-sm">
          <img style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/dexspace-e99a4.appspot.com/o/asset%2Fimg-illustration-2-dexspace.jpg?alt=media&token=8dc2be8f-b7d8-431f-9e94-6bcd62f719f4"
              alt="Illustration Dexspace"></img>
          </div>
        </div>
        <div>          
          <h5 class="bold" style={{marginTop:20,color:"#e12729"}}>How it Works</h5>
          <p>
            Semua Virtual Desktop yang akan dipakai, semua tersimpan di Data Center Dexspace, sehingga kamu cukup mudah dengan meremote Desktop tersebut melalui Smartphone, Tablet maupun PC / Laptop sendiri
          </p>
          <h5 class="bold" style={{color:"#e12729"}}>Benefits</h5>
          <p>
            Kelebihan dalam menggunakan Virtual Desktop adalah keamanan yang dipastikan akan selalu di backup serta penggunaannya yang dapat di lakukan di semua device, sehingga tidak perlu takut lagi jika data tertinggal atau hilang karena PC / Laptop rusak.  
          </p>
          <h5 class="bold" style={{color:"#e12729"}}>Cost</h5>
          <p>
            Dengan Dexspace, harga nya lebih terjangkau di banding dengan membeli PC / Laptop sendiri, jadi tidak perlu lagi membuang biaya yang tidak perlu, dan tentunya udah bisa nikmatin fitur-fitur yang ada di Desktop 
          </p>
        </div>
      </div>
    </div>
  );
}
