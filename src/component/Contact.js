import React from "react";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <p style={{color:"#e12729",marginBottom:-2}} class="bold">
        How do you think?
      </p>
      <h2 className="bold">
        Get Contact Us Now
      </h2>
      <br></br>
      <a href="https://t.me/dexspace_care">
      <button type="button" class="btn btn-lg" style={{color:"white", backgroundColor:"#28A0D4"}}>
        <i class="fab fa-telegram-plane"></i> Telegram
      </button>
      </a>
    </div>
  );
}
