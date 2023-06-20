import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import Sidebar from "../Navbar/Sidebar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";
import { useState } from "react";
const Topbar = () => {
  const [clicked, isClicked] = useState(false);

  const { state, dispatch } = useContext(userContext);
  const UserLoggedIN = () => {
   
    if (state === "" || state === null) {
       console.log("the state value is ", state);
      return (
        <>
          {" "}
          <Link to="/">
            <h1 className="text-xl hover:cursor-pointer font-semibold bg-slate-400 hover:transition hover:bg-slate-900 hover:text-stone-50 hover:duration-500 rounded-xl  px-3 py-1">
              Login
            </h1>
          </Link>
        </>
      );
    } else {
      return (
        <Link to="/logout">
          <h1 className="text-xl hover:cursor-pointer font-semibold bg-slate-400 hover:transition hover:bg-slate-900 hover:text-stone-50 hover:duration-500 rounded-xl  px-3 py-1">
            Logout
          </h1>
        </Link>
      );
    }
  };

  return (
    <>
      <div className="flex w-full px-4 py-3 bg-white justify-between">
        <div className="flex ">
          <h2 className="text-2xl">My Logo</h2>
        </div>
        <div className="flex py-1 gap-4">
          <NotificationsIcon></NotificationsIcon>
          <LanguageIcon></LanguageIcon>
          <SettingsIcon></SettingsIcon>
          <UserLoggedIN />
          <div className="block lg:hidden" onClick={() => isClicked(!clicked)}>
            <i
              className={`${
                clicked
                  ? "fa-sharp fa-solid fa-xmark"
                  : "fa-sharp fa-solid fa-bars"
              }`}
            ></i>
          </div>
        </div>
      </div>

      <div
        className={`py-8 w-full absolute duration-700 ease-in-out ${
          (clicked ? "left-0" : "left-[-100%]",
          clicked ? "relative" : "absloute")
        }  lg:hidden bg-white h-screen`}
      >
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Topbar;
