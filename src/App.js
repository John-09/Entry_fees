import React, { Component } from 'react';
import Free from './Components/Free/Free';
import Paid from './Components/Paid/Paid';
import Convert from './Components/Convert/Convert';
import './App.css';
import 'tachyons';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state={
      input: '',
      output: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(this.state.input)
    
  }

  onButtonSubmit=(output)=>{
    this.setState({output: this.state.input/10});
    console.log(this.state.output)
  }

  render() {
    return (
        <div>
          <BrowserRouter>
          <Route path="/" exact>
            <h1 className='App'>Entry fees</h1>
            <div className='button'>
              <button className='button1 ma3'>Save</button>
              <button className='button2 ma3'>Preview</button>
            </div>
            <div className='align'>
              <Free />
              <Paid /> 
            </div>
            </Route>
              <Route path="/Convert">
                <Convert 
                  onInputChange={this.onInputChange} 
                  onButtonSubmit={this.onButtonSubmit} 
                  OutputChange={this.state.output} 
                />
              </Route>
              <Route path="/" exact>
                <div className='button'>
                  <button className='button1 ma3'>Previous</button>
                  <button className='button2 ma3'>Next</button>
                </div>
              </Route>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;


//Buttons
//free component
//paid component