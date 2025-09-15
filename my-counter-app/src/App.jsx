import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState('')
  const addition =() =>{
    setResult(Number(num1) + Number(num2))
  }

  const subtract = () => {
    setResult(Number(num1) - Number(num2))
  } 

  const multiply = () => {
    setResult(Number(num1) * Number(num2))
  }

  const divide = () => {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero')
    } else {
      setResult(Number(num1) / Number(num2))
    }
  }

  return (
    <div className="container">
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={addition}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  )
}

export default Calculator
