import React, { Component } from 'react';

class Checkbox extends Component {
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

  render() {
    return (
      <input type="checkbox" onChange={this.handleChange} checked={this.state.active} />
    )
  }
}

export default Checkbox;
