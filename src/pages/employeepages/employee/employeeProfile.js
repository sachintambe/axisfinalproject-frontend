import React from "react";
import styles from "./employeeProfile.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/employeeSidebar/Sidebar";

function EmployeeProfile() {
  let token =localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const params = useParams();
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    const setID = params.id;
    if(params.user === "employee"){
    axios.get(`http://localhost:8081/employee/ ${setID}`,config).then((response) => {
      setEmp(response.data);
    
    });}
    else{
      axios.get(`http://localhost:8081/manager/ ${setID}`,config).then((response) => {
        setEmp(response.data);
      
      });


    }
  }, []);

  return (
    <>
    <Sidebar />
    <div className={styles.profile}>
     
        <div className={"card "}>
    
          <img src={`http://localhost:8081/${params.user}/profile-image/${emp.username}`} className={styles.img} alt="..." />
          <div className="card-body mb-1">
            <div className={styles.name }>{emp.firstName} {emp.lastName}</div>

            <hr/>
            
            <div className={styles.id}>Employee ID</div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.id}</div>

            <div className={styles.id}>Designation</div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.designation}</div>

            <div className={styles.id}>Project</div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.projectName}</div>

            <div className={styles.id}>Joined on </div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.dateOfJoining}</div>

            <div className={styles.id}>gender</div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.gender}</div>

            <div className={styles.id}>Mobile Number</div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.mobileNumber}</div>

            <div className={styles.id}>Email</div>
            <div className={styles.colon}>:</div>
            <div className={styles.eid}>{emp.username}</div>
          
          </div>
        </div>
     
    </div>
    </>
  );
}

export default EmployeeProfile;
