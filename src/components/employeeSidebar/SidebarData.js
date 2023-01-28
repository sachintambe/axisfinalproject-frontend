import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as  GrIcons from "react-icons/gr";
export const SidebarData = [
{
	title: "News Feed",
	path: "/newsfeed",
	icon: <FaIcons.FaEnvelopeOpenText />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Explore Products",
	path: "/products",
	icon: <FaIcons.FaServicestack />,
},
{
	title: "Company Policies",
	// path: "/events",
	icon: <FaIcons.FaTasks />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Business Conduct ",
		path: "/bcp",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Cyber Security ",
		path: "/csp",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Incident Management ",
		path: "/imp",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Live Projects",
	path: "/projects",
	icon: <FaIcons.FaProjectDiagram />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "All Employees",
	path: "/employees",
	icon: <FaIcons.FaUsers />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},

];
