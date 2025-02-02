import React, { useState } from "react";

function Tugma() {
  const [buttonCounts, setButtonCounts] = useState({
    button1: 0,
    button2: 0,
    button3: 0,
  });

  function handleClick(button) {
    setButtonCounts({ ...buttonCounts, [button]: buttonCounts[button] + 1 });
  }

  function resetCounts() {
    setButtonCounts({
      button1: 0,
      button2: 0,
      button3: 0,
    });
  }

  return (
    <div>
      <h3>Tugmalar</h3>
      <div className="buttons">
        <button onClick={() => handleClick("button1")}>
          Tugma 1: {buttonCounts.button1} marta bosildi
        </button>{" "}
        <br /> <br />
        <button onClick={() => handleClick("button2")}>
          Tugma 2: {buttonCounts.button2} marta bosildi
        </button>{" "}
        <br />
        <br />
        <button onClick={() => handleClick("button3")}>
          Tugma 3: {buttonCounts.button3} marta bosildi
        </button>{" "}
        <br />
        <br />
        <button onClick={resetCounts}>Reset</button>
      </div>
    </div>
  );
}

export default Tugma;
