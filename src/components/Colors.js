import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "The Shade of Blue",
    value: "blue"
  }
];

const Colors = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      { showDropdown ?
        <div>
          <Dropdown
            label="Select a Color" 
            selected={selected} 
            options={options} 
            onSelectedChange={setSelected}
          /> 
          <h3 style={{ color:  selected.value}}>
            This text is {selected.value}
          </h3> 
        </div> : null 
      }
    </div>
  )
};

export default Colors;