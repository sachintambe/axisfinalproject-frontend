import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import axisaral from "../../images/axisaral.png";
import axios from "axios";
const Nav = styled.div`
  // background: #15171c;
  background: #97144d;
  height: 10%;
  top: 0;
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  // background:#00000008;
  // width: 250px;
  width: 16%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10%;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
  let token =localStorage.getItem("token");
	const config = {
	  headers: { Authorization: `Bearer ${token}` },
	};
	const [emp, setEmp] = useState();
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(sidebar);

  useEffect(() => {
    axios.get("http://localhost:8081/employee/",config).then((response) => {
		console.log(response.data)
      setEmp(response.data.firstName);
    });
  }, []);
  const logout = () => {  localStorage.clear();
    window.location.href = '/';
  };


return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		{/* <img src="../../images/axissaral" ></img> */}
		<img
            src={axisaral}
            style={{ textAlign: "center", marginLeft: "10%", color: "white" }}
          ></img>
          <FaIcons.FaUserCircle
            style={{ marginLeft: "50%", color: "white", fontSize: "300%" }}
          ></FaIcons.FaUserCircle>
          <div
            class="nav-item dropdown"
            style={{ textAlign: "center", marginLeft: "1%", color: "white" ,fontSize: "125%"}}
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {emp}
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/yourprofile">
                  Your Profile
                </a>
              </li>
			        <hr class="dropdown-divider"/>
              <li>
                <a class="dropdown-item" onClick={logout}>
                 Logout
                </a>
              </li>
            </ul>
          </div>
          <div>
        </div>
		</Nav>




		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			{/* <NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon> */}
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
