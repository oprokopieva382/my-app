import s from "./OnOff.module.css";

type OnOffPropsType = {
  push: boolean;
};

export const OnOff = (props: OnOffPropsType) => {
  return (
    <div>
      <div>
        <button className={props.push ? s.buttonGreen : ""}>On</button>
        <button className={!props.push ? s.buttonRed : ""}>Off</button>
      </div>
    </div>
  );
};
