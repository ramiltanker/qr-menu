import React from 'react';

// Styles
import styles from './Header.module.css';
// Styles

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.subtitle}>Cafe & Restaurant</div>
        <h1 className={styles.title}>
          <span>Tino</span> Pizza
        </h1>
        <div className={styles.address}>32 Kabanbai batyr str., Taldykorgan</div>
        <div className={styles.time}>10:00-00:00</div>
      </div>
    </header>
  );
};

export default Header;
