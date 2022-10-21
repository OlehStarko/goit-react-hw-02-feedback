import React, { Component } from 'react';

import Section from '../components/Section/Section';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickFeedback = event => {
    const label = event.target.textContent;

    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );
    return total;
  };

  countPositivePercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return percent;
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onClickFeedback={this.onClickFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
