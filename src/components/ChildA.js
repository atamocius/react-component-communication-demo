import React, { Fragment } from 'react';
import GrandChildE from './GrandChildE';

const ChildA = ({ label, list }) => {
  const listItems = list.map((v, i) => <li key={i}>{v}</li>);

  return (
    <Fragment>
      <div>{label}</div>
      <ul>{listItems}</ul>
      <GrandChildE />
    </Fragment>
  );
};

export default ChildA;
