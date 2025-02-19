import { CiSettings } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoCalendarClearSharp } from "react-icons/io5";
import { MdArticle, MdOutlineSpeakerNotes } from "react-icons/md";
import { RiLogoutBoxFill, RiLogoutBoxLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

export const navigation = [
  {
    id: 1,
    title: "Building Permit",
    path: "",
    icons: <FaRegBuilding />,
  },
  {
    id: 2,
    title: "Locational Clearance",
    path: "",
    icons: <IoCalendarClearSharp />,
  },
  {
    id: 3,
    title: "Fencing Permit",
    path: "",
    icons: <MdArticle />,
  },
  {
    id: 4,
    title: "Special Permit",
    path: "",
    icons: <MdOutlineSpeakerNotes />,
  },
  {
    id: 5,
    title: "Reports",
    path: "",
    icons: <TbReportSearch />,
  },

  {
    id: 6,
    title: "Settings",
    path: "",
    icons: <IoMdSettings />,
  },
  {
    id: 7,
    title: "Logout",
    path: "",
    icons: <RiLogoutBoxFill />,
  },
];
