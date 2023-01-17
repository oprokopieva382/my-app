// import Star from "./Star";

import { useState } from "react";

type RatingPropsType = {
  //value: 0 | 1 | 2 | 3 | 4 | 5;
};

export const UncontroledRating = (props: RatingPropsType) => {
  console.log("Star rendering");

  const [value, setValue] = useState(0 | 1 | 2 | 3 | 4 | 5);

  return (
    <div>
      <Star selected={value > 0} />
      <button onClick={() => setValue(1)}>1</button>
      <Star selected={value > 1} />
      <button onClick={() => setValue(2)}>2</button>
      <Star selected={value > 2} />
      <button onClick={() => setValue(3)}>3</button>
      <Star selected={value > 3} />
      <button onClick={() => setValue(4)}>4</button>
      <Star selected={value > 4} />
      <button onClick={() => setValue(5)}>5</button>
    </div>
  );
};
type StarPropsType = {
  selected: boolean;
};
const Star = (props: StarPropsType) => {
  console.log("Star rendering");
  if (props.selected === true) {
    return (
      <span>
        <b>STAR </b>
      </span>
    );
  } else {
    return <span>* </span>;
  }
};
