import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
