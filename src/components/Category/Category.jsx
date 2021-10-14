import React from 'react';

import { CSSTransition } from 'react-transition-group';

// Components
import CategoryButton from '../CategoryButton/CategoryButton';
// Conponents

// Styles
import styles from './Category.module.css';
import './transition.css';
// Styles

// Redux
import { DELETE_CATEGORY_FROM_BUTTON } from '../../redux/actions/filter';

import { useSelector, useDispatch } from 'react-redux';
// Redux

// Images
import goBackIcon from '../../assets/images/icons/go-back.svg';
// Images

function Category({ screenWidth, isBurgerMenuActive, setIsBurgerMenuActive, categoryRef }) {
  const { category, isCategoryShow } = useSelector((store) => store.filter);

  const dispatch = useDispatch();

  const goBackIconRef = React.useRef();

  const handleGoBack = () => {
    dispatch({ type: DELETE_CATEGORY_FROM_BUTTON });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.category}`} ref={categoryRef}>
          <CSSTransition
            in={isCategoryShow}
            appear={true}
            timeout={300}
            classNames="back-icon"
            key="go-back-icon"
            nodeRef={goBackIconRef}
          >
            <img
              src={goBackIcon}
              alt="go-back-icon"
              className={styles.go_back_icon}
              ref={goBackIconRef}
              onClick={handleGoBack}
            />
          </CSSTransition>
          {category &&
            category.map((item, index) => {
              return (
                <CategoryButton
                  subCategories={item.subCategories && item.subCategories}
                  enName={item.enName}
                  ruName={item.ruName}
                  key={index}
                  path={item.path}
                  screenWidth={screenWidth}
                  isBurgerMenuActive={isBurgerMenuActive}
                  setIsBurgerMenuActive={setIsBurgerMenuActive}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Category;
