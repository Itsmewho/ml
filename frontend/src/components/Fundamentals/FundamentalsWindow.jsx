import PropTypes from 'prop-types';
import styles from './styles/fundamentals.module.css';

const FundamentalsWindow = ({ topicId }) => {
  return (
    <div className={styles.fundamentalContainer}>
      <h3 className="fs-400">Fundamentals & Logic</h3>
      <p>
        Adjust parameters for: <strong>{topicId}</strong>
      </p>
      {/* Placeholder for future sliders/inputs */}
      <div className={styles.ControlPanel}>Control Panel Placeholder</div>
    </div>
  );
};

FundamentalsWindow.propTypes = {
  topicId: PropTypes.string.isRequired,
};

export default FundamentalsWindow;
