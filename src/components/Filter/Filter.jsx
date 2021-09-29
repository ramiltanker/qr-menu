import React from 'react';

// Styles
import styles from './Filter.module.css';
// Styles

// Components
import FilterButton from '../FilterButton/FilterButton';
// Components

// Constants
import filterCards from '../../utils/constants/filterCards';
// Constants

const Filter = () => {
  return (
    <div className={styles.filter}>
      {filterCards.map(({ enName, ruName }, index) => {
        return <FilterButton enName={enName} ruName={ruName} key={index} />;
      })}
    </div>
  );
};

export default Filter;
