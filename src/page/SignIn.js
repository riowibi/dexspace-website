import React, { useState, useEffect, useContext }  from "react";
import { Redirect } from "react-router-dom";

import Login from "../component/Login";
import firebase from "../config";
import { AuthContext } from "../util/AuthProvider";

const SignIn = ({history}) => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");


  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }


  const handleLogin = () => {
    clearErrors();
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;            
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      }, [history]);
  };

  const { currentUser } = useContext(AuthContext);
    if (currentUser) {
      return <Redirect to="/home" />;
    } 

  const handleSignup = () => {
    clearErrors();
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
 

  // const authListener = () => {
  //   fire.auth.onAuthStateChanged((user) => {
  //     if(user){
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   })
  // }

  // useEffect(() => {
  //   authListener();
  // }, []);

  


    return (
      <div>
        {
          user ? (
            <Redirect to={{
              pathname: "/home",
              state: { user: user }
            }}/>
            // <UserHome handleLogout={handleLogout} />
          ) :
          (
            <Login 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword} 
              handleLogin={handleLogin} 
              handleSignup={handleSignup} 
              hasAccount={hasAccount} 
              setHasAccount={setHasAccount} 
              emailError={emailError}
              passwordError={passwordError} 
            />
          )
        }
        
        
      </div>
    );
}

export default SignIn;