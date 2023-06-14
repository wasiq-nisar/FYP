import React, { useState, useContext } from "react";
import "./Login.css";
import { userContext } from "../App";

const Login = () => {
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
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      setIsLoading(false);
      const userType = json.type;

      dispatch({ type: "admin", payload: userType });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await logIn(email, password);
  };

  return (
    <form className="login">
      <h3>Log in</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} type="submit" onClick={handleSubmit}>
        Log in
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
