import React from 'react';

const ReactionTime = ({ reactionTime, hasClicked, pageView, startGame }) => {
  let time;
  if (hasClicked) {
    if (reactionTime !== null && reactionTime !== undefined) {
      time = `${reactionTime}ms`;
    } else {
      time = 'misfired';
    }
  }
  return (
    <div>
      <h3>
        {time}
      </h3>
      <br />
      <button name='Start Game' value='Start Game' onClick={e => startGame(e)}>Try Again</button>
      <button name='Username' value='Username' onClick={pageView}>New Username</button>
      <button name='High Scores' value='High Scores' onClick={pageView}>High Scores</button>
    </div>
  )
}

export default ReactionTime;