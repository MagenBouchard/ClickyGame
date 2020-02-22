import React from 'react';
import './gameover.css';

const GameOver = (props) => {
  if (props.score >= 12) {
    return(
      <div>
        <h1 className="text-center">Great Job you won!</h1>
      <div className="winner text-center container-fluid">  
        <button className="new-game btn btn btn-info btn-lg" onClick={() => props.handleClick(props.gameover)}>new game</button>
      </div>
      </div>
    )
  } else {
    return(
      <div className="container text-center">
        <h1>Game is done!</h1>
        <h1>Puppy is greatly disappointed!</h1>
        <h1 className="gameover">{props.countdown}</h1>
      </div>
     
    )
  }
}
;

export default GameOver;
