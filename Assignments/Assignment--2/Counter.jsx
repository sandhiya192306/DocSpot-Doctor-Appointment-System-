import React, { useState } from "react";

const Counter=()=> {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div>
        <button  onClick={increase}>+</button>
        <button  onClick={decrease}>-</button>
        <button  onClick={reset}>Reset</button>
      </div>
    </div>

);
}


export default Counter
