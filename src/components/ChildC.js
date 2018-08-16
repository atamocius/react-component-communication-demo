import React, { Component } from 'react';

class ChildC extends Component {
  render() {
    const { label, jumpCount } = this.props;
    this.props.onJump(jumpCount);

    return <div>{label}</div>;
  }

  printMessage(msg) {
    console.log('Child C >>>', msg);
  }
}

export default ChildC;
