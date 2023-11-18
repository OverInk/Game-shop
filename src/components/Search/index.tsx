import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filter/slice';

import style from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    //  if (inputRef.current) {
    // 	inputRef.current.focus();
    //  }
    inputRef.current?.focus();
  };

  const updateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onTestDebounce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={style.root}>
      <svg className={style.searchicon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onTestDebounce}
        className={style.search}
        placeholder="Поиск игры.."
      />
      {value && <svg onClick={onClickClear} className={style.iconTrash} />}
    </div>
  );
};

export default Search;
