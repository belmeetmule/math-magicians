import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const Compute = (obj, button) => {
    const newObj = calculate(obj, button);
    setCalculatorData(newObj);
  };

  const updateScreen = () => {
    const { total, next, operation } = calculatorData;

    if (total === null && next === null) {
      return 0;
    }
    if (next !== null && total === null) {
      return next;
    }
    if (total !== null && next !== null) {
      if (operation !== null && operation !== undefined) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  };

  return (
    <div className="container">
      <div className="keys screen">
        {updateScreen()}
      </div>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, 'AC');
        }}
      >
        AC
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '+/-');
        }}
      >
        +/-
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '%');
        }}
      >
        %
      </button>
      <button
        type="button"
        className="keys operators"
        onClick={() => {
          Compute(calculatorData, '÷');
        }}
      >
        ÷
      </button>
      <button
        type="button"
        className="keys "
        onClick={() => {
          Compute(calculatorData, '7');
        }}
      >
        7
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '8');
        }}
      >
        8
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '9');
        }}
      >
        9
      </button>
      <button
        type="button"
        className="keys operators"
        onClick={() => {
          Compute(calculatorData, 'x');
        }}
      >
        x
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '4');
        }}
      >
        4
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '5');
        }}
      >
        5
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '6');
        }}
      >
        6
      </button>
      <button
        type="button"
        className="keys operators"
        onClick={() => {
          Compute(calculatorData, '-');
        }}
      >
        -
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '1');
        }}
      >
        1
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '2');
        }}
      >
        2
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '3');
        }}
      >
        3
      </button>
      <button
        type="button"
        className="keys operators"
        onClick={() => {
          Compute(calculatorData, '+');
        }}
      >
        +
      </button>
      <button
        type="button"
        className="keys zero"
        onClick={() => {
          Compute(calculatorData, '0');
        }}
      >
        0
      </button>
      <button
        type="button"
        className="keys"
        onClick={() => {
          Compute(calculatorData, '.');
        }}
      >
        .
      </button>
      <button
        type="button"
        className="keys operators"
        onClick={() => {
          Compute(calculatorData, '=');
        }}
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
