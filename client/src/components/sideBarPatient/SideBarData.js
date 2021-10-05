import React from "react";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Articles",
    path: "/patient/articles",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Doctors",
    path: "/patient/doctors",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Appointments",
    path: "/patient/appointment",
    icon: <CgIcons.CgCalendarDates />,
    cName: "nav-text",
  },
  {
    title: "Medical Prescription",
    path: "/patient/MedicalPrescription",
    icon: <GoIcons.GoFile />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/patient/profile",
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
