import React, { useState } from "react";

const Ex = () => {
  let [prop, setProp] = useState({
    name: "beben",
    surname: "bemburya",
    acts: 123124,
    strange: true,
  });

  let superName = () => {
    setProp((prev) => {
      return { ...prev, name: "Superbebebebnf" };
    });
  };

  let restore = () => {
    setProp((prev) => {
      return {
        name: "beben",
        surname: "bemburya",
        acts: 123124,
        strange: true,
      };
    });
  };

  return (
    <div>
      <h1>{prop.name}</h1>
      <button onClick={superName}>superName</button>
      <button onClick={restore}>get back!</button>
      {/* <button onClick={reset}>reset</button>
      <button onClick={surprise}>surprise</button> */}
    </div>
  );
};

export default Ex;
