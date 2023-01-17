import { Accordion } from "./Accordion";
import { OnOff } from "./OnOff";
import { UncontroledRating } from "./selfTodo/UncontroledRating";
// import Rating from "./Rating";
import { OnOffButton } from "./selfTodo/OnOffButton";
import { UncontroledAccordion } from "./selfTodo/UncontroledAccordion";

function App() {
  console.log("App rendering");
  return (
    <div>
      <OnOffButton />
      <OnOffButton />

      <UncontroledAccordion titleValue={"Menu"} />
      <UncontroledAccordion titleValue={"Users"} />

      <UncontroledRating />
      {/* <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} /> */}

      {/* <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}

      {/* <OnOff push={true} />
      <OnOff push={false} /> */}
    </div>
  );
}
export default App;
