import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./App";

const Logout = () => {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const goToLoginPage = async () => {
    //* idher hum bus backend se logout api ko call kar rahy ha
    const res = await fetch("/logout", {
      method: "GET",
    });
    dispatch({ type: "", payload: null });
    //todo api called and we called the login page to frontend
    console.log("logout button pressed");
    navigate("/");
    return;
  };

  useEffect(() => {
    goToLoginPage();
  });

  return <div>Logout</div>;
};

export default Logout;
