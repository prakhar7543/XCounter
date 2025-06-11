import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount((prev) => prev+1);
  }
  let handleDecrement = () => {
    setCount((prev) => prev-1);
  }

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <div className="counter">
          <div className="countTextValue" style={{textAlign: 'start'}}>
            <span style={{ fontSize: "larger", fontWeight: "400" }}>
              Count:{' '}
            </span>
            <span style={{ fontSize: "larger", fontWeight: "400" }}>{count}</span>
          </div> 
          <div
            className="buttonDiv"
            style={{
              color: "lightgray",
              display: "flex",
              justifyContent: "flex-start",
              gap: '5px',
            }}
          >
            <button style={{ backgroundColor: "lightgray" }} onClick={handleIncrement}>Increment</button>
            <button style={{ backgroundColor: "lightgray" }} onClick={handleDecrement}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
