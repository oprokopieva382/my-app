import { useReducer, useState } from "react";
import { reducer } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
};

export const UncontroledAccordion = (props: AccordionPropsType) => {
  //const [collapsed, setCollapsed] = useState(true);
  const [state, dispatch] = useReducer(reducer, {collapsed: false});

  // let liChange = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <div>
      {/* <AccordionTitle title={props.titleValue} onClick={liChange} /> */}
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: "TOGGLE-COLLAPSED" });
        }}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <div>
      <h3
        onClick={() => {
          props.onClick();
        }}
      >
        {props.title}
      </h3>
    </div>
  );
}

function AccordionBody() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
