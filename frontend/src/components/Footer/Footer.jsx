import styles from './styles/Footer.module.css';
import Tooltip from '../Tooltip/Tooltip';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p className={styles.footer_text}>© 2025 JMT - All rights reserved.</p>
        <Tooltip tooltipText="Go to github" position="left">
          <a href="https://github.com/Itsmewho" aria-label="go to github" target="_blank">
            <div className={styles.footerLink}></div>
          </a>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
