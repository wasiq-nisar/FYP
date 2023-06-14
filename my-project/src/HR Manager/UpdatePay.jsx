import React from "react";
import img from "../assets/blueBackgroundImage.jpg";

const UpdatePay = () => {
  return (
    <div className="bg-white  mx-2 my-2">
      <h1 className="flex justify-center pb-2 font-bold text-2xl">
        Update Employee Pay
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

      <div className="py-2">
        <label className="px-4 text-2xl fond-bold">Update Pay</label>
        <input
          className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
          type="number"
        />
        <div className="flex justify-center">
          <input
            className="px-2 py-2 my-2 flex justify-center bg-gray-300 rounded-3xl"
            type="submit"
            value="Update Pay"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatePay;
