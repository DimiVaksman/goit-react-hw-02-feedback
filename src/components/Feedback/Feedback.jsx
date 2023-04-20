import { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  
  positiveFeedback = ({ good, neutral, bad }) =>
    Math.round((good * 100) / this.totalFeedback(this.state));

  handleFeedackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleFeedackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleFeedackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleFeedackGood}>
            Good
          </button>
          <button type="button" onClick={this.handleFeedackNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleFeedackBad}>
            Bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback(this.state)}
          positiveFeedback={this.positiveFeedback(this.state)}
        />
      </div>
    );
  }
}
