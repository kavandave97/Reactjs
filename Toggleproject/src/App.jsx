import React, { useState } from "react";

const App = () => {
  const [state, Setstate] = useState(true);
  return (
    <>
      <h2>Toggle Box Mini Project</h2>
      {state ? (
        <div className="box">
          <h1>Box</h1>
        </div>
      ) : null}
      <div className="btn">
        <button id="btn1" onClick={() => Setstate(true)}>
          Show
        </button>
        <button id="btn2" onClick={() => Setstate(false)}>
          Hide
        </button>
        <button id="btn3" onClick={() => Setstate(!state)}>
          Toggle
        </button>
      </div>
    </>
  );
};

export default App;
