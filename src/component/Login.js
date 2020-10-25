import React from "react";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="Login">
      <h3>Sign In</h3><br />
      <div>
        Username<br />
        <input type="text" autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" autoComplete="new-password" />
      </div>
      <br />
      <input type="button" value="Sign In" style={{backgroundColor:"#e12729", borderStyle:"none", paddingTop:12,paddingBottom:12, paddingRight:32,paddingLeft:32,borderRadius:12, fontWeight:"bold",color:"white"}}/><br /><br />
      <span>Have no account yet? <Link className="link" to="/signup">Register</Link></span>
      {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
    </div>
  );
}