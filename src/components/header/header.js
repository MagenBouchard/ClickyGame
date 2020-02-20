import React from 'react';
import './header.css';

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1>Click a puppy!!</h1>
      <h3 className="info">Click on a puppy to earn points, if you click the same puppy twice you lose! <br></br>Don't make the puppies sad!</h3>
    </div>
  </div>
);

export default Header;