import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Pizza from './components/Pizza/Pizza';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import FirstCourses from './components/FirstCourses/FirstCourses';
import SecondCourses from './components/SecondCourses/SecondCourses';
import Burgers from './components/Burgers/Burgers';
import Salads from './components/Salads/Salads';
import Deserts from './components/Deserts/Deserts';

import Preloader from './components/Preloader/Preloader';
// Components

import './transition.css';

function App() {
  const [isLoaderActive, setIsLoaderActive] = React.useState(true);

  const location = useLocation();
  const history = useHistory();

  // Ширина экрана
  const [screenWidth, setScreenWidth] = React.useState(0);

  function updateScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaderActive(false);
    }, 1);
  }, []);

  React.useEffect(() => {
    history.push('/first-courses');
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  // Ширина экрана

  return (
    <>
      {isLoaderActive ? (
        <CSSTransition in={true} timeout={300} mountOnEnter unmountOnExit classNames="loader">
          <Preloader isLoaderActive={isLoaderActive} />
        </CSSTransition>
      ) : (
        <>
          <Header />
          <Filter screenWidth={screenWidth} />
          <Switch location={location}>
            <Route path="/first-courses" exact>
              <FirstCourses screenWidth={screenWidth} />
            </Route>
            <Route path="/second-courses" exact>
              <SecondCourses screenWidth={screenWidth} />
            </Route>
            <Route path="/pizza" exact>
              <Pizza screenWidth={screenWidth} />
            </Route>
            <Route path="/burgers" exact>
              <Burgers screenWidth={screenWidth} />
            </Route>
            <Route path="/salads" exact>
              <Salads screenWidth={screenWidth} />
            </Route>
            <Route path="/deserts" exact>
              <Deserts screenWidth={screenWidth} />
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
