import PropTypes from 'prop-types';
import styles from './styles/visuals.module.css';

const VisualsWindow = ({ topicId }) => {
  return (
    <div className={styles.visualContainer}>
      <p>Current Topic: {topicId}</p>
      <div className={styles.graphContainer}>[ Graph for {topicId} will go here ]</div>
    </div>
  );
};

VisualsWindow.propTypes = {
  topicId: PropTypes.string.isRequired,
};

export default VisualsWindow;
