import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => {
    setCount((previoousCount) => previoousCount + 1);
  };

  const decrement2 = () => {
    setCount((previoousCount) => previoousCount - 1);
  };

  const resetButton = () => {
    setCount(0);
  };

  const double = () => {
    setCount(count * 2);
  }; //三項演算子

  // const divide3 = () => {
  //   setCount((previoousCount) => {
  //     if (previoousCount % 3 === 0) {
  //       return previoousCount / 3;
  //     } else {
  //       return previoousCount;
  //     }
  //   });
  // };

  const divide3 = () => {
    setCount((previoousCount) => {
      return previoousCount % 3 === 0 ? previoousCount / 3 : previoousCount;
    });
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> − </button>
      </div>
      <div>
        <button onClick={increment2}> + </button>
        <button onClick={decrement2}> − </button>
      </div>
      <div>
        <button onClick={resetButton}>Reset</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
