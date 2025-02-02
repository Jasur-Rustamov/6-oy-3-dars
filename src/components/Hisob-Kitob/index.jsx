import React, { useState } from "react";

function Hisob() {
  const [value, setValue] = useState(1);

  function handleClickDuble() {
    const newValue = value * 2;
    setValue(newValue);
  }

  function handleClick() {
    const newValue = value / 2;
    setValue(newValue);
  }

  return (
    <div>
      <h3>Oddiy hisob-kitob</h3>
      <p>Hozirgi qiymat: {value}</p>

      <div className="buttons">
        <button onClick={handleClickDuble}>kopaytirish</button>
        <button onClick={handleClick}>bolish</button>
      </div>
    </div>
  );
}

export default Hisob;
