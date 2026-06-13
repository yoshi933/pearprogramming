import { useState } from "react";

function App(){
  const [count,setCount] = useState(0);

  return(
    <div>
      <p id="count">Count: {count}</p>
      <div className="count-button">
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;