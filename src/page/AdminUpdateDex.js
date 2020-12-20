import React, { useEffect, useState } from "react";
import NavbarAdmin from "../component/NavbarAdmin";
import firebase from "../config";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Select from 'react-select';
import { useHistory } from "react-router-dom";
// import { getOptionValue } from "react-select/src/builtins";

const AdminUpdateDex = (props) => {

  let history = useHistory();

  const dexId = props.match.params.name;

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [os, setOs] = useState("");
  const [specification, setSpecification] = useState("");
  const [status, setStatus] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [ip, setIp] = useState("");
  const [billing, setBilling] = useState("");
  const [anydesk, setAnydesk] = useState("");
  const [anydeskPass, setAnydeskPass] = useState("");
  const [docId, setDocId] = useState("");

  const updateDex = () => {

    const dexRef = firebase.firestore().collection("dex").doc(docId)

    const newDex = {
      uid: uid,
      os: os,
      specification: specification,
      status: status,
      dex_id: dexId,
      cpu: cpu,
      ram: ram,
      storage: storage,
      ip:ip,
      billing: billing,
      anydesk: anydesk,
      anydesk_pass: anydeskPass,
      fullname: fullname,
      email: email,
      modified: firebase.firestore.Timestamp.now(),
    }

    dexRef.set(newDex);

    // history.push("/home");

  }

  const readDex = () => {
    firebase.firestore().collection("dex").onSnapshot(snapshot => {
      
      snapshot.forEach(doc => {
        if(dexId == doc.data().dex_id){
          setFullname(doc.data().fullname);
          setEmail(doc.data().email);
          setUid(doc.data().uid);
          setDocId(doc.id);
          setOs(doc.data().os);
          setSpecification(doc.data().specification);
          setStatus(doc.data().status);
          setCpu(doc.data().cpu);
          setRam(doc.data().ram);
          setStorage(doc.data().storage);
          setIp(doc.data().ip);
          setBilling(doc.data().billing);
          setAnydesk(doc.data().anydesk);
          setAnydeskPass(doc.data().anydesk_pass);
        }
      })
    })
    
  }

  useEffect(() => {
    readDex();
  }, [])

  const submit = () => {
    confirmAlert({
      title: 'Dex Updated',
      message: 'Dex has been saved',
      buttons: [
        {
          label: 'Ok',
          onClick: () => updateDex()
        }
      ]
    });
  };

  const options = [
    { value: 'build', label: 'Build' },
    { value: 'active', label: 'Active' },
    { value: 'suspend', label: 'Suspend' },
    { value: 'inactive', label: 'Inactive' },
  ]

  const getOptionValue = (status) => {

    var optionValue = 0;
    
    switch(status){
      case "build":
        optionValue = 0;
        break;
      case "active":
        optionValue = 1;
        break;
      case "suspend":
        optionValue = 2;
        break;
      case "inactive":
        optionValue = 3;
        break;
      default:
        optionValue = 0;
        break;
    }

    return optionValue;
  }

  return (
    <section>
      <div className="mainBody">
        <NavbarAdmin/>
        <div className="center" style={{marginTop:0}}>
        <h4 className="homeTitle" style={{marginBottom:20}}>Update <span className="red">{dexId}</span> {}</h4>
        <div className="child-wb shadow p-3 mb-5 bg-white" style={{marginTop:30}}>
        
        <table className="tableDex">
          <td className="labelForm">
            <tr>Anydesk ID</tr>
            <tr>Anydesk Pass</tr>
            <tr>IPv4</tr>
            <tr>Status</tr>
          </td>
          <td>
            <tr><input 
            type="text"
            required
            value={anydesk}
            onChange={(e) => setAnydesk(e.target.value)}
            /></tr>
            <tr><input 
            type="text"
            required
            value={anydeskPass}
            onChange={(e) => setAnydeskPass(e.target.value)}
            /></tr>
            <tr><input 
            type="text"
            required
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            /></tr>
            <tr><Select value={options[getOptionValue(status)]} options={options} onChange={(e) => setStatus(e.value)} /></tr>
          </td>
        </table>
          
          <button className="loginButton" onClick={submit}>Update Dex</button>
          
        </div>
      </div>
      </div>
    </section>
  );
}

export default AdminUpdateDex;