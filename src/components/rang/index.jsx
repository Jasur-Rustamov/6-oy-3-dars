import { useState } from "react";
import "./index.css"

function Rang() {
  const [color] = useState([
    "black",
    "grey",
    "blue",   
    "brown"
  ])
  const [defoult, setDefoult] = useState (["#ff5733"]);

  function handleClick(){
    let random = color[Math.floor(Math.random() * color.length)];
    let copied = [...defoult];
    copied.pop([])
    copied.push(random)
    setDefoult(copied)
  }
  return (
    <>
      <div>
        <h3>Rang</h3>
        <div className="ddiv" style={{background : defoult,}}>

        </div>
        <button onClick={handleClick}>Rangdi almashtiring!</button>
      </div>
    </>
  )
}

export default Rang