// todo is ma se user ki info aay gi sab ki
// todo har user ki pay b hoti ha sath
// todo wo pay ko hum ne add update karna ha

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import img from "../assets/mypic.jpg";
const PayrollManagment = () => {
  //todo is ma hum data to dosri file se export kar ke yaha lay gay
  // todo idher hum ne sab data(row) rowData ma pass kar diya ha
  // const [rowData, setRowData] = useState(rows);

  // todo these are the heading tags of the table
  const columns = [
    { field: "id", headerName: "ID", width: 35 },
    // todo renderCell se hum apni marzi ki output show kar sakty ha
    {
      //* is se b datashow ho jay ga magar renderCell se data ko hum customize kar sakin gay
      field: "img",
      // todo this is the table header name
      headerName: "Image",
      width: 60,
      // todo idher hum image b add kar sakty ha our jo b data ho color wegrar b de sakty ha
      renderCell: (params) => {
        return (
          <div>
            <img
              className="w-12 h-8 rounded-full"
              src={img}
              alt={params.row.firstName}
            />
          </div>
        );
      },
    },
    {
      //* is se b datashow ho jay ga magar renderCell se data ko hum customize kar sakin gay
      field: "firstName",
      // todo this is the table header name
      headerName: "First name",
      width: 130,
      // todo idher hum image b add kar sakty ha our jo b data ho color wegrar b de sakty ha
      renderCell: (params) => {
        return <div>{params.row.firstName}</div>;
      },
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
              <Link key={params.row.id} to={"/UpdateAssests/" + params.row.id}>
                <button className="bg-yellow-300 text-black px-2 py-2 rounded-xl">
                  Update
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
  const rows = [
    { id: 1, img: "myimg", lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, img: "myimg", lastName: "Snow", firstName: "Jon", age: 35 },

    { id: 3, img: "myimg", lastName: "Lannister", firstName: "Jaime", age: 45 },
  ];
  return (
    <div className="mx-2 my-4 bg-white">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
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
