import { useState, useEffect } from 'react';
import style from './styles/HomePage.module.css';
import { APP_DATA } from '../data/topicData';

function HomePage() {
  const [selectedView, setSelectedView] = useState('data');

  return (
    <div className={style.homeContainer}>
      <div className={style.homeGrid}>
        <div className={style.gridMain}>
          <div className={style.subGrid}>
            <div className={style.panel}>visuals</div>
            <div className={style.panel}>fundamentals</div>
          </div>
        </div>
        <div className={style.gridSubMenu}>submenu</div>
        <div className={style.gridMenu}>icons</div>
      </div>
    </div>
  );
}

export default HomePage;
