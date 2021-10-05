import React from 'react';

// Styles
import styles from './Footer.module.css';
// Styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        <span>Tino</span> Pizza
      </p>
      <p className={styles.text}>🍕Пицца на дровах🍕</p>
      <p className={styles.text}>График работы: 10:00-00:00</p>
    </footer>
  );
};

export default Footer;
