import React from 'react';

// Styles
import styles from './Main.module.css';
// Styles

import qrMenu from '../../assets/images/testImages/qr-menu.jfif';

function Main() {
  return (
    <section className={styles.main}>
      <p className={styles.text}>QR-MENU</p>
      <img src={qrMenu} alt="qr-menu" className={styles.image} />
    </section>
  );
}

export default Main;
