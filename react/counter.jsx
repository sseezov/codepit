import React, { useState } from "react";

const Ex = (props) => {
  let [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter((prev) => prev + 1);
  };

  let decrement = () => {
    setCounter(counter - 1);
  };

  let reset = () => {
    setCounter((counter = 0));
  };

  let surprise = () => {
    setCounter((counter = "bebebebena"));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={surprise}>surprise</button>
    </div>
  );
};

export default Ex;
