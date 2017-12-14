import React, { Component } from 'react';

const ClickAlert = (SomeComponent) => class extends Component {
  render() {
    return (
      <div onClick={() => alert('按我!!!')}>
        <SomeComponent {...this.props} />
      </div>
    );
  }
}

export default ClickAlert;