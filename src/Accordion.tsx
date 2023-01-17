type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
type AccordionTitlePropsType = {
  title: string;
};

export const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <div>
      <h3>{props.title}</h3>
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
