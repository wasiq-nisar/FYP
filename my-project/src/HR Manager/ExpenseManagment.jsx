import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "../assets/mypic.jpg";
const ExpenseManagment = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const params = useParams();
  const MarkPresent = async () => {
    const userid = params.id;
    const description = "null";
    const value = "present";
    // todo idher hum ne url change karna ha
    const res = await fetch("http://localhost:8000/api/attendence/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value,
        userid,
        description,
      }),
    });
    const data = await res.json();
    console.log("the attendence data is :", data);
    if (res.status === 422 || !data) {
      window.alert("Error Attendence  failed");
    } else if (res.status === 200) {
      window.alert("Attendence Marked succesfull");
      navigate("/EmployeeAttendence/");
    }
  };

  const callAboutUrlFromBackend = async () => {
    let res;
    try {
      res = await fetch("http://localhost:8000/api/users/", {
        method: "GET",
      });
    } catch (e) {
      console.log("rror", e);
    }

    if (res.status === 400) {
      console.log("no credential found");
      //navigate("/Login");
      return;
    }
    //* if data is not found
    if (res.status === 200);
    {
      const data = await res.json();
      //* is data ma sarraa user ka dataaa jay ga
      setData(data);
    }
  };

  useEffect(() => {
    callAboutUrlFromBackend();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 135 },

    {
      field: "image",

      headerName: "Image",
      width: 60,

      renderCell: (params) => {
        console.log(params.row.image);
        return (
          <div>
            <img
              className="w-12 h-8 rounded-full"
              src={
                "http://localhost:8000/uploads/" +
                params.row.image.split("/").at(-1)
              }
            />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 130,
    },
    { field: "phone", headerName: "phone", width: 130 },
    { field: "cnic", headerName: "cnic", width: 130 },
    { field: "address", headerName: "address", width: 130 },
    {
      field: "username",
      headerName: "Username",
      type: "number",
      width: 90,
    },
    {
      field: "type",
      headerName: "User Type",
      type: "number",
      width: 90,
    },

    {
      feild: "actions",
      headerName: "actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex">
            <div>
              {/* todo is tarha hum url ma wo id send karin gay */}
              <Link key={params.row._id} to={"/AddExpense/" + params.row._id}>
                <button className="bg-green-700 text-white px-2 py-2 rounded-xl">
                  Add Expense
                </button>
              </Link>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mx-2 my-4 bg-white">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          pageSize={5}
          disableRowSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default ExpenseManagment;
