import React from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categor from './components/Categor';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <div className="lvl1">
        <div className="lvl2">
          <ul className="lvl3">
            <li className="lvl4">TEXT info</li>
            <li className="lvl4">TEXT curren</li>
            <li className="lvl4">TEXT nn</li>
          </ul>
        </div>
      </div>
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categor />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock test="222" title="Test" price="350" />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
