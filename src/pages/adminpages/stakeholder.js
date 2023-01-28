import React from "react";
import styles from "./employee.module.css";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/adminSidebar/Sidebar";


export const EditStakeHolder = () => {
return (
	<div className="stakeholder">
	<h1>edit</h1>
	</div>
);
};

export const AddStakeHolder = () => {
	let token =localStorage.getItem("token");
	const config = {
	  headers: { Authorization: `Bearer ${token}` },
	};
	const [state, setState] = useState({
		file:""
	  }
	
	  )
	  const [stakeholder, setStakeholder] = useState({
		firstName: "",
		lastName: "",
		gender: "Male",
		email: "",
		designation: "",
		projectName: "",
	  });
	  
	  function addStakeHolder(e) {
	  let file = state.file
	  let formdata = new FormData()
	  formdata.append('file',file)
	  formdata.append('userId',stakeholder.email)
		// console.log(employee);
		e.preventDefault();
		axios.post(`http://localhost:8081/stakeHolder/add`, stakeholder,config)
		  .then(() => {
			  axios({
				url: 'http://localhost:8081/stakeholder/profile-image/add',
				method: "POST",
				data: formdata
			  }).then((response) => {
				alert("StakeHolder Added Successfully");
				   window.location.reload(true);
				})}).catch((error) => {
			alert("Enter all details");
			//navigate("/");
		  });
	  }
	function handleFile(e){
	  let file = e.target.files[0]
	  setState({ ...state, file:file })
	  
	}
return (
	<>
	<Sidebar />
	<div className="stakeholder">
	<div className={styles.addemp}>
	  <div className={"card shadow " + styles.cardSetup}>
		<div className={"card-header shadow" + styles.headerCrd}>
		  <div className={"text-center " + styles.cartMain}>Add Stakeholder</div>
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
				  value={stakeholder.firstName}
				  required
				  onChange={(e) =>
					setStakeholder({ ...stakeholder, firstName: e.target.value })
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
				  value={stakeholder.lastName}
				  required
				  onChange={(e) =>
					setStakeholder({ ...stakeholder, lastName: e.target.value })
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
				  value={stakeholder.email}
				  required
				  onChange={(e) =>
					setStakeholder({ ...stakeholder, email: e.target.value })
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
					  checked
					  onChange={(e) =>
						setStakeholder({ ...stakeholder, gender: e.target.value })
					  }
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
					  value="Female"
					  onChange={(e) =>
						setStakeholder({ ...stakeholder, gender: e.target.value })
					  }
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
			  <div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">
				  Designation
				</label>
				<input
				  type="text"
				  class="form-control"
				  id="exampleInputEmail1"
				  value={stakeholder.designation}
				  required
				  onChange={(e) =>
					setStakeholder({ ...stakeholder, designation: e.target.value })
				  }
				/>
			  </div>
			  <div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">
				  Project Name
				</label>
				<input
				  type="text"
				  class="form-control"
				  id="exampleInputEmail1"
				  value={stakeholder.projectName}
				  required
				  onChange={(e) =>
					setStakeholder({ ...stakeholder, projectName: e.target.value })
				  }
				/>
			  </div>
			  
			  
			  <button
				type="submit"
				class="btn btn-danger"
				onClick={(e) => {
				  addStakeHolder(e);
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
