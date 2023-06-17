import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const PayrollManagment = () => {
  const [data, setData] = useState([]);

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
              <Link key={params.row._id} to={"/UpdatePay/" + params.row._id}>
                <button className="bg-yellow-300 text-black px-2 py-2 rounded-xl">
                  Update Pay
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

export default PayrollManagment;
