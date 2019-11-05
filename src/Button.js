import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { active } = this.props;
    return (
      <button
        className={active ? 'button-on' : 'button-off'}
        onClick={this.props.handleChange}
        type="button"
      >
        {active ? 'on' : 'off'}
      </button>
    )
  }
}

export default Button;
