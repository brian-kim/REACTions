import React from 'react';
import Basic from './Basic.jsx';
import Button from './Button.jsx';
import ReactionTime from './ReactionTime.jsx';
import moment from 'moment';
import axios from 'axios';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: null,
      renderedTime: null,
      clickedTime: null,
      reactionTime: null,
      hasClicked: false,
    }
    this.finalTime = this.finalTime.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.startGame();
  }
  
  startGame() {
    this.setState({
      gameMode: null,
      reactionTime: null,
      hasClicked: false,
    })
    const randomTime = (Math.ceil(Math.random() * 3) + 1) * 1000;
    const startTime = moment();
    this.timeoutHandle = setTimeout(() => {
      this.setState({
        gameMode: 'basic',
        renderedTime: startTime.add(randomTime, 'ms')
      });
    },  randomTime);
  }

  finalTime() {
    let { renderedTime, hasClicked } = this.state;
    let reactionTime, clickedTime;
    if (!hasClicked) {
      clickedTime = moment();
      this.setState({
        hasClicked: true
      });
      const difference = parseFloat(moment.utc(moment(clickedTime,"DD/MM/YYYY HH:mm:ss").diff(moment(renderedTime,"DD/MM/YYYY HH:mm:ss"))).format("s.SSSS"));
      if (!isNaN(difference) && difference < 10) {
        reactionTime = difference * 1000;
      }
      this.setState({
        clickedTime,
        reactionTime
      }, () => this.submitScore())
    } else {
      window.alert('Restart to try again!')
    }
  }

  submitScore() {
    let { reactionTime } = this.state;
    let username;
    if (this.props.username === '') {
      username = 'Anonymous';
    } else {
      username = this.props.username
    }
    axios.post('/scores', {
      username,
      reactionTime
    })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render () {
    let { gameMode, reactionTime, hasClicked } = this.state;
    let game;
    if (gameMode === 'basic') {
      game = <Basic />
    }
    return (
      <div>
        <Button times={() => this.finalTime()}/>
        <div>
          {game}
        </div>
        <div>
          <ReactionTime reactionTime={reactionTime} hasClicked={hasClicked} pageView={this.props.pageView} startGame={this.startGame} />
        </div>
      </div>
    )
  }
}