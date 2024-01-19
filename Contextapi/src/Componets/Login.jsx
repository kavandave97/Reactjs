import React, { useContext, useState } from "react";
import Usercontext from "../Context/Usercontext";

function Login() {
  // fetch input box id
  let input1 = document.getElementById("userinput");
  let pass1 = document.getElementById("passinput");
  // let form = document.getElementById("forms");

  const [username, SetUsername] = useState("");
  const [password, Setpassword] = useState("");

  const { Setuser } = useContext(Usercontext);

  const handleclick = (e) => {
    e.preventDefault();
    if (username == "" || password == "") {
      alert("enter Your Username or password");
    } else {
      Setuser([username, password]);
      SetUsername("");
      Setpassword("");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <form action="#" id="forms">
          <input
            type="text"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
            placeholder="Enter Your Name"
            id="userinput"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
            placeholder="Enter Password"
            id="passinput"
          />
          <button onClick={handleclick}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
