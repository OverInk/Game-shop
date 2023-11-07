import React, { useEffect, useRef } from 'react';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import {
  FilterSliceState,
  setCategorId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import Categor from '../components/Categor';
import Sort, { listSpisok } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchGamesParams, fetchGamesAsync, selectGamesData } from '../redux/slices/gamesSlice';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSeach = useRef(false);
  const isMounted = useRef(false);
  const categorId = useSelector((state: any) => state.filter.categorId);
  const sort = useSelector((state: any) => state.filter.sort);
  const currentPage = useSelector((state: any) => state.filter.currentPage);
  const searchValue = useSelector((state: any) => state.filter.searchValue);

  const { items, status } = useSelector(selectGamesData);

  //   const [isLoading, setIsLoading] = useState(true);

  const onChangeCategor = (id: number) => {
    dispatch(setCategorId(id));
  };

  const fetchGames = async () => {
    //  setIsLoading(true);
    //  fetch(
    //    `https://6516b50209e3260018ca2dff.mockapi.io/items?page=1&limit=2${
    //      categorId > 0 ? `category=${categorId}` : ''
    //    }&sortBy=${sort.sortProps}&order=desc`,
    //  )

    //  axios
    //    .get(
    //      `https:-6516b50209e3260018ca2dff.mockapi.io/items?page=${currentPage}&limit=3${
    //        categorId > 0 ? `category=${categorId}` : ''
    //      }&sortBy=${sort.sortProps}&order=desc`,
    //    )
    //    .then((res) => {
    //      setItems(res.data);
    //      setIsLoading(false);
    //      console.log('проверка await');
    //    })
    //    .catch((err) => {
    //      console.log(err, 'AXIOS error');
    //      setIsLoading(false);
    //    });

    //  const res = await axios.get(
    //    `https://6516b50209e3260018ca2dff.mockapi.io/items?page=${currentPage}&limit=3${
    //      categorId > 0 ? `category=${categorId}` : ''
    //    }&sortBy=${sort.sortProps}&order=desc`,
    //  );
    //  setItems(res.data);
    //  setIsLoading(false);

    const sortBy = sort.sortProps;
    dispatch(
      fetchGamesAsync({
        sortBy,
        categorId,
        currentPage,
      }),
    );

    window.scrollTo(0, 0);
  };
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProps: sort.sortProps,
        categorId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
    fetchGames();
  }, [categorId, sort.sortProps, searchValue, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as SearchGamesParams;
      const sort = listSpisok.find((obj) => obj.sortProps === params.sortBy);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSeach.current = true;
    }
  }, []);

  useEffect(() => {
    if (isSeach.current) {
      fetchGames();
    }

    //  isSeach.current = false;
  }, [categorId, sort.sortProps, searchValue, currentPage]);

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="content__top">
        <Categor valueCategor={categorId} onChangeCategor={onChangeCategor} />
        <Sort valueSort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h2>Игры пустые</h2>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items?.map((object: any) => (
                <Link key={object.id} to={`/game/${object.id}`}>
                  <PizzaBlock
                    id={object.id}
                    title={object.title}
                    price={object.price}
                    imgUrl={object.img}
                    skills={object.skills}
                    sizes={object.sizes}
                    types={object.types}
                  />
                </Link>
              ))}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
