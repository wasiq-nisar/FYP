// todo here we will add ( add assesst, sell assest to the employee)
// todo 2 forms bnaaa lety ha jis ma data add our remove kar sakin gay
import React from "react";

const AssestManagment = () => {
  return (
    <div className="mx-3 my-3 bg-white shadow-sky-200">
      <h1 className="flex justify-center text-2xl font-bold py-3">
        Company Assessts
      </h1>
      {/* assest name full 3/4 length text-box */}
      <div className="flex justify-center">
        <label className="font-semibold">Name</label>
      </div>
      <div className="flex justify-center pb-4">
        <input
          type="text"
          className="border  border-black rounded-lg w-3/4 pl-4 font-bold text-xl"
        />
      </div>
      {/* assest value,date,and owenership in 3 equal size textboxes */}
      <div className="flex w-full gap-3 py-6">
        <div className="w-1/3">
          <div className="flex-col">
            <label className="font-semibold px-3">Name</label>
            <div className="px-3">
              <input
                type="text"
                className="border  border-black rounded-lg  pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex-col">
            <label className="font-semibold">Name</label>
            <div>
              <input
                type="text"
                className="border  border-black rounded-lg  pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex-col">
            <label className="font-semibold">Name</label>
            <div>
              <input
                type="date"
                className="border  border-black rounded-lg  pl-4 font-bold text-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button to add ,update delete assest */}
      <div className="flex gap-10 justify-center py-6">
        <button className="bg-green-600 text-white rounded-xl px-2 py-2">
          Add Assest
        </button>
        <button className="bg-yellow-400 text-white rounded-xl px-2 py-2">
          Update Assest
        </button>
        <button className="bg-red-500 text-white rounded-xl px-2 py-2">
          Delete Assest
        </button>
      </div>
    </div>
  );
};

export default AssestManagment;
