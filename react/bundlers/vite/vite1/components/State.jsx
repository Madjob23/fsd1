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
      <h1 style={{color:headingColor}}>My facoritecolor is {headingColor}</h1>
        <button onClick={()=>{
            setHeadingColor("red");
            }}>Red</button>
        <button onClick={()=>{
            setHeadingColor("green");
            }}>Green</button>
        <button onClick={()=>{
            setHeadingColor("blue");
            }}>Blue</button>
        <button onClick={()=>{
            setHeadingColor("yellow");
            }
        }>Yellow</button>
    </div>
  )
}

export default State;
