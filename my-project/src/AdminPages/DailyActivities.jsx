import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const DailyActivities = () => {
  return (
    <div className="mx-3 mt-5 shadow-2xl font-bold text-2xl flex-col justify-center bg-white">
      <h1 className="flex justify-center">Daily Activities</h1>
      <div className="flex-col py-3 px-3">
        <div>
          <label className="font-bold">Activities And Description</label>
        </div>
        <div className="flex w-full gap-5">
          <div className="w-2/5">
            <input
              type="text"
              className="border w-full border-black rounded-lg  pl-4 font-bold text-xl"
            />
          </div>
          <div className="w-3/5">
            <input
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
            />
          </div>
        </div>
      </div>
      {/* this is for the add daily activities button */}
      <div className="py-3 flex = justify-center">
        <button className="rounded-xl hover:bg-teal-400 hover:transition hover:ease-in-out px-3 py-2 hover:text-teal-950">
          <AddCircleIcon className="bg-green-600 text-6xl text-white"></AddCircleIcon>
          Add Activity
        </button>
      </div>
      {/* here he will see all the task for that day */}
      <div className="w-full pb-3 flex justify-center  px-3">
        <div className="px-3 shadow-2xl bg-white">
          <h1 className="flex text-2xl font-bold py-3 justify-center">
            Daily Tasks
          </h1>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyActivities;
