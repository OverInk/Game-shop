import React, { useContext, useEffect, useState } from 'react';

import Categor from './../components/Categor';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { MyContext } from '../App';

const Home = () => {
  const { searchValue } = useContext(MyContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Глобальный стейт(state), чтобы делать сразу сортировку
  //и по категориям, и по цене/популярности/алфавиту
  const [categorId, setCategorId] = useState(0);
  const [sort, setSort] = useState({
    nameList: 'цене',
    sortProps: 'price',
  });

  const [currentPage, setCurrentPage] = useState(1);

  console.log(sort);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6516b50209e3260018ca2dff.mockapi.io/items?page=1&limit=2${
        categorId > 0 ? `category=${categorId}` : ''
      }&sortBy=${sort.sortProps}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categorId, sort, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categor valueCategor={categorId} onChangeCategor={(id) => setCategorId(id)} />
        <Sort valueSort={sort} onChangeSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Skeleton title="Мексиканская" price={500} />
        <PizzaBlock test="222" title="Test" price="350" />
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((object) => {
                if (object.title.toLowerCase().includes(searchValue.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((object) => (
                <PizzaBlock
                  key={object.id}
                  title={object.title}
                  price={object.price}
                  imgUrl={object.img}
                  sizes={object.sizes}
                  types={object.types}
                />
              ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
