import Star from "./Star";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

export const Rating = (props: RatingPropsType) => {
  console.log("Star rendering");
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  );
};
