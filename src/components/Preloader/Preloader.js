import React from 'react';
import { CSSTransition } from 'react-transition-group';

// Стили
import './Preloader.css';
// Стили

import '../../transition.css';

function Preloader({ setIsLoaderActive, isLoaderActive, isTextActive, setIsTextActive }) {
  const preloaderRef = React.useRef();
  const textRef = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaderActive(false);
      setIsTextActive(false);
    }, 30);
  }, [setIsLoaderActive, setIsTextActive]);

  return (
    <div className="container">
      <CSSTransition
        in={isLoaderActive}
        timeout={3000}
        mountOnEnter
        unmountOnExit
        classNames="loader"
        nodeRef={preloaderRef}
        appear={true}
      >
        <div className="loader" ref={preloaderRef}></div>
      </CSSTransition>
      <CSSTransition
        in={isTextActive}
        timeout={3000}
        mountOnEnter
        unmountOnExit
        classNames="text"
        nodeRef={textRef}
        appear={true}
        key="text"
      >
        <p className="text" ref={textRef} key="text">
          <span>Tino</span> Pizza
        </p>
      </CSSTransition>
    </div>
  );
}

export default Preloader;
