import React, { useState, useEffect } from 'react';
import NavbarUser from '../component/NavbarUser';
import firebase from "../config";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Select from 'react-select';
import { useHistory } from "react-router-dom";

const UserCreateDex = () => {

  useEffect(() => {
    getFullname();
  },[]);

  const [os, setOs] = useState("");
  const [specification, setSpecification] = useState("");
  const [fullname, setFullname] = useState("");

  const uid = firebase.auth().currentUser.uid;  
  const email = firebase.auth().currentUser.email;

  let history = useHistory();

  const getFullname = () => {

    firebase.firestore().collection("profile").onSnapshot(snapshot => {
      
      snapshot.forEach(doc => {
        if(uid === doc.data().uid){
          setFullname(doc.data().fullname)
        }
      })
    })
  }

  const createDex = () => {
    const dexRef = firebase.firestore().collection('dex');

    var cpu = "";
    var ram = "";

    if(specification === "study"){
      cpu = "2 Processor";
      ram = "2 GB";
    } else {
      cpu = "4 Processor";
      ram = "4 GB";
    }

    const dex = {
      uid: uid,
      os: os,
      specification: specification,
      status: "build",
      dex_id: createId(7).toString(),
      cpu: cpu,
      ram: ram,
      storage: "50 GB (SSD)",
      ip:"-",
      billing:"1 Month Free",
      anydesk:"-",
      anydesk_pass:"-",
      fullname: fullname,
      email: email,
      modified: firebase.firestore.Timestamp.now(),
    };

    dexRef.add(dex).then(ref => {
      console.log("Added document with ID: ", ref.id)
    });

    
    history.push("/home");
    
  }

  const optionsSpec = [
    { value: 'study', label: 'Study' },
    { value: 'work', label: 'Work' },
  ]

  const optionsOS = [
    { value: 'windows 10', label: 'Windows 10' },
    { value: 'ubuntu', label: 'Linux Ubuntu' },
  ]

  const submit = () => {
    confirmAlert({
      title: 'Confirmation',
      message: 'Your Dex is coming up soon',
      buttons: [
        {
          label: 'Yes',
          onClick: () => createDex()
        },
        {
          label: 'Cancel',
        }
      ]
    });
  };

  const createId = (length) => {
    var result           = 'dex-';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  return(
    <section>
      <NavbarUser/>
      <div className="container">
        <div className="margin-mobile">
        <div className="row justify-content-between">
          <div className="col-md-6" style={{paddingBottom:30}}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h5 className="card-title"><b>Study</b></h5>
                    <hr/>
                    <p className="card-text" style={{color:'white'}}>
                      <span>Specification</span><br/><br/>
                      <span>CPU : 2 Processor</span><br/>
                      <span>RAM : 2 GB</span><br/>
                      <span>Storage : 50 GB (SSD)</span><br/>
                    </p>
                    <hr/>
                    <p style={{color:'white'}}>Good for student to learn some software</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h5 className="card-title"><b>Work</b></h5>
                    <hr/>
                    <p className="card-text" style={{color:'white'}}>
                      <span>Specification</span><br/><br/>
                      <span>CPU : 4 Processor</span><br/>
                      <span>RAM : 4 GB</span><br/>
                      <span>Storage : 50 GB (SSD)</span><br/>
                    </p>
                    <hr/>
                    <p style={{color:'white'}}>Good for employee to multitask</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2><b>Choose your Dex</b></h2>
            <label>Operating System</label>
            <br/>        
            <Select onChange={(e) => setOs(e.value)} options={optionsOS} />
            <label>Specification</label>
            <br/>
            <Select onChange={(e) => setSpecification(e.value)} options={optionsSpec} />
            <br/>
            <br/>
            <button className="loginButton" onClick={submit} >Create Dex</button>
          </div>
        </div>  
        </div>     
      </div>
    </section>
  )
}

export default UserCreateDex;