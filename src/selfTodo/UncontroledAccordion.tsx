import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
};
type AccordionTitlePropsType = {
  title: string;
  liChange: () => void;
};

export const UncontroledAccordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");
  const [collapsed, setCollapsed] = useState(true);

  let liChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle title={props.titleValue} liChange={liChange} />
      {!collapsed && <AccordionBody />}
    </div>
  );
};

function AccordionTitle(props: AccordionTitlePropsType) {
   return (
    <div>
      <h3
        onClick={() => {
          props.liChange();
        }}
      >
        {props.title}
      </h3>
    </div>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
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
