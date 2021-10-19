import React from 'react';

// Styles
import styles from './Main.module.css';
// Styles

import qrMenu from '../../assets/images/testImages/qr-menu.jfif';

function Main({ screenWidth }) {
  return (
    <section className={styles.main}>
      <p className={styles.text}>QR-MENU</p>
      <img src={qrMenu} alt="qr-menu" className={styles.image} />
      {screenWidth > 768 && (
        <p className={styles.subtext}>Предложение предназначено для планшетов и мобильных устройств</p>
      )}
    </section>
  );
}

export default Main;
