import React from "react";
import img from "../assets/blueBackgroundImage.jpg";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import DeleteIcon from "@mui/icons-material/Delete";
const CartAndOrder = () => {
  return (
    <div className="bg-white  mx-2 my-2">
      <h1 className="flex justify-center pb-2 font-bold text-2xl">CheckOut</h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto ">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Product
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4">
                      <div className="left">
                        <img
                          className="w-8 h-8 lg:w-16 lg:h-16  rounded-full"
                          src={img}
                          alt=""
                        />
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      <div className="flex gap-2">
                        <div className="right">
                          <h1>ProductName</h1>
                          <h1>Color: Black</h1>
                          <h1>size: 40</h1>
                          <div className="flex gap-4">
                            <div>
                              <SystemUpdateAltIcon></SystemUpdateAltIcon>
                            </div>
                            <div>
                              <DeleteIcon></DeleteIcon>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-2xl font-semibold text-slate-950">
                      PKR 2000
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {" "}
                      <div className="flex border w-20 h-8 border-black rounded-2xl">
                        <h2 className="font-bold text-xl text-red-700">-</h2>
                        <div className="w-12 h-3 py-1 font-bold flex justify-center">
                          1
                        </div>
                        <h2 className="font-bold text-xl text-green-700">+</h2>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-2xl font-semibold text-slate-950">
                      PKR 2000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-2">
        <div className="left w-full"></div>
        <div className="right">
          <div className="flex">
            <h1>Sub Total : </h1>
            <h1 className="text-2xl font-semibold text-slate-950">PKR 8000</h1>
          </div>
          <h1>Taxes, shipping and discounts codes calculated at checkout</h1>
          <button className="px-2 hover:bg-slate-900 hover:text-white hover:text-lg py-2 bg-slate-300 rounded-2xl font-semibold">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartAndOrder;
