import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAW14VbDO3cg1AZwvNFp93cLnwmKBCfY0Y",
  authDomain: "dexspace-e99a4.firebaseapp.com",
  databaseURL: "https://dexspace-e99a4.firebaseio.com",
  projectId: "dexspace-e99a4",
  storageBucket: "dexspace-e99a4.appspot.com",
  messagingSenderId: "955564629106",
  appId: "1:955564629106:web:9b981ae8fd954e1099b6eb",
  measurementId: "G-HXP6CC0700"
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN, 
  // // databaseURL: process.env.REACT_APP_DB,
  // projectId: process.env.REACT_APP_PID,
  // storageBucket: process.env.REACT_APP_SB,
  // messagingSenderId: process.env.REACT_APP_SID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId:process.env.REACT_APP_MID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const handleLogout = () => {
  firebase.auth().signOut();
}
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export default { auth, provider, firebase};
export default firebase;
export {handleLogout};