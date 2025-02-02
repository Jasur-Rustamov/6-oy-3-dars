import { useState } from "react";
function Yashirish() {
  const [isTrue, setTrue] = useState(true);

  function handleClick() {
    setTrue((prev) => {
      if (!prev) {
        return true;
      }
    });
  }
  return (
    <div>
      <h3>Yashirish</h3>
      {
        isTrue && <div>React-ni o`rganish juda qiziqarli!</div>
      }
      <button className="btn" onClick={handleClick}>
        {
            isTrue ? "Yashirish" : "Ko`rsatish"
        }
      </button>
    </div>
  );
}

export default Yashirish;
