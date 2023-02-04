import { RatingValue } from "./Rating";

type StarPropsType = {
  selected: boolean;
  onClick: (value: RatingValue) => void;
  value: RatingValue;
};
const Star = (props: StarPropsType) => {
 return (
  <span onClick={()=> props.onClick(props.value)}>
    {props.selected ?   <b>STAR </b> : "star "}
  </span>
 )
};

export default Star;
