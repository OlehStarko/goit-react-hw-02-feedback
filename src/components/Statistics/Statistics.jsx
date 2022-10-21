import PropTypes from 'prop-types';
import css from '../../css/feedback.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total();
  const positiveValue = positivePercentage();
  return (
    <>
      {!!totalFeedback ? (
        <div className={css.feedback__container}>
          <p className={css.feedback__element}>Good: {good}</p>
          <p className={css.feedback__element}>Neutral: {neutral}</p>
          <p className={css.feedback__element}>Bad: {bad}</p>
          <p className={css.feedback__element}>Total: {totalFeedback}</p>
          <p className={css.feedback__element}>
            Positive feedback: {positiveValue} %
          </p>
        </div>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
