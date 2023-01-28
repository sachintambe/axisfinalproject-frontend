
import React from "react";
import styles from "./employee.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/adminSidebar/Sidebar";
import { useParams } from "react-router-dom";

export const EditEmployee = () => {
    let token =localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // let formdata = new FormData();
    // const [employee, setEmployee] = useState({
    //   firstName: "",
    //   lastName: "",
    //   username: "",
    //   password: "",
    //   gender: "Male",
    //   mobileNumber: 0,
    //   designation: "",
    //   projectName: "",
    //   moduleName: "",
    // });


    const[id,setId]=useState();
    const[firstName,setFirstName]= useState("");
    const[lastName,setLastName]= useState("");
    const[gender,setGender]= useState("");
    const[username,setUsername]=useState("")
    const[password,setPassword]= useState("");
    const[mobileNumber,setMobileNumber]= useState();
    const[designation,setDesignation]= useState("");
    const[projectName,setProjectName]= useState([]);
    const[moduleName,setModuleName]=useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const employee = {firstName,lastName,gender,username,password,mobileNumber,designation,projectName,moduleName};
      console.log(employee);
      axios.put(`http://localhost:8081/update-employee/${id}`, employee).then((response) => {
          console.log(response);
          alert("Employee Updated");
          window.location.reload("true");
      })
  }

      // const params=useParams();
      // useEffect(()=>{
      //   getEmployeeDetails();
      // },[])
      // const getEmployeeDetails = async()=>{
      //   console.warn(params)
      //   let result = await fetch(`http://localhost:8081/employee/${params.id}`);
      //   result=await result.json;
      //   console.warn(result);
      //   setFirstName(result.firstName);
      //   setLastName(result.lastName);
      //   setGender(result.gender);
      //   setUsername(result.username);
      //   setPassword(result.password);
      //   setDesignation(result.designation);
      //   setMobileNumber(result.mobileNumber);
      //   setProjectName(result.projectName);
      //   setModuleName(result.moduleName);
      // }

      // const UpdateEmployee=async()=>{
      //   console.warn(firstName,lastName,gender,username,password,designation,mobileNumber,projectName,moduleName)
      // }
   
      const [project1, setProject1] = useState([])
      useEffect(() => {
          const fetchData = async () => {
              const response = await fetch(`http://localhost:8081/allprojects`);
              const newData = await response.json();
              setProject1(newData);
              // console.log(newData);
          };
          fetchData();
      }, [])
      const handleChange = (event) => {
          console.log(event.target.value);
          setProject1(event.target.value);
      }

      //Module Names
      const [module1, setModule1] = useState([])
      useEffect(() => {
          const fetchData = async () => {
              const response = await fetch(`http://localhost:8081/module/module`);
              const newData = await response.json();
              setModule1(newData);
              // console.log(newData);
          };
          fetchData();
      }, [])
      const handleChange1 = (event) => {
          console.log(event.target.value);
          setModule1(event.target.value);
      }
  
    return (
      <>
      <Sidebar />
      <div className="employee">
        <div className={styles.addemp}>
          <div className={"card shadow " + styles.cardSetup}>
            <div className={"card-header shadow" + styles.headerCrd}>
              <div className={"text-center " + styles.cartMain}>Edit Employee</div>
            </div>
  
            <div
              className={"card-body shadow" + styles.cardBody}
              data-bs-spy="scroll"
              data-bs-target="#navbar-example"
            >
              <div className="card-text" id="navbar-example"></div>
              <div className="container">
                <form>
                {/* <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                       Image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="exampleInputEmail1"
                      required
                      onChange={(e) =>
                        handleFile(e)
                      }
                    />
                  </div> */}
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={firstName}
                      required
                      onChange={(e) =>
                        setFirstName(e.target.value )
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={lastName}
                      required
                      onChange={(e) =>
                        setLastName(e.target.value )
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={username}
                      required
                      onChange={(e) =>
                        setUsername(e.target.value )
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={password}
                      required
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Gender
                    </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={gender}
                        onChange={(e) =>
                          setGender(e.target.value )
                        }
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Male
                      </label>
                    </div>
                    <br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value={gender}
                        onChange={(e) =>
                          setGender( e.target.value)
                        }
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Female
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={mobileNumber}
                      required
                      onChange={(e) =>
                        setMobileNumber(e.target.value )
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={designation}
                      required
                      onChange={(e) =>
                        setDesignation (e.target.value) 
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Project Name
                    </label>
                    {/* <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={employee.projectName}
                      required
                      onChange={(e) =>
                        setEmployee({ ...employee, projectName: e.target.value })
                      }
                    /> */}
                    <select className="form-control" value={project1} onChange={handleChange}>
                    <option value="">Choose Project Name</option>
  
                          {project1.map(project => (
                              <option value={project.projectName} key={project.id} >{project.projectName}</option>
                              ))
                          }
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Module Name
                    </label>
                    <select className="form-control" value={module1} onChange={handleChange1}>
                    <option value="">Choose Module Name</option>
  
                          {module1.map(module => (
                              <option value={module.moduleName} key={module.id} >{module.moduleName}</option>
                              ))
                          }
                    </select>

                  </div>
                  {/* <EditEmployee firstName={props.firstName} lastName={props.lastName} /> */}
                  <button
                    type="submit"
                    class="btn btn-danger"
                    onClick={(e) => {
                        EditEmployee(e);
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
}
