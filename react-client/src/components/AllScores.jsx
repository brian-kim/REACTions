import React from 'react';
import axios from 'axios';

export default class AllScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    }
  }
  
  componentDidMount() {
    this.getScores();
  }

  getScores() {
    axios.get('/scores')
      .then(response => {
        this.setState({
          scores: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    let { scores } = this.state;
    return (
      <div>
        <button name='Username' value='Username' onClick={this.props.pageView}>Enter Username</button>
        <div>
          <h3>All Scores</h3>
            {scores.map(score => {
              let time;
              if (!score.reactionTime) {
                time = 'Misfiring Scrub';
              } else {
                time = `${parseInt(score.reactionTime)}ms`
              }
              return <div key={score._id}>{score.username} - {time}</div>
            })}
        </div>
      </div>
    )
  }
}