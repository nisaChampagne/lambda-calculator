import React, {useState} from "react";
import OperatorButton from './OperatorButton';
//import any components needed
import {operations} from '../../../data';
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operations, setoperation] = useState(operations);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {Operators.map( (operations, index) => <OperatorButton key={index} operations={operations} />)}
    </div>
  );
};

export default Operators;