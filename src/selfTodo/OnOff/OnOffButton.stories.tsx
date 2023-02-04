import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { OnOffButton } from "./OnOffButton";

export default {
  title: "OnOffButton",
  component: OnOffButton,
};

const callback = action("on or off cliked");

export const OnMode = () => <OnOffButton on={true} onChange={callback} />;
export const OffMode = () => <OnOffButton on={false} onChange={callback} />;

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOffButton on={value} onChange={setValue} />;
};
