import Sidebar from "../../../components/employeeSidebar/Sidebar"
import styles from "./BCP.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function BCP(){
    let token =localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);
    const [document, setDocument] = useState();
    useEffect(() => {

        axios.get('http://localhost:8081/document/1',config)
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
        <div className={styles.bcp}>
        <iframe
                            src={`data:application/pdf;base64,${document}#toolbar=0`}
                            title={document['fileName']}
                            width='100%'
                            height='100%'
                        />
            
            {/* <h1>Employee Code of Conduct</h1>
            <h2>Dress code</h2>
            <p>Our company’s official dress code is [Business/ Business Casual/ Smart Casual/ Casual.] This includes [slacks/ loafers/ blouses/ boots.] However, an employee’s position may also inform how they should dress. If you frequently meet with clients or prospects, please conform to a more formal dress code. 
                We expect you to be clean when coming to work and avoid wearing clothes that are unprofessional (e.g. workout clothes.)
As long as you conform with our guidelines above, we don’t have specific expectations about what types of clothes or accessories you should wear.
We also respect and permit grooming styles, clothing and accessories that are dictated by religious beliefs, ethnicity or disability.</p>

            <h2>Code of Conduct</h2>
            <h3>Cordial Atmosphere</h3>
            <p>To work effectively, all of us need a healthy and safe work environment. We provide a work environment free of coercion, 
                discrimination, and harassment. Therefore, respect, inclusiveness and shared ethical values are at the heart of our core values. 
                Irrespective of your department and rank, you should conform with 
                our equal opportunity policy in all aspects of the work, from recruitment and performance evaluation to interpersonal relations.</p>
            <h3>Compliance With Law</h3>
            <p>We comply with all laws, whether local, national or regional. All our employees, and those acting on our behalf must protect the 
                Company’s legality. They should comply with all environmental, safety and fair dealing laws. 
                Violations of law can result in significant harm to the Company, including financial penalties, denial of government 
                contracting privileges, imprisonment for criminal misconduct and damage to our business relationships and reputation.</p>

            <h3>Company Confidential Information</h3>
            <p>For any Company, its confidential information is a valuable asset and every director, employee, and agent of the Company must protect it. Confidential information includes all non-public information. It also includes personal information obtained from any source in the course of business. An important element of 
                such protection is maintaining the confidentiality of confidential information and other proprietary information.</p>

            <h3>Conflict Of Interest</h3>
            <p>We must avoid situations involving an actual or potential conflict of interest so that even the slightest doubt about our integrity is not raised. To avoid conflicts of interest and any appearance of favouritism, ensure that you do not work directly for, supervise or make employment decisions about a family member. Personal or romantic involvement with a competitor, supplier, or another employee of the Company might affect your ability to exercise good judgment on behalf of the Company. This could lead to a conflict of interest. Personal relationships and romantic liaisons between employees who are in a manager-employee reporting structure may lead to team management challenges and reduced morale. 
                Such relationships must be disclosed to the manager immediately who may take appropriate corrective action.</p> */}
        </div>
        </>
    );
            }
}

export default BCP;