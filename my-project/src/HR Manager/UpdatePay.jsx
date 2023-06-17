import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdatePay = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [im, setIm] = useState([]);
  var imgVal = "";
  const id = params._id;

  const callAboutUrlFromBackend = async () => {
    let res;
    try {
      const path = "http://localhost:8000/api/users/" + id;
      res = await fetch(path, {
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
      const data1 = await res.json();
      //* is data ma sarraa user ka dataaa jay ga
      setData(data1[0]);
      let imgv = data.image;
      imgVal =
        "http://localhost:8000/uploads/" + data1[0].image.split("/").at(-1);

      setIm(imgVal);
      navigate("/PayrollManagment");
    }
  };

  useEffect(() => {
    callAboutUrlFromBackend();
  }, []);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(data);
      const res = await axios.patch(
        "http://localhost:8000/api/users/" + id,
        data
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      // if(error.response.data){
      //   setError(error.response.data.msg);
      // }
      // else{
      //   setError(null);
      // }
    }
  };

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
        <div className="flex items-center  justify-center">
          <input
            className="px-2 py-2 my-2 w-1/3 hover:transition hover:bg-slate-900 hover:text-white hover:duration-500  flex justify-center bg-gray-300 rounded-3xl"
            type="submit"
            value="Update Pay"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatePay;
