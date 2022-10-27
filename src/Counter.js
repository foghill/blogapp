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
   <div className='ui center aligned container'>
      <h1>React Counter</h1>
      <span className='ui active button'>{counter}</span>
      <div>
        <p></p>
        <button className="ui green basic button" onClick={increase}>+</button>
        <button className="ui red basic button" onClick={decrease}>-</button>
        <button className="ui pink basic button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
