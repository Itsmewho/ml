import { useState } from 'react';
import style from './styles/HomePage.module.css';
import { APP_DATA } from '../config/topicData';
import { TOPIC_REGISTRY } from '../config/topicRegistry';

import VisualsWindow from '../components/Visuals/VisualsWindow';
import FundamentalsWindow from '../components/Fundamentals/FundamentalsWindow';
import TopicMenu from '../components/Menu/TopicMenu';
import SideMenu from '../components/Menu/SideMenu';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('math');

  // Initialize state based on the default topic
  const defaultTopicId = APP_DATA['math'].topics[0].id;
  const defaultRegistry = TOPIC_REGISTRY[defaultTopicId];

  const [selectedTopicId, setSelectedTopicId] = useState(defaultTopicId);
  const [params, setParams] = useState(
    defaultRegistry ? defaultRegistry.initialParams : {},
  );

  // 1. SMART HANDLER:
  const handleTopicChange = (newTopicId) => {
    setSelectedTopicId(newTopicId);

    // Look up new params immediately
    const config = TOPIC_REGISTRY[newTopicId];
    setParams(config ? config.initialParams : {});
  };

  // 2. SMART HANDLER:
  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);

    // Find the first topic of this new category
    const firstTopicId = APP_DATA[categoryKey].topics[0].id;
    setSelectedTopicId(firstTopicId);

    // Set params for that first topic
    const config = TOPIC_REGISTRY[firstTopicId];
    setParams(config ? config.initialParams : {});
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.homeGrid}>
        <div className={style.panelTop}>
          <div className={style.visualsWindow}>
            <VisualsWindow topicId={selectedTopicId} params={params} />
          </div>
        </div>
        <div className={style.panel}>
          <div className={style.fundamentalsWindow}>
            <FundamentalsWindow
              topicId={selectedTopicId}
              params={params}
              setParams={setParams}
            />
          </div>
        </div>
        <div className={style.gridSubMenu}>
          <div className={style.topicWindow}>
            <TopicMenu
              category={selectedCategory}
              activeTopicId={selectedTopicId}
              onSelectTopic={handleTopicChange}
            />
          </div>
        </div>
        <div className={style.gridMenu}>
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
