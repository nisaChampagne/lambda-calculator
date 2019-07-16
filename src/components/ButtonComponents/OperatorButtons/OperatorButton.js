import React from "react";

const OperatorButton = (props) => {
  const char = props.operator;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='operatorBtn' onClick={() => {props.changeData(char)}}>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;