import React from "react";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
import styles from "./YourProfile.module.css";
import { useState, useEffect, useNavigate } from "react";
import axios from "axios";
import { FaFileDownload } from "react-icons/fa";
function YourProfile() {
  // const navigate = useNavigate();
  const [designation, setDesignation] = useState();
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8081/employee/`, config).then((response) => {
      console.log(response.data);
      if (
        response.data.designation == "Manager" ||
        response.data.designation == "manager"
      )
        setDesignation("manager");
      else setDesignation("employee");
      setEmp(response.data);
    });
  }, []);
  return (
    <>
      <Sidebar />
      <div className={styles.yourprofile}>
        <div className={styles.profile}>
        <div className={"card "} style={{width:'40rem'}}>
          <img
            src={`http://localhost:8081/${designation}/profile-image/${emp.username}`}
            className={styles.img}
            alt=""
          />
          <div className="card-body mb-1">
            <div className={styles.name}>
              {emp.firstName} {emp.lastName}
            </div>

            <hr />

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
        <div className={styles.crd}>
          <div class="list-group">
            <div className={styles.download}>Download<FaFileDownload/> </div>

            <button
              type="button"
              class="list-group-item list-group-item-action"
              onClick={(e) => {
                if (designation == "manager") {
                  fetch(
                    `http://localhost:8081/manager/files/salaryslip.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "salaryslip.pdf";
                      alink.click();
                    });
                  });
                } else
                  fetch(
                    `http://localhost:8081/employee/files/salaryslip.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "salaryslip.pdf";
                      alink.click();
                    });
                  });
              }}
            >
              Salary Slip
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              onClick={(e) => {
                if (designation == "manager") {
                  fetch(
                    `http://localhost:8081/manager/files/incrementletter.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "incrementletter.pdf";
                      alink.click();
                    });
                  });
                } else
                  fetch(
                    `http://localhost:8081/employee/files/incrementletter.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "incrementletter.pdf";
                      alink.click();
                    });
                  });
              }}
            >
              Increment Letter
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              onClick={(e) => {
                if (designation == "manager") {
                  fetch(
                    `http://localhost:8081/manager/files/joiningletter.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "joiningletter.pdf";
                      alink.click();
                    });
                  });
                } else
                  fetch(
                    `http://localhost:8081/employee/files/joiningletter.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "joiningletter.pdf";
                      alink.click();
                    });
                  });
              }}
            >
              Joining Letter
            </button>
            
          
          </div>
        </div>
      </div>
    </>
  );
}

export default YourProfile;
