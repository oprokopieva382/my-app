import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
};

export const BaseExampleWithValue = () => {
  const [value, setValue] = useState("2");
  
  return (
    <>
      <Select
        onChange={setValue}
        value={value}
        items={[
          { value: "1", title: "Minsk" },
          { value: "2", title: "Kiev" },
          { value: "3", title: "PCB" },
        ]}
      />
    </>
  );
};

export const BaseExampleWithoutValue = () => {
   const [value, setValue] = useState(null);
   return (
     <>
       <Select
         onChange={setValue}
         value={value}
         items={[
           { value: "1", title: "Minsk" },
           { value: "2", title: "Kiev" },
           { value: "3", title: "PCB" },
         ]}
       />
     </>
   );
};
