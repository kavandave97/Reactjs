import React, { useContext } from "react";
import Usercontext from "../Context/Usercontext";

const Profile = () => {
  const { user } = useContext(Usercontext);
  console.log(user);
  if (!user) {
    return <h1>Enter Your Username</h1>;
  } else {
    return <h1>Welcome : {user[0]}</h1>;
  }
};

export default Profile;
