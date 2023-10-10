import React, { useEffect, useState } from 'react';
import './scss/app.scss';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/filterSlice';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewCard from './pages/NewCard';

export const MyContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const count = useSelector((state) => state.counter.myfilter);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      {/* <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div> */}

      <MyContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<NewCard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
}
export default App;
