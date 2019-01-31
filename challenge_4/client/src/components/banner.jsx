import React from 'react';

var Banner = props => {
  return (
    <div className="banner">
      <h1>Connect 4</h1>
      <h3>Connect 4 fun, Connect 4 glory!</h3>
      <h4>Click on a square to place a piece in that column.</h4>
      {props.msg}
    </div>
  );
};

export default Banner;
