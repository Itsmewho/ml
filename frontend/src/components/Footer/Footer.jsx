import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p className={styles.footer_text}>© 2025 JMT - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
