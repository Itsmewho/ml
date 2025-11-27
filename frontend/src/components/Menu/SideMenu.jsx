import { useState } from 'react';
import styles from './styles/side.module.css';
import PropTypes from 'prop-types';
import { APP_DATA } from '../../data/topicData';
import Tooltip from '../Tooltip/Tooltip';

const SideMenu = ({ activeCategory, onSelectCategory }) => {
  // State to track which icon is currently being hovered
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconGroup}>
        {Object.keys(APP_DATA).map((key) => {
          const category = APP_DATA[key];
          const isActive = activeCategory === key;
          const isHovered = hoveredKey === key;

          // Determine which icon source to show
          // Show active icon if: It is selected OR It is hovered
          const iconSrc =
            isActive || isHovered ? category.icons.active : category.icons.default;

          return (
            <div
              key={key}
              className={`${styles.iconWrapper} ${isActive ? styles.activeWrapper : ''}`}
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <Tooltip
                tooltipText={category.label}
                position="left"
                onClick={() => onSelectCategory(key)}
              >
                <img
                  src={iconSrc}
                  alt={category.label}
                  className={styles.svgIcon}
                  // Fallback if image fails to load
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerText = category.label.charAt(0);
                  }}
                />
              </Tooltip>
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
