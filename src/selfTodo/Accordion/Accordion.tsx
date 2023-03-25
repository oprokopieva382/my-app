import React from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  items: ItemType[];
  onClick: () => void;
  onChange: () => void;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};
function SecretAccordionTitle(props: AccordionTitlePropsType) {
  return (
    <div>
      <h3 onClick={props.onChange}>{props.title}</h3>
    </div>
  );
}

const AccordionTitle = React.memo(SecretAccordionTitle);

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};
function SecretAccordionBody(props: AccordionBodyPropsType) {
  return (
    <div>
      <ul>
        {props.items.map((i, index) => (
          <li
            onClick={() => {
              props.onClick(i.value);
            }}
            key={index}
          >
            {i.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

const AccordionBody = React.memo(SecretAccordionBody);