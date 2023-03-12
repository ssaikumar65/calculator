import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function createButtons() {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => calc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  }

  function calc(val: string) {
    let ops = ["+", "-", "/", "*", "."];
    if (
      (ops.includes(val) && value === "") ||
      (ops.includes(val) && ops.includes(value.slice(-1)))
    ) {
      return;
    }

    if (!ops.includes(val)) {
      setResult(eval(value + val).toString());
    }
    setValue(value + val);
  }

  function updateCalc() {
    setValue(result);
  }

  function delCalc() {
    if (value === "") {
      return;
    }
    const num = value.slice(0, -1);
    setValue(num);
  }

  return (
    <div className="main">
      <div className="res">
        <span>({result || "0"})</span>
        {value || "0"}
      </div>
      <div className="ops">
        <button onClick={() => calc("+")}>+</button>
        <button onClick={() => calc("-")}>-</button>
        <button onClick={() => calc("*")}>*</button>
        <button onClick={() => calc("/")}>/</button>
        <button onClick={() => delCalc()}>DEL</button>
      </div>
      <div className="num">
        {createButtons()}
        <button onClick={() => calc(".")}>.</button>
        <button onClick={() => calc("0")}>0</button>
        <button onClick={() => updateCalc()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
