import React from 'react';
import { useHistory } from 'react-router';
import { CSSTransition } from 'react-transition-group';

// Redux
import { DELETE_CATEGORY_FROM_BUTTON, DELETE_SUBCATEGORY_FROM_BUTTON } from '../../redux/actions/filter';
import { useSelector, useDispatch } from 'react-redux';
// Redux

// Стили
import styles from './FilterMobile.module.css';
import './category-transition.css';
// Стили

// Components
import Overlay from '../Overlay/Overlay';
import FilterButton from '../FilterButton/FilterButton';
import Category from '../Category/Category';
import SubCategory from '../SubCategory/SubCategory';
// Components

// Images
import closeIcon from '../../assets/images/icons/close.svg';
// Images

// Constants
import filterCards from '../../utils/constants/filterCards';
// Constants

function FilterMobile({ screenWidth, isBurgerMenuActive, setIsBurgerMenuActive, filterRef, handleCloseBurgerMenu }) {
  const closeIconRef = React.useRef();
  const categoryRef = React.useRef();
  const subCategoryRef = React.useRef();

  const dispatch = useDispatch();

  const { isCategoryShow, isSubCategoryShow } = useSelector((store) => store.filter);

  const closeBurgerMenu = () => {
    if (isSubCategoryShow) {
      dispatch({ type: DELETE_SUBCATEGORY_FROM_BUTTON });
    }
    if (isCategoryShow) {
      dispatch({ type: DELETE_CATEGORY_FROM_BUTTON });
    }
    handleCloseBurgerMenu();
  };

  return (
    <>
      <Overlay handleSwitchBurgerMenu={closeBurgerMenu} />
      <div className={styles.container} key={'filter'} ref={filterRef}>
        <div className={styles.filter_mobile}>
          <CSSTransition
            in={isBurgerMenuActive}
            timeout={3000}
            mountOnEnter
            key="close-icon"
            classNames="close-icon"
            appear={true}
            nodeRef={closeIconRef}
          >
            <img
              src={closeIcon}
              alt="close-icon"
              className={styles.close_icon}
              onClick={closeBurgerMenu}
              ref={closeIconRef}
            />
          </CSSTransition>
          {filterCards.map((item, index) => {
            return (
              <FilterButton
                categories={item.categories && item.categories}
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
      <CSSTransition
        in={isCategoryShow}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="category"
        appear={true}
        nodeRef={categoryRef}
      >
        <Category
          categoryRef={categoryRef}
          screenWidth={screenWidth}
          isBurgerMenuActive={isBurgerMenuActive}
          setIsBurgerMenuActive={setIsBurgerMenuActive}
        />
      </CSSTransition>
      <CSSTransition
        in={isSubCategoryShow}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="subCategory"
        appear={true}
        nodeRef={subCategoryRef}
      >
        <SubCategory
          subCategoryRef={subCategoryRef}
          screenWidth={screenWidth}
          isBurgerMenuActive={isBurgerMenuActive}
          setIsBurgerMenuActive={setIsBurgerMenuActive}
        />
      </CSSTransition>
    </>
  );
}

export default FilterMobile;
