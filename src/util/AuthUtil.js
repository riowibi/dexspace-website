import {useState} from 'react';
import fire from "../config";

const AuthUtil = () => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  
}

const clearInputs = () => {
  AuthUtil.setEmail("");
  AuthUtil.setPassword("");
}

const clearErrors = () => {
  AuthUtil.setEmailError("");
  AuthUtil.setPasswordError("");
}

const handleLogout = () => {
  fire.auth.signOut();
}

export default {clearInputs, clearErrors, handleLogout};
