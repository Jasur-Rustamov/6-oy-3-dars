import { useState } from "react";

function Raqam() {
  const [number, setNumber] = useState(null);
  const [numberList, setNumberList] = useState([]);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setNumber(randomNumber);
    const copied = [...numberList];
    copied.push(randomNumber);
    setNumberList(copied);
  }

  return (
    <div>
      <h3>Tasodifiy raqam generatori</h3>
      <p>
      avvalgi sonlar:
        <ul>
          {numberList.length > 0 &&
            numberList.map(function (num, index) {
              return <li key={index}>{num}</li>;
            })}
          {numberList.length == 0 && <p>son mavzud emas</p>}
        </ul>
      </p>

      <p>Hozirgi son: {number !== null ? number : <p>son mavjud emas</p>}</p>
      <button onClick={handleClick}>generate</button>
    </div>
  );
}

export default Raqam;