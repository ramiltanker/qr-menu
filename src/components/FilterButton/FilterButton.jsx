import React from 'react';

// Styles
import styles from './FilterButton.module.css';
// Styles

const FilterButton = ({ ruName, enName }) => {
  const [buttonHover, setButtonHover] = React.useState(false);

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonUnHover = () => {
    setButtonHover(false);
  };

  return (
    <button className={styles.button} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonUnHover}>
      <p className={`${styles.name_en} ${buttonHover ? styles.name_en_active : styles.name_en}`}>{enName}</p>
      <p className={`${styles.name_ru} ${buttonHover ? styles.name_ru_active : styles.name_ru}`}>{ruName}</p>
    </button>
  );
};

export default FilterButton;
