import React from "react";
import img from "../assets/blueBackgroundImage.jpg";
const UpdateManager = () => {
  return (
    <div className="bg-white  mx-2 my-2">
      <h1 className="flex justify-center pb-2 font-bold text-2xl">
        Update Manager Info
      </h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto ">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Pay
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={img}
                        alt=""
                      />
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-4 my-5 px-4 py-4 rounded-lg shadow-white">
        <h1 className="text-xl  flex justify-center font-bold">
          Update Manager
        </h1>
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

export default UpdateManager;
