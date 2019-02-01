import React from 'react';

var Square = props => {
  var xy = [props.x, props.y];
  var coor = xy.toString();
  return <div className="square" id={coor} onClick={props.onClick} />;
};

export default Square;
