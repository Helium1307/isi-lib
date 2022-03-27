import React from "react";
import { ButtonProps } from "..";

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
