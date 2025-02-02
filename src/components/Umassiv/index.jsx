import { useState } from "react";

function Umassiv() {
  const [number, setNumber] = useState([])

  function handleClick(){

    let random = Math.floor(Math.random() * 100);
    let copied = [...number]
    copied.push(random)
    setNumber(copied)
  }


  function removeClick(){
    let copied = [...number];
    copied.pop()
    setNumber(copied)
  }
  function clearClick(){
    setNumber([])
  }

  return (
    <>
      <div>
        <ul>
          {
            number.length > 0 && number.map(function(product, index){
              return (
                <li key={index}>{product}</li>
              );
            })
          }
        </ul>

        <button onClick={handleClick}>Add</button>
        <button onClick={removeClick}>Delete</button>
        <button onClick={clearClick}>Clear</button>
      </div>
    </>
  )
}

export default Umassiv