
import Sidebar from "../../../components/employeeSidebar/Sidebar"
import styles from "./CyberSecurityPolicy.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function CyberSecurityPolicy(){
    let token =localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);
    const [document, setDocument] = useState();
    useEffect(() => {

        axios.get('http://localhost:8081/document/2',config)
            .then((response) => {
                console.log(response.data);
                setDocument(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      if (!isLoading) {
    return(
        <>
        <Sidebar />
        <div className={styles.csp}>
        <iframe
                            src={`data:application/pdf;base64,${document}`}
                            title={document['fileName']}
                            width='100%'
                            height='100%'
                        />
        {/* <h1>Cyber Security Policy</h1>
        <p>This section deals with all things digital at work. We want to set some guidelines for using computers, 
            phones, our internet connection and social media to ensure security and protect our assets.</p>
        <h2>Internet usage</h2>
        <p>Our corporate internet connection is primarily for business. But, you can occasionally use our connection for personal purposes as long as they don’t interfere with your job responsibilities. Also, we expect you to temporarily halt personal activities that slow down our internet connection (e.g. uploading photos) if you’re asked to.

You must not use our internet connection to:

Download or upload obscene, offensive or illegal material.
Send confidential information to unauthorized recipients.
Invade another person’s privacy and gain access to sensitive information.
Download or upload pirated movies, music, material or software.
Visit potentially dangerous websites that can compromise our network and computers’ safety.
Perform unauthorized or illegal actions, like hacking, fraud or buying/selling illegal goods.</p>
        <h2>Cell Phone</h2>
        <p>We allow use of cell phones at work. But, we also want to ensure that your devices won’t distract you from your work or disrupt our workplace. We ask you to follow a few simple rules:

Use your cell phone in a manner that benefits your work (business calls, productivity apps, calendars.)
Keep personal calls brief and use an empty meeting room or common area so as not to disturb your colleagues.
Avoid playing games on your phone or texting excessively.
Don’t use your phone for any reason while driving a company vehicle.
Don’t use your phone to record confidential information.
Don’t download or upload inappropriate, illegal or obscene material using our corporate internet connection.</p>
        <h2>Corporate email</h2>
        <p>Email is essential to our work. You should use your company email primarily for work, but we allow some uses of your company email for personal reasons.

Work-related use. You can use your corporate email for work-related purposes without limitations. For example, you can sign up for newsletters and online services that will help you in your job or professional growth.
Personal use. You can use your email for personal reasons as long as you keep it safe, and avoid spamming and disclosing confidential information. For example, you can send emails to friends and family and download ebooks, guides and other safe content for your personal use.</p> */}
        </div>
        </>
    );
      }
}

export default CyberSecurityPolicy;