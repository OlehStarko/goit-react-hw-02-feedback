import PropTypes from 'prop-types';

import css from '../../css/feedback.module.css';

const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <>
      <ul className={css.button__box}>
        {Object.keys(options).map(btnName => {
          return (
            <li key={btnName} className={css.feedback__item}>
              <button type="button" onClick={onClickFeedback}>
                {btnName}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onClickFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
