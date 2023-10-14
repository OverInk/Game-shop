import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Categor from './../components/Categor';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { MyContext } from '../App';

import { setCategorId, setCurrentPage } from './../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const categorId = useSelector((state) => state.filter.categorId);
  const sort = useSelector((state) => state.filter.sort);
  const currentPage = useSelector((state) => state.filter.currentPage);

  console.log(categorId);

  const onChangeCategor = (id) => {
    console.log(id);
  };

  const { searchValue } = useContext(MyContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Глобальный стейт(state), чтобы делать сразу сортировку
  //и по категориям, и по цене/популярности/алфавиту
  //   const [categorId, setCategorId] = useState(0);
  //   const [sort, setSort] = useState({
  //     nameList: 'цене',
  //     sortProps: 'price',
  //   });

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);
    //  fetch(
    //    `https://6516b50209e3260018ca2dff.mockapi.io/items?page=1&limit=2${
    //      categorId > 0 ? `category=${categorId}` : ''
    //    }&sortBy=${sort.sortProps}&order=desc`,
    //  )
    //    .then((res) => {
    //      return res.json();
    //    })
    //    .then((arr) => {
    //      setItems(arr);
    //      setIsLoading(false);
    //    });

    axios
      .get(
        `https://6516b50209e3260018ca2dff.mockapi.io/items?page=${currentPage}&limit=3${categorId}&sortBy=${sort}&order=${order}${searchValue}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categorId, sort.sortProps, searchValue, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categor valueCategor={categorId} onChangeCategor={onChangeCategor} />
        <Sort valueSort={sort} onChangeSort={(id) => setSort(id)} />
      </div>
      <h2 className="content__title">Все games</h2>
      <div className="content__items">
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
                  skills={object.skills}
                  sizes={object.sizes}
                  types={object.types}
                />
              ))}
      </div>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
