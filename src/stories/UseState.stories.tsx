import { log } from "console";
import React from "react";
import { useState } from "react";
export default {
  title: "useState demo",
};

function generateData() {
  console.log("generateData");
  return 1;
}
export const Example1 = () => {
  console.log("count increase");

  const [count, setCount] = useState(generateData);

  return (
    <>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        +
      </button>
      {count}
    </>
  );
};
