import { action } from "@storybook/addon-actions";
import { UncontroledAccordion } from "./UncontroledAccordion";

export default {
  title: "UncontroledAccordion",
  component: UncontroledAccordion,
};

const callback = action("Accordion mode change event fired");

export const ModeChanging = () => {
  return <UncontroledAccordion titleValue={"Menu"} />;
};
