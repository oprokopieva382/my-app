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
  let [accordionColdapsed, setAccordionColdapsed] = useState(false);
  const [on, setOn] = useState(false);

  return (
    <div>
      <UncontroledOnOffButton />

      <UncontroledAccordion titleValue={"Menu"} />

      <UncontroledRating />
      <Accordion
        titleValue={"Menu"}
        setAccordionColdapsed={setAccordionColdapsed}
        accordionColdapsed={accordionColdapsed}
      />
      {/* <Accordion titleValue={"Users"} collapsed={false} /> */}

      <Rating value={ratingValue} onClick={setRatingValue} />

      {/* <OnOff push={true} />
      <OnOff push={false} /> */}
      <OnOffButton on={on} setOn={setOn} />
    </div>
  );
}
export default App;
