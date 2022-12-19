import React from "react";
import Accordion from "./Accordion";
import Rating from "./Rating";

function App() {
  console.log("App rendering");
  return (
    <div>
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}
export default App;
