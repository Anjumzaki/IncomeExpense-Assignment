import React, { Component } from 'react';

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {historicalData: null, currency: "PHP"}
    this.onCurrencySelect = this.onCurrencySelect.bind(this)
  }

  onCurrencySelect (e) {
    this.setCurrency(e.target.value)
  }

  render() {
      return (
        <div className="app">

          <div className="select-container">
            <span style={{fontSize: 18, fontFamily: 'Bungee'}}> Select your currency: </span>
            <select value={this.state.currency} onChange={this.onCurrencySelect}>
            <option value="Income">Income</option>
            <option value="Income">Expense</option>
            </select>
          </div>

        </div>
      )
    }
  }


export default App;
