import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../component/NavbarAdmin';
import firebase from '../config';
import Profile from '../model/Profile';
import { MDBDataTable} from 'mdbreact';
// import { Link } from "react-router-dom";

const AdminUserList = (props) => {
  
  const [dexData, setDexData] = useState([]);

  const handleLogout = () => {
    firebase.auth().signOut();
  }

  const dexDatas = [];

  const getData = () => {

    firebase.firestore().collection("profile").onSnapshot(snapshot => {
      
      const data = [];

      snapshot.forEach(doc => {
          data.push(
            new Profile(doc.data().fullname,doc.data().email,doc.data().phone_number,doc.data().gender,doc.data().uid), 
          );
        })

      // console.log(data);
      
      data.map((key, index) => {
        dexDatas.push({
          name: key.name.value,
          email: key.email.value,
          phone_number: key.phoneNumber.value,
          gender: key.gender.value,
          // action: <Link className="link" to={"/user-update/"+key.uid.value}> <p class="text-center" style={{border:"solid 1px",borderRadius:10, marginBottom:0,color:'white', backgroundColor:"green", fontWeight:'bold'}}>Edit</p> </Link>,
          // updated_time: key.modified.value,
        })
      }) 
      
      setDexData(dexDatas);
    })
    
  }

  useEffect(() => {
    getData();
  }, []);


  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Phone Number',
        field: 'phone_number',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 200
      },
      // {
      //   label: 'Action',
      //   field: 'action',
      //   sort: 'asc',
      //   width: 100
      // },
      // {
      //   label: 'Modified On',
      //   field: 'updated_time',
      //   sort: 'asc',
      //   width: 150
      // },
    ],
    rows: dexData,
  }

  return(
    <section>
      <NavbarAdmin handleLogout={handleLogout}/>
      <div className="container margin-mobile">
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
      </div>
    </section>
  )

}

export default AdminUserList;