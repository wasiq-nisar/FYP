import React from "react";
import Slider from "@mui/material/Slider";

const AddEmployee = () => {
  return (
    <div className="w-full ">
      <div className="bg-white mx-4 my-5 px-4 py-4 rounded-lg shadow-white">
        <h1 className="text-xl  flex justify-center font-bold">Add Manager</h1>
        <div className="flex w-full gap-4 pb-2">
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Name</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <label className="font-bold">Last Name</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>
        {/* first row ended */}
        <div className="pb-2">
          <div>
            <label className="font-bold">Email</label>
          </div>
          <div>
            <input
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
            />
          </div>
        </div>
        {/* phone and cnic */}
        <div className="flex w-full gap-4 pb-2">
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Contact Number</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <label className="font-bold">Cnic</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="pb-2">
          <div>
            <label className="font-bold">Address</label>
          </div>
          <div>
            <input
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
            />
          </div>
        </div>
        {/* Username and password */}
        <div className="flex w-full gap-4 pb-2">
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Username</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <label className="font-bold">Password</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4 pb-2">
          <div className="">
            <div>
              <label className="font-bold">Image</label>
            </div>
            <div>
              <input
                type="file"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>
        {/* 1 button for register Add Manager */}
        <div className="flex justify-center pb-2">
          <button className="border font-semibold rounded-xl px-3 py-1 hover:transition hover:ease-in-out hover:bg-orange-600 hover:text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
