import { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
    const [headingColor, setHeadingColor] = useState("blue");
    const h1 = document.querySelector("h1");
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>
        Badhao
      </button>
      <button onClick={()=>{setCount(count - 1)}}>
        Ghatao
      </button>
      <p>{count}</p>
      <br />
      <h1>My facoritecolor is {headingColor}</h1>
        <button onClick={()=>{
            setHeadingColor("red");
            h1.style.color = "red";
            }}>Red</button>
        <button onClick={()=>{
            setHeadingColor("green");
            h1.style.color = "green";
            }}>Green</button>
        <button onClick={()=>{
            setHeadingColor("blue");
            h1.style.color = "blue";
            }}>Blue</button>
        <button onClick={()=>{
            setHeadingColor("yellow");
            h1.style.color = "yellow";
            }
        }>Yellow</button>
    </div>
  )
}

export default State;
