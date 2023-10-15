import React, { useCallback, useContext, useRef, useState } from 'react';

import debounce from 'lodash.debounce';

import style from './Search.module.scss';
import { MyContext } from '../../App';

const Search = () => {
  const [value, setValue] = useState('');

  const { searchValue, setSearchValue } = useContext(MyContext);

  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue(''), setValue('');
    inputRef.current.focus();
  };

  const updateSearch = useCallback(
    debounce((str) => {
      setSearchValue(str), console.log(str);
    }, 1000),
    [],
  );

  const onTestDebounce = (event) => {
    setValue(event.target.value), updateSearch(event.target.value);
  };

  return (
    <div className={style.root}>
      <svg className={style.searchicon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onTestDebounce}
        className={style.search}
        placeholder="Поиск.."
      />
      {value && <svg onClick={onClickClear} className={style.iconTrash} />}
    </div>
  );
};

export default Search;
