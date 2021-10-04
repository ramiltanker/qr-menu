import React from 'react';

// Styles
import styles from './Card.module.css';
// Styles

// Components
import BasketButton from '../BasketButton/BasketButton';
// Components

import testImage from '../../assets/images/testImages/margarite.png';

const Card = ({ name, text, price }) => {
  return (
    <div className={styles.card}>
      <img src={testImage} alt="test" className={styles.image} />
      <div className={styles.description}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.price}>{price} тг</p>
      </div>
    </div>
  );
};

export default Card;
