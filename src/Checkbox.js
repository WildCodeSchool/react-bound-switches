import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <input type="checkbox" onChange={this.props.handleChange} checked={this.props.active} />
    )
  }
}

export default Checkbox;
