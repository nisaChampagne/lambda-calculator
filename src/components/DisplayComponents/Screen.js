import React, { useState } from "react";

export default () => {
  const [display, setDisplay] = useState(0);
 
  return (
    <div className='screen'>
    {display}
    </div>
  ); 
};