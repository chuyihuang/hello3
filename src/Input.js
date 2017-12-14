import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 使用propTypes檢查props形態
export default class Input extends Component {

  state = {
    value: this.props.value
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
    )
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired
}