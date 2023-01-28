import React from "react";
import styles from "./employee.module.css";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/adminSidebar/Sidebar";


export const AddProject = () => {
  let token =localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    status: "ongoing",
    flowChart:""
  });

  function addProject(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:8081/add`, project,token)
      .then((response) => {
        alert(response.data);
		window.location.reload(true)
      })
      .catch((error) => {
        alert("Enter all details");
        //navigate("/");
      });
  }

  return (
    <>
    <Sidebar />
    <div className="project">
      <div className={styles.addemp}>
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header shadow" + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>Add Project</div>
          </div>

          <div
            className={"card-body shadow" + styles.cardBody}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example"></div>
            <div className="container">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name of the Project
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={project.projectName}
                    required
                    onChange={(e) =>
                      setProject({ ...project, projectName: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail2" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail2"
                    value={project.description}
                    required
                    onChange={(e) =>
                      setProject({ ...project, description: e.target.value })
                    }
                  />
                 
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail2" className="form-label">
                    Flowchart
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail2"
                    value={project.flowChart}
                    required
                    height="100px"
                    width="20px"
                    onChange={(e) =>
                      setProject({ ...project, flowChart: e.target.value })
                    }
                  />
                 
                </div>
                <button
                  type="submit"
                  class="btn btn-danger"
                  onClick={(e) => {
                       addProject(e);
                  }}
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
