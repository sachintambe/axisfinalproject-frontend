import React from "react";
import styles from "./Project.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  FaUser,
  FaUserFriends,
  FaUserCircle,
  FaTasks,
  FaArrowDown,
} from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
function Project() {
  const [isLoading, setIsLoading] = useState(true);
  let token =localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    const setID = params.id;
    axios.get(`http://localhost:8081/project/ ${setID}`,config).then((response) => {
      setIsLoading(false);
      setProject(response.data);
      console.log(response.data);

      console.log(isLoading);
    });
  }, []);
  if (!isLoading) {
  return (
    <>
    <Sidebar />
    <div className={styles.project}>
      <div className="card mb-5">
        <div className={styles.heading} style={{ textAlign: "center" }}>
          {project.projectName}
        </div>
        <hr />
        <div className={"card-body"} style={{ fontSize: "17px" }}>
          <div className={styles.id}>Project ID</div>
          <div className={styles.colon}>:</div>
          <div className={styles.eid}>{project.projectId}</div>

          <div className={styles.id}>Status</div>
          <div className={styles.colon}>:</div>
          <div className={styles.eid}>{project.status}</div>

          <div className={styles.id}>Description</div>
          <div className={styles.colon}>:</div>
          <div className={styles.eid}>{project.description}</div>

          <p>
            <button
              class="btn btn-outline-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              See FlowChart
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <img className={styles.img} src={project.flowChart}></img>
            {/* <img  src={project.flowChart}></img> */}
          </div>

          <hr />
          <div className={styles.sh}>
            <FaUserFriends className={styles.shicon}></FaUserFriends>Stake
            Holders
          </div>
          <div>
            {project?.stakeHolders?.map((item, index) => {
              return (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/${item.id}`}
                  key={index}
                >
                  <div className={styles.item}>
                    <div className={styles.name}>
                      <div className={styles.shnameicon}>
                        {" "}
                        <FaUserCircle />
                      </div>
                      <div className={styles.shname}>
                        {item.firstName} {item.lastName}
                        <p style={{ fontSize: "15px" }}>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <hr />
          <div className={styles.sh}>
            <FaTasks className={styles.shicon}></FaTasks>Modules
          </div>

          {project?.modules?.map((item, index) => {
            return (
              <div className="card m-3 p-3">
                <div
                  className={styles.module}
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  {item.moduleName}
                </div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <hr />
                    <div className={styles.id}>Module ID</div>
                    <div className={styles.colon}>:</div>
                    <div className={styles.eid}>{item.moduleId}</div>

                    <div className={styles.id}>Description</div>
                    <div className={styles.colon}>:</div>
                    <div className={styles.eid}>{item.moduleDescription}</div>
                    <hr />
                    <div className={styles.manager}>
                      <FaUser className={styles.managericon}></FaUser>
                      Manager
                    </div>
                    <div>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/${item.id}`}
                        key={index}
                      >
                        <div className={styles.item}>
                          <div className={styles.name}>
                            <div className={styles.shnameicon}>
                              {" "}
                              <FaUserCircle />
                            </div>
                            <div className={styles.shname}>
                              {item.manager.firstName} {item.manager.lastName}
                              <p style={{ fontSize: "15px" }}>
                                {item.manager.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <hr />
                    <div className={styles.sh}>
                      <FaUserFriends className={styles.shicon}></FaUserFriends>
                      TEAM MEMBERS
                    </div>
                    <div>
                      {item?.employees?.map((item, index) => {
                        return (
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={`/${item.id}`}
                            key={index}
                          >
                            <div className={styles.item}>
                              <div className={styles.name}>
                                <div className={styles.shnameicon}>
                                  {" "}
                                  <FaUserCircle />
                                </div>
                                <div className={styles.shname}>
                                  {item.firstName} {item.lastName}
                                  <p style={{ fontSize: "15px" }}>
                                    {item.designation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
        }
}

export default Project;
