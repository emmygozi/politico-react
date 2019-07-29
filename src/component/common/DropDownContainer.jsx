import React from "react";

const DropDownContainer = props => {
  return (
    <>
      <option value={props.id}>{props.name}</option>
    </>
  );
};

export default DropDownContainer;
