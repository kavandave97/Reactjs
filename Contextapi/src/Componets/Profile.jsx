import React, { useContext } from "react";
import Usercontext from "../Context/Usercontext";

const Profile = () => {
  const { user } = useContext(Usercontext);
  if (!user) {
    return;
  } else {
    return <h1>{user}</h1>;
  }
};

export default Profile;
