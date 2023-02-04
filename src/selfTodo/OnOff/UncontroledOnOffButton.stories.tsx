import { action } from "@storybook/addon-actions";
import { UncontroledOnOffButton } from "./UncontroledOnOffButton";

export default {
  title: "UncontroledOnOffButton",
  component: UncontroledOnOffButton,
};

const callback = action("on or off clicked");

export const OnMode = () => (
  <UncontroledOnOffButton defaultOn={true} onChange={callback} />
);
export const OffMode = () => (
  <UncontroledOnOffButton defaultOn={false} onChange={callback} />
);
