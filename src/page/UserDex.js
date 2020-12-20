import React, { useEffect, useState } from 'react'
import NavbarUser from '../component/NavbarUser';
import firebase from '../config';
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';

const UserDex = (props) => {
  
    let history = useHistory();

    const dexId = props.match.params.name;
    const uid = firebase.auth().currentUser.uid;
    const email = firebase.auth().currentUser.email;

    const [fullname, setFullname] = useState("");
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

    const readDex = () => {
      firebase.firestore().collection("dex").onSnapshot(snapshot => {
        
        snapshot.forEach(doc => {
          if(dexId == doc.data().dex_id){
            setFullname(doc.data().fullname);
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

    const unsubscribe = () => {
      const dexRef = firebase.firestore().collection("dex").doc(docId)

      const unsubscribeDex = {
        uid: uid,
        os: os,
        specification: specification,
        status: "inactive",
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

      dexRef.set(unsubscribeDex);

      history.push("/home");
      
    }

    const submit = () => {
      confirmAlert({
        title: 'Unsubscribed Dex',
        message: 'Your dex will be deleted, are you sure?',
        buttons: [
          {
            label: 'Yes, Delete Dex',
            onClick: () => unsubscribe(),
          },
          {
            label: 'Cancel',
          }
        ]
      });
    };
  
    useEffect(() => {
      readDex()
    }, [])

    return (
      <section>
        <div className="mainBody">
          <NavbarUser />
          <div class="container">
            <div class="row margin-mobile">
              <div class="col-xl">
                <h3 style={{textAlign:"left"}}>Information for [<span style={{color:"#e12729",fontWeight:"bold",fontStyle:"italic"}}>{dexId}</span>]</h3>
                <div className="col child-box shadow p-3 mb-5 bg-white">
                  <table className="table-dex" style={{textAlign:"left", width:"100%"}}>
                    <td>
                      <tr>Status Dex</tr>
                      <tr className="empty-row"><hr/></tr>
                      <tr>IPv4</tr>
                      <tr>Anydesk ID</tr>
                      <tr>Anydesk Pass</tr>
                      <tr className="empty-row"><hr/></tr>
                      <tr>Specification</tr>
                      <tr>Operating System</tr>
                      <tr>CPU</tr>
                      <tr>RAM Memory</tr>
                      <tr>Storage</tr>
                      <tr className="empty-row"><hr/></tr>
                      <tr>Billing</tr>
                    </td>
                    <td className="empty-column"></td>
                    <td>
                      <tr>: {status}</tr>
                      <tr className="empty-row"><hr/></tr>
                      <tr>: {ip}</tr>
                      <tr>: {anydesk}</tr>
                      <tr>: {anydeskPass}</tr>
                      <tr className="empty-row"><hr/></tr>
                      <tr>: {specification}</tr>
                      <tr>: {os}</tr>
                      <tr>: {cpu}</tr>
                      <tr>: {ram}</tr>
                      <tr>: {storage}</tr>
                      <tr className="empty-row"><hr/></tr>
                      <tr>: {billing}</tr>
                    </td>
                  </table>
                </div>
              </div>
              <div class="col-xl">
                <h3 style={{textAlign:"left"}}>How to use Dexspace?</h3>
                <div style={{textAlign:"left"}} className="child-box child-box shadow p-3 mb-5 bg-white anydesk">
                  <h5>Use AnyDesk!, here tutorial how to connect with Anydesk</h5>
                  {/* <br/> */}
                  <span>1. Install <b style={{color:"#F6B900"}}>Anydesk</b> on your PC / Tablet / Smartphone, <a style={{color:"#F6B900",fontWeight:"bold"}} href="https://anydesk.com/en/downloads/windows" >Download Here</a></span><br/>
                  <span>2. Copy Anydesk ID to Anydesk form for remote access</span><br/>
                  <span>3. Use the password to connect</span><br/>
                  <span>4. Woala! You're in</span><br/>
                </div>
                <h3 style={{textAlign:"left"}}>Unsubscribe</h3>
                <div className="child-box shadow p-3 mb-5 bg-white">
                  <button className="loginButton" style={{marginBottom:0}} onClick={submit}> Delete Dex </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

// const UserDex = (props) => {
//   return(
//     <section>
//       <p>{this.props.match.params.name}</p>
//     </section>
//   )
// }

export default UserDex;