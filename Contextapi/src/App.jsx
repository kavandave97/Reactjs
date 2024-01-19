import React from "react";
import Login from "./Componets/Login";
import Dataprovider from "./Context/ContextProvider";
import Profile from "./Componets/Profile";
const App = () => {
  return (
    <Dataprovider>
      <Login />
      <Profile />
    </Dataprovider>
  );
};

export default App;
