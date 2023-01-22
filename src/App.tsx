import { Accordion } from "./Accordion";
import { OnOff } from "./OnOff";
import { UncontroledRating } from "./selfTodo/UncontroledRating";
// import Rating from "./Rating";
import { UncontroledOnOffButton } from "./selfTodo/UncontroledOnOffButton";
import { UncontroledAccordion } from "./selfTodo/UncontroledAccordion";
import { Rating, RatingValue } from "./Rating";
import { useState } from "react";
import { OnOffButton } from "./OnOffButton";

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
