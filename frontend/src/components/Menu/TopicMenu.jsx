import styles from './styles/topic.module.css';
import { APP_DATA } from '../../data/topicData';
import PropTypes from 'prop-types';

const TopicMenu = ({ category, activeTopicId, onSelectTopic }) => {
  if (!APP_DATA[category]) return <div>Loading...</div>;

  const currentTopics = APP_DATA[category].topics;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3 className={styles.header}>{APP_DATA[category].label}</h3>
      </div>

      <div className={styles.list}>
        {currentTopics.map((topic) => (
          <button
            key={topic.id}
            className={`${styles.topicBtn} ${
              activeTopicId === topic.id ? styles.activeBtn : ''
            }`}
            onClick={() => onSelectTopic(topic.id)}
            type="button"
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
};

TopicMenu.propTypes = {
  category: PropTypes.string.isRequired,
  activeTopicId: PropTypes.string.isRequired,
  onSelectTopic: PropTypes.func.isRequired,
};

export default TopicMenu;
