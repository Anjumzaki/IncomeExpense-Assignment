import React, { Component } from 'react';

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    this.state = {currency:'Income' , date:date}
    this.onCurrencySelect = this.onCurrencySelect.bind(this)
  }

  onCurrencySelect (e) {
    this.setCurrency(e.target.value)
  }
setCurrency(inc){
  this.setState({currency:inc})
}
  render() {
      return (
        <div className="app">
        <div style={{margin:'auto'}}>
        <span style={{fontSize: 40, fontFamily: 'Bungee'}}> Account Ballance </span>
        </div>
          <div className="select-container">
          <input placeholder="Description" type="text"  className="inputst" /> 
          <input placeholder="Ammount" type="number" className="inputst"/> 
          <div>
     
            <span style={{fontSize: 18, fontFamily: 'Bungee'}}> Transaction Type </span>
            <select value={this.state.currency} onChange={this.onCurrencySelect}>
            
            <option  value="Income">Income</option>
            <option value="Expense">Expense</option>
            </select>
            </div>
          </div>

        </div>
      )
    }
  }


export default App;
