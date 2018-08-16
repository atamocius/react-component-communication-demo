import React from 'react';

const ChildB = ({ label, onClick }) => {
  return <div onClick={onClick}>{label}</div>;
};

export default ChildB;
