import { useState } from 'react';
import style from './styles/HomePage.module.css';

function HomePage() {
  const [selectedView, setSelectedView] = useState('data');

  return (
    <div className={style.homeContainer}>
      <div className={style.homeGrid}>
        <div className={style.gridMain}>
          <div className={style.subGrid}>
            <div className={style.panel}>stock chart</div>
            <div className={style.panel}>fundamentals poep</div>
          </div>
        </div>
        <div className={style.gridSubMenu}>submenu</div>
        <div className={style.gridMenu}>icons</div>
      </div>
    </div>
  );
}

export default HomePage;
