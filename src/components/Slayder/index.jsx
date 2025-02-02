import React, { useState } from "react";
function Slayder() {
  const values = [10, 20, 30, 40];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((index) => {
      return index - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((index) => {
      return index + 1;
    });
  };

  return (
    <div>
      <h3>Slayder</h3>
      <p>Hozirgi qiymat: {values[currentIndex]}</p>
      <div>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Oldingi
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === values.length - 1}
        >
          Keyingi
        </button>
      </div>
    </div>
  );
}

export default Slayder;