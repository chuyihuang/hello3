// import React from 'react';

// const Button = ({name, color, size}) => (
//   <button style={{color, fontSize: `${size}px`, border: '2px solid #c40000'}}>{name}</button>
// )

// Button.defaultProps = {
//   name: "未設定",
//   color: "#444444",
//   size: "60"
// }

// export default Button;

// class version

import React, { Component } from 'react';

export default class Button extends Component {

  static defaultProps = {
    name: "未設定",
    color: "#444444",
    size: "60"
  }

  render() {
    const {color, size, name} = this.props;
    return (
      <button style={{color, fontSize: `${size}px`, border: '2px solid #c40000'}}>{name}</button>
    )
  }

}