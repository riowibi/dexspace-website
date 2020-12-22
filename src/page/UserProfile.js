import React, { useEffect, useState } from "react";
import NavbarUser from "../component/NavbarUser";
import firebase from "../config";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

const UserHome = () => {

  let history = useHistory();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [docId, setDocId] = useState("");
  
  const uid = firebase.auth().currentUser.uid;

  const updateProfile = () => {

    const profileRef = firebase.firestore().collection("profile").doc(docId)

    const newProfile = {
      birthdate: birthdate,
      fullname: fullname,
      phone_number: phoneNumber,
      gender: gender,
      email: email, //firebase.auth().currentUser.email.toString,
      uid: uid,
    }

    profileRef.set(newProfile);

    history.push("/home");

  }

  const readProfile = () => {
    firebase.firestore().collection("profile").onSnapshot(snapshot => {
      
      snapshot.forEach(doc => {
        if(uid === doc.data().uid){
          setDocId(doc.id);
          setBirthdate(doc.data().birthdate.toDate());
          setFullname(doc.data().fullname);
          setEmail(doc.data().email);
          setGender(doc.data().gender);
          setPhoneNumber(doc.data().phone_number);
        }
      })
    })
    
  }

  useEffect(() => {
    readProfile()
  },[])

  const submit = () => {
    confirmAlert({
      title: 'Profile Updated',
      message: 'Your profile has been saved',
      buttons: [
        {
          label: 'Ok',
          onClick: () => updateProfile()
        }
      ]
    });
  };

  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ]

  return (
    <section>
      <div className="mainBody">
        <NavbarUser/>
        <div className="center" style={{marginTop:0}}>
        <h4 className="homeTitle" style={{marginBottom:20}}>Profile</h4>
        <div className="child-wb shadow p-3 mb-5 bg-white" style={{marginTop:30}}>
        
        <table className="tableDex">
          <tbody>
            <tr className="labelForm">
              <td>Fullname</td>
              <td><input 
              type="text"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            /></td>
            </tr>
            <tr className="labelForm">
              <td>Phone Number</td>
              <td><input 
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            /></td>
            </tr>
            <tr className="labelForm">
              <td>Birth Date</td>
              <td><DatePicker
                // dateFormat="MM/DD/YYYY"
                selected={birthdate}
                onChange={(date) => setBirthdate(date)}
              /></td>
            </tr>
            <tr className="labelForm">
              <td>Gender</td>
              <td><Select value={(gender === "Male" || gender === "") ? options[0] : options[1]} options={options} onChange={(e) => setGender(e.value)} /></td>
            </tr>
          </tbody>          
        </table>
          
          <button className="loginButton" onClick={submit}>Save Profile</button>
          
        </div>
      </div>
      </div>
    </section>
  );
}

export default UserHome;