import { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>
        Badhao
      </button>
      <button onClick={()=>{setCount(count - 1)}}>
        Ghatao
      </button>
      <p>{count}</p>
    </div>
  )
}

export default State;
