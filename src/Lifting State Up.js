import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
          <p>{this.props.output}</p>
          <button onClick = {this.props.handlerMinus}> - </button>
          <button onClick = {this.props.handlerPlus}> + </button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: 0
    }
  }

  handleOnChange(e){
    if(isNaN(this.state.inputValue)){
      return 0;
    }
    this.setState({inputValue: parseFloat(e.target.value)});
  }

  handleOnClickPlus(e){
    this.setState({inputValue: this.state.inputValue + 1});
  }
  
  handleOnClickMinus(e){
    this.setState({inputValue: this.state.inputValue - 1});
  }

  render(){
    const inputValue = this.state.inputValue;
    const handleOnChange = this.handleOnChange.bind(this);
    const handleOnClickPlus = this.handleOnClickPlus.bind(this);
    const handleOnClickMinus = this.handleOnClickMinus.bind(this);
    return (
        <fieldset>
          <legend>Podaj liczbę.</legend>
          <input 
            value = {parseFloat(inputValue)} onChange = {handleOnChange} />
            <Child 
              handlerPlus = {handleOnClickPlus}
              handlerMinus = {handleOnClickMinus}
              output = {parseFloat(inputValue)}/>
        </fieldset>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


