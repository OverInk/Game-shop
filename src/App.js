import React from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categor from './components/Categor';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import games from './assets/img/games.json';

function App() {

	fetch('https://6516b50209e3260018ca2dff.mockapi.io/items').then((res) => {
		console.log('OTVET', res)
	})

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categor />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock test="222" title="Test" price="350" />
            {games.map((object) => (
              <PizzaBlock key={object.id}
                title={object.title}
                price={object.price}
                imgUrl={object.img}
                sizes={object.sizes}
                types={object.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
