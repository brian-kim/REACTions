import React from 'react';

const UsernamePage = ({ username, pageView, text }) => {
  return (
    <div>
      <label htmlFor='username' /> Enter username:
      <input type='text' name='username' id='username' value={username} onChange={text} />
      <br /><br />
      <button name='Start Game' value='Start Game' onClick={pageView}>Start Game</button>
      <button name='High Scores' value='High Scores' onClick={pageView}>High Scores</button>
    </div>
  )
}

export default UsernamePage;