import React from "react";
import styles from "./employee.module.css"
import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/adminSidebar/Sidebar";
export const AddModule = () => {
  let token =localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [module, setModule] = useState({
    moduleName: "",
    projectName: ""
  });

  function addModule(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:8081/module/add`, module,config)
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
      <div className="module">
        <div className={styles.addemp}>
          <div className={"card shadow " + styles.cardSetup}>
            <div className={"card-header shadow" + styles.headerCrd}>
              <div className={"text-center " + styles.cartMain}>Add Module</div>
            </div>
  
            <div
              className={"card-body shadow" + styles.cardBody}
              data-bs-spy="scroll"
              data-bs-target="#navbar-example"
            >
              <div className="card-text" id="navbar-example"></div>
              <div className="container">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Name of the Module
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                        value={module.moduleName}
                      required
                        onChange={(e) =>
                      	setModule({ ...module, moduleName: e.target.value })
                        }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Name of the Project
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={module.projectName}
                      required
                        onChange={(e) =>
                      	setModule({ ...module, projectName: e.target.value })
                        }
                    />
                  </div>
                  {/* <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                      Status 
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Ongoing</option>
                      <option value="1">Live</option>
                    </select>
                    
                  </div> */}
                  <button
                    type="submit"
                    class="btn btn-danger"
                    onClick={(e) => {
                        addModule(e);
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