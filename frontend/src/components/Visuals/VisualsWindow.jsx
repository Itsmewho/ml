import PropTypes from 'prop-types';
import { TOPIC_REGISTRY } from '../../config/topicRegistry';
import styles from './styles/visuals.module.css';

const VisualsWindow = ({ topicId, params }) => {
  // 1. Find the correct component in the registry
  const topicConfig = TOPIC_REGISTRY[topicId];

  // 2. If found, grab the Visual component, otherwise null
  const SpecificVisualComponent = topicConfig ? topicConfig.visual : null;

  return (
    <div className={styles.visualContainer}>
      <div className={styles.graphContainer}>
        {SpecificVisualComponent ? (
          // 3. Render it dynamically!
          <SpecificVisualComponent params={params} />
        ) : (
          <p>Visual not found for {topicId}</p>
        )}
      </div>
    </div>
  );
};

VisualsWindow.propTypes = {
  topicId: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
};

export default VisualsWindow;
