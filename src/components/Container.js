import React, { Fragment } from 'react';

const Container = ({ header, children }) => {
  console.log(children);

  const childItems = children.map((child, i) => {
    return <h2 key={i}>{child}</h2>;
  });

  return (
    <Fragment>
      <h1>{header}</h1>
      <div>{childItems}</div>
    </Fragment>
  );
};

export default Container;
