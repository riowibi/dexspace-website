import React from "react";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div className="Login">
      <h3>Sign Up</h3><br />
      <div>
        Username<br />
        <input type="text" autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" autoComplete="new-password" />
      </div>
      <br />
      <input type="button" value="Register" style={{backgroundColor:"#e12729", borderStyle:"none", paddingTop:12,paddingBottom:12, paddingRight:32,paddingLeft:32,borderRadius:12, fontWeight:"bold",color:"white"}}/><br /><br />
      <span>Already have an account? <Link className="link" to="/signin">Sign In</Link></span>
      {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
    </div>
  );
}