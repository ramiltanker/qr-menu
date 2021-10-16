import React from 'react';

// Стили
import styles from './Overlay.module.css';
// Стили

function Overlay({ handleSwitchBurgerMenu }) {
  return (
    <div
      className={styles.overlay}
      onClick={() => {
        handleSwitchBurgerMenu();
      }}
    ></div>
  );
}

export default Overlay;
