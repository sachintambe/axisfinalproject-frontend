import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./allEmployees.module.css";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
function AllEmployees() {
  let token =localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [emp, setEmp] = useState([]);
  const [user, setUser] = useState("employee");

  const handleChange = (e) => {
    axios.get(`http://localhost:8081/${e.target.value}`,config).then((response) => {
      setUser(e.target.value);
      setEmp(response.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8081/employee",config).then((response) => {
      setEmp(response.data);
    });
  }, []);
  return (
    <>
      <Sidebar />
      <div className={styles.all}>
        <div className="container ">
          <ToggleButtonGroup
            className={styles.toggle}
            color="primary"
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="employee">Employees</ToggleButton>
            <ToggleButton value="manager">Managers</ToggleButton>
          </ToggleButtonGroup>
          <div class="row">
            {emp?.map((item, index) => {
              return (
                <div class="col-12  col-md-4">
                  <Link
                    style={{ textDecoration: "none", color: "#15171c" }}
                    to={`/${user}/${item.id}`}
                    key={index}
                  >
                    <div
                      class={"card text-center  m-5 p-5 shadow " + styles.cards}
                      style={{ backgroundColor: "whitesmoke" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title ">{item.firstName}</h5>
                        <p>ID : {item.id}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className={styles.allemp}>
            {emp.map((item, index) => {
              return (
                <div className={"col-12 " + styles.card} key={index}>
                  <div className={"card m-4 p-1 shadow-sm " + styles.crdSetup}>
                    <div className="row g-0">
                      <div
                        className="col-md-4"
                        style={{
                          backgroundImage: `url(${item?.imageURL})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <img
                          src={item.imageURL}
                          className="img-fluid"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8" style={{ padding: "2%" }}>
                        <div className="card-body">
                          <h5 className="card-title">{item.empId}</h5>
                          <p className="card-text">{item.firstName}</p>
                          <p className="card-text">{item.lastName}</p>
                          <p className="card-text">
                            <small className="text-muted">
                               {item.mobileNumber}
                            </small>
                          </p>

                       

                       
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
      </div>
    </>
  );
}

export default AllEmployees;
