import styles from './styles/side.module.css';
import PropTypes from 'prop-types';
import { APP_DATA } from '../../data/topicData';

// Receiving props to control the parent state
const SideMenu = ({ activeCategory, onSelectCategory }) => {
  const handleKeyDown = (e, key) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCategory(key);
    }
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconGroup}>
        {/* Map through our APP_DATA to generate icons dynamically */}
        {Object.keys(APP_DATA).map((key) => {
          const category = APP_DATA[key];
          const isActive = activeCategory === key;

          return (
            <div
              key={key}
              role="button"
              tabIndex={0}
              className={`${styles.iconWrapper} ${isActive ? styles.activeWrapper : ''}`}
              onClick={() => onSelectCategory(key)}
              onKeyDown={(e) => handleKeyDown(e, key)}
              title={category.label} // Using title as basic tooltip for now
            >
              {/* This represents your icon div (e.g., className={styles.iconMath}) */}
              <div className={styles[category.iconClass]}>
                {/* If you don't have background-images yet, use text as placeholder */}
                {!styles[category.iconClass] && category.label[0]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default SideMenu;
