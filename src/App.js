import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorData: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState({
      calculatorData: obj,
    });
  }

  render() {
    const { calculatorData } = this.state;
    return (
      <div className="App">
        <Calculator calculatorData={calculatorData} updateState={this.updateState} />
      </div>
    );
  }
}

export default App;
