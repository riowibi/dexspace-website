import React from "react";

export default function LandingPage() {
  return ( 
    <div className="App margin-landing-mobile">
      <h1 className="number-feature bold"  style={{fontSize:64}}>Dexspace</h1>
      <h5>Desktop everywhere on anydevice</h5>
      <br></br>
      <a href="#contact">
      <button type="button" class="btn btn-lg" style={{color:"white", backgroundColor:"#e12729"}}>
        Try Now for Free
      </button>
      </a>
      <br></br>
      <p style={{marginTop:10}}><i>*Kuota Terbatas</i></p>
    </div>
  );
}
