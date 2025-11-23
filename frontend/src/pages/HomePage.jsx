import { useState } from 'react';
import style from './styles/HomePage.module.css';
import { APP_DATA } from '../data/topicData';

import VisualsWindow from '../components/Visuals/VisualsWindow';
import FundamentalsWindow from '../components/Fundamentals/FundamentalsWindow';
import TopicMenu from '../components/Menu/TopicMenu';
import SideMenu from '../components/Menu/SideMenu';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('math');

  const [selectedTopicId, setSelectedTopicId] = useState(APP_DATA['math'].topics[0].id);

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setSelectedTopicId(APP_DATA[categoryKey].topics[0].id);
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.homeGrid}>
        <div className={style.gridMain}>
          <div className={style.subGrid}>
            <div className={style.panel}>
              {/* Top Left: Visuals (TrendWindow) */}
              <div className={style.visualsWindow}>
                <VisualsWindow topicId={selectedTopicId} />
              </div>
            </div>
            <div className={style.panel}>
              {/* Bottom Left: Fundamentals (ModelWindow) */}
              <div className={style.fundamentalsWindow}>
                <FundamentalsWindow topicId={selectedTopicId} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.gridSubMenu}>
          {/* Middle Column: Topic List (DataWindow) */}
          <div className={style.topicWindow}>
            <TopicMenu
              category={selectedCategory}
              activeTopicId={selectedTopicId}
              onSelectTopic={setSelectedTopicId}
            />
          </div>
        </div>
        <div className={style.gridMenu}>
          {/* Right Column: Main Icons (SideMenu) */}
          <div className={style.sideMenu}>
            <SideMenu
              activeCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
