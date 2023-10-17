import React, { useContext, useEffect, useState, useRef } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { setCategorId, setCurrentPage, setFilters } from './../redux/slices/filterSlice';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Categor from './../components/Categor';
import Sort, { listSpisok } from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { MyContext } from '../App';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSeach = useRef(false);
  const isMounted = useRef(false);
  const categorId = useSelector((state) => state.filter.categorId);
  const sort = useSelector((state) => state.filter.sort.sortProps);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const { searchValue } = useContext(MyContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategor = (id) => {
    dispatch(setCategorId(id));
  };

  const fetchGames = () => {
    setIsLoading(true);
    //  fetch(
    //    `https://6516b50209e3260018ca2dff.mockapi.io/items?page=1&limit=2${
    //      categorId > 0 ? `category=${categorId}` : ''
    //    }&sortBy=${sort.sortProps}&order=desc`,
    //  )

    axios
      .get(
        `https://6516b50209e3260018ca2dff.mockapi.io/items?page=${currentPage}&limit=3${
          categorId > 0 ? `category=${categorId}` : ''
        }&sortBy=${sort.sortProps}&order=desc`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    //  if (isMounted.current) {
    //    const queryString = qs.stringify({
    //      sortProps: sort.sortProps,
    //      categorId,
    //      currentPage,
    //    });

    //    navigate(`?${queryString}`);
    //  }
    //  isMounted.current = true;
    fetchGames();
  }, [categorId, sort.sortProps, searchValue, currentPage]);

  //   useEffect(() => {
  //     if (window.location.search) {
  //       const params = qs.parse(window.location.search.substring(1));
  //       const sort = listSpisok.find((obj) => obj.sortProps === params.sortProps);
  //       dispatch(
  //         setFilters({
  //           ...params,
  //           sort,
  //         }),
  //       );
  //       isSeach.current = true;
  //     }
  //   }, []);

  useEffect(() => {
    if (isSeach.current) {
      fetchGames();
    }

    isSeach.current = false;
  }, [categorId, sort.sortProps, searchValue, currentPage]);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="content__top">
        <Categor valueCategor={categorId} onChangeCategor={onChangeCategor} />
        <Sort valueSort={sort} />
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
                  skills={object.skills}
                  sizes={object.sizes}
                  types={object.types}
                />
              ))}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
