import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => (
  <Accordion
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback}
    onClick={onClickCallback}
    items={[]}
  />
);
export const UserUncollapsedMode = () => (
  <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    onClick={onClickCallback}
    items={[
      { title: "Alex", value: 1 },
      { title: "Bob", value: 2 },
      { title: "Nick", value: 3 },
      { title: "Jack", value: 4 },
    ]}
  />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <Accordion
      titleValue={"Users"}
      collapsed={value}
      onChange={() => setValue(!value)}
      onClick={onClickCallback}
      items={[
        { title: "Alex", value: 1 },
        { title: "Bob", value: 2 },
        { title: "Nick", value: 3 },
        { title: "Jack", value: 4 },
      ]}
    />
  );
};
