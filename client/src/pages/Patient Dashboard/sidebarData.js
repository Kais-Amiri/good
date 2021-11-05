import React from "react";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Articles",
    path: "",
    icon: <IoIcons.IoIosPaper className="icon" />,
  },
  {
    title: "Doctors",
    path: "/doctors",
    icon: <IoIcons.IoMdPeople className="icon" />,
  },
  {
    title: "Appointments",
    path: "/appointments",
    icon: <CgIcons.CgCalendarDates className="icon" />,
  },
  {
    title: "Medical Prescription",
    path: "/MedicalPrescription",
    icon: <GoIcons.GoFile className="icon" />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile className="icon" />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle className="icon" />,
  },
];
