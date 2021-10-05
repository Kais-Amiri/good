import React from "react";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Articles",
    path: "/doctor/articles",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Patients",
    path: "/doctor/patients",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Appointments",
    path: "/doctor/appointments",
    icon: <CgIcons.CgCalendarDates />,
    cName: "nav-text",
  },
  // {
  //   title: "Medical Prescription",
  //   path: "/team",
  //   icon: <GoIcons.GoFile />,
  //   cName: "nav-text",
  // },
  {
    title: "Profile",
    path: "/doctor/profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
