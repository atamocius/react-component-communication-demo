import React from 'react';

import { GrandChildContext } from '../App';

const GrandChildE = () => {
  return (
    <GrandChildContext.Consumer>
      {label => {
        console.log(label);
        return <div>{label}</div>;
      }}
    </GrandChildContext.Consumer>
  );
};

export default GrandChildE;
