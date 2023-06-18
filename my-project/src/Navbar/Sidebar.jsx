import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";
import { useState } from "react";
import {
  SideBarLinks,
  nouser,
  HRSideBarLinks,
  InventorySideBarLinks,
  AdminSideBarLinks,
} from "../Data/SideBarValue";
const Sidebar = () => {
  //* this is for the orderAdmin
  const [data, setData] = useState(SideBarLinks);
  //* this is for the nouser
  const [nouserdata, setNoUser] = useState(nouser);
  //* this is for the hr
  const [hrdata, hrsetData] = useState(HRSideBarLinks);
  // * this is for the Inventory
  const [inventorydata, inventorySetData] = useState(InventorySideBarLinks);
  // *tis is for the admin
  const [admindata, adminsetData] = useState(AdminSideBarLinks);

  const { state, dispatch } = useContext(userContext);
  const UserLoggedIN = () => {
    if (state === "" || state === null) {
      return (
        <div className="dashboard py-2 px-2 flex-col  text-[11px]">
          {nouserdata.map((l) => (
            <div className="group">
              <div className="py-1 px-2 hover:transition hover:ease-in-out  hover:bg-teal-500 hover:rounded-md hover:text-white">
                <h1
                  key={l.id}
                  className="text-xl px-2 font-semibold hover:text-white text-black"
                >
                  {l.name}
                </h1>
                <div className="w-full  text-black">
                  <hr />
                </div>
              </div>
              {l.submenu && (
                <div className="hidden group-hover:block hover:block">
                  {l.sublinks.map((sblinks) => (
                    <div className="">
                      <h1 className="px-4 text-lg font-semibold">
                        {sblinks.title}
                      </h1>
                      <div className="w-full  text-black">
                        <hr />
                      </div>
                      <div className="">
                        {sblinks.sublink.map((sblink) => (
                          <div className="flex">
                            <div>
                              <ArrowRightAltIcon></ArrowRightAltIcon>
                            </div>
                            <div>
                              <h1 className="px-6 text-base " key={sblink.sid}>
                                {sblink.name}
                              </h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    if (state === "admin") {
      return (
        <div className="dashboard py-2 px-2 flex-col  text-[11px]">
          {admindata.map((l) => (
            <NavLink to={l.link}>
              <div className="group">
                <div className="py-2  hover:transition hover:ease-in-out  hover:bg-teal-500 hover:rounded-md hover:text-white">
                  <h1
                    key={l.id}
                    className="text-xl px-1 font-semibold hover:text-white text-black"
                  >
                    {l.name}
                  </h1>
                  <div className="w-full  text-black">
                    <hr />
                  </div>
                </div>
                {l.submenu && (
                  <div className="hidden group-hover:block hover:block">
                    {l.sublinks.map((sblinks) => (
                      <div className="">
                        <h1 className="px-4 text-lg font-semibold">
                          {sblinks.title}
                        </h1>
                        <div className="w-full  text-black">
                          <hr />
                        </div>
                        <div className="">
                          {sblinks.sublink.map((sblink) => (
                            <div className="flex">
                              <div>
                                <ArrowRightAltIcon></ArrowRightAltIcon>
                              </div>
                              <div>
                                <h1
                                  className="px-6 text-base "
                                  key={sblink.sid}
                                >
                                  {sblink.name}
                                </h1>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      );
    }
    if (state == "hrmanager") {
      return (
        <div className="dashboard py-2 px-2 flex-col  text-[11px]">
          {HRSideBarLinks.map((l) => (
            <NavLink to={l.link}>
              <div className="group">
                <div className="py-2  hover:transition hover:ease-in-out  hover:bg-teal-500 hover:rounded-md hover:text-white">
                  <h1
                    key={l.id}
                    className="text-xl px-1 font-semibold hover:text-white text-black"
                  >
                    {l.name}
                  </h1>
                  <div className="w-full  text-black">
                    <hr />
                  </div>
                </div>
                {l.submenu && (
                  <div className="hidden group-hover:block hover:block">
                    {l.sublinks.map((sblinks) => (
                      <div className="">
                        <h1 className="px-4 text-lg font-semibold">
                          {sblinks.title}
                        </h1>
                        <div className="w-full  text-black">
                          <hr />
                        </div>
                        <div className="">
                          {sblinks.sublink.map((sblink) => (
                            <div className="flex">
                              <div>
                                <ArrowRightAltIcon></ArrowRightAltIcon>
                              </div>
                              <div>
                                <h1
                                  className="px-6 text-base "
                                  key={sblink.sid}
                                >
                                  {sblink.name}
                                </h1>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      );
    }
    if (state == "orderadmin") {
      return (
        <div className="dashboard py-2 px-2 flex-col  text-[11px]">
          {data.map((l) => (
            <NavLink to={l.link}>
              <div className="group">
                <div className="py-2 px-2 hover:transition hover:ease-in-out  hover:bg-teal-500 hover:rounded-md hover:text-white">
                  <h1
                    key={l.id}
                    className="text-xl px-2 font-bold hover:text-white text-black"
                  >
                    {l.name}
                  </h1>
                  <div className="w-full  text-black">
                    <hr />
                  </div>
                </div>
                {l.submenu && (
                  <div className="hidden group-hover:block hover:block">
                    {l.sublinks.map((sblinks) => (
                      <div className="">
                        <h1 className="px-4 text-lg font-semibold">
                          {sblinks.title}
                        </h1>
                        <div className="w-full  text-black">
                          <hr />
                        </div>
                        <div className="">
                          {sblinks.sublink.map((sblink) => (
                            <div className="flex">
                              <div>
                                <ArrowRightAltIcon></ArrowRightAltIcon>
                              </div>
                              <div>
                                <h1
                                  className="px-6 text-base "
                                  key={sblink.sid}
                                >
                                  {sblink.name}
                                </h1>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      );
    }
    if (state == "inventorymanager") {
      return (
        <div className="dashboard py-2 px-2 flex-col  text-[11px]">
          {inventorydata.map((l) => (
            <NavLink to={l.link}>
              <div className="group">
                <div className="py-2 px-2 hover:transition hover:ease-in-out  hover:bg-teal-500 hover:rounded-md hover:text-white">
                  <h1
                    key={l.id}
                    className="text-xl px-2 font-bold hover:text-white text-black"
                  >
                    {l.name}
                  </h1>
                  <div className="w-full  text-black">
                    <hr />
                  </div>
                </div>
                {l.submenu && (
                  <div className="hidden group-hover:block hover:block">
                    {l.sublinks.map((sblinks) => (
                      <div className="">
                        <h1 className="px-4 text-lg font-semibold">
                          {sblinks.title}
                        </h1>
                        <div className="w-full  text-black">
                          <hr />
                        </div>
                        <div className="">
                          {sblinks.sublink.map((sblink) => (
                            <div className="flex">
                              <div>
                                <ArrowRightAltIcon></ArrowRightAltIcon>
                              </div>
                              <div>
                                <h1
                                  className="px-6 text-base "
                                  key={sblink.sid}
                                >
                                  {sblink.name}
                                </h1>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      );
    }
  };
  return (
    <>
      <UserLoggedIN />
    </>
  );
};

export default Sidebar;
