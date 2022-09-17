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
    const { digitObj } = this.props;

    const { total, next, operation } = digitObj;

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
    const { digitObj } = this.props;
    return (
      <div className="container">
        <div className="keys screen">
          {this.updateScreen()}
        </div>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, 'AC');
          }}
        >
          AC
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '+/-');
          }}
        >
          +/-
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '%');
          }}
        >
          %
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(digitObj, '÷');
          }}
        >
          ÷
        </button>
        <button
          type="button"
          className="keys "
          value="7"
          onClick={() => {
            this.Compute(digitObj, '7');
          }}
        >
          7
        </button>
        <button
          type="button"
          className="keys"
          value="8"
          onClick={() => {
            this.Compute(digitObj, '8');
          }}
        >
          8
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '9');
          }}
        >
          9
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(digitObj, 'x');
          }}
        >
          x
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '4');
          }}
        >
          4
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '5');
          }}
        >
          5
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '6');
          }}
        >
          6
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(digitObj, '-');
          }}
        >
          -
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '1');
          }}
        >
          1
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '2');
          }}
        >
          2
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '3');
          }}
        >
          3
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(digitObj, '+');
          }}
        >
          +
        </button>
        <button
          type="button"
          className="keys zero"
          onClick={() => {
            this.Compute(digitObj, '0');
          }}
        >
          0
        </button>
        <button
          type="button"
          className="keys"
          onClick={() => {
            this.Compute(digitObj, '.');
          }}
        >
          .
        </button>
        <button
          type="button"
          className="keys operators"
          onClick={() => {
            this.Compute(digitObj, '=');
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
  // eslint-disable-next-line react/forbid-prop-types
  digitObj: PropTypes.object.isRequired,
};

export default Calculator;
