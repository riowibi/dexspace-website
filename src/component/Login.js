import React from "react";
// import { auth, provider } from '../config';

import NavbarLogin from "../component/NavbarLogin";

const Login = (props) => {
     
  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin, 
    handleSignup, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError,
  } = props;

      return(
        <section>
          <NavbarLogin /> 
          <div className="Login">
              {
                hasAccount ? (
                <>
                  <h3 style={{fontWeight:"bold"}}>Register</h3>
                </>
                ) :
                (
                <>
                  <h3 style={{fontWeight:"bold"}}>Login</h3>
                </>
                )
              }
            <label>Email</label>
            <br/>
            <input 
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            {/* <form> */}
              <label>Password</label>
              <br/>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br/>
              <br/>
              <p className="errorMessage">{emailError}</p>
              <p className="errorMessage">{passwordError}</p>
            
              <div>
                {
                  hasAccount ? (
                  <>
                    <button className="loginButton" onClick={handleSignup}>Create Account</button>
                    <p>Already has account? <span className="linkLogin" onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                  </>
                  ) :
                  ( 
                           
                  <>
                    <button className="loginButton" onClick={handleLogin}>Sign In</button>
                    <p>Has no account yet? <span className="linkLogin" onClick={() => setHasAccount(!hasAccount)}>Register</span></p>
                  </>
                  )
                }
              </div>
            {/* </form> */}
            
            {/* <span>Have no account yet? <Link className="link" to="/signup">Register</Link></span> */}
          </div>
        </section>
    )
  }

export default Login;