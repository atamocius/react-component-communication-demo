import React, { Component } from 'react';

class ChildD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'Child D',
      count: props.defaultCount,
    };
  }

  render() {
    const { label, count } = this.state;

    return (
      <div onClick={() => this._handleClick()}>{`${label} ==> ${count}`}</div>
    );
  }

  updateLabel(newLabel) {
    this.setState({
      label: newLabel,
    });
  }

  _handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }
}

export default ChildD;
