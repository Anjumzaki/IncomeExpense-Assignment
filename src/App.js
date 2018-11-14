import React, { Component } from 'react';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      date:date,
      amm:'',
      desc:'',
      type:'Income',
       data:[],
       ballance:0,
       }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreateNote = this.handleCreateNote.bind(this)
  }
  handleCreateNote = () => {
    var prev = this.state.ballance;
     var amm = this.state.amm;
    let data = [...this.state.data];   //creating the copy

    //adding new data
    data.push({
      type: this.state.type,
      date : this.state.date,
      desc : this.state.desc,
      amm : this.state.amm,
    });

    if(this.state.type==="Income"){
      this.setState({
        ballance:prev- (-amm)
      })
    }
    if(this.state.type==="Expense"){
      this.setState({
        ballance:prev-amm
      })
    }
    //updating the state value
    this.setState({ data });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
 
  render() {
    return (
      <div className="app">
        <div style={{ margin: 'auto' }}>
          <span style={{ fontSize: 40, }}> Account Ballance </span>
        </div>
        <div className="select-container">
          <input name="desc" placeholder="Description" type="text" value={this.state.desc} onChange={this.handleChange} className="inputst" />
          <input  name="amm" placeholder="Ammount" type="number" value={this.state.amm} onChange={this.handleChange} className="inputst" />
          <div>

            <span style={{ fontSize: 18, }}> Transaction Type </span>
            <select name="type" value={this.state.type} onChange={this.handleChange}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <button onClick={this.handleCreateNote}>ADD</button>
          </div>
        </div>
        <table className="frtable" >
          <thead>
            <tr>
            <td>Income</td>
            <td>Expense</td>
            </tr>
          </thead>
          <tbody>
            <tr>
           <td>
            { 
            this.state.data.map((data) =>
            {
            if(data.type=='Income'){
                 return <li>
                {data.desc}-
                {data.amm} $-
                {data.date}
                
              </li>
              
            }
          }
            )
            } 
            </td>
             <td>
             {
            this.state.data.map((data) =>
            {
            if(data.type=='Expense'){
             
              return               <li>
                 {data.desc}-
                {data.amm} $-
                {data.date}
              </li>
              
            }
          }
            )
            } 
             </td>
            </tr>
            
             
          
            
          </tbody>
          
        </table>
        <div className="forbal">
        <hr></hr>
          <span>
            Ballance :
            {this.state.ballance} $
          </span>
        </div>
       
      </div>
    )
  }
}


export default App;
