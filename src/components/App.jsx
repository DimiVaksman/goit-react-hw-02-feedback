import { Component } from 'react';
import {Layout} from './Layout/Layout'
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from './section/section'


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  leaveFeedback = evt => {
    this.setState({ [evt]: this.state[evt] + 1 });
  };
  render() {
    return (
<Layout>
<Section title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
      <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          positiveFeedback={this.countPositiveFeedbackPercentage(this.state)}
        />
      </Section>
</Layout>
    );
  }
}
