import PropTypes from 'prop-types';
import css from '../../css/feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.feedback__container}>
      <h1 className={css.feedback__title}>{title}</h1>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
