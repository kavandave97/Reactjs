import React, { useContext } from "react";
import { useState } from "react";
import Usercontext from "../Context/Usercontext";
const Login = () => {
  const [username, SetUsername] = useState("");
  const [password, Setpassword] = useState("");

  const { Setuser } = useContext(Usercontext);
  const handleclick = (e) => {
    e.preventDefault();
    Setuser(username, password);
  };

  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleclick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
