import React from 'react';
import css from '../../css/feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  handleNeutralIncrement = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  handleBadIncrement = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  countTotalFeedback() {
    const total = Object.values(this.state).reduce(
      (total, count) => (total += count),
      0
    );
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const percentage = Object.values(this.state).reduce(
      (percentage, count) => percentage / count,
      0
    );
    const totalFeebbackPercentage = (good * 100) / percentage;
    return totalFeebbackPercentage.toFixed();
  }

  render() {
    const total = this.countTotalFeedback();
    const totalFeebbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.feedback__container}>
        <div className={css.button__box}>
          <button type="button" onClick={this.handleGoodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadIncrement}>
            Bad
          </button>
        </div>

        <h2 className={css.feedback__title}>Statistick</h2>
        <p className={css.feedback__element}>Good: {this.state.good}</p>
        <p className={css.feedback__element}>Neutral: {this.state.neutral}</p>
        <p className={css.feedback__element}>Bad: {this.state.bad}</p>
        <p className={css.feedback__element}>Total: {total}</p>
        <p className={css.feedback__element}>
          Total: {totalFeebbackPercentage}%
        </p>
      </div>
    );
  }
}

export default Feedback;
