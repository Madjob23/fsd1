import { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
    const [headingColor, setHeadingColor] = useState("blue");
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>
        Badhao
      </button>
      <button onClick={()=>{setCount(count - 1)}}>
        Ghatao
      </button>
      <p>{count}</p>
      <h1>My favorite color is <span style={{color:headingColor}}>{headingColor}</span></h1>
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
