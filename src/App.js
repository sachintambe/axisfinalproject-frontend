import "./App.css";
import Sidebar from "./components/employeeSidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditAnnouncements } from "./pages/adminpages/Announcement";
import { AddEmployee } from "./pages/adminpages/employee";
import { EditEmployee } from "./pages/adminpages/EditEmployee";
import { AddProject} from "./pages/adminpages/project";
import { EditProject } from "./pages/adminpages/EditProject";
import { AddStakeHolder, EditStakeHolder } from "./pages/adminpages/stakeholder";
// import { EditNewsFeed } from "./pages/adminpages/newsFeed";
import { AddModule } from "./pages/adminpages/module";
import AllProjects from "./pages/employeepages/project/allProjects";
import BCP from "./pages/employeepages/policies/BCP";
import IMPolicy from "./pages/employeepages/policies/IMPolicy";
import CyberSecurityPolicy from "./pages/employeepages/policies/CyberSecurityPolicy";
import Products from "./pages/employeepages/products/Products";
import AllEmployees from "./pages/employeepages/employee/allEmployees";
import EmployeeProfile from "./pages/employeepages/employee/employeeProfile";
import NewsFeed from "./pages/employeepages/newsfeed/NewsFeed";
import Project from "./pages/employeepages/project/Project";
import Login from "./pages/login/login"
import YourProfile from "./pages/employeepages/yourProfile/YourProfile";
import ProtectedRoutes from "./InProtectedRoutes";
import { AddNews } from "./pages/adminpages/newsFeed";
import AdminNewsFeed from "./pages/adminpages/AdminNewsFeed";


function App() {
  
 
  return (
    
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
                
        <Route path ="/" element={<Login/>}></Route>


        <Route element={<ProtectedRoutes />}>
        <Route path ="/products" element={<Products/>}></Route>
        <Route path="/bcp" element={<BCP />}></Route>
        <Route path="/csp" element={<CyberSecurityPolicy />}></Route>
        <Route path="/imp" element={<IMPolicy />}></Route>
        <Route path="/:user/:id" element={<EmployeeProfile />}></Route>
        <Route path="/:id" element={<Project />}></Route>
        <Route path="/admin-newsfeed" element={<AdminNewsFeed/>}></Route>

        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/employees" element={<AllEmployees />} />

        <Route path="/yourprofile" element={<YourProfile />} />

        <Route path="/edit/announcements" element={<EditAnnouncements />} />
        <Route path="/edit/newsfeed" element={<AddNews />} />
        <Route path="/edit/employee" element={<EditEmployee />} />
        <Route path="/add/employee" element={<AddEmployee />} />
        {/* <Route path="/edit/stakeholder" element={<EditStakeHolder />} /> */}
        <Route path="/add/stakeholder" element={<AddStakeHolder />} />
        <Route path="/add/project" element={<AddProject />} />
        <Route path="/add/module" element={<AddModule />} />
        <Route path="/edit/project" element={<EditProject />} />
        
        </Route>


      </Routes>
    </Router>

    
  );


}

export default App;
