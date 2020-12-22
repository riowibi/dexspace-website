import React, {useEffect, useState} from 'react';
import NavbarAdmin from '../component/NavbarAdmin';
import firebase from '../config';
import { Link } from "react-router-dom";

const AdminHome = () => {

  useEffect(() => {
    getCounter();
  }, [])

  const getCounter = () => {
    firebase.firestore().collection("dex").where("status", "==", "build").get()
    .then(snapshot => setCountBuild(snapshot.size))

    firebase.firestore().collection("dex").where("status", "==", "active").get()
    .then(snapshot => setCountActive(snapshot.size))

    firebase.firestore().collection("dex").where("status", "==", "suspend").get()
    .then(snapshot => setCountSuspend(snapshot.size))

    firebase.firestore().collection("dex").where("status", "==", "inactive").get()
    .then(snapshot => setCountInactive(snapshot.size))

    firebase.firestore().collection("profile").get()
    .then(snapshot => setCountUser(snapshot.size))
  }

  const [countBuild, setCountBuild] = useState();  
  const [countActive, setCountActive] = useState();  
  const [countSuspend, setCountSuspend] = useState();  
  const [countInactive, setCountInactive] = useState();  
  const [countUser, setCountUser] = useState();  

  return(
    <section>
      <NavbarAdmin/>
      <div className="container text-center">
        <div className="margin-mobile">
        <h4 style={{marginBottom:0, textAlign:"left"}}>Overview</h4>
        <hr/>
        <div className="row">
          <div className="col-xl-6">
            <Link className="link" to="/user-list" status="all">
            <div className="col child-box shadow p-3 mb-5 boxTitle"> 
              <span>Registered Users</span><br/>
              <span style={{fontSize:48}}>{countUser}</span>
            </div>
            </Link>
          </div>  
          <div className="col-xl-6">
            <Link className="link" to="/dex-list/all" status="all">
            <div className="col child-box shadow p-3 mb-5 boxTitleTwo"> 
              <span>Total Dex</span><br/>
              <span style={{fontSize:48}}>{(countBuild + countActive + countSuspend + countInactive)}</span>
            </div>
            </Link>
          </div>            
        </div>
        <div className="row">
        <div className="col-xl-3">
          <Link className="link" to="/dex-list/build" status="build">
            <div className="col child-box shadow p-3 mb-5 bg-white boxTitleTwo"> 
              <span>Dex Build</span><br/>
              <span style={{fontSize:48}}>{countBuild}</span>
            </div>
            </Link>
          </div>
          <div className="col-xl-3">
            <Link className="link" to="/dex-list/active" status="active">
            <div className="col child-box shadow p-3 mb-5 bg-white boxTitleTwo"> 
              <span>Dex Active</span><br/>
              <span style={{fontSize:48}}>{countActive}</span>
            </div>
            </Link>
          </div>
          <div className="col-xl-3">
            <Link className="link" to="/dex-list/suspend" status="suspend">
            <div className="col child-box shadow p-3 mb-5 bg-white boxTitleTwo"> 
              <span>Dex Suspend</span><br/>
              <span style={{fontSize:48}}>{countSuspend}</span>
            </div>
            </Link>
          </div>
          <div className="col-xl-3">
            <Link className="link" to="/dex-list/inactive" status="inactive">
            <div className="col child-box shadow p-3 mb-5 bg-white boxTitleTwo"> 
              <span>Dex Inactive</span><br/>
              <span style={{fontSize:48}}>{countInactive}</span>
            </div>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  )

}

export default AdminHome