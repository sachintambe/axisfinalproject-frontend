import React from "react";
import styles from "./employee.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/adminSidebar/Sidebar";
// export const EditEmployee = () => {
//   let token =localStorage.getItem("token");
//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
  // };
  // const [updateState, setUpdateState] = useState({
  //   updateFile:""
  // }

  // )
	// let updateFormdata = new FormData();
  // const [employeeData, setEmployeeData] = useState({
   
  //   password: "",
  //   mobileNumber: 0,
  //   gender:"Male",
  //   designation: "",
  //   projectName: "",
  //   moduleName: ""
  // });
  
  // function updateEmployee(e) {
  //   let updateFile = updateState.file
  //   let updateFormdata = new FormData()
  //   updateFormdata.append('updateFile',updateFile)
  //   updateFormdata.append('userId',employeeData.username)
  //   console.log(employeeData);
  //     e.preventDefault();
  //     axios
  //       .put(`http://localhost:8081/update-employee/{id}`, employeeData,config)
  //       .then(() => {
  //         if(employeeData.designation == "Manager" || employeeData.designation == "MANAGER" || employeeData.designation == "manager"){
  //           // axios({
            //   url: 'http://localhost:8081/manager/profile-image/add',
            //   method: "PUT",
            //   data: updateFormdata
            // })
            // .then((response) => {
            //   alert("Manager Updated Successfully");
            //      window.location.reload(true);
            //   })

          //     alert("Manager Updated Successfully");
          //     window.location.reload(true);
          // }else{
      // axios({
      //   url: 'http://localhost:8081/employee/profile-image/add',
      //   method: "PUT",
      //   data: formdata
      // }).then((response) => {
      //   alert("Employee Updated Successfully");
      //      window.location.reload(true);
      //   })
    //           alert("Employee Updated Successfully");
    //           window.location.reload(true);
    //   }
    // })
        // .catch((error) => {
        //   alert("Enter all details");
        //   //navigate("/");
        // });
    // }
  // function handleFile(e){
  //   let file = e.target.files[0]
  //   setUpdateState({ ...updateState, file:file })
    
  // }


  // const [project, setProject] = useState([{ 'projectName': '', 'id': '' }])
  //   const [project1, setProject1] = useState([])


  //   useEffect(() => {
  //       const fetchData = async () => {
  //           const response = await fetch(`http://localhost:8081/allprojects`);
  //           const newData = await response.json();
  //           setProject(newData);
  //           // console.log(newData);
  //       };
  //       fetchData();
  //   }, [])
  //   const handleChange = (event) => {
  //       console.log(event.target.value);
  //       setProject1(event.target.value);
  //   }

  // return (
  //   <>
  //   <Sidebar/>
   
  //   <div className="employee">
  //     <div className={styles.addemp}>
  //       <div className={"card shadow " + styles.cardSetup}>
  //         <div className={"card-header shadow" + styles.headerCrd}>
  //           <div className={"text-center " + styles.cartMain}>Edit Employee</div>
  //         </div>

  //         <div
  //           className={"card-body shadow" + styles.cardBody}
  //           data-bs-spy="scroll"
  //           data-bs-target="#navbar-example"
  //         >
  //           <div className="card-text" id="navbar-example"></div>
  //           <div className="container">
  //             <form>
	// 		  <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                    Image
  //                 </label>
  //                 <input
  //                   type="file"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   required
  //                   onChange={(e) =>
  //                     handleFile(e)
  //                   }
  //                 />
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   First Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   value={employeeData.firstName}
  //                   required
  //                   onChange={(e) =>
  //                     setEmployeeData({ ...employeeData, firstName: e.target.value })
  //                   }
  //                 />
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Last Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   value={employeeData.lastName}
  //                   required
  //                   onChange={(e) =>
  //                     setEmployeeData({ ...employeeData, lastName: e.target.value })
  //                   }
  //                 />
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Email
  //                 </label>
  //                 <input
  //                   type="text"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   value={employeeData.username}
  //                   required
  //                   onChange={(e) =>
  //                     setEmployeeData({ ...employeeData, username: e.target.value })
  //                   }
  //                 />
  //               </div>
	// 			<div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Password
  //                 </label>
  //                 <input
  //                   type="text"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   value={employeeData.password}
  //                   required
  //                   onChange={(e) =>
  //                     setEmployeeData({ ...employeeData, password: e.target.value })
  //                   }
  //                 />
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Gender
  //                 </label>
  //                 <div class="form-check">
  //                   <input
  //                     class="form-check-input"
  //                     type="radio"
  //                     name="flexRadioDefault1"
  //                     id="flexRadioDefault1"
	// 				             value="Male"
					      
	// 				            onChange={(e) =>
  //                           setEmployeeData({ ...employeeData, gender: e.target.value })
	// 				            }
  //                   />
  //                   <label class="form-check-label" for="flexRadioDefault1">
  //                     Male
  //                   </label>
  //                 </div>
  //                 <br></br>
  //                 <div class="form-check">
  //                   <input
  //                     class="form-check-input"
  //                     type="radio"
  //                     name="flexRadioDefault2"
  //                     id="flexRadioDefault2"
	// 				            value="Female"
	// 				            onChange={(e) =>
  //                          setEmployeeData({ ...employeeData, gender: e.target.value })
	// 				            }
  //                   />
  //                   <label class="form-check-label" for="flexRadioDefault2">
  //                     Female
  //                   </label>
  //                 </div>
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Mobile Number
  //                 </label>
  //                 <input
  //                   type="text"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   value={employeeData.mobileNumber}
  //                   required
  //                   onChange={(e) =>
  //                     setEmployeeData({ ...employeeData, mobileNumber: e.target.value })
  //                   }
  //                 />
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Designation
  //                 </label>
  //                 <input
  //                   type="text"
  //                   class="form-control"
  //                   id="exampleInputEmail1"
  //                   value={employeeData.designation}
  //                   required
  //                   onChange={(e) =>
  //                     setEmployeeData({ ...employeeData, designation: e.target.value })
  //                   }
  //                 />
  //               </div>
  //               <div class="mb-3">
  //                 <label for="exampleInputEmail1" class="form-label">
  //                   Project Name
  //                 </label>
  //                 <select className="form-control" value={project1} onChange={handleChange}>
  //                     <option value="">Choose Project Name</option>
  //                     {project.map(project => (
  //                        <option value={project.projectName} key={project.id} >{project.projectName}</option>
  //                       ))
  //                     }
  //                 </select>
  //                 {/* <input
                //     type="text"
                //     class="form-control"
                //     id="exampleInputEmail1"
                //     value={employeeData.projectName}
                //     required
                //     onChange={(e) =>
                //       setEmployeeData({ ...employeeData, projectName: e.target.value })
                //     }
                //   /> */}
                // </div>
//                 <div class="mb-3">
//                   <label for="exampleInputEmail1" class="form-label">
//                     Module Name
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="exampleInputEmail1"
//                     value={employeeData.moduleName}
//                     required
//                     onChange={(e) =>
//                       setEmployeeData({ ...employeeData, moduleName: e.target.value })
//                     }
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   class="btn btn-danger"
//                   onClick={(e) => {
//                       EditEmployee(e);
//                   }}
//                 >
//                   ADD
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
   
//     </>
    
//   );
//  };


export const AddEmployee = () => {
  let token =localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [state, setState] = useState({
    file:""
  }

  )
	let formdata = new FormData();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    gender: "Male",
    mobileNumber: 0,
    designation: "",
    projectName: "",
    moduleName: "",
  });
  
  function addEmployee(e) {
  let file = state.file
  let formdata = new FormData()
  formdata.append('file',file)
  formdata.append('userId',employee.username)
	console.log(employee);
    e.preventDefault();
    axios
      .post(`http://localhost:8081/employee/addemployee`, employee,config)
      .then(() => {
        if(employee.designation == "Manager" || employee.designation == "MANAGER" || employee.designation == "manager"){
          axios({
            url: 'http://localhost:8081/manager/profile-image/add',
            method: "POST",
            data: formdata
          }).then((response) => {
            alert("Manager Added Successfully");
               window.location.reload(true);
            })
        }else{
		axios({
      url: 'http://localhost:8081/employee/profile-image/add',
      method: "POST",
      data: formdata
    }).then((response) => {
      alert("Employee Added Successfully");
         window.location.reload(true);
      })
    }
  })
      .catch((error) => {
        alert("Enter all details");
        //navigate("/");
      });
  }
function handleFile(e){
  let file = e.target.files[0]
  setState({ ...state, file:file })
  
}
const [project, setProject] = useState([{ 'projectName': '', 'id': '' }])
    const [project1, setProject1] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8081/allprojects`);
            const newData = await response.json();
            setProject(newData);
            // console.log(newData);
        };
        fetchData();
    }, [])
    const handleChange = (event) => {
        console.log(event.target.value);
        setProject1(event.target.value);
    }

  return (
    <>
    <Sidebar />
    <div className="employee">
      <div className={styles.addemp}>
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header shadow" + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>Add Employee</div>
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
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.firstName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, firstName: e.target.value })
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
                    value={employee.lastName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, lastName: e.target.value })
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
                    value={employee.username}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, username: e.target.value })
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
                    value={employee.password}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, password: e.target.value })
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
					  value="Male"
					  onChange={(e) =>
						setEmployee({ ...employee, gender: e.target.value })
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
					  value="Female"
					  onChange={(e) =>
						setEmployee({ ...employee, gender: e.target.value })
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
                    value={employee.mobileNumber}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, mobileNumber: e.target.value })
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
                    value={employee.designation}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, designation: e.target.value })
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

                        {project.map(project => (
                            <option value={project.projectName} key={project.id} >{project.projectName}</option>
                            ))
                        }
                  </select>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Module Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.moduleName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, moduleName: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger"
                  onClick={(e) => {
                      addEmployee(e);
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
