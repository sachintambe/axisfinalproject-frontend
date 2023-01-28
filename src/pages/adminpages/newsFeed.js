import "./newsFeed.module.css";
import { Container } from "@mui/system";
import axios from "axios";
import styles from "./newsFeed.module.css"



import React, { useState } from 'react';
import Sidebar from "../../components/adminSidebar/Sidebar";
export const AddNews = () => {
	let token = localStorage.getItem("token"); 
	const config = { headers: { Authorization: `Bearer ${token}` }, 
    }; 
	const [images, setImages] = useState({ image: "" })  
	 let formdata = new FormData(); 
	 const [news, setNews] = useState({ 
		description: "", 
		imageUrl:""
	}); 
	 function addnews(e) {
		let uploadImage = images.image 
		 let formdata = new FormData() 
		  formdata.append('UploadedImage', uploadImage)
		  //  formdata.append('userId',employee.username)  
		   console.log(news);  
		     e.preventDefault();  
			   axios   
			      .post(`http://localhost:8081/news/add`, news,config)   
				     .then(() => {             
						     
							alert("News Added Successfully");         
							window.location.reload(true);      
						})    
					} 
				    
				// .catch((error) => {       
				// 	alert("Enter all details");        //navigate("/");     
				//  });  
	
	function handleImage(e){  
		let file = e.target.files[0] 
		 setImages({ ...images, image:file })  
	}

		return (
			<>
				<Sidebar />
				<div className="news">
					<div className={styles.addnews}>
						<div className={"card shadow " + styles.cardSetup}>
							<div className={"card-header shadow" + styles.headerCrd}>
								<div className={"text-center " + styles.cartMain}>Add News</div>
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
											News
											</label>
											<textarea
											
											 	
												type="text"
												class="form-control"
												id="exampleInputEmail1"
												placeholder="add news"
												value={news.description}
												required
												onChange={(e) => setNews({...news,description:e.target.value})}
											/>
										</div>


										<div class="mb-3">
											<label for="exampleInputEmail1" class="form-label">
											imageUrl
											</label>
											<input
											
											 	
												type="text"
												class="form-control"
												id="exampleInputEmail1"
												placeholder="add news"
												value={news.imageUrl}
												required
												onChange={(e) => setNews({...news,imageUrl:e.target.value})}
											/>
										</div>
										






										<button
											type="submit"
											class="btn btn-danger"
											onClick={(e) => {
												addnews(e);
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