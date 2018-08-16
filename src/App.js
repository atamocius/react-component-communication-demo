import React, { Component } from 'react';

import Container from './components/Container';

import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import ChildC from './components/ChildC';
import ChildD from './components/ChildD';

export const GrandChildContext = React.createContext('GrandChild E');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: ['Hello A', 'Hello B', 'Hello C'],
      list: ['item 1', 'item 2', 'item 3'],
    };

    this._childCRef = React.createRef();
    this._childDRef = React.createRef();
  }

  componentDidMount() {
    console.log(this._childCRef);
    this._childCRef.current.printMessage('Hello!');
  }

  render() {
    const { list, labels } = this.state;

    return (
      <Container header="This is a Header!">
        <GrandChildContext.Provider value="HELLO">
          <ChildA label={labels[0]} list={list} />
        </GrandChildContext.Provider>
        <ChildB label={labels[1]} onClick={() => this._handleClickChildB()} />
        <ChildC
          ref={this._childCRef}
          label={labels[2]}
          jumpCount={10}
          onJump={times => this._handleJump(times)}
        />
        <ChildD ref={this._childDRef} defaultCount={5} />
      </Container>
    );
  }

  _handleJump(times) {
    console.log(`I jumped ${times} times`);
  }

  _handleClickChildB() {
    console.log('CLICKED B');
    this.setState({
      labels: ['Clicked!', 'Clicked!', 'Clicked!'],
    });

    this._childDRef.current.updateLabel('Clicked!');
  }
}

export default App;
