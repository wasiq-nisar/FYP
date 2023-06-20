import React, { useState, useContext } from "react";
import "./Login.css";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { state, dispatch } = useContext(userContext);

  const logIn = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log("hte json value is ", json);
    if (!response.ok) {
      setIsLoading(false);
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: json.error
      })
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      setIsLoading(false);
      const userType = json.type;

      dispatch({ type: userType, payload: userType });
      if (userType === "hrmanager") {
        navigate("/EmployeeAttendence");
      } else if (userType === "admin") {
        navigate("/AdminDashboard");
      } else if (userType === "orderadmin") {
        navigate("/ProductInfo");
      } else if (userType === "inventorymanager") {
        navigate("/AddProduct");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await logIn(email, password);
  };

  return (
    <div className="bg-white h-screen ">
      <form>
        <div className="flex-col w-full lg:w-3/4  lg:pr-[80px] lg:pl-[80px] border-t-6 border-4 border-blue-800  justify-center items-center">
          <h1 className="flex justify-center text-blue-900 text:xl lg:text-2xl font-bold">
            Login Form
          </h1>
          <div className=" flex-col w-full py-4 items-center justify-center">
            <label className="w-full text-blue-900 text-2xl font-semibold">
              Email:
            </label>
            <input
              type="email"
              className="text-semibold"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email"
            />
          </div>
          <div className="flex-col  items-center justify-center">
            <label className=" text-blue-900 text-2xl font-semibold">
              Password:
            </label>
            <input
              type="password"
              className="text-semibold"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="w-full flex justify-center  pb-4 ">
            <button
              disabled={isLoading}
              className="px-3 w-1/2  py-1 hover:cursor-pointer hover:transition hover:ease-in-out hover:delay-75 hover:bg-blue-800 hover:font-2xl font-bold hover:text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Log in
            </button>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
//  <form className="login">
//       <h3>Log in</h3>

//       <label>Email:</label>
//       <input
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />

//       <label>Password:</label>
//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />

//       <button disabled={isLoading} type="submit" onClick={handleSubmit}>
//         Log in
//       </button>
//       {error && <div className="error">{error}</div>}
//     </form>
