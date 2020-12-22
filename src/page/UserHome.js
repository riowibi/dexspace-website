import React , {useEffect, useState}  from "react";
import NavbarUser from "../component/NavbarUser";
import firebase from "../config";
import { Redirect, Link } from "react-router-dom";

const UserHome = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [isNewUser, setIsNewUser] = useState();
  const [isUserHasDex, setIsUserHasDex] = useState();
  const [dex, setDex] = useState();
  const uid = firebase.auth().currentUser.uid;
  var dexs = [];

  const checkAdmin = () => {
    firebase.firestore().collection("role").onSnapshot(snapshot => {
      
      // var count = 0;
      snapshot.forEach(doc => {
        if(uid === doc.data().uid && doc.data().role === "admin"){
          setIsAdmin(true);
        }
      })
    })
  }

  const checkNewUser = () => {
    firebase.firestore().collection("profile").onSnapshot(snapshot => {
      
      var count = 0;
      snapshot.forEach(doc => {
        if(uid === doc.data().uid){
          count = count + 1;
        }
      })

      if(count > 0){
        setIsNewUser(false);
      } else {
        setIsNewUser(true);
      }
    })
  }

  const createDefaultProfile = () => {
    firebase.firestore().collection("profile").add({
      birthdate: firebase.firestore.Timestamp.now(),
      fullname: "-",
      phone_number: "-",
      gender: "Male",
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
    })
    .then(ref => {
      // console.log("Added document with ID: ", ref.id)
    })
  }

  const handleLogout = () => {
    firebase.auth().signOut();
  }

  const checkDexUser = () => {
    firebase.firestore().collection("dex").onSnapshot(snapshot => {
      
      var count = 0;
      snapshot.forEach(doc => {
        if(uid === doc.data().uid && doc.data().status !== "deleted"){
          count = count + 1;
          // console.log(doc.data().os);
          dexs.push({
            name: doc.data().dex_id,
            os: doc.data().os,
            status: doc.data().status,
          })
        }
      })

      if(count > 0){
        setIsUserHasDex(true);
        // console.log(isUserHasDex);
      } else {
        setIsUserHasDex(false);
        // console.log(isUserHasDex);
      }
    })

    setDex(dexs);
  }

  useEffect(() => {
    checkAdmin();
    checkNewUser();
    checkDexUser();
  },[]);

  const getUrl = (name) => {
    var url = '/dex/';
    url = url + name;
    return url; 
  }
  
  return (
    <section>
      {
        isAdmin ? 
        (
          <Redirect to="/dashboard"/>
        ) :
        (
          isNewUser ?
        (
          createDefaultProfile(),
          <Redirect to="/profile"/>
        ) :
        (
          isUserHasDex ? 
          (
          <>
          <NavbarUser/>
          <div className="mainBody">
            <div className="containerHome center">
                  {/* <div className="listDexButton">
                    <p>
                      <span>Name</span><br/>
                      <span>OS - Status</span>
                    </p>
                  </div> 
                  <div className="listDexButton">
                    <p>
                      <span>tes</span>
                    </p>
                  </div> 
                  <div className="listDexButton">
                    <p>
                      <span>tes</span>
                    </p>
                  </div> 
                  <div className="listDexButton">
                    <p>
                      <span>tes</span>
                    </p>
                  </div>  */}
              <h4 className="homeTitle" style={{marginBottom:20}}>My <span style={{color:"#e12729",fontSize:28}}>Dex</span> Cloud</h4>
              <div className="child shadow p-3 mb-5 bg-white" style={{textAlign:"center"}}>
              { 
                dex.map((data, i) => (        
                  <Link key={i} className="link" to={getUrl(data.name)}> 
                  <div className="listDexButton">
                    <p>
                      <span>{data.name}</span><br/>
                      <span>{data.os} - {data.status}</span>
                    </p>
                  </div>            
                  </Link>   
                ))
              }
              <Link className="link" to="/create-dex"> 
                <div className="listDexAddButton" style={{textAlign:"center"}}>
                  <span>
                    <p style={{marginBottom:-10,fontSize:38}}>+</p>
                    <p style={{marginBottom:-3}}>Add New Dex</p>
                  </span>
                </div> 
              </Link> 
              </div>
            </div>
          </div>
          </>  
          ) : 
          (            
            <>
            <NavbarUser handleLogout={handleLogout}/>
            <Link className="link" to="/create-dex">
              <div className="createDexButton center">
                <span className="center">
                  <p style={{marginBottom:-10,fontSize:48}}>+</p>
                  <p style={{marginBottom:-3}}>Create First</p>
                  <p>Dex</p>
                </span>
              </div>   
            </Link>
            </>
          )        
        )
        )
        
      }
      
        
    </section>
  );
}

export default UserHome;