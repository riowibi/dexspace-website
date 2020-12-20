import React from "react";
import {Link} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import SimpleReactValidator from 'simple-react-validator';

class Register extends React.Component {
  state = {
		username: "",
		email: "",
		password: "",
    confirmPassword: "",
  };
  
  

  render() {

    const { username, email, password, confirmPassword } = this.state;

    return (
          <div className="Login">
            <h3>Sign Up</h3><br />
            <div>
              Username<br />
              <input type='text'
                      // placeholder='@username'
                      name='username'
                      onChange={this.updateInput}
                      value={username} 
                      />
            </div>
            <div style={{ marginTop: 10 }}>
              Email<br />
              <input type='text'
                      // placeholder='some@email.com'
                      name='email'
                      onChange={this.updateInput}
                      value={email} 
                      />
            </div>
            <div style={{ marginTop: 10 }}>
              Password<br />
              <input type='text'
                      // placeholder='some@email.com'
                      name='password'
                      onChange={this.updateInput}
                      value={password} 
                      />
            </div>
            <div style={{ marginTop: 10 }}>
              Confirm Password<br />
              <input type='text'
                      // placeholder='some@email.com'
                      name='confirmPassword'
                      onChange={this.updateInput}
                      value={confirmPassword} 
                      />
            </div>
            <br />
            <button type="submit" onClick={this.addUser} style={{backgroundColor:"#e12729", borderStyle:"none", paddingTop:12,paddingBottom:12, paddingRight:32,paddingLeft:32,borderRadius:12, fontWeight:"bold",color:"white"}}>Register</button><br /><br />
            <span>Already have an account? <Link className="link" to="/signin">Sign In</Link></span>
            {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
          </div>
        );
  }


  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addUser = event => {
    event.preventDefault();

    var passwordHash = require('password-hash');

    var hashedPassword = passwordHash.generate(this.state.password);

    firestore.collection("users").add({
      username: this.state.username,
      email: this.state.email,
      password: hashedPassword,
      role: "user",
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>You've been Registered, go to Login page</h1>
            <button onClick={onClose}>Closed</button>
            {/* <button onClick={() => {
                this.handleClickDelete()
                onClose()
            }}>Yes, Delete it!</button> */}
          </div>
        )
      }
    })
  
    this.setState({ username: "", email: "", password: "", confirmPassword: "" });
  }
  




}

export default Register;
