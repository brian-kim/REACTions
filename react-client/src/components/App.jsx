import React from 'react';
import UsernamePage from './UsernamePage.jsx';
import AllScores from './AllScores.jsx';
import Game from './Game.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      page: 'Username'
    }
    this.textInput = this.textInput.bind(this);
    this.pageView = this.pageView.bind(this);
  }

  textInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  pageView(e) {
    this.setState({
      page: e.target.value
    })
  }

  render () {
    let { page, username } = this.state;
    let renderedPage;
      if (page === 'Username') {
        renderedPage = <UsernamePage username={username} pageView={e => this.pageView(e)} text={e => this.textInput(e)} />;
      } else if (page === 'High Scores') {
        renderedPage = <AllScores pageView={e => this.pageView(e)} />;
      } else if (page === 'Start Game') {
        renderedPage = <Game pageView={e => this.pageView(e)} username={username}/>;
      }
    return (
      <div>
        {renderedPage}
      </div>
    )
  }
}