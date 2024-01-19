import React, { useContext } from "react";
import Usercontext from "../Context/Usercontext";

const Profile = () => {
  const { user } = useContext(Usercontext);
  return <h1>Welcome : {user}</h1>;
};

export default Profile;
