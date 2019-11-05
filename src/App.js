import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      active: !this.state.active
    });
  }

  render () {
    return (
      <div className="App">
        <Checkbox active={this.state.active} />
        <Button active={this.state.active} />
      </div>
    );
  }
}

export default App;
