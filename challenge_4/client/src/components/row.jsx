import React from 'react';
import Square from './square.jsx';

var Row = props => {
  var squares = [];
  for (var i = 0; i < props.size[0]; i++) {
    squares.push(<Square x={i} y={props.y} key={i} onClick={props.onClick} />);
  }
  return <div className="row">{squares}</div>;
};

export default Row;
