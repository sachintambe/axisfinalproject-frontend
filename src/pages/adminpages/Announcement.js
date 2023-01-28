// import React from "react";

// export const EditAnnouncements = () => {
// return (
// 	<div className="announcements">
// 	<h1>edit announcements page</h1>
// 	</div>
// );
// };
import React from "react";
import styles from "./announcements.module.css";
import axios from "axios";
import Sidebar from "../../components/adminSidebar/Sidebar";
import { useState } from 'react';

export const EditAnnouncements = () => {
	let token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	// const [images, setImages] = useState({
	// 	image: ""
	// })
	let formdata = new FormData();
	const [announcement, setAnnouncement] = useState({
		subject: "",
		body: ""
	});
	function addAnnouncements(e) {
		// let uploadImage = images.image
		let formdata = new FormData()
		// formdata.append('UploadedImage', uploadImage)//  formdata.append('userId',employee.username)   
		console.log(announcement);
		e.preventDefault();
		axios
			.post(`http://localhost:8080/send`, announcement, config)
			.then(() => {
					alert("Announcement Sent ");
					window.location.reload(true);
				}
			)
	}
	return (
	<div>
	    <Sidebar />
		<div className="announcement">
			<div className={styles.addemp}>
				<div className={"card shadow " + styles.cardSetup}>
				<div className={"card-header shadow" + styles.headerCrd}>
					<div className={"text-center " + styles.cartMain}>Add Announcements</div>
				</div>
				<div className={"card-body shadow" + styles.cardBody} data-bs-spy="scroll" data-bs-target="#navbar-example"> 
					<div className="card-text" id="navbar-example"></div>
					<div className="container">
						<form>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Subject</label>
								<input type="text" class="form-control" id="exampleInputEmail1" placeholder="add subject" value={announcement.subject} required onChange={(e) => setAnnouncement({ ...announcement, subject: e.target.value })} />
							</div>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Announcement</label>
								<textarea type="text" class="form-control" id="exampleInputEmail1" placeholder="post an annoucement!" value={announcement.body} required onChange={(e) => setAnnouncement({ ...announcement, body: e.target.value })} />
							</div>
							<button type="submit" class="btn btn-danger" 
							onClick={(e) => { 
								addAnnouncements(e); 
							}}>
								Send
							</button>
						</form>
					</div>
				</div> 
			</div>
		</div>
	</div>
    </div>
	);
}



