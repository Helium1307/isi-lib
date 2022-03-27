import React from "react";

export type InputProps = {
  type: string;
};

const Input = (props: InputProps) => {
  return <input type={props.type} />;
};

export default Input;
