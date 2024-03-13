import React, { useState } from "react";

const CheckBoxes = () => {
  const [checkedBoxes, setCheckedBoxes] = useState(Array(10).fill(false));

  const handleCheckBox = (e, value) => {
    // console.log("e: ", e);
    // console.log("value: ", value);
    const updatedCheckBoxes = checkedBoxes.map((item, index) =>
      index === value ? e.target.checked : item
    );
    setCheckedBoxes(updatedCheckBoxes);
  };

  // another way
  // const handleCheckBox = (e,value) => {
  //   // console.log("value: ", value);
  //   const updatedCheckBoxes = checkedBoxes.map((item, index) =>
  //   index === value ? !item: item
  //   );
  //   console.log('updatedCheckBoxes: ', updatedCheckBoxes);
  //   setCheckedBoxes(updatedCheckBoxes);
  // };

  // console.log("checkedBoxes: ", checkedBoxes);
  return (
    <div>
      {checkedBoxes.map((item, index) => (
        <div
          style={{
            margin: "auto",
            width: "500px",
            padding: "10px",
          }}
          key={index}
        >
          <input
            type="checkbox"
            checked={item}
            onChange={(e) => handleCheckBox(e, index)}
          />
          <label
            style={{
              marginLeft: "30px",
            }}
          >
            CheckBox - {index + 1}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxes;
