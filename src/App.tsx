import { Accordion } from "./selfTodo/Accordion/Accordion";
import { OnOff } from "./OnOff";
import { UncontroledRating } from "./selfTodo/Rating/UncontroledRating";
// import Rating from "./Rating";
import { UncontroledOnOffButton } from "./selfTodo/OnOff/UncontroledOnOffButton";
import { UncontroledAccordion } from "./selfTodo/Accordion/UncontroledAccordion";
import { Rating, RatingValue } from "./selfTodo/Rating/Rating";
import { useState } from "react";
import { OnOffButton } from "./selfTodo/OnOff/OnOffButton";

function App() {
  
  let [ratingValue, setRatingValue] = useState<RatingValue>(1);
  let [accordionCollapsed, setAccordionColdapsed] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);



  return (
    <div>
      <UncontroledOnOffButton onChange={setSwitchOn}/> {switchOn.toString()}
      {/* <UncontroledAccordion titleValue={"Menu"} /> */}
      {/* <UncontroledRating /> */}
      <Accordion
        titleValue={"Menu"}
        onClick={() => setAccordionColdapsed(!accordionCollapsed)}
        collapsed={accordionCollapsed}
      />
      {/* <Accordion titleValue={"Users"} collapsed={false} /> */}
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <OnOff push={true} />
      <OnOff push={false} /> */}
      {/* <OnOffButton on={switchOn} onChange={setSwitchOn} /> */}
    </div>
  );
}
export default App;
