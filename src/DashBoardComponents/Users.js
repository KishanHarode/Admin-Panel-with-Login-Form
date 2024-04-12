import React, { useEffect, useState } from 'react';
import Header from './Header';
import { SideBar } from './SideBar';
import Footer from './Footer';
import '../StylingDashBoard/table.css';
import { Link } from 'react-router-dom';


const Users = () => {
  const [PatientData, setPatientData] = useState([]);
  const apiUrl = 'http://localhost:3001/PatientData';
  const fetchData = () => {
    try {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
          setPatientData(json)
          console.log(json)
        })
    } catch (error) {
      console.warn("Error Fetching Data", error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const handleDelete = async (id) => {
    const confirmMessage = () => {
     return window.confirm("Are You Sure, You Want To Delete These Data ?");
    }
    if (confirmMessage()) {
      try {
        await fetch(`${apiUrl}/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((json) => {
            console.log("Data Deleted Succesfully");
            fetchData();
          })
      } catch (error) {
        console.warn("Data Deleting Error", error)
      }

    }
  }
  
  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <div className='d-flex'>
        <SideBar />
        <div className='CustomUser container-fluid border border-danger table-responsive p-1' style={{boxSizing:"border-box",maxHeight:"410px"}}>
          <table className='table table-hover table-bordered' style={{width:"100%",fontFamily: "Arial, sans-serif"}}>
            <thead style={{position:"sticky",top:"0"}}>
              <tr>
                <th scope='col' style={{padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Patient ID</th>
                <th scope='col' style={{padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Patient Name</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Age</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Gender</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Date of Birth</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Blood Type</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Diagnosis</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Treatment</th>
                <th scope="col" style={{ padding: "10px", fontSize: "15px", backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                PatientData.length === 0 && <tr>
                  <td colSpan={9} style={{fontFamily:"sans-serif",fontWeight:"light"}}>Data Not Found</td>
                </tr>
              }
              {
                PatientData.map((Patient)=>{
                   return(
                    <tr key={Patient.id} style={{fontSize:"14px",textAlign:"center",fontFamily:"sans-serif"}}>
                      <th scope='col'>{Patient.id}</th>
                      <td>{Patient.PatientName}</td>
                      <td>{Patient.Age}</td>
                      <td>{Patient.Gender}</td>
                      <td>{Patient.date}</td>
                      <td>{Patient.BloodType}</td>
                      <td>{Patient.Diagnosis}</td>
                      <td>{Patient.Treatment}</td>
                      <td>
                        <div className='d-flex justify-content-evenly'>
                          <Link to={`/update/${Patient.id}`}>
                            <button className='btn btn-outline-success'>Update</button>
                          </Link>
                          <button className='btn btn-outline-danger' onClick={()=>handleDelete(Patient.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                   )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Users;
