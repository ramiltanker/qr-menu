import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
// Redux

// Components
import Pizza from './components/Pizza/Pizza';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import FirstCourses from './components/FirstCourses/FirstCourses';
import SecondCourses from './components/SecondCourses/SecondCourses';
import Burgers from './components/Burgers/Burgers';
import Salads from './components/Salads/Salads';
import WarmSalads from './components/WarmSalads/WarmSalads';
import Deserts from './components/Desserts/Desserts';
import ItalianPies from './components/ItalianPies/ItalianPies';
import Focaccia from './components/Focaccia/Focaccia';
import Bread from './components/Bread/Bread';
import Snacks from './components/Snacks/Snacks';
import Fries from './components/Fries/Fries';
import Sauces from './components/Sauces/Sauces';
import Pasta from './components/Pasta/Pasta';
import SideDishes from './components/SideDishes/SideDishes';
import BarMenu from './components/BarMenu/BarMenu';
import Wines from './components/Wines/Wines';
import SoftDrinks from './components/SoftDrinks/SoftDrinks';
import BeerSnacks from './components/BeerSnacks/BeerSnacks';
import Tea from './components/Tea/Tea';
import Coffee from './components/Coffee/Coffee';
import ForTea from './components/ForTea/ForTea';
import Main from './components/Main/Main';

import Preloader from './components/Preloader/Preloader';
// Components

import './transition.css';

function App() {
  const [isLoaderActive, setIsLoaderActive] = React.useState(true);
  const [isTextActive, setIsTextActive] = React.useState(true);

  const history = useHistory( );
  const location = useLocation();

  // Ширина экрана
  const [screenWidth, setScreenWidth] = React.useState(0);

  function updateScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  React.useEffect(() => {
    history.push('/');
  }, []);

  React.useEffect(() => {
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
        <Preloader
          setIsLoaderActive={setIsLoaderActive}
          isLoaderActive={isLoaderActive}
          setIsTextActive={setIsTextActive}
          isTextActive={isTextActive}
        />
      ) : (
        <>
          <Header />
          <Filter screenWidth={screenWidth} />
          <Switch location={location}>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/first-courses" exact>
              <FirstCourses screenWidth={screenWidth} />
            </Route>
            <Route path="/second-courses/:dish" exact>
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
            <Route path="/warm-salads" exact>
              <WarmSalads screenWidth={screenWidth} />
            </Route>
            <Route path="/desserts" exact>
              <Deserts screenWidth={screenWidth} />
            </Route>
            <Route path="/italian-pies" exact>
              <ItalianPies screenWidth={screenWidth} />
            </Route>
            <Route path="/focaccia" exact>
              <Focaccia screenWidth={screenWidth} />
            </Route>
            <Route path="/bread" exact>
              <Bread screenWidth={screenWidth} />
            </Route>
            <Route path="/snacks" exact>
              <Snacks screenWidth={screenWidth} />
            </Route>
            <Route path="/fries" exact>
              <Fries screenWidth={screenWidth} />
            </Route>
            <Route path="/sauces" exact>
              <Sauces screenWidth={screenWidth} />
            </Route>
            <Route path="/pasta" exact>
              <Pasta screenWidth={screenWidth} />
            </Route>
            <Route path="/side-dishes" exact>
              <SideDishes screenWidth={screenWidth} />
            </Route>
            <Route path="/bar-menu/:barDrink" exact>
              <BarMenu screenWidth={screenWidth} />
            </Route>
            <Route path="/bar-menu/wines/:wineType" screenWidth={screenWidth} exact>
              <Wines screenWidth={screenWidth} />
            </Route>
            <Route path="/soft-drinks/:softDrink" exact>
              <SoftDrinks screenWidth={screenWidth} />
            </Route>
            <Route path="/beer-snacks" exact>
              <BeerSnacks screenWidth={screenWidth} />
            </Route>
            <Route path="/tea" exact>
              <Tea screenWidth={screenWidth} />
            </Route>
            <Route path="/coffee" exact>
              <Coffee screenWidth={screenWidth} />
            </Route>
            <Route path="/for-tea" exact>
              <ForTea screenWidth={screenWidth} />
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
