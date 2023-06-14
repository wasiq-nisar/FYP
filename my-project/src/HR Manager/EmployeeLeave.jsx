import React from "react";

const EmployeeLeave = () => {
  return (
    <div className="mx-2 my-2 h-[400px]  flex-col justify-center items-center bg-white">
      <div className="relative top-[120px]">
        <h1 className="px-2 py-2 text-2xl flex justify-center font-bold">
          Employee Leave Request
        </h1>
        <div className="flex-col">
          <div>
            <label className="px-4 flex justify-center text-2xl fond-bold">
              Reason Of Leave
            </label>
          </div>
          <div className="flex justify-center">
            <input
              className="border-b-4 w-3/4 flex justify-center rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="px-2 my-2 flex justify-center py-2 text-2xl rounded-2xl hover:text-3xl hover:bg-slate-800 hover:text-white bg-slate-200"
              type="submit"
              value="Add Leave"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeave;
