import { useState } from "react";

type ButtonType = {
  on: boolean;
  setOn: (on: boolean)=> void
};

export const OnOffButton = (props: ButtonType) => {
  
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    marginRight: "2px",
    backgroundColor: props.on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginRight: "5px",
    padding: "5px",
    backgroundColor: props.on ? "white" : "red",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    backgroundColor: props.on ? "green" : "red",
  };

  return (
    <div>
      <div style={onStyle} onClick={() => props.setOn(true)}>
        On
      </div>
      <div style={offStyle} onClick={() => props.setOn(false)}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
