import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {inputValue: 0}
  }

  addIfOdd = ()=>{
    if(this.props.value % 2 === 0){
      this.props.onChange({type: 'INCREMENT'}) 
    }
  }

  addAsync = () => {
    setTimeout(()=>{
      this.props.onChange({type: 'INCREMENT'})
    },2000)
  }

  add2 = () =>{
    this.props.onChange({type: 'ADD_2'})
  }

  addAny = () =>{
    this.props.onChange({type: 'ADD_ANY',payload: +this.state.inputValue})
  }

  render() {
    return (
      <div className="App">
        <p>
          Clicked: <span id="value">{this.props.value}</span> times
          {/* <button onClick={()=>this.props.onChange({type: 'INCREMENT'})}>+</button>
          <button onClick={()=>this.props.onChange({type: 'DECREMENT'})}>-</button>
          <button onClick={this.addIfOdd}>如果是双数就+1</button>
          <button onClick={this.addAsync}>异步+1</button>
          <button onClick={this.add2}>+2</button> */}
          <input value={this.state.inputValue} onChange={(e)=> this.setState({inputValue: e.target.value})}/>
          <button onClick={this.addAny}>添加</button>
        </p>
      </div>
    );
  }
}

export default App;
