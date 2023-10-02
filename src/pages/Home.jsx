import React, { useEffect, useState } from 'react';

import Categor from './../components/Categor';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6516b50209e3260018ca2dff.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categor />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Skeleton title="Мексиканская" price={500} />
        <PizzaBlock test="222" title="Test" price="350" />
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((object) => (
              <PizzaBlock
                key={object.id}
                title={object.title}
                price={object.price}
                imgUrl={object.img}
                sizes={object.sizes}
                types={object.types}
              />
            ))}
        {/* {items.map((object) => (
              <PizzaBlock
                key={object.id}
                title={object.title}
                price={object.price}
                imgUrl={object.img}
                sizes={object.sizes}
                types={object.types}
              />
            ))} */}
      </div>
    </>
  );
};

export default Home;
