import React, { Component } from 'react';

class Button extends Component {
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
    const { active } = this.state;
    return (
      <button
        className={active ? 'button-on' : 'button-off'}
        onClick={this.handleChange}
        type="button"
      >
        {active ? 'on' : 'off'}
      </button>
    )
  }
}

export default Button;
