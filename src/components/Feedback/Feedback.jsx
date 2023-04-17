import { Component } from 'react';
import PropTypes from 'prop-types';

export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    
      handleFeedackGood = () => {
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
      }
      handleFeedackNeutral = () => {
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
      }
      handleFeedackBad = () => {
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
      }

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
      <button type="button" onClick={this.handleFeedackGood}>Good</button>
      <button type="button" onClick={this.handleFeedackNeutral}>Neutral</button>
      <button type="button" onClick={this.handleFeedackBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Positive feedback: %</p>
        </div>
      </div>
    );
  }
}
