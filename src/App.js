import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minNumber: '',
      maxNumber: '',
      randomNumber: ''
    }
    this.numberHandler = this.numberHandler.bind(this);
  };

  numberHandler() {
    let minCurrentNumber = this.state.minNumber;
    let maxCurrentNumber = this.state.maxNumber;
    minCurrentNumber = document.getElementById('min_number').value;
    maxCurrentNumber = document.getElementById('max_number').value
      
    this.setState({
      minNumber: minCurrentNumber,
      maxNumber: maxCurrentNumber
    });
    
    let random = minCurrentNumber - 0.5 + Math.random() * (maxCurrentNumber - minCurrentNumber + 1);
    random = Math.round(random);

    this.setState({
      randomNumber: random
    })
  }

  render() {
    return (
      <div>
        <div className="box">
          <div className="output">
            Random number is: {this.state.randomNumber}
          </div>
          <div className="input">
            <input id="min_number" type="text" placeholder="min:" />
            <input id="max_number" type="text" placeholder="max:" />
          </div>
            
            <button id="generate" onClick={this.numberHandler}>Generate</button>
        </div>
      </div>
    );
  }
}

export default App;
