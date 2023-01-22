type AccordionPropsType = {
  titleValue: string
  accordionColdapsed: boolean
  setAccordionColdapsed: (accordionColdapsed: boolean) => void
};


export const Accordion = (props: AccordionPropsType) => {

  const onClickcallback = ()=> {
    props.setAccordionColdapsed(props.accordionColdapsed);
  }

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClickcallback={onClickcallback}
      />
      {!props.accordionColdapsed && <AccordionBody />}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onClickcallback: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
   return (
    <div>
      <h3 onClick={()=> {props.onClickcallback()}}>{props.title}</h3>
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
