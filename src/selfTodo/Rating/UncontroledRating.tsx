// import Star from "./Star";

import { useState } from "react";

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  defaultValue: RatingValue;
  onChange: (value: RatingValue) => void;
};

export const UncontroledRating = (props: RatingPropsType) => {
  const [value, setValue] = useState<RatingValue>(
    props.defaultValue ? props.defaultValue : 0
  );

  return (
    <div>
      <Star
        selected={value > 0}
        setValue={() => {
          setValue(1);  props.onChange(1);
         
        }}
        
      />

      <Star
        selected={value > 1}
        setValue={() => {
          setValue(2); props.onChange(2);
        }}
      />

      <Star
        selected={value > 2}
        setValue={() => {
          setValue(3); props.onChange(3);
        }}
      />

      <Star
        selected={value > 3}
        setValue={() => {
          setValue(4); props.onChange(4);
        }}
      />

      <Star
        selected={value > 4}
        setValue={() => {
          setValue(5); props.onChange(5);
        }}
      />
    </div>
  );
};
type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};
const Star = (props: StarPropsType) => {
  return (
    <span onClick={() => props.setValue()}>
      {props.selected ? <b>STAR </b> : "star "}
    </span>
  );
};
