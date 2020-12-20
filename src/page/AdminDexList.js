import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../component/NavbarAdmin';
import firebase from '../config';
import Dex from '../model/Dex';
import { MDBDataTable} from 'mdbreact';
import { Link } from "react-router-dom";

const AdminUserList = (props) => {
  
  const [dexData, setDexData] = useState([]);

  const dexStatus = props.match.params.status;

  const handleLogout = () => {
    firebase.auth().signOut();
  }

  const dexDatas = [];

  const getData = () => {

    firebase.firestore().collection("dex").onSnapshot(snapshot => {
      
      const data = [];

      if(dexStatus == "all"){

        snapshot.forEach(doc => {
          data.push(
            new Dex(doc.data().fullname,doc.data().email,doc.data().dex_id,doc.data().status,new Date(doc.data().modified.seconds * 1000).toLocaleDateString("id-ID")), 
          );
        })
      } else {
        snapshot.forEach(doc => {
          if(doc.data().status == dexStatus){
            data.push(
              new Dex(doc.data().fullname,doc.data().email,doc.data().dex_id,doc.data().status,new Date(doc.data().modified.seconds * 1000).toLocaleDateString("id-ID")), 
            );
          }
        })
      }

      console.log(data);
      
      data.map((key, index) => {
        dexDatas.push({
          name: key.name.value,
          email: key.email.value,
          dex_id: key.dexId.value,
          status: key.status.value,
          action: <Link className="link" to={"/dex-update/"+key.dexId.value}> <p class="text-center" style={{border:"solid 1px",borderRadius:10, marginBottom:0,color:'white', backgroundColor:"green", fontWeight:'bold'}}>Edit</p> </Link>,
          updated_time: key.modified.value,
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
        label: 'Dex ID',
        field: 'dex_id',
        sort: 'asc',
        width: 250
      },
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
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Modified On',
        field: 'updated_time',
        sort: 'asc',
        width: 150
      },
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