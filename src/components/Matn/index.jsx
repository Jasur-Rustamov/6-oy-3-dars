import { useState } from "react";

function Rang() {
  const [text, setText] = useState("Salom");
  const length = text.length;
  function handleClick(newText) {
    setText(newText);
  }

  
  return (
    <>
      <div>
      <h3>Matn</h3>
      <h4>{text}</h4>
      <p>Matn uzunligi: {length}</p>
      <div className="buttons">
        <button onClick={() => handleClick("Hello")}>Matinni o`zgartirish</button>
        <button onClick={() => handleClick("Privet")}>Matinni o`zgartirish</button>
        <button onClick={() => handleClick("Hi")}>
          Matinni o`zgartirish
        </button>
      </div>
    </div>
    </>
  );
}

export default Rang