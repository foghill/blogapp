import React, { useState } from "react";
import { Button } from 'semantic-ui-react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
   <div class='ui center aligned container'>
      <h1>React Counter</h1>
      <span class='ui active button'>{counter}</span>
      <div>
        <p></p>
        <button class="ui green basic button" onClick={increase}>+</button>
        <button class="ui red basic button" onClick={decrease}>-</button>
        <button class="ui pink basic button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
