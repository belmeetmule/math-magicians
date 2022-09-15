import React from 'react';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="keys screen"> 0 </div>
        <button type="button" className="keys">AC</button>
        <button type="button" className="keys">+/-</button>
        <button type="button" className="keys">%</button>
        <button type="button" className="keys operators">/</button>
        <button type="button" className="keys ">7</button>
        <button type="button" className="keys">8</button>
        <button type="button" className="keys">9</button>
        <button type="button" className="keys operators">x</button>
        <button type="button" className="keys">4</button>
        <button type="button" className="keys">5</button>
        <button type="button" className="keys">6</button>
        <button type="button" className="keys operators">-</button>
        <button type="button" className="keys">1</button>
        <button type="button" className="keys">2</button>
        <button type="button" className="keys">3</button>
        <button type="button" className="keys operators">+</button>
        <button type="button" className="keys zero">0</button>
        <button type="button" className="keys">.</button>
        <button type="button" className="keys operators">=</button>
      </div>
    );
  }
}

export default Calculator;
