import React from 'react';
import { useHistory } from 'react-router';

import { CSSTransition } from 'react-transition-group';

// Components
import SubCategoryButton from '../SubCategoryButton/SubCategoryButton';
// Conponents

// Styles
import styles from './SubCategory.module.css';
import './transition.css';
// Styles

// Redux
import { DELETE_SUBCATEGORY_FROM_BUTTON } from '../../redux/actions/filter';

import { useSelector, useDispatch } from 'react-redux';
// Redux

// Images
import goBackIcon from '../../assets/images/icons/go-back.svg';
// Images

function SubCategory({ isBurgerMenuActive, setIsBurgerMenuActive, subCategoryRef }) {
  const { subCategory, isSubCategoryShow } = useSelector((store) => store.filter);

  const history = useHistory();
  const dispatch = useDispatch();

  const BackIconRef = React.useRef();

  const handleGoBack = () => {
    history.goBack();
    dispatch({ type: DELETE_SUBCATEGORY_FROM_BUTTON });
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.subCategory}`} ref={subCategoryRef}>
        <CSSTransition
          in={isSubCategoryShow}
          appear={true}
          timeout={300}
          classNames="back-icon"
          key="go-back-icon"
          nodeRef={BackIconRef}
        >
          <img
            src={goBackIcon}
            alt="go-back-icon"
            className={styles.go_back_icon}
            ref={BackIconRef}
            onClick={handleGoBack}
          />
        </CSSTransition>
        {subCategory &&
          subCategory.map(({ enName, ruName, path }, index) => {
            return (
              <SubCategoryButton
                enName={enName}
                ruName={ruName}
                key={index}
                path={path}
                isBurgerMenuActive={isBurgerMenuActive}
                setIsBurgerMenuActive={setIsBurgerMenuActive}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SubCategory;
