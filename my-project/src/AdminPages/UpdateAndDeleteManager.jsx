import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import img from "../assets/mypic.jpg";
import React, { useEffect, useState } from "react";


const UpdateAndDeleteManager = () => {
  // todo these are the heading tags of the table
  const [data, setData] = useState([]);  
  const callAboutUrlFromBackend = async () => {
    console.log("hello")
    let res;
    try {
      
      res = await fetch('http://localhost:8000/api/users/', {
        method: "GET",

      });
    } catch (e) {
      console.log("rror",e);
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
  },[]);

  const columns = [
    { field: "_id", headerName: "ID", width: 135 },
    // todo renderCell se hum apni marzi ki output show kar sakty ha
    {
      //* is se b datashow ho jay ga magar renderCell se data ko hum customize kar sakin gay
      field: "image",
      // todo this is the table header name
      headerName: "Image",
      width: 60,
      // todo idher hum image b add kar sakty ha our jo b data ho color wegrar b de sakty ha
      renderCell: (params) => {
        console.log(params.row.image);
        return (
          <div>
            <img
              className="w-12 h-8 rounded-full"
              src={'http://localhost:8000/uploads/'+params.row.image.split('/').at(-1)}
            />
          </div>
        );
      },
    },
    {
      //* is se b datashow ho jay ga magar renderCell se data ko hum customize kar sakin gay
      field: "name",
      // todo this is the table header name
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
    
    // ! important
    //* this is how we create the additional html items in table
    // todo here we can edit and delete buttons
    {
      feild: "actions",
      headerName: "actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex" key={params.row.id}>
            <div>
              {/* todo is tarha hum url ma wo id send karin gay */}
              <Link key={params.row.id} to={"/UpdateManagerInfo/" + params.row._id}>
                <button className="bg-yellow-300 text-black px-2 py-2 rounded-xl">
                  Update Manager
                </button>
              </Link>
            </div>
            <div className="text-red-500">
              {" "}
              <DeleteIcon></DeleteIcon>
            </div>
          </div>
        );
      },
    },
  ];
  // todo these are the values for these headers
  // todo jo nam yaha key ma dena ha wohi name upr coloum ma b dena ha
console.log('outside ',data)
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

export default UpdateAndDeleteManager;
