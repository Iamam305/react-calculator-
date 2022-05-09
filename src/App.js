import React, { useState } from 'react'
// https://www.youtube.com/watch?v=oiX-6Y2oGjI
const App = () => {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")



  //  arrays of oprators

  const ops = ['/', '*', '+', '-', '.']


  //  function to handle the input

  const updateCalc = (value) => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const Calculate = () => {
    setCalc(eval(calc).toString())
  }

  // function to delete the last input
  const Del = () => {
    if(calc === ""){
      return
    }

    const value = calc.slice(0, -1)
    setCalc(value)
    setResult(eval(value).toString())
  }

  const Clear = () => {
    setCalc("")
    setResult("")

  }

  // function to create digits just like array.map inside jsx


  const createDigit = () => {
    const digit = []

    for (let i = 1; i < 10; i++) {
      digit.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>)
    }

    return digit

  }

  
  return (
    <div className='calculator_parent'>
      <div className="calculator">
        <div className="display_result">
          {result ? <span>({result})</span> : ""} {calc || '0'}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>X</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={Del}>DEL</button>
          <button onClick={Clear}>CLR</button>

        </div>

        <div className="digits">
          {createDigit()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={Calculate}>=</button>

        </div>
      </div>
    </div>
  )
}

export default App