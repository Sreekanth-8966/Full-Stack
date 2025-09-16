import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }
    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult(null);
    }
  };

  
  const dynamicStyle = {
    backgroundColor: count > 10 ? "white" : "black",
    color: count > 10 ? "black" : "white",
    minHeight: "100vh", 
    padding: "20px"
  };

  return (
    <div style={dynamicStyle}>
      <div className="App">
        <h2>Clicked Counts: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="container">
        <h1>Simple Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <div className="btn-group" style={{ marginTop: "10px" }}>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>
        {result !== null && (
          <h2 style={{ marginTop: "15px" }}>Result: {result}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
