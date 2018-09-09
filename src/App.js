import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import InputC from './Components/input';
import Button from './Components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputC value="Enter something"/>
        <Button string="Button 1"/>
        <Button string="Button 2"/>
        <Button string="Button 3"/>

      </div>
    );
  }
}

export default App;
