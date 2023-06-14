import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const Dashboard = () => {
  return (
    <div>
      <div className="homeCards px-4 py-6 gap-6 w-full flex">
        <div className="card1 w-1/3 border rounded-xl shadow-2xl bg-white">
          <h4 className="px-6 py-2 font-semibold text-xl">Revenue</h4>
          <div className="flex justify-between px-6 py-2">
            <div>
              <h2 className="font-bold">$2,415</h2>
            </div>
            <div>
              {" "}
              <h6>
                -11.4{" "}
                <span className="text-red-600">
                  <TrendingDownIcon />
                </span>
              </h6>
            </div>
          </div>
          <h5 className="px-6 py-2 font-semibold">Compared to last month</h5>
        </div>
        <div className="card2 w-1/3 border bg-white rounded-xl shadow-2xl">
          <h4 className="px-6 py-2 font-semibold text-xl">Revanue</h4>
          <div className="flex justify-between px-6 py-2">
            <div>
              <h2 className="font-bold">$2,415</h2>
            </div>
            <div>
              {" "}
              <h6>
                -11.4{" "}
                <span className="text-red-600">
                  <TrendingDownIcon />
                </span>
              </h6>
            </div>
          </div>
          <h5 className="px-6 py-2 font-semibold">Compared to last month</h5>
        </div>
        <div className="card3 w-1/3 bg-white border rounded-xl shadow-2xl">
          <h4 className="px-6 py-2 font-semibold text-xl">Revanue</h4>
          <div className="flex justify-between px-6 py-2">
            <div>
              <h2 className="font-bold">$2,415</h2>
            </div>
            <div>
              {" "}
              <h6>
                -11.4{" "}
                <span className="text-red-600">
                  <TrendingDownIcon />
                </span>
              </h6>
            </div>
          </div>
          <h5 className="px-6 py-2 font-semibold">Compared to last month</h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
