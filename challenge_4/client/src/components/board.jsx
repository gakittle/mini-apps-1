import React from 'react';
import Row from './row.jsx';

var Board = props => {
  var rows = [];
  for (var i = 0; i < props.size[1]; i++) {
    rows.push(<Row size={props.size} y={i} key={i} />);
  }
  return <div className="board">{rows}</div>;
};

export default Board;
