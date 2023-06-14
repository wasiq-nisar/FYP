// todo this is the view to update that particular Assest

import React from "react";

const UpdateAssestsInfo = () => {
  return (
    <div className="flex bg-white shadow-2xl mx-2 my-2">
      <div className="left w-1/2">
        <div className="flex">
          <div>Assest Name</div>
          <div>Assest Value</div>
        </div>
        <div className="flex">
          <div>Assest Name</div>
          <div>Assest Value</div>
        </div>
        <div className="flex">
          <div>Assest Name</div>
          <div>Assest Value</div>
        </div>
        <div className="flex">
          <div>Assest Name</div>
          <div>Assest Value</div>
        </div>
      </div>

      {/* todo this is the right side */}
      <div className="right w-1/2 py-2">
        {/* start of div */}
        <div className="flex pb-2">
          <div className="w-1/5">
            <label className="pr-3">Name</label>
          </div>
          <div className="w-4/5 pr-2">
            <input
              className="border-b-4 border-gray-500 text-lg focus:outline-none focus:border-gray-700 focus:border-b-4 w-full  px-3 "
              type="text"
            />
          </div>
        </div>
        {/* end of this main div */}
        <div className="flex pb-2 ">
          <div className="w-1/5">
            <label className="pr-3">Name</label>
          </div>
          <div className="w-4/5 pr-2">
            <input
              className="border-b-4 border-gray-500 text-lg focus:outline-none focus:border-gray-700 focus:border-b-4 w-full  px-3 "
              type="text"
            />
          </div>
        </div>
        <div className="flex  pb-2">
          <div className="w-1/5">
            <label className="pr-3">Name</label>
          </div>
          <div className="w-4/5 pr-2">
            <input
              className="border-b-4 border-gray-500 text-lg focus:outline-none focus:border-gray-700 focus:border-b-4 w-full  px-3 "
              type="text"
            />
          </div>
        </div>
        <div className="flex pb-2">
          <div className="w-1/5">
            <label className="pr-3">Name</label>
          </div>
          <div className="w-4/5 pr-2">
            <input
              className="border-b-4 border-gray-500 text-lg focus:outline-none focus:border-gray-700 focus:border-b-4 w-full  px-3 "
              type="text"
            />
          </div>
        </div>
        <div className="flex pb-2">
          <div className="w-1/5">
            <label className="pr-3">Name</label>
          </div>
          <div className="w-4/5 pr-2">
            <input
              className="border-b-4 border-gray-500 text-lg focus:outline-none focus:border-gray-700 focus:border-b-4 w-full  px-3 "
              type="text"
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            className="text-black bg-gray-200 px-2 py-1 rounded-xl hover:bg-gray-800 hover:text-white"
            value="Update Assest"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateAssestsInfo;
