import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.Compute = this.Compute.bind(this);
    this.updateScreen = this.updateScreen.bind(this);
  }

  Compute = (obj, button) => {
    const { updateState } = this.props;
    const newObj = calculate(obj, button);
    updateState(newObj);
  };

  updateScreen = () => {
    const { calculatorData } = this.props;

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

  render() {
    const { calculatorData } = this.props;
    return (
      <div className="container">
        <div className="keys screen">
          {this.updateScreen()}
        </div>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, 'AC');
          }}
        >
          AC
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '+/-');
          }}
        >
          +/-
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '%');
          }}
        >
          %
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(calculatorData, '÷');
          }}
        >
          ÷
        </button>
        <button
          type="button"
          className="keys "
          onClick={() => {
            this.Compute(calculatorData, '7');
          }}
        >
          7
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '8');
          }}
        >
          8
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '9');
          }}
        >
          9
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(calculatorData, 'x');
          }}
        >
          x
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '4');
          }}
        >
          4
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '5');
          }}
        >
          5
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '6');
          }}
        >
          6
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(calculatorData, '-');
          }}
        >
          -
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '1');
          }}
        >
          1
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '2');
          }}
        >
          2
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '3');
          }}
        >
          3
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(calculatorData, '+');
          }}
        >
          +
        </button>
        <button
          type="button"
          className="keys zero"
          onClick={() => {
            this.Compute(calculatorData, '0');
          }}
        >
          0
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(calculatorData, '.');
          }}
        >
          .
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(calculatorData, '=');
          }}
        >
          =
        </button>
      </div>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  calculatorData: PropTypes.object.isRequired,
};

export default Calculator;
