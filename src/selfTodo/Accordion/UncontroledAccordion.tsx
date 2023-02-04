import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

export const UncontroledAccordion = (props: AccordionPropsType) => {
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

type AccordionTitlePropsType = {
  title: string;
  liChange: () => void;
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
