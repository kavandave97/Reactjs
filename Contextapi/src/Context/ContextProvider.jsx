import { useState } from "react";
import Usercontext from "./Usercontext";

const Dataprovider = ({ children }) => {
  const [user, Setuser] = useState(null);
  return (
    <Usercontext.Provider value={{ user, Setuser }}>
      {children}
    </Usercontext.Provider>
  );
};

export default Dataprovider;
