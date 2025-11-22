import { useState } from 'react';
import styles from './styles/Header.module.css';
import Toast from '../Toast/Toastpopup';
import Tooltip from '../Tooltip/Tooltip';

const Header = () => {
  const [toast, setToast] = useState(null);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Tooltip tooltipText="Search" position="right">
            <div>search</div>
          </Tooltip>
          <Tooltip tooltipText="Menu" position="left">
            <div className={styles.navIcon}></div>
          </Tooltip>
        </div>
      </header>
      {toast && (
        <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
      )}
    </>
  );
};

export default Header;
