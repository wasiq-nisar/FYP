import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import img from "../assets/blueBackgroundImage.jpg";
import { useState, useEffect } from "react";
const UpdateAssests = () => {
  //todo is ma hum data to dosri file se export kar ke yaha lay gay
  // todo idher hum ne sab data(row) rowData ma pass kar diya ha
  // const [rowData, setRowData] = useState(rows);

  const [data, setData] = useState([]);
  const callAboutUrlFromBackend = async () => {
    let res;
    try {
      res = await fetch("http://localhost:8000/api/assets/", {
        method: "GET",
      });
    } catch (e) {
      console.log("error", e);
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
      console.log(data);
    }
  };

  useEffect(() => {
    callAboutUrlFromBackend();
  }, []);

  // todo these are the heading tags of the table
  const columns = [
    { field: "_id", headerName: "ID", width: 135 },
    
    {
      //* is se b datashow ho jay ga magar renderCell se data ko hum customize kar sakin gay
      field: "name",
      // todo his is the table header name
      headerName: "Asset Name",
      width: 130,
      // todo idher hum image b add kar sakty ha our jo b data ho color wegrar b de sakty ha
      
    },
    { field: "description", headerName: "Asset Description", width: 130 },
    {
      field: "price",
      headerName: "Asset Price",
      type: "number",
      width: 90,
    },
    {
      field: "dateofpurchase",
      headerName: "Date of Purchase",
      width: 160,
     
    },
    // ! important
    //* this is how we create the additional html items in table
    // todo here we can edit and delete buttons
    {
      feild: "actions",
      headerName: "actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex">
            <div>
              {/* todo is tarha hum url ma wo id send karin gay */}
              <Link
                to={"/UpdateAssestsInfo/" + params.row._id}
              >
                <button className="bg-yellow-300 text-black px-2 py-2 rounded-xl">
                  Update
                </button>
              </Link>
            </div>
            <Link
                to={"/UpdateAssestsInfo/" + params.row._id}
            >
              <div className="text-red-500">
                {" "}
                <DeleteIcon></DeleteIcon>
              </div>
            </Link>
          </div>
        );
      },
    },
  ];

  // todo these are the values for these headers
  // todo jo nam yaha key ma dena ha wohi name upr coloum ma b dena ha
  
  return (
    <div key={data._id} className="mx-2 my-4 bg-white">
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

export default UpdateAssests;
