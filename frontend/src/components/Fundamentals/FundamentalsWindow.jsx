import PropTypes from 'prop-types';
import styles from './styles/fundamentals.module.css';
import { TOPIC_REGISTRY } from '../../config/topicRegistry';

const FundamentalsWindow = ({ topicId, params, setParams }) => {
  const topicConfig = TOPIC_REGISTRY[topicId];
  const SpecificControl = topicConfig ? topicConfig.controls : null;
  const SpecificExplanation = topicConfig ? topicConfig.explanation : null;

  return (
    <div className={styles.fundamentalContainer}>
      {/* Section 1: The Explanation */}
      <div className={styles.explanationSection}>
        {SpecificExplanation ? (
          <SpecificExplanation params={params} />
        ) : (
          <p>No info available.</p>
        )}
      </div>

      <hr className={styles.divider} />

      {/* Section 2: The Controls */}
      <div className={styles.controlsSection}>
        <h4 className={styles.controlsTitle}>Parameters</h4>
        {SpecificControl ? (
          <SpecificControl params={params} setParams={setParams} />
        ) : (
          <p>No controls available.</p>
        )}
      </div>
    </div>
  );
};

FundamentalsWindow.propTypes = {
  topicId: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

export default FundamentalsWindow;
