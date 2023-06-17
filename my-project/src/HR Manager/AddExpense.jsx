import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    ename: "",
    edetail: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginUser({ ...loginUser, [name]: value });
  };
  const params = useParams();

  const LeaveRequest = async (e) => {
    e.preventDefault();
    const userid = params.id;
    const ename = loginUser.ename;
    const edetail = loginUser.edetail;
    // todo idher hum ne url change karna ha
    const res = await fetch("http://localhost:8000/api/expense/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ename,
        userid,
        edetail,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Error expence not added");
    } else if (res.status === 200) {
      window.alert("Expence Marked succesfull");
      navigate("/ExpenseManagment/");
    }
  };

  return (
    <div className="mx-2 my-2 h-[400px]  flex-col justify-center items-center bg-white">
      <div className="relative top-[120px]">
        <h1 className="px-2 py-2 text-2xl flex justify-center font-bold">
          Add Expense By Employee
        </h1>
        <div className="flex-col">
          <div>
            <label className="px-4 flex justify-center text-2xl fond-bold">
              Expense Name
            </label>
          </div>
          <div className="flex justify-center">
            <input
              className="border-b-4 w-3/4 flex justify-center rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
              name="ename"
              value={loginUser.ename}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label className="px-4 flex justify-center text-2xl fond-bold">
              Expense detail
            </label>
          </div>
          <div className="flex justify-center">
            <textarea
              className="border-b-4 w-3/4 flex justify-center rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
              name="edetail"
              value={loginUser.edetail}
              onChange={handleInputs}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="px-2 my-2 flex justify-center py-2 text-2xl rounded-2xl hover:text-3xl hover:bg-slate-800 hover:text-white bg-slate-200"
              type="submit"
              value="Add Expense"
              onClick={LeaveRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
